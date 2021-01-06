---
description: How to use the EmptyForInitializerPad visitor
---

# EmptyForInitializerPad

[EmptyForInitializerPad ](https://checkstyle.sourceforge.io/config_whitespace.html#EmptyForInitializerPad)checks the padding of an empty for initializer; that is whether a white space is required at an empty for initializer, or such white space is forbidden.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

EmptyForInitializerPad check = new EmptyForInitializerPad();
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
  - org.openrewrite.checkstyles.EmptyForInitializerPad:
    configFile: 'checkstyle.xml'
```

## Example

If there is an empty initializer within a for loop, Rewrite will make sure to insert or remove padding where the initializer would typically be found according to styling specifications. In this case, Rewrite inserts padding.

### Before:

```java
public class A {
    {
        for (; i < j; i++, j--);
    }
}
```

### After:

```java
public class A {
    {
        for ( ; i < j; i++, j--);
    }
}
```

