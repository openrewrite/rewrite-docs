# Parsing XML

This guide covers how to use Rewrite to parse XML into a Rewrite XML AST. This is useful when you want to build your own Java main method, microservice, or data pipeline to process XML files.

{% hint style="info" %}
If the XML file you are interested in is a Maven POM, see [Parsing Maven POMs](../maven/parsing-maven-poms.md) instead.
{% endhint %}

You can then perform structured search or transformation on those files.

## Required Dependencies

For Maven, define a compile scoped dependency on `rewrite-xml`.

```markup
<dependency>
  <groupId>org.openrewrite</groupId>
  <artifactId>rewrite-xml</artifactId>
  <version>5.1.0</version>
</dependency>
```

For Gradle, define an implementation dependency on `rewrite-xml`.

```groovy
implementation("org.openrewrite:rewrite-xml:5.1.0")
```

## Constructing an XML Parser

To build a Rewrite AST for XML documents, construct a `XmlParser` as shown below.

```java
XmlParser parser = new XmlParser();
```

## Parsing Source Files

Now that we have a `XmlParser` instance, we can parse all XML files in a project with one of the `parse` methods which return one or more `Xml.Document` instances. `Xml.Document` is the top-level AST element and is the basic building block upon which we'll build refactoring and search operations.

* `XmlParser#parse(Iterable<java.nio.file.Path>, Path)` - This is the most common form, where the first argument is a collection of XML files and this returns a list of `Xml.Document`, the top-level AST element for XML. The second argument should be the path of the repository root which helps the parser relativize the source file paths so the serialized representation of the ASTs is independent of where you had the files on disk when you parsed them initially.
* `XmlParser#parse(Path, Path)` - This is a shortcut for the above, where we only provide one file and receive one `Xml.Document` in return. It is largely used for testing.
* `XmlParser#parse(String...)` - This is commonly used in unit testing YAML searches and transformations, allowing us to inline test XML directly in our test.
* `XmlParser#parseInputs(Iterable<org.openrewrite.Input> inputs, Path)`. Construct an `Input` with a `Path` \(which needn't exist on disk\) and a `Supplier<InputStream>` that can be repeatedly called to read XML files. The second argument again relativizes the paths of each input. This method is really useful when you are retrieving XML from a database, streaming over an API call, or any other mechanism where the source doesn't reside on disk. It allows you to avoid having to write the XML to disk at all.

### Parsing in unit tests

For JVM languages like Kotlin that support multi-line strings, the varargs string method can be especially convenient:

```kotlin
val xp = XmlParser()
val xml: Xml.Document = xp.parse("""
<?xml version = "1.0" encoding = "UTF-8"?>

<beans xmlns = "http://www.springframework.org/schema/beans"
   xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation = "http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

   <bean id = "sampleController" class = "io.moderne.SampleController">
      <!-- collaborators and configuration for this bean go here -->
   </bean>
</beans>
""")[0]
```

Notice how this returns a single `Xml.Document`, which can be immediately acted upon. At some point, [JEP-355](https://openjdk.java.net/jeps/355) will bring multi-line strings to Java as well, so beautiful unit tests for Rewrite operations will be possible to write in plain Java code.

## Next Steps

Now that we have a series of ASTs to work with we can start building [semantic searches](semantic-search-for-xml/) across a set of XML documents.

