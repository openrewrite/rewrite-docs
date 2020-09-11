---
description: 'Add an import to a type or a static import to a static method, if necessary.'
---

# AddImport

### Java Definition

`AddImport` adds a new import to a class \(or a static import to a static method\) if it isn't already present. It responds to the `ImportLayout` style stored on `J.CompilationUnit`. See [import layout](../parsing-java-code.md#import-layout-style) for how to define this style.

{% hint style="success" %}
If you don't define an import layout style explicitly, Rewrite uses the IntelliJ IDEA default layout.
{% endhint %}

This visitor is smart enough to know how to fold a series of imports into a star import when adding a new one causes the number of imports from a particular package \(or number of static method imports for a type\) exceeds the layout style's configured thresholds. It also places the import in the right place in the list of imports according to that style definition.

Because this operation is so common, there are two methods provided on `JavaRefactorVisitor` that make it easy to add imports. Internally, `JavaRefactorVisitor` keeps track of the calls to `maybeAddImport` for each type so that no matter how many times you call it for a particular type, it's only chained to the transformation once.

* `maybeAddImport(String)` - Add an import by fully-qualified class name. 
* `maybeAddImport(JavaType)` - Makes it easy to get a type off of an AST element and suggest that an import may need to be added for it.

{% hint style="info" %}
The "maybe" refers to the fact that `AddImport` will check to ensure that there is actually an explicit type name reference somewhere in the source file before adding an import \(so you aren't left with an unused import\). In this way, you don't need to keep track of this yourself.
{% endhint %}

### YAML Definition

This is generally not done alone, but may be used in concert with some other visitor that potentially causes an import to be needed.

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.AddBasicMarker
visitors:
  - org.openrewrite.java.AddImport:
    type: org.slf4j.helpers.BasicMarker
  - ...
```



