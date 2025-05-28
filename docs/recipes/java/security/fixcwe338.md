---
sidebar_label: "Fix CWE-338 with SecureRandom"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fix CWE-338 with `SecureRandom`

**org.openrewrite.java.security.FixCwe338**

_Use a cryptographically strong pseudo-random number generator (PRNG)._

### Tags

* CWE-338

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package au.com.suncorp.easyshare.services.util;
import org.apache.commons.lang.RandomStringUtils;
public final class RandomUtil {
    private RandomUtil() {
    }
    public static String generateString(int count) {
        return RandomStringUtils.randomAlphanumeric(count);
    }
}
```

###### After
```java
package au.com.suncorp.easyshare.services.util;

import org.apache.commons.lang.RandomStringUtils;

import java.security.SecureRandom;

public final class RandomUtil {
    private static final SecureRandom SECURE_RANDOM = new SecureRandom();
    private static final int DEF_COUNT = 20;

    static {
        SECURE_RANDOM.nextBytes(new byte[64]);
    }

    private RandomUtil() {
    }

    public static String generateString(int count) {
        return generateRandomAlphanumericString();
    }

    private static String generateRandomAlphanumericString() {
        return RandomStringUtils.random(DEF_COUNT, 0, 0, true, true, null, SECURE_RANDOM);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,0 +2,1 @@
package au.com.suncorp.easyshare.services.util;
+
import org.apache.commons.lang.RandomStringUtils;
@@ -3,0 +4,3 @@
package au.com.suncorp.easyshare.services.util;
import org.apache.commons.lang.RandomStringUtils;
+
+import java.security.SecureRandom;
+
public final class RandomUtil {
@@ -4,0 +8,7 @@
import org.apache.commons.lang.RandomStringUtils;
public final class RandomUtil {
+   private static final SecureRandom SECURE_RANDOM = new SecureRandom();
+   private static final int DEF_COUNT = 20;
+
+   static {
+       SECURE_RANDOM.nextBytes(new byte[64]);
+   }
+
    private RandomUtil() {
@@ -6,0 +17,1 @@
    private RandomUtil() {
    }
+
    public static String generateString(int count) {
@@ -7,1 +19,1 @@
    }
    public static String generateString(int count) {
-       return RandomStringUtils.randomAlphanumeric(count);
+       return generateRandomAlphanumericString();
    }
@@ -9,0 +21,4 @@
        return RandomStringUtils.randomAlphanumeric(count);
    }
+
+   private static String generateRandomAlphanumericString() {
+       return RandomStringUtils.random(DEF_COUNT, 0, 0, true, true, null, SECURE_RANDOM);
+   }
}
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FixCwe338
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-security:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.security.FixCwe338" />

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

## Contributors
[Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
