# Use `StateManagementStrategy`

**org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods**

_Methods that were removed from the `jakarta.faces.application.StateManager` and `javax.faces.application.StateManager` classes in Jakarta Faces 4.0 are replaced by `jakarta.faces.view.StateManagementStrategy` or `javax.faces.view.StateManagementStrategy` based on Jakarta10 migration in Faces 4.0_

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-faces-4.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.5.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.5.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.5.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.5.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.6.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.5.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods")
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
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.17.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.5.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe RemovedStateManagerMethods
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `*.faces.application.StateManager getComponentStateToSave(*.faces.context.FacesContext)`
  * newMethodName: `saveView`
  * ignoreDefinition: `true`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `*.faces.application.StateManager getTreeStructureToSave(*.faces.context.FacesContext)`
  * newMethodName: `saveView`
  * ignoreDefinition: `true`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `*.faces.application.StateManager restoreComponentState(*.faces.context.FacesContext,*.faces.component.UIViewRoot,String)`
  * newMethodName: `restoreView`
  * ignoreDefinition: `true`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `*.faces.application.StateManager restoreTreeStructure(*.faces.context.FacesContext,String,String)`
  * newMethodName: `restoreView`
  * ignoreDefinition: `true`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `*.faces.application.StateManager saveSerializedView(*.faces.context.FacesContext)`
  * newMethodName: `saveView`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `jakarta.faces.application.StateManager`
  * newFullyQualifiedTypeName: `jakarta.faces.view.StateManagementStrategy`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.faces.application.StateManager`
  * newFullyQualifiedTypeName: `jakarta.faces.view.StateManagementStrategy`
  * ignoreDefinition: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods
displayName: Use `StateManagementStrategy`
description: Methods that were removed from the `jakarta.faces.application.StateManager` and `javax.faces.application.StateManager` classes in Jakarta Faces 4.0 are replaced by `jakarta.faces.view.StateManagementStrategy` or `javax.faces.view.StateManagementStrategy` based on Jakarta10 migration in Faces 4.0

recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: *.faces.application.StateManager getComponentStateToSave(*.faces.context.FacesContext)
      newMethodName: saveView
      ignoreDefinition: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: *.faces.application.StateManager getTreeStructureToSave(*.faces.context.FacesContext)
      newMethodName: saveView
      ignoreDefinition: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: *.faces.application.StateManager restoreComponentState(*.faces.context.FacesContext,*.faces.component.UIViewRoot,String)
      newMethodName: restoreView
      ignoreDefinition: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: *.faces.application.StateManager restoreTreeStructure(*.faces.context.FacesContext,String,String)
      newMethodName: restoreView
      ignoreDefinition: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: *.faces.application.StateManager saveSerializedView(*.faces.context.FacesContext)
      newMethodName: saveView
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.faces.application.StateManager
      newFullyQualifiedTypeName: jakarta.faces.view.StateManagementStrategy
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.faces.application.StateManager
      newFullyQualifiedTypeName: jakarta.faces.view.StateManagementStrategy
      ignoreDefinition: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
