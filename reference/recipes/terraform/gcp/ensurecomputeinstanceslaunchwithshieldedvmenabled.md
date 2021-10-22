# Ensure compute instances launch with shielded VM enabled

** org.openrewrite.terraform.gcp.EnsureComputeInstancesLaunchWithShieldedVMEnabled**
_Ensure compute instances launch with shielded VM enabled._

### Tags

* GCP
* terraform
* CKV_GCP_39

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/0.7.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 0.7.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:0.7.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.13.1")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.gcp.EnsureComputeInstancesLaunchWithShieldedVMEnabled")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:0.7.0")
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
        <version>4.13.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.gcp.EnsureComputeInstancesLaunchWithShieldedVMEnabled</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>0.7.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.gcp.EnsureComputeInstancesLaunchWithShieldedVMEnabled`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `google_compute_instance`
  * content: `shielded_instance_config {
  enable_integrity_monitoring = true
  enable_vtpm = true
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.gcp.EnsureComputeInstancesLaunchWithShieldedVMEnabled
displayName: Ensure compute instances launch with shielded VM enabled
description: Ensure compute instances launch with shielded VM enabled.
tags:
  - GCP
  - terraform
  - CKV_GCP_39
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: google_compute_instance
      content: shielded_instance_config {
  enable_integrity_monitoring = true
  enable_vtpm = true
}

```
{% endtab %}
{% endtabs %}
