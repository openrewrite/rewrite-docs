# MockAsOuterClass

Between Mockito 1.x and Mockito 2.x, the type `org.mockito.MockitoAnnotations.Mock` moved to an outer class `org.mockito.Mock`. This visitor changes type references to reflect this refactoring.

## YAML Definition

The `org.openrewrite.java.Mockito` recipe includes this visitor. Here is how to include this visitor in a custom recipe you define called `com.yourorg.MyCustomRecipe`:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MyCustomRecipe 
visitors:
  - org.openrewrite.java.mockito.MockAsOuterClass
```

