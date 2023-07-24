# Upgrade Wro4j plugin version

**org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion**

_This recipe will upgrade Wro4j to a more recent version compatible with Java 11._

### Tags

* wro4j
* java11

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/wro4j-maven-plugin.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.8/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.8

## Examples
##### Example 1


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <properties>
    <wro4j.version>1.8.0</wro4j.version>
  </properties>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <build>
    <plugins>
      <plugin>
        <groupId>ro.isdc.wro4j</groupId>
        <artifactId>wro4j-maven-plugin</artifactId>
        <version>${wro4j.version}</version>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
  <properties>
    <wro4j.version>1.10.1</wro4j.version>
  </properties>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <build>
    <plugins>
      <plugin>
        <groupId>ro.isdc.wro4j</groupId>
        <artifactId>wro4j-maven-plugin</artifactId>
        <version>${wro4j.version}</version>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -3,1 +3,1 @@
<project>
  <properties>
-   <wro4j.version>1.8.0</wro4j.version>
+   <wro4j.version>1.10.1</wro4j.version>
  </properties>
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
  <properties>
    <wro4j.version>1.8.0</wro4j.version>
  </properties>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <build>
    <plugins>
      <plugin>
        <groupId>ro.isdc.wro4j</groupId>
        <artifactId>wro4j-maven-plugin</artifactId>
        <version>${wro4j.version}</version>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
  <properties>
    <wro4j.version>1.10.1</wro4j.version>
  </properties>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <build>
    <plugins>
      <plugin>
        <groupId>ro.isdc.wro4j</groupId>
        <artifactId>wro4j-maven-plugin</artifactId>
        <version>${wro4j.version}</version>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -3,1 +3,1 @@
<project>
  <properties>
-   <wro4j.version>1.8.0</wro4j.version>
+   <wro4j.version>1.10.1</wro4j.version>
  </properties>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.8` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.8")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.8</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion.md)
  * groupId: `ro.isdc.wro4j`
  * artifactId: `wro4j-maven-plugin`
  * newVersion: `1.10.1`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion
displayName: Upgrade Wro4j plugin version
description: This recipe will upgrade Wro4j to a more recent version compatible with Java 11.
tags:
  - wro4j
  - java11
recipeList:
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: ro.isdc.wro4j
      artifactId: wro4j-maven-plugin
      newVersion: 1.10.1

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
