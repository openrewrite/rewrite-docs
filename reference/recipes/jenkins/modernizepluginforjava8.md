# Modernize a Jenkins plugin to the latest versions supported by Java 8

**org.openrewrite.jenkins.ModernizePluginForJava8**

_This recipe is intended to break down the modernization of very old plugins into distinct steps. It allows modernizing all tooling up to the last versions that supported Java 8. This can then be followed by another recipe that makes the jump to Java 11._

## Source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/java-8.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/0.2.0/jar)

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
    id("org.openrewrite.rewrite") version("6.1.26")
}

rewrite {
    activeRecipe("org.openrewrite.jenkins.ModernizePluginForJava8")
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
        <version>5.4.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.jenkins.ModernizePluginForJava8</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.jenkins.ModernizePluginForJava8
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use HTTPS for repositories](../maven/security/usehttpsforrepositories.md)
* [Disables local file resolution for parent POM](../jenkins/disablelocalresolutionforparentpom.md)
* [Add or correct Jenkins plugins BOM](../jenkins/addpluginsbom.md)
* [Change Maven Parent Pom](../maven/changeparentpom.md)
  * oldGroupId: `org.jenkins-ci.plugins`
  * oldArtifactId: `plugin`
  * newVersion: `4.51`
  * allowVersionDowngrades: `false`
* [Upgrade given property to version if necessary](../jenkins/upgradeversionproperty.md)
  * key: `jenkins.version`
  * minimumVersion: `2.346.3`
* [Remove redundant explicit dependency versions](../maven/removeredundantdependencyversions.md)
  * onlyIfVersionsMatch: `false`
* [Remove Maven project property](../maven/removeproperty.md)
  * propertyName: `java.level`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.jenkins.ModernizePluginForJava8
displayName: Modernize a Jenkins plugin to the latest versions supported by Java 8
description: This recipe is intended to break down the modernization of very old plugins into distinct steps. It allows modernizing all tooling up to the last versions that supported Java 8. This can then be followed by another recipe that makes the jump to Java 11.

recipeList:
  - org.openrewrite.maven.security.UseHttpsForRepositories
  - org.openrewrite.jenkins.DisableLocalResolutionForParentPom
  - org.openrewrite.jenkins.AddPluginsBom
  - org.openrewrite.maven.ChangeParentPom:
      oldGroupId: org.jenkins-ci.plugins
      oldArtifactId: plugin
      newVersion: 4.51
      allowVersionDowngrades: false
  - org.openrewrite.jenkins.UpgradeVersionProperty:
      key: jenkins.version
      minimumVersion: 2.346.3
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      onlyIfVersionsMatch: false
  - org.openrewrite.maven.RemoveProperty:
      propertyName: java.level

```
{% endtab %}
{% endtabs %}

## Contributors
* [Steve Hill](mailto:sghill.dev@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.jenkins.ModernizePluginForJava8)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
