---
sidebar_label: "Migrate JAX-RS Response to Spring MVC ResponseEntity"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate JAX-RS Response to Spring MVC ResponseEntity

**org.openrewrite.java.spring.mvc.JaxrsToSpringMvcResponseEntity**

_Replaces all JAX-RS Response with Spring MVC ResponseEntity._

## Recipe source

[GitHub: JaxrsToSpringMvcResponseEntity.java](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/mvc/JaxrsToSpringMvcResponseEntity.java),
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
  * oldFullyQualifiedTypeName: `javax.ws.rs.core.Response.Status`
  * newFullyQualifiedTypeName: `org.springframework.http.HttpStatus`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.ws.rs.core.Response.Status`
  * newFullyQualifiedTypeName: `org.springframework.http.HttpStatus`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.ws.rs.core.Response.ResponseBuilder`
  * newFullyQualifiedTypeName: `org.springframework.http.ResponseEntity.BodyBuilder`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.ws.rs.core.Response.ResponseBuilder`
  * newFullyQualifiedTypeName: `org.springframework.http.ResponseEntity.BodyBuilder`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.ws.rs.core.Response`
  * newFullyQualifiedTypeName: `org.springframework.http.ResponseEntity`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.ws.rs.core.Response`
  * newFullyQualifiedTypeName: `org.springframework.http.ResponseEntity`
  * ignoreDefinition: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.mvc.JaxrsToSpringMvcResponseEntity
displayName: Migrate JAX-RS Response to Spring MVC ResponseEntity
description: |
  Replaces all JAX-RS Response with Spring MVC ResponseEntity.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.ws.rs.core.Response.Status
      newFullyQualifiedTypeName: org.springframework.http.HttpStatus
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.ws.rs.core.Response.Status
      newFullyQualifiedTypeName: org.springframework.http.HttpStatus
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.ws.rs.core.Response.ResponseBuilder
      newFullyQualifiedTypeName: org.springframework.http.ResponseEntity.BodyBuilder
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.ws.rs.core.Response.ResponseBuilder
      newFullyQualifiedTypeName: org.springframework.http.ResponseEntity.BodyBuilder
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.ws.rs.core.Response
      newFullyQualifiedTypeName: org.springframework.http.ResponseEntity
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.ws.rs.core.Response
      newFullyQualifiedTypeName: org.springframework.http.ResponseEntity
      ignoreDefinition: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Convert JAX-RS annotations to Spring Web](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/spring/framework/jaxrstospringweb)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

class TestExample {

    class TestResponse {
        private String message;

        TestResponse(String message) {
            this.message = message;
        }

        String getMessage() {
            return message;
        }
    }

    Response test0() {
        return Response.ok().build();
    }

    Response test1() {
        return Response.ok("Test Response").build();
    }

    Response test2() {
        TestResponse response = new TestResponse("Test Response");
        return Response.ok().entity(response).build();
    }

    Response test3() {
        return Response.ok().entity("Test Response").header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).build();
    }

    Response test4() {
        TestResponse response = new TestResponse("Test Response");
        return Response.ok().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).entity(response).build();
    }

    Response test5() {
        return Response.status(Response.Status.UNAUTHORIZED).build();
    }

    Response test6() {
        return Response.status(Response.Status.CREATED).entity("Test Response").build();
    }

    Response test7() {
        TestResponse response = new TestResponse("Test Response");
        return Response.status(Status.NOT_FOUND).entity(response).build();
    }

    Response test8() {
        return Response.status(Status.BAD_GATEWAY).header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).entity("Test Response").build();
    }

    Response test9() {
        return Response.serverError().entity("Test Response").header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).build();
    }

    Response test10() {
        return Response.noContent().build();
    }

    Response.ResponseBuilder test11() {
        return Response.ok().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON);
    }

}
```

