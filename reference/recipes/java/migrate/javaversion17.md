# Change Maven Java version property values to 17

**org.openrewrite.java.migrate.JavaVersion17**

_Change maven.compiler.source and maven.compiler.target values to 17._

### Tags

* java17
* compiler

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-17.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

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
    activeRecipe("org.openrewrite.java.migrate.JavaVersion17")
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
            <recipe>org.openrewrite.java.migrate.JavaVersion17</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.JavaVersion17
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Java version](../../java/migrate/upgradejavaversion.md)
  * version: `17`
* [Use Maven Compiler Plugin Release Configuration](../../java/migrate/maven/usemavencompilerpluginreleaseconfiguration.md)
  * releaseVersion: `17`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaVersion17
displayName: Change Maven Java version property values to 17
description: Change maven.compiler.source and maven.compiler.target values to 17.
tags:
  - java17
  - compiler
recipeList:
  - org.openrewrite.java.migrate.UpgradeJavaVersion:
      version: 17
  - org.openrewrite.java.migrate.maven.UseMavenCompilerPluginReleaseConfiguration:
      releaseVersion: 17

```
{% endtab %}
{% endtabs %}

## Contributors
* [Sam Snyder](sam@moderne.io)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Shannon Pamperl](shanman190@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Tim te Beek](tim@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.JavaVersion17)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
