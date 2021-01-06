---
description: >-
  Wherever a static method is referenced, use a statically imported form of it
  instead, adjusting imports as necessary.
---

# UseStaticImport

`UseStaticImport` changes any matching static method invocations to use a statically imported form of the method, adjusting any imports as necessary.

`UseStaticImport` is configured with these options:

* `method` - A method matcher  which is expressed using the AspectJ [pointcut syntax](https://www.eclipse.org/aspectj/doc/next/progguide/language-joinPoints.html) to find matching method invocations. 

## Java Definition

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

// Fill in arguments with Java sources to be refactored
List<J.CompilationUnit> cus = jp.parse(...);

UseStaticImport si = new UseStaticImport();
si.setMethod("org.junit.jupiter.api.Assertions assert*(..)");

Collection<Change> changes = new Refactor().visit(si).fix(cus);
```

## YAML Definition

Adding the following to your rewrite.yml and setting the `com.yourorg.UseStaticJUnitAssertsRecipe` recipe as active in your build plugin will apply the `UseStaticImport` visitor.

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.UseStaticJUnitAsserts
visitors:
  - org.openrewrite.java.UseStaticImport:
    method: 'org.junit.jupiter.api.Assertions assert*(..)'
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UseStaticJUnitAssertsRecipe
include:
  - 'com.yourorg.UseStaticJUnitAsserts'
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

