# Coalesce YAML properties

 **org.openrewrite.yaml.CoalesceProperties** _Simplify nested map hierarchies into their simplest dot separated property form, i.e. as Spring Boot interprets application.yml files._

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite/rewrite-yaml/7.7.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 7.7.0

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
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
        <version>4.5.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.yaml.CoalesceProperties`

