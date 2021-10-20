# Upgrade to Terraform 0.12.+

** org.openrewrite.terraform.terraform012.UpgradeTerraform\_0\_12**
_Applies changes commonly needed when upgrading from Terraform 0.11.latest to Terraform 0.12.+._

### Tags

* deprecated
* terraform

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
    id("org.openrewrite.rewrite") version("5.13.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.terraform012.UpgradeTerraform_0_12")
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
        <version>4.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.terraform012.UpgradeTerraform_0_12</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.terraform012.UpgradeTerraform_0_12`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade expressions](../../terraform/terraform012/upgradeexpressions.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.terraform012.UpgradeTerraform_0_12
displayName: Upgrade to Terraform 0.12.+
description: Applies changes commonly needed when upgrading from Terraform 0.11.latest to Terraform 0.12.+.
tags:
  - deprecated
  - terraform
recipeList:
  - org.openrewrite.terraform.terraform012.UpgradeExpressions

```
{% endtab %}
{% endtabs %}
