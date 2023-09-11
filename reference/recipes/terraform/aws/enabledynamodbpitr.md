# Enable point-in-time recovery for DynamoDB

**org.openrewrite.terraform.aws.EnableDynamoDbPITR**

_DynamoDB Point-In-Time Recovery (PITR) is an automatic backup service for DynamoDB table data that helps protect your DynamoDB tables from accidental write or delete operations._

### Tags

* terraform
* AWS
* CKV_AWS_28

## Source

[GitHub](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/aws.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-terraform/2.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 2.0.3


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-terraform:2.0.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnableDynamoDbPITR")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:2.0.3")
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
        <version>5.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnableDynamoDbPITR</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>2.0.3</version>
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
  -Drewrite.activeRecipes=org.openrewrite.terraform.aws.EnableDynamoDbPITR
```
{% endcode %}
{% endtab %}
{% endtabs %}

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

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [pocan101](mailto:jcortesd@gmail.com)
* [Kun Li](mailto:kun@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Sam Snyder](mailto:sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.terraform.aws.EnableDynamoDbPITR)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
