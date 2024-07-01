# io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration

**io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration**


## Recipe source

[GitHub](https://github.com/search?type=code&q=io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.5.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
    }
    rewrite {
        activeRecipe("io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration")
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
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
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
        <version>5.34.1</version>
        <configuration>
          
          <activeRecipes>
            <recipe>io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration 
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
