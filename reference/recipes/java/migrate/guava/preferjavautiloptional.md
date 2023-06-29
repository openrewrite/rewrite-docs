# Prefer `java.util.Optional`

**org.openrewrite.java.migrate.guava.PreferJavaUtilOptional**

_Prefer `java.util.Optional` instead of using `com.google.common.base.Optional`._

### Tags

* RSPEC-4738
* guava

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/no-guava.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.guava.PreferJavaUtilOptional")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.guava.PreferJavaUtilOptional</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.guava.PreferJavaUtilOptional
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Prefer `java.util.Optional#or(Supplier<T extends java.util.Optional<T>>)`](../../../java/migrate/guava/preferjavautiloptionalorsupplier.md)
* [Prefer `java.util.Optional#orElse(null)` over `com.google.common.base.Optional#orNull()`](../../../java/migrate/guava/preferjavautiloptionalorelsenull.md)
* [Replace `com.google.common.base.Optional#fromJavaUtil(java.util.Optional)` with argument](../../../java/migrate/guava/noguavaoptionalfromjavautil.md)
* [Remove `com.google.common.base.Optional#toJavaUtil()`](../../../java/migrate/guava/noguavaoptionaltojavautil.md)
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `com.google.common.base.Optional absent()`
  * newMethodName: `empty`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `com.google.common.base.Optional fromNullable(..)`
  * newMethodName: `ofNullable`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `com.google.common.base.Optional or(com.google.common.base.Supplier)`
  * newMethodName: `orElseGet`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `com.google.common.base.Optional or(..)`
  * newMethodName: `orElse`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `com.google.common.base.Optional transform(com.google.common.base.Function)`
  * newMethodName: `map`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `com.google.common.base.Optional`
  * newFullyQualifiedTypeName: `java.util.Optional`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.guava.PreferJavaUtilOptional
displayName: Prefer `java.util.Optional`
description: Prefer `java.util.Optional` instead of using `com.google.common.base.Optional`.
tags:
  - RSPEC-4738
  - guava
recipeList:
  - org.openrewrite.java.migrate.guava.PreferJavaUtilOptionalOrSupplier
  - org.openrewrite.java.migrate.guava.PreferJavaUtilOptionalOrElseNull
  - org.openrewrite.java.migrate.guava.NoGuavaOptionalFromJavaUtil
  - org.openrewrite.java.migrate.guava.NoGuavaOptionalToJavaUtil
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.base.Optional absent()
      newMethodName: empty
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.base.Optional fromNullable(..)
      newMethodName: ofNullable
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.base.Optional or(com.google.common.base.Supplier)
      newMethodName: orElseGet
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.base.Optional or(..)
      newMethodName: orElse
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.base.Optional transform(com.google.common.base.Function)
      newMethodName: map
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.base.Optional
      newFullyQualifiedTypeName: java.util.Optional

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tim te Beek](tim@moderne.io)
* [Knut Wannheden](knut@moderne.io)
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.guava.PreferJavaUtilOptional)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
