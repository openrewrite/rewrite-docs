---
description: How to use the DefaultComesLast visitor
---

# DefaultComesLast

[DefaultComesLast](https://checkstyle.sourceforge.io/config_coding.html#DefaultComesLast) checks that the `default` is after all the cases in a `switch` statement.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

DefaultComesLast check = new DefaultComesLast();
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
  - org.openrewrite.checkstyles.DefaultComesLast:
    configFile: 'checkstyle.xml'
```

## Example

If a switch statement contains a misplaced default case, Rewrite will move it to the end of that switch statement and insert or remove any break statements as necessary.

### Before:

```java
class Test {
    int n;
    {
        switch (n) {
            case 1:
                break;
            case 2:
                break;
            default:
                System.out.println("default");
                break;
            case 3:
                System.out.println("case3");
        }
    }
}
```

### After:

```java
class Test {
    int n;
    {
        switch (n) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                System.out.println("case3");
                break;
            default:
                System.out.println("default");
        }
    }
}
```

