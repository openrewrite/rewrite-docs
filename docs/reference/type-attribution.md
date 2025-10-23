# Type Attribution

Type attribution is the process of associating semantic type information with syntactic elements in the Lossless Semantic Tree (LST).
This metadata enables OpenRewrite recipes to make informed decisions when transforming code, such as determining if two expressions are assignment-compatible or differentiating between syntactically similar but semantically distinct code.
For example, differentiating between an SLF4J `log.info()` and a LOG4J `log.info()` can be difficult from when working with raw text or an unattributed syntax tree, but is easy with type attribution.

In OpenRewrite's LST, recipes interact with type attribution primarily through:

1. **LST Elements with Type Information** - Tree nodes that implement `TypedTree` and carry a `JavaType` reference
2. **JavaType** - Interface whose implementations collectively model Java's type system
3. **Utilities like MethodMatcher and TypeUtils** - Provide convenient access to common type related operations.

These classes originate in the Java type system, but OpenRewrite re-uses these classes for multiple languages so these types appear in LSTs representing languages like Kotlin and TypeScript as well.

## The JavaType hierarchy

`JavaType` is the root interface implemented by all type information in OpenRewrite.
The interface is substantially empty with the important data and behavior belonging to its subclasses.

### JavaType.FullyQualified

Many JavaType implementations share a common interface: `JavaType.FullyQualified`.
This interface is implemented by `Annotation`, `Class`, `Parameterized`, `ShallowClass`, and `Unknown`.
All implementations of this interface provide a fully qualified name of the class (e.g., `"java.util.List"`).
Excepting `ShallowClass` and `Unknown`, the other implementations further provide access to the type's supertype, interfaces, methods, fields, and other metadata.

When working with types it is common to check if a type is a `FullyQualified` instance before accessing its fully qualified name or other structural information.

### JavaType implementations

- **`JavaType.Class`** - Represents a fully-qualified class or interface with complete metadata:
    - Fully qualified name (e.g., `"java.util.List"`)
    - Supertype and interfaces
    - Type parameters (e.g., `E` in `List<E>`)
    - Fields (as `JavaType.Variable`)
    - Methods (as `JavaType.Method`)
    - Annotations
    - Flags (public, static, final, etc.)

- **`JavaType.Parameterized`** - Represents a parameterized type application:
    - The raw type (a `FullyQualified`)
    - Type arguments (e.g., `String` in `List<String>`)
    - Example: `List<String>` vs. raw `List`

- **`JavaType.ShallowClass`** - A lightweight `Class` variant containing only the fully qualified name:
    - Used when a recipe needs to manually construct type information but only knows the fully qualified name
    - Lacks the deep metadata (methods, fields, supertype) that a full `JavaType.Class` provides
    - Useful as a fallback when full type information is unavailable
    - **Best Practice**: Prefer obtaining complete type information from `JavaTemplate` or `JavaParser` when possible, but use `ShallowClass.build("com.example.MyClass")` if a more robust approach is unavailable.

- **`JavaType.GenericTypeVariable`** - Represents type parameters and wildcards:
    - Name (e.g., `"T"`, `"E"`, or `"?"` for wildcards)
    - Bounds (e.g., `String` in `T extends String`)
    - Variance (`INVARIANT`, `COVARIANT` for `? extends`, `CONTRAVARIANT` for `? super`)

- **`JavaType.Array`** - Represents array types:
    - Element type (which may itself be an array)
    - Example: `String[]`, `int[][]`

- **`JavaType.Primitive`** - Enum representing primitive types:
    - Values: `Boolean`, `Byte`, `Char`, `Short`, `Int`, `Long`, `Float`, `Double`, `Void`, `String`, `Null`, `None`

- **`JavaType.Method`** - Represents a method signature:
    - Declaring type
    - Method name
    - Return type
    - Parameter types and names
    - Thrown exceptions
    - Modifiers
    - Type parameters declared by the method

- **`JavaType.Variable`** - Represents a field or variable:
    - Owner (the class or method declaring the variable)
    - Variable type
    - Variable name

- **`JavaType.Unknown`** - Singleton sentinel value for unresolved types

- **`JavaType.Intersection`** - Represents intersection types (e.g., `T extends A & B`)

- **`JavaType.MultiCatch`** - Represents multi-catch exception types (e.g., `IOException | SQLException`)

## Accessing type attribution in LST Elements

Typed LST elements implement the `TypedTree` interface allows a `JavaType` implementation to be retrieved from the LST element with `getType()` and updated with `withType()`:

```java
public interface TypedTree {
    @Nullable JavaType getType();
    <T extends Tree> T withType(@Nullable JavaType type);
}
```

### Common Typed Elements

