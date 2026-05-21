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


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate `PrimeNGConfig` to `PrimeNG`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/migrateprimengconfigtoprimeng)
* [Move `DOCUMENT` import to `@angular/core`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/migration/move-document-import)
* [Rename `Calendar` to `DatePicker`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/renamecalendartodatepicker)
* [Rename `Dropdown` to `Select`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/renamedropdowntoselect)
* [Rename `InputSwitch` to `ToggleSwitch`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/renameinputswitchtotoggleswitch)
* [Rename `Message` interface to `ToastMessageOptions`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/renamemessageinterface)
* [Rename `OverlayPanel` to `Popover`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/renameoverlaypaneltopopover)
* [Rename `Sidebar` to `Drawer`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/renamesidebartodrawer)
* [Upgrade to Angular 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular16)
* [Upgrade to Angular 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18)
* [Upgrade to Angular 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.change-import"
  displayName="Change import"
  npmPackage="@openrewrite/rewrite"
/>
