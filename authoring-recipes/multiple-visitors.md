# Creating multiple visitors in one recipe

As you begin to write increasingly complex recipes, you will find that it is often necessary to have more than one visitor. This is because significant changes often require you to visit many types of [Lossless Semantic Trees](/concepts-and-explanations/lossless-semantic-trees.md) (LSTs) to figure out whether or not a change should be made.

For instance, let's say that you wanted to write a recipe that adds the `final` modifier to any local variables that aren't reassigned. To do that, you would first need to make a visitor that visits all of the `VariableDeclarations` and runs some checks on them (such as determining if they already have the `final` modifier). Once you found all potential variables, you would then need to visit all of the places they could be used to see if they are reassigned. If they were reassigned, you would need to keep track of that across visits, too. Both of those issues can be solved by adding a second visitor to your recipe.

To help you understand how to create and use multiple visitors in a single recipe, this guide will walk through the creation of the `FinalizeLocalVariables` recipe described above. While doing so, you will also learn how to better approach creating complex recipes.

## Prerequisites

This guide assumes that you:

* Have a strong Java background
* Have already set up your [Recipe Development Environment](./recipe-development-environment.md)
* Are familiar with recipe creation (via working through the [Writing a Java refactoring recipe](/authoring-recipes/writing-a-java-refactoring-recipe.md) and [Modifying methods with JavaTemplate](/authoring-recipes/modifying-methods-with-javatemplate.md) guides)

## Figure out what the recipe should do

When creating complex recipes, usually the most difficult part is thinking through all of the potential test cases. This is where a deep knowledge of the language you're working with comes into play.

For instance, let's think through variables in Java. Variables could be:

* Initialized or uninitialized
* Defined or modified in a loop
* Instance variables or class variables
* Named the same thing, but be in different scopes
* Created in a catch block
* Created in a method declaration
* Lambda variables
* Used in combination with a unary operator
* Inside nested blocks
* Declared on the same line

