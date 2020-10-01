---
description: Deletes a statement.
---

# DeleteStatement

### Definition

`DeleteStatement` deletes a statement. In Java, statements include:

* Assignments
* Try/catch
* Enum values
* "Empty" -- e.g. statements inside a block that are just standalone semicolons.
* Method invocations
* Loop `continue` and `break`
* If statements
* `assert` 
* Unary operations
* Labels
* Loops \(for, for each, while, and do while\)
* Variable declarations
* Blocks
* New class instantiations
* Throw
* Method `return` 
* Anonymous class declarations
* Synchronized blocks
* Switch blocks and cases

This transformation visitor is meant to be used on specific statements and so it doesn't have a declarative form.

### Example

The following refactoring visitor deletes `assert` statements anywhere they are found in code.

```java
public class DeleteAsserts extends JavaRefactorVisitor {
  public J visitAssert(J.Assert azzert) {
    andThen(new DeleteStatement(azzert);
    return super.visitAssert(azzert);
  }
}
```

