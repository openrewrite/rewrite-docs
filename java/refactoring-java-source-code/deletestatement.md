---
description: Deletes a statement.
---

# DeleteStatement

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

This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

## Java Definition
The following refactoring visitor deletes `assert` statements anywhere they are found in code.

```java
public class DeleteAsserts extends JavaIsoRefactorVisitor {
  public J.Assert visitAssert(J.Assert azzert) {
    andThen(new DeleteStatement(azzert));
    return super.visitAssert(azzert);
  }
}
```

## Example

Applying the `DeleteAsserts` visitor defined above: 

Before:
```java
class A {
    void foo() {
        assert false;
    }
}
```

After:
```java
class A {
    void foo() {
    }
}
```