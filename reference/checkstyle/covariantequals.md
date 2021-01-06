---
description: How to use the CovariantEquals visitor
---

# CovariantEquals

The [CovariantEquals](https://checkstyle.sourceforge.io/config_coding.html#CovariantEquals) checkstyle rule checks that classes which define a covariant `equals()` method also override method `equals(Object)`. This CovariantEquals visitor replaces covariant `equals()` implementations with correct overrides of `Object.equals()`.

## Java Definition

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

// Fill in arguments with Java sources to be refactored
List<J.CompilationUnit> cus = jp.parse(...); 

// Fill in with your checkstyle.xml location
File checkstyleConfig = new File("checkstyle.xml"); 

CovariantEquals check = new CovariantEquals();
check.setConfigFile(checkstyleConfig);

Collection<Change> changes = new Refactor().visit(check).fix(cus);
```

{% hint style="success" %}
The other configuration options \(other than`setConfigFile`\) are described in [Checkstyle](./#configuration-options).
{% endhint %}

## YAML Definition

Adding the following to your rewrite.yml and setting the `com.yourorg.CheckstyleRecipe` recipe as active in your build plugin will apply the `CovariantEquals` visitor.

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.CovariantEquals
visitors:
  - org.openrewrite.checkstyles.CovariantEquals:
    configFile: 'checkstyle.xml'
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CheckstyleRecipe
include:
  - 'com.yourorg.*'
```

## Example

### Before:

```java
class Test {
    int n;

    public boolean equals(Test t) {
        return n == t.n;
    }
}
```

### After:

```java
class Test {
    int n;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Test t = (Test) o;
        return n == t.n;
    }
}
```

