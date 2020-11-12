---
description: How to use the MethodParamPad visitor
---

# MethodParamPad

[MethodParamPad](https://checkstyle.sourceforge.io/config_whitespace.html#MethodParamPad) checks the padding between the identifier of a method definition, constructor definition, method call, or constructor invocation; and the left parenthesis of the parameter list.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

MethodParamPad check = new MethodParamPad();
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
  - org.openrewrite.checkstyles.MethodParamPad:
    configFile: 'checkstyle.xml'
```

## Example

Following styling specifications, Rewrite removes the padding found between the parameter list and a method or constructor definition, or between the parameter list and a constructor invocation or method call.

### Before:

```java
public class A extends B {
    A () {
        super ();
    }

    void foo (int n) {
        A a = new A ();
        foo (0);
    }
}

class B {}

enum E {
    E1 ()
}
```

### After:

```java
public class A extends B {
    A() {
        super();
    }

    void foo(int n) {
        A a = new A();
        foo(0);
    }
}

class B {}

enum E {
    E1()
}
```

