# Remove redundant explicit dependency versions

**org.openrewrite.maven.RemoveRedundantDependencyVersions**
_Remove explicitly-specified dependency versions when a parent POM's dependencyManagement specifies the version._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.33.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.33.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupPattern | *Optional*. Group glob expression pattern used to match dependencies that should be managed.Group is the first part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | artifactPattern | *Optional*. Artifact glob expression pattern used to match dependencies that should be managed.Artifact is the second part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `Boolean` | onlyIfVersionsMatch | *Optional*. Only remove the explicit version if it matches the managed dependency version. Default true. |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.maven.RemoveRedundantDependencyVersions")
}

repositories {
    mavenCentral()
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
            <recipe>org.openrewrite.maven.RemoveRedundantDependencyVersions</recipe>
          </activeRecipes>
        </configuration>
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
  -DactiveRecipes=org.openrewrite.maven.RemoveRedundantDependencyVersions
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.maven.RemoveRedundantDependencyVersions`
