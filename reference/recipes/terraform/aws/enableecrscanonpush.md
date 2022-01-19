# Scan images pushed to ECR

** org.openrewrite.terraform.aws.EnableECRScanOnPush**
_ECR Image Scanning assesses and identifies operating system vulnerabilities. Using automated image scans you can ensure container image vulnerabilities are found before getting pushed to production._

### Tags

* CKV_AWS_33
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
    id("org.openrewrite.rewrite") version("5.15.5")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnableECRScanOnPush")
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
        <version>4.17.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnableECRScanOnPush</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.aws.EnableECRScanOnPush`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `aws_ecr_repository`
  * content: `image_scanning_configuration {
  scan_on_push = true
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.EnableECRScanOnPush
displayName: Scan images pushed to ECR
description: ECR Image Scanning assesses and identifies operating system vulnerabilities. Using automated image scans you can ensure container image vulnerabilities are found before getting pushed to production.
tags:
  - CKV_AWS_33
  - terraform
  - AWS
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: aws_ecr_repository
      content: image_scanning_configuration {
  scan_on_push = true
}

```
{% endtab %}
{% endtabs %}
