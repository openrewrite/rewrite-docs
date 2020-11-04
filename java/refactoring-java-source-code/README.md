---
description: >-
  High-level abstractions to perform common refactoring tasks on Java source
  code.
---

# Refactoring Java Code

Rewrite provides a set of building blocks implementing common Java transformations. These building blocks can be composed together into higher-level abstractions and more complex refactoring operations.

## Authoring Java Refactoring Visitors

This is an overview of the tools which exist to facilitate the authoring of refactoring visitors. This guide assumes you've read the overviews on [ASTs](../../v1beta/abstract-syntax-trees.md), [visitors](../../v1beta/visitor.md), [recipes](../../v1beta/recipes.md), and [Refactor](../../v1beta/refactor.md).

### Choosing your base class: JavaIsoRefactorVisitor vs JavaRefactorVisitor

The difference between these very similar base classes can be seen in the signatures of their `visit` methods. For example, `visitClassDecl`:

```java
// JavaIsoRefactorVisitor
public J.ClassDecl visitClassDecl(J.ClassDecl cd)
```

```java
// JavaRefactorVisitor
public J visitClassDecl(J.ClassDecl cd)
```

The "iso" in "JavaIsoRefactorVisitor" is short for "isomorphic" or "same shape". This reflects the constraint that visit methods must return an AST element of the same type as the element being visited. In most cases this constraint is a non-issue and saves you from having to frequently cast the results of calls methods on the `super` class. Rarely do you do things like visit a method declaration and replace it with a class declaration. So the majority of visitors will be more comfortable to write if they subclass `JavaIsoRefactorVisitor`. If your refactoring does call for replacing AST elements of one type with AST elements of a different type, then subclass `JavaRefactorVisitor`.

### Composing visitors with AbstractRefactorVisitor.andThen\(\)

The easiest way to compose multiple visitors together is to use `AbstractRefactorVisitor.andThen()`.  
The `andThen()` method accepts a visitor as its argument and schedules that visitor to be executed as soon as the current visitor has returned. So when you schedule a visitor It's important to understand that since `andThen()` schedules the execution for later calling it does not immediately result in any changes whatsoever to the AST. So what if you want to do something with the result of a visitor you've scheduled with `andThen()`? `andThen()` another visitor after that one. Visitors scheduled with `andThen()` are applied in the order they're scheduled in.

```java
/**
 * This class implements some kind of refactoring operation that takes multiple steps 
 */
public class AndThenExample extends JavaIsoRefactorVisitor {

    @Override
    public J.ClassDecl visitClassDecl(J.ClassDecl classDecl) {
        J.ClassDecl cd = super.visitClassDecl(classDecl);
        if(shouldRefactor(cd)) {
            andThen(new Step1());
            andThen(new Step2());
            andThen(new Step3());
        }
        return cd;
    } 

    private class Step1 extends JavaIsoRefactorVisitor { ... }
    private class Step2 extends JavaIsoRefactorVisitor {
            @Override
            public J.ClassDecl visitClassDecl(J.ClassDecl classDecl) {
                J.ClassDecl cd = super.visitClassDecl(classDecl);
                andThen(new Step2A());
                andThen(new Step2B());
                return cd;
            } 

        private class Step2A extends JavaIsoRefactorVisitor { ... }
        private class Step2B extends JavaIsoRefactorVisitor { ... }

    }
    private class Step3 extends JavaIsoRefactorVisitor { ... }

    private boolean shouldRefactor(J.ClassDecl classDecl) {
        // logic to determine whether the visitor should make changes or do nothing
    }
}
```

In the above example the order of application of the visitors is:

1. AndThenExample
2. Step1
3. Step2
4. Step2A
5. Step2B
6. Step3 

If you're curious to look under the hood and see how this is implemented, see [Refactor.transformPipeline\(\)](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/Refactor.java).

### Traversing the AST with Cursor

