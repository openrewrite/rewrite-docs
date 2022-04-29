---
description: Add arbitrary metadata to ASTs
---

# Markers

Markers are used to annotate [AST](abstract-syntax-trees.md) elements with metadata. [Visitors](visitors.md) can attach any type implementing the [Marker](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/marker/Marker.java) interface to any AST element having [Markers](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/Markers.java). Markers can be used to identify search results or to communicate between Recipes during OpenRewrite execution. When an AST is printed back to source code only [SearchResult](markers.md#searchresult) Markers are printed.&#x20;

### Build Markers

* [BuildTool](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/BuildTool.java) - Type and version of the build tool
* [BuildEnvironment](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/BuildEnvironment.java) - Provides information on the build tool and associated environment
  * [Jenkins](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/JenkinsBuildEnvironment.java), [Gitlab](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/GitlabBuildEnvironment.java), [GithubActions](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/GithubActionsBuildEnvironment.java), [Drone](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/DroneBuildEnvironment.java), [CircleCi](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/CircleCiBuildEnvironment.java), [Travis](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/TravisBuildEnvironment.java)
* [GitProvenance](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/marker/GitProvenance.java#L34) - Keeps track of Git metadata associated with a particular Java project

### Style Markers

* [NamedStyles](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/style/NamedStyles.java) - A named collection of [styles](styles.md) representing code style/formatting and configuration options
  * [CheckStyle](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/style/Checkstyle.java), [IntelliJ](https://github.com/openrewrite/rewrite/blob/master/rewrite-java/src/main/java/org/openrewrite/java/style/IntelliJ.java), [AutoDetect-java](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/style/Autodetect.java), [AutoDetect-xml](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/style/Autodetect.java)

### Java Markers

* [JavaProject](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/marker/JavaProject.java) - Name and GAV coordinates of the source files associated project
* [JavaSourceSet](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/marker/JavaSourceSet.java) - Name (e.g. main or test) and list of fully qualified types representing the classpath
* [JavaVersion](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/marker/JavaVersion.java) - Java version including source and target compatibility of a source file
* [JavaVarKeyword](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/tree/JavaVarKeyword.java) - An AST marker for inferred type variable declarations

### Maven Markers

* [MavenResolutionResult](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/tree/MavenResolutionResult.java) - Rich data model of a pom.xml, including full dependency resolution information

### Recipe Markers

* [RecipesThatMadeChanges](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/RecipesThatMadeChanges.java) - Provides a collection of Recipes having made changes to the AST during recipe execution

### Search Makers&#x20;

* [SearchResult](markers.md#recipesearchresult) - A printable marker added to an AST identifiying a search result

## Usage

### Adding Markers to an AST Element

AST implementations providing Markers have at last two methods to add Markers. AST elements are immutable, and that includes their metadata, so these methods return a copy of the AST element with the specified Markers.

```java
// Returns the existing Markers
Markers getMarkers();

// Fully replaces any existing Markers
<M extends Markable> M withMarkers(Markers markers);
```

### Reading Markers from an AST Element

The [Markers](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/marker/Markers.java) class provides several convenience methods.

{% code title="Markers.java" %}
```java
// Returns the first Marker of the specified type.
<M extends Marker> Optional<M> findFirst(Class<M> markerType)

// Returns all Markers of the specified type
<M extends Marker> List<M> findAll(Class<M> markerType)

// Add a new marker or update some existing marker via the remappingFunction
// The existence of "identity" is determined based on equality
<M extends Marker> Markers compute(M identity, BinaryOperator<M> remappingFunction)

// Add a new marker or update some existing marker via the remappingFunction
// The existence of "identity" is determined based on type equality
<M extends Marker> Markers computeByType(M identity, BinaryOperator<M> remappingFunction)
```
{% endcode %}

## SearchResult

The most common form of Marker in a typical Recipe is a [SearchResult](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/SearchResult.java). Any Recipe which adds SearchResult markers to an AST can be described as a search recipe. RecipeSearchResults include which specific recipe instance created it. So recipes are able to differentiate between search results left by an instance of the search visitor they're interested in and results left by a different instance of the same type of visitor. RecipeSearchResults can optionally include a text description.

### Adding a Search Result to an AST

In this example the search recipe [FindAnnotations](https://github.com/openrewrite/rewrite/blob/master/rewrite-java/src/main/java/org/openrewrite/java/search/FindAnnotations.java) adds a `RecipeSearchResult` indicating that it found a matching Annotation.

{% code title="FindAnnotations.java" %}
```java
public J.Annotation visitAnnotation(J.Annotation annotation, ExecutionContext ctx) {
    J.Annotation a = super.visitAnnotation(annotation, ctx);
    if (annotationMatcher.matches(annotation)) {
        aa = a.withMarkers(a.getMarkers().searchResult());
    }
    return a;
}
```
{% endcode %}

{% code title="FindMissingTypes.java" %}
```java
public J.Identifier visitIdentifier(J.Identifier identifier, ExecutionContext ctx) {
    J.Identifier ident = super.visitIdentifier(identifier, ctx);
    if (isNullType(ident.getType()) && !isAllowedToHaveNullType(ident)) {
        ident = ident.withMarkers(ident.getMarkers().searchResult("Identifier type is null"));
    }
    return ident;
}
```
{% endcode %}

SearchResult Markers are written back to source code as comments where the description is the content

So for example if the `FindMethods("A singleArg(String)")` recipe were applied to this Java source file:

```java
class Test {
    void test() {
        new java.util.ArrayList<String>().forEach(new A()::singleArg);
    }
}
```

The search result would be visualized like so:

```java
class Test {
    void test() {
        new java.util.ArrayList<String>().forEach(new A()::/*~~>*/singleArg);
    }
}
```
