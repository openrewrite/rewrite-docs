---
description: How to use the SimplifyBooleanExpression visitor
---

# SimplifyBooleanExpression

[SimplifyBooleanExpression](https://checkstyle.sourceforge.io/config_coding.html#SimplifyBooleanExpression) checks for over-complicated boolean expressions.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

SimplifyBooleanExpression check = new SimplifyBooleanExpression();
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
  - org.openrewrite.checkstyles.SimplifyBooleanExpression:
    configFile: 'checkstyle.xml'
```

## Example

Rewrite simplifies boolean expressions where possible.

### Before:

```java
public class A {
    {
        boolean a = !false;
        boolean b = (a == true);
        boolean c = b || true;
        boolean d = c || c;
        boolean e = d && d;
        boolean f = (e == true) || e;
        boolean g = f && false;
        boolean h = !!g;
        boolean i = (a != false);
    }
}
```

### After:

```java
public class A {
    {
        boolean a = true;
        boolean b = a;
        boolean c = true;
        boolean d = c;
        boolean e = d;
        boolean f = e;
        boolean g = false;
        boolean h = g;
        boolean i = a;
    }
}
```

