# Ensure RDS database has IAM authentication enabled

** org.openrewrite.terraform.aws.EnsureRDSDatabaseHasIAMAuthenticationEnabled**
_Ensure RDS database has IAM authentication enabled._

### Tags

* terraform
* AWS
* CKV_AWS_161

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.5.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.5.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.5.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.20.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnsureRDSDatabaseHasIAMAuthenticationEnabled")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.5.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.23.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnsureRDSDatabaseHasIAMAuthenticationEnabled</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.5.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.terraform.aws.EnsureRDSDatabaseHasIAMAuthenticationEnabled`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `aws_db_instance`
  * content: `iam_database_authentication_enabled = true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.EnsureRDSDatabaseHasIAMAuthenticationEnabled
displayName: Ensure RDS database has IAM authentication enabled
description: Ensure RDS database has IAM authentication enabled.
tags:
  - terraform
  - AWS
  - CKV_AWS_161
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: aws_db_instance
      content: iam_database_authentication_enabled = true

```
{% endtab %}
{% endtabs %}
