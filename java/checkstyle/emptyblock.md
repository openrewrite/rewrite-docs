# EmptyBlock

### Definition

[EmptyBlock](https://checkstyle.sourceforge.io/config_blocks.html#EmptyBlock) removes empty blocks when they are extraneous. It won't remove empty method or class declaration bodies.

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

EmptyBlock check = new EmptyBlock();
check.setConfigFile(checkstyleConfig);

Collection<Change> changes = new Refactor().visit(check).fix(cus);
```

* `config` - A string representation of checkstyle XML configuration \(the full document, including the check's configuration\).
* `configFile` - A checkstyle XML configuration file on disk.
* `properties` - A map of string keys and object values that can be evaluated in the Checkstyle configuration file with syntax like `${my.prop}`.
* `suppressions` - A `com.puppycrawl.tools.checkstyle.api.FilterSet` instance that can be used to suppress one or more checks \(including this one\).

Below is a complete example of a Checkstyle configuration file that configures only this recipe.

```markup
<?xml version="1.0"?>
<!DOCTYPE module PUBLIC
  "-//Checkstyle//DTD Checkstyle Configuration 1.3//EN"
  "https://checkstyle.org/dtds/configuration_1_3.dtd">
<module name="Checker">
  <module name="TreeWalker">
    <module name="EmptyBlock">
      <property name="option" value="text"/>
      <property name="tokens" value="LITERAL_TRY"/>
    </module>
  </module>
</module> 
```

The type name doesn't have to be fully qualified in the source code to match. Rewrite looks at the type attributed to a particular identifier in the source code to see whether it represents the type that should change.

### Declarative Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.JultoSlf4j
visitors:
  - org.openrewrite.checkstyles.EmptyBlock:
    configFile: 'checkstyle.xml'
```

### Example

Before:

```java
public class A {
    {
        int i = 0;
        switch(i) {
        }
    }
}
```

After:

```java
public class A {
    {
        int i = 0;
    }
}
```

