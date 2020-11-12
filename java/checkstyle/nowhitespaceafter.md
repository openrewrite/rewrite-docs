---
description: How to use the NoWhitespaceAfter visitor
---

# NoWhitespaceAfter

[NoWhitespaceAfter](https://checkstyle.sourceforge.io/config_whitespace.html#NoWhitespaceAfter) checks that there is no whitespace after a token.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

NoWhitespaceAfter check = new NoWhitespaceAfter();
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
  - org.openrewrite.checkstyles.NoWhitespaceAfter:
    configFile: 'checkstyle.xml'
```

## Example

Rewrite inserts or removes whitespace after a token according to styling specifications.

### Before:

```java
public class A {
    int m;

    {
        int [] [] a;
        int [] n = { 1, 2};
        int [] p = {1, 2 };
        m = n [0];
        ++ m;
        -- m;
        long o = - m;
        o = + m;
        o = ~ m;
        boolean b;
        b = ! b;
        m = (int) o;
        new A().
            m = 2;
        a().
            a();
        var a = Function:: identity;
    }

    @ Override
    public boolean equals(Object o) {}

    int [] [] foo() { return null; }

    A a() { return this; }
}
```

### After:

```java
public class A {
    int m;

    {
        int[][] a;
        int[] n = {1, 2};
        int[] p = {1, 2};
        m = n[0];
        ++m;
        --m;
        long o = -m;
        o = +m;
        o = ~m;
        boolean b;
        b = !b;
        m = (int)o;
        new A().
            m = 2;
        a().
            a();
        var a = Function::identity;
    }

    @Override
    public boolean equals(Object o) {}

    int[][] foo() { return null; }

    A a() { return this; }
}
```

