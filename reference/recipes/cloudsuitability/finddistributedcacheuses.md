# Uses of distributed caches

**org.openrewrite.cloudsuitability.FindDistributedCacheUses**

_Distributed caches must be remediated to function in K8S._

### Tags

* java-cache-dist-import

## Source

[Github](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer/blob/main/src/main/resources/META-INF/rewrite/finders.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-cloud-suitability-analyzer/1.6.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cloud-suitability-analyzer
* version: 1.6.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.6.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.cloudsuitability.FindDistributedCacheUses")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.6.0")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.cloudsuitability.FindDistributedCacheUses</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-cloud-suitability-analyzer</artifactId>
            <version>1.6.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.cloudsuitability.FindDistributedCacheUses
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `org.ehcache..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `com.hazelcast..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `org.apache.ignite..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `org.infinispan..*`
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `net.spy.memcached..*`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cloudsuitability.FindDistributedCacheUses
displayName: Uses of distributed caches
description: Distributed caches must be remediated to function in K8S.
tags:
  - java-cache-dist-import
recipeList:
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: org.ehcache..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: com.hazelcast..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: org.apache.ignite..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: org.infinispan..*
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: net.spy.memcached..*

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.cloudsuitability.FindDistributedCacheUses)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
