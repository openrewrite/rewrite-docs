---
description: How to use the NoFinalizer visitor
---

# NoFinalizer

[NoFinalizer](https://checkstyle.sourceforge.io/config_coding.html#NoFinalizer) checks that there is no method `finalize` with zero parameters.

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

NoFinalizer check = new NoFinalizer();
check.setConfigFile(checkstyleConfig);

Collection<Change> changes = new Refactor().visit(check).fix(cus);
```

{% hint style="success" %}
The other configuration options \(other than`setConfigFile`\) are described in [Checkstyle](./#configuration-options).
{% endhint %}

### YAML Definition

```text
---
type: specs.openrewrite.org/v1beta/visitor
name: io.moderne.JultoSlf4j
visitors:
  - org.openrewrite.checkstyles.NoFinalizer:
    configFile: 'checkstyle.xml'
```

### Example

Rewrite removes the`finalize()` method because it has zero parameters.

#### Before:

```java
public class A {
    @Override
    protected void finalize() throws Throwable {
        super.finalize();
    }
}
```

#### After:

```java
public class A {
}
```

