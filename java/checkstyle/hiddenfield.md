---
description: How to use the HiddenField visitor
---

# HiddenField

[HiddenField](https://checkstyle.sourceforge.io/config_coding.html#HiddenField) renames local variables or parameters so that they do not shadow any fields defined in the same class.

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

In this example `A.C.foo(n)` shadows `A.n` because as a non-static inner class, `A.C`has access to the fields in `A`. `A.D.foo(n)` does not shadow `A.n` because as a static inner class it has no access to the fields of its enclosing class. 

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
        public void foo(int n2) {
            int n3 = 2;
        }
    }
    
    static class D {
        public void foo(int n) {
        }
    }
}
```

