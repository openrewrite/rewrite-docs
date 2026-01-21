---
sidebar_label: "Replace `actions/setup-python` with `astral-sh/setup-uv`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `actions/setup-python` with `astral-sh/setup-uv`

**org.openrewrite.github.SetupPythonToUv**

Replace `actions/setup-python` action with `astral-sh/setup-uv` action for faster Python environment setup and dependency management.

**Benefits of UV:**
 - Significantly faster package installation and environment setup
 - Built-in dependency resolution and locking
 - Integrated caching for improved CI performance
 - Drop-in replacement for pip workflows

**Transformations applied:**
 - `actions/setup-python@v5` → `astral-sh/setup-uv@v6`
 - `cache: 'pip'` → `enable-cache: 'true'`
 - `pip install -r requirements.txt` → `uv sync` (configurable strategy)
 - `python -m <module>` → `uv run <module>`
 - Removes unnecessary `pip install --upgrade pip` steps

**Sync strategies:**
 - `basic`: Basic synchronization (`uv sync`)
 - `locked`: Use locked dependencies (`uv sync --locked`)
 - `full`: Install all extras and dev dependencies (`uv sync --all-extras --dev`)

See the [UV GitHub integration guide](https://docs.astral.sh/uv/guides/integration/github/) for more details.

## Recipe source

[GitHub: SetupPythonToUv.java](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/SetupPythonToUv.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | uvVersion | *Optional*. The version of the `astral-sh/setup-uv` action to use. Defaults to `v6`. | `v6` |
| `String` | syncStrategy | *Optional*. Strategy for the `uv sync` command replacement. Valid options: `basic`, `locked`, `full` | `locked` |
| `Boolean` | transformPipCommands | *Optional*. Whether to transform `pip install` commands to `uv` equivalents:<br />- `pip install -r requirements.txt` → `uv sync`<br />- `pip install .` → `uv sync`<br />- `python -m pytest` → `uv run pytest`<br /><br />When disabled, only the action itself is replaced. Defaults to `true`. | `true` |
| `Boolean` | enableCache | *Optional*. Whether to automatically convert `cache: 'pip'` to `enable-cache: 'true'` for UV's built-in caching. When disabled, cache settings are left unchanged. Defaults to `true`. | `true` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|uvVersion|`null`|
|syncStrategy|`null`|
|transformPipCommands|`null`|
|enableCache|`null`|


<Tabs groupId="beforeAfter">
<TabItem value=".github/workflows/test.yml" label=".github/workflows/test.yml">


###### Before
```yaml title=".github/workflows/test.yml"
name: Test

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      - run: pip install -r requirements.txt
      - run: python -m pytest
```

###### After
```yaml title=".github/workflows/test.yml"
name: Test

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: astral-sh/setup-uv@v6
        with:
          python-version: '3.11'
      - run: uv sync
      - run: uv run pytest
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/workflows/test.yml
+++ .github/workflows/test.yml
@@ -10,1 +10,1 @@
    steps:
      - uses: actions/checkout@v4
-     - uses: actions/setup-python@v5
+     - uses: astral-sh/setup-uv@v6
        with:
@@ -13,2 +13,2 @@
        with:
          python-version: '3.11'
-     - run: pip install -r requirements.txt
-     - run: python -m pytest
+     - run: uv sync
+     - run: uv run pytest

```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-github-actions` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.github.SetupPythonToUv")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-github-actions:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.github.SetupPythonToUv")
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
            <recipe>org.openrewrite.github.SetupPythonToUv</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-github-actions:RELEASE -Drewrite.activeRecipes=org.openrewrite.github.SetupPythonToUv -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SetupPythonToUv
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-github-actions:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.SetupPythonToUv" />

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

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

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
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
