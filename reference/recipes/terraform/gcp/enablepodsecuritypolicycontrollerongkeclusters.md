# Enable `PodSecurityPolicy` controller on Google Kubernetes Engine (GKE) clusters

** org.openrewrite.terraform.gcp.EnablePodSecurityPolicyControllerOnGKEClusters**
_Ensure `PodSecurityPolicy` controller is enabled on Google Kubernetes Engine (GKE) clusters._

### Tags

* GCP
* CKV_GCP_24
* terraform

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
    activeRecipe("org.openrewrite.terraform.gcp.EnablePodSecurityPolicyControllerOnGKEClusters")
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
            <recipe>org.openrewrite.terraform.gcp.EnablePodSecurityPolicyControllerOnGKEClusters</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.gcp.EnablePodSecurityPolicyControllerOnGKEClusters`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `google_container_cluster`
  * content: `pod_security_policy_config {
  enabled = true
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.gcp.EnablePodSecurityPolicyControllerOnGKEClusters
displayName: Enable `PodSecurityPolicy` controller on Google Kubernetes Engine (GKE) clusters
description: Ensure `PodSecurityPolicy` controller is enabled on Google Kubernetes Engine (GKE) clusters.
tags:
  - GCP
  - CKV_GCP_24
  - terraform
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: google_container_cluster
      content: pod_security_policy_config {
  enabled = true
}

```
{% endtab %}
{% endtabs %}
