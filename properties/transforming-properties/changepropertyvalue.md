# ChangePropertyValue

## Java Definition

`ChangePropertyValue` changes the value part of a key-value pair. This transforming visitor is a building block for more complex visitors, so it does not have a declarative form.

```java
PropertiesParser pp = new PropertiesParser();
Properties.File props = pp.parse("management.metrics.binders.files.enabled=true").iterator().next();

ChangePropertyValue cpv = new ChangePropertyValue();
cpv.setKey("management.metrics.binders.files.enabled");
cpv.setToValue("false");

Collection<Change> changes = new Refactor()
    .visit(cpv)
    .fix(props);

// refactoredProps will contain "management.metrics.binders.files.enabled=false"
String refactoredProps = changes.get(0).getFixed().print();
```

## Example

Before:

```text
management.metrics.binders.files.enabled=true
```

After:

```text
management.metrics.binders.files.enabled=false
```

