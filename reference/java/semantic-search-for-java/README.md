# Semantic Search for Java

Rewrite provides high-level building block search functionality for the most common search needs. Additionally, you can build a custom [visitor](../../../v1beta/visitor.md) to build custom search logic, potentially composing some of these building blocks.

To get a sense of what's possible, let's start with a simple example.

### Example - Searching for Method Invocations

The example below builds an AST for a simple class and searches for uses of Guava's `Files#createTempDir()`. The argument for `findMethodCalls` takes the [AspectJ syntax](https://www.eclipse.org/aspectj/doc/next/adk15notebook/ataspectj-pcadvice.html) for pointcut matching on methods.

```kotlin
JavaParser jp = JavaParser
  .fromJavaVersion()
  .classpath(JavaParser.dependenciesFromClsaspath("guava"))
  .build();
    
J.CompilationUnit cu = jp
    // uses JEP-355 Text Blocks (a Java 13 preview feature)
    .parse("""
        import com.google.common.io.Files;
        public class A {
            File temp = Files.createTempDir();
        }
    """)
    .iterator()
    .next();

List<J.MethodInvocation> calls = cu.findMethodCalls(
    "java.io.File com.google.common.io.Files.createTempDir()");
```

Many other search methods exist on `J.CompilationUnit`:

* `boolean hasImport(String clazz)` - Look for imports by fully-qualified class name.
* `boolean hasType(String clazz)` - Check whether a source file has a reference to a fully-qualified class name.
* `Set<NameTree> findType(String clazz)` - Return all the AST elements that are type-attributed with a particular type.

You can also move down a level to individual classes \(`cu.getClasses()`\) inside a source file and perform additional operations:

* `List<VariableDecls> findFields(String clazz)` - Finds fields declared in this class that refer to a specific type.
* `List<JavaType.Var> findInheritedFields(String clazz)` - Find fields that are inherited from a base class. Note that since they are inherited, there is no AST element to match on, but you'll be able to determine if a class has a field of a particular type coming from a base class and then look for uses of this field.
* `Set<NameTree> findType(String clazz)` - Return all AST elements inside this class referring to a type.
* `List<Annotation> findAnnotations(String signature)` - Finds all annotations matching a signature as defined in the AspectJ pointcut definition for annotation matching.
* `boolean hasType(String clazz)` - Checks whether a class refers to a type.
* `hasModifier(String modifier)` - Checks for modifiers on the class definition \(e.g. public, private, static\).
* `isClass()/isEnum()/isInterface()/isAnnotation()`.

More search methods are available further down the AST.

You can build custom search visitors by extending `AbstractJavaSourceVisitor` and implementing any `visitXXX` methods that you need to perform your search. These don't have to be complex. `FindMethods` only extends `visitMethodInvocation` to check whether a given invocation matches the signature we are looking for:

```java
public class FindMethods extends AbstractJavaSourceVisitor<List<J.MethodInvocation>> {
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

### Next Steps

The next several pages contain reference material for all search visitors provided out-of-the-box by Rewrite for Java code.

