# Migrate to Spring Batch 4.3 from Spring Batch 5.0

**org.openrewrite.java.spring.boot3.SpringBatch4To5Migration**
_Migrate applications built on Spring Batch 4.3 to the latest Spring Batch 2.3 release._

### Tags

* spring
* batch

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.33.0-SNAPSHOT/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.33.0-SNAPSHOT


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.33.0-SNAPSHOT in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.35.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.SpringBatch4To5Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.33.0-SNAPSHOT")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.39.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.SpringBatch4To5Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.33.0-SNAPSHOT</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:LATEST \
  -DactiveRecipes=org.openrewrite.java.spring.boot3.SpringBatch4To5Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.SpringBatch4To5Migration`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.batch`
  * artifactId: `*`
  * newVersion: `5.0.x`
  * overrideManagedVersion: `false`
  * retainVersions: `[]`
* [Transform classes that extend `JobExecutionListenerSupport` to implement the `JobExecutionListener` interface instead](../../../java/spring/batch/implementjobexecutionlistenerdirectly.md)
* [Transform classes that extend `StepExecutionListenerSupport` to implement the `StepExecutionListener` interface instead](../../../java/spring/batch/implementstepexecutionlistenerdirectly.md)
* [Transform classes that extend `ChunkListenerSupport` to implement the `ChunkListener` interface instead](../../../java/spring/batch/implementchunklistenerdirectly.md)
* [Transform classes that extend `SkipListenerSupport` to implement the `SkipListener` interface instead](../../../java/spring/batch/implementskiplistenersupportdirectly.md)
* [Transform classes that extend `ChunkListenerSupport` to implement the `ChunkListener` interface instead](../../../java/spring/batch/implementchunklistenerdirectly.md)
* [Migrate `JobBuilderFactory` to `JobBuilder`](../../../java/spring/batch/migratejobbuilderfactory.md)
* [Migrate `ItemWriter`](../../../java/spring/batch/migrateitemwriterwrite.md)
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.metrics.BatchMetrics`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.observability.BatchMetrics`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.step.item.Chunk`
  * newFullyQualifiedTypeName: `org.springframework.batch.item.Chunk`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.configuration.annotation.ScopeConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.configuration.support.ScopeConfiguration`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.SpringBatch4To5Migration
displayName: Migrate to Spring Batch 4.3 from Spring Batch 5.0
description: Migrate applications built on Spring Batch 4.3 to the latest Spring Batch 2.3 release.
tags:
  - spring
  - batch
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.batch
      artifactId: *
      newVersion: 5.0.x
      overrideManagedVersion: false
      retainVersions: []
  - org.openrewrite.java.spring.batch.ImplementJobExecutionListenerDirectly
  - org.openrewrite.java.spring.batch.ImplementStepExecutionListenerDirectly
  - org.openrewrite.java.spring.batch.ImplementChunkListenerDirectly
  - org.openrewrite.java.spring.batch.ImplementSkipListenerSupportDirectly
  - org.openrewrite.java.spring.batch.ImplementChunkListenerDirectly
  - org.openrewrite.java.spring.batch.MigrateJobBuilderFactory
  - org.openrewrite.java.spring.batch.MigrateItemWriterWrite
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.metrics.BatchMetrics
      newFullyQualifiedTypeName: org.springframework.batch.core.observability.BatchMetrics
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.step.item.Chunk
      newFullyQualifiedTypeName: org.springframework.batch.item.Chunk
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.configuration.annotation.ScopeConfiguration
      newFullyQualifiedTypeName: org.springframework.batch.core.configuration.support.ScopeConfiguration

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot3.SpringBatch4To5Migration)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
