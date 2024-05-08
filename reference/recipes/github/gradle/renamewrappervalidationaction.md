# Rename `gradle/wrapper-validation-action` to `gradle/actions/wrapper-validation`

**org.openrewrite.github.gradle.RenameWrapperValidationAction**

_Rename the deprecated `gradle/wrapper-validation-action` to `gradle/actions/wrapper-validation@v3`._

### Tags

* gradle
* github

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/resources/META-INF/rewrite/gradle.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/2.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-github-actions
* version: 2.3.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-github-actions:2.3.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.13.0")
}

rewrite {
    activeRecipe("org.openrewrite.github.gradle.RenameWrapperValidationAction")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:2.3.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.13.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-github-actions:2.3.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.github.gradle.RenameWrapperValidationAction")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe RenameWrapperValidationAction
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change GitHub Action](../../github/changeaction.md)
  * oldAction: `gradle/wrapper-validation-action`
  * newAction: `gradle/actions/wrapper-validation`
  * newVersion: `v3`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.github.gradle.RenameWrapperValidationAction
displayName: Rename `gradle/wrapper-validation-action` to `gradle/actions/wrapper-validation`
description: Rename the deprecated `gradle/wrapper-validation-action` to `gradle/actions/wrapper-validation@v3`.
tags:
  - gradle
  - github
recipeList:
  - org.openrewrite.github.ChangeAction:
      oldAction: gradle/wrapper-validation-action
      newAction: gradle/actions/wrapper-validation
      newVersion: v3

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.github.gradle.RenameWrapperValidationAction)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
