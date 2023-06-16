# Ensure Azure SQL server audit log retention is greater than 90 days

**org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days**

_Ensure Azure SQL server audit log retention is greater than 90 days._

### Tags

* Azure
* terraform
* CKV_AZURE_24

## Source

[GitHub](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/azure.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-terraform/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-terraform:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:2.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>2.0.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days
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

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)
* [pocan101](jcortesd@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
