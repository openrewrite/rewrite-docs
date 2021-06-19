---
description: A simple and powerful way of identifying method definitions and invocations
---

# Pointcut Expressions

Many recipes operate on method declarations or invocations. Pointcut method expressions are a mechanism for configuring and developing these recipes. Rewrite's pointcut method expressions are derived from AspectJ. AspectJ uses the "pointcut" terminology more generally and expansively than Rewrite does. In Rewrite a "Pointcut expression" is comparable to AspectJ's "Pointcut method expressions".

## Anatomy of a Pointcut Expression

A pointcut method expression can identify one or more method definitions or invocations based on their:

* Fully qualified receiver type
* Method Name
* Method Argument types

```text
com.yourorg.RecieverFullyQualifiedType methodName(argType1, argType2)
```

There are two kinds of wildcard symbols:

* `*` - Matches any one thing. Applicable to receiver type, method name, and arguments.
* `..` - Matches zero or more. Applicable to  receiver type and arguments.

{% hint style="warning" %}
The return type of a method is _not_ represented in a pointcut expressions. Methods in Java \(and similar languages\) can be uniquely identified by receiver type, name, and argument types alone.
{% endhint %}

### Examples

So if you wanted to match invocations of `String.toString(int beginIndex)` then this expression would match only that method: `java.lang.String toString(int)`. If you wanted to match the two-argument form of the same

| Pointcut Expression | Matches |
| :--- | :--- |
| `java.lang.String substring(int)` | String's Exactly the [single argument overload](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#substring%28int%29) of `String.substring()` |
| `java.lang.String substring(int, int)` | Exactly the [two argument overload](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#substring%28int,int%29) of `String.substring()` |
| `java.lang.String substring(..)` | Any overload of `String.substring()` |
| `java.lang.String *(int)` | Any method on `String` that accepts a single argument of type `int`  |
| `com.yourorg.Foo bar(int, String, ..)` | Any method on `Foo` named `bar` accepting an `int`, a `String`, and zero or more other arguments of any type |
| `*..String *(..)` | Any method accepting any arguments on classes named "String" in any package |
| `*..* *(..)` | Any method accepting any arguments on any class |

