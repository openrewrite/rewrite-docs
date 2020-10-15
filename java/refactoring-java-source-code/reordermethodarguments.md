---
description: Reorders method arguments by argument name on matching methods.
---

# ReorderMethodArguments

`ReorderMethodArguments` is used to reorder arguments in existing method invocations. It is generally used when moving from one API to another.

For example, authors of different logging frameworks may choose to place a `Throwable` argument either before or after any parameterization arguments, with neither being more obviously correct. Migrating from one to the other requires shifting an argument from either the beginning of the argument list to the end or vice versa.

It will generally be paired with a `ChangeMethodType` or similar visitor when performing migration from one API to another. Note that the order in which these visitors operate doesn't matter.

## Java Definition

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

// Fill in arguments with Java sources to be refactored
List<J.CompilationUnit> cus = jp.parse(...);

ReorderMethodArguments rma = new ReorderMethodArguments();
rma.setMethod("org.some.Logger info(String,Throwable,Object[])");
rma.setOrder("format", "arguments", "ex");
rma.setOriginalOrder("format", "ex", "arguments"); // optional

Collection<Change> changes = new Refactor().visit(rma).fix(cus);
```

{% hint style="warning" %}
`originalOrder` is required when the parameter names cannot be inferred from the original method signature. If the library you are transforming _from_ was compiled with the `-parameters` compiler option as described [here](https://docs.oracle.com/javase/tutorial/reflect/member/methodparameterreflection.html), this can be omitted.
{% endhint %}

## YAML Definition

Here we show a contrived example for simplicity, but that shows how a `ReorderMethodArguments` can work together with a `ChangeType` in a single composite declarative visitor.

Adding the following to your rewrite.yml and setting the `com.yourorg.AlwaysUseMarkerRecipe` recipe as active in your build plugin will apply this example.

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.AlwaysUseMarker
visitors:
  - org.openrewrite.java.ReorderMethodArguments:
    method: org.some.Logger info(String,Throwable,Object[])
    order: format,arguments,ex
    originalOrder: format,ex,arguments
  - org.openrewrite.java.ChangeType:
    type: org.some.Logger
    targetType: org.yetanother.Logger
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AlwaysUseMarkerRecipe
include:
  - 'com.yourorg.AlwaysUseMarker'
```
## Example
Before: 
```java
import org.some.Logger;

class A {
    Logger logger = new Logger();
    void foo() {
        logger.info("Error count: ${}", new RuntimeException("example"), 5);
    }
}
```
After:
```java
import org.some.Logger;

class A {
    Logger logger = new Logger();
    void foo() {
        logger.info("Error count: ${}", 5, new RuntimeException("example"));
    }
}
```
