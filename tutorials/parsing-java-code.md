---
description: >-
  For when you want to write your own programs leveraging Rewrite's core
  technology for search or transformation.
---

# Parsing Java Code

This guide covers how to use Rewrite to parse Java code. This is useful when you want to build your own Java main method, microservice, or data pipeline to process Java source code and perform structured search or transformation on that source code. To apply Rewrite recipes for common Java framework migrations and other fixes, refer instead to the guides on the [Maven](../getting-started/rewrite-maven-plugin/) or [Gradle ](../getting-started/rewrite-gradle-plugin.md)plugins.

## Required Dependencies

For Maven, define a compile scoped dependency on `rewrite-java` and a runtime scoped dependency on `rewrite-java-11` \(or `rewrite-java-8` if your code is at that language level\).

```markup
<dependency>
  <groupId>org.openrewrite</groupId>
  <artifactId>rewrite-java</artifactId>
  <version>6.1.21</version>
</dependency>
<dependency>
  <groupId>org.openrewrite</groupId>
  <artifactId>rewrite-java-11</artifactId>
  <version>6.1.21</version>
  <scope>runtime</scope>
</dependency>
```

For Gradle, define an implementation dependency on `rewrite-java` and a runtime dependency on the appropriate language level parser for your code.

```groovy
implementation("org.openrewrite:rewrite-java:6.1.21")
runtimeOnly("org.openrewrite:rewrite-java-11:6.1.21")
```

## Constructing a Java Parser

To build a Rewrite AST for Java source code, construct a `JavaParser` as shown below. We will discuss each of the options in detail.

```java
JavaParser parser = JavaParser.fromJavaVersion()
    .classpath(classpathAsListOfPaths) // optional
    .logCompilationWarningsAndErrors(false) // optional, for quiet parsing
    .styles(listOfStyles) // optional
    .build();
```

### Classpath

Providing a classpath is optional, because type-attribution is a _best effort_ for each element. Examples of different-levels of type-attribution:

* **No types needed at all**. If you are applying a refactoring rule like auto-remediation for Checkstyle's `WhitespaceBefore` rule, we're strictly looking at source formatting and it's OK if none of the AST elements have types on them, as it doesn't influence the outcome.
* **Partial types needed**. If searching for occurrences of deprecated Guava methods, it is OK to construct a `JavaParser` with a path to only a Guava JAR. It doesn't even have to be the Guava version that the project is using! The resulting ASTs will have limited type information, but just enough to search for what we want.
* **Full types needed**. When ASTs are emitted as a side-effect of compilation to a central data store for later arbitrary code search, they need to have full type information, because we can't be sure in advance what kinds of searches people will attempt.

`JavaParser` contains a convenience method for building a `JavaParser` from the runtime classpath of the Java process that is constructing the parser:

```java
JavaParser parser = JavaParser.fromJavaVersion()
    .classpath(JavaParser.dependenciesFromClasspath("guava"))
    .build();
```

This utility takes the "artifact name" of the dependency to look for. The artifact name is the artifact portion of `group:artifact:version` coordinates. For example, for Google's Guava \(`com.google.guava:guava:VERSION`\), the artifact name is `guava`.

### Styles

[Styles](../v1beta/styles.md) are how Rewrite keeps track of the stylistic expectations of a source repository, things like whitespace and indentation, in order to generate transformations that look consistent with surrounding code. All Java styles implement the `org.openrewrite.java.JavaStyle` interface. Currently, Rewrite supports import layout and tab/indent styles for Java source.

### Import Layout \(style\)

Import layouts define the order of imports as well as how to do star folding of multiple imports from the same package. Many Java transformations rely on this style to correctly add and remove imports. For example, suppose we have the following code for a class and that the project it lives has a convention to fold three or more imports into a star import.

```java
import java.util.*;
import io.moderne.*;

...
Collection<String> names;
Map<String, String> emailByName = new HashMap<>();
```

{% hint style="warning" %}
\(Unrelated to import ordering\) this code also demonstrates the importance of _type attribution_ to doing useful things while transforming code. If we just parsed the syntax, it is impossible to determine whether `Collection` comes from the `java.util` package or the `io.moderne` package. Type attribution makes certain in the AST which package these later type references come from.
{% endhint %}

As it is, this code uses three imports from `java.util`: `Collection`, `Map`, and `HashMap`. If we now apply a transformation to [change the type](../reference/java/refactoring-java-source-code/changetype.md) `HashMap` to `java.util.concurrent.ConcurrentHashMap`, then the number of imports from the `java.util.*` package will shrink to two and the transformation should actually _unfold_ the original import while also adding a new one. The result should be this:

```java
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import io.moderne.*;
```

Import layouts consist of three properties.

* `classCountToUseStarImport` - How many imports from the same package must be present before they should be collapsed into a star import. The default is 5.
* `nameCountToUseStarImport` - How many _static_ imports from the same type must be present before they should be collapsed into a static star import. The default is 3.
* `blocks` - An ordered specification of the order in which imports from various packages \(and static imports\) should appear. The YML example below contains an example of all of the possibilites.

The `blocks` configuration is designed to look exactly like IntelliJ IDEA's GUI configuration for import layouts. You can type out in YAML exactly what you see in IDEA's configuration in File &gt; Settings &gt; Editor &gt; Code Style &gt; Java.

![](../.gitbook/assets/image%20%286%29.png)

Styles are defined declaratively in YML and added to an [Environment](../v1beta/environment.md). Use the `specs.openrewrite.org/v1beta/style` resource type to define an import layout as shown below.

