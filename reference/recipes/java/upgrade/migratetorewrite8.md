# Migrate rewrite from 7 to 8

**org.openrewrite.java.upgrade.MigrateToRewrite8**

_Migrate rewrite recipe and test from version 7 to version 8.
While most parts can be automatically migrated, there are some complex and open-ended scenarios that require manual attention.
In those cases, this recipe will add a comment to the code and request a human to review and handle it manually.
Reference : Migration guide (URL to be written)._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/resources/META-INF/rewrite/migrate-rewrite.yml), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.6


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.java.upgrade.MigrateToRewrite8")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.upgrade.MigrateToRewrite8</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.upgrade.MigrateToRewrite8
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate Rewrite recipes from version 7 to 8](../../java/recipes/migraterecipetorewrite8.md)
* [Migrate rewrite unit test from version 7 to 8](../../java/recipes/migratetesttorewrite8.md)
* [Migrate deprecated `org.openrewrite.marker.Markers#SearchResult(..)`](../../java/recipes/migratemarkerssearchresult.md)
* [Remove applicability test from Yaml recipe](../../java/recipes/removeapplicabilitytestfromyamlrecipe.md)
* [Migrate `JavaTemplate` to accommodate Rewrite 8](../../java/recipes/migratejavatemplatetorewrite8.md)
* [update referencing package name for the recipes moved to `rewrite-static-analysis`](../../java/upgrade/updatestaticanalysispackage.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
        ---
        type: specs.openrewrite.org/v1beta/recipe
        name: org.openrewrite.java.upgrade.MigrateToRewrite8
        displayName: Migrate rewrite from 7 to 8
        description: Migrate rewrite recipe and test from version 7 to version 8.
While most parts can be automatically migrated, there are some complex and open-ended scenarios that require manual attention.
In those cases, this recipe will add a comment to the code and request a human to review and handle it manually.
Reference : Migration guide (URL to be written).

recipeList:
  - org.openrewrite.java.recipes.MigrateRecipeToRewrite8
  - org.openrewrite.java.recipes.MigrateTestToRewrite8
  - org.openrewrite.java.recipes.MigrateMarkersSearchResult
  - org.openrewrite.java.recipes.RemoveApplicabilityTestFromYamlRecipe
  - org.openrewrite.java.recipes.MigrateJavaTemplateToRewrite8
  - org.openrewrite.java.upgrade.UpdateStaticAnalysisPackage

```
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](mailto:kun@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Mike Solomon](mailto:mike@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.upgrade.MigrateToRewrite8)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
