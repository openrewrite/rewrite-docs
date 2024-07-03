# Migrate to Struts 6.0 constants

**org.openrewrite.java.struts.migrate6.MigrateStruts6Constants**

_All Xwork constants had been already deprecated, with this version all of them have been removed and Struts constants have been used instead._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-struts/blob/main/src/main/resources/META-INF/rewrite/struts6.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-struts/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-struts/0.4.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-struts
* version: 0.4.5

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-struts:0.4.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.struts.migrate6.MigrateStruts6Constants")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-struts:0.4.5")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-struts:0.4.5")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.struts.migrate6.MigrateStruts6Constants")
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
        <version>5.35.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.struts.migrate6.MigrateStruts6Constants</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-struts</artifactId>
            <version>0.4.5</version>
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

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-struts:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.struts.migrate6.MigrateStruts6Constants 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MigrateStruts6Constants
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.converter.collection`
  * oldValue: `collectionConverter`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.converter.date`
  * oldValue: `dateConverter`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.converter.number`
  * oldValue: `numberConverter`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.converter.string`
  * oldValue: `stringConverter`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.converter.array`
  * oldValue: `arrayConverter`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.devMode`
  * oldValue: `devMode`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.ognl.logMissingProperties`
  * oldValue: `logMissingProperties`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.ognl.enableExpressionCache`
  * oldValue: `enableOGNLExpressionCache`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.ognl.enableEvalExpression`
  * oldValue: `enableOGNLEvalExpression`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.configuration.xml.reload`
  * oldValue: `reloadXmlConfiguration`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.ognl.allowStaticMethodAccess`
  * oldValue: `allowStaticMethodAccess`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.excludedClasses`
  * oldValue: `ognlExcludedClasses`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.excludedPackageNamePatterns`
  * oldValue: `ognlExcludedPackageNamePatterns`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.excludedPackageNames`
  * oldValue: `ognlExcludedPackageNames`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.additional.excludedPatterns`
  * oldValue: `additionalExcludedPatterns`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.additional.acceptedPatterns`
  * oldValue: `additionalAcceptedPatterns`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.override.excludedPatterns`
  * oldValue: `overrideExcludedPatterns`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.override.acceptedPatterns`
  * oldValue: `overrideAcceptedPatterns`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.chaining.copyErrors`
  * oldValue: `struts.xwork.chaining.copyErrors`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.chaining.copyFieldErrors`
  * oldValue: `struts.xwork.chaining.copyFieldErrors`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.chaining.copyMessages`
  * oldValue: `struts.xwork.chaining.copyMessages`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.ognl.autoGrowthCollectionLimit`
  * oldValue: `xwork.autoGrowCollectionLimit`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.objectFactory.classloader`
  * oldValue: `objectFactory.classloader`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.struts.migrate6.MigrateStruts6Constants
displayName: Migrate to Struts 6.0 constants
description: All Xwork constants had been already deprecated, with this version all of them have been removed and Struts constants have been used instead.
recipeList:
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.converter.collection
      oldValue: collectionConverter
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.converter.date
      oldValue: dateConverter
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.converter.number
      oldValue: numberConverter
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.converter.string
      oldValue: stringConverter
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.converter.array
      oldValue: arrayConverter
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.devMode
      oldValue: devMode
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.ognl.logMissingProperties
      oldValue: logMissingProperties
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.ognl.enableExpressionCache
      oldValue: enableOGNLExpressionCache
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.ognl.enableEvalExpression
      oldValue: enableOGNLEvalExpression
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.configuration.xml.reload
      oldValue: reloadXmlConfiguration
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.ognl.allowStaticMethodAccess
      oldValue: allowStaticMethodAccess
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.excludedClasses
      oldValue: ognlExcludedClasses
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.excludedPackageNamePatterns
      oldValue: ognlExcludedPackageNamePatterns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.excludedPackageNames
      oldValue: ognlExcludedPackageNames
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.additional.excludedPatterns
      oldValue: additionalExcludedPatterns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.additional.acceptedPatterns
      oldValue: additionalAcceptedPatterns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.override.excludedPatterns
      oldValue: overrideExcludedPatterns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.override.acceptedPatterns
      oldValue: overrideAcceptedPatterns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.chaining.copyErrors
      oldValue: struts.xwork.chaining.copyErrors
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.chaining.copyFieldErrors
      oldValue: struts.xwork.chaining.copyFieldErrors
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.chaining.copyMessages
      oldValue: struts.xwork.chaining.copyMessages
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.ognl.autoGrowthCollectionLimit
      oldValue: xwork.autoGrowCollectionLimit
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.objectFactory.classloader
      oldValue: objectFactory.classloader

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.struts.migrate6.MigrateStruts6Constants)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
