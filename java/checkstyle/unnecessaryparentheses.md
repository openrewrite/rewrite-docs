---
description: How to use the UnnecessaryParentheses visitor
---

# UnnecessaryParentheses

[UnnecessaryParentheses](https://checkstyle.sourceforge.io/config_coding.html#UnnecessaryParentheses) checks if unnecessary parentheses are used in a statement or expression.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

UnnecessaryParentheses check = new UnnecessaryParentheses();
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
  - org.openrewrite.checkstyles.UnnecessaryParentheses:
    configFile: 'checkstyle.xml'
```

## Example

Rewrite removes unnecessary parentheses.

### Before:

```java
import java.util.*;
public class A {
  int square(int a, int b) {
      int square = (a * b);

      int sumOfSquares = 0;
      for(int i = (0); i < 10; i++) {
        sumOfSquares += (square(i * i, i));
      }
      double num = (10.0);

      List<String> list = Arrays.asList("a1", "b1", "c1");
      list.stream()
        .filter((s) -> s.startsWith("c"))
        .forEach(System.out::println);

      return (square);
  }
}
```

### After:

```java
import java.util.*;
public class A {
  int square(int a, int b) {
      int square = a * b;

      int sumOfSquares = 0;
      for(int i = 0; i < 10; i++) {
        sumOfSquares += square(i * i, i);
      }
      double num = 10.0;

      List<String> list = Arrays.asList("a1", "b1", "c1");
      list.stream()
        .filter(s -> s.startsWith("c"))
        .forEach(System.out::println);

      return square;
  }
}
```

