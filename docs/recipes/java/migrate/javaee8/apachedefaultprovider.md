---
sidebar_label: "Flags any `org.apache.bval.jsr*` (bval 1.1) and `org.apache.bval.jsr303*` (bval 1.0) package references"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Flags any `org.apache.bval.jsr*` (bval 1.1) and `org.apache.bval.jsr303*` (bval 1.0) package references

**org.openrewrite.java.migrate.javaee8.ApacheDefaultProvider**

_This recipe flags any `org.apache.bval.jsr*` (bval 1.1) and `org.apache.bval.jsr303*` (bval 1.0) package references in validation.xml deployment descriptors. Bean Validation 2.0 and later use the Hibernate Validator implementation instead of the Apache BVal implementation which was used for Bean Validation 1.0 and 1.1._

## Recipe source

[GitHub: java-ee-8.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-ee-8.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change XML tag value](../../../xml/changetagvalue)
  * elementName: `/validation-config/default-provider`
  * newValue: `org.hibernate.validator.HibernateValidator`
* [Change XML tag value](../../../xml/changetagvalue)
  * elementName: `/validation-config/message-interpolator`
  * newValue: `org.hibernate.validator.messageinterpolation.ResourceBundleMessageInterpolator`
* [Change XML tag value](../../../xml/changetagvalue)
  * elementName: `/validation-config/traversable-resolver`
  * newValue: `org.hibernate.validator.engine.resolver.DefaultTraversableResolver`
* [Change XML tag value](../../../xml/changetagvalue)
  * elementName: `/validation-config/constraint-validator-factory`
  * newValue: `org.hibernate.validator.engine.ConstraintValidatorFactoryImpl`
* [Remove XML tag](../../../xml/removexmltag)
  * xPath: `/validation-config/parameter-name-provider`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javaee8.ApacheDefaultProvider
displayName: Flags any `org.apache.bval.jsr*` (bval 1.1) and `org.apache.bval.jsr303*` (bval 1.0) package references
description: |
  This recipe flags any `org.apache.bval.jsr*` (bval 1.1) and `org.apache.bval.jsr303*` (bval 1.0) package references in validation.xml deployment descriptors. Bean Validation 2.0 and later use the Hibernate Validator implementation instead of the Apache BVal implementation which was used for Bean Validation 1.0 and 1.1.
recipeList:
  - org.openrewrite.xml.ChangeTagValue:
      elementName: /validation-config/default-provider
      newValue: org.hibernate.validator.HibernateValidator
  - org.openrewrite.xml.ChangeTagValue:
      elementName: /validation-config/message-interpolator
      newValue: org.hibernate.validator.messageinterpolation.ResourceBundleMessageInterpolator
  - org.openrewrite.xml.ChangeTagValue:
      elementName: /validation-config/traversable-resolver
      newValue: org.hibernate.validator.engine.resolver.DefaultTraversableResolver
  - org.openrewrite.xml.ChangeTagValue:
      elementName: /validation-config/constraint-validator-factory
      newValue: org.hibernate.validator.engine.ConstraintValidatorFactoryImpl
  - org.openrewrite.xml.RemoveXmlTag:
      xPath: /validation-config/parameter-name-provider

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to JavaEE8](/recipes/java/migrate/javaee8-recipe.md)

## Examples
##### Example 1
`ApacheDefaultProviderTest#apacheDefaultProvider`


<Tabs groupId="beforeAfter">
<TabItem value="xml" label="xml">


###### Before
```xml
<?xml version="1.0" encoding="UTF-8"?>
<validation-config
    xmlns="http://jboss.org/xml/ns/javax/validation/configuration"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://jboss.org/xml/ns/javax/validation/configuration validation-configuration-1.1.xsd"
    version="1.1">
    <default-provider>org.apache.bval.jsr303.ApacheValidationProvider</default-provider>
    <message-interpolator>org.apache.bval.jsr.DefaultMessageInterpolator</message-interpolator>
    <traversable-resolver>org.apache.bval.jsr.resolver.DefaultTraversableResolver</traversable-resolver>
    <constraint-validator-factory>org.apache.bval.jsr.DefaultConstraintValidatorFactory</constraint-validator-factory>
    <parameter-name-provider>org.apache.bval.jsr.parameter.DefaultParameterNameProvider</parameter-name-provider>
</validation-config>
```

