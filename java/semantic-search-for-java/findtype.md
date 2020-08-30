---
description: List all AST elements that refer by name to a type.
---

# FindType

### Definition

`FindType` lists all AST elements that refer by name to a particular class name referred to by a sub-tree. It does not support listing references to primitive types.

```java
J.CompilationUnit cu = ...

// all the types referred to in a source file
Set<JavaType.Class> anywhereInFile = new FindTypes("java.util.List")
  .visit(cu);
```

Note that this does _not_ include implicit uses of a type. Consider the following class:

```java
import java.util.List; // imports don't match

public class Sample {
  // matches twice, one on each of the List references
  List<List<String>> listOfLists = new ArrayList<>();
  
  // matches on return expression
  List<String> getName() {
  }
}
```

Other examples of potential matches include \(not an exhaustive list\):

* `List::add`
* `MyType.genericSignature<List<String>>()`
* `catch(IllegalArgumentException e)` - Matches on `java.lang.IllegalArgumentException`
* `List[]`
* `new List<String>() { }` - An anonymous class declaration
* `(List<String>) collection` - A typecast

