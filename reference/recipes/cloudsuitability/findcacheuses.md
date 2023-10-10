# Uses of caches

**org.openrewrite.cloudsuitability.FindCacheUses**

_Cloud readiness issue as potential state information that is not persisted to a backing service._

### Tags

* java-cache-import

## Source

[GitHub](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer/blob/main/src/main/resources/META-INF/rewrite/finders.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-cloud-suitability-analyzer/2.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cloud-suitability-analyzer
* version: 2.0.5


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:2.0.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.18")
}

rewrite {
    activeRecipe("org.openrewrite.cloudsuitability.FindCacheUses")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:2.0.5")
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
    dependencies { classpath("org.openrewrite:plugin:6.3.18") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:2.0.5")
    }
    rewrite {
        activeRecipe("org.openrewrite.cloudsuitability.FindCacheUses")
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
        <version>5.8.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.cloudsuitability.FindCacheUses</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-cloud-suitability-analyzer</artifactId>
            <version>2.0.5</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.cloudsuitability.FindCacheUses
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `com.tangosol..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `org.apache.commons-jcs-jcache..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `com.ibm.websphere.cache..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `com.hazelcast..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `org.jboss.ha.cachemanager..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `org.jboss.ha.cachemanager..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `javax.cache..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `net.spy.memcached..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `com.opensymphony.oscache..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `org.shiftone-cache..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `com.ibm.websphere.objectgrid..*`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cloudsuitability.FindCacheUses
displayName: Uses of caches
description: Cloud readiness issue as potential state information that is not persisted to a backing service.
tags:
  - java-cache-import
recipeList:
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: com.tangosol..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: org.apache.commons-jcs-jcache..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: com.ibm.websphere.cache..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: com.hazelcast..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: org.jboss.ha.cachemanager..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: org.jboss.ha.cachemanager..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: javax.cache..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: net.spy.memcached..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: com.opensymphony.oscache..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: org.shiftone-cache..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: com.ibm.websphere.objectgrid..*

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.cloudsuitability.FindCacheUses)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
