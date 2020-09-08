---
description: How to use the RightCurly visitor
---

# RightCurly

[RightCurly](https://checkstyle.sourceforge.io/config_blocks.html#RightCurly) checks the placement of right curly braces \(`'}'`\) for code blocks.

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

RightCurly check = new RightCurly();
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
  - org.openrewrite.checkstyles.RightCurly:
    configFile: 'checkstyle.xml'
```

### Example

In the situation where there is a switch statement which contains no cases, Rewrite recognizes that this code does nothing and removes it.

#### Before:

```java
public class A {
    {
        int i = 0;
        switch(i) {
        }
    }
}
```

#### After:

```java
public class A {
    {
        int i = 0;
    }
}
```

