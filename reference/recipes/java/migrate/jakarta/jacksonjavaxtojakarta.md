# Migrate Jackson from javax to jakarta namespace

**org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta**

_Java EE has been rebranded to Jakarta EE.  This recipe replaces existing Jackson dependencies with their counterparts that are compatible with Jakarta EE 9._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
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
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
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
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
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
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
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
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
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
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
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
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.1")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `com.fasterxml.jackson.module`
  * oldArtifactId: `jackson-module-jaxb-annotations`
  * newGroupId: `com.fasterxml.jackson.module`
  * newArtifactId: `jackson-module-jakarta-xmlbind-annotations`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.module`
  * oldArtifactId: `jackson-module-jaxb-annotations`
  * newGroupId: `com.fasterxml.jackson.module`
  * newArtifactId: `jackson-module-jakarta-xmlbind-annotations`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-cbor-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-cbor-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-cbor-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-cbor-provider`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-json-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-json-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-json-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-json-provider`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-smile-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-smile-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-smile-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-smile-provider`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-xml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-xml-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-xml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-xml-provider`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-yaml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-yaml-provider`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.jaxrs`
  * oldArtifactId: `jackson-jaxrs-yaml-provider`
  * newGroupId: `com.fasterxml.jackson.jakarta.rs`
  * newArtifactId: `jackson-jakarta-rs-yaml-provider`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `com.fasterxml.jackson.datatype`
  * oldArtifactId: `jackson-datatype-jsr353`
  * newGroupId: `com.fasterxml.jackson.datatype`
  * newArtifactId: `jackson-datatype-jakarta-jsonp`
  * newVersion: `2.13.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `com.fasterxml.jackson.datatype`
  * oldArtifactId: `jackson-datatype-jsr353`
  * newGroupId: `com.fasterxml.jackson.datatype`
  * newArtifactId: `jackson-datatype-jakarta-jsonp`
  * newVersion: `2.13.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.glassfish`
  * oldArtifactId: `javax.json`
  * newGroupId: `org.glassfish`
  * newArtifactId: `jakarta.json`
  * newVersion: `2.0.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `org.glassfish`
  * oldArtifactId: `javax.json`
  * newGroupId: `org.glassfish`
  * newArtifactId: `jakarta.json`
  * newVersion: `2.0.x`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `com.fasterxml.jackson.datatype.jsr353.JSR353Module`
  * newFullyQualifiedTypeName: `com.fasterxml.jackson.datatype.jsonp.JSONPModule`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta
displayName: Migrate Jackson from javax to jakarta namespace
description: Java EE has been rebranded to Jakarta EE.  This recipe replaces existing Jackson dependencies with their counterparts that are compatible with Jakarta EE 9.

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

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