- **`J.Identifier`** - Simple name references
- **`J.FieldAccess`** - Qualified field access (e.g., `obj.field`)
- **`J.MethodInvocation`** - Method invocations
- **`J.NewClass`** - Constructor invocations
- **`J.Binary`** - Binary operations (e.g., `a + b`)
- **`J.Assignment`** - Assignments (e.g., `x = y`)
- **`J.VariableDeclarations.NamedVariable`** - Variable declarations (e.g.: the `s` in `String s`)
- **`J.ClassDeclaration`** - Class declarations (type is `JavaType.FullyQualified`)

### Example: Method Invocation Type Attribution

```java
List<String> list = new ArrayList<>();
String first = list.get(0);
```

In the LST for `list.get(0)`:
- `J.MethodInvocation.getType()` will provide the return-type of `String`
- `J.MethodInvocation.getMethodType()` provides access to a `JavaType.Method` with:
    - Name: `"get"`
    - Declaring type: `java.util.List<E>`
    - Return type: `E` (resolved to `String` in this context)
    - Parameter types: `[int]`
- The select expression `list` has type `JavaType.Parameterized` with:
    - Raw type: `java.util.List`
    - Type parameters: `[String]`


## TypeUtils: Working with Types

The `org.openrewrite.java.tree.TypeUtils` provides utilities for reading, comparing, and working with types.

### Type Comparison

These methods provide different levels of type compatibility checking:

```java
JavaType intType = JavaType.Primitive.Int;
JavaType longType = JavaType.Primitive.Long;

// Check if two types are exactly the same
boolean same = TypeUtils.isOfType(intType, longType);
// Returns: false (int and long are different types)

// Check if the second type is assignable to the first (considers widening and boxing conversions)
boolean assignable = TypeUtils.isAssignableTo(longType, intType);
// Returns: true (int can be assigned to long via primitive widening)

// Check if a type matches a fully qualified name or primitive keyword
boolean matches = TypeUtils.isOfClassType(intType, "int");
// Returns: true (intType matches the primitive keyword "int")
```

Key differences:
- **`isOfType()`** requires exact type equality (same class, same type parameters)
- **`isAssignableTo()`** considers type compatibility including primitive widening, boxing/unboxing, and subtype relationships
- **`isOfClassType()`** matches against a string representation (FQN for classes, keyword for primitives)

### Type Casting Helpers

Each of these methods return `null` if it would not be valid to interpret the argument as of that type.
```java
JavaType.Class clazz = TypeUtils.asClass(type);
JavaType.Parameterized parameterized = TypeUtils.asParameterized(type);
JavaType.GenericTypeVariable generic = TypeUtils.asGeneric(type);
JavaType.Array array = TypeUtils.asArray(type);
JavaType.Primitive primitive = TypeUtils.asPrimitive(type);
```

### Type Validation

```java
// Check if a type is fully resolved (no Unknown or null parts)
boolean wellFormed = TypeUtils.isWellFormedType(type);
```

### FQN Comparison

```java
// Compare fully qualified names (handles $ vs . for inner classes)
boolean equal = TypeUtils.fullyQualifiedNamesAreEqual(
    "com.example.Outer.Inner",
    "com.example.Outer$Inner"
); // returns true
```

## Practical Patterns

### Checking Method Signatures

When you need to identify specific method invocations, use `MethodMatcher` for a declarative approach or manually inspect the method's type information.

**Using MethodMatcher (Recommended):**

```java
MethodMatcher matcher = new MethodMatcher("java.util.List get(int)");

@Override
public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
    if (matcher.matches(method)) {
        // This is a call to List.get(int)
    }
    return method;
}
```

**Manual Type Inspection:**

```java
@Override
public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
    JavaType.Method methodType = method.getMethodType();
    if (methodType != null &&
        "get".equals(methodType.getName()) &&
        methodType.getDeclaringType().isAssignableTo("java.util.List") &&
        methodType.getParameterTypes().size() == 1 &&
        TypeUtils.isOfTypePrimitive(JavaType.Primitive.Int, methodType.getParameterTypes().get(0))) {
        // This is a call to List.get(int)
    }
    return method;
}
```

The `MethodMatcher` approach is generally preferred because it:
- Handles method signature matching with a concise pattern string
- Automatically considers inheritance (matches on supertypes/interfaces)
- Supports wildcards and overloaded method matching
- Is more readable

### Finding Method Overrides

Given a method type, searches the declaring type's parent and interfaces for a method with the same name and signature.
This method will return an empty optional if the method, the method's declaring type, or the method's generic signature is `null`.
This is useful when you need to determine whether a given method overrides a superclass method or not, or need to inspect something about the superclass' method signature.

```java
JavaType.Method overridden = TypeUtils.findOverriddenMethod(method)
    .orElse(null);
```

## Common Problems

### Import Manipulation Failing

