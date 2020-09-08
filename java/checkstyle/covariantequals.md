---
description: How to use the CovariantEquals visitor
---

# CovariantEquals

[CovariantEquals](https://checkstyle.sourceforge.io/config_coding.html#CovariantEquals) checks that classes and records which define a covariant `equals()` method also override method `equals(Object)`.

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

CovariantEquals check = new CovariantEquals();
check.setConfigFile(checkstyleConfig);

Collection<Change> changes = new Refactor().visit(check).fix(cus);
```

{% hint style="success" %}
The other configuration options \(other than`setConfigFile`\) are described in [Checkstyle](./#configuration-options).
{% endhint %}

### YAML Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.JultoSlf4j
visitors:
  - org.openrewrite.checkstyles.CovariantEquals:
    configFile: 'checkstyle.xml'
```

### Example

TODO: Jonathan. Test name =  replaceWithNonCovariantEquals

#### Before:

```java
class Test {
    int n;

    public boolean equals(Test t) {
        return n == t.n;
    }
}
```

#### After:

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

