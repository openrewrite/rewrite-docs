# Rename `JavaTypeDescriptor` and `SqlTypeDescriptor` to `JavaType` and `SqlType`

**org.openrewrite.hibernate.TypeDescriptorToType**

_Rename `JavaTypeDescriptor` and `SqlTypeDescriptor` to `JavaType` and `SqlType` respectively. See https://github.com/hibernate/hibernate-orm/blob/6.0/migration-guide.adoc#type-system_

## Source

[GitHub](https://github.com/openrewrite/rewrite-hibernate/blob/main/src/main/resources/META-INF/rewrite/hibernate-6.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-hibernate/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-hibernate/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-hibernate
* version: 1.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-hibernate:1.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.hibernate.TypeDescriptorToType")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-hibernate:1.0.1")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.hibernate.TypeDescriptorToType</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-hibernate</artifactId>
            <version>1.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-hibernate:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.hibernate.TypeDescriptorToType
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.hibernate.type.descriptor.java.JavaTypeDescriptor`
  * newFullyQualifiedTypeName: `org.hibernate.type.descriptor.java.JavaType`
* [Change type](../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.hibernate.type.descriptor.sql.SqlTypeDescriptor`
  * newFullyQualifiedTypeName: `org.hibernate.type.descriptor.sql.SqlType`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.hibernate.TypeDescriptorToType
displayName: Rename `JavaTypeDescriptor` and `SqlTypeDescriptor` to `JavaType` and `SqlType`
description: Rename `JavaTypeDescriptor` and `SqlTypeDescriptor` to `JavaType` and `SqlType` respectively. See https://github.com/hibernate/hibernate-orm/blob/6.0/migration-guide.adoc#type-system

recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.type.descriptor.java.JavaTypeDescriptor
      newFullyQualifiedTypeName: org.hibernate.type.descriptor.java.JavaType
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.type.descriptor.sql.SqlTypeDescriptor
      newFullyQualifiedTypeName: org.hibernate.type.descriptor.sql.SqlType

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.hibernate.TypeDescriptorToType)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
