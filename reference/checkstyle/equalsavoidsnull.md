---
description: How to use the EqualsAvoidsNull visitor
---

# EqualsAvoidsNull

[EqualsAvoidsNull](https://checkstyle.sourceforge.io/config_coding.html#EqualsAvoidNull) checks that any combination of String literals is on the left side of an `equals()` comparison.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

EqualsAvoidsNull check = new EqualsAvoidsNull();
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
  - org.openrewrite.checkstyles.EqualsAvoidsNull:
    configFile: 'checkstyle.xml'
```

## Example

In order to avoid a Null Pointer Exception, Rewrite inverts the order of the `equals()` comparison, to ensure the String literal is on the left side.

### Before:

```java
public class A {
    {
        String s = null;
        if(s.equals("test")) {}
        if(s.equalsIgnoreCase("test")) {}
    }
}
```

### After:

```java
public class A {
    {
        String s = null;
        if("test".equals(s)) {}
        if("test".equalsIgnoreCase(s)) {}
    }
}
```

