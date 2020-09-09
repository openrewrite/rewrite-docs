---
description: How to use the OperatorWrap visitor
---

# OperatorWrap

[OperatorWrap](https://checkstyle.sourceforge.io/config_whitespace.html#OperatorWrap) checks the policy on how to wrap lines on operators.

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

OperatorWrap check = new OperatorWrap();
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
  - org.openrewrite.checkstyles.OperatorWrap:
    configFile: 'checkstyle.xml'
```

### Example

Rewrite wraps lines on operators according to styling specifications.

#### Before:

```java
import java.io.*;
class A {
    {
        String s = "aaa" +
            "b" + "c";
        if(s instanceof
            String);
        boolean b = s.contains("a") ?
            false :
            true;
        s +=
            "b";
        var a = Function::
            identity;
        int n =
            1;
        int n[] =
            new int[0];
        n =
            2;
    }
    
    <T extends Serializable &
            Comparable> T foo() {
        return null;
    }
}
```

#### After:

```java
import java.io.*;
class A {
    {
        String s = "aaa"
            + "b" + "c";
        if(s
            instanceof String);
        boolean b = s.contains("a")
            ? false
            : true;
        s
            += "b";
        var a = Function
            ::identity;
        int n
            = 1;
        int n[]
            = new int[0];
        n
            = 2;
    }
    
    <T extends Serializable
            & Comparable> T foo() {
        return null;
    }
}
```

