---
description: How to use the ExplicitInitialization visitor
---

# ExplicitInitialization

[ExplicitInitialization](https://checkstyle.sourceforge.io/config_coding.html#ExplicitInitialization) checks if any class or object member is explicitly initialized to default for its type value \(`null` for object references, zero for numeric types and `char` and `false` for `boolean`\).

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

ExplicitInitialization check = new ExplicitInitialization();
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
  - org.openrewrite.checkstyles.ExplicitInitialization:
    configFile: 'checkstyle.xml'
```

## Example

If a field is explicitly initialized with the default value for that type, then this visitor will remove the redundant initialization.

### Before:

```java
class Test {
    private int a = 0;
    private long b = 0L;
    private short c = 0;
    private int d = 1;
    private long e = 2L;
    private int f;
    private char g = '\0';

    private boolean g = false;
    private boolean h = true;

    private Object i = new Object();
    private Object j = null;

    int k[] = null;
    int l[] = new int[0];

    private final Long l = null;
}
```

### After:

```java
class Test {
    private int a;
    private long b;
    private short c;
    private int d = 1;
    private long e = 2L;
    private int f;
    private char g;

    private boolean g;
    private boolean h = true;

    private Object i = new Object();
    private Object j;

    int k[];
    int l[] = new int[0];

    private final Long l = null;
}
```

