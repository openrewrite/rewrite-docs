# Ensure ECR repositories are encrypted

** org.openrewrite.terraform.aws.EnsureECRRepositoriesAreEncrypted**
_Ensure ECR repositories are encrypted._

### Tags

* CKV_AWS_136
* terraform
* AWS

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.4.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnsureECRRepositoriesAreEncrypted")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.4.0")
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
        <version>4.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnsureECRRepositoriesAreEncrypted</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.4.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.aws.EnsureECRRepositoriesAreEncrypted`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `aws_ecr_repository`
  * content: `encryption_configuration {
  encryption_type = "KMS"
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.EnsureECRRepositoriesAreEncrypted
displayName: Ensure ECR repositories are encrypted
description: Ensure ECR repositories are encrypted.
tags:
  - CKV_AWS_136
  - terraform
  - AWS
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: aws_ecr_repository
      content: encryption_configuration {
  encryption_type = "KMS"
}

```
{% endtab %}
{% endtabs %}
