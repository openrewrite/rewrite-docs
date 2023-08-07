# Migrate to HtmlUnit 3.x

**org.openrewrite.jenkins.UpgradeHtmlUnit\_3\_3\_0**

_Automates the HtmlUnit [migration guide](https://htmlunit.sourceforge.io/migration.html) from 2.x to 3.x. This change was brought in by [parent 4.66](https://github.com/jenkinsci/plugin-pom/releases/tag/plugin-4.66)._

## Source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/htmlunit-3.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/0.2.0/jar)

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
    activeRecipe("org.openrewrite.jenkins.UpgradeHtmlUnit_3_3_0")
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
            <recipe>org.openrewrite.jenkins.UpgradeHtmlUnit_3_3_0</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.jenkins.UpgradeHtmlUnit_3_3_0
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Rename package name](../java/changepackage.md)
  * oldPackageName: `com.gargoylesoftware.htmlunit`
  * newPackageName: `org.htmlunit`
  * recursive: `true`
* [Change method name](../java/changemethodname.md)
  * methodPattern: `org.htmlunit.html.HtmlInput getValueAttribute()`
  * newMethodName: `getValue`
  * matchOverrides: `true`
  * ignoreDefinition: `true`
* [Change method name](../java/changemethodname.md)
  * methodPattern: `org.htmlunit.html.HtmlInput setValueAttribute(String)`
  * newMethodName: `setValue`
  * matchOverrides: `true`
  * ignoreDefinition: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.jenkins.UpgradeHtmlUnit_3_3_0
displayName: Migrate to HtmlUnit 3.x
description: Automates the HtmlUnit [migration guide](https://htmlunit.sourceforge.io/migration.html) from 2.x to 3.x. This change was brought in by [parent 4.66](https://github.com/jenkinsci/plugin-pom/releases/tag/plugin-4.66).

recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.gargoylesoftware.htmlunit
      newPackageName: org.htmlunit
      recursive: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.htmlunit.html.HtmlInput getValueAttribute()
      newMethodName: getValue
      matchOverrides: true
      ignoreDefinition: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.htmlunit.html.HtmlInput setValueAttribute(String)
      newMethodName: setValue
      matchOverrides: true
      ignoreDefinition: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.jenkins.UpgradeHtmlUnit_3_3_0)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
