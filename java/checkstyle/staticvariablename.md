---
description: How to use the StaticVariableName visitor
---

# StaticVariableName

[StaticVariableName](https://checkstyle.sourceforge.io/config_naming.html#StaticVariableName) checks that `static`, non-`final` variable names conform to a specified pattern.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

StaticVariableName check = new StaticVariableName();
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
  - org.openrewrite.checkstyles.StaticVariableName:
    configFile: 'checkstyle.xml'
```

## Example

Rewrite converts static variable names from snake case to camel case following styling specifications.

### Before:

```java
import java.util.*;
public class A {
   static List<String> MY_LIST;

   static {
       MY_LIST = new ArrayList<>();
   }
}
```

### After:

```java
import java.util.*;
public class A {
    static List<String> myList;

    static {
        myList = new ArrayList<>();
    }
 }
```

