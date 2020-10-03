---
description: How to use the EmptyStatement visitor
---

# EmptyStatement

[EmptyStatement](https://checkstyle.sourceforge.io/config_coding.html#EmptyStatement) removes empty statements \(standalone `";"` semicolon\).
Empty statements are usually accidental and usually harmless.

### Java Definition 

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

// Fill in arguments with Java sources to be refactored
List<J.CompilationUnit> cus = jp.parse(...); 

// Fill in with your checkstyle.xml location
File checkstyleConfig = new File("checkstyle.xml"); 

EmptyStatement emptyStatement = new EmptyStatement();
emptyStatement.setConfigFile(checkstyleConfig);

Collection<Change> changes = new Refactor().visit(emptyStatement).fix(cus);
```

{% hint style="success" %}
The other configuration options \(other than`setConfigFile`\) are described in [Checkstyle](./#configuration-options).
{% endhint %}

### YAML Definition

Adding the following to your rewrite.yml and setting the `com.yourorg.CheckstyleRecipe` recipe as active in 
your build plugin will apply the `EmptyStatement` visitor.
 
```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.EmptyStatement
visitors:
  - org.openrewrite.checkstyles.EmptyStatement:
    configFile: 'checkstyle.xml'
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CheckstyleRecipe
include:
  - 'com.yourorg.*'

```

### Example
Having an empty block after the conditional part of a flow-control statement is one area where an empty block 
can change the behavior of a program. This is uncommon and unlikely to ever be intentional.

#### Before:

```java
public class A {
    {
        if(1 == 2);
            System.out.println("always runs");
        for(;;);
            System.out.println("always runs");
        for(String s : new String[0]);
            System.out.println("always runs");
        while(true);
            System.out.println("always runs");
        while(true);
    }
}
```

#### After:

```java
public class A {
    {
        if(1 == 2)
            System.out.println("always runs");
        for(;;)
            System.out.println("always runs");
        for(String s : new String[0])
            System.out.println("always runs");
        while(true)
            System.out.println("always runs");
    }
}
```

