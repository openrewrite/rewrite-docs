# JavaTemplate

More advanced refactoring recipes often require the construction of complex AST elements. Manually constructing complex AST elements can be tedious and unfamiliar to developers accustomed to authoring code as text. OpenRewrite addresses this need with `JavaTemplate`, which parses textual code snippets into AST elements ready fo ruse in a [visitor](visitors.md).

{% hint style="success" %}
`JavaTemplate` produces ASTs that are correctly formatted, fully type-attributed, and able to reference symbols from the lexical scope of insertion. &#x20;
{% endhint %}

## Construction

`JavaTemplate` are constructed within a `JavaVisitor` by calling `JavaTemplate.builder()`:

```java
public class ChangeMethodInvocation extends JavaIsoVisitor<ExecutionContext> {
    private final JavaTemplate template =
        JavaTemplate.builder(this::getCursor, "withString(#{any(java.lang.String)}).length()") // Code Snippet
            .javaParser(JavaParser.fromJavaVersion()             // Parser 
                .classpath("example-utils")                      // Classpath lookup
                .build()
             )
            .staticImports("org.example.StringUtils.withString") // Additional import
            .build();
}
```

### Code Snippets and Parameters

A template is always constructed from a `String` code snippet. The snippet must be syntactically correct code for the context it is being inserted into. Snippets may reference variables, functions, and other symbols visible within the lexical scope of the insertion point.

Snippets may include parameter substitution indicators. Parameter substitution indicators are positional. There are two kinds of parameter substitution indicator. Which kind is appropriate depends on whether the parameter being substituted represents something with a type or not.

The substitution of these indicators with their actual values happens when the template is applied via `withTemplate()`. See [Usage](javatemplate.md#usage).

#### Typed Substitution Indicators

In order for the AST resulting from templating to be correctly type-attributed, substitutions into a typed insertion point must indicate that type. Whether an insertion point is typed or not depends on the Java language grammar.&#x20;

Typed substitution indicators take the form `#{any(<type>)}` where \<type> is the expected type of the parameter. If any type is permissible then the shortest form `#{any()}` should be used. Examples of snippets with typed substitution indicators:

* `Object o = #{any()}`
* `boolean b = #{any(boolean)};`
* `foo.acceptsACollection(#{any(java.util.Collection)});`

#### Untyped Substitution Indicators

It is correct to use the untyped substitution indicator `#{}` anywhere that the concept of type is nonsensical . Examples of untyped insertion points include the text of a comment, the name of a class in a class declaration, and keywords like `if` or `while`. Examples of snippets with untyped substitution indicators:

* `//TODO: Fix bug #{}`
* `public class #{} { }`

### Additional Imports

If a snippet of code is introducing a type that might be new to the insertion scope, `JavaTemplate` has to be informed using the method `JavaTemplate.Builder.imports()`. For static imports, use `JavaTemplate.Builder.staticImports()`.  For example:

```java
JavaTemplate.builder(this::getCursor, "new SecureRandom()")
        .imports("java.security.SecureRandom")
        .build()
```

{% hint style="warning" %}
Failing to declare required imports results in `JavaTemplate` producing AST elements missing type attribution, or failing outright with an exception.&#x20;
{% endhint %}

{% hint style="warning" %}
Declaring an import to `JavaTemplate` does not automatically add a corresponding import to the `SourceFile` being refactored. `JavaVisitor.maybeAddImport()` is the recommended way to add imports to Java `SourceFile`.
{% endhint %}

### Referencing External Types

`JavaTemplate` uses a `JavaParser` to convert text into AST elements. The default `JavaParser` is aware only of types provided by the Java Runtime, so if your snippet references any types from other sources you must supply an appropriately configured `JavaParser`.

#### From the runtime classpath

The function `JavaParser.Bulider.classpath(`) can be used to look up libraries by artifactId from the runtime classpath. In this example, the `template` snippet references a symbol of type `BasicPolymorphicTypeValidator`, which is provided by the jackson-databind library:

```java
JavaTemplate.builder(this::getCursor, template.toString())
        .imports("com.fasterxml.jackson.databind.jsontype.BasicPolymorphicTypeValidator")
        .javaParser(() -> JavaParser.fromJavaVersion()
                .classpath("jackson-databind")
                .build())
        .build()
```