###### After
```java
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;

class TestExample {

    class TestResponse {
        private String message;

        TestResponse(String message) {
            this.message = message;
        }

        String getMessage() {
            return message;
        }
    }

    ResponseEntity test0() {
        return ResponseEntity.ok().build();
    }

    ResponseEntity test1() {
        return ResponseEntity.ok("Test Response");
    }

    ResponseEntity test2() {
        TestResponse response = new TestResponse("Test Response");
        return ResponseEntity.ok().body(response);
    }

    ResponseEntity test3() {
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).body("Test Response");
    }

    ResponseEntity test4() {
        TestResponse response = new TestResponse("Test Response");
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).body(response);
    }

    ResponseEntity test5() {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    ResponseEntity test6() {
        return ResponseEntity.status(HttpStatus.CREATED).body("Test Response");
    }

    ResponseEntity test7() {
        TestResponse response = new TestResponse("Test Response");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    ResponseEntity test8() {
        return ResponseEntity.status(HttpStatus.BAD_GATEWAY).header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).body("Test Response");
    }

    ResponseEntity test9() {
        return ResponseEntity.internalServerError().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).body("Test Response");
    }

    ResponseEntity test10() {
        return ResponseEntity.noContent().build();
    }

    BodyBuilder test11() {
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON);
    }

}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,2 +3,3 @@
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
-import javax.ws.rs.core.Response;
-import javax.ws.rs.core.Response.Status;
+import org.springframework.http.HttpStatus;
+import org.springframework.http.ResponseEntity;
+import org.springframework.http.ResponseEntity.BodyBuilder;

@@ -20,2 +21,2 @@
    }

-   Response test0() {
-       return Response.ok().build();
+   ResponseEntity test0() {
+       return ResponseEntity.ok().build();
    }
@@ -24,2 +25,2 @@
    }

-   Response test1() {
-       return Response.ok("Test Response").build();
+   ResponseEntity test1() {
+       return ResponseEntity.ok("Test Response");
    }
@@ -28,1 +29,1 @@
    }

-   Response test2() {
+   ResponseEntity test2() {
        TestResponse response = new TestResponse("Test Response");
@@ -30,1 +31,1 @@
    Response test2() {
        TestResponse response = new TestResponse("Test Response");
-       return Response.ok().entity(response).build();
+       return ResponseEntity.ok().body(response);
    }
@@ -33,2 +34,2 @@
    }

-   Response test3() {
-       return Response.ok().entity("Test Response").header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).build();
+   ResponseEntity test3() {
+       return ResponseEntity.ok().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).body("Test Response");
    }
@@ -37,1 +38,1 @@
    }

-   Response test4() {
+   ResponseEntity test4() {
        TestResponse response = new TestResponse("Test Response");
@@ -39,1 +40,1 @@
    Response test4() {
        TestResponse response = new TestResponse("Test Response");
-       return Response.ok().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).entity(response).build();
+       return ResponseEntity.ok().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).body(response);
    }
@@ -42,2 +43,2 @@
    }

-   Response test5() {
-       return Response.status(Response.Status.UNAUTHORIZED).build();
+   ResponseEntity test5() {
+       return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
@@ -46,2 +47,2 @@
    }

-   Response test6() {
-       return Response.status(Response.Status.CREATED).entity("Test Response").build();
+   ResponseEntity test6() {
+       return ResponseEntity.status(HttpStatus.CREATED).body("Test Response");
    }
@@ -50,1 +51,1 @@
    }

-   Response test7() {
+   ResponseEntity test7() {
        TestResponse response = new TestResponse("Test Response");
@@ -52,1 +53,1 @@
    Response test7() {
        TestResponse response = new TestResponse("Test Response");
-       return Response.status(Status.NOT_FOUND).entity(response).build();
+       return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }
@@ -55,2 +56,2 @@
    }

-   Response test8() {
-       return Response.status(Status.BAD_GATEWAY).header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).entity("Test Response").build();
+   ResponseEntity test8() {
+       return ResponseEntity.status(HttpStatus.BAD_GATEWAY).header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).body("Test Response");
    }
@@ -59,2 +60,2 @@
    }

-   Response test9() {
-       return Response.serverError().entity("Test Response").header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).build();
+   ResponseEntity test9() {
+       return ResponseEntity.internalServerError().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON).body("Test Response");
    }
@@ -63,2 +64,2 @@
    }

-   Response test10() {
-       return Response.noContent().build();
+   ResponseEntity test10() {
+       return ResponseEntity.noContent().build();
    }
@@ -67,2 +68,2 @@
    }

-   Response.ResponseBuilder test11() {
-       return Response.ok().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON);
+   BodyBuilder test11() {
+       return ResponseEntity.ok().header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.mvc.JaxrsToSpringMvcResponseEntity"
  displayName="Migrate JAX-RS Response to Spring MVC ResponseEntity"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.mvc.JaxrsToSpringMvcResponseEntity" />

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
