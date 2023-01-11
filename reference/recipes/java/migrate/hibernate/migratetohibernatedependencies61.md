# Migrate Hibernate dependencies to 6.1.x from Hibernate 5.x

**org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61**
_This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.1.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifacts names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies.
_

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.16.0-SNAPSHOT/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.16.0-SNAPSHOT


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.16.0-SNAPSHOT in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.16.0-SNAPSHOT")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.16.0-SNAPSHOT</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.16.0-SNAPSHOT \
  -DactiveRecipes=org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-agroal`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-agroal`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-agroal-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-agroal`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-agroal`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-agroal`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-agroal-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-agroal`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-c3p0`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-c3p0`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-c3p0-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-c3p0`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-c3p0`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-c3p0`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-c3p0-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-c3p0`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-community-dialects`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-community-dialects`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-community-dialects-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-community-dialects`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-community-dialects`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-community-dialects`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-community-dialects-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-community-dialects`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-core`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-core`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-core-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-core`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-core`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-core`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-core-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-core`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-envers`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-envers`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-envers-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-envers`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-envers`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-envers`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-envers-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-envers`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-graalvm`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-graalvm`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-graalvm-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-graalvm`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-graalvm`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-graalvm`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-graalvm-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-graalvm`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-hikaricp`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-hikaricp`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-hikaricp-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-hikaricp`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-hikaricp`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-hikaricp`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-hikaricp-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-hikaricp`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jcache`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jcache`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jcache-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jcache`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jcache`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jcache`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jcache-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jcache`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jpamodelgen`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jpamodelgen`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jpamodelgen-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jpamodelgen`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jpamodelgen`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jpamodelgen`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jpamodelgen-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jpamodelgen`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-micrometer`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-micrometer`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-micrometer-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-micrometer`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-micrometer`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-micrometer`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-micrometer-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-micrometer`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-proxool`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-proxool`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-proxool-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-proxool`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-proxool`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-proxool`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-proxool-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-proxool`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-spatial`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-spatial`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-spatial-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-spatial`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-spatial`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-spatial`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-spatial-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-spatial`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.hibernate`
  * artifactId: `hibernate-entitymanager`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61
displayName: Migrate Hibernate dependencies to 6.1.x from Hibernate 5.x
description: This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.1.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifacts names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies.

recipeList:
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-agroal
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-agroal
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-agroal-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-agroal
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-agroal
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-agroal
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-agroal-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-agroal
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-c3p0
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-c3p0
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-c3p0-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-c3p0
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-c3p0
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-c3p0
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-c3p0-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-c3p0
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-community-dialects
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-community-dialects
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-community-dialects-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-community-dialects
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-community-dialects
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-community-dialects
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-community-dialects-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-community-dialects
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-core
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-core
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-core-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-core
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-core
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-core
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-core-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-core
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-envers
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-envers
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-envers-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-envers
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-envers
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-envers
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-envers-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-envers
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-graalvm
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-graalvm
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-graalvm-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-graalvm
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-graalvm
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-graalvm
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-graalvm-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-graalvm
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-hikaricp
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-hikaricp
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-hikaricp-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-hikaricp
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-hikaricp
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-hikaricp
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-hikaricp-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-hikaricp
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jcache
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jcache
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jcache-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jcache
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jcache
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jcache
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jcache-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jcache
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jpamodelgen
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jpamodelgen
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jpamodelgen-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jpamodelgen
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jpamodelgen
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jpamodelgen
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jpamodelgen-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jpamodelgen
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-micrometer
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-micrometer
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-micrometer-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-micrometer
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-micrometer
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-micrometer
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-micrometer-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-micrometer
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-proxool
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-proxool
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-proxool-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-proxool
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-proxool
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-proxool
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-proxool-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-proxool
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-spatial
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-spatial
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-spatial-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-spatial
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-spatial
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-spatial
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-spatial-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-spatial
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.hibernate
      artifactId: hibernate-entitymanager

```
{% endtab %}
{% endtabs %}
