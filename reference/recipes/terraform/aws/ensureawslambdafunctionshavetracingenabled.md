# Ensure AWS Lambda functions have tracing enabled

** org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionsHaveTracingEnabled**
_Ensure AWS Lambda functions have tracing enabled._

### Tags

* CKV_AWS_50
* terraform
* AWS

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.13.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.13.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.13.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.31.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionsHaveTracingEnabled")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.13.0")
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionsHaveTracingEnabled</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.13.0</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.36.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:1.13.0 \
  -DactiveRecipes=org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionsHaveTracingEnabled
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionsHaveTracingEnabled`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `aws_lambda_function`
  * content: `tracing_config {
  mode = "Active"
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionsHaveTracingEnabled
displayName: Ensure AWS Lambda functions have tracing enabled
description: Ensure AWS Lambda functions have tracing enabled.
tags:
  - CKV_AWS_50
  - terraform
  - AWS
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: aws_lambda_function
      content: tracing_config {
  mode = "Active"
}

```
{% endtab %}
{% endtabs %}