New recipe authors often wonder why an import isn't being added or removed when they call `JavaVisitor.maybeAddImport()` or `maybeRemoveImport()`. These methods take type attribution into account:

- **`maybeAddImport()`** won't add an import if nothing within the LST is type attributed with the type of the requested import
- **`maybeRemoveImport()`** won't remove an import if anything remains with the old type

These methods have parameters which allow you to force the removal/addition of an import regardless of type attribution, but using the override is rarely necessary in a well-formed recipe.

### Tests Failing with "Type is Missing or Malformed"

This error typically occurs in one of two scenarios:

**1. The parser cannot fully type-attribute the "before" code**

The parser provided to the test cannot successfully parse the "before" text into a fully type-attributed LST.
This happens when types referenced in the code aren't available to the parser.

**2. The recipe inserts LST elements missing type attribution**

When a recipe creates new LST elements (e.g., via `JavaTemplate`) without proper type information, validation will fail.

**Solution: Provide Type Information via Classpath**

In both cases, the resolution is to provide the parser a classpath with definitions for all types that appear within the code being parsed.

**Recommended Approach: TypeTables with `classpathFromResources()`**

```java
@Test
void myRecipeTest() {
    rewriteRun(
        spec -> spec
            .recipe(new RenameLogToLogger())
            .parser(JavaParser.fromJavaVersion()
                .classpathFromResources(ctx, "slf4j-api-2.1")),
        java(
            // Without providing slf4j-api on the parser classpath this "before" text would trigger the "type is missing or malformed" error
            """
            import org.slf4j.Logger;
            import org.slf4j.LoggerFactory;
            
            class MyClass {
                private static final Logger log = LoggerFactory.getLogger(MyClass.class);
            
                void doSomething() {
                    log.info("Hello, world!");
                }
            }
            """,
            // Without providing slf4j-api on the classpath of JavaParser/JavaTemplate inside the recipe implementation 
            // this "after" text can trigger the "type is missing or malformed" error
            """
            import org.slf4j.Logger;
            import org.slf4j.LoggerFactory;
            
            class MyClass {
                private static final Logger logger = LoggerFactory.getLogger(MyClass.class);
            
                void doSomething() {
                    log.info("Hello, world!");
                }
            }
            """
        )
    );
}
```

Without the `classpathFromResources()` call, the parser wouldn't be able to resolve `Logger`, `LoggerFactory`, or the method `getLogger()`, resulting in type attribution failures.

TypeTables are lightweight serialized type information files that provide just what's needed for type attribution without requiring full JAR files.

**Alternative: Using `classpath()` with Runtime Dependencies**

Types can also be provided via the `classpath()` method, which looks up dependencies from the runtime classpath of the recipe module:

```java
JavaParser.fromJavaVersion().classpath("slf4j-api");
```

This approach has downsides that make `classpathFromResources()` preferred:

- **Version conflicts**: Only one version of a JAR can be loaded from the runtime classpath. A recipe module that migrates between multiple versions of a dependency can only have one version on its runtime classpath.
- **Security scanner false positives**: Taking a runtime dependency on a JAR can cause security scanners to emit false-positive warnings. A recipe module whose purpose is to *fix* a vulnerability may be flagged as *having* that vulnerability.

**Opting Out of Type Validation**

It is possible to opt out of the well-formed-types safeguard in `RewriteTest`, though this should be done sparingly:

```java
@Test
void myRecipeTest() {
    rewriteRun(
            spec -> spec
                    .recipe(new MyRecipe())
                    // Disable all type validation checks
                    .typeValidationOptions(TypeValidation.none()),
            java("code with incomplete type information")
    );
}
```

For more granular control, use the builder to disable specific checks:

```java
@Test
void myRecipeTest() {
    rewriteRun(
            spec -> spec
                    .recipe(new MyRecipe())
                    // If type validation must be disabled, prefer granular opt-outs which preserve as much safety as feasible
                    .typeValidationOptions(TypeValidation.builder()
                            .identifiers(false)
                            .methodInvocations(false)
                            .build()),
            java("code with partial type information")
    );
}
```

You can also apply different validation to the "after" state:

```java
@Test
void myRecipeTest() {
    rewriteRun(
            spec -> spec
                    .recipe(new MyRecipe())
                    // Allow the "before" state to have incomplete types
                    .typeValidationOptions(TypeValidation.none())
                    // But require the "after" state to be fully type-attributed
                    .afterTypeValidationOptions(TypeValidation.all()),
            java("before with incomplete types", "after with complete types")
    );
}
```

A recipe which manipulates an LST to include missing or invalid type information can produce valid diffs, but will compose poorly with other recipes that want to read and act upon the now-invalid type information.
If a recipe which produces invalid type information is used in a large composite recipe it can be very difficult to debug why expected changes were not made.
