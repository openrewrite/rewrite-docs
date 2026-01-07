---
sidebar_label: "Find PII exposure in logs and external APIs"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find PII exposure in logs and external APIs

**org.openrewrite.analysis.java.privacy.FindPiiExposure**

_Detects when Personally Identifiable Information (PII) is exposed through logging statements or sent to external APIs without proper sanitization. This helps prevent data leaks and ensures compliance with privacy regulations like GDPR and CCPA._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    static class User {
        private String email;
        private String ssn;
        private String creditCardNumber;

        public String getEmail() { return email; }
        public String getSsn() { return ssn; }
        public String getCreditCardNumber() { return creditCardNumber; }
    }

    void processUser(User user) {
        logger.info("Processing user with email: " + user.getEmail());
        logger.debug("User SSN: {}", user.getSsn());
        logger.error("Failed to process credit card: " + user.getCreditCardNumber());
    }
}
```

###### After
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    static class User {
        private String email;
        private String ssn;
        private String creditCardNumber;

        public String getEmail() { return email; }
        public String getSsn() { return ssn; }
        public String getCreditCardNumber() { return creditCardNumber; }
    }

    void processUser(User user) {
        /*~~(PII logged)~~>*/logger.info("Processing user with email: " + user.getEmail());
        /*~~(PII logged)~~>*/logger.debug("User SSN: {}", user.getSsn());
        /*~~(PII logged)~~>*/logger.error("Failed to process credit card: " + user.getCreditCardNumber());
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -18,3 +18,3 @@

    void processUser(User user) {
-       logger.info("Processing user with email: " + user.getEmail());
-       logger.debug("User SSN: {}", user.getSsn());
-       logger.error("Failed to process credit card: " + user.getCreditCardNumber());
+       /*~~(PII logged)~~>*/logger.info("Processing user with email: " + user.getEmail());
+       /*~~(PII logged)~~>*/logger.debug("User SSN: {}", user.getSsn());
+       /*~~(PII logged)~~>*/logger.error("Failed to process credit card: " + user.getCreditCardNumber());
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
mod run . --recipe FindPiiExposure
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-program-analysis:{{VERSION_IO_MODERNE_RECIPE_REWRITE_PROGRAM_ANALYSIS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.analysis.java.privacy.FindPiiExposure" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.analysis.java.taint.table.TaintFlowTable" label="TaintFlowTable">

### Taint flow
**org.openrewrite.analysis.java.taint.table.TaintFlowTable**

_Records taint flows from sources to sinks with their taint types._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file that the method call occurred in. |
| Source line | The line number where the taint source is located. |
| Source | The source code where taint originates. |
| Sink line | The line number where the taint sink is located. |
| Sink | The sink code where taint flows to. |
| Taint type | The taint type that matched at the sink. |

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
