---
sidebar_label: "Migrate multi-condition `@ConditionalOnBean` annotations"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate multi-condition `@ConditionalOnBean` annotations

**org.openrewrite.java.spring.boot2.ConditionalOnBeanAnyNestedCondition**

_Migrate multi-condition `@ConditionalOnBean` annotations to `AnyNestedCondition`._

## Recipe source

[GitHub: ConditionalOnBeanAnyNestedCondition.java](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/ConditionalOnBeanAnyNestedCondition.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate multi-condition `@ConditionalOnBean` annotations from Boot 1.x](/recipes/java/spring/boot2/conditionalonbeananynestedconditionboot1.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;

class ThingOne {}

class ThingTwo {}

class ConfigClass {
    @Bean
    @ConditionalOnBean({Aa.class, Bb.class})
    public ThingOne thingOne() {
        return new ThingOne();
    }
    @Bean
    @ConditionalOnBean({Bb.class, Aa.class})
    public ThingTwo thingTwo() {
        return new ThingTwo();
    }
}
```

###### After
```java
import org.springframework.boot.autoconfigure.condition.AnyNestedCondition;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;

class ThingOne {}

class ThingTwo {}

class ConfigClass {
    @Bean
    @Conditional(ConditionAaOrBb.class)
    public ThingOne thingOne() {
        return new ThingOne();
    }

    @Bean
    @Conditional(ConditionAaOrBb.class)
    public ThingTwo thingTwo() {
        return new ThingTwo();
    }

    private static class ConditionAaOrBb extends AnyNestedCondition {
        ConditionAaOrBb() {
            super(ConfigurationPhase.REGISTER_BEAN);
        }

        @ConditionalOnBean(Aa.class)
        class AaCondition {
        }

        @ConditionalOnBean(Bb.class)
        class BbCondition {
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,0 +1,1 @@
+import org.springframework.boot.autoconfigure.condition.AnyNestedCondition;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
@@ -3,0 +4,1 @@
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
+import org.springframework.context.annotation.Conditional;

@@ -10,1 +12,1 @@
class ConfigClass {
    @Bean
-   @ConditionalOnBean({Aa.class, Bb.class})
+   @Conditional(ConditionAaOrBb.class)
    public ThingOne thingOne() {
@@ -14,0 +16,1 @@
        return new ThingOne();
    }
+
    @Bean
@@ -15,1 +18,1 @@
    }
    @Bean
-   @ConditionalOnBean({Bb.class, Aa.class})
+   @Conditional(ConditionAaOrBb.class)
    public ThingTwo thingTwo() {
@@ -19,0 +22,14 @@
        return new ThingTwo();
    }
+
+   private static class ConditionAaOrBb extends AnyNestedCondition {
+       ConditionAaOrBb() {
+           super(ConfigurationPhase.REGISTER_BEAN);
+       }
+
+       @ConditionalOnBean(Aa.class)
+       class AaCondition {
+       }
+
+       @ConditionalOnBean(Bb.class)
+       class BbCondition {
+       }
+   }
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.boot2.ConditionalOnBeanAnyNestedCondition"
  displayName="Migrate multi-condition `@ConditionalOnBean` annotations"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.ConditionalOnBeanAnyNestedCondition" />

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
