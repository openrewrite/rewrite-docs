# Remove redundant explicit dependency versions

**org.openrewrite.maven.RemoveRedundantDependencyVersions**

_Remove explicitly-specified dependency versions when a parent POM's dependencyManagement specifies the version._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemoveRedundantDependencyVersions.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/7.40.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.40.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupPattern | *Optional*. Group glob expression pattern used to match dependencies that should be managed.Group is the first part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | artifactPattern | *Optional*. Artifact glob expression pattern used to match dependencies that should be managed.Artifact is the second part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `Boolean` | onlyIfVersionsMatch | *Optional*. Only remove the explicit version if it matches the managed dependency version. Default true. |
| `List` | except | *Optional*. Accepts a list of GAVs. Dependencies matching a GAV will be ignored by this recipe. GAV versions are ignored if provided. |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
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
        <version>4.44.0</version>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.maven.RemoveRedundantDependencyVersions
```
{% endcode %}
{% endtab %}
{% endtabs %}


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.RemoveRedundantDependencyVersions)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
