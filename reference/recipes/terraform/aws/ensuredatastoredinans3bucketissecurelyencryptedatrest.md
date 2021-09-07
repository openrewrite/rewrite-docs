# Ensure data stored in an S3 bucket is securely encrypted at rest

 **org.openrewrite.terraform.aws.EnsureDataStoredInAnS3BucketIsSecurelyEncryptedAtRest** _Ensure data stored in an S3 bucket is securely encrypted at rest._

### Tags

* terraform
* AWS
* CKV\_AWS\_19

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/0.5.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 0.5.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:0.5.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.9.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnsureDataStoredInAnS3BucketIsSecurelyEncryptedAtRest")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:0.5.0")
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
        <version>4.11.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnsureDataStoredInAnS3BucketIsSecurelyEncryptedAtRest</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>0.5.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.aws.EnsureDataStoredInAnS3BucketIsSecurelyEncryptedAtRest`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../addconfiguration.md)
  * resourceName: `aws_s3_bucket`
  * content: \`server\_side\_encryption\_configuration {

    rule {

    apply\_server\_side\_encryption\_by\_default {

      sse\_algorithm = "AES256"

    }

    }

    }\`
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.EnsureDataStoredInAnS3BucketIsSecurelyEncryptedAtRest
displayName: Ensure data stored in an S3 bucket is securely encrypted at rest
description: Ensure data stored in an S3 bucket is securely encrypted at rest.
tags:
  - terraform
  - AWS
  - CKV_AWS_19
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: aws_s3_bucket
      content: server_side_encryption_configuration {
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}
```
{% endtab %}
{% endtabs %}