###### After
```xml
<?xml version="1.0" encoding="UTF-8"?>
<validation-config
    xmlns="http://jboss.org/xml/ns/javax/validation/configuration"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://jboss.org/xml/ns/javax/validation/configuration validation-configuration-1.1.xsd"
    version="1.1">
    <default-provider>org.hibernate.validator.HibernateValidator</default-provider>
    <message-interpolator>org.hibernate.validator.messageinterpolation.ResourceBundleMessageInterpolator</message-interpolator>
    <traversable-resolver>org.hibernate.validator.engine.resolver.DefaultTraversableResolver</traversable-resolver>
    <constraint-validator-factory>org.hibernate.validator.engine.ConstraintValidatorFactoryImpl</constraint-validator-factory>
</validation-config>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,5 +7,4 @@
    xsi:schemaLocation="http://jboss.org/xml/ns/javax/validation/configuration validation-configuration-1.1.xsd"
    version="1.1">
-   <default-provider>org.apache.bval.jsr303.ApacheValidationProvider</default-provider>
-   <message-interpolator>org.apache.bval.jsr.DefaultMessageInterpolator</message-interpolator>
-   <traversable-resolver>org.apache.bval.jsr.resolver.DefaultTraversableResolver</traversable-resolver>
-   <constraint-validator-factory>org.apache.bval.jsr.DefaultConstraintValidatorFactory</constraint-validator-factory>
-   <parameter-name-provider>org.apache.bval.jsr.parameter.DefaultParameterNameProvider</parameter-name-provider>
+   <default-provider>org.hibernate.validator.HibernateValidator</default-provider>
+   <message-interpolator>org.hibernate.validator.messageinterpolation.ResourceBundleMessageInterpolator</message-interpolator>
+   <traversable-resolver>org.hibernate.validator.engine.resolver.DefaultTraversableResolver</traversable-resolver>
+   <constraint-validator-factory>org.hibernate.validator.engine.ConstraintValidatorFactoryImpl</constraint-validator-factory>
</validation-config>
```
</TabItem>
</Tabs>

---

##### Example 2
`ApacheDefaultProviderTest#apacheDefaultProvider`


<Tabs groupId="beforeAfter">
<TabItem value="xml" label="xml">


###### Before
```xml
<?xml version="1.0" encoding="UTF-8"?>
<validation-config
    xmlns="http://jboss.org/xml/ns/javax/validation/configuration"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://jboss.org/xml/ns/javax/validation/configuration validation-configuration-1.1.xsd"
    version="1.1">
    <default-provider>org.apache.bval.jsr303.ApacheValidationProvider</default-provider>
    <message-interpolator>org.apache.bval.jsr.DefaultMessageInterpolator</message-interpolator>
    <traversable-resolver>org.apache.bval.jsr.resolver.DefaultTraversableResolver</traversable-resolver>
    <constraint-validator-factory>org.apache.bval.jsr.DefaultConstraintValidatorFactory</constraint-validator-factory>
    <parameter-name-provider>org.apache.bval.jsr.parameter.DefaultParameterNameProvider</parameter-name-provider>
</validation-config>
```

###### After
```xml
<?xml version="1.0" encoding="UTF-8"?>
<validation-config
    xmlns="http://jboss.org/xml/ns/javax/validation/configuration"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://jboss.org/xml/ns/javax/validation/configuration validation-configuration-1.1.xsd"
    version="1.1">
    <default-provider>org.hibernate.validator.HibernateValidator</default-provider>
    <message-interpolator>org.hibernate.validator.messageinterpolation.ResourceBundleMessageInterpolator</message-interpolator>
    <traversable-resolver>org.hibernate.validator.engine.resolver.DefaultTraversableResolver</traversable-resolver>
    <constraint-validator-factory>org.hibernate.validator.engine.ConstraintValidatorFactoryImpl</constraint-validator-factory>
</validation-config>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,5 +7,4 @@
    xsi:schemaLocation="http://jboss.org/xml/ns/javax/validation/configuration validation-configuration-1.1.xsd"
    version="1.1">
-   <default-provider>org.apache.bval.jsr303.ApacheValidationProvider</default-provider>
-   <message-interpolator>org.apache.bval.jsr.DefaultMessageInterpolator</message-interpolator>
-   <traversable-resolver>org.apache.bval.jsr.resolver.DefaultTraversableResolver</traversable-resolver>
-   <constraint-validator-factory>org.apache.bval.jsr.DefaultConstraintValidatorFactory</constraint-validator-factory>
-   <parameter-name-provider>org.apache.bval.jsr.parameter.DefaultParameterNameProvider</parameter-name-provider>
+   <default-provider>org.hibernate.validator.HibernateValidator</default-provider>
+   <message-interpolator>org.hibernate.validator.messageinterpolation.ResourceBundleMessageInterpolator</message-interpolator>
+   <traversable-resolver>org.hibernate.validator.engine.resolver.DefaultTraversableResolver</traversable-resolver>
+   <constraint-validator-factory>org.hibernate.validator.engine.ConstraintValidatorFactoryImpl</constraint-validator-factory>
</validation-config>
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.javaee8.ApacheDefaultProvider"
  displayName="Flags any `org.apache.bval.jsr*` (bval 1.1) and `org.apache.bval.jsr303*` (bval 1.0) package references"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.javaee8.ApacheDefaultProvider" />

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
