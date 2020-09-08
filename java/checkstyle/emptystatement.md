---
description: How to use the EmptyStatement visitor
---

# EmptyStatement

[EmptyStatement](https://checkstyle.sourceforge.io/config_coding.html#EmptyStatement) detects empty statements \(standalone `";"` semicolon\).

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

EmptyStatement check = new EmptyStatement();
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
  - org.openrewrite.checkstyles.EmptyStatement:
    configFile: 'checkstyle.xml'
```

### Example

If there is an empty `if`, `for`, `foreach` or `while` statement, Rewrite will...

TODO: Sofia

#### Before:

```java
public class A {
    {
        if(1 == 2);
            System.out.println("always runs");
        for(;;);
            System.out.println("always runs");
        for(String s : new String[0]);
            System.out.println("always runs");
        while(true);
            System.out.println("always runs");
        while(true);
    }
}
```

#### After:

```java
public class A {
    {
        if(1 == 2)
            System.out.println("always runs");
        for(;;)
            System.out.println("always runs");
        for(String s : new String[0])
            System.out.println("always runs");
        while(true)
            System.out.println("always runs");
    }
}
```

