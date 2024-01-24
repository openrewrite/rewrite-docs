# Ensure Azure SQL server audit log retention is greater than 90 days

**org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days**

_Ensure Azure SQL server audit log retention is greater than 90 days._

### Tags

* Azure
* terraform
* CKV_AZURE_24

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/azure.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-terraform/2.1.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 2.1.3

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-terraform:2.1.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.7.1")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:2.1.3")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.7.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-terraform:2.1.3")
    }
    rewrite {
        activeRecipe("org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
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
        <version>5.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>2.1.3</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:RELEASE -Drewrite.activeRecipes=org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_sql_server`
  * content: `extended_auditing_policy {
  retention_in_days = 90
}`
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_mssql_server`
  * content: `extended_auditing_policy {
  retention_in_days = 90
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days
displayName: Ensure Azure SQL server audit log retention is greater than 90 days
description: Ensure Azure SQL server audit log retention is greater than 90 days.
tags:
  - Azure
  - terraform
  - CKV_AZURE_24
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_sql_server
      content: extended_auditing_policy {
  retention_in_days = 90
}
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_mssql_server
      content: extended_auditing_policy {
  retention_in_days = 90
}

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [pocan101](mailto:jcortesd@gmail.com), [Kun Li](mailto:kun@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Sam Snyder](mailto:sam@moderne.io)
