# List effective Maven repositories

**org.openrewrite.maven.search.EffectiveMavenRepositories**

_Lists the Maven repositories that would be used for dependency resolution, in order of precedence. This includes Maven repositories defined in the Maven settings file (and those contributed by active profiles) as determined when the LST was produced._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/search/EffectiveMavenRepositories.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.9.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.9.4

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | useMarkers | *Optional*. Whether to add markers for each effective Maven repository to the POM. Default `false`. |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Effective Maven repositories

_Table showing which Maven repositories were used in dependency resolution for this POM._

| Column Name | Description |
| ----------- | ----------- |
| POM path | The path to the POM file. |
| Repository URI | The URI of the Maven repository. |


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
        <version>5.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.maven.search.EffectiveMavenRepositories</recipe>
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
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.maven.search.EffectiveMavenRepositories
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe EffectiveMavenRepositories
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.search.EffectiveMavenRepositories)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com), * [Kevin Carpenter™️](mailto:kevin@moderne.io), * [Sam Snyder](mailto:sam@moderne.io), * [Mike Solomon](mailto:mike@moderne.io)
