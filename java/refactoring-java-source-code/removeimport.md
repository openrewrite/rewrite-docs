---
description: >-
  Remove an import to a type or a static import to a static method, if it is no
  longer used.
---

# RemoveImport

### Definition

`RemoveImport` removes an import to a class \(or a static import to a static method\) if it is no longer used. It responds to the `ImportLayout` style stored on `J.CompilationUnit`. See [import layout](../parsing-java-code.md#import-layout-style) for how to define this style.

{% hint style="success" %}
If you don't define an import layout style explicitly, Rewrite uses the IntelliJ IDEA default layout.
{% endhint %}

This visitor is smart enough to know how to unfold a series of imports into individual imports when adding a new one causes the number of imports from a particular package \(or number of static method imports for a type\) to fall below the layout style's configured thresholds.

This visitor is always used in other transformation visitors rather than being used alone. Because this operation is so common, there are two methods provided on `JavaRefactorVisitor` that make it easy to remove imports. Internally, `JavaRefactorVisitor` keeps track of the calls to `maybeRemoveImport` for each type so that no matter how many times you call it for a particular type, it's only chained to the transformation once.

* `maybeRemoveImport(String)` - Remove an import by fully-qualified class name. 
* `maybeRemoveImport(JavaType)` - Makes it easy to get a type off of an AST element and suggest that an import may no longer be need for it.

{% hint style="info" %}
The "maybe" refers to the fact that `RemoveImport` will check to ensure that there is no longer an explicit type name reference before removing its import. In this way, you don't need to keep track of this yourself.
{% endhint %}



