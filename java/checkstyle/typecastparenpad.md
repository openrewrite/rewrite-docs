---
description: How to use the TypecastParenPad visitor
---

# TypecastParenPad

 [TypecastParenPad](https://checkstyle.sourceforge.io/config_whitespace.html#TypecastParenPad) checks the policy on the padding of parentheses for typecasts.

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

TypecastParenPad check = new TypecastParenPad();
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
  - org.openrewrite.checkstyles.TypecastParenPad:
    configFile: 'checkstyle.xml'
```

### Example

Rewrite inserts or removes padding within typecasting parentheses according to the styling specifications.

#### Before:

```java
public class A {
    { 
        long m = 0L;
        int n = ( int ) m;
    }
}
```

#### After:

```java
public class A {
    { 
        long m = 0L;
        int n = (int) m;
    }
}
```

