---
keywords: [OpenRewrite, Java, Java 21, Java Migration]
description: How to automatically migrate from Java 17 to 21.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Java 21

In this tutorial, we'll use OpenRewrite to perform an automated migration from Java 17 to Java 21. While this recipe _will_ upgrade your Java 8 or Java 11 projects to Java 21, this guide won't cover the changes that occur from those versions to Java 21. For information on migrating to Java 17 from those versions, check out our [migrate to Java 17 guide](./migrate-to-java-17.md).

## Example Configuration

The Java 21 migration recipe can be applied by including OpenRewrite's plugin to your project and including a dependency on [rewrite-migrate-java](https://github.com/openrewrite/rewrite-migrate-java):

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

```groovy title="build.gradle"
  plugins {
      id("java")
      id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
  }
  
  rewrite {
      activeRecipe("org.openrewrite.java.migrate.UpgradeToJava21")
      setExportDatatables(true)
  }
  
  repositories {
      mavenCentral() // rewrite-spring is published to Maven Central
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
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.UpgradeToJava21</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

</TabItem>

</Tabs>

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## Before and After

For the complete list of changes made by this recipe, please see the reference pages for [Java 21](../../recipes/java/migrate/upgradetojava21.md).

Please note that this recipe will also [migrate from Java 8 to Java 11](../../recipes/java/migrate/java8tojava11.md) and [migrate from Java 11 to Java 17](../../recipes/java/migrate/upgradetojava17.md) if you aren't already on Java 17. For details about migrating from Java 8 to 17, check out our [migrate to Java 17 popular recipe guide](./migrate-to-java-17.md).

If you have a specific use case that is not yet covered by this project, please reach out to our team!

### Example Class

#### Before

```java
package org.openrewrite.example;

import java.util.HashMap;;

public class Example {
    JsonNode entity = entityList.get(0);
    someObject.remove(0);
    someOtherObject.add(0, token);

    foo.get(foo.size() - 1);
    bar.remove(bar.size() - 1);
    bash.add(bash.size() - 1, token);

    url = new URL(urlParam);
    img = ImageIO.read(new URL(logo));
    
    locale = new Locale(publishDateLocale);
}
```

#### After

```java
package org.openrewrite.example;

// Illegal semi-colons removed
import java.util.HashMap;

public class Example {
    // Better ways to access or change the first element of a collection
    JsonNode entity = entityList.getFirst();
    someObject.removeFirst();
    someOtherObject.addFirst(token);

    // Better ways to access or change the last element of a collection
    foo.getLast();
    bar.removeLast();
    bash.addLast(token);

    // Favor static methods over constructors
    url = URI.create(urlParam).toURL();
    img = ImageIO.read(URI.create(logo).toURL());

    // Prefer Locale.of(..) over new Locale(..)
    locale = Locale.of(publishDateLocale);
}
```

:::info
The above example class demonstrates a few of the most common changes when migrating from Java 17 to 21. That being said, there are many additional tasks covered by this recipe that are not represented in this example. Check out the [migrate to Java 21 documentation](../../recipes/java/migrate/upgradetojava21.md) for a full list of what the recipe does.
:::

## Running this recipe with the Moderne CLI

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command:

```shell title="shell"
mod run . --recipe org.openrewrite.java.migrate.UpgradeToJava21
```

If the recipe is not available locally, then you can install it using:

```shell title="shell"
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava21" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.