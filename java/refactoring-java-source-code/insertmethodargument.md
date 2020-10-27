---
description: >-
  Insert a method argument into a matching method invocation by index with the
  provided source.
---

# InsertMethodArgument

`InsertMethodArgument` is used to insert arguments into existing method invocations. It is generally used when an API changes to have a new required argument and where that argument's value either has a generally applicable default value or a value that can be determined from each existing method invocation's context.

## Java Definition

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

// Fill in arguments with Java sources to be refactored
List<J.CompilationUnit> cus = jp.parse(...);

InsertMethodArgument insertMethodArgument = new InsertMethodArgument();
insertMethodArgument.setMethod("ch.qos.logback.classic.Logger debug(String,..)");
insertMethodArgument.setIndex(0);
insertMethodArgument.setSource("new BasicMarker(\"marker\")");

AddImport addImport = new AddImport();
addImport.setType("org.slf4j.helpers.BasicMarker");
addImport.setOnlyIfReferenced(false);
andThen(addImport);


Collection<Change> changes = new Refactor().visit(insertMethodArgument, addImport).fix(cus);
```

## YAML Definition

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: io.moderne.AlwaysUseMarker
visitors:
  - org.openrewrite.java.InsertMethodArgument:
    method: ch.qos.logback.classic.Logger debug(String,..)
    index: 0
    source: 'new BasicMarker("marker")'
  - org.openrewrite.java.AddImport:
    type: org.slf4j.helpers.BasicMarker
    onlyIfReferenced: false
```

## Example

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

