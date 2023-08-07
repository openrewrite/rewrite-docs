# Use commons-lang3 API Plugin

**org.openrewrite.jenkins.CommonsLang3ToApiPlugin**

_Updates `pom.xml` to depend on `commons-lang3-api` and exclude `commons-lang3` where it is brought in transitively._

## Source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/rewrite.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-jenkins
* version: 0.2.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-jenkins:0.2.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("org.openrewrite.jenkins.CommonsLang3ToApiPlugin")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-jenkins:0.2.0")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.jenkins.CommonsLang3ToApiPlugin</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-jenkins</artifactId>
            <version>0.2.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jenkins:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.jenkins.CommonsLang3ToApiPlugin
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use Jenkins API plugin instead of libraries](../jenkins/replacelibrarieswithapiplugin.md)
  * pluginGroupId: `io.jenkins.plugins`
  * pluginArtifactId: `commons-lang3-api`
  * pluginVersion: `3.12.0-36.vd97de6465d5b_`
  * replaces: `[ReplaceLibrariesWithApiPlugin.Library(groupId=org.apache.commons, artifactId=commons-lang3)]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.jenkins.CommonsLang3ToApiPlugin
displayName: Use commons-lang3 API Plugin
description: Updates `pom.xml` to depend on `commons-lang3-api` and exclude `commons-lang3` where it is brought in transitively.
recipeList:
  - org.openrewrite.jenkins.ReplaceLibrariesWithApiPlugin:
      pluginGroupId: io.jenkins.plugins
      pluginArtifactId: commons-lang3-api
      pluginVersion: 3.12.0-36.vd97de6465d5b_
      replaces: [ReplaceLibrariesWithApiPlugin.Library(groupId=org.apache.commons, artifactId=commons-lang3)]

```
{% endtab %}
{% endtabs %}

## Contributors
* [Steve Hill](mailto:sghill.dev@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.jenkins.CommonsLang3ToApiPlugin)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
