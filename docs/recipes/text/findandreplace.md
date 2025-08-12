---
sidebar_label: "Find and replace"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find and replace

**org.openrewrite.text.FindAndReplace**

_Textual find and replace, optionally interpreting the search query as a Regular Expression (regex). When operating on source files that are language-specific Lossless Semantic Tree, such as Java or XML, this operation converts the source file to plain text for the rest of the recipe run. So if you are combining this recipe with language-specific recipes in a single recipe run put all the language-specific recipes before this recipe._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/text/FindAndReplace.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-core/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | find | The text to find (and replace). This snippet can be multiline. | `blacklist` |
| `String` | replace | *Optional*. The replacement text for `find`. This snippet can be multiline. | `denylist` |
| `Boolean` | regex | *Optional*. Default false. If true, `find` will be interpreted as a [Regular Expression](https://en.wikipedia.org/wiki/Regular_expression), and capture group contents will be available in `replace`. |  |
| `Boolean` | caseSensitive | *Optional*. If `true` the search will be sensitive to case. Default `false`. |  |
| `Boolean` | multiline | *Optional*. When performing a regex search setting this to `true` allows "^" and "$" to match the beginning and end of lines, respectively. When performing a regex search when this is `false` "^" and "$" will match only the beginning and ending of the entire source file, respectively.Has no effect when not performing a regex search. Default `false`. |  |
| `Boolean` | dotAll | *Optional*. When performing a regex search setting this to `true` allows "." to match line terminators.Has no effect when not performing a regex search. Default `false`. |  |
| `String` | filePattern | *Optional*. A glob expression that can be used to constrain which directories or source files should be searched. Multiple patterns may be specified, separated by a semicolon `;`. If multiple patterns are supplied any of the patterns matching will be interpreted as a match. When not set, all source files are searched. | `**/*.java` |
| `Boolean` | plaintextOnly | *Optional*. Only alter files that are parsed as plaintext to prevent language-specific LST information loss. Defaults to false. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Faces XHTML migration for Jakarta EE 10](/recipes/java/migrate/jakarta/jakartafacesxhtmlee10.md)
* [Faces XHTML migration for Jakarta EE 9](/recipes/com/oracle/weblogic/rewrite/jakarta/jakartafaces3xhtml.md)
* [Faces XHTML migration for Jakarta EE 9](/recipes/java/migrate/jakarta/jakartafacesxhtmlee9.md)
* [Migrate JSF values inside EcmaScript files](/recipes/java/migrate/jakarta/jakartafacesecmascript.md)
* [Migrate deprecated `javax.validation` packages to `jakarta.validation`](/recipes/java/migrate/jakarta/javaxvalidationmigrationtojakartavalidation.md)
* [Migrate javax.jms to jakarta.jms on MDB](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxjmstojakartajmsonmdb.md)
* [Migrate xmlns entries and javax. packages in `ejb-jar.xml` files](/recipes/java/migrate/jakarta/javaxejbjarxmltojakartaejbjarxml.md)
* [Migrate xmlns entries and javax. packages in `validation.xml` files](/recipes/java/migrate/jakarta/javaxbeanvalidationxmltojakartabeanvalidationxml.md)
* [Migrate xmlns entries in `**/validation/*.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxvalidationmappingxmlstojakarta9validationmappingxmls.md)
* [Migrate xmlns entries in `*-jdbc.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicjdbcxmlnamespace1511.md)
* [Migrate xmlns entries in `*-jms.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicjmsxmlnamespace1511.md)
* [Migrate xmlns entries in `*.tld` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxwebjsptaglibrarytldstojakarta9webjsptaglibrarytlds.md)
* [Migrate xmlns entries in `*.xjb` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxbindingsschemaxjbstojakarta9bindingsschemaxjbs.md)
* [Migrate xmlns entries in `*taglib*.xml` files for Jakarta Server Faces 3](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxfacestaglibraryxmltojakartafaces3taglibraryxml.md)
* [Migrate xmlns entries in `application-client.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicapplicationclientxmlnamespace1511.md)
* [Migrate xmlns entries in `application-client.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxapplicationclientxmltojakarta9applicationclientxml.md)
* [Migrate xmlns entries in `application.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxapplicationxmltojakarta9applicationxml.md)
* [Migrate xmlns entries in `batch.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxbatchxmltojakarta9batchxml.md)
* [Migrate xmlns entries in `ejb-jar.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxejbjarxmltojakarta9ejbjarxml.md)
* [Migrate xmlns entries in `faces-config.xml` files for Jakarta Server Faces 3](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxfacesconfigxmltojakartafaces3configxml.md)
* [Migrate xmlns entries in `faces-config.xml` files](/recipes/java/migrate/jakarta/javaxfacesconfigxmltojakartafacesconfigxml.md)
* [Migrate xmlns entries in `handler.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxwebhandlerxmltojakarta9handlerxml.md)
* [Migrate xmlns entries in `permissions.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxpermissionsxmltojakarta9permissionsxml.md)
* [Migrate xmlns entries in `persistence-configuration.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicpersistenceconfigurationxmlnamespace1511.md)
* [Migrate xmlns entries in `plan.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicplanxmlnamespace1511.md)
* [Migrate xmlns entries in `ra.xml` files (Connectors).](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxraxmltojakarta9raxml.md)
* [Migrate xmlns entries in `resource-deployment-plan.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicresourcedeploymentplanxmlnamespace1511.md)
* [Migrate xmlns entries in `taglib.xml` files](/recipes/java/migrate/jakarta/javaxfacestaglibraryxmltojakartafacestaglibraryxml.md)
* [Migrate xmlns entries in `test-*.xml` files for Jakarta EE 9.1 using test interfaces](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxtestxmlstojakartatestsxmls.md)
* [Migrate xmlns entries in `web-fragment.xml` files for Jakarta Server Faces 3](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxwebfragmentxmltojakartawebfragmentxml5.md)
* [Migrate xmlns entries in `web-fragment.xml` files](/recipes/java/migrate/jakarta/javaxwebfragmentxmltojakartawebfragmentxml.md)
* [Migrate xmlns entries in `web.xml` files for Jakarta Server Faces 3](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxwebxmltojakartawebxml5.md)
* [Migrate xmlns entries in `web.xml` files](/recipes/java/migrate/jakarta/javaxwebxmltojakartawebxml.md)
* [Migrate xmlns entries in `weblogic-application.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicapplicationxmlnamespace1511.md)
* [Migrate xmlns entries in `weblogic-ejb-jar.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicejbjar32xmlnamespace1511.md)
* [Migrate xmlns entries in `weblogic-pubsub.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicpubsubxmlnamespace1511.md)
* [Migrate xmlns entries in `weblogic-ra.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicraxmlnamespace1511.md)
* [Migrate xmlns entries in `weblogic-rdbms-jar.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicrdbmsjarxmlnamespace1511.md)
* [Migrate xmlns entries in `weblogic-webservices-policy.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicwebservicespolicyrefxmlnamespace1511.md)
* [Migrate xmlns entries in `weblogic-webservices.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicwebservicesxmlnamespace1511.md)
* [Migrate xmlns entries in `weblogic-wsee-clientHandlerChain.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicwseeclienthandlerchainxmlnamespace1511.md)
* [Migrate xmlns entries in `weblogic-wsee-standaloneclient.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicwseestandaloneclientxmlnamespace1511.md)
* [Migrate xmlns entries in `weblogic.xml` files to WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/weblogicxmlwebappnamespace1511.md)
* [Migrate xmlns entries in `webservices.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxwebservicesxmltojakarta9webservicesxml.md)
* [OmniFaces Namespace Migration](/recipes/java/migrate/jakarta/omnifacesnamespacemigration.md)
* [Relocate Launcher Classes](/recipes/java/spring/boot3/relocatelauncherclasses.md)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaCodestartsTests](/recipes/io/quarkus/updates/core/quarkus30/javaxtojakartacodestartstests.md)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaCodestarts](/recipes/io/quarkus/updates/core/quarkus30/javaxtojakartacodestarts.md)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaDocumentationAdoc](/recipes/io/quarkus/updates/core/quarkus30/javaxtojakartadocumentationadoc.md)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaDocumentationMd](/recipes/io/quarkus/updates/core/quarkus30/javaxtojakartadocumentationmd.md)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaKotlinCodestartsTests](/recipes/io/quarkus/updates/core/quarkus30/javaxtojakartakotlincodestartstests.md)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaKotlinCodestarts](/recipes/io/quarkus/updates/core/quarkus30/javaxtojakartakotlincodestarts.md)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaKotlin](/recipes/io/quarkus/updates/core/quarkus30/javaxtojakartakotlin.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindAndReplaceExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindAndReplaceExample
displayName: Find and replace example
recipeList:
  - org.openrewrite.text.FindAndReplace:
      find: blacklist
      replace: denylist
      filePattern: '**/*.java'
```

Now that `com.yourorg.FindAndReplaceExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.FindAndReplaceExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
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
            <recipe>com.yourorg.FindAndReplaceExample</recipe>
          </activeRecipes>
        </configuration>
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
mod run . --recipe FindAndReplace --recipe-option "find=blacklist" --recipe-option "replace=denylist" --recipe-option "filePattern='**/*.java'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-core:{{VERSION_ORG_OPENREWRITE_REWRITE_CORE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.text.FindAndReplace" />

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

## Contributors

Sam Snyder, Nick McKinney, Knut Wannheden, Ryan Hudson, Tim te Beek, Jonathan Schneider
