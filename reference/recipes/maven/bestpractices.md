# Apache Maven best practices

**org.openrewrite.maven.BestPractices**

_Applies best practices to Maven POMs._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/resources/META-INF/rewrite/maven.yml), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.28.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.28.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.maven.BestPractices</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.maven.BestPractices 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe BestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add explicit `groupId` to Maven plugins](../maven/cleanup/explicitplugingroupid.md)
* [Add explicit plugin versions](../maven/cleanup/explicitpluginversion.md)
* [Drop prefixless expressions in POM](../maven/cleanup/prefixlessexpressions.md)
* [Order POM elements](../maven/orderpomelements.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.maven.BestPractices
displayName: Apache Maven best practices
description: Applies best practices to Maven POMs.
recipeList:
  - org.openrewrite.maven.cleanup.ExplicitPluginGroupId
  - org.openrewrite.maven.cleanup.ExplicitPluginVersion
  - org.openrewrite.maven.cleanup.PrefixlessExpressions
  - org.openrewrite.maven.OrderPomElements

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.BestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Geoffrey De Smet](mailto:gds.geoffrey.de.smet@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [traceyyoshima](mailto:tracey.yoshima@gmail.com), Patrick Way, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Scott Jungling](mailto:scott.jungling@gmail.com)
