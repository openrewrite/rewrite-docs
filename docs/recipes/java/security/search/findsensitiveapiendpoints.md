---
sidebar_label: "Find sensitive API endpoints"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find sensitive API endpoints

**org.openrewrite.java.security.search.FindSensitiveApiEndpoints**

_Find data models exposed by REST APIs that contain sensitive information like PII and secrets._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `List` | fieldNames | Field names to search for. | `password,dateOfBirth,dob,ssn` |
| `Boolean` | transitive | *Optional*. Find model objects that contain other model objects that contain sensitive data. |  |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|fieldNames|`List.of("birthdate")`|
|transitive|`true`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.arakelian.faker.model.Person;
import com.arakelian.faker.service.RandomPerson;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/person")
class PersonController {
    @GetMapping("/random")
    public Person randomPerson() {
        return RandomPerson.get().next();
    }
}
```

###### After
```java
import com.arakelian.faker.model.Person;
import com.arakelian.faker.service.RandomPerson;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/person")
class PersonController {
    @GetMapping("/random")
    public /*~~(com.arakelian.faker.model.Person#getBirthdate)~~>*/Person randomPerson() {
        return RandomPerson.get().next();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -9,1 +9,1 @@
class PersonController {
    @GetMapping("/random")
-   public Person randomPerson() {
+   public /*~~(com.arakelian.faker.model.Person#getBirthdate)~~>*/Person randomPerson() {
        return RandomPerson.get().next();
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindSensitiveApiEndpointsExample
displayName: Find sensitive API endpoints example
recipeList:
  - org.openrewrite.java.security.search.FindSensitiveApiEndpoints: 
      fieldNames: password,dateOfBirth,dob,ssn
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindSensitiveApiEndpoints --recipe-option "fieldNames=password,dateOfBirth,dob,ssn"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-security:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindSensitiveApiEndpoints" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.java.security.table.SensitiveApiEndpoints" label="SensitiveApiEndpoints">

### Sensitive API endpoints
**org.openrewrite.java.security.table.SensitiveApiEndpoints**

_The API endpoints that expose sensitive data._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the API endpoint definition. |
| Method name | The name of the method that defines the API endpoint. |
| Method | The HTTP method of the API endpoint. |
| Path | The path of the API endpoint. |
| Sensitive field | The piece of sensitive data that is included. |
| Sensitive data path | The sensitive data exposed by the API endpoint. |

</TabItem>

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
