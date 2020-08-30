---
description: Find method invocations using the AspectJ pointcut syntax.
---

# FindMethods

### Definition

```java
J.CompilationUnit cu;

FindMethods fm = new FindMethods("java.util.Collections emptyList()");
List<J.MethodInvocation> methods = fm.visit(cu);
```

`FindMethods` takes a single parameter, `signature`, which is expressed using the AspectJ [pointcut syntax](https://www.eclipse.org/aspectj/doc/next/progguide/language-joinPoints.html) to find matching method invocations.

{% hint style="info" %}
Method invocations, represented by the AST element `J.MethodInvocation` are calls to a method. Method declarations are a distinct type `J.MethodDecl`. This search visitor only locates invocations.
{% endhint %}

In the actual code, the invocation doesn't have to be qualified like this. Rewrite's type attribution phase discovers the true types of each piece of the method signature, including:

* _Declaring_ type - The type that the method is defined on.
* _Return_ type.
* _Argument_ types.
* _Generic_ type parameters.

These are all provided on a `JavaType.Method` instance returned by `J.MethodInvocation#getType()`. This type attribution makes it possible to accurately match on methods that would otherwise be ambiguous in appearance. A great example of this in the Java ecosystem is the proliferation of logging implementations. From just the syntax alone, there is no way to tell these logging implementations apart:

```java
logger.info("log4j");
logger.info("slf4j");
logger.info("jul");
```

With type attribution, Rewrite can match just on the signatures for one of these implementations, helping us locate occurrences of old implementations we are trying to replace.

`FindMethods` matches on static and non-static methods with the same pointcut syntax.

It is possible to match on varargs methods using `...` as shown in the matcher for SLF4J's templated info logger:

```java
FindMethods fm = new FindMethods("org.slf4j.Logger info(String, Object...)");
```

### Shortcut

A `findMethods` method is also available on `J.CompilationUnit` and `J.ClassDecl`.

```java
J.CompilationUnit cu = ...

cu.findMethods("org.slf4j.Logger info(String, Object...)");
```

```java
J.ClassDecl clazz = ...

// only logging statements defined in this class
// and its nested classes
clazz.findMethods("org.slf4j.Logger info(String, Object...)");
```

