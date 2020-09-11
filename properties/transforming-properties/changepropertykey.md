# ChangePropertyKey


### Java Definition

`ChangePropertyKey` changes the key part of a key-value pair. 
This transforming visitor is a building block for more complex visitors, so it does not have a declarative form.

```java
PropertiesParser pp = new PropertiesParser();
Properties.File props = pp.parse("management.metrics.binders.files.enabled=true").iterator().next();

ChangePropertyKey cpk = new ChangePropertyKey();
cpk.setProperty("management.metrics.binders.files.enabled");
cpk.setToProperty("management.metrics.enable.process.files");

Collection<Change> changes = new Refactor()
    .visit(cpk)
    .fix(props);

// refactoredProps will contain "management.metrics.enable.process.files=true"
String refactoredProps = changes.iterator().next().getFixed().print();
```

### Example
Before:
```properties 
management.metrics.binders.files.enabled=true
```

 After:
```properties 
management.metrics.enable.process.files=true
```

