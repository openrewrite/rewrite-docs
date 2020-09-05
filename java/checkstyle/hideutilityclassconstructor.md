# HideUtilityClassConstructor

### Definition

 [DefaultComesLast ](https://checkstyle.sourceforge.io/config_coding.html#DefaultComesLast)checks that the `default` is after all the cases in a `switch` statement.

```java
Iterable<J.CompilationUnit> cus;

DefaultComesLast dcl = new DefaultComesLast();
dcl.setType("java.util.logging.Logger");
dcl.setTargetType("org.slf4j.Logger");

Collection<Change> changes = new Refactor().visit(dcl).fix(cus);
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
    {
        switch (n) {
            case 1:
                break;
            case 2:
                break;
            default:
                System.out.println("default");
                break;
            case 3:
                System.out.println("case3");
        }
    }
}
```

After:

```java
class Test {
    int n;
    {
        switch (n) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                System.out.println("case3");
                break;
            default:
                System.out.println("default");
        }
    }
}
```

