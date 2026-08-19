---
sidebar_label: Writing Kotlin recipes
description: How to write, test, and run Kotlin recipes with the OpenRewrite Kotlin recipe DSL.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Writing Kotlin recipes

Most refactorings you want to apply to a Kotlin codebase are pattern-shaped: this expression should look like that expression. Writing a visitor by hand for each one means the boilerplate dwarfs the rewrite itself.

The **Kotlin recipe domain-specific language (DSL)** removes that boilerplate. It is a [K2 compiler plugin](https://kotlinlang.org/docs/whatsnew20.html) shipped inside `rewrite-kotlin` that reads a before/after pair of Kotlin lambdas and synthesizes a `Recipe` subclass at compile time – the same way [Refaster's annotation processor](./refaster-recipes.md) does for Java.

In this guide, we will walk you through setting up a Kotlin recipe project, writing pattern-shaped recipes with the DSL, testing them, and dropping into an imperative visitor when a change needs more than a fixed before/after pair. You'll also see how a recipe authored this way can rewrite Java, Groovy, and Scala sources, not just Kotlin ones.

:::tip
If you would rather start from working code, the [`kotlin-recipe-starter` repository](https://github.com/moderneinc/kotlin-recipe-starter) contains every recipe in this guide, with tests, packaging, and CI already set up. Click **Use this template** on GitHub, rename the `com.yourorg` group to your own, and start writing.
:::

## Prerequisites

This guide assumes that:

* You have JDK 21 installed (the `rewrite-kotlin` parser is built and validated on JDK 21)
* You are comfortable writing and running Kotlin tests with Gradle
* You have read through the [recipe development environment guide](./recipe-development-environment.md)

## How Kotlin recipes work

Before writing your own recipe, it's worth taking a few minutes to understand where Kotlin support sits in OpenRewrite.

Kotlin support has always been an *extension* of Java support rather than a replacement for it. The [Kotlin Lossless Semantic Tree (LST)](../concepts-and-explanations/lossless-semantic-trees.md) is built on top of the Java LST: classes, methods, blocks, statements, method invocations, field accesses, literals, and identifiers all parse to the same `J.*` nodes a Java source file would produce.

The handful of Kotlin constructs that have no Java equivalent – `when` expressions, the `!!` operator, properties as a first-class declaration kind, destructuring declarations, string templates, and type aliases – get their own `K.*` node types. Each of those implements `J.Expression`, `J.Statement`, or `J.TypeTree`, and `K.CompilationUnit` implements `JavaSourceFile`.

Two practical consequences follow from that shared model:

* An ordinary Java or [declarative YAML recipe](./types-of-recipes.md#declarative-recipes) already runs against Kotlin sources. A type-based recipe such as `org.openrewrite.java.ChangeType` rewrites Kotlin the same way it rewrites Java, and `KotlinVisitor` extends `JavaVisitor`, adding `visitX(K.X, P)` overloads for the Kotlin-specific nodes.
* The relationship runs in both directions. A recipe authored with the Kotlin DSL compiles to a language-agnostic, `MethodMatcher`-driven recipe. If its pattern names a shared or pure-Java API, that recipe also rewrites **Java, Groovy, and Scala** sources, whose LSTs are built on the same Java model. See [rewriting other JVM languages](#rewriting-other-jvm-languages-with-a-kotlin-recipe).

### The three ways to write a Kotlin recipe

| Approach | When to reach for it |
|----------|----------------------|
| [Declarative DSL](#writing-a-pattern-shaped-recipe) – `rewrite { } to { }` | Pattern-shaped rewrites: a before expression becomes an after expression. This covers the common case. |
| [Imperative scope](#dropping-into-an-imperative-visitor) – `kotlin { visit… }` | The change depends on cursor context, annotations, or conditional logic that a fixed pattern cannot express. |
| [Declarative YAML](./types-of-recipes.md#declarative-recipes) | You want to compose existing type-based recipes, which apply to Kotlin as readily as to Java. |

## Setting up your project

The DSL needs a Gradle build with the Kotlin plugin applied, because the compiler plugin has to be on the Kotlin compiler's plugin classpath. Here are the pieces that matter in a `build.gradle.kts` file:

```kotlin title="build.gradle.kts"
plugins {
    id("org.openrewrite.build.recipe-library-base") version "latest.release"

    // The Kotlin recipe DSL is authored in Kotlin and compiled by the K2 compiler.
    kotlin("jvm") version "2.3.20"
}

group = "com.yourorg"
description = "OpenRewrite recipes for Kotlin, authored with the Kotlin recipe DSL."

dependencies {
    // The bom aligns every org.openrewrite module - including rewrite-kotlin - to one version.
    implementation(platform("org.openrewrite:rewrite-bom:latest.release"))

    // The Kotlin LST extends the Java LST, so recipes lean on both modules.
    implementation("org.openrewrite:rewrite-java")
    implementation("org.openrewrite:rewrite-kotlin")

    // This is the line that enables the DSL: the K2 compiler plugin ships inside rewrite-kotlin.
    kotlinCompilerPluginClasspath(platform("org.openrewrite:rewrite-bom:latest.release"))
    kotlinCompilerPluginClasspath("org.openrewrite:rewrite-kotlin")

    // Parse Kotlin sources under test against a real JDK 21 runtime.
    runtimeOnly("org.openrewrite:rewrite-java-21")

    testImplementation("org.openrewrite:rewrite-test")
}

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}
```

:::info
The `kotlinCompilerPluginClasspath("org.openrewrite:rewrite-kotlin")` line is what turns `rewrite { } to { }` into a recipe. Without it, your `recipe(...)` declarations still compile, but they produce nothing runnable.
:::

Recipe libraries usually target Java 8 bytecode so they load in older rewrite runtimes, while tests exercise the JDK 21 Kotlin parser. The [`kotlin-recipe-starter` build file](https://github.com/moderneinc/kotlin-recipe-starter/blob/main/build.gradle.kts) shows how to split the two `jvmTarget` settings, along with the publishing and release plugins you'll want for a real recipe module.

## Writing a pattern-shaped recipe

A recipe is a top-level Kotlin property. There are no annotations, no separate template class, and no annotation processor to configure:

```kotlin title="UseModernKotlinApis.kt"
val UseUppercase: Recipe = recipe(
    displayName = "Use `uppercase()` instead of `toUpperCase()`",
    description = "`String.toUpperCase()` was deprecated in Kotlin 1.5 in favor of the locale-explicit `uppercase()`.",
) {
    edit {
        rewrite { s: String -> s.toUpperCase() } to { s -> s.uppercase() }
    }
}
```

The `rewrite { } to { }` clause reads as a before/after pair of Kotlin lambdas, with parameters bound at the call sites the recipe matches. It has the same expressive power as a Refaster `@BeforeTemplate` and `@AfterTemplate` pair.

The `edit` block is one of three phases the DSL exposes. These phases line up with the [three recipe types](./types-of-recipes.md) you would write by hand in Java:

* `scan` accumulates information across files before any edits are made
* `edit` rewrites trees in place
* `generate` adds new source files

These phases compose, so a recipe can scan its sources, edit based on what it found, and then generate a summary report.

:::warning
Keep the `displayName` and `description` arguments to `recipe(...)` as plain string literals. The compiler plugin silently falls back to a non-serializable recipe when they are built with `+` concatenation.
:::

### Binding multiple parameters

The before and after lambdas can take more than one parameter, and a parameter can itself be a lambda. Both are threaded through to the `to { }` side by name:

```kotlin title="UseModernKotlinApis.kt"
val UseSumOf: Recipe = recipe(
    displayName = "Use `sumOf` instead of `sumBy`",
    description = "`Iterable.sumBy { … }` was deprecated in Kotlin 1.5 in favor of the type-inferred `sumOf { … }`.",
) {
    edit {
        rewrite { xs: Iterable<Int>, selector: (Int) -> Int -> xs.sumBy(selector) } to { xs, selector -> xs.sumOf(selector) }
    }
}
```

A zero-parameter pattern (`{ -> … }`) matches an expression that binds no arguments – a constant field access, for example, rather than a method call:

```kotlin title="UseModernKotlinApis.kt"
val UseKotlinMathPi: Recipe = recipe(
    displayName = "Use `kotlin.math.PI` instead of `java.lang.Math.PI`",
    description = "Prefer the multiplatform `kotlin.math.PI` constant over the JVM-only `Math.PI`.",
) {
    edit {
        rewrite { -> Math.PI } to { -> kotlin.math.PI }
    }
}
```

:::tip
When a `rewrite { }` lambda names a deprecated API on purpose – which migration recipes do constantly – add `@file:Suppress("DEPRECATION", "DEPRECATION_ERROR")` at the top of the file. The deprecated call is the pattern you are matching, not code you run.
:::

### Composing several recipes into one

`recipes(...)` bundles several recipes into a single runnable recipe. Point consumers at the composite and they get every sub-recipe, while each sub-recipe remains runnable on its own:

```kotlin title="UseModernKotlinApis.kt"
val UseModernKotlinApis: Recipe = recipes(
    displayName = "Use modern Kotlin stdlib APIs",
    description = "Replaces Kotlin stdlib APIs deprecated between 1.4 and 2.0 with their modern equivalents.",
    UseUppercase,
    UseLowercase,
    UseCharCode,
    UseSumOf,
    UseKotlinMathMax,
    UseKotlinMathPi,
)
```

### What the compiler plugin generates

You never see the K2 plugin at work, but it's useful to know what it does. At recipe-compile time it reads the before lambda, extracts a `MethodMatcher` spec from its [Front-end Intermediate Representation (FIR)](https://kotlinlang.org/docs/whatsnew20.html) resolved root call, builds the after template from the after lambda's source, and synthesizes a `Recipe` subclass whose `getVisitor()` walks the LST replacing matches.

Every generated visitor is wrapped in a `Preconditions.check(...)` against a `UsesMethod` – or `UsesField` for property-access patterns – derived from the matcher spec. Files that never reference the targeted member are skipped without being walked.

Consumers see an ordinary `Recipe` instance with serializable metadata and a working `getVisitor()`. No reflection and no `ServiceLoader` wiring are involved.

## Testing your recipe

Kotlin recipes are tested with the same `RewriteTest` harness every other OpenRewrite recipe uses, via the `kotlin(...)` source helper from `rewrite-kotlin`. The helper accepts either one or two arguments:

* Two arguments (`kotlin(before, after)`) assert that the recipe transforms `before` into `after`
* One argument (`kotlin(before)`) asserts that the recipe makes no change

```kotlin title="UseModernKotlinApisTest.kt"
class UseModernKotlinApisTest : RewriteTest {

    @Test
    fun `toUpperCase becomes uppercase`() = rewriteRun(
        { spec -> spec.recipe(UseUppercase) },
        kotlin(
            """
            val s: String = "hello".toUpperCase()
            """,
            """
            val s: String = "hello".uppercase()
            """,
        ),
    )

    @Test
    fun `unrelated calls are left alone`() = rewriteRun(
        { spec -> spec.recipe(UseUppercase) },
        kotlin(
            """
            val s: String = "hello".trim()
            """,
        ),
    )
}
```

Always include at least one no-change test so that you can be confident your recipe does not touch code it should not. For more on structuring recipe tests, see the [recipe testing guide](./recipe-testing.md).

## Rewriting other JVM languages with a Kotlin recipe

Kotlin is not the only language whose LST is built on the Java one. `G.CompilationUnit` (Groovy) and `S.CompilationUnit` (Scala) implement `JavaSourceFile` just as `K.CompilationUnit` does. Because the compiled recipe is `MethodMatcher`-driven over that shared Java LST, a pattern whose before and after templates name a **pure-Java** API rewrites Java, Groovy, and Scala sources as readily as Kotlin ones.

Two conditions have to hold for that reach:

* The API named in the `rewrite { }` and `to { }` lambdas is a pure-Java one, so the matcher resolves to a type every JVM language sees rather than to a Kotlin-only synthetic facade
* The replacement is valid syntax in each target language, which for a plain method rename it generally is

Here, `Character.isSpace(char)` has been deprecated since JDK 1.1 in favor of the identically shaped `Character.isWhitespace(char)`. Only the method name changes, so the rewrite holds in every one of those languages:

```kotlin title="UseIsWhitespace.kt"
@file:Suppress("DEPRECATION", "DEPRECATION_ERROR")

val UseIsWhitespace: Recipe = recipe(
    displayName = "Use `Character.isWhitespace` instead of the deprecated `Character.isSpace`",
    description = "`java.lang.Character.isSpace(char)` has been deprecated since JDK 1.1 in favor of `Character.isWhitespace(char)`, which also recognizes Unicode whitespace.",
) {
    edit {
        rewrite { c: Char -> Character.isSpace(c) } to { c -> Character.isWhitespace(c) }
    }
}
```

You can prove that by running the same recipe through more than one assertion helper in a single test class. Each language module ships its own: `kotlin(...)` from `rewrite-kotlin`, `java(...)` from `rewrite-java`, `groovy(...)` from `rewrite-groovy`, and `scala(...)` from `rewrite-scala`. Here are the Kotlin and Java halves:

```kotlin title="UseIsWhitespaceTest.kt"
@Test
fun `rewrites the call in Kotlin`() = rewriteRun(
    kotlin(
        """
        fun blank(c: Char): Boolean = Character.isSpace(c)
        """,
        """
        fun blank(c: Char): Boolean = Character.isWhitespace(c)
        """,
    ),
)

@Test
fun `rewrites the same call in Java`() = rewriteRun(
    java(
        """
        class Chars {
            boolean blank(char c) {
                return Character.isSpace(c);
            }
        }
        """,
        """
        class Chars {
            boolean blank(char c) {
                return Character.isWhitespace(c);
            }
        }
        """,
    ),
)
```

For more on recipes that span languages, see [writing recipes over multiple source file types](./writing-recipes-over-multiple-source-file-types.md).

## Dropping into an imperative visitor

When a change depends on where a call sits, what annotations surround it, or how two call sites relate, a fixed before/after pair cannot express it. The `kotlin { visit… }` scope gives you the full [visitor](../concepts-and-explanations/visitors.md) underneath – the DSL composes with `KotlinVisitor`; it does not replace it.

The recipe below flags `println` and `print` calls, but leaves alone any call inside a `fun main`, where console output is expected. That "look at where the call sits" check uses the [cursor](../concepts-and-explanations/cursors.md) to walk enclosing declarations:

```kotlin title="FindPrintlnCalls.kt"
private const val PRINTLN_SPEC = "kotlin.io.ConsoleKt println(..)"
private const val PRINT_SPEC = "kotlin.io.ConsoleKt print(..)"

private val PRINTLN_MATCHER = MethodMatcher(PRINTLN_SPEC)
private val PRINT_MATCHER = MethodMatcher(PRINT_SPEC)

val FindPrintlnCalls: Recipe = recipe(
    displayName = "Find `println`/`print` calls outside `main`",
    description = "Flags `println` and `print` calls, which usually belong behind a logging framework in production code. Calls inside a `fun main` are left alone.",
) {
    edit {
        check(
            or(usesMethod(PRINTLN_SPEC), usesMethod(PRINT_SPEC)),
            kotlin {
                visitMethodInvocation { mi ->
                    if (!PRINTLN_MATCHER.matches(mi) && !PRINT_MATCHER.matches(mi)) {
                        return@visitMethodInvocation mi
                    }
                    val enclosingFunction = cursor.firstEnclosing(J.MethodDeclaration::class.java)
                    if (enclosingFunction?.simpleName == "main") {
                        return@visitMethodInvocation mi
                    }
                    SearchResult.found(mi, "prefer a logging framework over console output") ?: mi
                }
            },
        )
    }
}
```

:::warning
Unlike `rewrite { } to { }`, an imperative visitor is **not** wrapped in a `UsesMethod` precondition for you. Add one with `check(...)`, as above, so that files which never call the targeted method are skipped before the LST is traversed.
:::

Notice that the method specs name `kotlin.io.ConsoleKt` rather than a type you would see in source. For Kotlin extension functions, the matcher owner is the synthetic JVM facade class – `kotlin.text.StringsKt` for `String.lowercase()`, `kotlin.io.ConsoleKt` for `readLine()` – which no source file references directly. That is why the DSL constrains on `UsesMethod` and `UsesField` rather than `UsesType`. For more on writing these specs, see the [method patterns reference](../reference/method-patterns.md).

## Synthesizing code with `KotlinTemplate`

The `rewrite { } to { }` DSL rewrites a matched expression into a fixed after-expression. When the "after" side is a different syntactic *shape* – a new operator, moved arguments, added control flow – reach for `KotlinTemplate`, the Kotlin counterpart to [`JavaTemplate`](../concepts-and-explanations/javatemplate.md). It parses a snippet of Kotlin into a fresh LST and splices it in, filling each `#{...}` hole with a node lifted from the matched code.

The recipe below rewrites a hand-written null guard into the equivalent Elvis `throw` one-liner. Two things put it beyond `rewrite { } to { }`: the before-pattern is an `if` *statement* rather than an expression call, and the guarded value moves in front of a new `?:` operator that reuses the original `throw` on the right:

```kotlin title="UseElvisThrow.kt"
class UseElvisThrow : Recipe() {

    override fun getDisplayName(): String = "Use an Elvis `throw` for null guards"

    override fun getDescription(): String =
        "Replaces a hand-written `if (x == null) throw ...` guard with the equivalent `x ?: throw ...` Elvis " +
            "expression, reusing the thrown exception unchanged."

    override fun getVisitor(): TreeVisitor<*, ExecutionContext> =
        object : KotlinVisitor<ExecutionContext>() {

            override fun visitIf(iff: J.If, ctx: ExecutionContext): J {
                val nullCheck = iff.ifCondition.tree as? J.Binary ?: return super.visitIf(iff, ctx)
                if (nullCheck.operator != J.Binary.Type.Equal || iff.elsePart != null) {
                    return super.visitIf(iff, ctx)
                }
                val value = when {
                    J.Literal.isLiteralValue(nullCheck.right, null) -> nullCheck.left
                    J.Literal.isLiteralValue(nullCheck.left, null) -> nullCheck.right
                    else -> return super.visitIf(iff, ctx)
                }
                val exception = when (val thenPart = iff.thenPart) {
                    is J.Throw -> thenPart.exception
                    is J.Block -> (thenPart.statements.singleOrNull() as? J.Throw)?.exception
                        ?: return super.visitIf(iff, ctx)
                    else -> return super.visitIf(iff, ctx)
                }
                return KotlinTemplate.builder("#{any()} ?: throw #{any()}").build()
                    .apply(cursor, iff.coordinates.replace(), value, exception)
            }
        }
}
```

The whole `if` is replaced by a node of a different type, so the visitor is a non-iso `KotlinVisitor` rather than a `KotlinIsoVisitor`.

## Emitting a data table

A recipe can emit structured rows instead of, or alongside, changing code – see the [data tables guide](./data-tables.md) for the full picture.

Inserting a row needs the `ExecutionContext`, which a visit method receives directly. The `kotlin { visitX { node -> … } }` sugar exposes the node but not the context, so data table recipes are written as a full `Recipe` with a `KotlinIsoVisitor`:

```kotlin title="FindKotlinFunctions.kt"
class KotlinFunctions(recipe: Recipe) : DataTable<KotlinFunctions.Row>(
    recipe,
    "Kotlin functions",
    "The name and parameter count of every Kotlin function declaration.",
) {
    data class Row(
        @field:Column(displayName = "Source path", description = "Path of the file that declares the function.")
        val sourcePath: String,
        @field:Column(displayName = "Function name", description = "The declared function name.")
        val functionName: String,
        @field:Column(displayName = "Parameter count", description = "Number of value parameters the function declares.")
        val parameterCount: Int,
    )
}

class FindKotlinFunctions : Recipe() {

    override fun getDisplayName(): String = "Find Kotlin function declarations"

    override fun getDescription(): String =
        "Records the name and parameter count of every Kotlin function declaration in a data table."

    override fun getVisitor(): TreeVisitor<*, ExecutionContext> =
        object : KotlinIsoVisitor<ExecutionContext>() {
            private val functions = KotlinFunctions(this@FindKotlinFunctions)

            override fun visitMethodDeclaration(
                method: J.MethodDeclaration,
                ctx: ExecutionContext,
            ): J.MethodDeclaration {
                val sourcePath = cursor.firstEnclosing(SourceFile::class.java)?.sourcePath?.toString() ?: ""
                val parameterCount = method.parameters.count { it !is J.Empty }
                functions.insertRow(ctx, KotlinFunctions.Row(sourcePath, method.simpleName, parameterCount))
                return super.visitMethodDeclaration(method, ctx)
            }
        }
}
```

## Running your recipe against a codebase

Once your tests pass, you'll want to try the recipe against a real project. The [Rewrite Gradle and Maven plugins](../running-recipes/getting-started.md) run it the same way they run any other recipe: publish the recipe module, add it as a dependency of the plugin, and name it as an active recipe.

### Knowing what your recipe is called

To name a recipe in a build file, you need to know what it compiles to. The compiler plugin synthesizes a class for each recipe declared with the DSL, and that class name – not the property name – is the recipe ID:

| Declaration | Recipe ID |
|-------------|-----------|
| `val UseUppercase: Recipe = recipe(…)` | `com.yourorg.UseUppercase$KtRecipe` |
| `val UseModernKotlinApis: Recipe = recipes(…)` | `com.yourorg.UseModernKotlinApis$KtRecipe` |
| `class UseElvisThrow : Recipe()` | `com.yourorg.UseElvisThrow` |

:::warning
The `$` in a synthesized recipe ID has to survive whatever reads it. In a Gradle build file – Kotlin DSL or Groovy DSL – escape it as `\$KtRecipe` so it isn't read as a string template. Maven's XML needs no escaping. On a command line, wrap the whole ID in single quotes, as in `'com.yourorg.UseUppercase$KtRecipe'`, since an unquoted `$KtRecipe` is expanded to an empty string by most shells.
:::

### Running with the Gradle or Maven plugin

Publish the recipe module locally:

```bash
./gradlew publishToMavenLocal
```

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

```kotlin title="build.gradle.kts"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.UseModernKotlinApis\$KtRecipe")
}

dependencies {
    rewrite("com.yourorg:kotlin-recipe-starter:latest.integration")
}
```

Then run `./gradlew rewriteRun` against the project you want to change.

</TabItem>
<TabItem value="maven" label="Maven">

```xml title="pom.xml"
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
  <configuration>
    <activeRecipes>
      <recipe>com.yourorg.UseModernKotlinApis$KtRecipe</recipe>
    </activeRecipes>
  </configuration>
  <dependencies>
    <dependency>
      <groupId>com.yourorg</groupId>
      <artifactId>kotlin-recipe-starter</artifactId>
      <version>1.0.0-SNAPSHOT</version>
    </dependency>
  </dependencies>
</plugin>
```

Then run `mvn rewrite:run` against the project you want to change.

</TabItem>
</Tabs>

To try the recipe against a project whose build file you'd rather not touch, see running Rewrite without modifying the build for [Gradle](../running-recipes/running-rewrite-on-a-gradle-project-without-modifying-the-build.md) and [Maven](../running-recipes/running-rewrite-on-a-maven-project-without-modifying-the-build.md).

:::tip
Publishing on every edit is a slow loop while you are still developing a recipe. The [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) can run a recipe straight from your compiled classes – `mod config recipes active set` accepts a Kotlin source file as of CLI 4.4.2 – so each change costs a `./gradlew classes` rather than a publish, and the [Moderne IntelliJ plugin](https://docs.moderne.io/user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install) can [attach a debugger](https://docs.moderne.io/user-documentation/moderne-ide-integration/how-to-guides/debugging-recipes) to that same recipe. Both are also how you'd try the recipe against many repositories at once instead of one at a time.
:::

### Sharing your recipe

To share the recipe more widely, publish the artifact to your organization's artifact repository. Anyone can then add it as a dependency of the Gradle or Maven plugin exactly as above, swapping the `latest.integration` or `-SNAPSHOT` version for a released one.

If you think the recipe would be useful to others, consider [contributing it to OpenRewrite](./contributing-to-openrewrite.md) instead of keeping it internal.

## Next steps

Now that you've written your first Kotlin recipe, you can go deeper:

* Clone the [`kotlin-recipe-starter` repository](https://github.com/moderneinc/kotlin-recipe-starter) for a complete, runnable project containing every recipe in this guide
* Read [Kotlin recipes for OpenRewrite](https://moderne.ai/blog/kotlin-recipes-for-openrewrite) for the design rationale behind the DSL, along with the migration, performance, and Android recipe catalogs built on top of it
* Browse the [Kotlin recipes in the recipe catalog](/recipes/kotlin) for real-world examples to learn from and build on
* Read the [Java refactoring recipe guide](./writing-a-java-refactoring-recipe.md) for deeper coverage of visitors, preconditions, and templates that carry over to the shared LST model
* Review the [recipe conventions and best practices guide](./recipe-conventions-and-best-practices.md) to make sure your recipes are reliable and scalable
* Explore the [`rewrite-kotlin` source](https://github.com/openrewrite/rewrite/tree/main/rewrite-kotlin) to see how the Kotlin LST, parser, and DSL compiler plugin are implemented
