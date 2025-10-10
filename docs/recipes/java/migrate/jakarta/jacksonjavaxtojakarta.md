---
sidebar_label: "Migrate Jackson from javax to jakarta namespace"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Jackson from javax to jakarta namespace

**org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta**

_Java EE has been rebranded to Jakarta EE.  This recipe replaces existing Jackson dependencies with their counterparts that are compatible with Jakarta EE 9._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.module`
  * oldArtifactId: `jackson-module-jaxb-annotations`
  * newGroupId: `com.fasterxml.jackson.module`
  * newArtifactId: `jackson-module-jakarta-xmlbind-annotations`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `com.fasterxml.jackson.module`
  * oldArtifactId: `jackson-module-jaxb-annotations`
  * newGroupId: `com.fasterxml.jackson.module`
  * newArtifactId: `jackson-module-jakarta-xmlbind-annotations`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-cbor-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-cbor-provider`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-base`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-base`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-cbor-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-cbor-provider`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-json-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-json-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-json-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-json-provider`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-smile-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-smile-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-smile-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-smile-provider`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-xml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-xml-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-xml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-xml-provider`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-yaml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-yaml-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-yaml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-yaml-provider`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.datatype`
  * oldArtifactId: `jackson-datatype-jsr353`
  * newGroupId: `com.fasterxml.jackson.datatype`
  * newArtifactId: `jackson-datatype-jakarta-jsonp`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `com.fasterxml.jackson.datatype`
  * oldArtifactId: `jackson-datatype-jsr353`
  * newGroupId: `com.fasterxml.jackson.datatype`
  * newArtifactId: `jackson-datatype-jakarta-jsonp`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.glassfish`
  * oldArtifactId: `javax.json`
  * newGroupId: `org.glassfish`
  * newArtifactId: `jakarta.json`
  * newVersion: `2.0.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.glassfish`
  * oldArtifactId: `javax.json`
  * newGroupId: `org.glassfish`
  * newArtifactId: `jakarta.json`
  * newVersion: `2.0.x`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.fasterxml.jackson.datatype.jsr353.JSR353Module`
  * newFullyQualifiedTypeName: `com.fasterxml.jackson.datatype.jsonp.JSONPModule`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.fasterxml.jackson.jaxrs.json.JacksonJaxbJsonProvider`
  * newFullyQualifiedTypeName: `com.fasterxml.jackson.jakarta.rs.json.JacksonXmlBindJsonProvider`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.fasterxml.jackson.module.jaxb.JaxbAnnotationModule`
  * newFullyQualifiedTypeName: `com.fasterxml.jackson.module.jakarta.xmlbind.JakartaXmlBindAnnotationModule`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta
displayName: Migrate Jackson from javax to jakarta namespace
description: |
  Java EE has been rebranded to Jakarta EE.  This recipe replaces existing Jackson dependencies with their counterparts that are compatible with Jakarta EE 9.
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.module
      oldArtifactId: jackson-module-jaxb-annotations
      newGroupId: com.fasterxml.jackson.module
      newArtifactId: jackson-module-jakarta-xmlbind-annotations
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.module
      oldArtifactId: jackson-module-jaxb-annotations
      newGroupId: com.fasterxml.jackson.module
      newArtifactId: jackson-module-jakarta-xmlbind-annotations
      newVersion: 2.13.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-cbor-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-cbor-provider
      newVersion: 2.13.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-base
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-base
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-cbor-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-cbor-provider
      newVersion: 2.13.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-json-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-json-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-json-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-json-provider
      newVersion: 2.13.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-smile-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-smile-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-smile-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-smile-provider
      newVersion: 2.13.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-xml-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-xml-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-xml-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-xml-provider
      newVersion: 2.13.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-yaml-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-yaml-provider
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.jaxrs
      oldArtifactId: jackson-jaxrs-yaml-provider
      newGroupId: com.fasterxml.jackson.jakarta.rs
      newArtifactId: jackson-jakarta-rs-yaml-provider
      newVersion: 2.13.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.datatype
      oldArtifactId: jackson-datatype-jsr353
      newGroupId: com.fasterxml.jackson.datatype
      newArtifactId: jackson-datatype-jakarta-jsonp
      newVersion: 2.13.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: com.fasterxml.jackson.datatype
      oldArtifactId: jackson-datatype-jsr353
      newGroupId: com.fasterxml.jackson.datatype
      newArtifactId: jackson-datatype-jakarta-jsonp
      newVersion: 2.13.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.glassfish
      oldArtifactId: javax.json
      newGroupId: org.glassfish
      newArtifactId: jakarta.json
      newVersion: 2.0.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.glassfish
      oldArtifactId: javax.json
      newGroupId: org.glassfish
      newArtifactId: jakarta.json
      newVersion: 2.0.x
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.fasterxml.jackson.datatype.jsr353.JSR353Module
      newFullyQualifiedTypeName: com.fasterxml.jackson.datatype.jsonp.JSONPModule
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.fasterxml.jackson.jaxrs.json.JacksonJaxbJsonProvider
      newFullyQualifiedTypeName: com.fasterxml.jackson.jakarta.rs.json.JacksonXmlBindJsonProvider
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.fasterxml.jackson.module.jaxb.JaxbAnnotationModule
      newFullyQualifiedTypeName: com.fasterxml.jackson.module.jakarta.xmlbind.JakartaXmlBindAnnotationModule

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Jakarta EE 9](/recipes/java/migrate/jakarta/javaxmigrationtojakarta.md)

