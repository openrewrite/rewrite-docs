---
sidebar_label: "Migrate `cucumber-java8` to `cucumber-java`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate `cucumber-java8` to `cucumber-java`

**org.openrewrite.cucumber.jvm.CucumberJava8ToJava**

_Migrates `cucumber-java8` step definitions and `LambdaGlue` hooks to `cucumber-java` annotated methods._

### Tags

* [cucumber](/reference/recipes-by-tag#cucumber)
* [testing](/reference/recipes-by-tag#testing)

## Recipe source

[GitHub: cucumber.yml](https://github.com/openrewrite/rewrite-cucumber-jvm/blob/main/src/main/resources/META-INF/rewrite/cucumber.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-cucumber-jvm/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-cucumber-jvm/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace `cucumber-java8` hook definition with `cucumber-java`](../../cucumber/jvm/cucumberjava8hookdefinitiontocucumberjava)
* [Replace `cucumber-java8` step definitions with `cucumber-java`](../../cucumber/jvm/cucumberjava8stepdefinitiontocucumberjava)
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `io.cucumber`
  * oldArtifactId: `cucumber-java8`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-java`
* [Rename package name](../../java/changepackage)
  * oldPackageName: `io.cucumber.java8`
  * newPackageName: `io.cucumber.java`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cucumber.jvm.CucumberJava8ToJava
displayName: Migrate `cucumber-java8` to `cucumber-java`
description: |
  Migrates `cucumber-java8` step definitions and `LambdaGlue` hooks to `cucumber-java` annotated methods.
tags:
  - cucumber
  - testing
recipeList:
  - org.openrewrite.cucumber.jvm.CucumberJava8HookDefinitionToCucumberJava
  - org.openrewrite.cucumber.jvm.CucumberJava8StepDefinitionToCucumberJava
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.cucumber
      oldArtifactId: cucumber-java8
      newGroupId: io.cucumber
      newArtifactId: cucumber-java
  - org.openrewrite.java.ChangePackage:
      oldPackageName: io.cucumber.java8
      newPackageName: io.cucumber.java

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Cucumber-JVM 7.x](/recipes/cucumber/jvm/upgradecucumber7x.md)

## Examples
##### Example 1
`CucumberJava8ToCucumberJavaTest#cucumberJava8HooksAndSteps`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.example.app;

import io.cucumber.java8.En;
import io.cucumber.java8.Scenario;
import io.cucumber.java8.Status;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CucumberJava8Definitions implements En {

    private int a;

    public CucumberJava8Definitions() {
        Before(() -> {
            a = 0;
        });
        When("I add {int}", (Integer b) -> {
            a += b;
        });
        Then("I expect {int}", (Integer c) -> assertEquals(c, a));

        After((Scenario scn) -> {
            if (scn.getStatus() == Status.FAILED) {
                scn.log("failed");
            }
        });

    }

}
```

###### After
```java
package com.example.app;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.Scenario;
import io.cucumber.java.Status;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CucumberJava8Definitions {

    private int a;

    @Before
    public void before() {
        a = 0;
    }

    @After
    public void after(io.cucumber.java.Scenario scn) {
        if (scn.getStatus() == Status.FAILED) {
            scn.log("failed");
        }
    }

    @When("I add {int}")
    public void i_add_int(Integer b) {
        a += b;
    }

    @Then("I expect {int}")
    public void i_expect_int(Integer c) {
        assertEquals(c, a);
    }

}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,3 +3,6 @@
package com.example.app;

-import io.cucumber.java8.En;
-import io.cucumber.java8.Scenario;
-import io.cucumber.java8.Status;
+import io.cucumber.java.After;
+import io.cucumber.java.Before;
+import io.cucumber.java.en.Then;
+import io.cucumber.java.en.When;
+import io.cucumber.java.Scenario;
+import io.cucumber.java.Status;

@@ -9,1 +12,1 @@
import static org.junit.jupiter.api.Assertions.assertEquals;

-public class CucumberJava8Definitions implements En {
+public class CucumberJava8Definitions {

@@ -13,8 +16,4 @@
    private int a;

-   public CucumberJava8Definitions() {
-       Before(() -> {
-           a = 0;
-       });
-       When("I add {int}", (Integer b) -> {
-           a += b;
-       });
-       Then("I expect {int}", (Integer c) -> assertEquals(c, a));
+   @Before
+   public void before() {
+       a = 0;
+   }

@@ -22,5 +21,6 @@
        Then("I expect {int}", (Integer c) -> assertEquals(c, a));

-       After((Scenario scn) -> {
-           if (scn.getStatus() == Status.FAILED) {
-               scn.log("failed");
-           }
-       });
+   @After
+   public void after(io.cucumber.java.Scenario scn) {
+       if (scn.getStatus() == Status.FAILED) {
+           scn.log("failed");
+       }
+   }

@@ -28,0 +28,3 @@
        });

+   @When("I add {int}")
+   public void i_add_int(Integer b) {
+       a += b;
    }
@@ -30,0 +33,5 @@
    }

+   @Then("I expect {int}")
+   public void i_expect_int(Integer c) {
+       assertEquals(c, a);
+   }
+
}
@@ -31,0 +39,1 @@

}
+
```
</TabItem>
</Tabs>

---

##### Example 2
`CucumberJava8ToCucumberJavaTest#cucumberJava8HooksAndSteps`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.example.app;

import io.cucumber.java8.En;
import io.cucumber.java8.Scenario;
import io.cucumber.java8.Status;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CucumberJava8Definitions implements En {

    private int a;

    public CucumberJava8Definitions() {
        Before(() -> {
            a = 0;
        });
        When("I add {int}", (Integer b) -> {
            a += b;
        });
        Then("I expect {int}", (Integer c) -> assertEquals(c, a));

        After((Scenario scn) -> {
            if (scn.getStatus() == Status.FAILED) {
                scn.log("failed");
            }
        });

    }

}
```

###### After
```java
package com.example.app;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.Scenario;
import io.cucumber.java.Status;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CucumberJava8Definitions {

    private int a;

    @Before
    public void before() {
        a = 0;
    }

    @After
    public void after(io.cucumber.java.Scenario scn) {
        if (scn.getStatus() == Status.FAILED) {
            scn.log("failed");
        }
    }

    @When("I add {int}")
    public void i_add_int(Integer b) {
        a += b;
    }

    @Then("I expect {int}")
    public void i_expect_int(Integer c) {
        assertEquals(c, a);
    }

}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,3 +3,6 @@
package com.example.app;

-import io.cucumber.java8.En;
-import io.cucumber.java8.Scenario;
-import io.cucumber.java8.Status;
+import io.cucumber.java.After;
+import io.cucumber.java.Before;
+import io.cucumber.java.en.Then;
+import io.cucumber.java.en.When;
+import io.cucumber.java.Scenario;
+import io.cucumber.java.Status;

@@ -9,1 +12,1 @@
import static org.junit.jupiter.api.Assertions.assertEquals;

-public class CucumberJava8Definitions implements En {
+public class CucumberJava8Definitions {

@@ -13,8 +16,4 @@
    private int a;

-   public CucumberJava8Definitions() {
-       Before(() -> {
-           a = 0;
-       });
-       When("I add {int}", (Integer b) -> {
-           a += b;
-       });
-       Then("I expect {int}", (Integer c) -> assertEquals(c, a));
+   @Before
+   public void before() {
+       a = 0;
+   }

@@ -22,5 +21,6 @@
        Then("I expect {int}", (Integer c) -> assertEquals(c, a));

-       After((Scenario scn) -> {
-           if (scn.getStatus() == Status.FAILED) {
-               scn.log("failed");
-           }
-       });
+   @After
+   public void after(io.cucumber.java.Scenario scn) {
+       if (scn.getStatus() == Status.FAILED) {
+           scn.log("failed");
+       }
+   }

@@ -28,0 +28,3 @@
        });

+   @When("I add {int}")
+   public void i_add_int(Integer b) {
+       a += b;
    }
@@ -30,0 +33,5 @@
    }

+   @Then("I expect {int}")
+   public void i_expect_int(Integer c) {
+       assertEquals(c, a);
+   }
+
}
@@ -31,0 +39,1 @@

}
+
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.cucumber.jvm.CucumberJava8ToJava"
  displayName="Migrate `cucumber-java8` to `cucumber-java`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-cucumber-jvm"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CUCUMBER_JVM"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.cucumber.jvm.CucumberJava8ToJava" />

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
