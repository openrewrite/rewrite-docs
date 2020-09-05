# CovariantEquals

### Definition

 [CovariantEquals](https://checkstyle.sourceforge.io/config_coding.html#CovariantEquals) checks that classes and records which define a covariant `equals()` method also override method `equals(Object)`.

```java
Iterable<J.CompilationUnit> cus;

CovariantEquals ce = new CovariantEquals();
ce.setType("java.util.logging.Logger");
ce.setTargetType("org.slf4j.Logger");

Collection<Change> changes = new Refactor().visit(ce).fix(cus);
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
class Test {
    int n;

    public boolean equals(Test t) {
        return n == t.n;
    }
}
```

After:

```java
class Test {
    int n;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Test t = (Test) o;
        return n == t.n;
    }
}
```

