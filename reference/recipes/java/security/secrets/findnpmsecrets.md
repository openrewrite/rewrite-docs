# Find NPM secrets

**org.openrewrite.java.security.secrets.FindNpmSecrets**

_Locates NPM secrets stored in plain text in code._

### Tags

* security

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/resources/META-INF/rewrite/secrets.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.0.2

## Examples
##### Example 1


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
    void npmTest() {
        String[] npmSecrets = {
            "//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e",
            "//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002",
            "//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx"};
        String[] notNmpSecrets = {
            "//registry.npmjs.org:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "///:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "foo",
            "//registry.npmjs.org/:_authToken=${NPM_TOKEN}"};
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    void npmTest() {
        String[] npmSecrets = {
            /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e",
            /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002",
            /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx"};
        String[] notNmpSecrets = {
            "//registry.npmjs.org:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "///:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "foo",
            "//registry.npmjs.org/:_authToken=${NPM_TOKEN}"};
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -4,4 +4,4 @@
    void npmTest() {
        String[] npmSecrets = {
-           "//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
-           "//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e",
-           "//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002",
-           "//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx"};
+           /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
+           /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e",
+           /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002",
+           /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx"};
        String[] notNmpSecrets = {
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
    void npmTest() {
        String[] npmSecrets = {
            "//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e",
            "//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002",
            "//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx"};
        String[] notNmpSecrets = {
            "//registry.npmjs.org:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "///:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "foo",
            "//registry.npmjs.org/:_authToken=${NPM_TOKEN}"};
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    void npmTest() {
        String[] npmSecrets = {
            /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e",
            /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002",
            /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx"};
        String[] notNmpSecrets = {
            "//registry.npmjs.org:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "///:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
            "foo",
            "//registry.npmjs.org/:_authToken=${NPM_TOKEN}"};
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -4,4 +4,4 @@
    void npmTest() {
        String[] npmSecrets = {
-           "//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
-           "//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e",
-           "//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002",
-           "//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx"};
+           /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002",
+           /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e",
+           /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002",
+           /*~~(NPM)~~>*/"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx"};
        String[] notNmpSecrets = {
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-security:2.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.secrets.FindNpmSecrets")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:2.0.2")
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
            <recipe>org.openrewrite.java.security.secrets.FindNpmSecrets</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>2.0.2</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-security:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.security.secrets.FindNpmSecrets
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find secrets with regular expressions](../../../java/security/secrets/findsecretsbypattern.md)
  * secretName: `NPM`
  * valuePattern: `//.+/:_authToken=\s*((npm_.+)|([A-Fa-f0-9-]{36})).*`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.secrets.FindNpmSecrets
displayName: Find NPM secrets
description: Locates NPM secrets stored in plain text in code.
tags:
  - security
recipeList:
  - org.openrewrite.java.security.secrets.FindSecretsByPattern:
      secretName: NPM
      valuePattern: //.+/:_authToken=\s*((npm_.+)|([A-Fa-f0-9-]{36})).*

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.security.secrets.FindNpmSecrets)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
