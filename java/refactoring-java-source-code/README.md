# Transforming Java Code

Refactoring code starts at the root of the AST which for Java is `J.CompilationUnit`. Call `refactor()` to begin a refactoring operation. We'll detail the kinds of refactoring operations that you can do in a moment, but at the end of this process, you can call `fix()` which generates a `Change` instance that allows you to generate git diffs and print out the original and transformed source.

```java
JavaParser parser = ...;
List<J.CompilationUnit> cus = parser.parse(sourceFiles);

for(J.CompilationUnit cu : cus) {
    Refactor<J.CompilationUnit, J> refactor = cu.refactor();

    // ... do some refactoring

    Change<J.CompilationUnit> change = refactor.fix();

    change.diff(); // a String representing a git-style patch
    change.diff(relativeToPath); // relativize the patch's file reference to some other path

    // print out the transformed source, which could be used 
    // to overwrite the original source file
    J.CompilationUnit fixed = change.getFixed();
    fixed.print();

    // useful for unit tests to get trim the output of common whitespace
    fixed.printTrimmed();

    // this is null when we synthesize a new compilation unit 
    // where one didn't exist before
    @Nullable J.CompilationUnit original = change.getOriginal();
}
```

`rewrite-java` packs with a series of refactoring building blocks which can be used to perform low-level refactoring operations. For example, to change all fields from `java.util.List` to `java.util.Collection`, we could use the `ChangeFieldType` operation:

```kotlin
@Test
fun changeFieldType() {
    val a = parse("""
        import java.util.List;
        public class A {
           List collection;
        }
    """.trimIndent())

    val fixed = a.refactor()
            .visit(ChangeFieldType(
                    a.classes[0].findFields("java.util.List")[0], 
                    "java.util.Collection"))
            .fix().fixed

    assertRefactored(fixed, """
        import java.util.Collection;

        public class A {
           Collection collection;
        }
    """)
}
```

The basic building blocks are included in the [refactor](https://github.com/openrewrite/rewrite/tree/master/rewrite-java/src/main/java/org/openrewrite/java/refactor) package, including:

* Add annotation to a class, method, or variable.
* Add a field to a class.
* Add/remove an import, which can be configured to expand/collapse star imports.
* Change field name \(including its references, even across other source files that _use_ this field not just where the field is defined\).
* Change a field type.
* Change a literal expression.
* Change a method name, including anywhere that method is referenced.
* Change a method target to a static from instance method.
* Change a method target to an instance method from a static.
* Change a type reference, anywhere it is found in the tree.
* Insert/delete method arguments.
* Delete any statement.
* Generate constructors using fields.
* Rename a variable.
* Reorder method arguments.
* Unwrap parentheses.
* Implement an interface.

Each one of these operations is defined as a `JavaRefactorVisitor`, which is an extension of `JavaSourceVisitor` designed for mutating the AST, ultimately leading to a `Change` object at the end of the refactoring operation.

Visitors can be cursored or not. Cursored visitors maintain a stack of AST elements that have been traversed in the tree thus far. In exchange for the extra memory footprint, such visitors can operate based on the location of AST elements in the tree. Many refactoring operations don't require this state. Below is an example of a refactoring operation that makes each top-level class final. Since class declarations can be nested \(e.g. inner classes\), we use the cursor to determine if the class is top-level or not. Refactoring operations should also be given a fully-qualified name with a package representing the group of operations and a name signifying what it does.

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

Visitors can be chained together by calling `andThen(anotherVisitor)`. This is useful for building up pipelines of refactoring operations built up of lower-level components. For example, when `ChangeFieldType` finds a matching field that it is going to transform, it chains together an `AddImport` visitor to add the new import if necessary, and a `RemoveImport` to remove the old import if there are no longer any references to it.

