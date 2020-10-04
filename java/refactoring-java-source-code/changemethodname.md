---
description: Change method invocations matching a certain signature to another name.
---

# ChangeMethodName
`ChangeMethodName` renames method invocations matching the specified signature.
This is a common refactoring operation, particularly helpful when a library renames a method.

`ChangeMethodName` is configured with these arguments:

* `method` - A `MethodMatcher` string that identifies the method to rename. 
* `name` - The name to change to.

## Java Definition

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

// Fill in arguments with Java sources to be refactored
List<J.CompilationUnit> cus = jp.parse(...);

// rename the method foo() to bar() on the class com.yourorg.A
ChangeMethodName cmn = new ChangeMethodName();
cmn.setMethod("com.yourorg.A foo()");
cmn.setName("bar");

Collection<Change> changes = new Refactor().visit(cmn).fix(cus);
```

* `method` - A method matcher  which is expressed using the AspectJ [pointcut syntax](https://www.eclipse.org/aspectj/doc/next/progguide/language-joinPoints.html) to find matching method invocations.
* `name` - The name to change to.

## YAML Definition
Adding the following to your rewrite.yml and setting the `com.yourorg.RenameFooToBarRecipe` recipe as active in 
your build plugin will apply the `ChangeMethodName` visitor configured to rename the method `foo()` to `bar()` on the class `com.yourorg.A`. 

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.RenameFooToBar
visitors:
  - org.openrewrite.java.ChangeMethodName:
    method: com.yourorg.A foo()
    name: bar
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RenameFooToBarRecipe
include:
  - 'com.yourorg.RenameFooToBar'
```

## Example

Before:

```java
package com.yourorg;

class B {
    A a = new A();
    void foo() {
        a.foo();
    }
}
```

After:

```java
package com.yourorg;

class B {
    A a = new A();
    void foo() {
        a.bar();
    }
}
```

