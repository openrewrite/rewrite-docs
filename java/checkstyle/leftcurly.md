---
description: How to use the LeftCurly visitor
---

# LeftCurly

[LeftCurly](https://checkstyle.sourceforge.io/config_blocks.html#LeftCurly) checks for the placement of left curly braces \(`'{'`\) for code blocks.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

LeftCurly check = new LeftCurly();
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
  - org.openrewrite.checkstyles.LeftCurly:
    configFile: 'checkstyle.xml'
```

## Example

Rewrite places the left curly braces according to styling specifications.

### Before:

```java
class A
{
    {
        if(1 == 2)
        {
        }
    }

    private static final int N = 1;
    static
    {
    }
}
```

### After:

```java
class A {
    {
        if(1 == 2) {
        }
    }

    private static final int N = 1;
    static {
    }
}
```

