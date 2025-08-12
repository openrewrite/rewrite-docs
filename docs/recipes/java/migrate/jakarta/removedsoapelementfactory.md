---
sidebar_label: "Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`

**org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory**

_XML Web Services prior to 4.0 provides the deprecated SOAPElementFactory class, which is removed in XML Web Services 4.0. The recommended replacement is to use jakarta.xml.soap.SOAPFactory to create SOAPElements._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-10.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method name](../../../java/changemethodname)
  * methodPattern: `jakarta.xml.soap.SOAPElementFactory create(String,..)`
  * newMethodName: `createElement`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `jakarta.xml.soap.SOAPElementFactory create(jakarta.xml.soap.Name)`
  * newMethodName: `createElement`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.xml.soap.SOAPElementFactory`
  * newFullyQualifiedTypeName: `jakarta.xml.soap.SOAPFactory`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory
displayName: Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`
description: |
  XML Web Services prior to 4.0 provides the deprecated SOAPElementFactory class, which is removed in XML Web Services 4.0. The recommended replacement is to use jakarta.xml.soap.SOAPFactory to create SOAPElements.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.xml.soap.SOAPElementFactory create(String,..)
      newMethodName: createElement
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.xml.soap.SOAPElementFactory create(jakarta.xml.soap.Name)
      newMethodName: createElement
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.xml.soap.SOAPElementFactory
      newFullyQualifiedTypeName: jakarta.xml.soap.SOAPFactory

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Jakarta EE 10](/recipes/java/migrate/jakarta/jakartaee10.md)

## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.test;

import jakarta.xml.soap.Name;
import jakarta.xml.soap.SOAPElementFactory;
import jakarta.xml.soap.SOAPEnvelope;

public class Test {
    void test(SOAPEnvelope envelope) {
        String str1 = "test";
        String str2 = "t2";
        String str3 = "t3";
        Name n = envelope.createName("GetLastTradePrice", "WOMBAT", "http://www.abc.org/trader");
        SOAPElementFactory sfe = SOAPElementFactory.newInstance();
        sfe.create(str1);
        sfe.create(str1, str2, str3);
        sfe.create(n);
    }
}
```

###### After
```java
package com.test;

import jakarta.xml.soap.Name;
import jakarta.xml.soap.SOAPEnvelope;
import jakarta.xml.soap.SOAPFactory;

public class Test {
    void test(SOAPEnvelope envelope) {
        String str1 = "test";
        String str2 = "t2";
        String str3 = "t3";
        Name n = envelope.createName("GetLastTradePrice", "WOMBAT", "http://www.abc.org/trader");
        SOAPFactory sfe = SOAPFactory.newInstance();
        sfe.createElement(str1);
        sfe.createElement(str1, str2, str3);
        sfe.createElement(n);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,0 @@

import jakarta.xml.soap.Name;
-import jakarta.xml.soap.SOAPElementFactory;
import jakarta.xml.soap.SOAPEnvelope;
@@ -6,0 +5,1 @@
import jakarta.xml.soap.SOAPElementFactory;
import jakarta.xml.soap.SOAPEnvelope;
+import jakarta.xml.soap.SOAPFactory;

@@ -13,4 +13,4 @@
        String str3 = "t3";
        Name n = envelope.createName("GetLastTradePrice", "WOMBAT", "http://www.abc.org/trader");
-       SOAPElementFactory sfe = SOAPElementFactory.newInstance();
-       sfe.create(str1);
-       sfe.create(str1, str2, str3);
-       sfe.create(n);
+       SOAPFactory sfe = SOAPFactory.newInstance();
+       sfe.createElement(str1);
+       sfe.createElement(str1, str2, str3);
+       sfe.createElement(n);
    }
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.test;

import jakarta.xml.soap.Name;
import jakarta.xml.soap.SOAPElementFactory;
import jakarta.xml.soap.SOAPEnvelope;

public class Test {
    void test(SOAPEnvelope envelope) {
        String str1 = "test";
        String str2 = "t2";
        String str3 = "t3";
        Name n = envelope.createName("GetLastTradePrice", "WOMBAT", "http://www.abc.org/trader");
        SOAPElementFactory sfe = SOAPElementFactory.newInstance();
        sfe.create(str1);
        sfe.create(str1, str2, str3);
        sfe.create(n);
    }
}
```

###### After
```java
package com.test;

import jakarta.xml.soap.Name;
import jakarta.xml.soap.SOAPEnvelope;
import jakarta.xml.soap.SOAPFactory;

public class Test {
    void test(SOAPEnvelope envelope) {
        String str1 = "test";
        String str2 = "t2";
        String str3 = "t3";
        Name n = envelope.createName("GetLastTradePrice", "WOMBAT", "http://www.abc.org/trader");
        SOAPFactory sfe = SOAPFactory.newInstance();
        sfe.createElement(str1);
        sfe.createElement(str1, str2, str3);
        sfe.createElement(n);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,0 @@

import jakarta.xml.soap.Name;
-import jakarta.xml.soap.SOAPElementFactory;
import jakarta.xml.soap.SOAPEnvelope;
@@ -6,0 +5,1 @@
import jakarta.xml.soap.SOAPElementFactory;
import jakarta.xml.soap.SOAPEnvelope;
+import jakarta.xml.soap.SOAPFactory;

@@ -13,4 +13,4 @@
        String str3 = "t3";
        Name n = envelope.createName("GetLastTradePrice", "WOMBAT", "http://www.abc.org/trader");
-       SOAPElementFactory sfe = SOAPElementFactory.newInstance();
-       sfe.create(str1);
-       sfe.create(str1, str2, str3);
-       sfe.create(n);
+       SOAPFactory sfe = SOAPFactory.newInstance();
+       sfe.createElement(str1);
+       sfe.createElement(str1, str2, str3);
+       sfe.createElement(n);
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
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
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory")
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
            <recipe>org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe RemovedSOAPElementFactory
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory" />

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

ranuradh, Tim te Beek, Melloware
