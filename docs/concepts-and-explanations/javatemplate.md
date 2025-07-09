---
description: A technical overview of what JavaTemplates are and how to use them.
---

# JavaTemplate

More advanced refactoring recipes often require the construction of complex [Lossless Semantic Tree](../concepts-and-explanations/lossless-semantic-trees.md) (LST) elements. Manually constructing complex LST elements can be tedious and unfamiliar to developers accustomed to authoring code as text. OpenRewrite addresses this need with `JavaTemplate`, which parses textual code snippets into LST elements ready for use in a [visitor](./visitors.md).

:::tip
`JavaTemplates` produces LSTs that are correctly formatted, fully type-attributed, and able to reference symbols from the lexical scope of insertion.
:::

## Construction

`JavaTemplates` are constructed within a `JavaVisitor` by calling `JavaTemplate.builder()`:

```java
public class ChangeMethodInvocation extends JavaIsoVisitor<ExecutionContext> {
    private final JavaTemplate template =
        JavaTemplate.builder("withString(#{any(java.lang.String)}).length()")  // Code Snippet
            .javaParser(
                JavaParser.fromJavaVersion()                                   // Parser
                    .classpath("example-utils"))                               // Classpath lookup
            .staticImports("org.example.StringUtils.withString")               // Additional import
            .doAfterVariableSubstitution(System.out::println)                  // Optional side-effect
            .doBeforeParseTemplate(System.out::println)                        // Optional side-effect
            .build();
}
```

### Code Snippets and Parameters

A template is always constructed from a `String` code snippet. The snippet must be syntactically correct code for the context it is being inserted into. Snippets may reference variables, functions, and other symbols visible within the lexical scope of the insertion point.

Snippets may include parameter substitution indicators. Parameter substitution indicators are positional. There are two kinds of parameter substitution indicators: typed and untyped.

The substitution of these indicators with their actual values happens when the template is applied via `JavaTemplate apply(..)`. See [Usage](#usage).

#### Typed Substitution Indicators

In order for the LST resulting from templating to be correctly type-attributed, substitutions of LST elements into a typed insertion point must indicate that type. Whether an insertion point is typed or not depends on the Java language grammar.

Typed substitution indicators take the form `#{any(<type>)}` where `<type>` is the expected type of the parameter. If any type is permissible, then the shortest form `#{any()}` should be used. When substituting an array type, use `#{anyArray()}`. Here are some examples of snippets with typed substitution indicators:

* `Object o = #{any()};`
* `boolean b = #{any(boolean)};`
* `foo.acceptsACollection(#{any(java.util.Collection)});`
* `String[] = #{anyArray(java.lang.String)};`

:::info
It is unnecessary to provide a typed substitution indicator if you're providing a simple value like a `String` to a template. Typed substitution indicators are required when supplying an LST element as a template substitution parameter.
:::

:::warning
If the recipe test harness fails because of missing type information when you've used templates, double-check that you're providing accurate types and imports to the template. While correct source code can sometimes be produced from LSTs with missing or inaccurate types, it severely compromises interoperability with other recipes.
:::

#### Untyped Substitution Indicators

You should use the untyped substitution indicator `#{}` when providing a non-LST element like a `String` as a template substitution argument. When providing an LST element, like a `J.Identifier`, into a context where the concept of type is nonsensical, you should begin by converting them to an appropriate `String`. Examples of untyped insertion points include the text of a comment, the name of a class in a class declaration, and keywords like `if` or `while`. Examples of snippets with untyped substitution indicators:

* `// TODO: Fix bug #{}`
* `public class #{} { }`

### Additional Imports

If a snippet of code is introducing a type that might be new to the insertion scope, `JavaTemplate` has to be informed using the method `JavaTemplate.Builder.imports()`. For static imports, use `JavaTemplate.Builder.staticImports()`. For example:

```java
JavaTemplate.builder("new SecureRandom()")
        .imports("java.security.SecureRandom")
        .build();
```

:::warning
Failing to declare required imports results in `JavaTemplate` producing LST elements missing type attribution, or failing outright with an exception. While correct source code can sometimes be produced from LSTs with missing or inaccurate types it severely compromises interoperability with other recipes.
:::

:::warning
Declaring an import to `JavaTemplate` does not automatically add a corresponding import to the `SourceFile` being refactored. `JavaVisitor.maybeAddImport()` is the recommended way to add imports to Java `SourceFile`.
:::

### Referencing External Types

`JavaTemplate` uses a `JavaParser` to convert text into LST elements. The default `JavaParser` is aware only of types provided by the Java Runtime, so if your snippet references any types from other sources you must supply an appropriately configured `JavaParser`.

#### From the runtime classpath

The function `JavaParser.Builder.classpath(`) can be used to look up libraries by artifactId from the runtime classpath. In this example, the `template` snippet references a symbol of type `BasicPolymorphicTypeValidator`, which is provided by the `jackson-databind` library:

