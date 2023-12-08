# Drop prefixless expressions in POM

**org.openrewrite.maven.cleanup.PrefixlessExpressions**

_MNG-7404 drops support for prefixless in POMs. This recipe will add the `project.` prefix where missing._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/resources/META-INF/rewrite/maven.yml), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.11.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.11.1

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
        <version>5.15.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.maven.cleanup.PrefixlessExpressions</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.maven.cleanup.PrefixlessExpressions
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe PrefixlessExpressions
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Rename Maven property key](../../maven/renamepropertykey.md)
  * oldKey: `basedir`
  * newKey: `project.basedir`
* [Rename Maven property key](../../maven/renamepropertykey.md)
  * oldKey: `build.timestamp`
  * newKey: `project.build.timestamp`
* [Rename Maven property key](../../maven/renamepropertykey.md)
  * oldKey: `groupId`
  * newKey: `project.groupId`
* [Rename Maven property key](../../maven/renamepropertykey.md)
  * oldKey: `artifactId`
  * newKey: `project.artifactId`
* [Rename Maven property key](../../maven/renamepropertykey.md)
  * oldKey: `version`
  * newKey: `project.version`
* [Rename Maven property key](../../maven/renamepropertykey.md)
  * oldKey: `pom.version`
  * newKey: `project.version`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.maven.cleanup.PrefixlessExpressions
displayName: Drop prefixless expressions in POM
description: MNG-7404 drops support for prefixless in POMs. This recipe will add the `project.` prefix where missing.
recipeList:
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: basedir
      newKey: project.basedir
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: build.timestamp
      newKey: project.build.timestamp
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: groupId
      newKey: project.groupId
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: artifactId
      newKey: project.artifactId
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: version
      newKey: project.version
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: pom.version
      newKey: project.version

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.cleanup.PrefixlessExpressions)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Geoffrey De Smet](mailto:gds.geoffrey.de.smet@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
