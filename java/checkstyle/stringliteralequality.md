---
description: How to use the StringLiteralEquality visitor
---

# StringLiteralEquality

[StringLiteralEquality](https://checkstyle.sourceforge.io/config_coding.html#StringLiteralEquality) checks that string literals are not used with `==` or `!=`.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

StringLiteralEquality check = new StringLiteralEquality();
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
  - org.openrewrite.checkstyles.StringLiteralEquality:
    configFile: 'checkstyle.xml'
```

## Example

Rewrite ensures that String literals are compared using the `equals()` method rather than `==`.

### Before:

```java
class Test {
    String a;
    {
        if(a == "test");
        if("test" == a);
        if("test" == "test");
    }
}
```

### After:

```java
class Test {
    String a;
    {
        if("test".equals(a));
        if("test".equals(a));
        if("test".equals("test"));
    }
}
```

