---
description: Find references to a variable inside a sub-tree.
---

# FindReferencesToVariable

`FindReferencesToVariable` locates all the assignment references to a variable below a sub-tree. In the below block of code, the local variable `n` \(i.e. the one defined local to `Sample`\) is located four times:

```java
public class Sample {
    int n;
    public void method() {
        int n; // 1
        n = 1; // 2
        (n) = 2; // 3
        n++; // 4
        if((n = 4) > 1) {}
        this.n = 1; // does not match!
    }
}
```

