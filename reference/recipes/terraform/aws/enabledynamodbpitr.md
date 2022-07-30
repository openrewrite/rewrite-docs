# Enable point-in-time recovery for DynamoDB

** org.openrewrite.terraform.aws.EnableDynamoDbPITR**
_DynamoDB Point-In-Time Recovery (PITR) is an automatic backup service for DynamoDB table data that helps protect your DynamoDB tables from accidental write or delete operations._

### Tags

* terraform
* AWS
* CKV_AWS_28

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.8.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.25.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnableDynamoDbPITR")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.8.0")
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
        <version>4.30.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnableDynamoDbPITR</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.8.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.terraform.aws.EnableDynamoDbPITR`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `aws_dynamodb_table`
  * content: `point_in_time_recovery {
  enabled = true
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.EnableDynamoDbPITR
displayName: Enable point-in-time recovery for DynamoDB
description: DynamoDB Point-In-Time Recovery (PITR) is an automatic backup service for DynamoDB table data that helps protect your DynamoDB tables from accidental write or delete operations.
tags:
  - terraform
  - AWS
  - CKV_AWS_28
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: aws_dynamodb_table
      content: point_in_time_recovery {
  enabled = true
}

```
{% endtab %}
{% endtabs %}
