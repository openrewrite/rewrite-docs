---
description: How to use the FinalClass visitor
---

# FinalClass

[FinalClass](https://checkstyle.sourceforge.io/config_design.html#FinalClass) checks that a class which has only private constructors is declared as final.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

FinalClass check = new FinalClass();
check.setConfigFile(checkstyleConfig);

Collection<Change> changes = new Refactor().visit(check).fix(cus);
```

{% hint style="success" %}
The other configuration options \(other than`setConfigFile`\) are described in [Checkstyle](./#configuration-options).
{% endhint %}

## YAML Definition

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: io.moderne.JultoSlf4j
visitors:
  - org.openrewrite.checkstyles.FinalClass:
    configFile: 'checkstyle.xml'
```

## Example

Rewrite ensures that when a class contains only private constructors that class is declared as a final class.

### Before:

```java
public class A {
    private A(String s) {
    }

    private A() {
    }
}
```

### After:

```java
public final class A {
    private A(String s) {
    }

    private A() {
    }
}
```

