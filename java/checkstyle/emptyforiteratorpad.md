# EmptyForIteratorPad

### Definition

 [DefaultComesLast ](https://checkstyle.sourceforge.io/config_coding.html#DefaultComesLast)checks that the `default` is after all the cases in a `switch` statement.

```java
Iterable<J.CompilationUnit> cus;

EmptyForIteratorPad efip = new EmptyForIteratorPad();
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
?
```

### Example

Before:

```java
public class A {
    {
        for (int i = 0; i < 2; );
    }
}
```

After:

```java
public class A {
    {
        for (int i = 0; i < 2;);
    }
}
```

