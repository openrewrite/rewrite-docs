---
sidebar_label: "Inline methods annotated with `@InlineMe`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Inline methods annotated with `@InlineMe`

**org.openrewrite.recipes.rewrite.InlineMethods**

_Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/resources/META-INF/rewrite/inline-rewrite-methods.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-rewrite/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.maven.trait.Traits mavenDependency()`
  * replacement: `new MavenDependency.Matcher()`
  * imports: `[org.openrewrite.maven.MavenDependency]`
  * classpathFromResources: `[rewrite-maven-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.maven.trait.Traits mavenPlugin()`
  * replacement: `new MavenPlugin.Matcher()`
  * imports: `[org.openrewrite.maven.MavenPlugin]`
  * classpathFromResources: `[rewrite-maven-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.maven.ChangeParentPom ChangeParentPom(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.Boolean)`
  * replacement: `this(oldGroupId, newGroupId, oldArtifactId, newArtifactId, newVersion, oldRelativePath, newRelativePath, versionPattern, allowVersionDowngrades, null)`
  * classpathFromResources: `[rewrite-maven-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId ChangeDependencyGroupIdAndArtifactId(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)`
  * replacement: `this(oldGroupId, oldArtifactId, newGroupId, newArtifactId, newVersion, versionPattern, false, true)`
  * classpathFromResources: `[rewrite-maven-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.gradle.ChangeDependency ChangeDependency(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.Boolean)`
  * replacement: `this(oldGroupId, oldArtifactId, newGroupId, newArtifactId, newVersion, versionPattern, overrideManagedVersion, true)`
  * classpathFromResources: `[rewrite-gradle-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.gradle.trait.Traits gradleDependency()`
  * replacement: `new GradleDependency.Matcher()`
  * imports: `[org.openrewrite.gradle.GradleDependency]`
  * classpathFromResources: `[rewrite-gradle-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.gradle.trait.Traits jvmTestSuite()`
  * replacement: `new JvmTestSuite.Matcher()`
  * imports: `[org.openrewrite.gradle.JvmTestSuite]`
  * classpathFromResources: `[rewrite-gradle-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.java.ChangeMethodTargetToStatic ChangeMethodTargetToStatic(java.lang.String, java.lang.String, java.lang.String, java.lang.Boolean)`
  * replacement: `this(methodPattern, fullyQualifiedTargetTypeName, returnType, matchOverrides, false)`
  * classpathFromResources: `[rewrite-java-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.java.trait.Traits literal()`
  * replacement: `new Literal.Matcher()`
  * imports: `[org.openrewrite.java.Literal]`
  * classpathFromResources: `[rewrite-java-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.java.trait.Traits variableAccess()`
  * replacement: `new VariableAccess.Matcher()`
  * imports: `[org.openrewrite.java.VariableAccess]`
  * classpathFromResources: `[rewrite-java-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.java.trait.Traits methodAccess(org.openrewrite.java.MethodMatcher)`
  * replacement: `new MethodAccess.Matcher()`
  * imports: `[org.openrewrite.java.MethodAccess]`
  * classpathFromResources: `[rewrite-java-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.java.trait.Traits methodAccess(java.lang.String)`
  * replacement: `new MethodAccess.Matcher(signature)`
  * imports: `[org.openrewrite.java.MethodAccess]`
  * classpathFromResources: `[rewrite-java-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.java.trait.Traits annotated(org.openrewrite.java.AnnotationMatcher)`
  * replacement: `new MethodAccess.Matcher(declaringType, methodName, args)`
  * imports: `[org.openrewrite.java.MethodAccess]`
  * classpathFromResources: `[rewrite-java-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.java.trait.Traits annotated(java.lang.String)`
  * replacement: `new Annotated.Matcher(signature)`
  * imports: `[org.openrewrite.java.Annotated]`
  * classpathFromResources: `[rewrite-java-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.java.trait.Traits annotated(java.lang.Class)`
  * replacement: `new Annotated.Matcher(annotationType)`
  * imports: `[org.openrewrite.java.Annotated]`
  * classpathFromResources: `[rewrite-java-8.62.3]`
* [Inline method calls](../../java/inlinemethodcalls)
  * methodPattern: `org.openrewrite.staticanalysis.RemoveUnusedLocalVariables RemoveUnusedLocalVariables(java.lang.String[], java.lang.Boolean)`
  * replacement: `new RemoveUnusedLocalVariables(ignoreVariablesNamed, null, withSideEffects)`
  * classpathFromResources: `[rewrite-static-analysis-2.17.0]`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.recipes.rewrite.InlineMethods
displayName: Inline methods annotated with `@InlineMe`
description: |
  Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table.
recipeList:
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.maven.trait.Traits mavenDependency()
      replacement: new MavenDependency.Matcher()
      imports: [org.openrewrite.maven.MavenDependency]
      classpathFromResources: [rewrite-maven-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.maven.trait.Traits mavenPlugin()
      replacement: new MavenPlugin.Matcher()
      imports: [org.openrewrite.maven.MavenPlugin]
      classpathFromResources: [rewrite-maven-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.maven.ChangeParentPom ChangeParentPom(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.Boolean)
      replacement: this(oldGroupId, newGroupId, oldArtifactId, newArtifactId, newVersion, oldRelativePath, newRelativePath, versionPattern, allowVersionDowngrades, null)
      classpathFromResources: [rewrite-maven-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId ChangeDependencyGroupIdAndArtifactId(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)
      replacement: this(oldGroupId, oldArtifactId, newGroupId, newArtifactId, newVersion, versionPattern, false, true)
      classpathFromResources: [rewrite-maven-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.gradle.ChangeDependency ChangeDependency(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.Boolean)
      replacement: this(oldGroupId, oldArtifactId, newGroupId, newArtifactId, newVersion, versionPattern, overrideManagedVersion, true)
      classpathFromResources: [rewrite-gradle-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.gradle.trait.Traits gradleDependency()
      replacement: new GradleDependency.Matcher()
      imports: [org.openrewrite.gradle.GradleDependency]
      classpathFromResources: [rewrite-gradle-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.gradle.trait.Traits jvmTestSuite()
      replacement: new JvmTestSuite.Matcher()
      imports: [org.openrewrite.gradle.JvmTestSuite]
      classpathFromResources: [rewrite-gradle-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.java.ChangeMethodTargetToStatic ChangeMethodTargetToStatic(java.lang.String, java.lang.String, java.lang.String, java.lang.Boolean)
      replacement: this(methodPattern, fullyQualifiedTargetTypeName, returnType, matchOverrides, false)
      classpathFromResources: [rewrite-java-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.java.trait.Traits literal()
      replacement: new Literal.Matcher()
      imports: [org.openrewrite.java.Literal]
      classpathFromResources: [rewrite-java-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.java.trait.Traits variableAccess()
      replacement: new VariableAccess.Matcher()
      imports: [org.openrewrite.java.VariableAccess]
      classpathFromResources: [rewrite-java-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.java.trait.Traits methodAccess(org.openrewrite.java.MethodMatcher)
      replacement: new MethodAccess.Matcher()
      imports: [org.openrewrite.java.MethodAccess]
      classpathFromResources: [rewrite-java-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.java.trait.Traits methodAccess(java.lang.String)
      replacement: new MethodAccess.Matcher(signature)
      imports: [org.openrewrite.java.MethodAccess]
      classpathFromResources: [rewrite-java-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.java.trait.Traits annotated(org.openrewrite.java.AnnotationMatcher)
      replacement: new MethodAccess.Matcher(declaringType, methodName, args)
      imports: [org.openrewrite.java.MethodAccess]
      classpathFromResources: [rewrite-java-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.java.trait.Traits annotated(java.lang.String)
      replacement: new Annotated.Matcher(signature)
      imports: [org.openrewrite.java.Annotated]
      classpathFromResources: [rewrite-java-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.java.trait.Traits annotated(java.lang.Class)
      replacement: new Annotated.Matcher(annotationType)
      imports: [org.openrewrite.java.Annotated]
      classpathFromResources: [rewrite-java-8.62.3]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: org.openrewrite.staticanalysis.RemoveUnusedLocalVariables RemoveUnusedLocalVariables(java.lang.String[], java.lang.Boolean)
      replacement: new RemoveUnusedLocalVariables(ignoreVariablesNamed, null, withSideEffects)
      classpathFromResources: [rewrite-static-analysis-2.17.0]

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [OpenRewrite recipe best practices](/recipes/recipes/rewrite/openrewriterecipebestpractices.md)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-rewrite` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.recipes.rewrite.InlineMethods")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-rewrite:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-rewrite:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.recipes.rewrite.InlineMethods")
        setExportDatatables(true)
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

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.recipes.rewrite.InlineMethods</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-rewrite</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-rewrite:RELEASE -Drewrite.activeRecipes=org.openrewrite.recipes.rewrite.InlineMethods -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe InlineMethods
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-rewrite:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.recipes.rewrite.InlineMethods" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
