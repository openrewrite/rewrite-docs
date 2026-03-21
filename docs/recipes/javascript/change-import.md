---
sidebar_label: "Change import"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change import

**org.openrewrite.javascript.change-import**

_Changes an import from one module/member to another, updating all type attributions._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.change-import](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.change-import),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | oldModule | The module to change imports from | `react-dom/test-utils` |
| `null` | oldMember | The member to change (or 'default' for default imports, '*' for namespace imports) | `act` |
| `null` | newModule | The module to change imports to | `react` |
| `null` | newMember | *Optional*. The new member name. If not specified, keeps the same member name. | `act` |
| `null` | newAlias | *Optional*. Optional alias for the new import. Required when newMember is 'default' or '*'. |  |


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.change-import"
  displayName="Change import"
  npmPackage="@openrewrite/rewrite"
/>
