---
description: Safely unwrap parentheses.
---

# UnwrapParentheses

`UnwrapParentheses` is contextually aware of where parentheses are a required part of the grammar or can be removed, so you can attempt to unwrap a parenthesized expression without considering whether the parentheses are required or not. This transformation visitor is meant to be used on specific expressions so it doesn't have a declarative form.

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

