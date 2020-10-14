---
description: Locate method invocations by their signature and delete an argument by index.
---

# DeleteMethodArgument
`DeleteMethodArgument` deletes an argument at a particular index from matching methods. It also removes imports referred to by any type name reference in the deleted argument if there are no remaining type name references to it in the source file after deletion.

`DeleteMethodArgument` is configured with these arguments:

* `method` - A method matcher  which is expressed using the AspectJ [pointcut syntax](https://www.eclipse.org/aspectj/doc/next/progguide/language-joinPoints.html) to find matching method invocations. 
* `index` - The index of the argument to be deleted.

## Java Definition

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

// Fill in arguments with Java sources to be refactored
List<J.CompilationUnit> cus = jp.parse(...);

DeleteMethodArgument dma = new DeleteMethodArgument();
dma.setMethod("ch.qos.logback.classic.Logger debug(org.slf4j.Marker,..)");
dma.setIndex(0);

Collection<Change> changes = new Refactor().visit(dma).fix(cus);
```

## YAML Definition

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: io.moderne.DeleteMarkerArgument
visitors:
  - org.openrewrite.java.DeleteMethodArgument:
    method: ch.qos.logback.classic.Logger debug(org.slf4j.Marker,..)
    index: 0
```

## Example

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
