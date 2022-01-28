# Ensure binary authorization is used

** org.openrewrite.terraform.gcp.EnsureBinaryAuthorizationIsUsed**
_Ensure binary authorization is used._

### Tags

* CKV_GCP_66
* GCP
* terraform

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
    id("org.openrewrite.rewrite") version("5.15.7")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.gcp.EnsureBinaryAuthorizationIsUsed")
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
        <version>4.17.3</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.gcp.EnsureBinaryAuthorizationIsUsed</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.terraform.gcp.EnsureBinaryAuthorizationIsUsed`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `google_container_cluster`
  * content: `enable_binary_authorization = true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.gcp.EnsureBinaryAuthorizationIsUsed
displayName: Ensure binary authorization is used
description: Ensure binary authorization is used.
tags:
  - CKV_GCP_66
  - GCP
  - terraform
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: google_container_cluster
      content: enable_binary_authorization = true

```
{% endtab %}
{% endtabs %}
