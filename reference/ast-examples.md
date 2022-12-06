# AST Element Examples

When building recipes, it's important to understand how certain elements in the OpenRewrite Abstract Syntax Tree (AST) correspond to code. You couldn't, for example, properly rename a variable with a recipe unless you knew that `J.Identifier` is how variable names are represented in the AST.

To help assist you with identifying these elements, this guide will provide a sample chunk of code, highlight which AST elements correspond to which piece(s) of code, and explain a bit about each element. At the end, you'll also find instructions for how to use the debugger to learn more about the elements yourself.

* [Code Sample](#code)
  * [Binary](#binary)
  * [Block](#block)
  * [ClassDeclaration](#classdeclaration)
  * [CompilationUnit](#compilationunit)
  * [Expression](#expression)
  * [FieldAccess](#fieldaccess)
  * [Identifier](#identifier)
  * [MethodDeclaration](#methoddeclaration)
  * [MethodInvocation](#methodinvocation)
  * [NewClass](#newclass)
  * [Statement](#statement)
  * [VariableDeclarations](#variabledeclarations)
* [Using the Debugger To Detect Elements](#using-the-debugger-to-detect-elements)

## Code

Below is a simple Java class whose entire purpose is to demonstrate different AST elements. Each of the following sections will highlight different parts of this code to demonstrate which chunks correspond to which AST element.

```java
package org.openrewrite;
                
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@AnAnnotation
public class A {

    List<Integer> a = new ArrayList<>();

    int foo() {
        int a = 1 + 2, b = 3, c;
        this.a = this.a.stream()
                .map(it -> it + 1)
                .collect(Collectors.toList());
        return a;
    }
}

@interface AnAnnotation {}
```

### Binary

A [Binary](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L597-L705) is an [Expression](#expression) with a left and right side, separated by an operator. Examples of operators include `+`, `-`, `||`, `&&`, and more.

![Binary Element Example](<../.gitbook/assets/Binary.png>)

### Block 

A [Block element](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L712-L851) is the code contained between curly braces. Blocks can be nested inside of each other.

![Block Element Example](<../.gitbook/assets/Block.png>)

### ClassDeclaration

A [ClassDeclaration element](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L1062-L1336) contains all of the code for any Java class. 

![ClassDeclaration Element Example](<../.gitbook/assets/ClassDeclaration.png>)

### CompilationUnit

A [CompilationUnit element](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L1342-L1545) is the root of the Java AST. All other elements are contained inside of this. 

![CompilationUnit Element Example](<../.gitbook/assets/CompilationUnit.png>)

### Expression

An [Expression element](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/Expression.java) is anything that returns a value. `MethodInvocation`, `Identifier`, and `Binary` are all examples of expressions. Please note that some AST elements such as `MethodInvocation` are both a [Statement](#statement) and an Expression.

In the below code, only some of the expressions are highlighted as expressions can often have many expressions inside of them and it would be too difficult to read if all of them were highlighted. For instance, `import java.util.ArrayList` is many expressions (`java`, `util`, `ArrayList`, `java.util`, and `java.util.ArrayList`).

![Expression Element Example](<../.gitbook/assets/Expression.png>)

### FieldAccess

A [FieldAccess element](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L1827-L1953) is any fully qualified name. Often times, these are package or import statements, but they can also appear in code as something like: `this.foo`.

![FieldAccess Element Example](<../.gitbook/assets/FieldAccess.png>)

### Identifier

An [Identifier element](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L2310-L2343) is any name in the code (class names, variable names, method names, etc).

![Identifier Element Example](<../.gitbook/assets/Identifier.png>)

### MethodDeclaration

A [MethodDeclaration element](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L3517) is all the code for creating a method.

![MethodDeclaration Element Example](<../.gitbook/assets/MethodDeclaration.png>)

### MethodInvocation

A [MethodInvocation element](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L3523-L3694) is all the code for invoking a method. Method invocations have a somewhat surprising structure where the highest-level AST element is the last part of the invocation. For instance, in the below code, `this.a` is defined by taking the `stream`, running `map` on it, and then running `collect` on that. Each of those pieces is a `MethodInvocation`. However, instead of `stream` being the highest-level element in the tree, `collect` is:

* Rest of the AST...
  * Collect element
    * Map element
      * Stream element

![MethodInvocation Element Example](<../.gitbook/assets/MethodInvocation.png>)

### NewClass

A [NewClass element](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L3996-L4158) is when an object is created via its constructors and the `new` keyword.

![NewClass Element Example](<../.gitbook/assets/NewClass.png>)

### Statement

A [Statement element](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/Statement.java) is anything that appears on its own line within a block. Statement elements are usually terminated with a semicolon. `if`, `while`, `try`, `Block`, `return`, and `MethodInvocation` are all examples of statements. Please note that some AST elements such as `MethodInvocation` are both Statements and [Expressions](#expression).

In the below code, only some of the statements are highlighted as statements will often have many sub-statements and the diagram would become too difficult to read. For instance, `List<Integer> a = new ArrayList<>()` is a statement as well as `new ArrayList<>()`. 

![Statement Element Example](<../.gitbook/assets/Statement.png>)

### VariableDeclarations

A [VariableDeclarations element](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L5318-L5526) contains the declaration of one or more variables of the same type, with or without initializing expressions for each variable.

![VariableDeclarations Element Example](<../.gitbook/assets/VariableDeclarations.png>)

## Using the Debugger To Detect Elements

If you find yourself still unsure what makes up a particular element or if you want to traverse the AST yourself, you can use the Java debugger to help you. 

Let's use the example code from above as an example. You can make a simple recipe that doesn't do much aside from visit a compilation unit: [gist](https://gist.github.com/mike-solomon/0f9a171d0b444f3bb576f9cba2e5a304). You can then make a test that checks that the code hasn't changed: [gist](https://gist.github.com/mike-solomon/9e13ae5acb6c60effaf6557176771785).

Once you have that recipe and test class created, there are two main places where you'll want to add breakpoints: 
* Inside of the `visitCompilationUnit` method in your recipe class OR
* Inside of the [JavaVisitor.java class itself](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/JavaVisitor.java). 

If you add a breakpoint in the `visitCompilationUnit` method, you'll find that the entire AST is defined in a variable called `cu`. In there, you can see things like `classes` which is an `ArrayList` of `ClassDeclaration` elements. You could then expand the `classes` element and find a `body` which contains `statements` that contain `VariableDeclaration` and `MethodDeclaration` elements and so on: 

![Debugger Example](<../.gitbook/assets/DebuggerExample.png>)

If you add a breakpoint in the `JavaVisitor.java` class instead, you can pick which AST element you want to explore. For instance, if you wanted to see what a `ClassDeclaration` element is in your code, you could add a breakpoint in the [visitClassDeclaration method](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/JavaVisitor.java#L410-L453). You'll now find that the root node is the `ClassDeclaration` element instead of  `CompilationUnit`. You can step through the tree in the same way as before and you'll find everything else is the same. The benefit of this approach is that you can continue to resume the program and it'll stop at every point in the AST that a `ClassDeclaration` element is visited.

![ClassDeclaration Debugger Example](<../.gitbook/assets/ClassDeclarationDebugger.png>)
