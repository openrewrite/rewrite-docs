# Modernize a Jenkins plugin to the latest recommended versions

**org.openrewrite.jenkins.ModernizePlugin**

_This recipe is intended to change over time to reflect the most recent tooling and [recommended Jenkins baseline](https://www.jenkins.io/doc/developer/plugin-development/choosing-jenkins-baseline/)._

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
    id("org.openrewrite.rewrite") version("6.1.25")
}

rewrite {
    activeRecipe("org.openrewrite.jenkins.ModernizePlugin")
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
            <recipe>org.openrewrite.jenkins.ModernizePlugin</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.jenkins.ModernizePlugin
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Maven Parent Pom](../maven/changeparentpom.md)
  * oldGroupId: `org.jenkins-ci.plugins`
  * oldArtifactId: `plugin`
  * newVersion: `latest.release`
  * allowVersionDowngrades: `false`
* [Migrate to HtmlUnit 3.x](../jenkins/upgradehtmlunit_3_3_0.md)
* [Change Maven dependency groupId, artifactId and/or the version](../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.mockito`
  * oldArtifactId: `mockito-inline`
  * newGroupId: `org.mockito`
  * newArtifactId: `mockito-core`
  * newVersion: `5.0.0`
  * overrideManagedVersion: `false`
* [Upgrade given property to version if necessary](../jenkins/upgradeversionproperty.md)
  * key: `jenkins.version`
  * minimumVersion: `2.375.4`
* [Add or correct Jenkins plugins BOM](../jenkins/addpluginsbom.md)

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
  - org.openrewrite.jenkins.UpgradeHtmlUnit_3_3_0
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.mockito
      oldArtifactId: mockito-inline
      newGroupId: org.mockito
      newArtifactId: mockito-core
      newVersion: 5.0.0
      overrideManagedVersion: false
  - org.openrewrite.jenkins.UpgradeVersionProperty:
      key: jenkins.version
      minimumVersion: 2.375.4
  - org.openrewrite.jenkins.AddPluginsBom

```
{% endtab %}
{% endtabs %}

## Contributors
* [Steve Hill](mailto:sghill.dev@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.jenkins.ModernizePlugin)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
