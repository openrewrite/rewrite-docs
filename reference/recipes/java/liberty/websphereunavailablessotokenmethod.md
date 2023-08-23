# Use `getSSOCookieFromSSOToken`

**org.openrewrite.java.liberty.WebSphereUnavailableSSOTokenMethod**

_This method `LTPACookieFromSSOToken()` is deprecated in traditional WebSphere Application  Server Version 8.5 and might be removed in a future release. It is not available on Liberty._

## Source

[GitHub](https://github.com/openrewrite/rewrite-liberty/blob/main/src/main/resources/META-INF/rewrite/was-to-liberty.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-liberty/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-liberty/1.0.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-liberty
* version: 1.0.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-liberty:1.0.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.26")
}

rewrite {
    activeRecipe("org.openrewrite.java.liberty.WebSphereUnavailableSSOTokenMethod")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-liberty:1.0.0")
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
            <recipe>org.openrewrite.java.liberty.WebSphereUnavailableSSOTokenMethod</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-liberty</artifactId>
            <version>1.0.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-liberty:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.liberty.WebSphereUnavailableSSOTokenMethod
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `com.ibm.websphere.security.WSSecurityHelper getLTPACookieFromSSOToken()`
  * newMethodName: `getSSOCookieFromSSOToken`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `com.ibm.websphere.security.WSSecurityHelper`
  * newFullyQualifiedTypeName: `com.ibm.websphere.security.web.WebSecurityHelper`
  * ignoreDefinition: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.liberty.WebSphereUnavailableSSOTokenMethod
displayName: Use `getSSOCookieFromSSOToken`
description: This method `LTPACookieFromSSOToken()` is deprecated in traditional WebSphere Application  Server Version 8.5 and might be removed in a future release. It is not available on Liberty.

recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.ibm.websphere.security.WSSecurityHelper getLTPACookieFromSSOToken()
      newMethodName: getSSOCookieFromSSOToken
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.ibm.websphere.security.WSSecurityHelper
      newFullyQualifiedTypeName: com.ibm.websphere.security.web.WebSecurityHelper
      ignoreDefinition: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.liberty.WebSphereUnavailableSSOTokenMethod)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
