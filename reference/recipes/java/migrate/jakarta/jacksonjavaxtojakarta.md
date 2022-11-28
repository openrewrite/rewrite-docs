# Migrate Jackson from javax to jakarta namespace

**org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta**

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.14.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.14.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.14.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.14.1")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.14.1</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.14.1 \
  -DactiveRecipes=org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.module`
  * oldArtifactId: `jackson-module-jaxb-annotations`
  * newGroupId: `com.fasterxml.jackson.module`
  * newArtifactId: `jackson-module-jakarta-xmlbind-annotations`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.module`
  * oldArtifactId: `jackson-module-jaxb-annotations`
  * newGroupId: `com.fasterxml.jackson.module`
  * newArtifactId: `jackson-module-jakarta-xmlbind-annotations`
  * newVersion: `2.13.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-cbor-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-cbor-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-cbor-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-cbor-provider`
  * newVersion: `2.13.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-json-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-json-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-json-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-json-provider`
  * newVersion: `2.13.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-smile-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-smile-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-smile-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-smile-provider`
  * newVersion: `2.13.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-xml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-xml-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-xml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-xml-provider`
  * newVersion: `2.13.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-yaml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-yaml-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-yaml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-yaml-provider`
  * newVersion: `2.13.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.datatype`
  * oldArtifactId: `jackson-datatype-jsr353`
  * newGroupId: `com.fasterxml.jackson.datatype`
  * newArtifactId: `jackson-datatype-jakarta-jsonp`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.datatype`
  * oldArtifactId: `jackson-datatype-jsr353`
  * newGroupId: `com.fasterxml.jackson.datatype`
  * newArtifactId: `jackson-datatype-jakarta-jsonp`
  * newVersion: `2.13.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.glassfish`
  * oldArtifactId: `javax.json`
  * newGroupId: `org.glassfish`
  * newArtifactId: `jakarta.json`
  * newVersion: `2.0.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.glassfish`
  * oldArtifactId: `javax.json`
  * newGroupId: `org.glassfish`
  * newArtifactId: `jakarta.json`
  * newVersion: `2.0.x`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `com.fasterxml.jackson.datatype.jsr353.JSR353Module`
  * newFullyQualifiedTypeName: `com.fasterxml.jackson.datatype.jsonp.JSONPModule`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta
displayName: Migrate Jackson from javax to jakarta namespace
description: null
recipeList:
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.module
      oldArtifactId: jackson-module-jaxb-annotations
      newGroupId: com.fasterxml.jackson.module
      newArtifactId: jackson-module-jakarta-xmlbind-annotations
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.module
      oldArtifactId: jackson-module-jaxb-annotations
      newGroupId: com.fasterxml.jackson.module
      newArtifactId: jackson-module-jakarta-xmlbind-annotations
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-cbor-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-cbor-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-cbor-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-cbor-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-json-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-json-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-json-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-json-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-smile-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-smile-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-smile-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-smile-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-xml-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-xml-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-xml-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-xml-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-yaml-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-yaml-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-yaml-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-yaml-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.datatype
      oldArtifactId: jackson-datatype-jsr353
      newGroupId: com.fasterxml.jackson.datatype
      newArtifactId: jackson-datatype-jakarta-jsonp
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.datatype
      oldArtifactId: jackson-datatype-jsr353
      newGroupId: com.fasterxml.jackson.datatype
      newArtifactId: jackson-datatype-jakarta-jsonp
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.glassfish
      oldArtifactId: javax.json
      newGroupId: org.glassfish
      newArtifactId: jakarta.json
      newVersion: 2.0.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.glassfish
      oldArtifactId: javax.json
      newGroupId: org.glassfish
      newArtifactId: jakarta.json
      newVersion: 2.0.x
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.fasterxml.jackson.datatype.jsr353.JSR353Module
      newFullyQualifiedTypeName: com.fasterxml.jackson.datatype.jsonp.JSONPModule

```
{% endtab %}
{% endtabs %}
