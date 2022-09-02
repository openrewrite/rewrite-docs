# Ensure VPC subnets do not assign public IP by default

** org.openrewrite.terraform.aws.EnsureVPCSubnetsDoNotAssignPublicIPByDefault**
_Ensure VPC subnets do not assign public IP by default._

### Tags

* terraform
* AWS
* CKV_AWS_130

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.10.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.10.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.10.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.28.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.EnsureVPCSubnetsDoNotAssignPublicIPByDefault")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.10.0")
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
        <version>4.33.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.EnsureVPCSubnetsDoNotAssignPublicIPByDefault</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.10.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.33.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:1.10.0 \
  -DactiveRecipes=org.openrewrite.terraform.aws.EnsureVPCSubnetsDoNotAssignPublicIPByDefault
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.terraform.aws.EnsureVPCSubnetsDoNotAssignPublicIPByDefault`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `aws_subnet`
  * content: `map_public_ip_on_launch = false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.EnsureVPCSubnetsDoNotAssignPublicIPByDefault
displayName: Ensure VPC subnets do not assign public IP by default
description: Ensure VPC subnets do not assign public IP by default.
tags:
  - terraform
  - AWS
  - CKV_AWS_130
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: aws_subnet
      content: map_public_ip_on_launch = false

```
{% endtab %}
{% endtabs %}
