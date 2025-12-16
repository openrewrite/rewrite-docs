---
sidebar_label: "Migrate xmlns entries and javax. packages in `validation.xml` files"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate xmlns entries and javax. packages in `validation.xml` files

**org.openrewrite.java.migrate.jakarta.JavaxBeanValidationXmlToJakartaBeanValidationXml**

_Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation._

### Tags

* [ejb](/reference/recipes-by-tag#ejb)
* [jakarta](/reference/recipes-by-tag#jakarta)
* [bean validation](/reference/recipes-by-tag#bean-validation)

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
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `validation-config`
  * attributeName: `version`
  * newValue: `3.0`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `validation-config`
  * attributeName: `xmlns`
  * newValue: `https://jakarta.ee/xml/ns/validation/configuration`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `validation-config`
  * attributeName: `xsi:schemaLocation`
  * newValue: `https://jakarta.ee/xml/ns/validation/configuration https://jakarta.ee/xml/ns/validation/validation-configuration-3.0.xsd`
* [Find and replace](../../../text/findandreplace)
  * find: `javax.`
  * replace: `jakarta.`
  * filePattern: `**/validation.xml`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxBeanValidationXmlToJakartaBeanValidationXml
displayName: Migrate xmlns entries and javax. packages in `validation.xml` files
description: |
  Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation.
tags:
  - ejb
  - jakarta
  - bean validation
recipeList:
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: validation-config
      attributeName: version
      newValue: 3.0
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: validation-config
      attributeName: xmlns
      newValue: https://jakarta.ee/xml/ns/validation/configuration
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: validation-config
      attributeName: xsi:schemaLocation
      newValue: https://jakarta.ee/xml/ns/validation/configuration https://jakarta.ee/xml/ns/validation/validation-configuration-3.0.xsd
  - org.openrewrite.text.FindAndReplace:
      find: javax.
      replace: jakarta.
      filePattern: **/validation.xml

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from JavaX to Jakarta EE 9.1 Namespaces](/recipes/com/oracle/weblogic/rewrite/jakarta/jakartaeenamespaces9_1.md)
* [Migrate to Jakarta EE 10](/recipes/java/migrate/jakarta/jakartaee10.md)

## Examples
##### Example 1
`JavaxBeanValidationXmlToJakartaBeanValidationXmlTest#migrateJCP`


<Tabs groupId="beforeAfter">
<TabItem value="validation.xml" label="validation.xml">


###### Before
```xml title="validation.xml"
<?xml version="1.0" encoding="UTF-8"?>
<validation-config
     xmlns="http://xmlns.jcp.org/xml/ns/validation/configuration"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/validation/configuration
     http://xmlns.jcp.org/xml/ns/validation/configuration/validation-configuration2.0.xsd"
     version="2.0">

    <default-provider>javax.acme.ValidationProvider</default-provider>

    <message-interpolator>javax.acme.MessageInterpolator</message-interpolator>
    <traversable-resolver>javax.acme.TraversableResolver</traversable-resolver>
    <constraint-validator-factory>
        javax.acme.ConstraintValidatorFactory
    </constraint-validator-factory>
    <parameter-name-provider>javax.acme.ParameterNameProvider</parameter-name-provider>

    <executable-validation enabled="true">
        <default-validated-executable-types>
            <executable-type>CONSTRUCTORS</executable-type>
            <executable-type>NON_GETTER_METHODS</executable-type>
            <executable-type>GETTER_METHODS</executable-type>
        </default-validated-executable-types>
    </executable-validation>

    <constraint-mapping>META-INF/validation/constraints-car.xml</constraint-mapping>

    <property name="javax.validator.fail_fast">false</property>
</validation-config>
```

###### After
```xml title="validation.xml"
<?xml version="1.0" encoding="UTF-8"?>
<validation-config
     xmlns="https://jakarta.ee/xml/ns/validation/configuration"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="https://jakarta.ee/xml/ns/validation/configuration https://jakarta.ee/xml/ns/validation/validation-configuration-3.0.xsd"
     version="3.0">

    <default-provider>jakarta.acme.ValidationProvider</default-provider>

    <message-interpolator>jakarta.acme.MessageInterpolator</message-interpolator>
    <traversable-resolver>jakarta.acme.TraversableResolver</traversable-resolver>
    <constraint-validator-factory>
        jakarta.acme.ConstraintValidatorFactory
    </constraint-validator-factory>
    <parameter-name-provider>jakarta.acme.ParameterNameProvider</parameter-name-provider>

    <executable-validation enabled="true">
        <default-validated-executable-types>
            <executable-type>CONSTRUCTORS</executable-type>
            <executable-type>NON_GETTER_METHODS</executable-type>
            <executable-type>GETTER_METHODS</executable-type>
        </default-validated-executable-types>
    </executable-validation>

    <constraint-mapping>META-INF/validation/constraints-car.xml</constraint-mapping>

    <property name="jakarta.validator.fail_fast">false</property>
</validation-config>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- validation.xml
+++ validation.xml
@@ -3,1 +3,1 @@
<?xml version="1.0" encoding="UTF-8"?>
<validation-config
-    xmlns="http://xmlns.jcp.org/xml/ns/validation/configuration"
+    xmlns="https://jakarta.ee/xml/ns/validation/configuration"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
@@ -5,3 +5,2 @@
     xmlns="http://xmlns.jcp.org/xml/ns/validation/configuration"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
-    xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/validation/configuration
-    http://xmlns.jcp.org/xml/ns/validation/configuration/validation-configuration2.0.xsd"
-    version="2.0">
+    xsi:schemaLocation="https://jakarta.ee/xml/ns/validation/configuration https://jakarta.ee/xml/ns/validation/validation-configuration-3.0.xsd"
+    version="3.0">

@@ -9,1 +8,1 @@
     version="2.0">

-   <default-provider>javax.acme.ValidationProvider</default-provider>
+   <default-provider>jakarta.acme.ValidationProvider</default-provider>

@@ -11,2 +10,2 @@
    <default-provider>javax.acme.ValidationProvider</default-provider>

-   <message-interpolator>javax.acme.MessageInterpolator</message-interpolator>
-   <traversable-resolver>javax.acme.TraversableResolver</traversable-resolver>
+   <message-interpolator>jakarta.acme.MessageInterpolator</message-interpolator>
+   <traversable-resolver>jakarta.acme.TraversableResolver</traversable-resolver>
    <constraint-validator-factory>
@@ -14,1 +13,1 @@
    <traversable-resolver>javax.acme.TraversableResolver</traversable-resolver>
    <constraint-validator-factory>
-       javax.acme.ConstraintValidatorFactory
+       jakarta.acme.ConstraintValidatorFactory
    </constraint-validator-factory>
@@ -16,1 +15,1 @@
        javax.acme.ConstraintValidatorFactory
    </constraint-validator-factory>
-   <parameter-name-provider>javax.acme.ParameterNameProvider</parameter-name-provider>
+   <parameter-name-provider>jakarta.acme.ParameterNameProvider</parameter-name-provider>

@@ -28,1 +27,1 @@
    <constraint-mapping>META-INF/validation/constraints-car.xml</constraint-mapping>

-   <property name="javax.validator.fail_fast">false</property>
+   <property name="jakarta.validator.fail_fast">false</property>
</validation-config>
```
</TabItem>
</Tabs>

---

##### Example 2
`JavaxBeanValidationXmlToJakartaBeanValidationXmlTest#migrateJCP`


<Tabs groupId="beforeAfter">
<TabItem value="validation.xml" label="validation.xml">


###### Before
```xml title="validation.xml"
<?xml version="1.0" encoding="UTF-8"?>
<validation-config
     xmlns="http://xmlns.jcp.org/xml/ns/validation/configuration"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/validation/configuration
     http://xmlns.jcp.org/xml/ns/validation/configuration/validation-configuration2.0.xsd"
     version="2.0">

    <default-provider>javax.acme.ValidationProvider</default-provider>

    <message-interpolator>javax.acme.MessageInterpolator</message-interpolator>
    <traversable-resolver>javax.acme.TraversableResolver</traversable-resolver>
    <constraint-validator-factory>
        javax.acme.ConstraintValidatorFactory
    </constraint-validator-factory>
    <parameter-name-provider>javax.acme.ParameterNameProvider</parameter-name-provider>

    <executable-validation enabled="true">
        <default-validated-executable-types>
            <executable-type>CONSTRUCTORS</executable-type>
            <executable-type>NON_GETTER_METHODS</executable-type>
            <executable-type>GETTER_METHODS</executable-type>
        </default-validated-executable-types>
    </executable-validation>

    <constraint-mapping>META-INF/validation/constraints-car.xml</constraint-mapping>

    <property name="javax.validator.fail_fast">false</property>
</validation-config>
```

###### After
```xml title="validation.xml"
<?xml version="1.0" encoding="UTF-8"?>
<validation-config
     xmlns="https://jakarta.ee/xml/ns/validation/configuration"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="https://jakarta.ee/xml/ns/validation/configuration https://jakarta.ee/xml/ns/validation/validation-configuration-3.0.xsd"
     version="3.0">

    <default-provider>jakarta.acme.ValidationProvider</default-provider>

    <message-interpolator>jakarta.acme.MessageInterpolator</message-interpolator>
    <traversable-resolver>jakarta.acme.TraversableResolver</traversable-resolver>
    <constraint-validator-factory>
        jakarta.acme.ConstraintValidatorFactory
    </constraint-validator-factory>
    <parameter-name-provider>jakarta.acme.ParameterNameProvider</parameter-name-provider>

    <executable-validation enabled="true">
        <default-validated-executable-types>
            <executable-type>CONSTRUCTORS</executable-type>
            <executable-type>NON_GETTER_METHODS</executable-type>
            <executable-type>GETTER_METHODS</executable-type>
        </default-validated-executable-types>
    </executable-validation>

    <constraint-mapping>META-INF/validation/constraints-car.xml</constraint-mapping>

    <property name="jakarta.validator.fail_fast">false</property>
</validation-config>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- validation.xml
+++ validation.xml
@@ -3,1 +3,1 @@
<?xml version="1.0" encoding="UTF-8"?>
<validation-config
-    xmlns="http://xmlns.jcp.org/xml/ns/validation/configuration"
+    xmlns="https://jakarta.ee/xml/ns/validation/configuration"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
@@ -5,3 +5,2 @@
     xmlns="http://xmlns.jcp.org/xml/ns/validation/configuration"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
-    xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/validation/configuration
-    http://xmlns.jcp.org/xml/ns/validation/configuration/validation-configuration2.0.xsd"
-    version="2.0">
+    xsi:schemaLocation="https://jakarta.ee/xml/ns/validation/configuration https://jakarta.ee/xml/ns/validation/validation-configuration-3.0.xsd"
+    version="3.0">

@@ -9,1 +8,1 @@
     version="2.0">

-   <default-provider>javax.acme.ValidationProvider</default-provider>
+   <default-provider>jakarta.acme.ValidationProvider</default-provider>

@@ -11,2 +10,2 @@
    <default-provider>javax.acme.ValidationProvider</default-provider>

-   <message-interpolator>javax.acme.MessageInterpolator</message-interpolator>
-   <traversable-resolver>javax.acme.TraversableResolver</traversable-resolver>
+   <message-interpolator>jakarta.acme.MessageInterpolator</message-interpolator>
+   <traversable-resolver>jakarta.acme.TraversableResolver</traversable-resolver>
    <constraint-validator-factory>
@@ -14,1 +13,1 @@
    <traversable-resolver>javax.acme.TraversableResolver</traversable-resolver>
    <constraint-validator-factory>
-       javax.acme.ConstraintValidatorFactory
+       jakarta.acme.ConstraintValidatorFactory
    </constraint-validator-factory>
@@ -16,1 +15,1 @@
        javax.acme.ConstraintValidatorFactory
    </constraint-validator-factory>
-   <parameter-name-provider>javax.acme.ParameterNameProvider</parameter-name-provider>
+   <parameter-name-provider>jakarta.acme.ParameterNameProvider</parameter-name-provider>

@@ -28,1 +27,1 @@
    <constraint-mapping>META-INF/validation/constraints-car.xml</constraint-mapping>

-   <property name="javax.validator.fail_fast">false</property>
+   <property name="jakarta.validator.fail_fast">false</property>
</validation-config>
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
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxBeanValidationXmlToJakartaBeanValidationXml")
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
        activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxBeanValidationXmlToJakartaBeanValidationXml")
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
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxBeanValidationXmlToJakartaBeanValidationXml</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxBeanValidationXmlToJakartaBeanValidationXml -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JavaxBeanValidationXmlToJakartaBeanValidationXml
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxBeanValidationXmlToJakartaBeanValidationXml" />

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