Some refactoring operations require locating the parent or sibling of a particular AST element. None of the Java AST elements in `J` retain a reference to their parents or siblings. To perform these traversals call `AbstractSourceVisitor.setCursoringOn()` inside your visitor's constructor, then in any `visit` method call `AbstractSourceVisitor.getCursor()` to retrieve a `Cursor`. Calling `getCursor()` without having called `setCursoringOn()` will produce a runtime error. Cursoring functionality is opt-in via `setCursoringOn()` for performance.

The `Cursor` provides access the parents of the current AST element. Here's a visitor that uses the cursor to determine if a given class declaration is an inner class or not:

```java
public class CursoringExampleVisitor extends JavaIsoRefactorVisitor {

    public CursoringExampleVisitor() {
        setCursoringOn();
    }

    @Override
    public J.ClassDecl visitClassDecl(J.ClassDecl classDecl) {
        // Tree is the root type of all AST elements in all languages
        Tree parent = getCursor().getParent().getTree();
        if(parent instanceof J.CompilationUnit) {
            // classDecl corresponds to a top-level class 
        } else if (parent instanceof J.ClassDecl) {
            // classDecl corresponds to an inner class defined within another class
        } else {
            // According to the java language grammar, those are the only two places classes can be declared
            // So this branch is unnecessary for valid Java sources
        }
        return super.visitClassDecl(classDecl);
    }
}
```

### Creating Code with TreeBuilder

Even short code snippets can have complex AST representations. Manually constructing complex AST elements is tedious and foreign to developers used to authoring code as text. The `TreeBuilder` class exists to bridge this gap, allowing you to provide a code snippet and have it parsed into an AST.

{% hint style="warning" %}
If your code snippet introduces any types other than those in java.lang or already present in the insertion scope then you must declare those as part of the `TreeBuilder` method call. Failing to do this can result in AST elements not being properly type-attributed, which can prevent other visitors from being able to compose with yours.
{% endhint %}

An instance of `TreeBuilder` is made available to all `JavaIsoRefactorVisitor` and `JavaRefactorVisitors` via the `protected treeBuilder` field.

```java
import org.openrewrite.java.JavaIsoRefactorVisitor;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.tree.J;

import java.util.ArrayList;
import java.util.List;

/**
 * Adds a "String getName()" method which returns the name of the class as a String.
 */
public class AddGetNameMethod extends JavaIsoRefactorVisitor {
    /**
     * MethodMatchers uses the AspectJ point-cut syntax to identify methods by their declaring class, name, and arguments
     * This matches methods declared on any class named getName() that accepts no arguments
     */
    private static final MethodMatcher GetNameMethodMatcher = new MethodMatcher("* getName()");

    @Override
    public J.ClassDecl visitClassDecl(J.ClassDecl classDecl) {
        J.ClassDecl cd = super.visitClassDecl(classDecl);
        boolean methodAlreadyExists = cd.getMethods().stream()
                .filter(it -> GetNameMethodMatcher.matches(it, classDecl))
                .findAny()
                .isPresent();
        if(!methodAlreadyExists) {
            // If the code snippet includes any types other than those declared under java.lang, then those types should
            // be supplied as arguments to the treeBuilder so that the resulting AST elements are type-attributed
            // In this case the only type being referenced is java.lang.String so no attributions are necessary
            J.MethodDecl getNameMethod = treeBuilder.buildMethodDeclaration(
                    classDecl,
                        "public String getName() {\n" +
                        "    return \"" + cd.getSimpleName() + "\";\n" +
                        "}"
            );
            List<J> statements = new ArrayList<>(cd.getBody().getStatements());
            statements.add(getNameMethod);
            cd = cd.withBody(cd.getBody().withStatements(statements));
        }
        return cd;
    }
}
```

If you run this visitor on a class like this one:

```java
class A {
}
```

You'll get back a result like this:

```java
class A {
public String getName() {
    return "A";
}
}
```

Which is semantically correct but not properly indented.

### Formatting and Indentation with AutoFormat

When you add new AST elements you typically want them to be formatted. This formatting should at the very least:

