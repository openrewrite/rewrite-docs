# Migrate Hibernate dependencies to 6.1.x

**org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61**

_This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.1.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifacts names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/hibernate-6.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-agroal`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-agroal`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-c3p0`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-c3p0`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-community-dialects`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-community-dialects`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-core`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-core`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-envers`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-envers`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-graalvm`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-graalvm`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-hikaricp`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-hikaricp`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jcache`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jcache`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jpamodelgen`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jpamodelgen`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-micrometer`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-micrometer`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-proxool`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-proxool`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-spatial`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-spatial`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `org.hibernate`
  * artifactId: `hibernate-entitymanager`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61
displayName: Migrate Hibernate dependencies to 6.1.x
description: This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.1.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifacts names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies.

recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-agroal
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-agroal
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-c3p0
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-c3p0
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-community-dialects
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-community-dialects
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-core
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-core
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-envers
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-envers
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-graalvm
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-graalvm
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-hikaricp
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-hikaricp
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jcache
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jcache
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jpamodelgen
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jpamodelgen
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-micrometer
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-micrometer
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-proxool
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-proxool
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-spatial
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-spatial
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
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
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.hibernate
      artifactId: hibernate-entitymanager

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
