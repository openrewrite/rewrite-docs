# Uses of caches

**org.openrewrite.cloudsuitability.FindCacheUses** _Cloud readiness issue as potential state information that is not persisted to a backing service._

### Tags

* java-cache-import

## Source

[Github](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer), [Issue Tracker](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-cloud-suitability-analyzer/1.0.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cloud-suitability-analyzer
* version: 1.0.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.0.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.cloudsuitability.FindCacheUses")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.0.0")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.cloudsuitability.FindCacheUses</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-cloud-suitability-analyzer</artifactId>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.0.0 \
  -DactiveRecipes=org.openrewrite.cloudsuitability.FindCacheUses
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.cloudsuitability.FindCacheUses`

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
