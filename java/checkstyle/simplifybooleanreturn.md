---
description: How to use the SimplifyBooleanReturn visitor
---

# SimplifyBooleanReturn

[SimplifyBooleanReturn](https://checkstyle.sourceforge.io/config_coding.html#SimplifyBooleanReturn) checks for over-complicated boolean return statements.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

SimplifyBooleanReturn check = new SimplifyBooleanReturn();
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
  - org.openrewrite.checkstyles.SimplifyBooleanReturn:
    configFile: 'checkstyle.xml'
```

## Example

Rewrite simplifies boolean return statements where possible.

### Before:

```java
public class A {
    boolean ifNoElse() {
        if (isOddMillis()) {
            return true;
        }
        return false;
    }

    static boolean isOddMillis() {
        boolean even = System.currentTimeMillis() % 2 == 0;
        if (even == true) {
            return false;
        }
        else {
            return true;
        }
    }
}
```

### After:

```java
public class A {
    boolean ifNoElse() {
        return isOddMillis();
    }

    static boolean isOddMillis() {
        boolean even = System.currentTimeMillis() % 2 == 0;
        return !(even == true);
    }
}
```

