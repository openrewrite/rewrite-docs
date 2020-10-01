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
type: specs.openrewrite.org/v1beta/visitor
name: io.moderne.JultoSlf4j
visitors:
  - org.openrewrite.checkstyles.RightCurly:
    configFile: 'checkstyle.xml'
```

### Example

Rewrite places the right curly braces according to styling specifications.

#### Before:

```java
class A {
    {
        if(1 == 2) {} else if(2 == 3) {} else {}
        
        try {} catch(Throwable t) {} finally {}
        
        { int n = 1; }
    }
    
    public int foo() { return 1; }
}
```

#### After:

```java
class A {
    {
        if(1 == 2) {
        }
        else if(2 == 3) {
        }
        else {
        }
        
        try {
        }
        catch(Throwable t) {
        }
        finally {
        }
        
        {
            int n = 1;
        }
    }
    
    public int foo() {
        return 1;
    }
}
```

