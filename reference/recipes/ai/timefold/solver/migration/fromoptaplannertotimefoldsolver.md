# Migrate from OptaPlanner to Timefold Solver

**ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver**

_Replaces your method/field calls, GAVs, etc. To replace deprecated methods too, use the recipe ToLatest_

## Recipe source

[GitHub](https://github.com/search?type=code&q=ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.5.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
    }
    rewrite {
        activeRecipe("ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver")
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe FromOptaPlannerToTimefoldSolver
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.optaplanner.persistence.jackson.api.OptaPlannerJacksonModule`
  * newFullyQualifiedTypeName: `ai.timefold.solver.jackson.api.TimefoldJacksonModule`
  * ignoreDefinition: `true`
* [Rename package name](../../../../java/changepackage.md)
  * oldPackageName: `org.optaplanner.persistence.jackson`
  * newPackageName: `ai.timefold.solver.jackson`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage.md)
  * oldPackageName: `org.optaplanner.persistence.jaxb`
  * newPackageName: `ai.timefold.solver.jaxb`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage.md)
  * oldPackageName: `org.optaplanner.persistence.jsonb`
  * newPackageName: `ai.timefold.solver.jsonb`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage.md)
  * oldPackageName: `org.optaplanner.persistence.xstream`
  * newPackageName: `ai.timefold.solver.xstream`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage.md)
  * oldPackageName: `org.optaplanner.persistence.jpa`
  * newPackageName: `ai.timefold.solver.jpa`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage.md)
  * oldPackageName: `org.optaplanner`
  * newPackageName: `ai.timefold.solver`
  * recursive: `true`
* [Change property key](../../../../properties/changepropertykey.md)
  * oldPropertyKey: `^optaplanner\.(.*)`
  * newPropertyKey: `timefold.$1`
  * regex: `true`
* [Change property key](../../../../properties/changepropertykey.md)
  * oldPropertyKey: `^(%[^.]*\.)?quarkus\.optaplanner\.(.*)`
  * newPropertyKey: `$1quarkus.timefold.$2`
  * regex: `true`
* [Change property key](../../../../properties/changepropertykey.md)
  * oldPropertyKey: `^(%[^.]*\.)?quarkus\.log\.category\."org\.optaplanner"\.level`
  * newPropertyKey: `$1quarkus.log.category."ai.timefold.solver".level`
  * regex: `true`
* [Change property key](../../../../properties/changepropertykey.md)
  * oldPropertyKey: `^(%[^.]*\.)?logging\.level\.org\.optaplanner`
  * newPropertyKey: `$1logging.level.ai.timefold.solver`
  * regex: `true`
* [Change XML attribute](../../../../xml/changetagattribute.md)
  * elementName: `solver`
  * attributeName: `xmlns`
  * newValue: `https://timefold.ai/xsd/solver`
  * oldValue: `https://www.optaplanner.org/xsd/solver`
* [Change XML attribute](../../../../xml/changetagattribute.md)
  * elementName: `solver`
  * attributeName: `xsi:schemaLocation`
  * newValue: `https://timefold.ai/xsd/solver https://timefold.ai/xsd/solver/solver.xsd`
  * oldValue: `https://www.optaplanner.org/xsd/solver https://www.optaplanner.org/xsd/solver/solver.xsd`
* [Change XML attribute](../../../../xml/changetagattribute.md)
  * elementName: `plannerBenchmark`
  * attributeName: `xmlns`
  * newValue: `https://timefold.ai/xsd/benchmark`
  * oldValue: `https://www.optaplanner.org/xsd/benchmark`
* [Change XML attribute](../../../../xml/changetagattribute.md)
  * elementName: `plannerBenchmark`
  * attributeName: `xsi:schemaLocation`
  * newValue: `https://timefold.ai/xsd/benchmark https://timefold.ai/xsd/benchmark/benchmark.xsd`
  * oldValue: `https://www.optaplanner.org/xsd/benchmark https://www.optaplanner.org/xsd/benchmark/benchmark.xsd`
* [Change XML attribute](../../../../xml/changetagattribute.md)
  * elementName: `logger`
  * attributeName: `name`
  * newValue: `ai.timefold.solver`
  * oldValue: `org.optaplanner`
* [Change XML attribute](../../../../xml/changetagattribute.md)
  * elementName: `logger`
  * attributeName: `name`
  * newValue: `ai.timefold.solver`
  * oldValue: `org.optaplanner`
* [Migrate all Maven and Gradle groupIds and artifactIds from OptaPlanner to Timefold](../../../../ai/timefold/solver/migration/fork/timefoldchangedependencies.md)
* [Rename Maven property key](../../../../maven/renamepropertykey.md)
  * oldKey: `version.org.optaplanner`
  * newKey: `version.ai.timefold.solver`
* [Rename Maven property key](../../../../maven/renamepropertykey.md)
  * oldKey: `version.optaPlanner`
  * newKey: `version.timefold`
* [Rename Maven property key](../../../../maven/renamepropertykey.md)
  * oldKey: `version.optaplanner`
  * newKey: `version.timefold`
* [Rename Maven property key](../../../../maven/renamepropertykey.md)
  * oldKey: `org.optaplanner.version`
  * newKey: `ai.timefold.solver.version`
* [Rename Maven property key](../../../../maven/renamepropertykey.md)
  * oldKey: `optaPlanner.version`
  * newKey: `timefold.version`
* [Rename Maven property key](../../../../maven/renamepropertykey.md)
  * oldKey: `optaplanner.version`
  * newKey: `timefold.version`
* [Rename Maven property key](../../../../maven/renamepropertykey.md)
  * oldKey: `optaplannerVersion`
  * newKey: `timefoldVersion`
* [Rename Maven property key](../../../../maven/renamepropertykey.md)
  * oldKey: `optaPlannerVersion`
  * newKey: `timefoldVersion`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver
displayName: Migrate from OptaPlanner to Timefold Solver
description: Replaces your method/field calls, GAVs, etc. To replace deprecated methods too, use the recipe ToLatest
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.optaplanner.persistence.jackson.api.OptaPlannerJacksonModule
      newFullyQualifiedTypeName: ai.timefold.solver.jackson.api.TimefoldJacksonModule
      ignoreDefinition: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner.persistence.jackson
      newPackageName: ai.timefold.solver.jackson
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner.persistence.jaxb
      newPackageName: ai.timefold.solver.jaxb
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner.persistence.jsonb
      newPackageName: ai.timefold.solver.jsonb
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner.persistence.xstream
      newPackageName: ai.timefold.solver.xstream
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner.persistence.jpa
      newPackageName: ai.timefold.solver.jpa
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner
      newPackageName: ai.timefold.solver
      recursive: true
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: ^optaplanner\.(.*)
      newPropertyKey: timefold.$1
      regex: true
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: ^(%[^.]*\.)?quarkus\.optaplanner\.(.*)
      newPropertyKey: $1quarkus.timefold.$2
      regex: true
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: ^(%[^.]*\.)?quarkus\.log\.category\."org\.optaplanner"\.level
      newPropertyKey: $1quarkus.log.category."ai.timefold.solver".level
      regex: true
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: ^(%[^.]*\.)?logging\.level\.org\.optaplanner
      newPropertyKey: $1logging.level.ai.timefold.solver
      regex: true
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: solver
      attributeName: xmlns
      newValue: https://timefold.ai/xsd/solver
      oldValue: https://www.optaplanner.org/xsd/solver
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: solver
      attributeName: xsi:schemaLocation
      newValue: https://timefold.ai/xsd/solver https://timefold.ai/xsd/solver/solver.xsd
      oldValue: https://www.optaplanner.org/xsd/solver https://www.optaplanner.org/xsd/solver/solver.xsd
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: plannerBenchmark
      attributeName: xmlns
      newValue: https://timefold.ai/xsd/benchmark
      oldValue: https://www.optaplanner.org/xsd/benchmark
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: plannerBenchmark
      attributeName: xsi:schemaLocation
      newValue: https://timefold.ai/xsd/benchmark https://timefold.ai/xsd/benchmark/benchmark.xsd
      oldValue: https://www.optaplanner.org/xsd/benchmark https://www.optaplanner.org/xsd/benchmark/benchmark.xsd
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: logger
      attributeName: name
      newValue: ai.timefold.solver
      oldValue: org.optaplanner
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: logger
      attributeName: name
      newValue: ai.timefold.solver
      oldValue: org.optaplanner
  - ai.timefold.solver.migration.fork.TimefoldChangeDependencies
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: version.org.optaplanner
      newKey: version.ai.timefold.solver
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: version.optaPlanner
      newKey: version.timefold
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: version.optaplanner
      newKey: version.timefold
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: org.optaplanner.version
      newKey: ai.timefold.solver.version
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: optaPlanner.version
      newKey: timefold.version
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: optaplanner.version
      newKey: timefold.version
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: optaplannerVersion
      newKey: timefoldVersion
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: optaPlannerVersion
      newKey: timefoldVersion

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