## Examples
##### Example 1
`JacksonJavaxtoJakartaTest#migrateJacksonDependencies`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>com.example.jackson</groupId>
    <artifactId>jackson-legacy</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.module</groupId>
            <artifactId>jackson-module-jaxb-annotations</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jaxrs</groupId>
            <artifactId>jackson-jaxrs-cbor-provider</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jaxrs</groupId>
            <artifactId>jackson-jaxrs-json-provider</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jaxrs</groupId>
            <artifactId>jackson-jaxrs-smile-provider</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jaxrs</groupId>
            <artifactId>jackson-jaxrs-xml-provider</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jaxrs</groupId>
            <artifactId>jackson-jaxrs-yaml-provider</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jsr353</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>org.glassfish</groupId>
            <artifactId>javax.json</artifactId>
            <version>1.1.4</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>com.example.jackson</groupId>
    <artifactId>jackson-legacy</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.module</groupId>
            <artifactId>jackson-module-jakarta-xmlbind-annotations</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
            <artifactId>jackson-jakarta-rs-cbor-provider</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
            <artifactId>jackson-jakarta-rs-json-provider</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
            <artifactId>jackson-jakarta-rs-smile-provider</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
            <artifactId>jackson-jakarta-rs-xml-provider</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
            <artifactId>jackson-jakarta-rs-yaml-provider</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jakarta-jsonp</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>org.glassfish</groupId>
            <artifactId>jakarta.json</artifactId>
            <version>2.0.1</version>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -8,2 +8,2 @@
        <dependency>
            <groupId>com.fasterxml.jackson.module</groupId>
-           <artifactId>jackson-module-jaxb-annotations</artifactId>
-           <version>2.12.1</version>
+           <artifactId>jackson-module-jakarta-xmlbind-annotations</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -12,3 +12,3 @@
        </dependency>
        <dependency>
-           <groupId>com.fasterxml.jackson.jaxrs</groupId>
-           <artifactId>jackson-jaxrs-cbor-provider</artifactId>
-           <version>2.12.1</version>
+           <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
+           <artifactId>jackson-jakarta-rs-cbor-provider</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -17,3 +17,3 @@
        </dependency>
        <dependency>
-           <groupId>com.fasterxml.jackson.jaxrs</groupId>
-           <artifactId>jackson-jaxrs-json-provider</artifactId>
-           <version>2.12.1</version>
+           <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
+           <artifactId>jackson-jakarta-rs-json-provider</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -22,3 +22,3 @@
        </dependency>
        <dependency>
-           <groupId>com.fasterxml.jackson.jaxrs</groupId>
-           <artifactId>jackson-jaxrs-smile-provider</artifactId>
-           <version>2.12.1</version>
+           <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
+           <artifactId>jackson-jakarta-rs-smile-provider</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -27,3 +27,3 @@
        </dependency>
        <dependency>
-           <groupId>com.fasterxml.jackson.jaxrs</groupId>
-           <artifactId>jackson-jaxrs-xml-provider</artifactId>
-           <version>2.12.1</version>
+           <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
+           <artifactId>jackson-jakarta-rs-xml-provider</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -32,3 +32,3 @@
        </dependency>
        <dependency>
-           <groupId>com.fasterxml.jackson.jaxrs</groupId>
-           <artifactId>jackson-jaxrs-yaml-provider</artifactId>
-           <version>2.12.1</version>
+           <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
+           <artifactId>jackson-jakarta-rs-yaml-provider</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -38,2 +38,2 @@
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
-           <artifactId>jackson-datatype-jsr353</artifactId>
-           <version>2.12.1</version>
+           <artifactId>jackson-datatype-jakarta-jsonp</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -43,2 +43,2 @@
        <dependency>
            <groupId>org.glassfish</groupId>
