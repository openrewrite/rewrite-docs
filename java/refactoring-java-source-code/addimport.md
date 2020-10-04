---
description: 'Add an import to a type or a static import to a static method, if necessary.'
---

# AddImport

`AddImport` adds a new import to a class \(or a static import to a static method\) if it isn't already present. It responds to the `ImportLayout` style stored on `J.CompilationUnit`. See [import layout](../parsing-java-code.md#import-layout-style) for how to define this style.
This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

{% hint style="success" %}
If you don't define an import layout style explicitly, Rewrite uses the IntelliJ IDEA default layout.
{% endhint %}

This visitor is smart enough to know how to fold a series of imports into a star import when adding a new one causes the number of imports from a particular package \(or number of static method imports for a type\) exceeds the layout style's configured thresholds. It also places the import in the right place in the list of imports according to that style definition.

Because this operation is so common, there are two methods provided on `JavaRefactorVisitor` that make it easy to add imports. Internally, `JavaRefactorVisitor` keeps track of the calls to `maybeAddImport` for each type so that no matter how many times you call it for a particular type, it's only chained to the transformation once.

* `maybeAddImport(String)` - Add an import by fully-qualified class name. 
* `maybeAddImport(JavaType)` - Use this overload with types retrieved from AST elements

{% hint style="info" %}
The "maybe" refers to the fact that `AddImport` will check to ensure that there is actually an explicit type name reference somewhere in the source file before adding an import \(so you aren't left with an unused import\). In this way, you don't need to keep track of this yourself.
{% endhint %}

## Example

Since it is virtually never ideal to use `AddImport` directly, this example will demonstrate a visitor which uses `JavaRefactorVisitor.maybeAddImport()`.

```java
class ImportSet extends JavaRefactorVisitor {
    public J visitClassDecl(J.ClassDecl clazz) {
        maybeAddImport("java.util.Set");
        return super.visitClassDecl(clazz);
    }
}
```

Before:
```java
class A {}
```
After:
```java
import java.util.Set;

class A {}
```
