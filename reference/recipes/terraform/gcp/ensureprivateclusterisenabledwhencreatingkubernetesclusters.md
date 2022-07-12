# Ensure private cluster is enabled when creating Kubernetes clusters

** org.openrewrite.terraform.gcp.EnsurePrivateClusterIsEnabledWhenCreatingKubernetesClusters**
_Ensure private cluster is enabled when creating Kubernetes clusters._

### Tags

* GCP
* CKV_GCP_25
* terraform

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.8.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.24.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.gcp.EnsurePrivateClusterIsEnabledWhenCreatingKubernetesClusters")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.8.0")
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
        <version>4.27.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.gcp.EnsurePrivateClusterIsEnabledWhenCreatingKubernetesClusters</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.8.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.terraform.gcp.EnsurePrivateClusterIsEnabledWhenCreatingKubernetesClusters`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `google_container_cluster`
  * content: `private_cluster_config {
  enable_private_nodes = true
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.gcp.EnsurePrivateClusterIsEnabledWhenCreatingKubernetesClusters
displayName: Ensure private cluster is enabled when creating Kubernetes clusters
description: Ensure private cluster is enabled when creating Kubernetes clusters.
tags:
  - GCP
  - CKV_GCP_25
  - terraform
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: google_container_cluster
      content: private_cluster_config {
  enable_private_nodes = true
}

```
{% endtab %}
{% endtabs %}
