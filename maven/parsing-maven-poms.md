# Parsing Maven POMs

This guide covers how to use Rewrite to parse Maven POMs into a Rewrite Maven AST. This is useful when you want to build your own Java main method, microservice, or data pipeline to process Maven POM files to update dependencies, plugins, or anything else related to build files.

You can then perform structured search or transformation on those build files. To apply Rewrite recipes affecting Maven POM files, refer instead to the guides on the [Maven](../configuring/rewrite-maven-plugin.md) or [Gradle ](../configuring/rewrite-gradle-plugin.md)plugins.

### Required Dependencies

For Maven, define a compile scoped dependency on `rewrite-maven`.

```markup
<dependency>
  <groupId>org.openrewrite</groupId>
  <artifactId>rewrite-maven</artifactId>
  <version>5.0.0</version>
</dependency>
```

For Gradle, define an implementation dependency on `rewrite-maven`.

```groovy
implementation("org.openrewrite:rewrite-maven:5.0.0")
```

### Constructing a Maven Parser

To build a Rewrite AST for Maven POMs, construct a `MavenParser` as shown below. We will discuss each of the options in detail. All of these options have defaults, so are optional to specify explicitly.

```java
import org.eclipse.aether.repository.RemoteRepository;

File localRepoFile = ...
File workspaceDir = ...

// this is the default included for you on MavenParser
RemoteRepository remote = new RemoteRepository
  .Builder("central", "default", "https://repo1.maven.org/maven2/")
  .build();

MavenParser parser = MavenParser
  .builder()
  .localRepository(localRepoFile)
  .workspaceDir(workspaceDir)
  .resolveDependencies(true)
  .remoteRepositories(singletonList(remote))
  .build();
```

#### Local repository

By default, Rewrite uses a separate Maven local cache at `~/.m2/rewrite` from what Maven uses \(which is at `~/.m2/repository`. More advanced uses of Rewrite's Maven integration don't necessarily need to download full binary artifacts, so it's useful to keep these separate so Rewrite doesn't pollute the regular Maven local cache.

#### Workspace directory

Rewrite uses the workspace directory to cache dependency resolution information. When you are parsing POMs over several repositories, this workspace cache significantly speeds up dependency resolution performance as each project doesn't have to compute the same subtrees repeatedly.

Rewrite uses a two-layer cache for fast dependency graph retrieval: a limited in-memory cache backed by an on-disk form for overflow.

#### Resolve dependencies

By far, the most expensive part of building a Maven AST is resolving the dependency tree. If you want to search or transform POMs in a way that doesn't require dependency information, you can turn off dependency resolution to speed parsing.

#### Remote repositories

By default, Rewrite includes Maven Central. Add other remote repositories, like a private Artifactory or Nexus repository if needed.

{% hint style="info" %}
In the process of parsing POMs, Rewrite will automatically replace http with https for any remote repositories defined either in `settings.xml` or in the `pom.xml` directly. Most public Maven repositories began rejecting non-SSL requests with an HTTP 501 in 2020. In this way, Rewrite helps you parse and reason about older POMs without having to change them first. 
{% endhint %}

### Parsing Source Files

Now that we have a `MavenParser` instance, we can parse all the POM files in a project with one of the `parse` methods which return one or more `Maven.Pom` unit instances. `Maven.Pom` is the top-level AST element for Maven POMs. It wraps the Rewrite `Xml.Document` top-level AST element and layers in semantic information about the Maven POM as well \(dependencies, parent POMs, versions, etc.\) which can't be determined simply by looking at the XML file in isolation. `Maven.Pom` is the basic building block upon which we'll build refactoring and search operations for Maven POMs.

* `MavenParser#parse(Iterable<java.nio.file.Path>, Path)` - This is the most common form, where the first argument is a collection of POMs and this returns a list of `Maven.Pom`, the top-level AST element for Maven. Pass in _all_ of the POMs belonging to a project at once. They don't need to be in order of their ancestry -- Rewrite will figure this out for you. The second argument should be the path of the repository root which helps the parser relativize the source file paths so the serialized representation of the ASTs is independent of where you had the files on disk when you parsed them initially.
* `MavenParser#parse(Path, Path)` - This is a shortcut for the above, where we only provide one file and receive one `Maven.Pom` in return. It is largely used for testing.
* `MavenParser#parse(String...)` - This is commonly used in unit testing Maven searches and transformations, allowing us to inline test POMs directly in our test.
* `MavenParser#parseInputs(Iterable<org.openrewrite.Input> inputs, Path)`. Construct an `Input` with a `Path` \(which needn't exist on disk\) and a `Supplier<InputStream>` that can be repeatedly called to read the POMs. The second argument again relativizes the paths of each input. This method is really useful when you are retrieving Maven POMs from a database, streaming over an API call, or any other mechanism where the source doesn't reside on disk. It allows you to avoid having to write the POMs to disk at all. Because Rewrite is using Maven Aether for some things, there can still be disk access for dependency resolution and workspace caching \(if configured\).

#### Parsing in unit tests

For JVM languages like Kotlin that support multi-line strings, the varargs string method can be especially convenient:

```kotlin
val mp = MavenParser.build()
val pom: Maven.Pom = mp.parse("""
  <project>
    <modelVersion>4.0.0</modelVersion>
                 
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
  </project>
""")[0]
```

Notice how this returns a single `J.CompilationUnit`, which can be immediately acted upon. At some point, [JEP-355](https://openjdk.java.net/jeps/355) will bring multi-line strings to Java as well, so beautiful unit tests for Rewrite operations will be possible to write in plain Java code.

### Next Steps

Now that we have a series of ASTs to work with we can start building [semantic searches](semantic-search-for-maven.md) across a set of Maven POMs.

