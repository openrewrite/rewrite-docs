---
description: How to use the MultipleVariableDeclarations visitor
---

# MultipleVariableDeclarations

[MultipleVariableDeclarations](https://checkstyle.sourceforge.io/config_coding.html#MultipleVariableDeclarations) checks that each variable declaration is in its own statement and on its own line.

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

MultipleVariableDeclarations check = new MultipleVariableDeclarations();
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
  - org.openrewrite.checkstyles.MultipleVariableDeclarations:
    configFile: 'checkstyle.xml'
```

### Example

Rewrite places each variable declaration on its own line.

#### Before:

```java
class Test {
    int n = 0, m = 0;
    int o = 0, p;
    
    {
        Integer[] q = { 0 }, r[] = { { 0 } };
        for(int i = 0, j = 0;;);
    }
}
```

#### After:

```java
class Test {
    int n = 0;
    int m = 0;
    int o = 0;
    int p;
    
    {
        Integer[] q = { 0 };
        Integer r[][] = { { 0 } };
        for(int i = 0, j = 0;;);
    }
}
```

