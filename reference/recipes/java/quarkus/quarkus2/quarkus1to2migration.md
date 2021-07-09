# Quarkus 2.x migration from Quarkus 1.x

 **org.openrewrite.java.quarkus.quarkus2.Quarkus1to2Migration** _Migrates Quarkus 1.x to 2.x._

## Source

[Github](https://github.com/openrewrite/rewrite-quarkus), [Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-quarkus/0.2.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-quarkus
* version: 0.2.1

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-quarkus:0.2.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.quarkus.quarkus2.Quarkus1to2Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:0.2.1")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.6.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.quarkus.quarkus2.Quarkus1to2Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>0.2.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.quarkus.quarkus2.Quarkus1to2Migration`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `smallrye.jwt.sign.key-location`
  * newPropertyKey: `smallrye.jwt.sign.key.location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `smallrye.jwt.encrypt.key-location`
  * newPropertyKey: `smallrye.jwt.encrypt.key.location`
* [Change properties file property value](../../../properties/changepropertyvalue.md)
  * propertyKey: `quarkus.quartz.force-start`
  * newValue: `forced`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.quartz.force-start`
  * newPropertyKey: `quarkus.quartz.start-mode`
* [Change properties file property value](../../../properties/changepropertyvalue.md)
  * propertyKey: `quarkus.quartz.store-type`
  * newValue: `jdbc-cmt`
  * oldValue: `db`
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `io.quarkus.qute.api.CheckedTemplate`
  * newFullyQualifiedTypeName: `io.quarkus.qute.CheckedTemplate`
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `io.quarkus.qute.api.ResourcePath`
  * newFullyQualifiedTypeName: `io.quarkus.qute.Location`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-universe-bom`
  * newVersion: `2.x`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion.md)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-maven-plugin`
  * newVersion: `2.x`
* [Use `@GrpcClient`](grpcserviceannotationtogrpcclient.md)
* [Remove `avro-maven-plugin`](removeavromavenplugin.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.quarkus.quarkus2.Quarkus1to2Migration
displayName: Quarkus 2.x migration from Quarkus 1.x
description: Migrates Quarkus 1.x to 2.x.
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: smallrye.jwt.sign.key-location
      newPropertyKey: smallrye.jwt.sign.key.location
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: smallrye.jwt.encrypt.key-location
      newPropertyKey: smallrye.jwt.encrypt.key.location
  - org.openrewrite.properties.ChangePropertyValue:
      propertyKey: quarkus.quartz.force-start
      newValue: forced
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.quartz.force-start
      newPropertyKey: quarkus.quartz.start-mode
  - org.openrewrite.properties.ChangePropertyValue:
      propertyKey: quarkus.quartz.store-type
      newValue: jdbc-cmt
      oldValue: db
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.qute.api.CheckedTemplate
      newFullyQualifiedTypeName: io.quarkus.qute.CheckedTemplate
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.qute.api.ResourcePath
      newFullyQualifiedTypeName: io.quarkus.qute.Location
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: io.quarkus
      artifactId: quarkus-universe-bom
      newVersion: 2.x
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: io.quarkus
      artifactId: quarkus-maven-plugin
      newVersion: 2.x
  - org.openrewrite.java.quarkus.quarkus2.GrpcServiceAnnotationToGrpcClient
  - org.openrewrite.java.quarkus.quarkus2.RemoveAvroMavenPlugin
```
{% endtab %}
{% endtabs %}

