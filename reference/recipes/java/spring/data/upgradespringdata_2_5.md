# Migrate to Spring Data 2.5

**org.openrewrite.java.spring.data.UpgradeSpringData\_2\_5**

_Migrate applications to the latest Spring Data 2.5 release._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-data-25.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.data.UpgradeSpringData_2_5")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
            <recipe>org.openrewrite.java.spring.data.UpgradeSpringData_2_5</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.data.UpgradeSpringData_2_5
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Data 2.3](../../../java/spring/data/upgradespringdata_2_3.md)
* [Use `JpaRepository#getById(ID id)`](../../../java/spring/data/usejparepositorygetbyid.md)
* [Use `JpaRepository#deleteAllInBatch(Iterable<T> entities)`](../../../java/spring/data/usejparepositorydeleteallinbatch.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.data.UpgradeSpringData_2_5
displayName: Migrate to Spring Data 2.5
description: Migrate applications to the latest Spring Data 2.5 release.
recipeList:
  - org.openrewrite.java.spring.data.UpgradeSpringData_2_3
  - org.openrewrite.java.spring.data.UseJpaRepositoryGetById
  - org.openrewrite.java.spring.data.UseJpaRepositoryDeleteAllInBatch

```
{% endtab %}
{% endtabs %}
## Contributors
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Kun Li](kun@moderne.io)
* [Knut Wannheden](knut@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Nick McKinney](mckinneynichoals@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.data.UpgradeSpringData_2_5)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
