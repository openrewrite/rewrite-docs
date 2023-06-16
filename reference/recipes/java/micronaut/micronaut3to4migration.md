# Migrate from Micronaut 3.x to 4.x

**org.openrewrite.java.micronaut.Micronaut3to4Migration**

_This recipe will apply changes required for migrating from Micronaut 3 to Micronaut 4._

## Source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut3-to-4.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.Micronaut3to4Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.0.1")
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
            <recipe>org.openrewrite.java.micronaut.Micronaut3to4Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.micronaut.Micronaut3to4Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Maven Java version property values to 17](../../java/migrate/javaversion17.md)
* [Update Gradle wrapper](../../gradle/updategradlewrapper.md)
  * version: `8.x`
* [Update the Micronaut version to 4.x](../../java/micronaut/updatebuildtomicronaut4version.md)
* [Update to Micronaut 4.x platform BOM](../../java/micronaut/updatemicronautplatformbom.md)
* [Add Micronaut build plugins to 4.x](../../java/micronaut/updatebuildplugins.md)
* [Add `snakeyaml` dependency if needed](../../java/micronaut/addsnakeyamldependencyifneeded.md)
* [Update jakarta annotations dependency](../../java/micronaut/updatejakartaannotations.md)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](../../java/migrate/jakarta/javaxpersistencetojakartapersistence.md)
* [Update to Micronaut Validation 4.x](../../java/micronaut/updatemicronautvalidation.md)
* [Update to Micronaut Validation 4.x](../../java/micronaut/updatemicronautemail.md)
* [Update the Micronaut Websocket support](../../java/micronaut/addmicronautwebsocketdependencyifneeded.md)
* [Update the Micronaut Session support](../../java/micronaut/updatemicronautsession.md)
* [Update the Micronaut Retry support](../../java/micronaut/addmicronautretrydependencyifneeded.md)
* [Update the Micronaut Security library](../../java/micronaut/updatemicronautsecurity.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.Micronaut3to4Migration
displayName: Migrate from Micronaut 3.x to 4.x
description: This recipe will apply changes required for migrating from Micronaut 3 to Micronaut 4.
recipeList:
  - org.openrewrite.java.migrate.JavaVersion17
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: 8.x
  - org.openrewrite.java.micronaut.UpdateBuildToMicronaut4Version
  - org.openrewrite.java.micronaut.UpdateMicronautPlatformBom
  - org.openrewrite.java.micronaut.UpdateBuildPlugins
  - org.openrewrite.java.micronaut.AddSnakeYamlDependencyIfNeeded
  - org.openrewrite.java.micronaut.UpdateJakartaAnnotations
  - org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
  - org.openrewrite.java.micronaut.UpdateMicronautValidation
  - org.openrewrite.java.micronaut.UpdateMicronautEmail
  - org.openrewrite.java.micronaut.AddMicronautWebsocketDependencyIfNeeded
  - org.openrewrite.java.micronaut.UpdateMicronautSession
  - org.openrewrite.java.micronaut.AddMicronautRetryDependencyIfNeeded
  - org.openrewrite.java.micronaut.UpdateMicronautSecurity

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jeremy Grelle](grellej@unityfoundation.io)
* [Patrick](patway99@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Shannon Pamperl](shanman190@gmail.com)
* [Tim te Beek](tim@moderne.io)
* [Knut Wannheden](knut@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [traceyyoshima](tracey.yoshima@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.micronaut.Micronaut3to4Migration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
