# Enable VPC flow logs and intranode visibility

**org.openrewrite.terraform.gcp.EnableVPCFlowLogsAndIntranodeVisibility**
_Enable VPC flow logs and intranode visibility._

### Tags

* GCP
* terraform
* CKV_GCP_61

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.15.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.15.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.15.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.gcp.EnableVPCFlowLogsAndIntranodeVisibility")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.15.0")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.gcp.EnableVPCFlowLogsAndIntranodeVisibility</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.15.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:1.15.0 \
  -DactiveRecipes=org.openrewrite.terraform.gcp.EnableVPCFlowLogsAndIntranodeVisibility
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.terraform.gcp.EnableVPCFlowLogsAndIntranodeVisibility`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `google_container_cluster`
  * content: `enable_intranode_visibility = true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.gcp.EnableVPCFlowLogsAndIntranodeVisibility
displayName: Enable VPC flow logs and intranode visibility
description: Enable VPC flow logs and intranode visibility.
tags:
  - GCP
  - terraform
  - CKV_GCP_61
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: google_container_cluster
      content: enable_intranode_visibility = true

```
{% endtab %}
{% endtabs %}
