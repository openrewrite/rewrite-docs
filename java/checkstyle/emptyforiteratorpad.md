---
description: How to use the EmptyForIteratorPadvisitor
---

# EmptyForIteratorPad

[EmptyForIteratorPad](https://checkstyle.sourceforge.io/config_whitespace.html#EmptyForIteratorPad) checks the padding of an empty for iterator; that is whether a white space is required at an empty for iterator, or such white space is forbidden.

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

EmptyForIteratorPad check = new EmptyForIteratorPad();
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
  - org.openrewrite.checkstyles.EmptyForIteratorPad:
    configFile: 'checkstyle.xml'
```

### Example

If there is an empty iterator within a for loop, Rewrite will make sure to insert or remove padding where the iterator would typically be found according to styling specifications. In this case, Rewrite removes the padding.

#### Before:

```java
public class A {
    {
        for (int i = 0; i < 2; );
    }
}
```

#### After:

```java
public class A {
    {
        for (int i = 0; i < 2;);
    }
}
```

