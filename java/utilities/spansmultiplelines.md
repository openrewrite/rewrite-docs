---
description: How to use the SpansMultipleLines visitor
---

# SpansMultipleLines

SpansMultipleLines is a non-refactoring utility visitor which can be used to determine whether a given Java AST element spans multiple lines.
This is useful for making determinations related to formatting.
There is no declarative form for this visitor.

### Java Example

```java
JavaParser jp = JavaParser.fromJavaVersion().build();
J.CompilationUnit a = jp.parse(
        "public class A {\n" +
        "    int m, n;\n" +
        "    {\n" +
        "        { int n = 1; }\n" +
        "        { int n = 2;\n" +
        "        }\n" +
        "    }\n" +
        "}").get(0);

J.Block<J> block = (J.Block<J>) a.getClasses().get(0).getBody().getStatements().get(1);
// This is the single-line block enclosing "int n = 1;"
J nEqualsOne = block.getStatements().get(0);
new SpansMultipleLines(nEqualsOne, null).visit(nEqualsOne); // returns "false"

// This is the multiline block enclosing "int n = 2"
J nEqualsTwo = block.getStatements().get(1);
new SpansMultipleLines(nEqualsTwo, null).visit(nEqualsTwo); // returns "true"
```
