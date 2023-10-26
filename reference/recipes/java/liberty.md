# Migrate from WebSphere traditional to Liberty

**org.openrewrite.java.liberty**

_Use this category of rules to identify code changes needed when migrating  from WebSphere Application Server traditional to Liberty._

## Source

[GitHub](https://github.com/openrewrite/rewrite-liberty/blob/main/src/main/resources/META-INF/rewrite/was-to-liberty.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-liberty/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-liberty/1.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-liberty
* version: 1.0.2


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-liberty:1.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.4.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.liberty")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-liberty:1.0.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.4.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-liberty:1.0.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.liberty")
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
        <version>5.9.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.liberty</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-liberty</artifactId>
            <version>1.0.2</version>
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
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-liberty:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.liberty
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run <PATH> --recipe liberty
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Removes invalid JNDI properties](../java/liberty/removewas2libertynonportablejndilookup.md)
* [Use `getProperty("wlp.server.name")`](../java/liberty/servername.md)
* [Replace `revokeSSOCookies` with `logout`](../java/liberty/websphereunavailablessocookiemethod.md)
* [Use `getSSOCookieFromSSOToken`](../java/liberty/websphereunavailablessotokenmethod.md)
* [Use correct application namespace values](../xml/liberty/appddnamespacerule.md)
* [Use correct connector namespace values](../xml/liberty/connectorddnamespacerule.md)
* [Use correct ejb-jar namespace values](../xml/liberty/ejbddnamespacerule.md)
* [Move persistence.xml file](../xml/liberty/persistencexmllocationrule.md)
* [Use correct web-app namespace values](../xml/liberty/webddnamespacerule.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.liberty
displayName: Migrate from WebSphere traditional to Liberty
description: Use this category of rules to identify code changes needed when migrating  from WebSphere Application Server traditional to Liberty.

recipeList:
  - org.openrewrite.java.liberty.RemoveWas2LibertyNonPortableJndiLookup
  - org.openrewrite.java.liberty.ServerName
  - org.openrewrite.java.liberty.WebSphereUnavailableSSOCookieMethod
  - org.openrewrite.java.liberty.WebSphereUnavailableSSOTokenMethod
  - org.openrewrite.xml.liberty.AppDDNamespaceRule
  - org.openrewrite.xml.liberty.ConnectorDDNamespaceRule
  - org.openrewrite.xml.liberty.EJBDDNamespaceRule
  - org.openrewrite.xml.liberty.PersistenceXmlLocationRule
  - org.openrewrite.xml.liberty.WebDDNamespaceRule

```
{% endtab %}
{% endtabs %}

## Contributors
* [cjobinabo](mailto:chukaobinabo@gmail.com)
* [Tim te Beek](mailto:tim@moderne.io)
* [anuram](mailto:ranuradh@us.ibm.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.liberty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