```java
JavaTemplate.builder(template.toString())
    .imports("com.fasterxml.jackson.databind.jsontype.BasicPolymorphicTypeValidator")
    .javaParser(JavaParser.fromJavaVersion()
        .classpath("jackson-databind"))
    .build();
```

:::warning
It isn't always possible to include all the libraries a Recipe may want to reference on the runtime classpath. This is most frequently an issue when creating recipes that migrate between different versions of the same library. For example, if a recipe migrates JUnit 4.0 to 4.13, only one of those versions of JUnit can be on the classpath at a time. Recipes that migrate between library versions tend to have the older version on the runtime classpath, providing stubs for the newer types and methods.
:::

#### From Stubs

Whenever a symbol you want to reference is not, or cannot, be looked up from the runtime classpath a stub providing all of the relevant type information can be provided instead. Stubs are provided with `JavaParser.Builder.dependsOn()`. Stubs must be valid Java source files, but only methods that are used in the template must exist in the stub, and those methods can be implemented with the bare minimum to be syntactically valid method declarations.

```java
JavaTemplate.builder("Duration.ofMillis(#{any(int)})")
    .imports("java.time.Duration")
    .javaParser(JavaParser.fromJavaVersion()
        .dependsOn(
            "package org.springframework.boot.web.client;" +
            "import java.time.Duration;" +
            "public class RestTemplateBuilder {" +
            "public RestTemplateBuilder setConnectTimeout(java.time.Duration) { return null; }" +
            "public RestTemplateBuilder setReadTimeout(java.time.Duration) { return null; }" +
            "}"))
    .build();
```

