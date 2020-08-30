---
description: Locate method invocations by their signature and delete an argument by index.
---

# DeleteMethodArgument

`DeleteMethodArgument` uses the AspectJ [pointcut syntax](https://www.eclipse.org/aspectj/doc/next/progguide/language-joinPoints.html) to find matching method invocations and delete an argument at a particular index. It also removes imports referred to by any type name reference in the deleted argument if there are no remaining type name references to it in the source file after deletion.

```java
Iterable<J.CompilationUnit> cus;

DeleteMethodArgument dma = new DeleteMethodArgument();
dma.setMethod("ch.qos.logback.classic.Logger debug(org.slf4j.Marker," + 
 + "String,Object)");
dma.setIndex(0);

Collection<Change> changes = new Refactor().visit(dma).fix(cus);
```

### Declarative Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.DeleteMarkerArgument
visitors:
  - org.openrewrite.java.DeleteMethodArgument:
    method: ch.qos.logback.classic.Logger debug(org.slf4j.Marker,..)
    index: 0
```

### Example

Before:

```java
import ch.qos.logback.classic.Logger;
import org.slf4j.helpers.BasicMarker;
 
...
Logger logger = ...;

logger.debug(new BasicMarker("markerName"), "message");
```

After:

```java
import ch.qos.logback.classic.Logger;
 
...
Logger logger = ...;

logger.debug("message");
```

