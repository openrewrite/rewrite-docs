---
description: How to use the EmptyBlock visitor
---

# EmptyBlock

[EmptyBlock](https://checkstyle.sourceforge.io/config_blocks.html#EmptyBlock) removes empty blocks when they are extraneous. It won't remove empty method or class declaration bodies.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

EmptyBlock check = new EmptyBlock();
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
  - org.openrewrite.checkstyles.EmptyBlock:
    configFile: 'checkstyle.xml'
```

## Example

If there is a switch statement which contains no cases, Rewrite recognizes that this code does nothing and removes it.

### Before:

```java
public class A {
    {
        int i = 0;
        switch(i) {
        }
    }
}
```

### After:

```java
public class A {
    {
        int i = 0;
    }
}
```

