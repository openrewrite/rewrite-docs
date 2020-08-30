---
description: Change method invocations matching a certain signature to another name.
---

# ChangeMethodName

### Definition

`ChangeMethodName` changes method invocations matching a certain signature to another name. This is one of the most common refactoring operations, used when a library renames a method.

```java
Iterable<J.CompilationUnit> cus;

ChangeMethodName cmn = new ChangeMethodName();
cmn.setMethod("org.mockito.Matchers anyVararg()");
cmn.setTargetType("any");

Collection<Change> changes = new Refactor().visit(cmn).fix(cus);
```

* `method` - A method matcher  which is expressed using the AspectJ [pointcut syntax](https://www.eclipse.org/aspectj/doc/next/progguide/language-joinPoints.html) to find matching method invocations.
* `name` - The name to change to.

### Declarative Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.MockitoSample
visitors:
  - org.openrewrite.java.ChangeMethodName:
    method: org.mockito.Matchers anyVararg()
    name: java.util.Collection
```

### Example

Before:

```java
import static org.mockito.Mockito.*;

abstract class FlowerService {
    public abstract boolean anyBlooming(String... flowers);
}
 
...

FlowerService mock = mock(FlowerService.class); 
when(mock.anyBlooming(anyVararg())).thenReturn(true);
```

After:

```java
import static org.mockito.Mockito.*;

abstract class FlowerService {
    public abstract boolean anyBlooming(String... flowers);
}
 
...

FlowerService mock = mock(FlowerService.class); 
when(mock.anyBlooming(any())).thenReturn(true);
```

