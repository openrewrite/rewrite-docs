# Migrate to Spring Framework 5.2

**org.openrewrite.java.spring.framework.UpgradeSpringFramework\_5\_2**

_Migrate applications to the latest Spring Framework 5.2 release._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-framework-52.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.5")
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
            <recipe>org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Framework 5.1](../../../java/spring/framework/upgradespringframework_5_1.md)
* [Upgrade spring-framework Maven dependencies](../../../java/spring/framework/upgradespringframeworkdependencies.md)
  * newVersion: `5.2.x`
* [Migrate deprecated Spring Web UTF8 `MediaType` enums](../../../java/spring/framework/migrateutf8mediatypes.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2
displayName: Migrate to Spring Framework 5.2
description: Migrate applications to the latest Spring Framework 5.2 release.
recipeList:
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_1
  - org.openrewrite.java.spring.framework.UpgradeSpringFrameworkDependencies:
      newVersion: 5.2.x
  - org.openrewrite.java.spring.framework.MigrateUtf8MediaTypes

```
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick](mailto:patway99@gmail.com)
* Patrick Way
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* Kun Li
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Kun Li](mailto:kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
