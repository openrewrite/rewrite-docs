---
sidebar_label: "Refaster template TestNGToAssertJRules.AssertEqualWithMessage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Refaster template `TestNGToAssertJRules.AssertEqualWithMessage`

**tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe**

Recipe created for the following Refaster template:
```java
@SuppressWarnings(value = "java:S1448")
static final class AssertEqualWithMessage {
    
    @BeforeTemplate
    void before(boolean actual, String message, boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(boolean actual, String message, Boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Boolean actual, String message, boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Boolean actual, String message, Boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(byte actual, String message, byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(byte actual, String message, Byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Byte actual, String message, byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Byte actual, String message, Byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(char actual, String message, char expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(char actual, String message, Character expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Character actual, String message, char expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Character actual, String message, Character expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(short actual, String message, short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(short actual, String message, Short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Short actual, String message, short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Short actual, String message, Short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(int actual, String message, int expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(int actual, String message, Integer expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Integer actual, String message, int expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Integer actual, String message, Integer expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(long actual, String message, long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(long actual, String message, Long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Long actual, String message, long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Long actual, String message, Long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(float actual, String message, float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(float actual, String message, Float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Float actual, String message, float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Float actual, String message, Float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(double actual, String message, double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(double actual, String message, Double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Double actual, String message, double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Double actual, String message, Double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Object actual, String message, Object expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(String actual, String message, String expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Map<?, ?> actual, String message, Map<?, ?> expected) {
        assertEquals(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message, Object expected) {
        assertThat(actual).withFailMessage(message).isEqualTo(expected);
    }
}
```
.

### Tags

* [RSPEC-S1448](https://sonarsource.github.io/rspec/#/rspec/S1448)

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
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
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe")
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
            <recipe>tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe" />

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
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

</TabItem>

</Tabs>
