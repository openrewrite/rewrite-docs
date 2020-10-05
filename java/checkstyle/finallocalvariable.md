---
description: How to use the FinalLocalVariable visitor
---

# FinalLocalVariable

[FinalLocalVariable](https://checkstyle.sourceforge.io/config_coding.html#FinalLocalVariable) checks that local variables that never have their values changed are declared final.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

FinalLocalVariable check = new FinalLocalVariable();
check.setConfigFile(checkstyleConfig);

Collection<Change> changes = new Refactor().visit(check).fix(cus);
```

{% hint style="success" %}
The other configuration options \(other than`setConfigFile`\) are described in [Checkstyle](./#configuration-options).
{% endhint %}

## YAML Definition

```text
---
type: specs.openrewrite.org/v1beta/visitor
name: io.moderne.JultoSlf4j
visitors:
  - org.openrewrite.checkstyles.FinalLocalVariable:
    configFile: 'checkstyle.xml'
```

## Example

If a variable's value never changes, as in the case of `n` in the following example, Rewrite will make that variable final.

### Before:

```java
public class A {
    {
        int n = 1;
        for(int i = 0; i < n; i++) {
        }
    }
}
```

### After:

```java
public class A {
    {
        final int n = 1;
        for(int i = 0; i < n; i++) {
        }
    }
}
```

