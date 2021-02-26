---
description: >-
  Observes each element of an AST and reduces all these observations to a single
  value.
---

# Visitors

## The Visitor Pattern

The [visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern#Java_example) is a well-known technique for reasoning about complex object structures. Abstract syntax trees for a language like Java consist of many types, however, when performing semantic analysis or transformation, the work is typically scoped to a few, specific types.

A visitor is analogous to an event-handler, describing "what" to do and "when" to do it as part of Rewrite traversing elements in the tree. Rewrite provides an event-driven model where a developer only needs to implement "visit" methods for object types that they are interested in. This leaves Rewrite with the responsibility of traversing a tree completely.

## Rewrite's Visitor Concepts

All of Rewrite's visitors share a common structure and life cycle that centers on the traversal and transformation of ASTs. It is important to understand the core concepts and the life-cycles provided by the framework.

### `Tree`

**The commodities upon which all of Rewrite's visitors operate are the AST elements and all of those elements implement the `Tree` interface.**

The first thing that a developer will notice about Rewrite's visitors is that they always accept and return a parameterized type that extends `Tree`. This interface is the foundational contract for all types defined within any abstract syntax tree. A Tree type has the following characteristics:

* It has a unique ID that can be used to identify it as a specific AST instance, even after transformations have taken place on that element.
* It has an `accept()` method that acts as a callback into a language-specific Visitor.
* It has facilities to convert itself back into a source-readable form via several `print()` methods.
* It implements Markable such that all AST elements can have [Markers](markers.md) applied to express additional meta-data about the element.

### `TreeVisitor`

The framework provides the base class `TreeVisitor<T extends Tree, P>` from which all of Rewrite's visitors extend. It is this class that provides the generic, parameterized **`T visit(T, P)`** method that drives a visitor's polymorphic navigation, cursoring, and life-cycle. The parameterized type `T` represents the type of tree elements upon which the visitor will navigate and transform. The second parameterized type `P` is an additional, shared context that is passed to all visit methods as a visitor navigates a given AST.

### Cursoring

All visitors have a cursoring mechanism that maintain a stack of AST elements as they traverse the tree. The cursor allows visitors to be contextually aware of the location, within the AST, of an element as it is visited.

As an example of how cursoring can be helpful, image a visitor that is tasked with traversing a Java AST and marking only the top-level class as "final". The compilation unit, expressed as an AST, may include a class that itself has several nested classes. Visiting such a tree would result in the `visitClassDeclaration()` method being called multiple times. The cursor can be used to determine which class declaration represents the top-level class:

```java
public class MakeTopeLevelClassFinal extends JavaVisitor<P> {

    @Override
    public J visitClassDeclaration(J.ClassDeclaration classDeclaration, P context) {
        //The base class provides the proper, language-specific navigation of
        //a J.ClassDeclaration. It is very important to call the super to enure the
        //visitor navigates the class declaration's sub-tree.
        J.ClassDeclaration c = visitAndCast(classDeclaration, super::visitClassDeclaration);

        // If the current class declaration is not enclosed by another class declaration,
        // it must be the top-level class.
        if(getCursor().firstEnclosing(J.ClassDecl.class) == null) {
            c = c.withModifiers("final");
        }

        return c;
    }
}
```

## Language-specific Visitors

Each language binding contains a visitor implementation extending from `TreeVisitor`. As an example, the Rewrite language binding for Java is `JavaVisitor`. It is on these language-specific source visitors that the visit methods for each AST element are defined along with the language-specific traversal logic.

```java
class JavaVisitor<P> extends TreeVisitor<J, P> {
  J visitStatement(Statement statement) {...}
  J visitTypeName(NameTree name) {...}
  J visitAnnotatedType(J.AnnotatedType annotatedType)  {...}
  J visitAnnotation(J.Annotation annotation) {...}
  J visitArrayAccess(J.ArrayAccess arrayAccess) {...}
  J visitArrayType(J.ArrayType arrayType) {...}
  J visitAssert(J.Assert azzert) {...}
  J visitAssignment(J.Assignment assign) {...}
  J visitAssignmentOperation(J.AssignmentOperation assignOp) {...}
  J visitBinary(J.Binary binary) {...}
  ...
}
```

An important concept to understand is what happens when the generic`TreeBuilder.visit(T, P)` method is called and how that is mapped into it's language-specific counterpart. Let's visualize how a Java CompilationUnit is passed from a client to the visitor:

![Example of Visitor Navigation](../.gitbook/assets/image%20%2816%29.png)

The most obvious observation is that calling the generic form of `visit()` will result in having the compilation unit's `accept()` method executed. The `accept()` method will then cast the visitor to the language-specific variant and then call the appropriate, language-specific `visitCompilationUnit()` method.

Less obvious, in the above visualization, is that the base implementation also maintains the cursor position and manages the visitor life-cycle.

{% hint style="danger" %}
STRONG WARNING!

A client may have a reference to the language-specific visitor and it may be tempting to call the language-specific visit methods directly, Circumventing the generic `TreeBuilder.visit()` method also means the developer is circumventing proper cursor management and critical visitor life-cycle management.
{% endhint %}

## Example: Counting the number of Java method invocations

Let's implement a simple Java visitor that will count the number of method invocations in a Java AST. This example will use the second typed parameter of the visitor as our shared counter.

```java
class JavaMethodCount extends AbstractSourceVisitor<AtomicInteger> {

  @Override
  public J visitMethodInvocation(J.MethodInvocation method, AtomicInteger p) {
    //increment the shared counter when visiting a method invocation.
    p.incrementAndGet();
    return super.visitMethodInvocation(method, p);
  }
}
```

The visitor's shared context is a simple, mutable AtomicInteger and in our example the `visitMethodInvocation` is overridden to increment the counter. The JavaVisitor will traverse the AST and call this method each time a method invocation is encountered in the tree.

It is straightforward to leverage the the newly created visitor. A caller will first initialize the shared counter, it will instantiate the visitor, and call the visitor's visit method passing both the compilation unit and the counter.

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

J.CompilationUnit cu = jp.parse(
        "    import org.slf4j.Logger;\n" +
        "    public class Sample {\n" +
        "        Logger logger;\n" +
        "\n" +
        "        {\n" +
        "            logger.info(\"1\");\n" +
        "            logger.warn(\"2\");\n" +
        "            logger.error(\"3\");\n" +
        "        }\n" +
        "    }"
).get(0);

AtomicInteger counter = new AtomicInteger(0);
new JavaMethodCount().visit(cu, counter);
assertThat(counter.get()).isEqualTo(3);
```

## Refactoring Visitors

A language-specific visitor is always scoped to return the base interface of that language's AST tree. Examining the JavaVisitor a bit closer, the first typed parameters is defined as `org.openrewrite.java.tree.J`and all of it's language-specific visit methods also return `J`.

```java
class JavaVisitor<P> extends TreeVisitor<J, P> {
...
  J visitClassDeclaration(J.ClassDeclaration classDeclaration, P p) {...}
  J visitCompilationUnit(J.CompilationUnit cu, P p) {...]
...
}
```

A transforming visitor can accept an existing AST element and return either a modified version of that element or, in some cases, a different element entirely.

The vast majority of the time, visitor methods will return the same type as that of their input parameter. As examples, `visitMethodInvocation` will typically return `J.MethodInvocation`, `visitCompilationUnit` will typically return a `J.CompilationUnit`, and so on. There are a narrow set of circumstances when this is not true. For example, an UnwrapParentheses visitor might override the `J.Parentheses<?>` and can return whatever type of expression is inside the parentheses it is unwrapping.

{% hint style="warning" %}
Generally refactoring visitors must be called on the root AST element to function correctly. Otherwise, internal state like cursors are not accurate. More general purpose visitors can be invoked on any element in the tree.
{% endhint %}

Since refactor visitors are invoked on their root AST element, the net effect of this pattern is that the visitor receives a top-level AST element and produces a potentially changed top-level AST element. All language-specific, top-level AST elements implement the SourceFile interface, which allows an AST tree to be correlated to the source file path. See the next section on [Recipes](recipes.md) that describes in greater detail how Rewrite manages changes to a collection of top-level AST elements to produce source code or Git-style diffs.

{% hint style="warning" %}
In almost all circumstances, it is important to call the visit method on the super to ensure the refactoring operation navigates deeper down the tree to find all places where the operation should be applied.
{% endhint %}

Every language-specific refactor visitor shares a utility method called `refactor` that helps you call super and cast the result in one call:

```java
public class RemoveModifiers extends JavaRefactorVisitor {
  public J visitMethod(J.MethodDecl method) {
    J.MethodDecl m = refactor(method, super::visitMethod);
    m = m.withModifiers(emptyList());    
    return m;
  }
}
```

{% hint style="warning" %}
Rewrite AST types are immutable. So remember to always assign the result of a `with` call to a variable locally that you return at the end of the visit method.
{% endhint %}

## Refactor Visitor Pipelines

Refactoring visitors can be chained together by calling `andThen(anotherVisitor)`. This is useful for building up pipelines of refactoring operations built up of lower-level components. For example, when [ChangeFieldType](visitors.md) finds a matching field that it is going to transform, it chains together an [AddImport](visitors.md) visitor to add the new import if necessary, and a [RemoveImport](visitors.md) to remove the old import if there are no longer any references to it.

