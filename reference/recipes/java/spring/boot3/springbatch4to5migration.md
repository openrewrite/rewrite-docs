# Migrate to Spring Batch 5.0 from 4.3

**org.openrewrite.java.spring.boot3.SpringBatch4To5Migration**
_Migrate applications built on Spring Batch 4.3 to the latest Spring Batch 5.0 release._

### Tags

* spring
* batch

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-batch-5.0.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.34.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.34.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:4.34.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.38.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.SpringBatch4To5Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.34.0")
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
        <version>4.42.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.SpringBatch4To5Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.34.0</version>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:LATEST \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.SpringBatch4To5Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.batch`
  * artifactId: `*`
  * newVersion: `5.0.x`
  * overrideManagedVersion: `false`
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
displayName: Migrate to Spring Batch 5.0 from 4.3
description: Migrate applications built on Spring Batch 4.3 to the latest Spring Batch 5.0 release.
tags:
  - spring
  - batch
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.batch
      artifactId: *
      newVersion: 5.0.x
      overrideManagedVersion: false
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
