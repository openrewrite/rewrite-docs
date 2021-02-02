# Parsing YAML Documents

This guide covers how to use Rewrite to parse YAML documents into a Rewrite YAML AST. This is useful when you want to build your own Java main method, microservice, or data pipeline to process YAML files.

You can then perform structured search or transformation on those documents.

## Required Dependencies

For Maven, define a compile scoped dependency on `rewrite-yaml`.

```markup
<dependency>
  <groupId>org.openrewrite</groupId>
  <artifactId>rewrite-yaml</artifactId>
  <version>6.1.21</version>
</dependency>
```

For Gradle, define an implementation dependency on `rewrite-yaml`.

```groovy
implementation("org.openrewrite:rewrite-yaml:5.1.0")
```

## Constructing a YAML Parser

To build a Rewrite AST for YAML documents, construct a `YamlParser` as shown below. We will discuss each of the options in detail. The YAML parser does not have any options at this time.

```java
YamlParser parser = new YamlParser();
```

## Parsing Source Files

Now that we have a `YamlParser` instance, we can parse all YAML files in a project with one of the `parse` methods which return one or more `Yaml.Documents` instances. `Yaml.Documents` is the top-level AST element and is the basic building block upon which we'll build refactoring and search operations.

{% hint style="info" %}
`Yaml.Documents` is plural here because a single YAML file can contain multiple documents, each separated by `---`. In the case where there are no such separators, there will simply only be one document inside this top-level AST element.
{% endhint %}

* `YamlParser#parse(Iterable<java.nio.file.Path>, Path)` - This is the most common form, where the first argument is a collection of YAML files and this returns a list of `Yaml.Documents`, the top-level AST element for YAML. The second argument should be the path of the repository root which helps the parser relativize the source file paths so the serialized representation of the ASTs is independent of where you had the files on disk when you parsed them initially.
* `YamlParser#parse(Path, Path)` - This is a shortcut for the above, where we only provide one file and receive one `Yaml.Documents` in return. It is largely used for testing.
* `YamlParser#parse(String...)` - This is commonly used in unit testing YAML searches and transformations, allowing us to inline test YAML directly in our test.
* `YamlParser#parseInputs(Iterable<org.openrewrite.Input> inputs, Path)`. Construct an `Input` with a `Path` \(which needn't exist on disk\) and a `Supplier<InputStream>` that can be repeatedly called to read YAML files. The second argument again relativizes the paths of each input. This method is really useful when you are retrieving YAML from a database, streaming over an API call, or any other mechanism where the source doesn't reside on disk. It allows you to avoid having to write the YAML to disk at all.

### Parsing in unit tests

For JVM languages like Kotlin that support multi-line strings, the varargs string method can be especially convenient:

```kotlin
val yp = YamlParser()
val yaml: Yaml.Documents = yp.parse("""
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: nginx-deployment
    labels:
      app: nginx
""")[0]
```

Notice how this returns a single `Yaml.Documents`, which can be immediately acted upon. At some point, [JEP-355](https://openjdk.java.net/jeps/355) will bring multi-line strings to Java as well, so beautiful unit tests for Rewrite operations will be possible to write in plain Java code.

## Next Steps

Now that we have a series of ASTs to work with we can start building [semantic searches](semantic-search-for-yaml.md) across a set of YAML documents.

