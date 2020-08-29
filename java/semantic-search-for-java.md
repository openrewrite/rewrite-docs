# Semantic Search for Java

Extending on the example from above, we can search for uses of Guava's `Files#createTempDir()`. The argument for `findMethodCalls` takes the [AspectJ syntax](https://www.eclipse.org/aspectj/doc/next/adk15notebook/ataspectj-pcadvice.html) for pointcut matching on methods.

```kotlin
val cu: J.CompilationUnit = JavaParser(JavaParser.dependenciesFromClasspath("guava"))
    .parse("""
        import com.google.common.io.Files;
        public class A {
            File temp = Files.createTempDir();
        }
    """)

val calls: List<J.MethodInvocation> = cu.findMethodCalls(
    "java.io.File com.google.common.io.Files.createTempDir()");
```

Many other search methods exist on `J.CompilationUnit`:

* `boolean hasImport(String clazz)` to look for imports.
* `boolean hasType(String clazz)` to check whether a source file has a reference to a type.
* `Set<NameTree> findType(String clazz)` to return all the AST elements that are type-attributed with a particular type.

You can also move down a level to individual classes \(`cu.getClasses()`\) inside a source file and perform additional operations:

* `List<VariableDecls> findFields(String clazz)` to find fields declared in this class that refer to a specific type.
* `List<JavaType.Var> findInheritedFields(String clazz)` to find fields that are inherited from a base class. Note that since they are inherited, there is no AST element to match on, but you'll be able to determine if a class has a field of a particular type coming from a base class and then look for uses of this field.
* `Set<NameTree> findType(String clazz)` to return all AST elements inside this class referring to a type.
* `List<Annotation> findAnnotations(String signature)` to find all annotations matching a signature as defined in the AspectJ pointcut definition for annotation matching.
* `boolean hasType(String clazz)` to check whether a class refers to a type.
* `hasModifier(String modifier)` to check for modifiers on the class definition \(e.g. public, private, static\).
* `isClass()/isEnum()/isInterface()/isAnnotation()`.

More search methods are available further down the AST.

You can build custom search visitors by extending `JavaSourceVisitor` and implementing any `visitXXX` methods that you need to perform your search. These don't have to be complex. `FindMethods` only extends `visitMethodInvocation` to check whether a given invocation matches the signature we are looking for:

```java
public class FindMethods extends JavaSourceVisitor<List<J.MethodInvocation>> {
    private final MethodMatcher matcher;

    public FindMethods(String signature) {
        this.matcher = new MethodMatcher(signature);
    }

    @Override
    public List<J.MethodInvocation> defaultTo(Tree t) {
        return emptyList();
    }

    @Override
    public List<J.MethodInvocation> visitMethodInvocation(J.MethodInvocation method) {
        return matcher.matches(method) ? singletonList(method) : super.visitMethodInvocation(method);
    }
}
```

Invoke a custom visitor by instantiating the visitor and calling `visit` on the root AST node. `JavaSourceVisitor` can return any type. You define a default return with `defaultTo` and can provide a custom reduction operation by overriding `reduce` on the visitor.

```java
J.CompilationUnit cu = ...;

// this visitor can return any type you wish, ultimately
// being a reduction of visiting every AST element
new MyCustomVisitor().visit(cu);
```

