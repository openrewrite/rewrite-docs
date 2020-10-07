---
description: Find annotations by type and parameters using the AspectJ pointcut syntax.
---

# FindAnnotations

### Definition

```java
J.CompilationUnit cu;

FindAnnotations fa = new FindAnnotations("@java.lang.SuppressWarnings");
List<J.Annotation> annotations = fa.visit(cu);
```

`FindAnnotations` takes a single parameter, `signature`, which is expressed using the AspectJ [pointcut syntax](https://www.eclipse.org/aspectj/doc/next/adk15notebook/annotations-pointcuts-and-advice.html) to find matching annotations. The example above matches on the `@SuppressWarnings` annotation with no parameters. Suppose we have a `@Get` annotation:

```java
package myhttp;

public @interface Get {
  String serviceName();
  String path();
}
```

* `@myhttp.Get(serviceName="payments", path="recentPayments")` matches on both parameters.
* `@myhttp.Get(path="recentPayments", serviceName="payments")` matches on the same \(i.e. order or parameters doesn't matter\).
* `@java.lang.SuppressWarnings("deprecation")` matches on single parameter annotations.

### Shortcuts

`findAnnotations` methods are also available on `J.ClassDecl`, `J.MethodDecl`, and `J.VariableDecls`.

```java
J.ClassDecl clazz = ...

// finds annotations on the class or any nested class, method declaration,
// or variable inside of the class.
clazz.findAnnotations("@java.lang.SuppressWarnings");

// finds annotations ONLY on this class, but does not look further down the tree.
clazz.findAnnotationsOnClsas("@java.lang.SuppressWarnings");

```

```java
J.MethodDecl method = ...
method.findAnnotations("@java.lang.SuppressWarnings");
```

```java
J.VariableDecls variable = ...
variable.findAnnotations("@javax.annotation.Nullable");
```

