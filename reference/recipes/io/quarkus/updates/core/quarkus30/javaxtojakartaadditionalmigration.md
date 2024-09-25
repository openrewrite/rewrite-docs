# io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration

**io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration**


## Recipe source

[GitHub](https://github.com/search?type=code&q=io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.7.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.7.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.glassfish`
  * oldArtifactId: `jakarta.el`
  * newGroupId: `org.glassfish.expressly`
  * newArtifactId: `expressly`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-core`
  * newGroupId: `org.hibernate.orm`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-envers`
  * newGroupId: `org.hibernate.orm`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jpamodelgen`
  * newGroupId: `org.hibernate.orm`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-spatial`
  * newGroupId: `org.hibernate.orm`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing`
  * newGroupId: `org.hibernate.orm`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-micrometer`
  * newGroupId: `org.hibernate.orm`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jcache`
  * newGroupId: `org.hibernate.orm`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-infinispan`
  * newGroupId: `org.hibernate.orm`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-ehcache`
  * newGroupId: `org.hibernate.orm`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate.search`
  * oldArtifactId: `hibernate-search-mapper-orm-coordination-outbox-polling`
  * newGroupId: `org.hibernate.search`
  * newArtifactId: `hibernate-search-mapper-orm-coordination-outbox-polling-jakarta`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate.search`
  * oldArtifactId: `hibernate-search-mapper-orm`
  * newGroupId: `org.hibernate.search`
  * newArtifactId: `hibernate-search-mapper-orm-jakarta`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `quarkus-local-cache`
  * newGroupId: `org.hibernate`
  * newArtifactId: `quarkus-local-cache-jakarta`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.jboss.spec.javax.ws.rs`
  * oldArtifactId: `jboss-jaxrs-api_2.1_spec`
  * newGroupId: `jakarta.ws.rs`
  * newArtifactId: `jakarta.ws.rs-api`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.jboss.spec.javax.xml.bind`
  * oldArtifactId: `jboss-jaxb-api_2.3_spec`
  * newGroupId: `jakarta.xml.bind`
  * newArtifactId: `jakarta.xml.bind-api`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.jboss.spec.javax.transaction`
  * oldArtifactId: `jboss-transaction-api_1.3_spec`
  * newGroupId: `jakarta.transaction`
  * newArtifactId: `jakarta.transaction-api`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `com.sun.activation`
  * oldArtifactId: `jakarta.activation`
  * newGroupId: `org.eclipse.angus`
  * newArtifactId: `angus-activation`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `com.sun.activation`
  * oldArtifactId: `javax.activation`
  * newGroupId: `org.eclipse.angus`
  * newArtifactId: `angus-activation`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.jboss.spec.javax.ejb`
  * oldArtifactId: `jboss-ejb-api_3.1_spec`
  * newGroupId: `jakarta.ejb`
  * newArtifactId: `jakarta.ejb-api`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.keycloak`
  * oldArtifactId: `keycloak-admin-client`
  * newGroupId: `org.keycloak`
  * newArtifactId: `keycloak-admin-client-jakarta`
* [Change Gradle or Maven dependency](../../../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.keycloak`
  * oldArtifactId: `keycloak-admin-client`
  * newGroupId: `org.keycloak`
  * newArtifactId: `keycloak-admin-client-jakarta`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration
displayName: io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration
description: null
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.glassfish
      oldArtifactId: jakarta.el
      newGroupId: org.glassfish.expressly
      newArtifactId: expressly
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-core
      newGroupId: org.hibernate.orm
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-envers
      newGroupId: org.hibernate.orm
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jpamodelgen
      newGroupId: org.hibernate.orm
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-spatial
      newGroupId: org.hibernate.orm
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing
      newGroupId: org.hibernate.orm
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-micrometer
      newGroupId: org.hibernate.orm
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jcache
      newGroupId: org.hibernate.orm
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-infinispan
      newGroupId: org.hibernate.orm
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-ehcache
      newGroupId: org.hibernate.orm
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate.search
      oldArtifactId: hibernate-search-mapper-orm-coordination-outbox-polling
      newGroupId: org.hibernate.search
      newArtifactId: hibernate-search-mapper-orm-coordination-outbox-polling-jakarta
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate.search
      oldArtifactId: hibernate-search-mapper-orm
      newGroupId: org.hibernate.search
      newArtifactId: hibernate-search-mapper-orm-jakarta
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: quarkus-local-cache
      newGroupId: org.hibernate
      newArtifactId: quarkus-local-cache-jakarta
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.jboss.spec.javax.ws.rs
      oldArtifactId: jboss-jaxrs-api_2.1_spec
      newGroupId: jakarta.ws.rs
      newArtifactId: jakarta.ws.rs-api
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.jboss.spec.javax.xml.bind
      oldArtifactId: jboss-jaxb-api_2.3_spec
      newGroupId: jakarta.xml.bind
      newArtifactId: jakarta.xml.bind-api
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.jboss.spec.javax.transaction
      oldArtifactId: jboss-transaction-api_1.3_spec
      newGroupId: jakarta.transaction
      newArtifactId: jakarta.transaction-api
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.sun.activation
      oldArtifactId: jakarta.activation
      newGroupId: org.eclipse.angus
      newArtifactId: angus-activation
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.sun.activation
      oldArtifactId: javax.activation
      newGroupId: org.eclipse.angus
      newArtifactId: angus-activation
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.jboss.spec.javax.ejb
      oldArtifactId: jboss-ejb-api_3.1_spec
      newGroupId: jakarta.ejb
      newArtifactId: jakarta.ejb-api
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.keycloak
      oldArtifactId: keycloak-admin-client
      newGroupId: org.keycloak
      newArtifactId: keycloak-admin-client-jakarta
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.keycloak
      oldArtifactId: keycloak-admin-client
      newGroupId: org.keycloak
      newArtifactId: keycloak-admin-client-jakarta

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.7.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.7.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.23.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.7.1")
    }
    rewrite {
        activeRecipe("io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration")
        exportDatatables = true
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.7.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JavaxToJakartaAdditionalMigration
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

