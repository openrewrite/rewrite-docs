# TreeVisitingPrinter

When you first begin to look into [Lossless Semantic Trees](/concepts-and-explanations/lossless-semantic-trees.md) (LSTs), it can be difficult to understand what code corresponds to what LST. You _could_ use a debugger to step through the tree, but that can take a lot of time and it's easy to get lost in irrelevant elements.

Fortunately, in OpenRewrite `7.35.0`, a new option was created: the [TreeVisitingPrinter](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/TreeVisitingPrinter.java). Utilizing this, you can inject a snippet of code into your Java recipe (or use the debugger to run a command) and quickly see how certain code translates to specific LSTs.

This guide will walk through the different ways you can use the `TreeVisitingPrinter` to get a visual representation of the LST for your code.

## Prerequisites

This guide assumes that you:

* Are familiar with writing Java
* Have already set up your [Recipe Development Environment](/authoring-recipes/recipe-development-environment.md)
* Are using at least [OpenRewrite](https://github.com/openrewrite/rewrite) version `7.35.0` or [Rewrite-Recipe-Bom](https://github.com/openrewrite/rewrite-recipe-bom) version `2.0.7`

## Using TreeVisitingPrinter.printTree 

There are two ways you can access the visual representation of the LST for some code: 

1. Add a snippet of code to your recipe OR 
2. Add a breakpoint in your recipe and enter a manual command when the breakpoint is hit

Let's walk through both of these.

### Adding code to your recipe

Inside of any `visit<LST>` method in a visitor (such as `visitVariableDeclarations` or `visitCompilationUnit`), add this line of code: 

```java
System.out.println(TreeVisitingPrinter.printTree(getCursor()));
```

Then, when you run your tests, you will see the visual representation of the LST in the console. 

If you don't have a recipe to use or if you want to grab a simple one to start with, check out the [example](#example) below.

### Using the debugger

1. Inside of any `visit<LST>` method in a visitor (such as `visitVariableDeclarations` or `visitCompilationUnit`), add a breakpoint.
2. Trigger the debugger by debugging a test that will reach your breakpoint.
3. Once your breakpoint is hit, type `TreeVisitingPrinter.printTree(getCursor())` into the `Evaluate expression` prompt and press enter.
4. You should see a `result` appear. You can press `view` to get a pop-up of the LST in your IDE or you could copy it to another text editor for use in the future.

![Entering the printTree expression](/.gitbook/assets/TVPExpression.png)

![LST result](/.gitbook/assets/TVPResult.png)

## Example

Let's imagine that you wanted to see what the LST looked like for this code: 

```java
class A {
    void test() {
        int a;
        a = 0;
    }
}
```

To begin, you will need a recipe you can modify and run. Here is a simple recipe you can use that does nothing other than utilize the `TreeVisitingPrinter`:

```java
package com.yourorg;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.TreeVisitingPrinter;
import org.openrewrite.java.tree.J;

public class SomeRecipe extends Recipe {
    @Override
    public String getDisplayName() {
        return "Some display name";
    }

    @Override
    public JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.CompilationUnit visitCompilationUnit(J.CompilationUnit compUnit, ExecutionContext executionContext) {
                // This next line could be omitted in favor of a breakpoint
                // if you'd prefer to use the debugger instead.
                System.out.println(TreeVisitingPrinter.printTree(getCursor()));
                return super.visitCompilationUnit(compUnit, executionContext);
            }
        };
    }
}
```

Once you have that recipe, you would then write a test that includes the snippet of code you care about:

```java
@Test
void someTest() {
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
```

From there, if you ran that test, you would see this in your console:

```
----J.CompilationUnit
    \---J.ClassDeclaration
        |---J.Identifier | "A"
        \---J.Block
            \-------J.MethodDeclaration | "MethodDeclaration{A{name=test,return=void,parameters=[]}}"
                    |---J.Primitive | "void"
                    |---J.Identifier | "test"
                    |-----------J.Empty
                    \---J.Block
                        |-------J.VariableDeclarations | "int a"
                        |       |---J.Primitive | "int"
                        |       \-------J.VariableDeclarations.NamedVariable | "a"
                        |               \---J.Identifier | "a"
                        \-------J.Assignment | "a = 0"
                                |---J.Identifier | "a"
                                \-------J.Literal
```

You could then use this tree to help make key decisions about your recipe and what LSTs it should handle. For instance, if you saw `int l = ~k;` in some code, but were unsure what `~` was, you could use this printer to find out that it's a `J.Unary`.

## Limitations

The `TreeVisitingPrinter` skips unvisited elements such as `JRightPadded` or `JLeftPadded` that you might see if you traced through the tree yourself. This is done to make the visual easier to understand - but it's important to know that it will not perfectly match the actual OpenRewrite LST.