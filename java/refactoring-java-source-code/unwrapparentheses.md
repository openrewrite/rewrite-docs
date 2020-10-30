---
description: Safely unwrap parentheses.
---

# UnwrapParentheses

`UnwrapParentheses` is contextually aware of where parentheses are a required part of the grammar or can be removed, so you can attempt to unwrap a parenthesized expression without considering whether the parentheses are required or not. This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

For example, parentheses in these contexts are required:

```java
if(condition) {}
do { } while(condition);
while(condition);
switch(n) { }
synchronized(mutex) {}
try { } catch(Exception e) {}
(String) s;
```

## Example

Before:

```java
public class A {
    boolean a;
    {
        a = (true);
    }
}
```

After:

```java
public class A {
    boolean a;
    {
        a = true;
    }
}
```

