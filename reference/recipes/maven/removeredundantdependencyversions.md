# Remove redundant explicit dependency and plugin versions

**org.openrewrite.maven.RemoveRedundantDependencyVersions**

_Remove explicitly-specified dependency/plugin versions when a parent POM's `dependencyManagement`/`pluginManagement` specifies the version._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemoveRedundantDependencyVersions.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.27.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.27.4

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupPattern | *Optional*. Group glob expression pattern used to match dependencies that should be managed.Group is the first part of a dependency coordinate `com.google.guava:guava:VERSION`. | `com.google.*` |
| `String` | artifactPattern | *Optional*. Artifact glob expression pattern used to match dependencies that should be managed.Artifact is the second part of a dependency coordinate `com.google.guava:guava:VERSION`. | `guava*` |
| `Boolean` | onlyIfVersionsMatch | *Optional*. Only remove the explicit version if it exactly matches the managed dependency version. When `false` explicit versions will be removed if they are older than or equal to the managed dependency version. Default `true`. |  |
| `Comparator` | onlyIfManagedVersionIs | *Optional*. Only remove the explicit version if the managed version has the specified comparative relationship to the explicit version. For example, `gte` will only remove the explicit version if the managed version is the same or newer. Default `eq`. Valid options: `any`, `eq`, `lt`, `lte`, `gt`, `gte` |  |
| `List` | except | *Optional*. Accepts a list of GAVs. Dependencies matching a GAV will be ignored by this recipe. GAV versions are ignored if provided. | `com.jcraft:jsch` |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}

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
        <version>5.33.0</version>
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
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap"%}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.maven.RemoveRedundantDependencyVersions 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe RemoveRedundantDependencyVersions
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.RemoveRedundantDependencyVersions)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Nick McKinney](mailto:mckinneynicholas@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Kevin McCarpenter](mailto:kevin@moderne.io), Adriano Machado, [Jonathan Schneider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io), Ryan Hudson, [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)
