# Ensure AWS Lambda function is configured for function-level concurrent execution limit

**org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionIsConfiguredForFunctionLevelConcurrentExecutionLimit**

_Ensure AWS Lambda function is configured for function-level concurrent execution limit._

### Tags

* CKV_AWS_115
* terraform
* AWS

## Source

[GitHub](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/aws.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-terraform/2.0.1/jar)

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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionIsConfiguredForFunctionLevelConcurrentExecutionLimit")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionIsConfiguredForFunctionLevelConcurrentExecutionLimit</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionIsConfiguredForFunctionLevelConcurrentExecutionLimit
```
{% endcode %}
{% endtab %}
{% endtabs %}

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

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)
* [pocan101](jcortesd@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionIsConfiguredForFunctionLevelConcurrentExecutionLimit)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
