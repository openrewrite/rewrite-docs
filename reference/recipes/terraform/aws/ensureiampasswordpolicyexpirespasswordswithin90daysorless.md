# Ensure IAM password policy expires passwords within 90 days or less

** org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyExpiresPasswordsWithin90DaysOrLess**
_Ensure IAM password policy expires passwords within 90 days or less._

### Tags

* CKV_AWS_9
* terraform
* AWS

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.11.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.11.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.11.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.29.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyExpiresPasswordsWithin90DaysOrLess")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.11.1")
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
        <version>4.34.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyExpiresPasswordsWithin90DaysOrLess</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.11.1</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:1.11.1 \
  -DactiveRecipes=org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyExpiresPasswordsWithin90DaysOrLess
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyExpiresPasswordsWithin90DaysOrLess`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `aws_iam_account_password_policy`
  * content: `max_password_age = 90`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyExpiresPasswordsWithin90DaysOrLess
displayName: Ensure IAM password policy expires passwords within 90 days or less
description: Ensure IAM password policy expires passwords within 90 days or less.
tags:
  - CKV_AWS_9
  - terraform
  - AWS
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: aws_iam_account_password_policy
      content: max_password_age = 90

```
{% endtab %}
{% endtabs %}
