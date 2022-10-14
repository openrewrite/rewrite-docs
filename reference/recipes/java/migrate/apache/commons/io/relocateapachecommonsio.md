# Relocate org.apache.commons:commons-io to commons-io:commons-io

\*\* org.openrewrite.java.migrate.apache.commons.io.RelocateApacheCommonsIo\*\* _The deployment of `org.apache.commons:commons-io` _ [_was a publishing mistake around 2012_](https://issues.sonatype.org/browse/MVNCENTRAL-244) _which was corrected by changing the deployment GAV to be located under `commons-io:commons-io`._

### Tags

* security
* apache

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.12.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.12.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.12.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.apache.commons.io.RelocateApacheCommonsIo")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.12.0")
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
        <version>4.35.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.apache.commons.io.RelocateApacheCommonsIo</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.12.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.35.1:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.12.0 \
  -DactiveRecipes=org.openrewrite.java.migrate.apache.commons.io.RelocateApacheCommonsIo
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.apache.commons.io.RelocateApacheCommonsIo`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Maven dependency groupId, artifactId and/or the version](../../../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.apache.commons`
  * oldArtifactId: `commons-io`
  * newGroupId: `commons-io`
  * newArtifactId: `commons-io`
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.apache.commons.io.RelocateApacheCommonsIo
displayName: Relocate `org.apache.commons:commons-io` to `commons-io:commons-io`
description: The deployment of `org.apache.commons:commons-io` [was a publishing mistake around 2012](https://issues.sonatype.org/browse/MVNCENTRAL-244) which was corrected by changing the deployment GAV to be located under `commons-io:commons-io`.
tags:
  - security
  - apache
recipeList:
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.commons
      oldArtifactId: commons-io
      newGroupId: commons-io
      newArtifactId: commons-io
```
{% endtab %}
{% endtabs %}
