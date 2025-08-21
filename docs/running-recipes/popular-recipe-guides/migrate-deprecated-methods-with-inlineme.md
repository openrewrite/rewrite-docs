---
sidebar_label: Migrate deprecated methods with @InlineMe
description: How to automatically migrate deprecated methods that use the @InlineMe annotation to their replacements.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate deprecated methods with `@InlineMe`

Google's Error Prone library introduced the [`@InlineMe`](https://errorprone.info/docs/inlineme) annotation to help with API migrations. When a method is deprecated and marked with `@InlineMe`, it provides precise instructions on how to replace calls to that method. OpenRewrite can now automatically apply these inline replacements across your codebase.

## What is the `@InlineMe` annotation?

The `@InlineMe` annotation is a powerful tool for API authors to communicate exactly how deprecated methods should be replaced. It includes:

* A `replacement` string showing the new code pattern
* Optional `imports` and `staticImports` fields for any new imports needed
* Support for parameter reordering and transformations

This is particularly useful when:

* Method signatures change (e.g., parameter order)
* Methods move to different classes
* Multiple methods are consolidated into one with different parameters

## Example Configuration

To run the `InlineMethodCalls` recipe that automatically applies these migrations:

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

```groovy title="build.gradle"
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.InlineMethodCalls")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:latest.release"))
    rewrite("org.openrewrite.recipe:rewrite-migrate-java")

    // Other project dependencies
}
```

</TabItem>
<TabItem value="maven" label="Maven">

```xml title="pom.xml"
<build>
  <plugins>
    <plugin>
      <groupId>org.openrewrite.maven</groupId>
      <artifactId>rewrite-maven-plugin</artifactId>
      <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
      <configuration>
        <activeRecipes>
          <recipe>org.openrewrite.java.migrate.InlineMethodCalls</recipe>
        </activeRecipes>
      </configuration>
      <dependencies>
        <dependency>
          <groupId>org.openrewrite.recipe</groupId>
          <artifactId>rewrite-migrate-java</artifactId>
          <version>{{VERSION_REWRITE_MIGRATE_JAVA}}</version>
        </dependency>
      </dependencies>
    </plugin>
  </plugins>
</build>
```

</TabItem>
</Tabs>

## How it works

When you run this recipe, OpenRewrite will:

1. **Scan for @InlineMe annotations** to find all deprecated methods that have migration instructions
2. **Locate all usages** of these deprecated methods throughout your codebase
3. **Apply the replacements** automatically, rewriting each call according to the pattern specified in the annotation
4. **Update imports** by adding any newly required imports and removing ones that are no longer needed

## Real-world example: Google's S2 Geometry Library

Here's an example from Google's S2 Geometry library showing how `@InlineMe` helps migrate deprecated APIs:

### Deprecated method with @InlineMe

```java
@Deprecated
@InlineMe(
    replacement = "S2EdgeUtil.getPointOnLine(a, b, ax)",
    imports = "com.google.common.geometry.S2EdgeUtil")
public static S2Point interpolateAtDistance(S1Angle ax, S2Point a, S2Point b) {
    return getPointOnLine(a, b, ax);
}

@Deprecated
@InlineMe(
    replacement = "S2EdgeUtil.interpolate(a, b, t)",
    imports = "com.google.common.geometry.S2EdgeUtil")
public static S2Point interpolate(double t, S2Point a, S2Point b) {
    return interpolate(a, b, t);
}
```

### Before and After migration

<Tabs>
<TabItem value="before" label="Before">

```java
import com.google.common.geometry.*;

public class S2ConvexHullQuery {
    public S2Loop createLoop(S2Point a, S2Point b) {
        // Note the parameter order: t comes first
        S2Loop loop = new S2Loop(ImmutableList.of(
            a, 
            b, 
            S2EdgeUtil.interpolate(0.5, a, b)
        ));
        loop.normalize();
        return loop;
    }
}
```

</TabItem>
<TabItem value="after" label="After">

```java
import com.google.common.geometry.*;

public class S2ConvexHullQuery {
    public S2Loop createLoop(S2Point a, S2Point b) {
        // Parameters have been reordered: a, b, then t
        S2Loop loop = new S2Loop(ImmutableList.of(
            a, 
            b, 
            S2EdgeUtil.interpolate(a, b, 0.5)
        ));
        loop.normalize();
        return loop;
    }
}
```

</TabItem>
</Tabs>

Notice how the recipe automatically:
- Reordered the parameters from `(t, a, b)` to `(a, b, t)`
- Preserved the exact value `0.5` in its new position
- Kept all other code unchanged

## More examples from the change

<Tabs>
<TabItem value="example1" label="Method rename">

```diff
- if (tmp.isEndpoint(p) && !visitor.test(shapeId, edgeId, tmp.a, tmp.b)) {
+ if (tmp.hasEndpoint(p) && !visitor.test(shapeId, edgeId, tmp.a, tmp.b)) {
```

The `isEndpoint` method was renamed to `hasEndpoint` - a simple rename that's perfectly handled by `@InlineMe`.

</TabItem>
<TabItem value="example2" label="Complex parameter reordering">

```diff
- S2Point midpoint = S2EdgeUtil.interpolateAtDistance(S1Angle.radians(0.5), start, end);
+ S2Point midpoint = S2EdgeUtil.getPointOnLine(start, end, S1Angle.radians(0.5));
```

Here the method name changed and parameters were reordered, with the angle moving from first to last position.

</TabItem>
</Tabs>

## Creating your own @InlineMe migrations

If you're a library author, you can use `@InlineMe` in your own APIs:

```java
@Deprecated
@InlineMe(
    replacement = "this.newMethod(param2, param1)",  // Swap parameter order
    imports = {})  // No new imports needed
public void oldMethod(String param1, int param2) {
    newMethod(param2, param1);
}

public void newMethod(int number, String text) {
    // New implementation
}
```

## Running the recipe

Execute the migration with:

- **Gradle**: `./gradlew rewriteRun`
- **Maven**: `mvn rewrite:run`

After running, review the changes with `git diff` to see all the automated replacements.

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.InlineMethodCalls" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
