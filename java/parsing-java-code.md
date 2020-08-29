# Parsing Java code

This guide covers how to use Rewrite to parse Java code. This is useful when you want to build your own Java main method, microservice, or data pipeline to process Java source code and perform structured search or transformation on that source code. To apply Rewrite recipes for common Java framework migrations and other fixes, refer instead to the guides on

### Required dependencies

For Maven, define a compile scoped dependency on `rewrite-java` and a runtime scoped dependency on `rewrite-java-11` \(or `rewrite-java-8` if your code is at that language level\).

```markup
<dependency>
  <groupId>org.openrewrite</groupId>
  <artifactId>rewrite-java</artifactId>
  <version>4.3.0</version>
</dependency>
<dependency>
  <groupId>org.openrewrite</groupId>
  <artifactId>rewrite-java-11</artifactId>
  <version>4.3.0</version>
  <scope>runtime</scope>
</dependency>
```

For Gradle, define an implementation dependency on `rewrite-java` and a runtime dependency on the appropriate language level parser for your code.

```groovy
implementation("org.openrewrite:rewrite-java:4.3.0")
runtimeOnly("org.openrewrite:rewrite-java-11:4.3.0")
```



To build a Rewrite AST for Java source code, construct a `JavaParser`:

```java
JavaParser parser = JavaParser.fromJavaVersion()
    .classpath(classpathAsListOfPaths) // optional
    .logCompilationWarningsAndErrors(false) // optional, for quiet parsing
    .styles(listOfStyles) // optional
```

Providing a classpath is optional, because type-attribution is a _best effort_ for each element. Examples of different-levels of type-attribution:

* **No types needed at all**. If you are applying a refactoring rule like auto-remediation for Checkstyle's `WhitespaceBefore` rule, we're strictly looking at source formatting and it's OK if none of the AST elements have types on them, as it doesn't influence the outcome.
* **Partial types needed**. If searching for occurrences of deprecated Guava methods, it is OK to construct a `JavaParser` with a path to only a Guava JAR. It doesn't even have to be the Guava version that the project is using! The resulting ASTs will have limited type information, but just enough to search for what we want.
* **Full types needed**. When ASTs are emitted as a side-effect of compilation to a central data store for later arbitrary code search, they need to have full type information, because we can't be sure in advance what kinds of searches people will attempt.

`JavaParser` contains a convenience method for building a `JavaParser` from the runtime classpath of the Java process that is constructing the parser:

```java
new JavaParser(JavaParser.dependenciesFromClasspath("guava"));
```

This utility takes the "artifact name" of the dependency to look for. The artifact name is the artifact portion of `group:artifact:version` coordinates. For example, for Google's Guava \(`com.google.guava:guava:VERSION`\), the artifact name is `guava`.

Once you have a `JavaParser` instance, you can parse all the source files in a project with the `parse` method, which takes a `List<Path>`:

```java
JavaParser parser = ...;
List<J.CompilationUnit> cus = parser.parse(pathsToSourceFiles);
```

`J.CompilationUnit` is the top-level AST element for Java source files, which contains information about the package, imports, and any class/enum/interface definitions contained in the source file. `J.CompilationUnit` is the basic building block upon which we'll build refactoring and search operations for Java source code.

`JavaParser` contains `parse` method overloads for constructing an AST from a string, which is useful for quickly constructing unit tests for different search and refactoring operations.

For JVM languages like Kotlin that support multiline strings, this can be especially convenient:

```kotlin
val cu: J.CompilationUnit = JavaParser().parse("""
    import java.util.Collections;
    public class A {
        Object o = Collections.emptyList();
    }
""")
```

Notice how this returns a single `J.CompilationUnit`, which can be immediately acted upon. Ultimately, [JEP-355](https://openjdk.java.net/jeps/355) will bring multiline strings to Java as well, so beautiful unit tests for Rewrite operations will be possible to write in plain Java code.

The `dependenciesFromClasspath` method is especially useful for building unit tests, as you can place a module for which you are affecting some transformation on the test runtime classpath and bind it to the parser. In this way, any references to classes, methods, etc. in that dependency are type-attributed in ASTs produced for unit tests.

```kotlin
val cu: J.CompilationUnit = JavaParser(JavaParser.dependenciesFromClasspath("guava"))
    .parse("""
        import com.google.common.io.Files;
        public class A {
            File temp = Files.createTempDir();
        }
    """)
```

