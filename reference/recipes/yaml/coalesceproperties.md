# Coalesce YAML properties

 **org.openrewrite.yaml.CoalesceProperties** _Simplify nested map hierarchies into their simplest dot separated property form, i.e. as Spring Boot interprets application.yml files._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-yaml/7.8.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 7.8.1

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.1")
}

rewrite {
    activeRecipe("org.openrewrite.yaml.CoalesceProperties")
}

repositories {
    mavenCentral()
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
        <version>4.6.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.yaml.CoalesceProperties</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.yaml.CoalesceProperties`

