---
description: How to use the NoWhitespaceBefore visitor
---

# NoWhitespaceBefore

[NoWhitespaceBefore](https://checkstyle.sourceforge.io/config_whitespace.html#NoWhitespaceBefore) checks that there is no whitespace before a token.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

NoWhitespaceBefore check = new NoWhitespaceBefore();
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
  - org.openrewrite.checkstyles.NoWhitespaceBefore:
    configFile: 'checkstyle.xml'
```

## Example

Rewrite inserts or removes whitespace before a token according to styling specifications.

### Before:

```java
package a ;
import java.util.* ;
import java.util.function.*;

public class C {
    int m;
}

abstract class A {
    {
        int b = 0 ;
        int n , o = 0 ;
        n ++ ;
        n -- ;
        new C() 
            .m = 2 ;
        foo(1 , 2) .foo(3 , 4);
        List <String > generic = new ArrayList < >() ;
        Supplier<Function<String, String > > a = Function ::identity ;
        for(int i = 0 , j = 0 ; i < 2 ; i++ , j++) ;
        while(true) ;
        do { } while(true) ;
        for(String s : generic) ;
    }

    abstract A foo(int n , int m, int ... others) ;
}

interface B {
    void foo() ;
}
```

### After:

```java
package a;
import java.util.*;
import java.util.function.*;

public class C {
    int m;
}

abstract class A {
    {
        int b = 0;
        int n, o = 0;
        n++;
        n--;
        new C().m = 2;
        foo(1, 2).foo(3, 4);
        List<String> generic = new ArrayList<>();
        Supplier<Function<String, String>> a = Function::identity;
        for(int i = 0, j = 0; i < 2; i++, j++);
        while(true);
        do { } while(true);
        for(String s : generic);
    }

    abstract A foo(int n, int m, int... others);
}

interface B {
    void foo();
}
```

