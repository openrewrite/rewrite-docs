import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Refactoring with declarative YAML recipes

Not every refactoring operation requires a brand new imperative [Recipe](../../concepts-and-explanations/recipes.md) to be authored in code. With declarative YAML recipes, many powerful transformations can be achieved without writing any code. In this tutorial we'll use declarative YAML recipes to rename a package location and update downstream projects to reflect the updated package names.

Let's assume the existence of two projects, `A` and `B`, in different repositories:

* Project `A` will contain the package we will rename from `com.yourorg.foo` to `com.yourorg.bar`.
* Project `B` will depend on `A` and use classes from the `com.yourorg.foo` package.

## Renaming in Project A

First, apply an OpenRewrite build plugin per the [Quickstart: Maven and Gradle guide](../getting-started.md).

With a OpenRewrite build plugin applied, the next step is to create a `rewrite.yml` file at the project root that defines the recipe:

```yaml title="A/rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FooToBar
description: Convert Foo to Bar.
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.yourorg.foo
      newPackageName: com.yourorg.bar
```


Now that a recipe named `com.yourorg.FooToBar` has been created, set that recipe as active in your build plugin's configuration:

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

```groovy title="A/build.gradle"
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("com.yourorg.FooToBar")
}
```

</TabItem>

<TabItem value="maven" label="Maven">

```xml title="A/pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FooToBar</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

</TabItem>
</Tabs>

Run `mvn rewrite:run` or `gradlew rewriteRun` to apply the transformation to project `A`. Source files referencing the old package will be updated. Sources that were part of the `com.yourorg.foo` package will also be moved to directories corresponding to the new package name.

## Updating Downstream Projects

`A` has been updated, but this is a breaking change to any projects that depend on `A`, such as project `B`. To help those projects adapt to this package relocation painlessly we can redistribute this recipe to them inside of the next release of `A`.

Begin by creating a YAML file inside of `A/src/main/resources/META-INF/rewrite`. The name of this file does not matter so long as its extension is "yml". We'll call it `rewrite.yml` for simplicity. It has the exact same contents as the `rewrite.yml` at the project root:

```yaml title="A/src/main/resources/META-INF/rewrite/rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FooToBar
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.yourorg.foo
      newPackageName: com.yourorg.bar
```


Now when the next version of `A` is published its JAR will include this recipe. Assuming we've just published `A` version 2.0 with this recipe inside it, we can now use this recipe in project `B`.

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

```groovy title="B/build.gradle"
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

dependencies {
    implementation("com.yourorg:A:2.0")
}

rewrite {
    activeRecipe("com.yourorg.FooToBar")
}
```

</TabItem>

<TabItem value="maven" label="Maven">

```xml title="B/pom.xml"
<project>
  <dependencies>
    <dependency>
      <groupId>com.yourorg</groupId>
      <artifactId>A</artifactId>
      <version>2.0</version>
    </dependency>
  </dependencies>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FooToBar</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

</TabItem>
</Tabs>

Run `mvn rewrite:run` or `gradlew rewriteRun` to apply the transformation to project `B`. Note that we didn't have to create a `rewrite.yml` in project `B` because it found the recipe directly from its dependency on `A` version 2.0.

In only a few minutes, we've applied a refactoring operation to a project and its consumer. Development on both can continue, effectively minimizing the pain and disruption brought by the breaking change.

:::tip
Recipes will never be applied just because they exist on the classpath. A recipe must be explicitly activated in the build plugin's configuration to be applied. This helps to avoid being surprised by unexpected changes to your source code.
:::

## Next Steps

* [Declarative YAML Format](../../reference/yaml-format-reference.md)
* [Writing a Java Refactoring Recipe](../../authoring-recipes/writing-a-java-refactoring-recipe.md)
