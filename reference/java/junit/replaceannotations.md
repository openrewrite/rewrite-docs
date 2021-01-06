---
description: Replaces JUnit4 annotations with their JUnit5 successors
---

# ReplaceAnnotations

The`ReplaceAnnotations` visitor finds the following method-scoped JUnit4 annotations and replaces them with their Junit5 successors:

* [@org.junit.Before](https://junit.org/junit4/javadoc/4.12/org/junit/Before.html) annotation is replaced by [@org.junit.jupiter.api.BeforeEach](https://junit.org/junit5/docs/5.0.2/api/org/junit/jupiter/api/BeforeEach.html)
* [@org.junit.After](https://junit.org/junit4/javadoc/4.12/org/junit/After.html) annotation is replaced by [@org.junit.jupiter.api.AfterEach](https://junit.org/junit5/docs/5.0.2/api/org/junit/jupiter/api/AfterEach.html)
* [@org.junit.BeforeClass](https://junit.org/junit4/javadoc/4.12/org/junit/BeforeClass.html) annotation is replaced by [@org.junit.jupiter.api.BeforeAll](https://junit.org/junit5/docs/5.0.2/api/org/junit/jupiter/api/BeforeAll.html)
* [@org.junit.AfterClass](https://junit.org/junit4/javadoc/4.12/org/junit/AfterClass.html) annotation is replaced by [@org.junit.jupiter.api.AfterAll](https://junit.org/junit5/docs/5.0.2/api/org/junit/jupiter/api/AfterAll.html)
* [@org.junit.Ignore](https://junit.org/junit4/javadoc/4.12/org/junit/Ignore.html) annotation is replaced by [@org.junit.jupiter.api.Disabled](https://junit.org/junit5/docs/5.0.2/api/org/junit/jupiter/api/Disabled.html)

#### YAML Definition

```yaml
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.migration
include:
  - 'org.openrewrite.java.testing.junit5.ReplaceAnnotations'
```

