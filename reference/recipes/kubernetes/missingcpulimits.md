# Ensure CPU limits are set

 **org.openrewrite.kubernetes.MissingCpuLimits** _A system without managed quotas could eventually collapse due to inadequate resources for the tasks it bares._

### Tags

* kubernetes

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.1.0

## Recipe list

* [Missing configuration](search/findresourcemissingconfiguration.md)
  * resourceKind: `Pod`
  * configurationPath: `/spec/containers/resources/limits/cpu`

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.MissingCpuLimits")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.1.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.MissingCpuLimits</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.1.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.kubernetes.MissingCpuLimits` ts\`

