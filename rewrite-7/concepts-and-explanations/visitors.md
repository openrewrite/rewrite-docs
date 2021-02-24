---
description: >-
  Observes each element of an AST and reduces all these observations to a single
  value.
---

# Visitors

## The Visitor Pattern

The [visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern#Java_example) is a well-known technique for reasoning about complex object structures. Abstract syntax trees for a language like Java consist of many types, however, when performing semantic analysis or transformation, the work is typically scoped to a few, specific types.

A visitor is analogous to an event-handler, describing "what" to do and "when" to do it as part of Rewrite traversing elements in the tree. Rewrite provides an event-driven model where a developer only needs to implement "visit" methods for object types that they are interested in. This leaves Rewrite with the responsibility of traversing a tree completely.

All Rewrite visitors extend the base class `TreeVisitor<T extends Tree, R>`.

## Returning Values from Visitors

The `R` is the return type of the visitor. You can think of a visitor as a miniature map-reduce operation where visiting each element in the tree returns an `R` and we reduce all of those `R` values into one aggregated `R` value in the end. The visit methods for any object types we don't implement ourselves return a default value and we must define a reduction step for our visitor.

* `R defaultTo(@Nullable Tree tree)`
* `R reduce(R r1, R r2)`

Some reduction operations are so common that `SourceVisitor` provides a default implementation of `reduce` that, when `R` is of a certain type, use a pre-defined aggregation.

| R type | Aggregation |
| :--- | :--- |
| Boolean | Logical or |
| String | Concatenation |
| Set | Set union |
| Collection | Collection union |
| Anything else | If `r1` is null then `r2`. Otherwise `r1`. |

## Language-specific Visitors

Each language binding contains a visitor interface extending from `SourceVisitor`. For example, the Rewrite language binding for Java contains a `JavaSourceVisitor`. It is on these language-specific source visitors that the visit methods for each AST element are defined:

```java
interface JavaSourceVisitor<R> extends SourceVisitor<R> {
  R visitStatement(Statement statement);
  R visitTypeName(NameTree name);
  R visitAnnotatedType(J.AnnotatedType annotatedType);
  R visitAnnotation(J.Annotation annotation);
  R visitArrayAccess(J.ArrayAccess arrayAccess);
  R visitArrayType(J.ArrayType arrayType);
  R visitAssert(J.Assert azzert);
  R visitAssign(J.Assign assign);
  R visitAssignOp(J.AssignOp assignOp);
  R visitBinary(J.Binary binary);
  ...
}
```

Additionally, each language binding defines an abstract class that implements its visitor interface. This abstract class contains the traversal logic for the language's AST. The Java visitor is `AbstractJavaSourceVisitor`, and the class naming is wholly similar for other language bindings.

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

The vast majority of the time, visitor methods should return the type of their input parameter. So `visitMethodInvocation` should return a `J.MethodInvocation`, `visitCompilationUnit` should return a `J.CompilationUnit`, and so on. There are a narrow set of circumstances when this is not true. For example, [UnwrapParentheses](../../reference/java/refactoring-java-source-code/unwrapparentheses.md) visits `J.Parentheses<?>` and can return whatever type of expression is inside the parentheses it is unwrapping.

{% hint style="warning" %}
Generally refactoring visitors must be called on the root AST element to function correctly. Otherwise, internal state like cursors are not accurate. More general purpose visitors can be invoked on any element in the tree.
{% endhint %}

Since refactor visitors are invoked on their root AST element, the net effect of this pattern is that the visitor receives a top-level AST element and produces a potentially changed top-level AST element. [Refactor](../../v1beta/refactor.md) describes in greater detail how this changed top-level AST element is used to produce fixed code or Git-style diffs.

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

Refactoring visitors can be chained together by calling `andThen(anotherVisitor)`. This is useful for building up pipelines of refactoring operations built up of lower-level components. For example, when [ChangeFieldType](../../reference/java/refactoring-java-source-code/changefieldtype.md) finds a matching field that it is going to transform, it chains together an [AddImport](../../reference/java/refactoring-java-source-code/addimport.md) visitor to add the new import if necessary, and a [RemoveImport](../../reference/java/refactoring-java-source-code/removeimport.md) to remove the old import if there are no longer any references to it.

## Cursoring

Visitors can be cursored or not. Cursored visitors maintain a stack of AST elements that have been traversed in the tree thus far. In exchange for the extra memory footprint, such visitors can operate based on the location of AST elements in the tree. Many refactoring operations don't require this state. Below is an example of a Java refactoring operation that makes each top-level class final. Since class declarations can be nested \(e.g. inner classes\), we use the cursor to determine if the class is top-level or not. Refactoring operations should also be given a fully-qualified name with a package representing the group of operations and a name signifying what it does.

```java
public class MakeClassesFinal extends JavaRefactorVisitor {
    public MakeClassesFinal {
        super("my.MakeClassesFinal");
        setCursoringOn();
    }

    @Override
    public J visitClassDecl(J.ClassDecl classDecl) {
        J.ClassDecl c = refactor(classDecl, super::visitClassDecl);

        // only make top-level classes final
        if(getCursor().firstEnclosing(J.ClassDecl.class) == null) {
            c = c.withModifiers("final");
        }

        return c;
    }
}
```

## 

