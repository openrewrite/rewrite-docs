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

Let's visualize how a call to generic TreeVisitor.visit\(T, P\) is mapped into a language specific visit method:

![Example of Visitor Navigation](../.gitbook/assets/image%20%2816%29.png)

### Cursoring

All visitors have a cursoring mechanism that maintain a stack of AST elements as they traverse the tree.  The cursor allows visitors to be contextually aware of the location, within the AST, of an element as it is visited.

As an example of how cursoring can be helpful image a visitor that is tasked with marking only the top-level class as "final". The compilation unit, represented as an AST may include a class that itself has several nested classes. The cursor can be used to determine if the class is the top-level class or if it is an inner class:

```java
public class MakeClassesFinal extends JavaVisitor<P> {

    @Override
    public J visitClassDecl(J.ClassDecl classDecl) {
        J.ClassDecl c = refactor(classDecl, super::visitClassDecl);

        // If the current class is not enclosed by another class declaration,
        // it must be the top-level class.
        if(getCursor().firstEnclosing(J.ClassDecl.class) == null) {
            c = c.withModifiers("final");
        }

        return c;
    }
}
```

## Language-specific Visitors

Each language binding contains a visitor implementation extending from `TreeVisitor`. For example, the Rewrite language binding for Java is `JavaVisitor`. It is on these language-specific source visitors that the visit methods for each AST element are defined along with the language-specific traversal logic.

```java
interface JavaSourceVisitor<P> extends TreeVisitor<J, P> {
  J visitStatement(Statement statement);
  J visitTypeName(NameTree name);
  J visitAnnotatedType(J.AnnotatedType annotatedType);
  J visitAnnotation(J.Annotation annotation);
  J visitArrayAccess(J.ArrayAccess arrayAccess);
  J visitArrayType(J.ArrayType arrayType);
  J visitAssert(J.Assert azzert);
  J visitAssign(J.Assign assign);
  J visitAssignOp(J.AssignOp assignOp);
  J visitBinary(J.Binary binary);
  ...
}
```

s.

## Example: Counting the number of Java method invocations

Let's implement a simple Java source visitor that just counts the number of total method invocations to demonstrate the concepts we've covered so far.

```java
class JavaMethodCount extends AbstractSourceVisitor<Integer> {
  public Integer defaultTo(@Nullable Tree t) {
    return 0;
  }

  public Integer reduce(Integer c1, Integer c2) {
    return c1 + c2;
  }

  public Integer visitMethodInvocation() {
    return 1 + super.visitMethodInvocation();
  }
}
```

Much of this is relatively straightforward. Unless you know nothing is relevant down-tree, it is crucial to always call super in a visit method and incorporate its response somehow. In this case, if we just returned the constant value `1` from `visitMethodInvocation` the individual invocations involved in a chained method invocation would only add 1 to the total.

## Calling Visitors

Invoke a visitor by instantiating it and calling `visit` on any AST node \(usually the root\). A visitor can return any type.

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

int methodCount = new JavaMethodCount().visit(cu);
assertThat(methodCount).isEqualTo(3);
```

## Refactoring Visitors

Each language binding provides a further specialization of `SourceVisitor` that is used for transforming source code, e.g. `JavaRefactorVisitor`. The return type of this visitor is set to the base interface of that language's AST tree. `JavaRefactorVisitor` always reduces to a `org.openrewrite.java.J`.

The vast majority of the time, visitor methods should return the type of their input parameter. So `visitMethodInvocation` should return a `J.MethodInvocation`, `visitCompilationUnit` should return a `J.CompilationUnit`, and so on. There are a narrow set of circumstances when this is not true. For example, [UnwrapParentheses]() visits `J.Parentheses<?>` and can return whatever type of expression is inside the parentheses it is unwrapping.

{% hint style="warning" %}
Generally refactoring visitors must be called on the root AST element to function correctly. Otherwise, internal state like cursors are not accurate. More general purpose visitors can be invoked on any element in the tree.
{% endhint %}

Since refactor visitors are invoked on their root AST element, the net effect of this pattern is that the visitor receives a top-level AST element and produces a potentially changed top-level AST element. [Refactor]() describes in greater detail how this changed top-level AST element is used to produce fixed code or Git-style diffs.

Like with other visitors, most of the time it is important to call super on visit methods in a refactoring visitor to allow the operation to dig deeper in the tree looking for further code to change. Only if you are certain that nothing further down the tree will require changes should you not call super on a visit method. Every language-specific refactor visitor shares a utility method called `refactor` that helps you call super and cast the result in one call:

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

Refactoring visitors can be chained together by calling `andThen(anotherVisitor)`. This is useful for building up pipelines of refactoring operations built up of lower-level components. For example, when [ChangeFieldType]() finds a matching field that it is going to transform, it chains together an [AddImport]() visitor to add the new import if necessary, and a [RemoveImport]() to remove the old import if there are no longer any references to it.

## Cursoring

Visitors can be cursored or not. Cursored visitors maintain a stack of AST elements that have been traversed in the tree thus far. In exchange for the extra memory footprint, such visitors can operate based on the location of AST elements in the tree. Many refactoring operations don't require this state. Below is an example of a Java refactoring operation that makes each top-level class final. Since class declarations can be nested \(e.g. inner classes\), we use the cursor to determine if the class is top-level or not. Refactoring operations should also be given a fully-qualified name with a package representing the group of operations and a name signifying what it does.

```java

```

## 

