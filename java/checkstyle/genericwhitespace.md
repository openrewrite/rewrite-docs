---
description: How to use the GenericWhitespace visitor
---

# GenericWhitespace

[GenericWhitespace](https://checkstyle.sourceforge.io/config_whitespace.html#GenericWhitespace) checks that the whitespace around the Generic tokens \(angle brackets\) "&lt;" and "&gt;" are correct to the typical convention.

### Java Definition 

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

GenericWhitespace check = new GenericWhitespace();
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
  - org.openrewrite.checkstyles.GenericWhitespace:
    configFile: 'checkstyle.xml'
```

### Example

Rewrite will either add or remove whitespace between the generic tokens \(`<` and `>`\) according to convention.

#### Before:

```java
import java.util.*;
public class A < T1, T2 > {
    Map < String, Integer > map;
    
    { 
        boolean same = this.< Integer, Integer >foo(1, 2);
        map = new HashMap <>();
        
        List < String > list = ImmutableList.Builder< String >::new;
        Collections.sort(list, Comparable::< String >compareTo);
    }
    
    < K, V extends Number > boolean foo(K k, V v) {
        return true;    
    }
}
```

#### After:

```java
import java.util.*;
public class A<T1, T2> {
    Map<String, Integer> map;
    
    { 
        boolean same = this.<Integer, Integer>foo(1, 2);
        map = new HashMap<>();
        
        List<String> list = ImmutableList.Builder<String>::new;
        Collections.sort(list, Comparable::<String>compareTo);
    }
    
    <K, V extends Number> boolean foo(K k, V v) {
        return true;    
    }
}
```

