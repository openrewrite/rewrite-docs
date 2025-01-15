import ReactPlayer from 'react-player';

# Method patterns

Method patterns provide a way to accurately and quickly identify one or more method definitions or invocations. Unlike traditional text-based searches that can result in thousands of irrelevant matches, method patterns are type-aware and will, therefore, only find relevant results.

:::info
An OpenRewrite method pattern is comparable to an AspectJ ["pointcut expression"](https://www.baeldung.com/spring-aop-pointcut-tutorial).
:::

<ReactPlayer url='https://www.youtube.com/watch?v=DEd24gzNZCs' controls="true" />


## Anatomy of a method pattern

A method pattern can identify one or more method definitions or invocations based on:

* A fully qualified class name for where the method is defined or invoked (aka a fully qualified receiver type)
* A method name
* The method's argument types

:::tip
If you are using IntelliJ or Eclipse for development, you can right-click on a class name, select `Copy / Paste Special`, and then click on `Copy Reference`. This will copy the fully qualified class name that you can then use in your method pattern.
:::

For instance, let's say we have a class like this:

```java
package org.foo;

class Bar {
    void baz(String input1, int input2) {
}
```

The three pieces of information we need to know to identify the method would be:

* `org.foo.Bar` - the fully qualified class name where the method is defined
* `baz` - the method name itself
* `String, int` – the method's argument types

Combining the three would make this method pattern:

```java
org.foo.Bar baz(String, int)
```

:::warning
You might be wondering, "What if `baz` returned an object instead of `void`? Isn't that missing in the method pattern?

That information isn't actually needed as methods in Java (and similar languages) can be uniquely identified by the fully qualified receiver type, method name, and argument types alone.
:::

Method patterns can also accept wildcard symbols if you want to search for or change many methods. There are two kinds of wildcard symbols:

* `*` - Matches any one thing. Applicable to receiver type, method name, and arguments.
* `..` - Matches zero or more. Applicable to receiver type and arguments.

In the following section, we will provide some examples of how to use these.

### Examples

:::info
Check out the [Moderne introduction to type-aware code searches](https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides/introduction-to-type-aware-code-search/#using-a-search-recipe) for an example of how method patterns can be used by users running recipes.
:::

The below table shows some more examples of method patterns and the methods they match:

| Method Pattern                              | Matches                                                                                                                                                                                                            |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `java.lang.String substring(int)`           | Exactly the [single argument overload](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#substring%28int%29) of `String.substring(int beginIndex)`.                               |
| `java.lang.String substring(int, int)`      | Exactly the [two argument overload](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#substring%28int,int%29) of `String.substring(int beginIndex, int endIndex)`.                |
| `java.lang.String substring(..)`            | Any overload of `String.substring()` with any number of arguments.                                                                                                                                                 |
| `java.lang.String *(int)`                   | Any method on `String` that accepts a single argument of type `int`.                                                                                                                                               |
| `java.lang.String format(String, ..)`       | Exactly the [String.format(String format, Object... args)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#format\(java.lang.String,java.lang.Object...\)) method with varargs. |
| `java.lang.String format(String, Object[])` | Exactly the [String.format(String format, Object... args)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#format\(java.lang.String,java.lang.Object...\)) method with varargs. |
| `com.yourorg.Foo bar(int, String, ..)`      | Any method on `Foo` named `bar` accepting an `int`, a `String`, and zero or more other arguments of any type.                                                                                                      |
| `*..String *(..)`                           | Any method accepting any arguments on classes named "String" in any package.                                                                                                                                       |
| `*..* *(..)`                                | Any method accepting any arguments on any class.                                                                                                                                                                   |
| `*..* foo(..)`                              | Any method named `foo` which accepts any number of arguments. This is the equivalent of doing a generic text search for methods named `foo`.                                                                       |
| `org..* foo(..)`                            | Any method named `foo` in a package that starts with `org`. This could be `org.meow` or it could be `org.springframework` or so on.                                                                                |
| `org.openrewrite.java.* foo(..)`            | Any method named `foo` in a package that starts with `org.openrewrite.java.`. Note that the `.*` after `java` means that the method _must_ be in this package rather than some subsequent subpackages.             |
| `org.Foo bar(java.util.List)`               | Exactly the `bar` method in the `org.Foo` class that takes in a single `java.util.List` as an argument.                                                                                                          |
| `org.Foo <constructor>(..)`                 | Matches any constructors in the `org.Foo` class that takes in any number of arguments.                                                                                                                           |
| `org.Foo bar()`                             | Matches exactly the `bar` method in the `org.Foo` class that has **no** arguments                                                                                                                                |


:::info
Method patterns match against a method's declaration. Methods that take in a variable number of arguments represent these variadic parameters as an array.

For example, the method pattern `String.format(String, Object[])` would match all of these method invocations, regardless of the number of varargs passed:

```java
String.format("Foo bar");
String.format("%s bar", "Foo");
String.format("%s %s", "Foo", "bar");
```
:::

## Usage

### Configuring recipes

Recipes that take in method patterns as arguments take them in as strings. In YAML that looks like this:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMethodNameExample
displayName: Change method name example
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.Matchers existingName()
      newMethodName: someNewName
```

or they can take in wildcards like this:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMethodNameExample
displayName: Change method name example
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org..* existingName(..)
      newMethodName: someNewName
```

Constructing a similarly configured instance of the same recipe in Java would look like this:

```java
ChangeMethodName cmn = new ChangeMethodName("org.mockito.Matchers existingName()", "someNewName");
```

or

```java
ChangeMethodName cmn = new ChangeMethodName("org..* existingName(..)", "someNewName");
```

### Authoring recipes with MethodMatcher

`org.openrewrite.java.MethodMatcher` is the class that most recipes will use method patterns with. Instances are created by providing the method pattern to its constructor:

```java
MethodMatcher mm = new MethodMatcher("org.mockito.Matchers existingName()");
```

`MethodMatcher.matches()` has overloads that accept method declarations, method invocations, and constructor invocations. `matches()` returns `true` if the argument matches the method pattern the matcher was initialized with. They are frequently used by visitors to avoid making changes to LST elements other than those indicated by the method pattern.

```java
// Adapted from org.openrewrite.java.ChangeMethodName for the sake of an example
// This lacks the full functionality of the complete Recipe
class ChangeMethodNameVisitor extends JavaIsoVisitor<ExecutionContext> {
    @Option(displayName = "New method name",
            description = "The method name that will replace the existing name.",
            example = "someNewName")
    String newMethodName;

    // More options ...

    private final MethodMatcher methodMatcher;

    private ChangeMethodNameVisitor(String pointcutExpression) {
        this.methodMatcher = new MethodMatcher(pointcutExpression);
    }

    @Override
    public J.MethodDeclaration visitMethodDeclaration(J.MethodDeclaration method, ExecutionContext ctx) {
        J.MethodDeclaration m = super.visitMethodDeclaration(method, ctx);
        J.ClassDeclaration classDecl = getCursor().firstEnclosingOrThrow(J.ClassDeclaration.class);

        // The enclosing class of a J.MethodDeclaration must be known for a MethodMatcher to match it
        if (methodMatcher.matches(method, classDecl)) {
            JavaType.Method type = m.getType();

            // Note that both the name and the type information on the declaration are updated together
            // Maintaining this consistency is important for maintaining the correct operation of other recipes
            if (type != null) {
                type = type.withName(newMethodName);
            }

            m = m.withName(m.getName().withName(newMethodName))
                    .withType(type);
        }

        return m;
    }

    @Override
    public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
        J.MethodInvocation m = super.visitMethodInvocation(method, ctx);

        // Type information stored in the J.MethodInvocation indicates the class so no second argument is necessary
        if (methodMatcher.matches(method)) {
            JavaType.Method type = m.getType();

            // Note that both the name and the type information on the invocation are updated together
            // Maintaining this consistency is important for maintaining the correct operation of other recipes
            if (type != null) {
                type = type.withName(newMethodName);
            }

            m = m.withName(m.getName().withName(newMethodName))
                    .withType(type);
        }

        return m;
    }

    // Other implementation follows
}
```
