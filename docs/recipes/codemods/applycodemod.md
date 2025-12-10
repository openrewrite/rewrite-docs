---
sidebar_label: "Applies a codemod to all source files"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Applies a codemod to all source files

**org.openrewrite.codemods.ApplyCodemod**

_Applies a codemod represented by an NPM package to all source files._

## Recipe source

[GitHub](https://github.com/moderneinc/rewrite-codemods/blob/main/src/main/java/org/openrewrite/codemods/ApplyCodemod.java),
[Issue Tracker](https://github.com/moderneinc/rewrite-codemods/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-codemods/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | transform | Transform to be applied using the executable. | `-t path/to/transform/optimus-prime` |
| `String` | executable | *Optional*. Path to the codemod executable relative to the NPM directory. Defaults to `jscodeshift/bin/jscodeshift.js`. | `@next/codemod/bin/next-codemod.js` |
| `String` | fileFilter | Optional glob pattern to filter files to apply the codemod to. Defaults to all files. Note: not all codemods support file glob filtering. | `**/*.(j|t)sx` |
| `List` | codemodArgs | *Optional*. Arguments which get passed to the codemod command. | `--force --jscodeshift='--parser=${parser}'` |


## Used by

This recipe is used as part of the following composite recipes:

* [Add React imports](/recipes/codemods/migrate/nextjs/v10/addmissingreactimport.md)
* [Adds `DefaultTheme` module augmentation to typescript projects.](/recipes/codemods/migrate/mui/themeaugment.md)
* [Combination of all deprecations](/recipes/codemods/migrate/mui/all.md)
* [Convert `var` to `let`](/recipes/codemods/ecmascript/5to6/vartolet.md)
* [Converts ExpansionPanel to use ExpansionPanel component](/recipes/codemods/migrate/mui/expansionpanelcomponent.md)
* [Converts GridList to use Grid component](/recipes/codemods/migrate/mui/gridlistcomponent.md)
* [Converts JSS styles to styled-components](/recipes/codemods/migrate/mui/jsstostyled.md)
* [Converts JSS to TypeScript in React components](/recipes/codemods/migrate/mui/jsstotssreact.md)
* [Converts `rootRef` to `ref`](/recipes/codemods/migrate/mui/rootref.md)
* [Converts `sx` prop to `sx` style prop](/recipes/codemods/migrate/mui/boxsxprop.md)
* [Converts all `@mui/material` submodule imports to the root module](/recipes/codemods/migrate/mui/toplevelimports.md)
* [Converts base imports to use React hooks](/recipes/codemods/migrate/mui/basehookimports.md)
* [Converts components to use the v4 adapter module](/recipes/codemods/migrate/mui/adapterv.md)
* [Ensures presets are safe to use](/recipes/codemods/migrate/mui/presetsafe.md)
* [Generate named exports from CommonJS modules](/recipes/codemods/ecmascript/5to6/namedexportgeneration.md)
* [Migrate `ImageResponse` imports](/recipes/codemods/migrate/nextjs/v14_0/nextogimport.md)
* [Migrate to the New Image Component](/recipes/codemods/migrate/nextjs/v13_0/nextimageexperimental.md)
* [Moves date pickers to `@mui/x-date-picker`](/recipes/codemods/migrate/mui/datepickersmovedtox.md)
* [Moves lab modules to `@mui/material`](/recipes/codemods/migrate/mui/movedlabmodules.md)
* [Moves tree view to `@mui/x-tree-view`](/recipes/codemods/migrate/mui/treeviewmovedtox.md)
* [Optimizes imports](/recipes/codemods/migrate/mui/optimalimports.md)
* [Prepends emotion cache](/recipes/codemods/migrate/mui/emotionprependcache.md)
* [Remove &quot;use strict&quot; directives](/recipes/codemods/ecmascript/5to6/nostrict.md)
* [Remove `&lt;a&gt;` Tags From Link Components](/recipes/codemods/migrate/nextjs/v13_0/newlink.md)
* [Remove system props and add them to the `sx` prop](/recipes/codemods/migrate/mui/systemprops.md)
* [Removes `Unstyled` suffix from base components](/recipes/codemods/migrate/mui/baseremoveunstyledsuffix.md)
* [Removes `component` prop from base components](/recipes/codemods/migrate/mui/baseremovecomponentprop.md)
* [Removes `imgProps` prop from Avatar component](/recipes/codemods/migrate/mui/joyavatarremoveimgprops.md)
* [Rename Next Image Imports](/recipes/codemods/migrate/nextjs/v11/cratonext.md)
* [Rename Next Image Imports](/recipes/codemods/migrate/nextjs/v13_0/nextimagetolegacyimage.md)
* [Renames CSS properties for Box component](/recipes/codemods/migrate/mui/boxrenamecss.md)
* [Renames CSS variables](/recipes/codemods/migrate/mui/renamecssvariables.md)
* [Renames `Mui` classname prefix](/recipes/codemods/migrate/mui/joyrenameclassnameprefix.md)
* [Renames `TextField` to `Input`](/recipes/codemods/migrate/mui/joytextfieldtoinput.md)
* [Renames `alpha` prop to `opacity`](/recipes/codemods/migrate/mui/faderenamealpha.md)
* [Renames `closeIcon` prop to `closeButtonIcon`](/recipes/codemods/migrate/mui/autocompleterenamecloseicon.md)
* [Renames `collapsedHeight` prop to `transitionCollapsedHeight`](/recipes/codemods/migrate/mui/collapserenamecollapsedheight.md)
* [Renames `color` prop to `colorOverride`](/recipes/codemods/migrate/mui/buttoncolorprop.md)
* [Renames `component` prop to `as`](/recipes/codemods/migrate/mui/componentrenameprop.md)
* [Renames `gap` prop to `spacing`](/recipes/codemods/migrate/mui/boxrenamegap.md)
* [Renames `option` prop to `getOptionLabel`](/recipes/codemods/migrate/mui/autocompleterenameoption.md)
* [Renames `row` prop to `flexDirection=&quot;row&quot;`](/recipes/codemods/migrate/mui/joyrenamerowprop.md)
* [Renames base components to slots](/recipes/codemods/migrate/mui/baserenamecomponentstoslots.md)
* [Renames components to slots](/recipes/codemods/migrate/mui/joyrenamecomponentstoslots.md)
* [Replace all function expressions with only `return` statement with simple arrow](/recipes/codemods/ecmascript/5to6/simplearrow.md)
* [Replace lodash and underscore array functions with native JavaScript](/recipes/codemods/migrate/lodash/lodashunderscorearray.md)
* [Replace lodash and underscore function functions with native JavaScript](/recipes/codemods/migrate/lodash/lodashunderscorefunction.md)
* [Replace lodash and underscore object functions with native JavaScript](/recipes/codemods/migrate/lodash/lodashunderscoreobjects.md)
* [Replace lodash and underscore utility functions with native JavaScript](/recipes/codemods/migrate/lodash/lodashunderscoreutil.md)
* [Replaces `@mui` imports with `@mui/material`](/recipes/codemods/migrate/mui/muireplace.md)
* [Transform AMD style `define()` calls to ES6 `import` statements](/recipes/codemods/ecmascript/5to6/amdtoesm.md)
* [Transform AMP HOC into page config](/recipes/codemods/migrate/nextjs/v8/withamptoconfig.md)
* [Transform Anonymous Components into Named Components](/recipes/codemods/migrate/nextjs/v9/namedefaultcomponent.md)
* [Transform CommonJS style `require()` calls to ES6 `import` statements](/recipes/codemods/ecmascript/5to6/cjstoesm.md)
* [Update the theme creation from `@mui/system@v5` to be compatible with `@pigment-css/react`](/recipes/codemods/migrate/mui/themev.md)
* [Update the usage of the `sx` prop to be compatible with `@pigment-css/react`](/recipes/codemods/migrate/mui/sxprop.md)
* [Updates `borderRadius` prop values](/recipes/codemods/migrate/mui/boxborderradiusvalues.md)
* [Updates `circle` prop to `variant=&quot;circular&quot;`](/recipes/codemods/migrate/mui/avatarcirclecircular.md)
* [Updates `circular` prop to `variant=&quot;circular&quot;`](/recipes/codemods/migrate/mui/paginationroundcircular.md)
* [Updates `down` prop for Hidden component](/recipes/codemods/migrate/mui/hiddendownprops.md)
* [Updates `justify` prop to `justifyContent` for Grid component](/recipes/codemods/migrate/mui/gridjustifyjustifycontent.md)
* [Updates `minRows` and `maxRows` props for TextareaAutosize component](/recipes/codemods/migrate/mui/textareaminmaxrows.md)
* [Updates `overlap` prop to `variant=&quot;dot&quot;`](/recipes/codemods/migrate/mui/badgeoverlapvalue.md)
* [Updates `round` values for theme typography](/recipes/codemods/migrate/mui/themetypographyround.md)
* [Updates `size` prop for IconButton component](/recipes/codemods/migrate/mui/iconbuttonsize.md)
* [Updates `variant` prop for Chip component](/recipes/codemods/migrate/mui/chipvariantprop.md)
* [Updates `variant` prop for CircularProgress component](/recipes/codemods/migrate/mui/circularprogressvariant.md)
* [Updates `variant` prop for Fab component](/recipes/codemods/migrate/mui/fabvariant.md)
* [Updates `variant` prop for Skeleton component](/recipes/codemods/migrate/mui/skeletonvariant.md)
* [Updates `variant` prop usage](/recipes/codemods/migrate/mui/variantprop.md)
* [Updates `width` values for theme breakpoints](/recipes/codemods/migrate/mui/themebreakpointswidth.md)
* [Updates base imports to use named exports](/recipes/codemods/migrate/mui/baseusenamedexports.md)
* [Updates createMuiTheme usage](/recipes/codemods/migrate/mui/createtheme.md)
* [Updates import paths for core styles](/recipes/codemods/migrate/mui/corestylesimport.md)
* [Updates link underline on hover](/recipes/codemods/migrate/mui/linkunderlinehover.md)
* [Updates props for Dialog component](/recipes/codemods/migrate/mui/dialogprops.md)
* [Updates props for DialogTitle component](/recipes/codemods/migrate/mui/dialogtitleprops.md)
* [Updates props for Modal component](/recipes/codemods/migrate/mui/modalprops.md)
* [Updates props for Table component](/recipes/codemods/migrate/mui/tableprops.md)
* [Updates scroll buttons for Tabs component](/recipes/codemods/migrate/mui/tabsscrollbuttons.md)
* [Updates the usage of `styled` from `@mui/system@v5` to be compatible with` @pigment-css/react`](/recipes/codemods/migrate/mui/styled.md)
* [Updates the usage of the `@mui/material/Grid2`, `@mui/system/Grid`, and `@mui/joy/Grid` components to their updated APIs.](/recipes/codemods/migrate/mui/gridvprops.md)
* [Updates theme breakpoints](/recipes/codemods/migrate/mui/themebreakpoints.md)
* [Updates theme options](/recipes/codemods/migrate/mui/themeoptions.md)
* [Updates theme palette mode](/recipes/codemods/migrate/mui/themepalettemode.md)
* [Updates theme spacing API](/recipes/codemods/migrate/mui/themespacingapi.md)
* [Updates theme spacing](/recipes/codemods/migrate/mui/themespacing.md)
* [Updates usage of ThemeProvider](/recipes/codemods/migrate/mui/themeprovider.md)
* [Updates usage of `@mui/styles`](/recipes/codemods/migrate/mui/materialuistyles.md)
* [Updates usage of `@mui/types`](/recipes/codemods/migrate/mui/materialuitypes.md)
* [Updates usage of styled engine provider](/recipes/codemods/migrate/mui/styledengineprovider.md)
* [Updates usage of transitions](/recipes/codemods/migrate/mui/transitions.md)
* [Updates usage of useAutocomplete](/recipes/codemods/migrate/mui/useautocomplete.md)
* [Updates usage of useTransitionProps](/recipes/codemods/migrate/mui/usetransitionprops.md)
* [Updates withMobileDialog higher-order component](/recipes/codemods/migrate/mui/withmobiledialog.md)
* [Updates withWidth higher-order component](/recipes/codemods/migrate/mui/withwidth.md)
* [Use Built-in Font](/recipes/codemods/migrate/nextjs/v13_2/builtinnextfont.md)
* [Use `viewport` export](/recipes/codemods/migrate/nextjs/v14_0/metadatatoviewportexport.md)
* [Use `withRouter`](/recipes/codemods/migrate/nextjs/v6/urltowithrouter.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ApplyCodemodExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ApplyCodemodExample
displayName: Applies a codemod to all source files example
recipeList:
  - org.openrewrite.codemods.ApplyCodemod:
      transform: '-t path/to/transform/optimus-prime'
      executable: '@next/codemod/bin/next-codemod.js'
      fileFilter: '**/*.(j|t)sx'
      codemodArgs: --force --jscodeshift='--parser=${parser}'
```

Now that `com.yourorg.ApplyCodemodExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-codemods:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ApplyCodemodExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-codemods:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}")
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
<TabItem value="maven" label="Maven">

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
            <recipe>com.yourorg.ApplyCodemodExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-codemods</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ApplyCodemod --recipe-option "transform='-t path/to/transform/optimus-prime'" --recipe-option "executable='@next/codemod/bin/next-codemod.js'" --recipe-option "fileFilter='**/*.(j|t)sx'" --recipe-option "codemodArgs=--force --jscodeshift='--parser=${parser}'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-codemods:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.codemods.ApplyCodemod" />

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
