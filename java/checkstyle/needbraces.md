---
description: How to use the NeedBraces visitor
---

# NeedBraces

[NeedBraces](https://checkstyle.sourceforge.io/config_blocks.html#NeedBraces) checks for braces around code blocks.

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

NeedBraces check = new NeedBraces();
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
  - org.openrewrite.checkstyles.NeedBraces:
    configFile: 'checkstyle.xml'
```

### Example

Rewrite ensures that there are curly braces around code blocks.

#### Before:

```java
public class A {
    int n;
    void foo() {
        while (true);
        if (n == 1) return;
        else return;
        while (true) return;
        do this.notify(); while (true);
        for (int i = 0; ; ) this.notify();
    }
}
```

#### After:

```java
public class A {
    int n;
    void foo() {
        while (true) {
        }
        if (n == 1) {
            return;
        }
        else {
            return;
        }
        while (true) {
            return;
        }
        do {
            this.notify();
        } while (true);
        for (int i = 0; ; ) {
            this.notify();
        }
    }
}
```

