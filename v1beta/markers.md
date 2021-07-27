---
description: Add arbitrary metadata to ASTs
---

# Markers

Markers are used to annotate [AST](abstract-syntax-trees.md) elements with metadata. [Visitors](visitors.md) can attach any type implementing the [Marker](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/marker/Marker.java) interface to any AST element. When an AST is printed back to source code Markers are _not_ printed. Markers are used during OpenRewrite execution to communicate between Recipes and to represent search results.

## Usage

### Example Marker Implementations

Within rewrite itself Markers are used for a wide variety of purposes. Examples include:

* [IntelliJ](https://github.com/openrewrite/rewrite/blob/master/rewrite-java/src/main/java/org/openrewrite/java/style/IntelliJ.java) - Represents the IntelliJ IDE's Java source code style/formatting configuration options. 
* [GitProvenance](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/marker/GitProvenance.java#L34) - Keeps track of Git metadata associated with a particular Java project
* [Pom](https://github.com/openrewrite/rewrite/blob/master/rewrite-maven/src/main/java/org/openrewrite/maven/tree/Pom.java#L35) - Rich data model of a pom.xml, including full dependency resolution information
* [RecipeSearchResult](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/marker/RecipeSearchResult.java) - Marks an AST element with the Recipe that found it

### Adding Markers to an AST Element

All AST elements implement the [Markable](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/marker/Markable.java) interface which provides two methods to add Markers. AST elements are immutable, and that includes their metadata, so these methods return a copy of the AST element with the specified Markers.

{% code title="Markable.java" %}
```java
// Returns the existing Markers
Markers getMarkers();

// Fully replaces any existing Markers
<M extends Markable> M withMarkers(Markers markers);

// Add or replace the specified markers
<M extends Markable> M withMarker(Marker... add)
```
{% endcode %}

### Reading Markers from an AST Element

`Markable.getMarkers()` returns the Markers on a given AST element. The [Markers](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/marker/Markers.java) class provides several convenience methods.

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

## RecipeSearchResult

The most common form of Marker in a typical Recipe is a [RecipeSearchResult](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/marker/RecipeSearchResult.java). Any Recipe which adds RecipeSearchResult markers to an AST can be described as a search recipe. RecipeSearchResults include which specific recipe instance created it. So recipes are able to differentiate between search results left by an instance of the search visitor they're interested in and results left by a different instance of the same type of visitor. RecipeSearchResults can optionally include a text description.

### Adding a Search Result to an AST

In this example the search recipe [FindAnnotations](https://github.com/openrewrite/rewrite/blob/master/rewrite-java/src/main/java/org/openrewrite/java/search/FindAnnotations.java) adds a `RecipeSearchResult` indicating that it found a matching Annotation.

{% code title="FindAnnotations.java" %}
```java
public J.Annotation visitAnnotation(J.Annotation annotation, ExecutionContext ctx) {
    J.Annotation a = super.visitAnnotation(annotation, ctx);
    if (annotationMatcher.matches(annotation)) {
        a = a.withMarker(new RecipeSearchResult(FindAnnotations.this));
    }
    return a;
}
```
{% endcode %}

### Search Result Printers

While Markers are never written back to source code, they can be made visible in a textual representation of source code via a Search Result Printer. To create a custom search result printer use the `SearchResult.printer()` method. `SearchResult.printer()` accepts two arguments:

* `markerText` - the text to print when a RecipeSearchResult has no description
* `markerTextWithDescription` - the text to print when a RecipeSearchResult has a description. Use the `"%s"` format specifier within this String to indicate where the description should be interpolated in.

This is the printer used by default in tests of Java Search visitors:

```java
SearchResult.printer("/*~~>*/", "/*~~(%s)~~>*/");
```

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



