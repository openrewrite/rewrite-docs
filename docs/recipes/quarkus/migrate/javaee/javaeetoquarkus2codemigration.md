---
sidebar_label: "Migrate JavaEE Code to Quarkus 2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate JavaEE Code to Quarkus 2

**org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2CodeMigration**

_Migrate Standard JavaEE Code to Quarkus 2._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/resources/META-INF/rewrite/javaee7-to-quarkus.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-quarkus/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.ejb.Stateless`
  * newFullyQualifiedTypeName: `javax.enterprise.context.Dependent`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.ejb.Stateful`
  * newFullyQualifiedTypeName: `javax.enterprise.context.SessionScoped`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.ejb.Singleton`
  * newFullyQualifiedTypeName: `javax.enterprise.context.ApplicationScoped`
* [Remove annotation attribute](../../../java/removeannotationattribute)
  * annotationType: `javax.ejb.EJB`
  * attributeName: `name`
* [Remove annotation attribute](../../../java/removeannotationattribute)
  * annotationType: `javax.ejb.EJB`
  * attributeName: `description`
* [Remove annotation attribute](../../../java/removeannotationattribute)
  * annotationType: `javax.ejb.EJB`
  * attributeName: `beanName`
* [Remove annotation attribute](../../../java/removeannotationattribute)
  * annotationType: `javax.ejb.EJB`
  * attributeName: `beanInterface`
* [Remove annotation attribute](../../../java/removeannotationattribute)
  * annotationType: `javax.ejb.EJB`
  * attributeName: `mappedName`
* [Remove annotation attribute](../../../java/removeannotationattribute)
  * annotationType: `javax.ejb.EJB`
  * attributeName: `lookup`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.ejb.EJB`
  * newFullyQualifiedTypeName: `javax.inject.Inject`
* [Remove annotation](../../../java/removeannotation)
  * annotationPattern: `@javax.ejb.Local`
* [Remove annotation attribute](../../../java/removeannotationattribute)
  * annotationType: `javax.persistence.PersistenceContext`
  * attributeName: `name`
* [Remove annotation attribute](../../../java/removeannotationattribute)
  * annotationType: `javax.persistence.PersistenceContext`
  * attributeName: `unitName`
* [Remove annotation attribute](../../../java/removeannotationattribute)
  * annotationType: `javax.persistence.PersistenceContext`
  * attributeName: `type`
* [Remove annotation attribute](../../../java/removeannotationattribute)
  * annotationType: `javax.persistence.PersistenceContext`
  * attributeName: `synchronization`
* [Remove annotation attribute](../../../java/removeannotationattribute)
  * annotationType: `javax.persistence.PersistenceContext`
  * attributeName: `properties`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.persistence.PersistenceContext`
  * newFullyQualifiedTypeName: `javax.inject.Inject`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2CodeMigration
displayName: Migrate JavaEE Code to Quarkus 2
description: |
  Migrate Standard JavaEE Code to Quarkus 2.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.ejb.Stateless
      newFullyQualifiedTypeName: javax.enterprise.context.Dependent
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.ejb.Stateful
      newFullyQualifiedTypeName: javax.enterprise.context.SessionScoped
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.ejb.Singleton
      newFullyQualifiedTypeName: javax.enterprise.context.ApplicationScoped
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: javax.ejb.EJB
      attributeName: name
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: javax.ejb.EJB
      attributeName: description
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: javax.ejb.EJB
      attributeName: beanName
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: javax.ejb.EJB
      attributeName: beanInterface
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: javax.ejb.EJB
      attributeName: mappedName
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: javax.ejb.EJB
      attributeName: lookup
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.ejb.EJB
      newFullyQualifiedTypeName: javax.inject.Inject
  - org.openrewrite.java.RemoveAnnotation:
      annotationPattern: @javax.ejb.Local
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: javax.persistence.PersistenceContext
      attributeName: name
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: javax.persistence.PersistenceContext
      attributeName: unitName
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: javax.persistence.PersistenceContext
      attributeName: type
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: javax.persistence.PersistenceContext
      attributeName: synchronization
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: javax.persistence.PersistenceContext
      attributeName: properties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.persistence.PersistenceContext
      newFullyQualifiedTypeName: javax.inject.Inject

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate JavaEE to Quarkus 2](/recipes/quarkus/migrate/javaee/javaeetoquarkus2migration.md)

## Examples
##### Example 1
`JavaEEtoQuarkus2CodeTranformationsTest#javaEEtoQuarkus2CodeTransformationsTest`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package org.acme;