:::info
There are many examples of `JavaTemplate` stubs in [rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks) and [rewrite-spring](https://github.com/openrewrite/rewrite-spring).
:::

## Context-free vs. Context-sensitive JavaTemplates

There are two types of JavaTemplates – each having their own advantages/disadvantages:

A **context-free** JavaTemplate does not depend on the surrounding LST. It is a self-contained template that simply replaces or inserts code which doesn't require knowledge of the broader context of the source file. This is particularly useful for simple transformations like replacing method calls or inserting boilerplate code.

For instance, the following template only refers to declarations (`java.lang.System`, `java.lang.System#out`, and `java.io.PrintStream#println(String)`) that are accessible from the Java compiler's classpath:

```java
JavaTemplate.builder("System.out.println(\"Hello, World!\");")
            .build();
```

The main advantage of context-free templates is that they only need to be parsed once before their parameters can be substituted. This has a much smaller performance impact on recipe runs.

A **context-sensitive** JavaTemplate, on the other hand, can refer to declarations within the surrounding LST it will end up getting embedded into. It can refer to declarations in the scope of the existing code, such as variables, fields, locally declared or imported types, or method parameters.

An example can help this make more sense. Let's take a look at [a JavaTemplate in rewrite-migrate-java](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/net/MigrateURLDecoderDecode.java#L57-L63):

```java
m = JavaTemplate.builder("#{any(String)}, StandardCharsets.UTF_8")
                .contextSensitive()
                .imports("java.nio.charset.StandardCharsets")
                .build().apply(
                        getCursor(),
                        m.getCoordinates().replaceArguments(),
                        m.getArguments().toArray());
```

This has to be context-sensitive because, for the type attribution, it needs to be generated as part of a call to the correct method.

In other words, context sensitivity makes the most sense when you want to reference a field that's awkward/difficult to get a type attributed reference of.

This context of the surrounding code comes with a performance impact, though. Every time a context-sensitive JavaTemplate is applied, a small Java source file capturing all imports and declarations that are in scope needs to be generated and compiled using the Java compiler.

Of course, that's not to say that you _shouldn't_ use them but, rather, that you should be aware of the cost of using them.

## Usage

Once an instance of the template has been created it can be applied to an LST element with the method `JavaTemplate apply(..)`. This example visitor uses a template to replace all method invocations of `countLetters(String)` with `withString(String).length()`:

```java
public class ChangeMethodInvocation extends JavaIsoVisitor<ExecutionContext> {
    private final JavaTemplate template = JavaTemplate.builder("withString(#{any(java.lang.String)}).length()")
        .javaParser(JavaParser.fromJavaVersion().classpath("example-utils"))
        .staticImports("org.example.StringUtils.withString")
        .build();

    public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext p) {
        J.MethodInvocation m = super.visitMethodInvocation(method, p);
        if (m.getSimpleName().equals("countLetters")) {

            m = template.apply(getCursor(), m.getCoordinates().replace(), m.getArguments().get(0)); //Template Invocation
            maybeAddImport("org.example.StringUtils", "withString");
        }
        return m;
    }
}
```

Invoking `JavaTemplate#apply()` requires the specification of coordinates and the values to be filled in for any substitution indicators.

:::warning
Don't forget to use `JavaVisitor.maybeAddImport()` to add imports for any new types your template might be introducing!
:::

### Coordinates

Most LST elements are complex enough that there isn't only one way a template could possibly be applied to it. To resolve these ambiguities, every LST element exposes one or more coordinates indicating exactly what substitution should be made. Consider this simple method declaration:

```java
public String foo(Object arg1, String arg2) {
    return arg1.toString() + arg2;
}
```

You might want to replace the entire method declaration with the template result, in which case `J.MethodDeclaration.getCoordinates().replace()` is the appropriate coordinate. But maybe you just want to add an annotation, in which case `J.MethodDeclaration.getCoordinates().addAnnotation()` is appropriate. Each LST element exposes different coordinates. All coordinates include a "replace" coordinate to replace the entire LST element with the template result. Look for a `getCoordinates()` method to see what other coordinates are available.

:::info
There are thousands of possible coordinates, many with no practical application. To avoid wasting effort implementing coordinates no one would ever use, coordinates have been implemented on an as-needed basis. If existing coordinates are insufficient to your needs, come tell us about it in the [OpenRewrite Slack](https://join.slack.com/t/rewriteoss/shared\_invite/zt-nj42n3ea-b\~62rIHzb3Vo0E1APKCXEA) or [file an issue](https://github.com/openrewrite/rewrite/issues).
:::

## Using JavaTemplates to match existing code

As you've seen previously in this doc, JavaTemplates can be used to "generate" code that can be inserted into the LST model. That's not their only use-case, however. They can also be used to match existing code in the LST model.

We extensively use this functionality in our [Refaster template recipes](../authoring-recipes/types-of-recipes.md#refaster-template-recipes). It can also be quite useful for tests.

To help make this clearer, let's take a look at the [SimplifyTernary recipe](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/SimplifyTernary.java#L46-L62):

```java
@RecipeDescriptor(
        name = "Replace `booleanExpression ? false : true` with `!booleanExpression`",
        description = "Replace ternary expressions like `booleanExpression ? false : true` with `!booleanExpression`."
)
public static class SimplifyTernaryFalseTrue {

    @BeforeTemplate
    boolean before(boolean expr) {
        return expr ? false : true;
    }

    @AfterTemplate
    boolean after(boolean expr) {
        // We wrap the expression in parentheses as the input expression might be a complex expression
        return !(expr);
    }
}
```

Behind the scenes, that recipe gets translated into the following code. Notice how we create JavaTemplates but only use them for _matching_.

```java
@NullMarked
public static class SimplifyTernaryFalseTrueRecipe extends Recipe {

    @Override
    public String getDisplayName() {
        return "Replace `booleanExpression ? false : true` with `!booleanExpression`";
    }

    @Override
    public String getDescription() {
        return "Replace ternary expressions like `booleanExpression ? false : true` with `!booleanExpression`.";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new AbstractRefasterJavaVisitor() {
            final JavaTemplate before = JavaTemplate.builder("#{expr:any(boolean)} ? false : true").build();
            final JavaTemplate after = JavaTemplate.builder("!(#{expr:any(boolean)})").build();

            @Override
            public J visitTernary(J.Ternary elem, ExecutionContext ctx) {
                JavaTemplate.Matcher matcher;
                if ((matcher = before.matcher(getCursor())).find()) {
                    return embed(
                            after.apply(getCursor(), elem.getCoordinates().replace(), matcher.parameter(0)),
                            getCursor(),
                            ctx,
                            REMOVE_PARENS, SHORTEN_NAMES, SIMPLIFY_BOOLEANS
                    );
                }
                return super.visitTernary(elem, ctx);
            }
        };
    }
}
```

When a JavaTemplate is used for matching, then the `Matcher` can be used to "extract" the matched parameters. For instance, if you had an LST expression such as `foo.isOk() ? true : false` (where `foo` is a local variable or a method parameter), then this will be "matched". If you called `matcher.parameter(0)`, then the return would be the `foo.isOk()` expression.

This can then be passed into another JavaTemplate to generate some new code (such as what was done with the `after` template above).

Another useful example that doesn't involve Refaster recipes is our [JavaTemplateMatchTest class](https://github.com/openrewrite/rewrite/blob/main/rewrite-java-test/src/test/java/org/openrewrite/java/JavaTemplateMatchTest.java#L32). In there, you can see how we create a JavaTemplate for the use case of matching/finding code rather than replacing it.

## Semantics class shortcut

If you're looking for a more concise way to define JavaTemplates, the [Semantics class](https://github.com/openrewrite/rewrite-templating/blob/main/src/main/java/org/openrewrite/java/template/Semantics.java) offers a powerful alternative. Instead of writing the raw template string yourself, you can define the desired expression or statement directly in Java, and a annotation processor will automatically generate the corresponding template code for you.

This approach helps you avoid dealing with the syntax of raw templates and lets the compiler validate your logic directly.

For example, instead of writing:

```java
JavaTemplate isEmptyReplacement =
        JavaTemplate.builder("(#{any(java.lang.String)} == null || #{any(java.lang.String)}.isEmpty())").build();
```

You can write:

```java
JavaTemplate isEmptyReplacement =
        Semantics.expression(this, "IsEmpty", (String s) -> (s == null || s.isEmpty())).build();
```

Similarly, for statements:

```java
JavaTemplate newInstanceTemplate =
        Semantics.statement(this, "Example", () -> { String example = "some statement"; }).build();
```

Behind the scenes, the annotation processor transforms these `Semantics.expression(...)` and `Semantics.statement(...)` calls into actual JavaTemplate definitions with proper substitution indicators and imports.

:::info
Prerequisite: To use this feature, make sure your project is set up for Refaster-style recipes with annotation processing enabled. See the [How to create a Refaster recipe](../authoring-recipes/refaster-recipes#how-to-create-a-refaster-recipe) section for more details.
:::

Since the Semantics class is functionally equivalent to defining a JavaTemplate manually, while offering compile-time safety and slightly less boilerplate, it is well-suited for cases where your template is just beyond what Refaster can express easily. It provides a convenient middle ground between Refaster and fully custom JavaTemplate logic.
