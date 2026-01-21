---
sidebar_label: "Change XML attribute"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change XML attribute

**org.openrewrite.xml.ChangeTagAttribute**

_Alters XML attribute value on a specified element._

## Recipe source

[GitHub: ChangeTagAttribute.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/ChangeTagAttribute.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-xml/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | elementName | The name of the element whose attribute's value is to be changed. Interpreted as an XPath expression. | `property` |
| `String` | attributeName | The name of the attribute whose value is to be changed. | `name` |
| `String` | newValue | The new value to be used for key specified by `attributeName`, Set to null if you want to remove the attribute. | `newfoo.bar.attribute.value.string` |
| `String` | oldValue | *Optional*. Only change the property value if it matches the configured `oldValue`. | `foo.bar.attribute.value.string` |
| `Boolean` | regex | *Optional*. Default false. If true, `oldValue` will be interpreted as a Regular Expression, and capture group contents will be available in `newValue`. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Change cacheManager to use the SimpleCacheManager](/recipes/com/oracle/weblogic/rewrite/examples/spring/changecachemanagertosimplecachemanager.md)
* [Migrate RichFaces tags in `xhtml` files](/recipes/java/jsf/richfaces/update45/updatexhtmltags.md)
* [Migrate XJC Bindings to Jakata XML](/recipes/java/migrate/jakarta/javaxxmltojakartaxmlxjcbinding.md)
* [Migrate from OptaPlanner to Timefold Solver](/recipes/ai/timefold/solver/migration/fromoptaplannertotimefoldsolver.md)
* [Migrate to JSF 2.3](/recipes/java/jsf/migratetojsf_2_3.md)
* [Migrate to Spring ORM to 5](/recipes/java/spring/orm/springorm5.md)
* [Migrate to Struts 6.0 constants](/recipes/java/struts/migrate6/migratestruts6constants.md)
* [Migrate xmlns entries and javax. packages in `ejb-jar.xml` files](/recipes/java/migrate/jakarta/javaxejbjarxmltojakartaejbjarxml.md)
* [Migrate xmlns entries and javax. packages in `validation.xml` files](/recipes/java/migrate/jakarta/javaxbeanvalidationxmltojakartabeanvalidationxml.md)
* [Migrate xmlns entries in `**/batch-jobs/*.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxbatchjobsxmlstojakarta9batchjobsxmls.md)
* [Migrate xmlns entries in `**/validation/*.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxvalidationmappingxmlstojakarta9validationmappingxmls.md)
* [Migrate xmlns entries in `*-jdbc.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicjdbcxmlnamespace1412.md)
* [Migrate xmlns entries in `*-jms.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicjmsxmlnamespace1412.md)
* [Migrate xmlns entries in `*.tld` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxwebjsptaglibrarytldstojakarta9webjsptaglibrarytlds.md)
* [Migrate xmlns entries in `*.xjb` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxbindingsschemaxjbstojakarta9bindingsschemaxjbs.md)
* [Migrate xmlns entries in `*taglib*.xml` files for Jakarta Server Faces 3](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxfacestaglibraryxmltojakartafaces3taglibraryxml.md)
* [Migrate xmlns entries in `application-client.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicapplicationclientxmlnamespace1412.md)
* [Migrate xmlns entries in `application-client.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxapplicationclientxmltojakarta9applicationclientxml.md)
* [Migrate xmlns entries in `application.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxapplicationxmltojakarta9applicationxml.md)
* [Migrate xmlns entries in `batch.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxbatchxmltojakarta9batchxml.md)
* [Migrate xmlns entries in `beans.xml` files for Beans 3.0.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxbeansxmltojakarta9beansxml.md)
* [Migrate xmlns entries in `beans.xml` files](/recipes/java/migrate/jakarta/javaxbeansxmltojakartabeansxml.md)
* [Migrate xmlns entries in `ejb-jar.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxejbjarxmltojakarta9ejbjarxml.md)
* [Migrate xmlns entries in `faces-config.xml` files for Jakarta Server Faces 3](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxfacesconfigxmltojakartafaces3configxml.md)
* [Migrate xmlns entries in `faces-config.xml` files](/recipes/java/migrate/jakarta/jakartafacesconfigxml4.md)
* [Migrate xmlns entries in `faces-config.xml` files](/recipes/java/migrate/jakarta/javaxfacesconfigxmltojakartafacesconfigxml.md)
* [Migrate xmlns entries in `handler.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxwebhandlerxmltojakarta9handlerxml.md)
* [Migrate xmlns entries in `orm.xml` files](/recipes/java/migrate/jakarta/javaxormxmltojakartaormxml.md)
* [Migrate xmlns entries in `permissions.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxpermissionsxmltojakarta9permissionsxml.md)
* [Migrate xmlns entries in `persistence-configuration.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicpersistenceconfigurationxmlnamespace1412.md)
* [Migrate xmlns entries in `persistence.xml` files](/recipes/io/quarkus/updates/core/quarkus30/javaxpersistencexmltojakartapersistencexml.md)
* [Migrate xmlns entries in `persistence.xml` files](/recipes/java/migrate/jakarta/javaxpersistencexmltojakartapersistencexml.md)
* [Migrate xmlns entries in `plan.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicplanxmlnamespace1412.md)
* [Migrate xmlns entries in `ra.xml` files (Connectors).](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxraxmltojakarta9raxml.md)
* [Migrate xmlns entries in `resource-deployment-plan.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicresourcedeploymentplanxmlnamespace1412.md)
* [Migrate xmlns entries in `taglib.xml` files](/recipes/java/migrate/jakarta/jakartafacestaglibraryxml4.md)
* [Migrate xmlns entries in `taglib.xml` files](/recipes/java/migrate/jakarta/javaxfacestaglibraryxmltojakartafacestaglibraryxml.md)
* [Migrate xmlns entries in `test-web.xml` files for Jakarta Server Faces 3 using test interfaces](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxtestwebxmltojakartatestwebxml5.md)
* [Migrate xmlns entries in `web-fragment.xml` files for Jakarta Server Faces 3](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxwebfragmentxmltojakartawebfragmentxml5.md)
* [Migrate xmlns entries in `web-fragment.xml` files](/recipes/java/migrate/jakarta/jakartawebfragmentxml6.md)
* [Migrate xmlns entries in `web-fragment.xml` files](/recipes/java/migrate/jakarta/javaxwebfragmentxmltojakartawebfragmentxml.md)
* [Migrate xmlns entries in `web.xml` files for Jakarta Server Faces 3](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxwebxmltojakartawebxml5.md)
* [Migrate xmlns entries in `web.xml` files](/recipes/java/migrate/jakarta/jakartawebxml6.md)
* [Migrate xmlns entries in `web.xml` files](/recipes/java/migrate/jakarta/javaxwebxmltojakartawebxml.md)
* [Migrate xmlns entries in `weblogic-application.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicapplicationxmlnamespace1412.md)
* [Migrate xmlns entries in `weblogic-ejb-jar.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicejbjar32xmlnamespace1412.md)
* [Migrate xmlns entries in `weblogic-pubsub.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicpubsubxmlnamespace1412.md)
* [Migrate xmlns entries in `weblogic-ra.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicraxmlnamespace1412.md)
* [Migrate xmlns entries in `weblogic-rdbms-jar.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicrdbmsjarxmlnamespace1412.md)
* [Migrate xmlns entries in `weblogic-webservices-policy.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicwebservicespolicyrefxmlnamespace1412.md)
* [Migrate xmlns entries in `weblogic-webservices.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicwebservicesxmlnamespace1412.md)
* [Migrate xmlns entries in `weblogic-wsee-clientHandlerChain.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicwseeclienthandlerchainxmlnamespace1412.md)
* [Migrate xmlns entries in `weblogic-wsee-standaloneclient.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicwseestandaloneclientxmlnamespace1412.md)
* [Migrate xmlns entries in `weblogic.xml` files to WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogicxmlwebappnamespace1412.md)
* [Migrate xmlns entries in `webservices.xml` files.](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxwebservicesxmltojakarta9webservicesxml.md)
* [Remove unnecessary `use-authorization-manager` for message security in Spring security 6](/recipes/java/spring/security6/removeuseauthorizationmanager.md)
* [Replace global method security with method security](/recipes/java/spring/security5/replaceglobalmethodsecuritywithmethodsecurityxml.md)
* [Upgrade to Maven model version 4.1.0](/recipes/maven/upgradetomodelversion410.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|elementName|`bean`|
|attributeName|`id`|
|newValue|`myBean2.subpackage`|
|oldValue|`myBean.subpackage`|
|regex|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="xml" label="xml">


###### Before
```xml
<beans>
    <bean id='myBean.subpackage.subpackage2'/>
    <other id='myBean.subpackage.subpackage2'/>
</beans>
```

###### After
```xml
<beans>
    <bean id='myBean2.subpackage.subpackage2'/>
    <other id='myBean.subpackage.subpackage2'/>
</beans>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
<beans>
-   <bean id='myBean.subpackage.subpackage2'/>
+   <bean id='myBean2.subpackage.subpackage2'/>
    <other id='myBean.subpackage.subpackage2'/>
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeTagAttributeExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeTagAttributeExample
displayName: Change XML attribute example
recipeList:
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: newfoo.bar.attribute.value.string
      oldValue: foo.bar.attribute.value.string
```

Now that `com.yourorg.ChangeTagAttributeExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ChangeTagAttributeExample")
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
            <recipe>com.yourorg.ChangeTagAttributeExample</recipe>
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
mod run . --recipe ChangeTagAttribute --recipe-option "elementName=property" --recipe-option "attributeName=name" --recipe-option "newValue=newfoo.bar.attribute.value.string" --recipe-option "oldValue=foo.bar.attribute.value.string"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-xml:{{VERSION_ORG_OPENREWRITE_REWRITE_XML}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.xml.ChangeTagAttribute" />

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
