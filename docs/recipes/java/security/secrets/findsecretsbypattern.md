---
sidebar_label: "Find secrets with regular expressions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find secrets with regular expressions

**org.openrewrite.java.security.secrets.FindSecretsByPattern**

_A secret is a literal that matches any one of the provided patterns._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | secretName | The type of secret that this recipe is looking for. | `AWS Access Key` |
| `String` | keyPattern | *Optional*. A regular expression to match a 'key' against. For example, a key  | `[a-zA-Z0-9+\/=]{88}` |
| `String` | valuePattern | A regular expression to search for. | `[a-zA-Z0-9+\/=]{88}` |


## Used by

This recipe is used as part of the following composite recipes:

* [Find AWS secrets](/recipes/java/security/secrets/findawssecrets.md)
* [Find Artifactory secrets](/recipes/java/security/secrets/findartifactorysecrets.md)
* [Find Azure secrets](/recipes/java/security/secrets/findazuresecrets.md)
* [Find Discord secrets](/recipes/java/security/secrets/finddiscordsecrets.md)
* [Find Facebook secrets](/recipes/java/security/secrets/findfacebooksecrets.md)
* [Find GitHub secrets](/recipes/java/security/secrets/findgithubsecrets.md)
* [Find Google secrets](/recipes/java/security/secrets/findgooglesecrets.md)
* [Find Heroku secrets](/recipes/java/security/secrets/findherokusecrets.md)
* [Find MailChimp secrets](/recipes/java/security/secrets/findmailchimpsecrets.md)
* [Find Mailgun secrets](/recipes/java/security/secrets/findmailgunsecrets.md)
* [Find NPM secrets](/recipes/java/security/secrets/findnpmsecrets.md)
* [Find PGP secrets](/recipes/java/security/secrets/findpgpsecrets.md)
* [Find PayPal secrets](/recipes/java/security/secrets/findpaypalsecrets.md)
* [Find Picatic secrets](/recipes/java/security/secrets/findpicaticsecrets.md)
* [Find RSA private keys](/recipes/java/security/secrets/findrsasecrets.md)
* [Find SSH secrets](/recipes/java/security/secrets/findsshsecrets.md)
* [Find SendGrid secrets](/recipes/java/security/secrets/findsendgridsecrets.md)
* [Find Square secrets](/recipes/java/security/secrets/findsquaresecrets.md)
* [Find Stripe secrets](/recipes/java/security/secrets/findstripesecrets.md)
* [Find Telegram secrets](/recipes/java/security/secrets/findtelegramsecrets.md)
* [Find Twilio secrets](/recipes/java/security/secrets/findtwiliosecrets.md)
* [Find Twitter secrets](/recipes/java/security/secrets/findtwittersecrets.md)
* [Find generic secrets](/recipes/java/security/secrets/findgenericsecrets.md)
* [Find passwords used in URLs](/recipes/java/security/secrets/findpasswordinurlsecrets.md)


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindSecretsByPatternExample
displayName: Find secrets with regular expressions example
recipeList:
  - org.openrewrite.java.security.secrets.FindSecretsByPattern: 
      secretName: AWS Access Key
      keyPattern: '[a-zA-Z0-9+\/=]{88}'
      valuePattern: '[a-zA-Z0-9+\/=]{88}'
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindSecretsByPattern --recipe-option "secretName=AWS Access Key" --recipe-option "keyPattern='[a-zA-Z0-9+\/=]{88}'" --recipe-option "valuePattern='[a-zA-Z0-9+\/=]{88}'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-security:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.security.secrets.FindSecretsByPattern" />

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
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
