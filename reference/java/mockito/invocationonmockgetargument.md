# InvocationOnMockGetArgument

Between Mockito 1.x and Mockito 2.x, the method `org.mockito.invocation.InvocationOnMock.getArgumentAt` changed to the name `getArgument`. This visitor changes method references to reflect this refactoring.

## YAML Definition

The `org.openrewrite.java.Mockito` recipe includes this visitor. Here is how to include this visitor in a custom recipe you define called `com.yourorg.MyCustomRecipe`:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MyCustomRecipe 
visitors:
  - org.openrewrite.java.mockito.InvocationOnMockGetArgument
```