import javax.ejb.EJB;
import javax.ejb.Local;
import javax.ejb.SessionContext;
import javax.ejb.Singleton;
import javax.ejb.Stateful;
import javax.ejb.Stateless;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class PingEJBSLS {

    @PersistenceContext
    private EntityManager entityManager;

    @Resource
    private SessionContext context;

    @EJB
    private PingEJBLocal pingEJBLocal;

    @EJB(lookup = "java:global/PingEJBSingleton")
    private PingEJBSingleton pingEJBSingleton;

    public String getMsg() {
        return "PingEJBSLS: " + pingEJBLocal.getMsg() + " " + pingEJBSingleton.getMsg();
    }

}

@Stateful
@Local
public class PingEJBLocal {

    private static int hitCount;

    public String getMsg() {
        return "PingEJBLocal: " + hitCount++;
    }

}

@Singleton
public class PingEJBSingleton {

      private static int hitCount;

      @PersistenceContext
      private EntityManager entityManager;

      public String getMsg() {
           return "PingEJBSingleton: " + hitCount++;
      }
}
```

###### After
```java
package org.acme;

import javax.ejb.SessionContext;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.Dependent;
import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;
import javax.annotation.Resource;
import javax.persistence.EntityManager;

@Dependent
public class PingEJBSLS {

    @Inject
    private EntityManager entityManager;

    @Resource
    private SessionContext context;

    @Inject
    private PingEJBLocal pingEJBLocal;

    @Inject
    private PingEJBSingleton pingEJBSingleton;

    public String getMsg() {
        return "PingEJBSLS: " + pingEJBLocal.getMsg() + " " + pingEJBSingleton.getMsg();
    }

}

@SessionScoped
public class PingEJBLocal {

    private static int hitCount;

    public String getMsg() {
        return "PingEJBLocal: " + hitCount++;
    }

}

@ApplicationScoped
public class PingEJBSingleton {

      private static int hitCount;

      @Inject
      private EntityManager entityManager;

      public String getMsg() {
           return "PingEJBSingleton: " + hitCount++;
      }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,2 +3,0 @@
package org.acme;

-import javax.ejb.EJB;
-import javax.ejb.Local;
import javax.ejb.SessionContext;
@@ -6,4 +4,4 @@
import javax.ejb.Local;
import javax.ejb.SessionContext;
-import javax.ejb.Singleton;
-import javax.ejb.Stateful;
-import javax.ejb.Stateless;
-
+import javax.enterprise.context.ApplicationScoped;
+import javax.enterprise.context.Dependent;
+import javax.enterprise.context.SessionScoped;
+import javax.inject.Inject;
import javax.annotation.Resource;
@@ -12,1 +10,0 @@
import javax.annotation.Resource;
import javax.persistence.EntityManager;
-import javax.persistence.PersistenceContext;

@@ -14,1 +11,1 @@
import javax.persistence.PersistenceContext;

-@Stateless
+@Dependent
public class PingEJBSLS {
@@ -17,1 +14,1 @@
public class PingEJBSLS {

-   @PersistenceContext
+   @Inject
    private EntityManager entityManager;
@@ -23,1 +20,1 @@
    private SessionContext context;

-   @EJB
+   @Inject
    private PingEJBLocal pingEJBLocal;
@@ -26,1 +23,1 @@
    private PingEJBLocal pingEJBLocal;

-   @EJB(lookup = "java:global/PingEJBSingleton")
+   @Inject
    private PingEJBSingleton pingEJBSingleton;
@@ -35,2 +32,1 @@
}

-@Stateful
-@Local
+@SessionScoped
public class PingEJBLocal {
@@ -47,1 +43,1 @@
}

-@Singleton
+@ApplicationScoped
public class PingEJBSingleton {
@@ -52,1 +48,1 @@
      private static int hitCount;

-     @PersistenceContext
+     @Inject
      private EntityManager entityManager;
```
</TabItem>
</Tabs>

---

##### Example 2
`JavaEEtoQuarkus2CodeTranformationsTest#javaEEtoQuarkus2CodeTransformationsTest`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package org.acme;

import javax.ejb.EJB;
import javax.ejb.Local;
import javax.ejb.SessionContext;
import javax.ejb.Singleton;
import javax.ejb.Stateful;
import javax.ejb.Stateless;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class PingEJBSLS {

    @PersistenceContext
    private EntityManager entityManager;

    @Resource
    private SessionContext context;

    @EJB
    private PingEJBLocal pingEJBLocal;

    @EJB(lookup = "java:global/PingEJBSingleton")
    private PingEJBSingleton pingEJBSingleton;

    public String getMsg() {
        return "PingEJBSLS: " + pingEJBLocal.getMsg() + " " + pingEJBSingleton.getMsg();
    }

}

@Stateful
@Local
public class PingEJBLocal {

