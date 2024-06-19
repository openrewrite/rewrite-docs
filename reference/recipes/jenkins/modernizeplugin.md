# Modernize a Jenkins plugin to the latest recommended versions

**org.openrewrite.jenkins.ModernizePlugin**

_This recipe is intended to change over time to reflect the most recent tooling and [recommended Jenkins baseline](https://www.jenkins.io/doc/developer/plugin-development/choosing-jenkins-baseline/)._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/rewrite.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/0.8.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-jenkins
* version: 0.8.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-jenkins:0.8.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.jenkins.ModernizePlugin")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-jenkins:0.8.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-jenkins:0.8.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.jenkins.ModernizePlugin")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.jenkins.ModernizePlugin</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-jenkins</artifactId>
            <version>0.8.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jenkins:RELEASE -Drewrite.activeRecipes=org.openrewrite.jenkins.ModernizePlugin 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ModernizePlugin
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Maven parent](../maven/changeparentpom.md)
  * oldGroupId: `org.jenkins-ci.plugins`
  * oldArtifactId: `plugin`
  * newVersion: `latest.release`
  * allowVersionDowngrades: `false`
* [Remove annotation](../java/removeannotation.md)
  * annotationPattern: `@org.codehaus.mojo.animal_sniffer.IgnoreJRERequirement`
* [Migrate to HtmlUnit 3.x](../jenkins/upgradehtmlunit_3_3_0.md)
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.mockito`
  * oldArtifactId: `mockito-inline`
  * newGroupId: `org.mockito`
  * newArtifactId: `mockito-core`
  * newVersion: `5.0.0`
  * overrideManagedVersion: `false`
* [Upgrade property's value to version](../jenkins/upgradeversionproperty.md)
  * key: `jenkins.version`
  * minimumVersion: `2.440.3`
* [Remove a Gradle or Maven dependency](../java/dependencies/removedependency.md)
  * groupId: `org.jenkins-ci`
  * artifactId: `symbol-annotation`
* [Add or correct Jenkins plugins BOM](../jenkins/addpluginsbom.md)
* [Rename package name](../java/changepackage.md)
  * oldPackageName: `javax.inject`
  * newPackageName: `jakarta.inject`
  * recursive: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.jenkins.ModernizePlugin
displayName: Modernize a Jenkins plugin to the latest recommended versions
description: This recipe is intended to change over time to reflect the most recent tooling and [recommended Jenkins baseline](https://www.jenkins.io/doc/developer/plugin-development/choosing-jenkins-baseline/).

recipeList:
  - org.openrewrite.maven.ChangeParentPom:
      oldGroupId: org.jenkins-ci.plugins
      oldArtifactId: plugin
      newVersion: latest.release
      allowVersionDowngrades: false
  - org.openrewrite.java.RemoveAnnotation:
      annotationPattern: @org.codehaus.mojo.animal_sniffer.IgnoreJRERequirement
  - org.openrewrite.jenkins.UpgradeHtmlUnit_3_3_0
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.mockito
      oldArtifactId: mockito-inline
      newGroupId: org.mockito
      newArtifactId: mockito-core
      newVersion: 5.0.0
      overrideManagedVersion: false
  - org.openrewrite.jenkins.UpgradeVersionProperty:
      key: jenkins.version
      minimumVersion: 2.440.3
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.jenkins-ci
      artifactId: symbol-annotation
  - org.openrewrite.jenkins.AddPluginsBom
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.inject
      newPackageName: jakarta.inject
      recursive: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.jenkins.ModernizePlugin)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Steve Hill](mailto:sghill.dev@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut@moderne.io)
