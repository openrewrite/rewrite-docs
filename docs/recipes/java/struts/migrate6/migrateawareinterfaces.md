---
sidebar_label: "Migrate Struts 2.0 interceptors to action &quot;aware&quot; interfaces"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Struts 2.0 interceptors to action &quot;aware&quot; interfaces

**org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces**

_These types have moved to a new package in Struts 6.0 and their methods have been renamed from set* to with*._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-struts/blob/main/src/main/resources/META-INF/rewrite/struts6.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-struts/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-struts/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.struts2.interceptor.ApplicationAware setApplication(java.util.Map)`
  * newMethodName: `withApplication`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.struts2.interceptor.SessionAware setSession(java.util.Map)`
  * newMethodName: `withSession`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.struts2.interceptor.ParameterAware setParameters(java.util.Map)`
  * newMethodName: `withParameters`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.struts2.interceptor.HttpParametersAware setParameters(org.apache.struts2.dispatcher.HttpParameters)`
  * newMethodName: `withParameters`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.struts2.interceptor.PrincipalAware setPrincipalProxy(org.apache.struts2.interceptor.PrincipalProxy)`
  * newMethodName: `withPrincipalProxy`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.struts2.interceptor.ServletRequestAware setServletRequest(javax.servlet.http.HttpServletRequest)`
  * newMethodName: `withServletRequest`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.struts2.interceptor.ServletResponseAware setServletResponse(javax.servlet.http.HttpServletResponse)`
  * newMethodName: `withServletResponse`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.struts2.util.ServletContextAware setServletContext(javax.servlet.ServletContext)`
  * newMethodName: `withServletContext`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.struts2.interceptor.CookiesAware setCookiesMap(java.util.Map)`
  * newMethodName: `withCookiesMap`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.struts2.interceptor.RequestAware setRequest(java.util.Map)`
  * newMethodName: `withRequest`
  * matchOverrides: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.ApplicationAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ApplicationAware`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.CookiesAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.CookiesAware`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.HttpParametersAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ParametersAware`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.ParameterAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ParametersAware`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.PrincipalAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.PrincipalAware`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.RequestAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ServletRequestAware`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.ServletRequestAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ServletRequestAware`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.ServletResponseAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ServletResponseAware`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.SessionAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.SessionAware`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.struts2.util.ServletContextAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ServletContextAware`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces
displayName: Migrate Struts 2.0 interceptors to action &quot;aware&quot; interfaces
description: |
  These types have moved to a new package in Struts 6.0 and their methods have been renamed from set* to with*.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.struts2.interceptor.ApplicationAware setApplication(java.util.Map)
      newMethodName: withApplication
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.struts2.interceptor.SessionAware setSession(java.util.Map)
      newMethodName: withSession
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.struts2.interceptor.ParameterAware setParameters(java.util.Map)
      newMethodName: withParameters
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.struts2.interceptor.HttpParametersAware setParameters(org.apache.struts2.dispatcher.HttpParameters)
      newMethodName: withParameters
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.struts2.interceptor.PrincipalAware setPrincipalProxy(org.apache.struts2.interceptor.PrincipalProxy)
      newMethodName: withPrincipalProxy
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.struts2.interceptor.ServletRequestAware setServletRequest(javax.servlet.http.HttpServletRequest)
      newMethodName: withServletRequest
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.struts2.interceptor.ServletResponseAware setServletResponse(javax.servlet.http.HttpServletResponse)
      newMethodName: withServletResponse
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.struts2.util.ServletContextAware setServletContext(javax.servlet.ServletContext)
      newMethodName: withServletContext
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.struts2.interceptor.CookiesAware setCookiesMap(java.util.Map)
      newMethodName: withCookiesMap
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.struts2.interceptor.RequestAware setRequest(java.util.Map)
      newMethodName: withRequest
      matchOverrides: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.ApplicationAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ApplicationAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.CookiesAware
      newFullyQualifiedTypeName: org.apache.struts2.action.CookiesAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.HttpParametersAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ParametersAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.ParameterAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ParametersAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.PrincipalAware
      newFullyQualifiedTypeName: org.apache.struts2.action.PrincipalAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.RequestAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ServletRequestAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.ServletRequestAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ServletRequestAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.ServletResponseAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ServletResponseAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.SessionAware
      newFullyQualifiedTypeName: org.apache.struts2.action.SessionAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.util.ServletContextAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ServletContextAware

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Struts 6.0](/recipes/java/struts/migrate6/migratestruts6.md)

## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
import org.apache.struts2.interceptor.SessionAware;

import java.util.Map;

public class CustomSecurityInterceptor extends AbstractInterceptor implements SessionAware {

    private Map<String, Object> session;

    @Override
    public void setSession(Map<String, Object> session) {
        this.session = session;
    }

    @Override
    public String intercept(ActionInvocation invocation) throws Exception {
        return invocation.invoke();
    }
}
```

###### After
```java
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
import org.apache.struts2.action.SessionAware;

import java.util.Map;

public class CustomSecurityInterceptor extends AbstractInterceptor implements SessionAware {

    private Map<String, Object> session;

    @Override
    public void withSession(Map<String, Object> session) {
        this.session = session;
    }

    @Override
    public String intercept(ActionInvocation invocation) throws Exception {
        return invocation.invoke();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
-import org.apache.struts2.interceptor.SessionAware;
+import org.apache.struts2.action.SessionAware;

@@ -12,1 +12,1 @@

    @Override
-   public void setSession(Map<String, Object> session) {
+   public void withSession(Map<String, Object> session) {
        this.session = session;
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
import org.apache.struts2.interceptor.SessionAware;

import java.util.Map;

public class CustomSecurityInterceptor extends AbstractInterceptor implements SessionAware {

    private Map<String, Object> session;

    @Override
    public void setSession(Map<String, Object> session) {
        this.session = session;
    }

    @Override
    public String intercept(ActionInvocation invocation) throws Exception {
        return invocation.invoke();
    }
}
```

###### After
```java
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
import org.apache.struts2.action.SessionAware;

import java.util.Map;

public class CustomSecurityInterceptor extends AbstractInterceptor implements SessionAware {

    private Map<String, Object> session;

    @Override
    public void withSession(Map<String, Object> session) {
        this.session = session;
    }

    @Override
    public String intercept(ActionInvocation invocation) throws Exception {
        return invocation.invoke();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;
-import org.apache.struts2.interceptor.SessionAware;
+import org.apache.struts2.action.SessionAware;

@@ -12,1 +12,1 @@

    @Override
-   public void setSession(Map<String, Object> session) {
+   public void withSession(Map<String, Object> session) {
        this.session = session;
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-struts` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-struts:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STRUTS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-struts:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STRUTS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces")
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
            <recipe>org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-struts</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STRUTS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-struts:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateAwareInterfaces
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-struts:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STRUTS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces" />

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
