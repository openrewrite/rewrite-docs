---
description: Find fields defined up the type hierarchy
---

# FindInheritedFields

### Definition

```java
J.CompilationUnit cu;

FindInheritedField fif = new FindInheritedField("java.util.logging.Logger");
List<JavaType.Var> fields = fif.visit(cu);
```

`FindInheritedFields` takes a single parameter, `fullyQualifiedName`, with the field type to search for. It finds fields defined up the type hierarchy \(in classes extended from both directly and transitively\) 

* **Matches on arrays of the searched type** - `new FindInheritedField("java.lang.String")` matches fields of type `String` and `String[]`.
* **Only accessible fields** - Only fields with a visibility are accessible in the context of the class that the visitor is executed on are matched. So private fields declared up the type hierarchy are not matched, nor are default visibility fields in super-types that are not in the same package as the searched class. 
* **Only in the supertype hierarchy** -  This visitor also does _not_ match on fields in the class searched. Use [FindFields](findfields.md) if you want to match on fields defined in the searched class.

Suppose we have the following type hierarchy:

```java
class Animal {
  String name;
  String[] friends;
}

class Dog {
  String breed;
}
```

`new FindInheritedFields("java.lang.String")` matches on `name` and `friends`, but not `breed` when ran on the Dog class.

```java
J.ClassDecl dog;
FindInheritedFields fif = new FindInheritedFields("java.lang.String");
List<JavaType.Var> nameAndFriends = fif.visit(dog);
```

### Shortcut

A `findInheritedFields` method is also available on `J.ClassDecl`.

```java
J.ClassDecl clazz = ...
clazz.findInheritedFields("java.lang.String");
```

