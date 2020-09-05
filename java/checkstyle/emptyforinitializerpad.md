# EmptyForInitializerPad

### Definition

[EmptyForInitializerPad](https://checkstyle.sourceforge.io/config_whitespace.html#EmptyForInitializerPad) checks the padding of an empty for initializer; that is whether a white space is required at an empty for initializer, or such white space is forbidden.

```java
Iterable<J.CompilationUnit> cus;

EmptyForInitializerPad efip = new EmptyForInitializerPad();
efip.setType("java.util.logging.Logger");
efip.setTargetType("org.slf4j.Logger");

Collection<Change> changes = new Refactor().visit(efip).fix(cus);
```

* `type` - The fully qualified type name that should be changed.
* `targetType` - The fully qualified type name to change to.

The type name doesn't have to be fully qualified in the source code to match. Rewrite looks at the type attributed to a particular identifier in the source code to see whether it represents the type that should change.

### Declarative Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.JultoSlf4j
visitors:
  - org.openrewrite.checkstyles.CovariantEquals:
    type: java.util.logging.Logger
    targetType: org.slf4j.Logger
```

### Example

Before:

```java
public class A {
    {
        for (; i < j; i++, j--);
    }
}
```

After:

```java
public class A {
    {
        for ( ; i < j; i++, j--);
    }
}
```