-           <artifactId>javax.json</artifactId>
-           <version>1.1.4</version>
+           <artifactId>jakarta.json</artifactId>
+           <version>2.0.1</version>
        </dependency>
```
</TabItem>
</Tabs>

---

##### Example 2
`JacksonJavaxtoJakartaTest#migrateJacksonDependencies`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>com.example.jackson</groupId>
    <artifactId>jackson-legacy</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.module</groupId>
            <artifactId>jackson-module-jaxb-annotations</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jaxrs</groupId>
            <artifactId>jackson-jaxrs-cbor-provider</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jaxrs</groupId>
            <artifactId>jackson-jaxrs-json-provider</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jaxrs</groupId>
            <artifactId>jackson-jaxrs-smile-provider</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jaxrs</groupId>
            <artifactId>jackson-jaxrs-xml-provider</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jaxrs</groupId>
            <artifactId>jackson-jaxrs-yaml-provider</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jsr353</artifactId>
            <version>2.12.1</version>
        </dependency>
        <dependency>
            <groupId>org.glassfish</groupId>
            <artifactId>javax.json</artifactId>
            <version>1.1.4</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>com.example.jackson</groupId>
    <artifactId>jackson-legacy</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.module</groupId>
            <artifactId>jackson-module-jakarta-xmlbind-annotations</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
            <artifactId>jackson-jakarta-rs-cbor-provider</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
            <artifactId>jackson-jakarta-rs-json-provider</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
            <artifactId>jackson-jakarta-rs-smile-provider</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
            <artifactId>jackson-jakarta-rs-xml-provider</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
            <artifactId>jackson-jakarta-rs-yaml-provider</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jakarta-jsonp</artifactId>
            <version>2.13.5</version>
        </dependency>
        <dependency>
            <groupId>org.glassfish</groupId>
            <artifactId>jakarta.json</artifactId>
            <version>2.0.1</version>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -8,2 +8,2 @@
        <dependency>
            <groupId>com.fasterxml.jackson.module</groupId>
-           <artifactId>jackson-module-jaxb-annotations</artifactId>
-           <version>2.12.1</version>
+           <artifactId>jackson-module-jakarta-xmlbind-annotations</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -12,3 +12,3 @@
        </dependency>
        <dependency>
-           <groupId>com.fasterxml.jackson.jaxrs</groupId>
-           <artifactId>jackson-jaxrs-cbor-provider</artifactId>
-           <version>2.12.1</version>
+           <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
+           <artifactId>jackson-jakarta-rs-cbor-provider</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -17,3 +17,3 @@
        </dependency>
        <dependency>
-           <groupId>com.fasterxml.jackson.jaxrs</groupId>
-           <artifactId>jackson-jaxrs-json-provider</artifactId>
-           <version>2.12.1</version>
+           <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
+           <artifactId>jackson-jakarta-rs-json-provider</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -22,3 +22,3 @@
        </dependency>
        <dependency>
-           <groupId>com.fasterxml.jackson.jaxrs</groupId>
-           <artifactId>jackson-jaxrs-smile-provider</artifactId>
-           <version>2.12.1</version>
+           <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
+           <artifactId>jackson-jakarta-rs-smile-provider</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -27,3 +27,3 @@
        </dependency>
        <dependency>
-           <groupId>com.fasterxml.jackson.jaxrs</groupId>
-           <artifactId>jackson-jaxrs-xml-provider</artifactId>
-           <version>2.12.1</version>
+           <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
+           <artifactId>jackson-jakarta-rs-xml-provider</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -32,3 +32,3 @@
        </dependency>
        <dependency>
-           <groupId>com.fasterxml.jackson.jaxrs</groupId>
-           <artifactId>jackson-jaxrs-yaml-provider</artifactId>
-           <version>2.12.1</version>
+           <groupId>com.fasterxml.jackson.jakarta.rs</groupId>
+           <artifactId>jackson-jakarta-rs-yaml-provider</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -38,2 +38,2 @@
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
-           <artifactId>jackson-datatype-jsr353</artifactId>
-           <version>2.12.1</version>
+           <artifactId>jackson-datatype-jakarta-jsonp</artifactId>
+           <version>2.13.5</version>
        </dependency>
@@ -43,2 +43,2 @@
        <dependency>
            <groupId>org.glassfish</groupId>
-           <artifactId>javax.json</artifactId>
-           <version>1.1.4</version>
+           <artifactId>jakarta.json</artifactId>
+           <version>2.0.1</version>
        </dependency>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

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
            <recipe>org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JacksonJavaxToJakarta
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta" />

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

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

</Tabs>
