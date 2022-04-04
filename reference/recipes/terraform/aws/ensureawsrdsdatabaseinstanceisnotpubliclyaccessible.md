# Ensure AWS RDS database instance is not publicly accessible

** org.openrewrite.terraform.aws.EnsureAWSRDSDatabaseInstanceIsNotPubliclyAccessible**
_Ensure AWS RDS database instance is not publicly accessible._

### Tags

* terraform
* AWS
* CKV_AWS_17

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
    activeRecipe("org.openrewrite.terraform.aws.EnsureAWSRDSDatabaseInstanceIsNotPubliclyAccessible")
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
            <recipe>org.openrewrite.terraform.aws.EnsureAWSRDSDatabaseInstanceIsNotPubliclyAccessible</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.aws.EnsureAWSRDSDatabaseInstanceIsNotPubliclyAccessible`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `aws_db_instance`
  * content: `publicly_accessible = false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.EnsureAWSRDSDatabaseInstanceIsNotPubliclyAccessible
displayName: Ensure AWS RDS database instance is not publicly accessible
description: Ensure AWS RDS database instance is not publicly accessible.
tags:
  - terraform
  - AWS
  - CKV_AWS_17
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: aws_db_instance
      content: publicly_accessible = false

```
{% endtab %}
{% endtabs %}
