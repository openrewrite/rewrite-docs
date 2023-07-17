# Migrate Ehcache from javax to jakarta namespace

**org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta**

_Java EE has been rebranded to Jakarta EE.  This recipe replaces existing Ehcache dependencies with their counterparts that are compatible with Jakarta EE 9._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.7

## Examples
##### Example 1


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
    <groupId>com.example.ehcache</groupId>
    <artifactId>ehcache-legacy</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache</artifactId>
            <version>3.9.10</version>
        </dependency>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-clustered</artifactId>
            <version>3.9.10</version>
        </dependency>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-transactions</artifactId>
            <version>3.9.10</version>
        </dependency>
    </dependencies>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
    <groupId>com.example.ehcache</groupId>
    <artifactId>ehcache-legacy</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache</artifactId>
            <version>3.10.8</version>
            <classifier>jakarta</classifier>
        </dependency>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-clustered</artifactId>
            <version>3.10.8</version>
        </dependency>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-transactions</artifactId>
            <version>3.10.8</version>
            <classifier>jakarta</classifier>
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
@@ -9,1 +9,2 @@
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache</artifactId>
-           <version>3.9.10</version>
+           <version>3.10.8</version>
+           <classifier>jakarta</classifier>
        </dependency>
@@ -14,1 +15,1 @@
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-clustered</artifactId>
-           <version>3.9.10</version>
+           <version>3.10.8</version>
        </dependency>
@@ -19,1 +20,2 @@
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-transactions</artifactId>
-           <version>3.9.10</version>
+           <version>3.10.8</version>
+           <classifier>jakarta</classifier>
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
    <groupId>com.example.ehcache</groupId>
    <artifactId>ehcache-legacy</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache</artifactId>
            <version>3.9.10</version>
        </dependency>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-clustered</artifactId>
            <version>3.9.10</version>
        </dependency>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-transactions</artifactId>
            <version>3.9.10</version>
        </dependency>
    </dependencies>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
    <groupId>com.example.ehcache</groupId>
    <artifactId>ehcache-legacy</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache</artifactId>
            <version>3.10.8</version>
            <classifier>jakarta</classifier>
        </dependency>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-clustered</artifactId>
            <version>3.10.8</version>
        </dependency>
        <dependency>
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-transactions</artifactId>
            <version>3.10.8</version>
            <classifier>jakarta</classifier>
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
@@ -9,1 +9,2 @@
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache</artifactId>
-           <version>3.9.10</version>
+           <version>3.10.8</version>
+           <classifier>jakarta</classifier>
        </dependency>
@@ -14,1 +15,1 @@
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-clustered</artifactId>
-           <version>3.9.10</version>
+           <version>3.10.8</version>
        </dependency>
@@ -19,1 +20,2 @@
            <groupId>org.ehcache</groupId>
            <artifactId>ehcache-transactions</artifactId>
-           <version>3.9.10</version>
+           <version>3.10.8</version>
+           <classifier>jakarta</classifier>
        </dependency>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.7")
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
        <version>5.3.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.7</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.ehcache`
  * artifactId: `*`
  * newVersion: `3.10.x`
* [Change Maven dependency classifier](../../../maven/changedependencyclassifier.md)
  * groupId: `org.ehcache`
  * artifactId: `ehcache`
  * newClassifier: `jakarta`
* [Change Maven dependency classifier](../../../maven/changedependencyclassifier.md)
  * groupId: `org.ehcache`
  * artifactId: `ehcache-transactions`
  * newClassifier: `jakarta`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta
displayName: Migrate Ehcache from javax to jakarta namespace
description: Java EE has been rebranded to Jakarta EE.  This recipe replaces existing Ehcache dependencies with their counterparts that are compatible with Jakarta EE 9.

recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.ehcache
      artifactId: *
      newVersion: 3.10.x
  - org.openrewrite.maven.ChangeDependencyClassifier:
      groupId: org.ehcache
      artifactId: ehcache
      newClassifier: jakarta
  - org.openrewrite.maven.ChangeDependencyClassifier:
      groupId: org.ehcache
      artifactId: ehcache-transactions
      newClassifier: jakarta

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
