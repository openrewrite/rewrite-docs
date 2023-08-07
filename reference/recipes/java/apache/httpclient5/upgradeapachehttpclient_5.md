# Migrate to ApacheHttpClient 5.x

**org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient\_5**

_Migrate applications to the latest Apache HttpClient 5.x release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions._

### Tags

* apache
* httpclient

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.7


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.7")
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
            <recipe>org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.7</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrates to ApacheHttpClient 4.5.x](../../../java/apache/httpclient4/upgradeapachehttpclient_4_5.md)
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.apache.httpcomponents`
  * oldArtifactId: `httpclient`
  * newGroupId: `org.apache.httpcomponents.client5`
  * newArtifactId: `httpclient5`
  * newVersion: `5.1.x`
* [Migrate to ApacheHttpClient 5.x Classes Namespace from 4.x](../../../java/apache/httpclient5/upgradeapachehttpclient_5_classmapping.md)
* [Migrate to ApacheHttpClient 5.x deprecated methods from 4.x](../../../java/apache/httpclient5/upgradeapachehttpclient_5_deprecatedmethods.md)
* [Adds `TimeUnit` to timeouts and duration methods](../../../java/apache/httpclient5/upgradeapachehttpclient_5_timeunit.md)
* [Migrate to ApacheHttpClient 5.x deprecated methods from 4.x](../../../java/apache/httpclient5/statusline.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5
displayName: Migrate to ApacheHttpClient 5.x
description: Migrate applications to the latest Apache HttpClient 5.x release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions.

tags:
  - apache
  - httpclient
recipeList:
  - org.openrewrite.java.apache.httpclient4.UpgradeApacheHttpClient_4_5
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.apache.httpcomponents
      oldArtifactId: httpclient
      newGroupId: org.apache.httpcomponents.client5
      newArtifactId: httpclient5
      newVersion: 5.1.x
  - org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping
  - org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods
  - org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit
  - org.openrewrite.java.apache.httpclient5.StatusLine

```
{% endtab %}
{% endtabs %}

## Contributors
* [joanvr](mailto:joan@moderne.io)
* [Joan Viladrosa](mailto:joan@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
