---
sidebar_label: "Migrate Spring WS Axiom to SAAJ"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Spring WS Axiom to SAAJ

**org.openrewrite.java.spring.ws.MigrateAxiomToSaaj**

_Migrate from Apache Axiom SOAP message handling to SAAJ (SOAP with Attachments API for Java). Spring WS 4.0.x removed support for Apache Axiom because Axiom did not support Jakarta EE at the time. This recipe changes Axiom types to their SAAJ equivalents._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [spring-ws](/reference/recipes-by-tag#spring)

## Recipe source

[GitHub: spring-ws-4.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-ws-4.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.ws.soap.axiom.AxiomSoapMessage`
  * newFullyQualifiedTypeName: `org.springframework.ws.soap.saaj.SaajSoapMessage`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.ws.soap.axiom.AxiomSoapMessageFactory`
  * newFullyQualifiedTypeName: `org.springframework.ws.soap.saaj.SaajSoapMessageFactory`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.ws.soap.axiom.AxiomAttachmentException`
  * newFullyQualifiedTypeName: `org.springframework.ws.soap.saaj.SaajAttachmentException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.ws.soap.axiom.AxiomSoapBodyException`
  * newFullyQualifiedTypeName: `org.springframework.ws.soap.saaj.SaajSoapBodyException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.ws.soap.axiom.AxiomSoapElementException`
  * newFullyQualifiedTypeName: `org.springframework.ws.soap.saaj.SaajSoapElementException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.ws.soap.axiom.AxiomSoapEnvelopeException`
  * newFullyQualifiedTypeName: `org.springframework.ws.soap.saaj.SaajSoapEnvelopeException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.ws.soap.axiom.AxiomSoapFaultException`
  * newFullyQualifiedTypeName: `org.springframework.ws.soap.saaj.SaajSoapFaultException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.ws.soap.axiom.AxiomSoapHeaderException`
  * newFullyQualifiedTypeName: `org.springframework.ws.soap.saaj.SaajSoapHeaderException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.ws.soap.axiom.AxiomSoapMessageCreationException`
  * newFullyQualifiedTypeName: `org.springframework.ws.soap.saaj.SaajSoapMessageCreationException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.ws.soap.axiom.AxiomSoapMessageException`
  * newFullyQualifiedTypeName: `org.springframework.ws.soap.saaj.SaajSoapMessageException`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `org.apache.ws.commons.axiom`
  * artifactId: `axiom-api`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `org.apache.ws.commons.axiom`
  * artifactId: `axiom-impl`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.ws.MigrateAxiomToSaaj
displayName: Migrate Spring WS Axiom to SAAJ
description: |
  Migrate from Apache Axiom SOAP message handling to SAAJ (SOAP with Attachments API for Java). Spring WS 4.0.x removed support for Apache Axiom because Axiom did not support Jakarta EE at the time. This recipe changes Axiom types to their SAAJ equivalents.
tags:
  - spring
  - spring-ws
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.ws.soap.axiom.AxiomSoapMessage
      newFullyQualifiedTypeName: org.springframework.ws.soap.saaj.SaajSoapMessage
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.ws.soap.axiom.AxiomSoapMessageFactory
      newFullyQualifiedTypeName: org.springframework.ws.soap.saaj.SaajSoapMessageFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.ws.soap.axiom.AxiomAttachmentException
      newFullyQualifiedTypeName: org.springframework.ws.soap.saaj.SaajAttachmentException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.ws.soap.axiom.AxiomSoapBodyException
      newFullyQualifiedTypeName: org.springframework.ws.soap.saaj.SaajSoapBodyException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.ws.soap.axiom.AxiomSoapElementException
      newFullyQualifiedTypeName: org.springframework.ws.soap.saaj.SaajSoapElementException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.ws.soap.axiom.AxiomSoapEnvelopeException
      newFullyQualifiedTypeName: org.springframework.ws.soap.saaj.SaajSoapEnvelopeException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.ws.soap.axiom.AxiomSoapFaultException
      newFullyQualifiedTypeName: org.springframework.ws.soap.saaj.SaajSoapFaultException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.ws.soap.axiom.AxiomSoapHeaderException
      newFullyQualifiedTypeName: org.springframework.ws.soap.saaj.SaajSoapHeaderException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.ws.soap.axiom.AxiomSoapMessageCreationException
      newFullyQualifiedTypeName: org.springframework.ws.soap.saaj.SaajSoapMessageCreationException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.ws.soap.axiom.AxiomSoapMessageException
      newFullyQualifiedTypeName: org.springframework.ws.soap.saaj.SaajSoapMessageException
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.apache.ws.commons.axiom
      artifactId: axiom-api
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.apache.ws.commons.axiom
      artifactId: axiom-impl

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring WS 4.0](/recipes/java/spring/ws/upgradespringws_4_0.md)

## Examples
##### Example 1
`MigrateAxiomToSaajTest#migrateAxiomSoapMessageToSaaj`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.ws.soap.axiom.AxiomSoapMessage;
import org.springframework.ws.soap.axiom.AxiomSoapMessageFactory;

public class WebServiceConfig {
    public AxiomSoapMessageFactory messageFactory() {
        return new AxiomSoapMessageFactory();
    }

    public void processMessage(AxiomSoapMessage message) {
        // process the message
    }
}
```

###### After
```java
import org.springframework.ws.soap.saaj.SaajSoapMessage;
import org.springframework.ws.soap.saaj.SaajSoapMessageFactory;

public class WebServiceConfig {
    public SaajSoapMessageFactory messageFactory() {
        return new SaajSoapMessageFactory();
    }

    public void processMessage(SaajSoapMessage message) {
        // process the message
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.springframework.ws.soap.axiom.AxiomSoapMessage;
-import org.springframework.ws.soap.axiom.AxiomSoapMessageFactory;
+import org.springframework.ws.soap.saaj.SaajSoapMessage;
+import org.springframework.ws.soap.saaj.SaajSoapMessageFactory;

@@ -5,2 +5,2 @@

public class WebServiceConfig {
-   public AxiomSoapMessageFactory messageFactory() {
-       return new AxiomSoapMessageFactory();
+   public SaajSoapMessageFactory messageFactory() {
+       return new SaajSoapMessageFactory();
    }
@@ -9,1 +9,1 @@
    }

-   public void processMessage(AxiomSoapMessage message) {
+   public void processMessage(SaajSoapMessage message) {
        // process the message
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateAxiomToSaajTest#migrateAxiomSoapMessageToSaaj`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.ws.soap.axiom.AxiomSoapMessage;
import org.springframework.ws.soap.axiom.AxiomSoapMessageFactory;

public class WebServiceConfig {
    public AxiomSoapMessageFactory messageFactory() {
        return new AxiomSoapMessageFactory();
    }

    public void processMessage(AxiomSoapMessage message) {
        // process the message
    }
}
```

###### After
```java
import org.springframework.ws.soap.saaj.SaajSoapMessage;
import org.springframework.ws.soap.saaj.SaajSoapMessageFactory;

public class WebServiceConfig {
    public SaajSoapMessageFactory messageFactory() {
        return new SaajSoapMessageFactory();
    }

    public void processMessage(SaajSoapMessage message) {
        // process the message
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.springframework.ws.soap.axiom.AxiomSoapMessage;
-import org.springframework.ws.soap.axiom.AxiomSoapMessageFactory;
+import org.springframework.ws.soap.saaj.SaajSoapMessage;
+import org.springframework.ws.soap.saaj.SaajSoapMessageFactory;

@@ -5,2 +5,2 @@

public class WebServiceConfig {
-   public AxiomSoapMessageFactory messageFactory() {
-       return new AxiomSoapMessageFactory();
+   public SaajSoapMessageFactory messageFactory() {
+       return new SaajSoapMessageFactory();
    }
@@ -9,1 +9,1 @@
    }

-   public void processMessage(AxiomSoapMessage message) {
+   public void processMessage(SaajSoapMessage message) {
        // process the message
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.ws.MigrateAxiomToSaaj")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
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
        rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.ws.MigrateAxiomToSaaj")
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
            <recipe>org.openrewrite.java.spring.ws.MigrateAxiomToSaaj</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.ws.MigrateAxiomToSaaj -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateAxiomToSaaj
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.ws.MigrateAxiomToSaaj" />

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
