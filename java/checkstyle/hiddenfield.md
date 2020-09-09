---
description: How to use the HiddenField visitor
---

# HiddenField

[HiddenField](https://checkstyle.sourceforge.io/config_coding.html#HiddenField) checks that a local variable or a parameter does not shadow a field that is defined in the same class.

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

HiddenField check = new HiddenField();
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
  - org.openrewrite.checkstyles.HiddenField:
    configFile: 'checkstyle.xml'
```

### Example

In the situation where there is a switch statement which contains no cases, Rewrite recognizes that this code does nothing and removes it.

#### Before:

```java
public class A extends B {
    int n;
    int n1;

    class C {
        public void foo(int n) {
            int n1 = 2;
        }
    }
    
    static class D {
        public void foo(int n) {
        }
    }
}
```

#### After:

```java
public class A extends B {
    int n;
    int n1;

    class C {
        public void foo(int n4) {
            int n5 = 2;
        }
    }
    
    static class D {
        public void foo(int n) {
        }
    }
}
```

