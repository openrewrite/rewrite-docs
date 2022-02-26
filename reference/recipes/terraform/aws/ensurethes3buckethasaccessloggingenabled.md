# Ensure the S3 bucket has access logging enabled

** org.openrewrite.terraform.aws.EnsureTheS3BucketHasAccessLoggingEnabled**
_Ensure the S3 bucket has access logging enabled._

### Tags

* terraform
* CKV_AWS_18
* AWS

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.2.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.2.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.16.2")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnsureTheS3BucketHasAccessLoggingEnabled")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.2.0")
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
        <version>4.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnsureTheS3BucketHasAccessLoggingEnabled</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.2.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.aws.EnsureTheS3BucketHasAccessLoggingEnabled`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `aws_s3_bucket`
  * content: `logging {
  target_bucket = var.target_bucket
  target_prefix = "log/${var.s3_bucket_name}"
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.EnsureTheS3BucketHasAccessLoggingEnabled
displayName: Ensure the S3 bucket has access logging enabled
description: Ensure the S3 bucket has access logging enabled.
tags:
  - terraform
  - CKV_AWS_18
  - AWS
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: aws_s3_bucket
      content: logging {
  target_bucket = var.target_bucket
  target_prefix = "log/${var.s3_bucket_name}"
}

```
{% endtab %}
{% endtabs %}
