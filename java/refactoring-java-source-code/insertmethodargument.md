---
description: >-
  Insert a method argument into a matching method invocation by index with the
  provided source.
---

# InsertMethodArgument

### Definition

`InsertMethodArgument` is used to insert arguments into existing method invocations. It is generally used when an API changes to have a new required argument and where that argument's value either has a generally applicable default value or a value that can be determined from each existing method invocation's context.

```java
Iterable<J.CompilationUnit> cus;

InsertMethodArgument ima = new InsertMethodArgument();
ima.setMethod("ch.qos.logback.classic.Logger debug(String,...)");
ima.setIndex(0);
ima.setSource("new BasicMarker(\"marker\")");

Collection<Change> changes = new Refactor().visit(ima).fix(cus);
```

### Declarative Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.AlwaysUseMarker
visitors:
  - org.openrewrite.java.InsertMethodArgument:
    method: ch.qos.logback.classic.Logger debug(String,...)
    index: 0
    source: 'new BasicMarker("marker")'
  - org.openrewrite.java.AddImport:
    type: org.slf4j.helpers.BasicMarker
```

### Example

Before:

```java
import ch.qos.logback.classic.Logger;
 
...
Logger logger = ...;

logger.debug("message");
```

After:

```java
import ch.qos.logback.classic.Logger;
import org.slf4j.helpers.BasicMarker;
 
...
Logger logger = ...;

logger.debug(new BasicMarker("markerName"), "message");
```





