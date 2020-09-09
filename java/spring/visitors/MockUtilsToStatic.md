# MockUtilsToStatic

In Mockito 1, the `MockUtil` class exposed instance methods.
In Mockito 2+, the `MockUtil` class has a private constructor and only exposes static methods.
The `MockUtilsToStatic` visitor replaces Mockito 1 style `MockUtil` usage with Mockito 2 style usage.

This visitor is part of upgrading from Mockito 1 to Mockito 3.

There is no required or optional configuration for this visitor.

### Java Definition

```java
String javaSourceCodeToBeRefactored = ...; // Assume this is filled with Java source code

JavaParser jp = JavaParser.fromJavaVersion()
    .classpath("mockito-all")
    .build();
    
Collection<Change> changes = new Refactor()
    .visit(new MockUtilsToStatic())
    .fix(jp.parse(javaSourceCodeToBeRefactored))

String refactoredJavaSource = changes.get(0).getFixed().print();
```

### YAML Definition

The `org.openrewrite.java.Mockito` recipe includes this visitor. 
Here is how to include this visitor in a custom recipe you define called `com.yourorg.MyCustomRecipe`:


```yaml
---
type: specs.org.openrewrite.org/v1beta/recipe
name: com.yourorg.MyCustomRecipe 
visitors:
  - org.openrewrite.mockito.MockUtilsToStatic
```

### Example

#### Before

```java
package mockito.example;

import org.mockito.internal.util.MockUtil;

public class MockitoMockUtils {
    MockUtil util = new MockUtil();
    public void isMockExample() {
        util.isMock("I am a real String");
    }
}
```

#### After
```java
package mockito.example;

import org.mockito.internal.util.MockUtil;

public class MockitoMockUtils {
    public void isMockExample() {
        MockUtil.isMock("I am a real String");
    }
}
```