    private static int hitCount;

    public String getMsg() {
        return "PingEJBLocal: " + hitCount++;
    }

}

@Singleton
public class PingEJBSingleton {

      private static int hitCount;

      @PersistenceContext
      private EntityManager entityManager;

      public String getMsg() {
           return "PingEJBSingleton: " + hitCount++;
      }
}
```

###### After
```java
package org.acme;

import javax.ejb.SessionContext;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.Dependent;
import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;
import javax.annotation.Resource;
import javax.persistence.EntityManager;

@Dependent
public class PingEJBSLS {

    @Inject
    private EntityManager entityManager;

    @Resource
    private SessionContext context;

    @Inject
    private PingEJBLocal pingEJBLocal;

    @Inject
    private PingEJBSingleton pingEJBSingleton;

    public String getMsg() {
        return "PingEJBSLS: " + pingEJBLocal.getMsg() + " " + pingEJBSingleton.getMsg();
    }

}

@SessionScoped
public class PingEJBLocal {

    private static int hitCount;

    public String getMsg() {
        return "PingEJBLocal: " + hitCount++;
    }

}

@ApplicationScoped
public class PingEJBSingleton {

      private static int hitCount;

      @Inject
      private EntityManager entityManager;

      public String getMsg() {
           return "PingEJBSingleton: " + hitCount++;
      }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,2 +3,0 @@
package org.acme;

-import javax.ejb.EJB;
-import javax.ejb.Local;
import javax.ejb.SessionContext;
@@ -6,4 +4,4 @@
import javax.ejb.Local;
import javax.ejb.SessionContext;
-import javax.ejb.Singleton;
-import javax.ejb.Stateful;
-import javax.ejb.Stateless;
-
+import javax.enterprise.context.ApplicationScoped;
+import javax.enterprise.context.Dependent;
+import javax.enterprise.context.SessionScoped;
+import javax.inject.Inject;
import javax.annotation.Resource;
@@ -12,1 +10,0 @@
import javax.annotation.Resource;
import javax.persistence.EntityManager;
-import javax.persistence.PersistenceContext;

@@ -14,1 +11,1 @@
import javax.persistence.PersistenceContext;

-@Stateless
+@Dependent
public class PingEJBSLS {
@@ -17,1 +14,1 @@
public class PingEJBSLS {

-   @PersistenceContext
+   @Inject
    private EntityManager entityManager;
@@ -23,1 +20,1 @@
    private SessionContext context;

-   @EJB
+   @Inject
    private PingEJBLocal pingEJBLocal;
@@ -26,1 +23,1 @@
    private PingEJBLocal pingEJBLocal;

-   @EJB(lookup = "java:global/PingEJBSingleton")
+   @Inject
    private PingEJBSingleton pingEJBSingleton;
@@ -35,2 +32,1 @@
}

-@Stateful
-@Local
+@SessionScoped
public class PingEJBLocal {
@@ -47,1 +43,1 @@
}

-@Singleton
+@ApplicationScoped
public class PingEJBSingleton {
@@ -52,1 +48,1 @@
      private static int hitCount;

-     @PersistenceContext
+     @Inject
      private EntityManager entityManager;
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-quarkus` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2CodeMigration")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2CodeMigration")
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
            <recipe>org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2CodeMigration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-quarkus:RELEASE -Drewrite.activeRecipes=org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2CodeMigration -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JavaEEtoQuarkus2CodeMigration
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2CodeMigration" />

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
