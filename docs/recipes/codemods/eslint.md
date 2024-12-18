---
sidebar_label: "Lint source code with ESLint"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lint source code with ESLint

**org.openrewrite.codemods.ESLint**

_Run [ESLint](https://eslint.org/) across the code to fix common static analysis issues in the code.  This requires the code to have an existing ESLint configuration._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-codemods/blob/main/src/main/java/org/openrewrite/codemods/ESLint.java), [Issue Tracker](https://github.com/openrewrite/rewrite-codemods/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-codemods/)

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `List` | patterns | *Optional*. The lint target files. This can contain any of file paths, directory paths, and glob patterns. | `lib/**/*.js` |
| `String` | parser | *Optional*. Parser used by ESLint to parse the source files. Defaults to `@typescript-eslint/parser`. See [ESLint documentation](https://eslint.org/docs/latest/use/configure/parsers) for more details. | `esprima` |
| `List` | parserOptions | *Optional*. A list of parser options for ESLint. The format is `key: value`. Defaults to `ecmaVersion: "latest", ecmaFeatures: { jsx: true }, sourceType: "module"`. See [ESLint documentation](https://eslint.org/docs/latest/use/configure/language-options#specifying-parser-options) for more details. | `ecmaVersion: 6, ecmaFeatures: { jsx: true }` |
| `Boolean` | allowInlineConfig | *Optional*. Whether inline config comments are allowed. Defaults to `false`. See [ESLint documentation](https://eslint.org/docs/latest/use/configure/rules#disabling-inline-comments) for more details. | `true` |
| `List` | envs | *Optional*. A list of `env` mappings for ESLint. The format is `key: value`. | `browser: true` |
| `List` | globals | *Optional*. Define global variables for rules that require knowledge of these. | `var1, var2: writable` |
| `List` | plugins | *Optional*. A list of plugins for ESLint. | `@typescript-eslint, prettier` |
| `List` | extend | *Optional*. A list of extends for ESLint. | `eslint:recommended, prettier` |
| `List` | rules | *Optional*. List of rules to be checked by ESLint. Optionally, the severity and other rule options can also be specified as e.g. `off`, `warn` or `["error", "always"]`. The severity `off` is useful when the rule is declared by an extended [shareable config](https://eslint.org/docs/latest/extend/ways-to-extend#shareable-configs). For more information, see the [ESLint documentation](https://eslint.org/docs/latest/use/configure/rules) | `eqeqeq: warn, multiline-comment-style: ["error", "starred-block"], prettier/prettier` |
| `Boolean` | fix | *Optional*. Automatically fix violations when possible. Defaults to `true`. | `false` |
                            | `String` | configFile | *Optional*. Allows specifying the full ESLint configuration file contents as multiline JSON. See [ESLint documentation](https://eslint.org/docs/latest/use/configure/configuration-files) for more details.

Note that this will override any other configuration options. |  |


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-codemods` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ESLint
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-codemods:{{VERSION_REWRITE_CODEMODS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.codemods.ESLint" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

### ESLint messages
**org.openrewrite.codemods.ESLintMessages**

_Errors and warnings as reported by ESLint._

| Column Name | Description |
| ----------- | ----------- |
| Source Path | The source path of the file. |
| Rule ID | ESLint Rule ID. |
| Severity | Either `Warning` or `Error`. |
| Fatal | Is this a fatal error (like a parse error). |
| Message | The message created by the rule. |
| Line | Line in source file this message pertains to. |
| Column | Column in source file this message pertains to. |

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