```yaml
---
type: specs.openrewrite.org/v1beta/style
name: io.moderne.spring.style

configure:
  org.openrewrite.java.style.ImportLayoutStyle:
    layout:
      classCountToUseStarImport: 999
      nameCountToUseStarImport: 999
      blocks:
        - import java.*
        - <blank line>
        - import javax.*
        - <blank line>
        - import all other imports
        - <blank line>
        - import org.springframework.*
        - <blank line>
        - import static all other imports
```

From an `Environment`, we can then populate the parser with this style.

```java
Environment env; // refer to the Environment guide for how this is built

JavaParser parser = JavaParser.fromJavaVersion()
    .styles(env.styles("io.moderne.spring.style"))
    .build();
```

### Tabs and Indents \(style\)

Tabs and indents cover many of the options in the tabs and indents configuration of IDE's like IntelliJ IDEA.

![](../.gitbook/assets/image%20%288%29.png)

This style is defined declaratively in YML and can be retrieved from the `Environment` to apply to a `JavaParser` as we just saw with import layout styles. The configuration shown below also documents what the defaults are for each option, which match the default tab and indent styles of IntelliJ IDEA.

```yaml
---
type: specs.openrewrite.org/v1beta/style
name: io.moderne.spring.style

configure:
  org.openrewrite.java.style.TabAndIndentStyle:
    useTabCharacter: false
    tabSize: 4
    indentSize: 4
    continuationIndent: 8
```

### Declaration Order \(style\)

The declaration order style controls the order in which fields, constructors, and methods appear in class declarations. Declarations in a class are grouped into "blocks" of declarations, matching the most specific block defined in the style.

In the example below \(which shows most of the available options\), a field `private static final Logger logger;` would match the `private static fields` block, because it best matches the modifiers in that block.

`static` matches over `final`, because in Java code static fields and methods tend to be grouped together. Precedence then goes to the highest number of matching modifiers, then the highest number of modifiers, then alphabetically by field or method name.

```yaml
---
type: specs.openrewrite.org/v1beta/style
name: io.moderne.CustomDeclarationOrder
configure:
  org.openrewrite.java.style.DeclarationOrderStyle:
    layout:
      blocks:
        - public static fields
        - <blank line>
        - private static fields
        - <blank line>
        - final fields
        - <blank line>
        - all other fields
        - <blank line>
        - all other constructors
        - <blank line>
        - all other methods
        - all accessors
        - equals
        - hashCode
        - toString
        - all other classes
```

In addition to the options shown above, you can also use `all getters`, `all setters`, and `all with`. Consecutive blocks of methods implicitly have a blank line between them, and the individual methods belonging to a block automatically have one blank line spacing between them.

## Parsing Source Files

Now that we have a `JavaParser` instance, we can parse all the source files in a project with one of the `parse` methods which return one or more `J.Compilation` unit instances. `J.CompilationUnit` is the top-level AST element for Java source files which contains information about the package, imports, and any class/enum/interface definitions contained in the source file. `J.CompilationUnit` is the basic building block upon which we'll build refactoring and search operations for Java source code.

* `JavaParser#parse(Iterable<java.nio.file.Path>, Path)` - This is the most common form, where the first argument is a collection of source files and this returns a list of `J.CompilationUnit`, the top-level AST element for Java. If you are parsing the contents of a Maven or Gradle-based repository, pass in all of the source files belonging to a source set \(e.g. src/main/java, src/test/java\) at once. The second argument should be the path of the repository root which helps the parser relativize the source file paths so the serialized representation of the ASTs is independent of where you had the files on disk when you parsed them initially.
* `JavaParser#parse(Path, Path)` - This is a shortcut for the above, where we only provide one file and receive one `J.CompilationUnit` in return. It is largely used for testing.
* `JavaParser#parse(String...)` - This is commonly used in unit testing Java searches and transformations, allowing us to inline the source code directly in our test.
* `JavaParser#parseInputs(Iterable<org.openrewrite.Input> inputs, Path)`. Construct an `Input` with a `Path` \(which needn't exist on disk\) and a `Supplier<InputStream>` that can be repeatedly called to read the source file contents. The second argument again relativizes the paths of each input. This method is really useful when you are retrieving Java sources from a database, streaming over an API call, or any other mechanism where the source doesn't reside on disk. It allows you to avoid having to write the sources to disk at all.

### Parsing in unit tests

For JVM languages like Kotlin that support multi-line strings, the varargs string method can be especially convenient:

```kotlin
val jp = JavaParser.fromJavaVersion().build()
val cu: J.CompilationUnit = jp.parse("""
    import java.util.Collections;
    public class A {
        Object o = Collections.emptyList();
    }
""")[0]
```

Notice how this returns a single `J.CompilationUnit`, which can be immediately acted upon. At some point, [JEP-355](https://openjdk.java.net/jeps/355) will bring multi-line strings to Java as well, so beautiful unit tests for Rewrite operations will be possible to write in plain Java code.

The `dependenciesFromClasspath` method on `JavaParser` is also especially useful for building unit tests, as you can place a module for which you are affecting some transformation on the test runtime classpath and bind it to the parser. In this way, any references to classes, methods, etc. in that dependency are type-attributed in ASTs produced for unit tests.

```kotlin
val jp = JavaParser
    .fromJavaVersion()
    .classpath(JavaParser.dependenciesFromClasspath("guava"))
    .build()

val cu: J.CompilationUnit = jp.parse("""
        import com.google.common.io.Files;
        public class A {
            File temp = Files.createTempDir();
        }
    """)
```

## Next Steps

Now that we have a series of ASTs to work with we can start building [semantic searches](../reference/java/semantic-search-for-java/) across a set of Java source files.

