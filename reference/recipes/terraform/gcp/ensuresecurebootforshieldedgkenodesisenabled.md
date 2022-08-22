# Ensure secure boot for shielded GKE nodes is enabled

** org.openrewrite.terraform.gcp.EnsureSecureBootForShieldedGKENodesIsEnabled**
_Ensure secure boot for shielded GKE nodes is enabled._

### Tags

* GCP
* CKV_GCP_68
* terraform

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.9.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.9.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.9.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.27.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.gcp.EnsureSecureBootForShieldedGKENodesIsEnabled")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.9.1")
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
        <version>4.32.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.gcp.EnsureSecureBootForShieldedGKENodesIsEnabled</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.9.1</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.terraform.gcp.EnsureSecureBootForShieldedGKENodesIsEnabled`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `google_container_cluster`
  * content: `node_config {
  shielded_instance_config {
    enable_secure_boot = true
  }
}`
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `google_container_node_pool`
  * content: `node_config {
  shielded_instance_config {
    enable_secure_boot = true
  }
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.gcp.EnsureSecureBootForShieldedGKENodesIsEnabled
displayName: Ensure secure boot for shielded GKE nodes is enabled
description: Ensure secure boot for shielded GKE nodes is enabled.
tags:
  - GCP
  - CKV_GCP_68
  - terraform
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: google_container_cluster
      content: node_config {
  shielded_instance_config {
    enable_secure_boot = true
  }
}
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: google_container_node_pool
      content: node_config {
  shielded_instance_config {
    enable_secure_boot = true
  }
}

```
{% endtab %}
{% endtabs %}
