# Maven repository order

**org.openrewrite.maven.search.FindRepositoryOrder**

_Determine the order in which dependencies will be resolved for each `pom.xml` based on its defined repositories and effective `settings.xml`._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/search/FindRepositoryOrder.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.11/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.11

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Maven repository order

_The order in which dependencies will be resolved for each `pom.xml` based on its defined repositories and effective `settings.xml`._

| Column Name | Description |
| ----------- | ----------- |
| Repository ID | The ID of the repository. Note that projects may define the same physical repository with different IDs. |
| Repository URI | The URI of the repository. |
| Known to exist | If the repository is provably reachable. If false, does not guarantee that the repository does not exist. |
| Rank | The index order of this repository in the repository list. |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}

{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.maven.search.FindRepositoryOrder</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.maven.search.FindRepositoryOrder
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.search.FindRepositoryOrder)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
