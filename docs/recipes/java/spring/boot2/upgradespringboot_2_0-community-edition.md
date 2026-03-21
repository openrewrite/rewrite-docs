---
sidebar_label: "Migrate from Spring Boot 1.x to 2.0 (Community Edition)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate from Spring Boot 1.x to 2.0 (Community Edition)

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_0**

_Migrate Spring Boot 1.x applications to the latest Spring Boot 2.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.0._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [boot](/reference/recipes-by-tag#boot)

## Recipe source

[GitHub: spring-boot-20.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-20.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-dependencies`
  * newVersion: `2.0.x`
  * overrideManagedVersion: `true`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-maven-plugin`
  * newVersion: `2.0.x`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.0.x`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion)
  * pluginIdPattern: `org.springframework.boot`
  * newVersion: `2.0.x`
* [Update Gradle wrapper](../../../gradle/updategradlewrapper)
  * version: `4.x`
  * addIfMissing: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.mockito`
  * artifactId: `*`
  * newVersion: `3.x`
  * overrideManagedVersion: `false`
* [Remove Maven project property](../../../maven/removeproperty)
  * propertyName: `thymeleaf.version`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.webjars`
  * oldArtifactId: `webjars-locator`
  * newGroupId: `org.webjars`
  * newArtifactId: `webjars-locator-core`
  * newVersion: `^0.35`
* [Use `WebServerFactoryCustomizer`](../../../java/spring/boot2/migratetowebserverfactorycustomizer)
* [Migrate to Spring Framework 5.0](../../../java/spring/framework/upgradespringframework_5_0)
* [Use `org.springframework.boot.web.servlet.support.SpringBootServletInitializer`](../../../java/spring/boot2/migratespringbootservletinitializerpackagename)
* [Use `org.springframework.boot.autoconfigure.http.HttpMessageConverters`](../../../java/spring/boot2/migratehttpmessageconverterspackagename)
* [Use `org.springframework.boot.web.servlet.error.ErrorController`](../../../java/spring/boot2/migrateerrorcontrollerpackagename)
* [Use `javax.validation.constraints`](../../../java/spring/boot2/migratehibernateconstraintstojavax)
* [Use `org.springframework.boot.web.server.LocalServerPort`](../../../java/spring/boot2/migratelocalserverportannotation)
* [Replace `micrometer-spring-legacy` with `spring-boot-starter-actuator`](../../../java/spring/boot2/maybeaddspringbootstarteractuator)
* [Migrate Spring Boot properties to 2.0](../../../java/spring/boot2/springbootproperties_2_0)
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `spring.main.banner-mode`
  * newValue: `console`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `spring.main.banner-mode`
  * newValue: `off`
  * oldValue: `false`
* [Spring Boot 2.x best practices](../../../java/spring/boot2/springboot2bestpractices)
* [Migrates to Apache Commons Lang 3.x](../../../apache/commons/lang/upgradeapachecommonslang_2_3)
* [Make AuditorAware.getCurrentAuditor return `Optional`](../../../java/spring/data/migrateauditorawaretooptional)
* [Upgrade MyBatis to Spring Boot 2.0](../../../java/spring/boot3/upgrademybatistospringboot_2_0)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
displayName: Migrate from Spring Boot 1.x to 2.0 (Community Edition)
description: |
  Migrate Spring Boot 1.x applications to the latest Spring Boot 2.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.0.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: "*"
      newVersion: 2.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-dependencies
      newVersion: 2.0.x
      overrideManagedVersion: true
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-maven-plugin
      newVersion: 2.0.x
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.0.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.springframework.boot
      newVersion: 2.0.x
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: 4.x
      addIfMissing: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.mockito
      artifactId: "*"
      newVersion: 3.x
      overrideManagedVersion: false
  - org.openrewrite.maven.RemoveProperty:
      propertyName: thymeleaf.version
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.webjars
      oldArtifactId: webjars-locator
      newGroupId: org.webjars
      newArtifactId: webjars-locator-core
      newVersion: ^0.35
  - org.openrewrite.java.spring.boot2.MigrateToWebServerFactoryCustomizer
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_0
  - org.openrewrite.java.spring.boot2.MigrateSpringBootServletInitializerPackageName
  - org.openrewrite.java.spring.boot2.MigrateHttpMessageConvertersPackageName
  - org.openrewrite.java.spring.boot2.MigrateErrorControllerPackageName
  - org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax
  - org.openrewrite.java.spring.boot2.MigrateLocalServerPortAnnotation
  - org.openrewrite.java.spring.boot2.MaybeAddSpringBootStarterActuator
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: spring.main.banner-mode
      newValue: console
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: spring.main.banner-mode
      newValue: off
      oldValue: false
  - org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
  - org.openrewrite.apache.commons.lang.UpgradeApacheCommonsLang_2_3
  - org.openrewrite.java.spring.data.MigrateAuditorAwareToOptional
  - org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_2_0

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 2.1](/recipes/java/spring/boot2/upgradespringboot_2_1.md)

## Examples
##### Example 1
`Boot2UpgradeTest#addJavaxValidationApi`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package org.springframework.samples.petclinic.vet;

import org.hibernate.validator.constraints.NotEmpty;

public class Vet {
    @NotEmpty
    private String lastName;
}
```

###### After
```java
package org.springframework.samples.petclinic.vet;

import javax.validation.constraints.NotEmpty;

public class Vet {
    @NotEmpty
    private String lastName;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
package org.springframework.samples.petclinic.vet;

-import org.hibernate.validator.constraints.NotEmpty;
+import javax.validation.constraints.NotEmpty;

```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
project
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.springframework.samples</groupId>
  <artifactId>spring-petclinic</artifactId>
  <version>1.5.22.RELEASE</version>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>1.5.22.RELEASE</version>
  </parent>
  <name>petclinic</name>

  <properties>
    <java.version>1.8</java.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.springframework.samples</groupId>
  <artifactId>spring-petclinic</artifactId>
  <version>1.5.22.RELEASE</version>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.0.9.RELEASE</version>
  </parent>
  <name>petclinic</name>

  <properties>
    <java.version>1.8</java.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
  </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -10,1 +10,1 @@
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
-   <version>1.5.22.RELEASE</version>
+   <version>2.0.9.RELEASE</version>
  </parent>
```
</TabItem>
</Tabs>

---

##### Example 2
`Boot2UpgradeTest#addJavaxValidationApi`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package org.springframework.samples.petclinic.vet;

import org.hibernate.validator.constraints.NotEmpty;

public class Vet {
    @NotEmpty
    private String lastName;
}
```

###### After
```java
package org.springframework.samples.petclinic.vet;

import javax.validation.constraints.NotEmpty;

public class Vet {
    @NotEmpty
    private String lastName;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
package org.springframework.samples.petclinic.vet;

-import org.hibernate.validator.constraints.NotEmpty;
+import javax.validation.constraints.NotEmpty;

```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
project
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.springframework.samples</groupId>
  <artifactId>spring-petclinic</artifactId>
  <version>1.5.22.RELEASE</version>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>1.5.22.RELEASE</version>
  </parent>
  <name>petclinic</name>

  <properties>
    <java.version>1.8</java.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.springframework.samples</groupId>
  <artifactId>spring-petclinic</artifactId>
  <version>1.5.22.RELEASE</version>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.0.9.RELEASE</version>
  </parent>
  <name>petclinic</name>

  <properties>
    <java.version>1.8</java.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
  </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -10,1 +10,1 @@
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
-   <version>1.5.22.RELEASE</version>
+   <version>2.0.9.RELEASE</version>
  </parent>
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0"
  displayName="Migrate from Spring Boot 1.x to 2.0 (Community Edition)"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
  useFullyQualifiedCliName
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0" />

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

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

</Tabs>
