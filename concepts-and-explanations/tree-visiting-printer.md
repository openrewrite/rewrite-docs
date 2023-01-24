# TreeVisitingPrinter

When you first begin to look into [Lossless Semantic Trees](/concepts-and-explanations/lossless-semantic-trees.md) (LSTs), it can be difficult to understand what code corresponds to what LST. You _could_ use a debugger to step through the tree, but that can take a lot of time and it's easy to get lost in irrelevant elements.

Fortunately, in OpenRewrite `7.35.0`, a new option was created: the [TreeVisitingPrinter](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/TreeVisitingPrinter.java). Utilizing this, you can inject a snippet of code into your Java recipe and quickly see how certain code translates to specific LSTs.

This guide will walk through the process of adding this to a recipe and running it to get a visual representation of the code.

## Prerequisites

This guide assumes that you:

* Are familiar with writing Java
* Have already set up your [Recipe Development Environment](/authoring-recipes/recipe-development-environment.md)
* Are using at least [OpenRewrite](https://github.com/openrewrite/rewrite) version `7.35.0` or [Rewrite-Recipe-Bom](https://github.com/openrewrite/rewrite-recipe-bom) version `1.14.0`

## Adding TreeVisitingPrinter to a recipe

To use the `TreeVisitingPrinter` to examine some code, the first thing you will need to do is add this code to a [visitor](/concepts-and-explanations/visitors.md) in a Java recipe:

```java
@Override
public J.CompilationUnit visitCompilationUnit(J.CompilationUnit cu, ExecutionContext executionContext) {
    System.out.println("------LST Start------");
    System.out.println(TreeVisitingPrinter.printTree(cu));
    System.out.println("------LST End------");
    return super.visitCompilationUnit(cu, executionContext);
}
```

A simple recipe that does nothing other than utilize this printer would be:

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
            public J.CompilationUnit visitCompilationUnit(J.CompilationUnit cu, ExecutionContext executionContext) {
                System.out.println("------LST Start------");
                System.out.println(TreeVisitingPrinter.printTree(cu));
                System.out.println("------LST  End------");
                return super.visitCompilationUnit(cu, executionContext);
            }
        };
    }
}
```

## Using tests to see the tree for some code

Once you've added the above snippet to your recipe, you can see a visual LST for any code by writing a test with the code you are interested in.

For example, if you wanted to see what the LST looks like for this code:

```java
class A {
    void test() {
        int a;
        a = 0;
    }
}
```

You could write this test:

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

And, if you ran the test, you would see this in your console:

```
------LST Start------
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
------LST End------
```

{% hint style="info" %}
The `TreeVisitingPrinter` skips unvisited elements such as `JRightPadded` or `JLeftPadded` that you might see if you traced through the tree yourself.
{% endhint %}

You could then use this tree to help make key decisions about your recipe and what LSTs it should handle. For instance, if you saw `int l = ~k;` but were unsure what `~` was, you could use this printer to find out that it's a `J.Unary` and adjust your recipe accordingly. 