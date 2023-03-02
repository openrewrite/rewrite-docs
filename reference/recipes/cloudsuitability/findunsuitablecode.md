# Find code unsuitable for the cloud

**org.openrewrite.cloudsuitability.FindUnsuitableCode**
_Locate patterns that may cause problems in containerized cloud environments._

## Source

[Github](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer/blob/main/src/main/resources/META-INF/rewrite/finders.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-cloud-suitability-analyzer/1.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cloud-suitability-analyzer
* version: 1.3.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.3.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.37.0")
}

rewrite {
    activeRecipe("org.openrewrite.cloudsuitability.FindUnsuitableCode")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.3.0")
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
        <version>4.41.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.cloudsuitability.FindUnsuitableCode</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-cloud-suitability-analyzer</artifactId>
            <version>1.3.0</version>
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
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:LATEST \
  -DactiveRecipes=org.openrewrite.cloudsuitability.FindUnsuitableCode
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.cloudsuitability.FindUnsuitableCode`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Uses of JNDI](../cloudsuitability/findjavabatch.md)
* [Uses of Java Batch annotations](../cloudsuitability/findjavabatchannotations.md)
* [Uses of distributed caches](../cloudsuitability/finddistributedcacheuses.md)
* [Uses of caches](../cloudsuitability/findcacheuses.md)
* [Uses of CORBA](../cloudsuitability/findcorba.md)
* [Uses of ehcache](../cloudsuitability/findehcache.md)
* [Find EJB message-driven beans (MDBs)](../cloudsuitability/findejbmdb.md)
* [Find EJB stateful beans](../cloudsuitability/findejbstateful.md)
* [Find EJB stateless beans](../cloudsuitability/findejbstateless.md)
* [Find uses of Java file IO](../cloudsuitability/findfileio.md)
* [Find uses of `file://` scheme in string literals](../cloudsuitability/findfilescheme.md)
* [Find unhandled TERM signals](../cloudsuitability/findunhandledtermsignal.md)
* [Find uses of hardcoded IP addresses](../cloudsuitability/findhardcodedipaddress.md)
* [Find remote method invocations](../cloudsuitability/findremotemethodinvocations.md)
* [Find use of JavaFX](../cloudsuitability/findjavafx.md)
* [Find use of JAX-RS](../cloudsuitability/findjaxrs.md)
* [Find uses of JCA](../cloudsuitability/findjcaannotations.md)
* [Find uses of JCache](../cloudsuitability/findjcache.md)
* [Find uses of Jersey](../cloudsuitability/findjersey.md)
* [Find uses of Jetty](../cloudsuitability/findjetty.md)
* [Find java key store files](../cloudsuitability/findjks.md)
* [Find JMS files](../cloudsuitability/findjms.md)
* [Find uses of JNI](../cloudsuitability/findjni.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cloudsuitability.FindUnsuitableCode
displayName: Find code unsuitable for the cloud
description: Locate patterns that may cause problems in containerized cloud environments.
recipeList:
  - org.openrewrite.cloudsuitability.FindJavaBatch
  - org.openrewrite.cloudsuitability.FindJavaBatchAnnotations
  - org.openrewrite.cloudsuitability.FindDistributedCacheUses
  - org.openrewrite.cloudsuitability.FindCacheUses
  - org.openrewrite.cloudsuitability.FindCorba
  - org.openrewrite.cloudsuitability.FindEhcache
  - org.openrewrite.cloudsuitability.FindEjbMdb
  - org.openrewrite.cloudsuitability.FindEjbStateful
  - org.openrewrite.cloudsuitability.FindEjbStateless
  - org.openrewrite.cloudsuitability.FindFileIo
  - org.openrewrite.cloudsuitability.FindFileScheme
  - org.openrewrite.cloudsuitability.FindUnhandledTermSignal
  - org.openrewrite.cloudsuitability.FindHardcodedIpAddress
  - org.openrewrite.cloudsuitability.FindRemoteMethodInvocations
  - org.openrewrite.cloudsuitability.FindJavaFx
  - org.openrewrite.cloudsuitability.FindJaxRs
  - org.openrewrite.cloudsuitability.FindJcaAnnotations
  - org.openrewrite.cloudsuitability.FindJCache
  - org.openrewrite.cloudsuitability.FindJersey
  - org.openrewrite.cloudsuitability.FindJetty
  - org.openrewrite.cloudsuitability.FindJks
  - org.openrewrite.cloudsuitability.FindJms
  - org.openrewrite.cloudsuitability.FindJni

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.cloudsuitability.FindUnsuitableCode)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
