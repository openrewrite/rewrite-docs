# Parsing Properties

This guide covers how to use Rewrite to parse [java.util.Properties](https://docs.oracle.com/javase/8/docs/api/java/util/Properties.html) formatted files into a Rewrite properties AST. Once parsed into ASTs, you can then programmatically transform or search through them.

## Required Dependencies

For Maven, define a compile scoped dependency on `rewrite-properties`.

```markup
<dependency>
  <groupId>org.openrewrite</groupId>
  <artifactId>rewrite-properties</artifactId>
  <version>6.1.21</version>
</dependency>
```

For Gradle, define an implementation dependency on `rewrite-properties`.

```groovy
implementation("org.openrewrite:rewrite-properties:6.1.21")
```

## Constructing a Parser

To build a Rewrite AST for Properties files, construct a `PropertiesParser` as shown below.

```java
PropertiesParser parser = new PropertiesParser();
```

## Parsing Properties Files

Now we have a `PropertiesParser` instance, so we can parse Properties files with its `parse` methods. These return return one or more `Properties.File` instances. `Properties.File` is the top-level AST element and is the basic building block we'll use in refactoring and search operations.

* `PropertiesParser#parse(Iterable<java.nio.file.Path>, Path)` - This is the most common form, where the first argument is a collection of Properties files and this returns a list of `Properties.File`, the top-level AST element for Properties. The second argument should be the path of the repository root which helps the parser relativize the source file paths so the serialized representation of the ASTs is independent of where you had the files on disk when you parsed them initially.
* `PropertiesParser#parse(Path, Path)` - This is a shortcut for the above, where we only provide one file and receive one `Properties.File` in return. It is largely used for testing.
* `PropertiesParser#parse(String...)` - This is commonly used in unit testing YAML searches and transformations, allowing us to inline test Properties directly in our test.
* `PropertiesParser#parseInputs(Iterable<org.openrewrite.Input> inputs, Path)`. Construct an `Input` with a `Path` \(which need not exist on disk\) and a `Supplier<InputStream>` that can be repeatedly called to read Properties files. The second argument again relativizes the paths of each input. This method is really useful when you are retrieving Properties from a database, streaming over an API call, or any other mechanism where the source doesn't reside on disk. It allows you to avoid having to write the Properties to disk at all.

### Parsing in unit tests

For JVM languages like Kotlin that support multi-line strings, the varargs string method can be especially convenient:

```kotlin
val pp = PropertiesParser()
val props: Properties.File = pp.parse("""
        distributionDir=USER_HOME
        distributionUrl=https\://example.org/files/example-bin.zip
    """.trimIndent()).first()
```

Notice how this returns a single `Properties.File`, which can be immediately acted upon.

## Next Steps

Now that we have a series of ASTs to work with we can start building [semantic searches](semantic-search-for-properties/) across a set of Properties files.

