# Ensure AWS Lambda function is configured for function-level concurrent execution limit

** org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionIsConfiguredForFunctionLevelConcurrentExecutionLimit**
_Ensure AWS Lambda function is configured for function-level concurrent execution limit._

### Tags

* CKV_AWS_115
* terraform
* AWS

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.0.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.0.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.0.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.8")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionIsConfiguredForFunctionLevelConcurrentExecutionLimit")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.0.0")
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
        <version>4.17.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionIsConfiguredForFunctionLevelConcurrentExecutionLimit</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.0.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionIsConfiguredForFunctionLevelConcurrentExecutionLimit`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `aws_lambda_function`
  * content: `reserved_concurrent_executions = 0`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionIsConfiguredForFunctionLevelConcurrentExecutionLimit
displayName: Ensure AWS Lambda function is configured for function-level concurrent execution limit
description: Ensure AWS Lambda function is configured for function-level concurrent execution limit.
tags:
  - CKV_AWS_115
  - terraform
  - AWS
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: aws_lambda_function
      content: reserved_concurrent_executions = 0

```
{% endtab %}
{% endtabs %}
