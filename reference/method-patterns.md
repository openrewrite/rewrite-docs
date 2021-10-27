---
description: A simple and powerful way of identifying method definitions and invocations
---

# Method Patterns

Many recipes operate on method declarations or invocations. Method patterns are a mechanism for configuring and developing such recipes. OpenRewrite's pointcut method expressions are derived from AspectJ. An OpenRewrite "method pattern" is comparable to an AspectJ's "Pointcut method expression".

## Anatomy of a Method Pattern

A pointcut method expression can identify one or more method definitions or invocations based on their:

* Fully qualified receiver type
* Method Name
* Method Argument types

```text
com.yourorg.RecieverFullyQualifiedType methodName(argType1, argType2)
```

There are two kinds of wildcard symbols:

* `*` - Matches any one thing. Applicable to receiver type, method name, and arguments.
* `..` - Matches zero or more. Applicable to  receiver type and arguments.

{% hint style="warning" %}
The return type of a method is _not_ represented in method patterns. Methods in Java \(and similar languages\) can be uniquely identified by receiver type, name, and argument types alone.
{% endhint %}

### Examples

So if you wanted to match invocations of `String.toString(int beginIndex)` then this expression would match only that method: `java.lang.String toString(int)`. If you wanted to match the two-argument form of the same

| Method Pattern | Matches |
| :--- | :--- |
| `java.lang.String substring(int)` | Exactly the [single argument overload](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#substring%28int%29) of `String.substring()` |
| `java.lang.String substring(int, int)` | Exactly the [two argument overload](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#substring%28int,int%29) of `String.substring()` |
| `java.lang.String substring(..)` | Any overload of `String.substring()` |
| `java.lang.String *(int)` | Any method on `String` that accepts a single argument of type `int` |
| `com.yourorg.Foo bar(int, String, ..)` | Any method on `Foo` named `bar` accepting an `int`, a `String`, and zero or more other arguments of any type |
| `com.yourorg.Foo <constructor>(*, *, *)` | Constructors of `Foo` accepting exactly three arguments of any type. |
| `*..String *(..)` | Any method accepting any arguments on classes named "String" in any package |
| `*..* *(..)` | Any method accepting any arguments on any class |
| `org.example..* *(..)` | Any method on any class in the "org.example" package, or any sub-package of "org.example" |

## Usage

### Configuring Recipes

Recipes which take method patterns as arguments take them as strings. In yaml that looks like this:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMethodNameExample
displayName: Change method name example
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.Matchers anyVararg()
      newMethodName: any
```

Constructing a similarly configured instance of the same recipe in Java:

```java
ChangeMethodName cmn = new ChangeMethodName("org.mockito.Matchers anyVararg()", "any");
```

### Authoring Recipes with MethodMatcher

`org.openrewrite.java.MethodMatcher` is the class that most recipes will use method patterns with. Instances are created by providing the method pattern to its constructor:

```java
MethodMatcher mm = new MethodMatcher("org.mockito.Matchers anyVararg()");
```

`MethodMatcher.matches()` has overloads that accept method declarations, method invocations, and constrcutor invocations. `matches()` returns `true` if the argument matches the method pattern the matcher was initialized with. They are frequently used by visitors to avoid making changes to AST elements other than those indicated by the method pattern.

```java
// Adapted from org.openrewrite.java.ChangeMethodName for the sake of example
// This is lacks the full functionality of the complete Recipe
class ChangeMethodNameVisitor extends JavaIsoVisitor<ExecutionContext> {
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
            if(type != null) {
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
            if(type != null) {
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

