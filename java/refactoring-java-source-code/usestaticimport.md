---
description: >-
  Wherever a static method is referenced, use a statically imported form of it
  instead, adjusting imports as necessary.
---

# UseStaticImport

## Java Definition

`UseStaticImport` changes any matching static method invocations to use a statically imported form of the method, adjusting any imports as necessary. The method parameter uses the AspectJ [pointcut syntax](https://www.eclipse.org/aspectj/doc/next/progguide/language-joinPoints.html) to find matching method invocations.

```java
Iterable<J.CompilationUnit> cus;

UseStaticImport si = new UseStaticImport();
si.setMethod("org.junit.jupiter.api.Assertions assert*(..)");

Collection<Change> changes = new Refactor().visit(si).fix(cus);
```

## YAML Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.UseStaticJUnitAsserts
visitors:
  - org.openrewrite.java.UseStaticImport:
    method: 'org.junit.jupiter.api.Assertions assert*(..)'
```

## Example

Before:

```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

class Sample {
  @Test
  void sample() {
    Assertions.assertEquals(42, 21*2);
  }
}
```

After:

```java
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class Sample {
  @Test
  void sample() {
    assertEquals(42, 21*2);
  }
}
```

