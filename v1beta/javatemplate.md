# JavaTemplate

Manually constructing complex AST elements can prove tedious and foreign to developers used to authoring code as text. Rewrite addresses this problem by providing a utility class, JavaTemplate, that allows a snippet of code to be parsed into a properly constructed AST representation. This functionality is paired with a natural, idiomatic API to allow a developer to express exactly where, in the existing AST, the snippet should be inserted. 

## Creating an Instance of a JavaTemplate

The JavaTemplate is always used within the context of a JavaVisitor and the visitor provides a factory method, `template()`,  that can be used to create instances of the template:

```java
public class ChangeMethodInvocation extends JavaIsoVisitor<ExecutionContext> {
    private final JavaTemplate template =
        template("withString(#{}).length()")                     // Code Snippet
            .javaParser(JavaParser.fromJavaVersion()             // Parser &
                .classpath("example-utils")                      // Classpath
                .build()
             )
            .staticImports("org.example.StringUtils.withString") // Additional imports
            .build();
}
```

### Code Snippets and Parameters

A template is always constructed with a snippet of code as a string and the snippet must conform to Java's language grammar \(in the context of where it will be inserted\). A snippet may also include parameter markers to indicate that parameters will be inserted into the snippet of code each time the template is used. In the above example, the following snippet represents a chained method invocation with one parameter.

{% hint style="info" %}
 The default parameter marker is \#{}
{% endhint %}

### Java Parser

The JavaTemplate will insert the snippet of code into an existing AST structure and use a parser to convert the snippet of code into an AST representation. The generated AST elements will only have type attribution if the parser is able to resolve types via a properly constructed class path. A template always has a reference to a parser and, if not specified, the default parser will only have a class path that includes the Java runtime. In the above example, the parser has been configured to include the library "example-utils" from the current run-time class path.

### Additional Imports

If a snippet of code is introducing a potentially new type into an existing AST structure, it must include that type as "additional import". The template adds the import when parsing the generated source and failure to include additional types may result in AST elements that do not have type attribution. In the above example, the snippet of code is introducing method invocation on a static method "withString" and to ensure the generated AST element contains type information, the template must also introduce an additional static import for this method.

## Using The JavaTemplate

Once an instance of the template has been created, a developer is free to use that template within the visitor. To expand on the example used above, assume that a visitor is attempting to replace all method invocations:  
  
`countLetters(String)` replaced with  `withString(String).length()`

```java
public class ChangeMethodInvocation extends JavaIsoVisitor<ExecutionContext> {
    private final JavaTemplate template = template("withString(#{}).length()")
        .javaParser(JavaParser.fromJavaVersion().classpath("example-utils").build())
        .staticImports("org.example.StringUtils.withString")
        .build();
        
    public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext p) {
        J.MethodInvocation m = super.visitMethodInvocation(method, p)
        if (m.name.typeInformation.simpleName != "countLetters") {
            return m
        }
        return m.withTemplate(template, m.getCoordinates.replace(), m.arguments[0]) //Template Invocation 
    }       
}
```

**`m.withTemplate`**`(template, m.coordinates.replace(), m.getArguments(0))`  
  
Each Java tree element includes the method`withTemplate()`that returns a mutated copy of the element after the template has been applied. The "parent" element reflects any changes that been made by applying the template, even if those changes have been made within the children.

`m.withTemplate(template,` **`m.getCoordinates().replace()`**`, m.getArguments.get(0))`

Each Java tree element has a method`getCoordinates()`that acts as a discoverable set of locations at which a template may be inserted. In this specific example, the "replace" coordinate indicates that the contents of the generated template will be inserted in the place of the existing method invocation.

{% hint style="info" %}
Please see the JavaTemplate Reference Guide for details on JavaCoordinates
{% endhint %}

`m.withTemplate(template, m.getCoordinates().replace(),` **`m.getArguments.get(0)`**`)`

Any parameters required by the template are passed as variable arguments on the `withTemplate`method and the first parameter passed into the method will be substituted into the first parameter marker inside the code snippet. If an existing AST element is passed as a parameter, the framework will detect and correctly render the tree element via its print method.

