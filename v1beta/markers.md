---
description: Add arbitrary metadata to ASTs
---

# Markers

Markers annotate [AST](abstract-syntax-trees.md) elements with metadata.
[Visitors](visitors.md) can read or attach any type implementing the [Marker](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/marker/Marker.java) interface to any AST element's [Markers](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/Markers.java).
Markers can be used to identify search results or to communicate between Recipes during OpenRewrite execution.
When an AST is printed back to source code most markers, being metadata, have no textual representation within the source.
The exception is [SearchResult](markers.md#searchresult) Markers which are printed as comments that indicate the result of a search.
OpenRewrite attaches [framework provided markers](/reference/framework-provided-markers.md) to ASTs. 

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

The most common form of Marker in a typical Recipe is a [SearchResult](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/SearchResult.java).
A Recipe which adds `SearchResult` markers to an AST is described as a search recipe.
`SearchResult`s can optionally include a text description.
When a `SearchResult` is added to an AST element, it is printed as a comment next to the element it is attached to.

### Adding a Search Result to an AST

In this example the search recipe [FindAnnotations](https://github.com/openrewrite/rewrite/blob/master/rewrite-java/src/main/java/org/openrewrite/java/search/FindAnnotations.java) adds a `SearchResult` indicating that it found a matching Annotation.

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

SearchResult Markers are written back to source code as comments, including the description if one is present.

For example: if the `FindMethods("A singleArg(String)")` recipe were applied to this Java source file:

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
