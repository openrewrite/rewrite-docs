---
title: "Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages"
sidebar_label: "Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages

**org.openrewrite.java.migrate.jakarta.UpdateApacheWSSecurityPackages**

_Java EE has been rebranded to Jakarta EE.  This recipe replaces Apache security packages to migrate to Apache `wss4j`._

## Recipe source

[GitHub: jakarta-ee-9.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../../core/singleton)

**Recipes**

* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.BinarySecurity`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.token.BinarySecurity`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.DOMX509Data`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.token.DOMX509Data`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.DOMX509IssuerSerial`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.token.DOMX509IssuerSerial`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.PKIPathSecurity`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.token.PKIPathSecurity`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.Reference`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.token.Reference`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.SecurityTokenReference`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.token.SecurityTokenReference`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.TokenElementCallback`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.token.TokenElementCallback`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.X509Security`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.token.X509Security`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.DerivedKeyToken`
  * newFullyQualifiedTypeName: `org.apache.wss4j.dom.message.token.DerivedKeyToken`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.KerberosSecurity`
  * newFullyQualifiedTypeName: `org.apache.wss4j.dom.message.token.KerberosSecurity`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.SecurityContextToken`
  * newFullyQualifiedTypeName: `org.apache.wss4j.dom.message.token.SecurityContextToken`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.SignatureConfirmation`
  * newFullyQualifiedTypeName: `org.apache.wss4j.dom.message.token.SignatureConfirmation`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.Timestamp`
  * newFullyQualifiedTypeName: `org.apache.wss4j.dom.message.token.Timestamp`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.UsernameToken`
  * newFullyQualifiedTypeName: `org.apache.wss4j.dom.message.token.UsernameToken`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.KerberosClientExceptionAction`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.kerberos.KerberosClientExceptionAction`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.KerberosContext`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.kerberos.KerberosContext`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.KerberosServiceContext`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.kerberos.KerberosServiceContext`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.ws.security.message.token.KerberosServiceExceptionAction`
  * newFullyQualifiedTypeName: `org.apache.wss4j.common.kerberos.KerberosServiceExceptionAction`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.apache.ws.security`
  * newPackageName: `org.apache.wss4j.common.ext`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.apache.ws.security.components.crypto`
  * newPackageName: `org.apache.wss4j.common.crypto`
  * recursive: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.UpdateApacheWSSecurityPackages
displayName: Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages
description: |
  Java EE has been rebranded to Jakarta EE.  This recipe replaces Apache security packages to migrate to Apache `wss4j`.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.BinarySecurity
      newFullyQualifiedTypeName: org.apache.wss4j.common.token.BinarySecurity
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.DOMX509Data
      newFullyQualifiedTypeName: org.apache.wss4j.common.token.DOMX509Data
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.DOMX509IssuerSerial
      newFullyQualifiedTypeName: org.apache.wss4j.common.token.DOMX509IssuerSerial
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.PKIPathSecurity
      newFullyQualifiedTypeName: org.apache.wss4j.common.token.PKIPathSecurity
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.Reference
      newFullyQualifiedTypeName: org.apache.wss4j.common.token.Reference
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.SecurityTokenReference
      newFullyQualifiedTypeName: org.apache.wss4j.common.token.SecurityTokenReference
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.TokenElementCallback
      newFullyQualifiedTypeName: org.apache.wss4j.common.token.TokenElementCallback
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.X509Security
      newFullyQualifiedTypeName: org.apache.wss4j.common.token.X509Security
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.DerivedKeyToken
      newFullyQualifiedTypeName: org.apache.wss4j.dom.message.token.DerivedKeyToken
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.KerberosSecurity
      newFullyQualifiedTypeName: org.apache.wss4j.dom.message.token.KerberosSecurity
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.SecurityContextToken
      newFullyQualifiedTypeName: org.apache.wss4j.dom.message.token.SecurityContextToken
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.SignatureConfirmation
      newFullyQualifiedTypeName: org.apache.wss4j.dom.message.token.SignatureConfirmation
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.Timestamp
      newFullyQualifiedTypeName: org.apache.wss4j.dom.message.token.Timestamp
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.UsernameToken
      newFullyQualifiedTypeName: org.apache.wss4j.dom.message.token.UsernameToken
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.KerberosClientExceptionAction
      newFullyQualifiedTypeName: org.apache.wss4j.common.kerberos.KerberosClientExceptionAction
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.KerberosContext
      newFullyQualifiedTypeName: org.apache.wss4j.common.kerberos.KerberosContext
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.KerberosServiceContext
      newFullyQualifiedTypeName: org.apache.wss4j.common.kerberos.KerberosServiceContext
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.ws.security.message.token.KerberosServiceExceptionAction
      newFullyQualifiedTypeName: org.apache.wss4j.common.kerberos.KerberosServiceExceptionAction
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.ws.security
      newPackageName: org.apache.wss4j.common.ext
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.ws.security.components.crypto
      newPackageName: org.apache.wss4j.common.crypto
      recursive: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Jakarta EE 9](/recipes/java/migrate/jakarta/javaxmigrationtojakarta.md)

## Examples
##### Example 1
`UpdateApacheWSSecurityPackagesTest#updateApacheWSSecurityPackages`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.ws.security.WSSecurityException;
import org.apache.ws.security.components.crypto.CryptoBase;
class Test {
    void foo() {
        WSSecurityException x = new WSSecurityException(1,"");
        CryptoBase base = null;
    }
}
```

###### After
```java
import org.apache.wss4j.common.ext.WSSecurityException;
import org.apache.wss4j.common.ext.components.crypto.CryptoBase;
class Test {
    void foo() {
        WSSecurityException x = new WSSecurityException(1,"");
        CryptoBase base = null;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.apache.ws.security.WSSecurityException;
-import org.apache.ws.security.components.crypto.CryptoBase;
+import org.apache.wss4j.common.ext.WSSecurityException;
+import org.apache.wss4j.common.ext.components.crypto.CryptoBase;
class Test {
```
</TabItem>
</Tabs>

---

##### Example 2
`UpdateApacheWSSecurityPackagesTest#updateApacheWSSecurityPackages`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.ws.security.WSSecurityException;
import org.apache.ws.security.components.crypto.CryptoBase;
class Test {
    void foo() {
        WSSecurityException x = new WSSecurityException(1,"");
        CryptoBase base = null;
    }
}
```

###### After
```java
import org.apache.wss4j.common.ext.WSSecurityException;
import org.apache.wss4j.common.ext.components.crypto.CryptoBase;
class Test {
    void foo() {
        WSSecurityException x = new WSSecurityException(1,"");
        CryptoBase base = null;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.apache.ws.security.WSSecurityException;
-import org.apache.ws.security.components.crypto.CryptoBase;
+import org.apache.wss4j.common.ext.WSSecurityException;
+import org.apache.wss4j.common.ext.components.crypto.CryptoBase;
class Test {
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.jakarta.UpdateApacheWSSecurityPackages"
  displayName="Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.UpdateApacheWSSecurityPackages" />

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