* Match the surrounding code's usage of tabs or spaces for indentation
* Have the correct number of tabs and spaces as determined by the number of enclosing elements
* Have neither too few nor too many blank lines separating it from sibling elements

Doing this manually is extremely tedious and repetitive, so we created the [AutoFormat](autoformat.md) visitor to help. Within your visitor add an `andThen(new AutoFormat(astElementInNeedOfFormatting));` and all of that will be taken care of for you.

{% hint style="info" %}
AutoFormat is a work in progress and operates on a best-effort basis. Report any issues you may discover with AutoFormat [here](https://github.com/openrewrite/rewrite/issues).
{% endhint %}

### Making your visitor addressable from YAML

For a visitor to be directly configurable and addressable from YAML your visitor must meet these requirements:

* Has a public, no-arguments constructor
* All configuration provided via methods of the form `set<PropertyName>(String value)`
* All required parameters validated by overriding `SourceVisitor.validate()`.

{% hint style="info" %}
If a visitor requires _no_ configuration and should be addressable from YAML, annotate it with `@org.openrewrite.AutoConfigure`
{% endhint %}

Consider [ChangeType](changetype.md) as an example. It accepts two parameters: `type` - the type to replace, and `targetType` - the type to replace it with. So in accordance with the requirements outlined so far, the definition of ChangeType begins with:

```java
public class ChangeType extends JavaIsoRefactorVisitor {
    private String type;
    private JavaType.Class targetType;

    public void setType(String type) {
        this.type = type;
    }

    public void setTargetType(String targetType) {
        this.targetType = JavaType.Class.build(targetType);
    }

    public void setTargetType(JavaType.Class targetType) {
        this.targetType = targetType;
    }

    @Override
    public Validated validate() {
        return required("type", type)
                .and(required("target.type", targetType.getFullyQualifiedName()));
    }

    // Implementation follows
}
```

### Testing

The [rewrite-test](https://github.com/openrewrite/rewrite/tree/master/rewrite-test) module provides various utilities to make it easy to write tests for your visitors and recipes. At least until [JEP 355](https://openjdk.java.net/jeps/355) brings multi-line text blocks to Java, we recommend using [Kotlin](https://kotlinlang.org/) for authoring your tests.

Most test classes for Java visitors should implement the `RefactorVisitorTestForParser<J.CompilationUnit>` interface. This interface requires you to override the `parser` and `visitors` values. Once you've done this, writing tests is as simple what source code should look like `before` and `after` the application of your visitor.

Here's an example JUnit5 test class for the `AddGetNameMethod` visitor described above:

```kotlin
import org.junit.jupiter.api.Test
import org.openrewrite.RefactorVisitorTestForParser
import org.openrewrite.java.JavaParser
import org.openrewrite.java.tree.J

class AddGetNameMethodTest: RefactorVisitorTestForParser<J.CompilationUnit> {
    override val parser: JavaParser = JavaParser.fromJavaVersion().build()
    override val visitors = listOf(AddGetNameMethod())

    @Test
    fun basicGetName() = assertRefactored(
            before = """
                class A {
                }
            """,
            after = """
                class A {
                    public String getName() {
                        return "A";
                    }
                }
            """
    )
}
```

To assert that your visitor _does not_ change code it shouldn't, use `assertUnchanged()`:

```kotlin
    @Test
    fun alreadyHasGetNameMethod() = assertUnchanged(
            before = """
                class A {
                    public String getName() {
                        return "A";
                    }
                }
            """
    )
```

{% hint style="warning" %}
Don't get rewrite-test confused with [rewrite-testing-frameworks](../testing/). rewrite-test has utilities and test fixtures for exercising visitors and recipes. rewrite-testing-frameworks has visitors and recipes which enact migrations and best practices for popular Java test frameworks like JUnit and Mockito.
{% endhint %}

### Have questions?

Join our [community slack](https://join.slack.com/t/rewriteoss/shared_invite/zt-i2ouq1qd-KdkTZKr5jmNtooqfc4ITAQ) and ask us directly