Those are just _some_ of the situations that would be useful to consider when making this `FinalizeLocalVariables` recipe. With so many possibilities, it's quite easy to miss something. That's why you should do your best to ensure your recipe [does no harm](/authoring-recipes/recipe-conventions-and-best-practices.md#do-no-harm) by limiting the scope and focusing on specific use cases. It's much better to have a recipe with a smaller scope than it is to have one that potentially breaks code.

### Limiting scope

For this guide, let's say that we _will not_ add a `final` modifier to variables if they: 

* Already have the `final` modifier
* Are reassigned
* Are uninitialized
* Are for loop control variables
* Are instance or class variables
* Are in a catch block
* Are declared in static initializers
* Are declared in method parameters
* Are lambdas

This will help ensure that our recipe is not overly complex, while still providing a reasonable challenge.

## Outline the recipe

With the general idea of our recipe figured out, let's outline our recipe so we can get started with the tests:

```java
package com.yourorg;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.java.JavaIsoVisitor;

public class FinalizeLocalVariables extends Recipe {
    @Override
    public String getDisplayName() {
        return "Finalize local variables";
    }

    @Override
    public String getDescription() {
        return "Adds the `final` modifier keyword to local variables which are not reassigned.";
    }

    @Override
    public JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            // TODO: Implement the visitor
        };
    }
}
```

## Writing tests

Before you write the core logic of your recipe, you should spend a considerable amount of time writing the tests. By taking the time, now, to think through all of the possible edge cases, you will find that writing the recipe and corresponding visitors is significantly easier.

### Variables that will not change

Let's start by writing tests for all of the situations where we [will not change a variable](#limiting-scope):

```java
package com.yourorg;

import org.junit.jupiter.api.Test;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;

public class FinalizeLocalVariablesTest implements RewriteTest {
    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(new FinalizeLocalVariables());
    }

    @Test
    void doesNotModifyUninitializedVariables() {
        rewriteRun(
            java(
                """
                    class A {
                        void test() {
                            int a;
                            a = 0;
                        }
                    }
                    """
            )
        );
    }

    @Test
    void doesNotModifyLoopControlVariables() {
        rewriteRun(
            java(
                """
                    class A {
                        void test() {
                            for (int i = 0; i < 100; i++) {
                                System.out.println(i);
                            }
                        }
                    }
                    """
            )
        );
    }

    // aka "non-static fields"
    @Test
    void doesNotModifyInstanceVariables() {
        rewriteRun(
            java(
                """
                    class A {
                        int instanceVariableUninitialized;
                        int instanceVariableInitialized = 0;
                    }
                    """
            )
        );
    }

    // aka "static fields"
    @Test
    void doesNotModifyClassVariables() {
        rewriteRun(
            java(
                """
                    class A {
                        static int classVariableInitialized = 0;
                    }
                    """
            )
        );
    }

    @Test
    void doesNotModifyVariablesInCatchBlocks() {
        rewriteRun(
            java(
                """
                    import java.io.IOException;

                    class Test {
                        static {
                            try {
                                throw new IOException();
                            } catch (RuntimeException | IOException e) {
                                System.out.println("oops");
                            }
                        }
                    }
                    """
            )
        );
    }

    @Test
    void doesNotModifyVariablesInStaticInitializers() {
        rewriteRun(
            java(
                """
                    class Test {
                        static {
                            int n = 1;
                            for(int i = 0; i < n; i++) {
                            }
                        }
                    }
                    """
            )
        );
    }

    @Test
    void doesNotModifyVariablesCreatedInMethodParameters() {
        rewriteRun(
            java(
                """
                    class Test {
                        private static int testMath(int x, int y) {
                            y = y + y;
                            return x + y;
                        }
                        
                        public static void main(String[] args) { }
                    }
                    """
            )
        );
    }

    @Test
    void doesNotModifyLambdaVariables() {
        rewriteRun(
            java(
                """
                    import java.util.stream.Stream;

                    class A {
                        public boolean hasFoo(Stream<String> input) {
                            return input.anyMatch(word -> word.equalsIgnoreCase("foo"));
                        }
                    }
                    """
            )
        );
    }
}
```

You might notice that there is no test in the above code that tests for variables that already have a `final` modifier on them. This is because the rewrite testing framework runs the tests in a loop. If the result changes as the recipe is run over and over again, the test will fail. In other words, if we make a test that ensures the `final` modifier is correctly added, we will inherently get a test to ensure that variables with the `final` modifier are not changed.

### Variables that will change

Now that we have some tests to ensure we aren't changing variables that shouldn't have the `final` modifier added to them, it's time to write the tests for cases where variables _should_ have the `final` modifier added.

Generally, for tests that expect changes, you should make them very specific and clear. People will often use these to understand what your recipe is doing. For our `FinalizeLocalVariables` recipe, some good examples of tests would be:

* Ensuring that a variable that is used, but not reassigned, is given the `final` modifier
* Ensuring that variables with the same name, but different scopes, are handled correctly
* Ensuring that unary operators still result in the `final` modifier being added (as they do not change the variable itself)

Here is what these tests might look like (feel free to write your own for practice):

```java
@Test
void localVariablesAreMadeFinal() {
    rewriteRun(
        java(
            """
                class A {
                    public void test() {
                        int n = 1;
                        for(int i = 0; i < n; i++) { }
                    }
                }
                """,
            """
                class A {
                    public void test() {
                        final int n = 1;
                        for(int i = 0; i < n; i++) { }
                    }
                }
                """
        )
    );
}

@Test
void localVariablesAreMadeFinalWithScopeAwareness() {
    rewriteRun(
        java(
            """
                class Test {
                    public static void testA() {
                        int a = 0;
                        a = 1;
                    }

                    public static void testB() {
                        int a = 0;
                    }
                }
                """,
            """
                class Test {
                    public static void testA() {
                        int a = 0;
                        a = 1;
                    }

                    public static void testB() {
                        final int a = 0;
                    }
                }
                """
        )
    );
}

@Test
void nonModifyingUnaryOperatorAwareness() {
    rewriteRun(
        java(
            """
                class Test {
                    void test() {
                        int i = 1;
                        int j = -i;
                        int k = +j;
                        int l = ~k;
                    }
                }
            """,
            """
                class Test {
                    void test() {
                        final int i = 1;
                        final int j = -i;
                        final int k = +j;
                        final int l = ~k;
                    }
                }
            """
        )
    );
}
```

### Complete test file

You can find the entire test file [here](https://gist.github.com/mike-solomon/b39e8c3549f3cd1b63f80de2853c8771).

{% hint style="success" %}
You should routinely run the tests to check your progress and make sure they are testing the appropriate behavior. If you ran the tests right now, you should see that all of the tests that start with the text `doesNotModify` pass, whereas all the tests that expect changes fail. This is expected as no code in the recipe has been written yet.
{% endhint %}

## Writing the recipe

With the tests created, it's now time to create the recipe. You should start by looking over the [Lossless Semantic Trees](/concepts-and-explanations/lst-examples.md) (LSTs) and determine which one(s) are needed for your recipe. 

As part of that, you might find that using the [TreeVisitingPrinter](/concepts-and-explanations/tree-visiting-printer.md) helps you narrow down what LSTs to examine. For instance, if you added the printer to the `FinalizeLocalVariables` recipe and ran the tests, you would see that the [VariableDeclarations LST](/concepts-and-explanations/lst-examples.md#variabledeclarations) is the LST you'd need to modify to add the `final` `J.Modifier` to.

Likewise, you would see that variables can be assigned or changed in LSTs such as `J.Assignment`, `J.AssignmentOperation`, and `J.Unary`.

![TreeVisitingPrinter example](/.gitbook/assets/TreeVisitingPrinterExample.png)

Using this printer, in combination with robust and thorough tests, can help ensure that you are handling all of the expected LSTs in your recipe.

### VariableDeclarations Visitor

Now that we have some ideas of which LSTs we care about, it's time to get started with making the first visitor in our recipe. This visitor will be the one responsible for finding, and potentially modifying, variables.

Generally, you want to start by restricting the scope of the visitor and returning quickly if the recipe should not make any changes.

Let's outline what that would look like:

{% hint style="note" %}
The `VariableDeclarations` LST contains all the variables defined on one line of code. In most cases, this will just be a single variable, but it is possible for many to be defined. Our visitor will need to handle both cases.
{% endhint %}

```java
// ...
public class FinalizeLocalVariables extends Recipe {
    // ...

    @Override
    public JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {

            @Override
            public J.VariableDeclarations visitVariableDeclarations(J.VariableDeclarations varDec, ExecutionContext executionContext) {
                J.VariableDeclarations variableDeclarations = super.visitVariableDeclarations(varDec, executionContext);

                // TODO: Return if the varDec already has the final modifier

                // TODO: Return if any variables in the varDec are uninitialized

                // TODO: Return if the varDec is in a for loop control

                // TODO: Return if the varDec is an instance or class variable

                // TODO: If none of the above apply, find all use cases for the variables and determine whether or not they're reassigned. If none have been, add the final modifier. If one ore more has, do nothing.

                return variableDeclarations;
            }
        };
    }
}
```

{% hint style="warning" %}
In most cases, your recipe should call `super.visitSomeLST()` at the beginning of the overridden method. This allows OpenRewrite to traverse into sub-elements of the LST you're visiting. In the above recipe, if we didn't call super, the recipe would fail to add the `final` modifier to the `c` variable in [this code](https://gist.github.com/mike-solomon/cdb8cb02a64f016ef225bf03a4d25bd1) as it would never visit the sub-elements of `a`.
{% endhint %}

When implementing the body of the visitor, you may find that the LST you're working with has all of the relevant information contained in it. For instance, the first two tasks in the above visitor can be implemented without diving into other LSTs:

```java
@Override
public JavaIsoVisitor<ExecutionContext> getVisitor() {
    return new JavaIsoVisitor<ExecutionContext>() {

        @Override
        public J.VariableDeclarations visitVariableDeclarations(J.VariableDeclarations varDec, ExecutionContext executionContext) {
            J.VariableDeclarations variableDeclarations = super.visitVariableDeclarations(varDec, executionContext);
            
            // If the varDec already has a "final" modifier, we don't need to check anything else
            if (variableDeclarations.hasModifier(J.Modifier.Type.Final)) {
                return variableDeclarations;
            }

            // Uninitialized local variables should not be considered
            if (variableDeclarations.getVariables().stream().anyMatch(namedVariable -> namedVariable.getInitializer() == null)) {
                return variableDeclarations;
            }

            // TODO: Return if the varDec is in a for loop control

            // TODO: Return if the varDec is an instance or class variable

            // TODO: If none of the above apply, find all use cases for the variable and determine whether or not it's reassigned. If it hasn't been, add the final modifier. If it has, do nothing.

            return variableDeclarations;
        }
    };
}
```

Other cases, such as the next two items in our list, will require looking at the broader LST via [Cursors](/concepts-and-explanations/visitors.md#cursoring). Cursors allow you to move around the LST and obtain information outside of the LST you're currently visiting. For example, we could check if the parent object is a for-loop control, method declaration, or class declaration:

```java
public class FinalizeLocalVariables extends Recipe {
    // ...

    @Override
    public JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {

            @Override
            public J.VariableDeclarations visitVariableDeclarations(J.VariableDeclarations varDec, ExecutionContext executionContext) {
                // ...

                // Variables that are in a for loop control should not be changed
                if (isDeclaredInForLoopControl(getCursor())) {
                    return variableDeclarations;
                }

                // Fields should not be changed (aka "instance variables" and "class variables")
                if (variableDeclarations.getVariables().stream().anyMatch(namedVariable -> namedVariable.isField(getCursor()) || isField(getCursor()))) {
                    return variableDeclarations;
                }

                // TODO: If none of the above apply, find all use cases for the variable and determine whether or not it's reassigned. If it hasn't been, add the final modifier. If it has, do nothing.

                return variableDeclarations;
            }
        };
    }

    private boolean isDeclaredInForLoopControl(Cursor cursor) {
        return cursor.getParentTreeCursor()
                .getValue() instanceof J.ForLoop.Control;
    }

    private boolean isField(Cursor cursor) {
        return cursor.dropParentUntil(parent -> parent instanceof J.ClassDeclaration || parent instanceof J.MethodDeclaration)
                .getValue() instanceof J.ClassDeclaration;
    }
}
```

We've now reached the last item on our list, but we've come to a bit of a predicament. How can we know if any of the variables defined in this `VariableDeclarations` LST are reassigned? That information isn't available in the current LST and trying to use a cursor for this would be nearly impossible.

Fortunately, recipes can define many visitors. Another visitor could traverse through a subtree with the same scope as the variables we care about to determine if they've been reassigned or not. If any were reassigned, then we would return without making any changes. However, if none of them were changed, then we could safely add the `final` modifier to our `VariableDeclarations` LST.

### FindAssignmentReferencesToVariable visitor

Before we go about coding this second visitor, let's take the time to think through all of the pieces that are needed.

We need a visitor that:

* Takes in and saves all of the necessary information to identify whether or not a variable it is visiting matches the one provided by the other visitor.
* Takes in a tree to visit that is scoped to only the areas where the variable can be reassigned (to increase speed and to ensure we can accurately detect changes to a variable).
* Keeps track of whether or not said variable has been reassigned. This state needs to be accessible and modifiable in all of the visit functions.
* Provides a way for our other visitor to access the above state.

To address these needs, let's create a `static` visitor that extends `JavaIsoVisitor` and uses an `AtomicBoolean` as its type. We can then add a final `J.VariableDeclarations.NamedVariable` object to this visitor. Lastly, we can create a `find` function that takes in the necessary information to set this up and returns a new instance of this visitor:

{% hint style="info" %}
You _do not_ need to worry about thread safety with the type that you use in your visitor. In our case, we chose to use an `AtomicBoolean` simply because it's a mutable boolean object.
{% endhint %}

```java
@Value
    @EqualsAndHashCode(callSuper = true)
    private static class FindAssignmentReferencesToVariable extends JavaIsoVisitor<AtomicBoolean> {

        J.VariableDeclarations.NamedVariable variable;

        /**
         * @param subtree   The subtree to search.
         * @param variable  A {@link J.VariableDeclarations.NamedVariable} to check for any reassignment calls.
         * @return An {@link AtomicBoolean} that is true if the variable has been reassigned and false otherwise.
         */
        static AtomicBoolean find(J subtree, J.VariableDeclarations.NamedVariable variable) {
            return new FindAssignmentReferencesToVariable(variable)
                    .reduce(subtree, new AtomicBoolean());
        }

        // TODO: Implement visit methods
    }
```

The `reduce` function traverses over the provided tree and passes the second parameter into all of the visit methods (such as `visitAssignment()`). These methods can then access and modify this object as necessary. In our visitor, once the entire tree has been traversed, anyone calling the `find` method can call `get()` to access the value of the `AtomicBoolean` object.

Below you can see how we can add visit methods that access and potentially modify this object to meet the needs of our recipe:

```java
public class FinalizeLocalVariables extends Recipe {
    // Other visitor

    @Value
    @EqualsAndHashCode(callSuper = true)
    private static class FindAssignmentReferencesToVariable extends JavaIsoVisitor<AtomicBoolean> {

        J.VariableDeclarations.NamedVariable variable;

        /**
         * @param j        The subtree to search.
         * @param variable A {@link J.VariableDeclarations.NamedVariable} to check for any reassignment calls.
         * @return An {@link AtomicBoolean} that is true if the variable has been reassigned and false otherwise.
         */
        static AtomicBoolean find(J j, J.VariableDeclarations.NamedVariable variable) {
            return new FindAssignmentReferencesToVariable(variable)
                    .reduce(j, new AtomicBoolean());
        }

        @Override
        public J.Assignment visitAssignment(J.Assignment a, AtomicBoolean hasAssignment) {
            // Return quickly if the variable has been reassigned before
            if (hasAssignment.get()) {
                return a;
            }

            J.Assignment assignment = super.visitAssignment(a, hasAssignment);

            if (assignment.getVariable() instanceof J.Identifier) {
                J.Identifier identifier = (J.Identifier) assignment.getVariable();

                if (identifier.getSimpleName().equals(variable.getSimpleName())) {
                    hasAssignment.set(true);
                }
            }

            return assignment;
        }

        @Override
        public J.AssignmentOperation visitAssignmentOperation(J.AssignmentOperation assignOp, AtomicBoolean hasAssignment) {
            if (hasAssignment.get()) {
                return assignOp;
            }

            J.AssignmentOperation assignmentOperation = super.visitAssignmentOperation(assignOp, hasAssignment);

            if (assignmentOperation.getVariable() instanceof J.Identifier) {
                J.Identifier identifier = (J.Identifier) assignmentOperation.getVariable();

                if (identifier.getSimpleName().equals(variable.getSimpleName())) {
                    hasAssignment.set(true);
                }
            }

            return assignmentOperation;
        }

        @Override
        public J.Unary visitUnary(J.Unary u, AtomicBoolean hasAssignment) {
            if (hasAssignment.get()) {
                return u;
            }

            J.Unary unary = super.visitUnary(u, hasAssignment);

            if (unary.getOperator().isModifying() && unary.getExpression() instanceof J.Identifier) {
                J.Identifier identifier = (J.Identifier) unary.getExpression();

                if (identifier.getSimpleName().equals(variable.getSimpleName())) {
                    hasAssignment.set(true);
                }
            }

            return unary;
        }
    }
}
```

## Combining the visitors

With our `FindAssignmentReferencesToVariable` visitor created, we can now go about using it. If we iterate over all of the variables in the `VariableDeclarations` LST we're examining and find that none of them have been reassigned, then we can add the `final` modifier to our `VariableDeclarations` LST:

```java
@Override
public J.VariableDeclarations visitVariableDeclarations(J.VariableDeclarations varDec, ExecutionContext executionContext) {
    // ...

    if (variableDeclarations.getVariables().stream()
            .noneMatch(namedVariable ->
                    FindAssignmentReferencesToVariable.find(getCursor()
                                            .getParentTreeCursor()
                                            .getValue(),
                                    namedVariable)
                            .get())) {
        variableDeclarations = autoFormat(
                variableDeclarations.withModifiers(
                        ListUtils.concat(variableDeclarations.getModifiers(), new J.Modifier(Tree.randomId(), Space.EMPTY, Markers.EMPTY, J.Modifier.Type.Final, Collections.emptyList()))
                ), executionContext);
    }

    return variableDeclarations;
}
```

{% hint style="warning" %}
Generally, you [should not create LST elements by hand](/authoring-recipes/recipe-conventions-and-best-practices.md#avoid-constructing-lst-elements-by-hand). However, in extremely simple cases such as adding a modifier, it is acceptable to do so.
{% endhint %}

If you run all of the tests now, they should pass.

## Complete recipe

```java
package com.yourorg;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.Cursor;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.Tree;
import org.openrewrite.internal.ListUtils;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.TreeVisitingPrinter;
import org.openrewrite.java.tree.J;
import org.openrewrite.java.tree.Space;
import org.openrewrite.marker.Markers;

import java.util.Collections;
import java.util.concurrent.atomic.AtomicBoolean;

public class FinalizeLocalVariables extends Recipe {

    @Override
    public String getDisplayName() {
        return "Finalize local variables";
    }

    @Override
    public String getDescription() {
        return "Adds the `final` modifier keyword to local variables which are not reassigned.";
    }

    @Override
    public JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.VariableDeclarations visitVariableDeclarations(J.VariableDeclarations varDec, ExecutionContext executionContext) {
                J.VariableDeclarations variableDeclarations = super.visitVariableDeclarations(varDec, executionContext);

                // If the varDec already has a "final" modifier, we don't need to check anything else
                if (variableDeclarations.hasModifier(J.Modifier.Type.Final)) {
                    return variableDeclarations;
                }

                // If any variable is uninitialized, we should make no changes
                if (variableDeclarations.getVariables().stream().anyMatch(namedVariable -> namedVariable.getInitializer() == null)) {
                    return variableDeclarations;
                }

                // If the varDec is in a for loop control, we should make no changes
                if (isDeclaredInForLoopControl(getCursor())) {
                    return variableDeclarations;
                }

                // Fields should not be changed (aka "instance variables" and "class variables")
                if (variableDeclarations.getVariables().stream().anyMatch(namedVariable -> namedVariable.isField(getCursor()) || isField(getCursor()))) {
                    return variableDeclarations;
                }

                if (variableDeclarations.getVariables().stream()
                        .noneMatch(namedVariable ->
                                FindAssignmentReferencesToVariable.find(getCursor()
                                                        .getParentTreeCursor()
                                                        .getValue(),
                                                namedVariable)
                                        .get())) {
                    variableDeclarations = autoFormat(
                            variableDeclarations.withModifiers(
                                    ListUtils.concat(variableDeclarations.getModifiers(), new J.Modifier(Tree.randomId(), Space.EMPTY, Markers.EMPTY, J.Modifier.Type.Final, Collections.emptyList()))
                            ), executionContext);
                }

                return variableDeclarations;
            }
        };
    }


    private boolean isDeclaredInForLoopControl(Cursor cursor) {
        return cursor.getParentTreeCursor()
                .getValue() instanceof J.ForLoop.Control;
    }

    private boolean isField(Cursor cursor) {
        return cursor.dropParentUntil(parent -> parent instanceof J.ClassDeclaration || parent instanceof J.MethodDeclaration)
                .getValue() instanceof J.ClassDeclaration;
    }

    @Value
    @EqualsAndHashCode(callSuper = true)
    private static class FindAssignmentReferencesToVariable extends JavaIsoVisitor<AtomicBoolean> {

        J.VariableDeclarations.NamedVariable variable;

        /**
         * @param subtree   The subtree to search.
         * @param variable  A {@link J.VariableDeclarations.NamedVariable} to check for any reassignment calls.
         * @return An {@link AtomicBoolean} that is true if the variable has been reassigned and false otherwise.
         */
        static AtomicBoolean find(J subtree, J.VariableDeclarations.NamedVariable variable) {
            return new FindAssignmentReferencesToVariable(variable)
                    .reduce(subtree, new AtomicBoolean());
        }

        @Override
        public J.Assignment visitAssignment(J.Assignment a, AtomicBoolean hasAssignment) {
            // Return quickly if the variable has been reassigned before
            if (hasAssignment.get()) {
                return a;
            }

            J.Assignment assignment = super.visitAssignment(a, hasAssignment);

            if (assignment.getVariable() instanceof J.Identifier) {
                J.Identifier identifier = (J.Identifier) assignment.getVariable();

                if (identifier.getSimpleName().equals(variable.getSimpleName())) {
                    hasAssignment.set(true);
                }
            }

            return assignment;
        }

        @Override
        public J.AssignmentOperation visitAssignmentOperation(J.AssignmentOperation assignOp, AtomicBoolean hasAssignment) {
            if (hasAssignment.get()) {
                return assignOp;
            }

            J.AssignmentOperation assignmentOperation = super.visitAssignmentOperation(assignOp, hasAssignment);

            if (assignmentOperation.getVariable() instanceof J.Identifier) {
                J.Identifier identifier = (J.Identifier) assignmentOperation.getVariable();

                if (identifier.getSimpleName().equals(variable.getSimpleName())) {
                    hasAssignment.set(true);
                }
            }

            return assignmentOperation;
        }

        @Override
        public J.Unary visitUnary(J.Unary u, AtomicBoolean hasAssignment) {
            if (hasAssignment.get()) {
                return u;
            }

            J.Unary unary = super.visitUnary(u, hasAssignment);

            if (unary.getOperator().isModifying() && unary.getExpression() instanceof J.Identifier) {
                J.Identifier identifier = (J.Identifier) unary.getExpression();

                if (identifier.getSimpleName().equals(variable.getSimpleName())) {
                    hasAssignment.set(true);
                }
            }

            return unary;
        }
    }
}
```

## Next steps

Congratulations on making it through this guide! You now know how to approach and create a complex recipe with multiple visitors.

If you have further questions or need more help, please ask the team in [Slack](https://join.slack.com/t/rewriteoss/shared\_invite/zt-nj42n3ea-b\~62rIHzb3Vo0E1APKCXEA) or in [Discord](https://discord.gg/xk3ZKrhWAb).