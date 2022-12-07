# AST Examples

When building recipes, it's important to understand how OpenRewrite Abstract Syntax Trees (AST) correspond to code. You couldn't, for example, properly rename a variable with a recipe unless you knew that [J.Identifier](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L2310-L2343) is the class used to represent a variable.

To help you get started on working with ASTs and OpenRewrite, this guide will:

* [Explain how ASTs work at a high-level](#high-level-ast-explanation)
* [Provide a sample chunk of code to demonstrate ASTs](#code)
* Discuss how that code relates to different types of ASTs
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
* [Teach you how to use the debugger to learn more about ASTs yourself](#using-the-debugger-to-detect-asts)

## High-level AST Explanation

In order to programmatically modify code without risking the introduction of syntactic or semantic errors, there must be a data structure which accurately and comprehensively represent said code. OpenRewrite uses [Abstract Syntax Trees](/v1beta/abstract-syntax-trees.md) (AST) for this purpose. Like other tree data structures, more complex ASTs are recursively composed out of other, simpler ASTs. 

For instance, you could have a [CompilationUnit](#compilationunit) which then has a [ClassDeclaration](#classdeclaration) inside of that which then has a [MethodDeclaration](#methoddeclaration) inside of that and so on. On top of being a valid AST that would _also_ represent valid Java code. 

On the other hand, you _could_ define a [Binary](#binary) with other Binaries inside of that. That would be a valid AST but it **would not** represent valid Java code as just entering `1+2` (a valid Binary) in a Java file would not compile (that code would need to be in an expression which is then in a class to be valid).

> Every object in the [code section](#code) is an AST in the sense that it implements a Tree interface. These objects, however, need to be combined in an appropriate way to represent valid Java. It is your duty as a recipe author to ensure that the final AST represents valid Java code.

## Code

Below is a simple Java class whose entire purpose is to demonstrate different types of ASTs. Each of the following sections will highlight different parts of this code to demonstrate which chunks correspond to which AST.

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

A [Binary AST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L597-L705) is an [Expression](#expression) with a left and right side, separated by an operator. Examples of operators include `+`, `-`, `||`, `&&`, and more.

![Binary Example](<../.gitbook/assets/Binary.png>)

### Block 

A [Block AST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L712-L851) is a pair of curly braces and the [Statements](#statement) contained within. Blocks can be nested inside of each other.

![Block Example](<../.gitbook/assets/Block.png>)

### ClassDeclaration

A [ClassDeclaration AST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L1062-L1336) contains all of the code for any Java class. Please note that a `ClassDeclaration` can be nested inside of another class such as with:

```java
public class A {
    // ...
    private class B {
        // ...
    }
}
```

![ClassDeclaration Example](<../.gitbook/assets/ClassDeclaration.png>)

### CompilationUnit

A [CompilationUnit AST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L1342-L1545) is the root of the Java AST. In order for an AST to represent valid Java code, all other elements must be contained inside of this. 

![CompilationUnit Example](<../.gitbook/assets/CompilationUnit.png>)

### Expression

An [Expression](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/Expression.java) is anything that returns a value. `MethodInvocation`, `Identifier`, and `Binary` are all examples of expressions. Please note that some ASTs such as `MethodInvocation` are both a [Statement](#statement) and an Expression.

In the below code, only some of the expressions are highlighted as expressions can often have many expressions inside of them and it would be too difficult to read if all of them were highlighted. For instance, `import java.util.ArrayList` is many expressions (`java`, `util`, `ArrayList`, `java.util`, and `java.util.ArrayList`).

![Expression Example](<../.gitbook/assets/Expression.png>)

### FieldAccess

A [FieldAccess AST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L1827-L1953) is any fully qualified name. Often times, these are package or import statements, but they can also appear in code as something like: `this.foo`.

![FieldAccess Example](<../.gitbook/assets/FieldAccess.png>)

### Identifier

An [Identifier AST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L2310-L2343) is any name in the code (class names, variable names, method names, etc).

You can use `J.Identifier.getFieldType()` to tell what class the identifier is a field on. If `null` is returned, then that means the identifier it is not a field.

![Identifier Example](<../.gitbook/assets/Identifier.png>)

### MethodDeclaration

A [MethodDeclaration AST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L3517) is the annotations, modifiers, return type, name, argument list, and body which together define a method on a [Class](#classdeclaration).

![MethodDeclaration Example](<../.gitbook/assets/MethodDeclaration.png>)

### MethodInvocation

A [MethodInvocation AST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L3523-L3694) consists of a select expression, any defined type parameters, the method name, and its arguments. Method invocations have a somewhat surprising structure where the highest-level AST element consists of the select expression (everything to the left of the last dot) and the name on the right. Let's use the below code as an example to clarify this further.

![MethodInvocation Example](<../.gitbook/assets/MethodInvocation.png>)

* In the above code, the "highest-level" `MethodInvocation` (`this.a.stream().map(it -> it + 1).collect(Collectors.toList())`) would have these components:
  * Select expression: `this.a.stream.map(it -> it + 1)`
  * Name: `collect`
  * A single argument: `Collectors.toList()`

* The argument passed into the above `MethodInvocation` (`Collectors.toList()`) is itself a `MethodInvocation` that would have these components:
  * Select expression: `Collectors`
  * Name: `toList`
  * No arguments 

* The select expression of the highest-level `MethodInvocation` (`this.a.stream().map(it -> it + 1)`) is _also_ a `MethodInvocation` and it would have these components:
  * Select expression: `this.a.stream()`
  * Name: `map`
  * A single argument which is the lambda expression: `it -> it + 1` 

* The select expression of the above `MethodInvocation` (`this.a.stream()`) is also a `MethodInvocation` that has these components:
  * Select expression: `this.a`
  * Name: `stream`
  * No arguments

### NewClass

A [NewClass AST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L3996-L4158) is when an object is created via its constructors and the `new` keyword.

![NewClass Example](<../.gitbook/assets/NewClass.png>)

### Statement

A [Statement AST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/Statement.java) is anything that appears on its own line within a block. Statement elements are usually terminated with a semicolon. `if`, `while`, `try`, `Block`, `return`, and `MethodInvocation` are all examples of statements. Please note that some AST elements such as `MethodInvocation` are both Statements and [Expressions](#expression).

In the below code, only some of the statements are highlighted as statements will often have many sub-statements and the diagram would become too difficult to read. For instance, `List<Integer> a = new ArrayList<>()` is a statement as well as `new ArrayList<>()`. 

![Statement Example](<../.gitbook/assets/Statement.png>)

### VariableDeclarations

A [VariableDeclarations AST](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L5318-L5526) contains the declaration of one or more variables of the same type, with or without initializing expressions for each variable.

![VariableDeclarations Example](<../.gitbook/assets/VariableDeclarations.png>)

## Using the Debugger To Detect ASTs

If you find yourself still unsure what makes up a particular AST or if you want to traverse the AST yourself, you can use the Java debugger to help you. 

Let's use the example code from above as an example. You can make a simple recipe that doesn't do much aside from visit a [CompilationUnit](#compilationunit): [gist](https://gist.github.com/mike-solomon/0f9a171d0b444f3bb576f9cba2e5a304). You can then make a test that checks that the code hasn't changed: [gist](https://gist.github.com/mike-solomon/9e13ae5acb6c60effaf6557176771785).

Once you have that recipe and test class created, there are two main places where you'll want to add breakpoints: 
* Inside of the `visitCompilationUnit` method in your recipe class OR
* Inside of the [JavaVisitor.java class itself](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/JavaVisitor.java). 

If you add a breakpoint in the `visitCompilationUnit` method, you'll find that the entire AST is defined in a variable called `cu`. In there, you can see things like `classes` which is an `ArrayList` of `ClassDeclaration` elements. You could then expand the `classes` element and find a `body` that contains `statements` that contain `VariableDeclaration` and `MethodDeclaration` elements and so on: 

![Debugger Example](<../.gitbook/assets/DebuggerExample.png>)

If you add a breakpoint in the `JavaVisitor.java` class instead, you can pick which AST type you want to explore. For instance, if you wanted to see what a `ClassDeclaration` AST is in your code, you could add a breakpoint in the [visitClassDeclaration method](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/JavaVisitor.java#L410-L453). You'll now find that the AST begins with a `ClassDeclaration` instead of  `CompilationUnit`. You can step through the tree in the same way as before and you'll find everything else is the same. The benefit of this approach is that you can continue to resume the program and it'll stop at every point in the AST that a `ClassDeclaration` is visited.

![ClassDeclaration Debugger Example](<../.gitbook/assets/ClassDeclarationDebugger.png>)
