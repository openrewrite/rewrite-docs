---
description: How to use the SpansMultipleLines visitor
---

# SpansMultipleLines

TODO: Jonathan - SpansMultipleLines doesn't have a corresponding entry in [Checkstyle](https://checkstyle.sourceforge.io/checks.html)

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

SpansMultipleLines check = new SpansMultipleLines();
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
  - org.openrewrite.checkstyles.SpansMultipleLines:
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