{% hint style="warning" %}
It isn't always possible to include all the libraries a Recipe may want to reference on the runtime classpath. This is most frequently an issue when creating recipes that migrate between different versions of the same library. For example, if a recipe migrates Junit 4.0 to 4.13, only one of those versions of Junit can be on the classpath at a time. Recipes that migrate between library versions tend to have the older version on the runtime classpath, providing stubs for the newer types and methods.
{% endhint %}

#### From Stubs

Whenever a symbol you want to reference is not, or cannot, be looked up from the runtime classpath a stub providing all of the relevant type information can be provided instead. Stubs are provided with `JavaParser.Builder.dependsOn()`. Stubs must be valid Java source files, but only methods that are used in the template must exist in the stub, and those methods can be implemented with the bare minimum to be syntactically valid method declarations.&#x20;

```java
JavaTemplate.builder(this::getCursor,"Duration.ofMillis(#{any(int)})")
        .imports("java.time.Duration")
        .javaParser(() -> JavaParser.fromJavaVersion()
                .dependsOn("package org.springframework.boot.web.client;" +
                           "import java.time.Duration;" +
                           "public class RestTemplateBuilder {" +
                           "public RestTemplateBuilder setConnectTimeout(java.time.Duration) { return null; }" +
                           "public RestTemplateBuilder setReadTimeout(java.time.Duration) { return null; }" +
                           "}")
                .build())
        .build()
```

{% hint style="info" %}
There are many examples of `JavaTemplate` stubs in [rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks) and [rewrite-spring](https://github.com/openrewrite/rewrite-spring).
{% endhint %}

## Usage

Once an instance of the template has been created it can be applied to an AST element with the method `J.withTemplate()`. This example visitor uses a template to replace all method invocations of `countLetters(String)` with `withString(String).length()`:

```java
public class ChangeMethodInvocation extends JavaIsoVisitor<ExecutionContext> {
    private final JavaTemplate template = JavaTemplate.builder(this::getCursor, "withString(#{any(java.lang.String)}).length()")
        .javaParser(JavaParser.fromJavaVersion().classpath("example-utils").build())
        .staticImports("org.example.StringUtils.withString")
        .build();

    public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext p) {
        J.MethodInvocation m = super.visitMethodInvocation(method, p);
        if (m.name.typeInformation.simpleName == "countLetters") {
            m = m.withTemplate(template, m.getCoordinates.replace(), m.arguments[0]); //Template Invocation 
            maybeAddImport("org.example.StringUtils", "withString");
        }
        return m;
    }       
}
```

Invoking `J.withTemplate()` requires the specification of coordinates and the values to be filled in for any substitution indicators.

{% hint style="warning" %}
Don't forget to use `JavaVisitor.maybeAddImport()` to add imports for any new types your template might be introducing!
{% endhint %}

### Coordinates

Most AST elements are complex enough that there isn't only one way a template could possibly be applied to it. To resolve these ambiguities, every AST element exposes one or more coordinates indicating exactly what substitution should be made. Consider this simple method declaration:

```java
public String foo(Object arg1, String arg2) {
    return arg1.toString() + arg2;
}
```

You might want to replace the entire method declaration with the template result, in which case `J.MethodDeclaration.getCoordinates().replace()` is the appropriate coordinate. But maybe you just want to add an annotation, in which case `J.MethodDeclaration.getCoordinates().addAnnotation()` is appropriate. Each AST element exposes different coordinates. All coordinates include a "replace" coordinate to replace the entire AST element with the template result. Look for a `getCoordinates()` method to see what other coordinates are available.

{% hint style="info" %}
There are thousands of possible coordinates, many with no practical application. To avoid wasting effort implementing coordinates no one would ever use, coordinates have been implemented on an as-needed basis. If existing coordinates are insufficient to your needs, come tell us about it in the [OpenRewrite Slack](https://join.slack.com/t/rewriteoss/shared\_invite/zt-nj42n3ea-b\~62rIHzb3Vo0E1APKCXEA) or [file an issue](https://github.com/openrewrite/rewrite/issues).&#x20;
{% endhint %}
