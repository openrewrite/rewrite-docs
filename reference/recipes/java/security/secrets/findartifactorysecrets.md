# Find Artifactory secrets

**org.openrewrite.java.security.secrets.FindArtifactorySecrets**

_Locates Artifactory secrets stored in plain text in code._

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
    String[] artifactoryStrings = {
        "AP6xxxxxxxxxx",
        "AP2xxxxxxxxxx",
        "AP3xxxxxxxxxx",
        "AP5xxxxxxxxxx",
        "APAxxxxxxxxxx",
        "APBxxxxxxxxxx",
        "AKCxxxxxxxxxx",
        " AP6xxxxxxxxxx",
        " AKCxxxxxxxxxx",
        "=AP6xxxxxxxxxx",
        "=AKCxxxxxxxxxx",
        "\"AP6xxxxxxxxxx\"",
        "\"AKCxxxxxxxxxx\"",
        "artif-key:AP6xxxxxxxxxx",
        "artif-key:AKCxxxxxxxxxx",
        "X-JFrog-Art-Api: AKCxxxxxxxxxx",
        "X-JFrog-Art-Api: AP6xxxxxxxxxx",
        "artifactoryx:_password=AKCxxxxxxxxxx",
        "artifactoryx:_password=AP6xxxxxxxxxx",
        "testAKCwithinsomeirrelevantstring",
        "testAP6withinsomeirrelevantstring",
        "X-JFrog-Art-Api: $API_KEY",
        "X-JFrog-Art-Api: $PASSWORD",
        "artifactory:_password=AP6xxxxxx",
        "artifactory:_password=AKCxxxxxxxx"};
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    String[] artifactoryStrings = {
        /*~~(Artifactory)~~>*/"AP6xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"AP2xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"AP3xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"AP5xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"APAxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"APBxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/" AP6xxxxxxxxxx",
        /*~~(Artifactory)~~>*/" AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"=AP6xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"=AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"\"AP6xxxxxxxxxx\"",
        /*~~(Artifactory)~~>*/"\"AKCxxxxxxxxxx\"",
        /*~~(Artifactory)~~>*/"artif-key:AP6xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"artif-key:AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"X-JFrog-Art-Api: AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"X-JFrog-Art-Api: AP6xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"artifactoryx:_password=AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"artifactoryx:_password=AP6xxxxxxxxxx",
        "testAKCwithinsomeirrelevantstring",
        "testAP6withinsomeirrelevantstring",
        "X-JFrog-Art-Api: $API_KEY",
        "X-JFrog-Art-Api: $PASSWORD",
        "artifactory:_password=AP6xxxxxx",
        "artifactory:_password=AKCxxxxxxxx"};
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -3,19 +3,19 @@
class Test {
    String[] artifactoryStrings = {
-       "AP6xxxxxxxxxx",
-       "AP2xxxxxxxxxx",
-       "AP3xxxxxxxxxx",
-       "AP5xxxxxxxxxx",
-       "APAxxxxxxxxxx",
-       "APBxxxxxxxxxx",
-       "AKCxxxxxxxxxx",
-       " AP6xxxxxxxxxx",
-       " AKCxxxxxxxxxx",
-       "=AP6xxxxxxxxxx",
-       "=AKCxxxxxxxxxx",
-       "\"AP6xxxxxxxxxx\"",
-       "\"AKCxxxxxxxxxx\"",
-       "artif-key:AP6xxxxxxxxxx",
-       "artif-key:AKCxxxxxxxxxx",
-       "X-JFrog-Art-Api: AKCxxxxxxxxxx",
-       "X-JFrog-Art-Api: AP6xxxxxxxxxx",
-       "artifactoryx:_password=AKCxxxxxxxxxx",
-       "artifactoryx:_password=AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"AP2xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"AP3xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"AP5xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"APAxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"APBxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/" AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/" AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"=AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"=AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"\"AP6xxxxxxxxxx\"",
+       /*~~(Artifactory)~~>*/"\"AKCxxxxxxxxxx\"",
+       /*~~(Artifactory)~~>*/"artif-key:AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"artif-key:AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"X-JFrog-Art-Api: AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"X-JFrog-Art-Api: AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"artifactoryx:_password=AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"artifactoryx:_password=AP6xxxxxxxxxx",
        "testAKCwithinsomeirrelevantstring",
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
    String[] artifactoryStrings = {
        "AP6xxxxxxxxxx",
        "AP2xxxxxxxxxx",
        "AP3xxxxxxxxxx",
        "AP5xxxxxxxxxx",
        "APAxxxxxxxxxx",
        "APBxxxxxxxxxx",
        "AKCxxxxxxxxxx",
        " AP6xxxxxxxxxx",
        " AKCxxxxxxxxxx",
        "=AP6xxxxxxxxxx",
        "=AKCxxxxxxxxxx",
        "\"AP6xxxxxxxxxx\"",
        "\"AKCxxxxxxxxxx\"",
        "artif-key:AP6xxxxxxxxxx",
        "artif-key:AKCxxxxxxxxxx",
        "X-JFrog-Art-Api: AKCxxxxxxxxxx",
        "X-JFrog-Art-Api: AP6xxxxxxxxxx",
        "artifactoryx:_password=AKCxxxxxxxxxx",
        "artifactoryx:_password=AP6xxxxxxxxxx",
        "testAKCwithinsomeirrelevantstring",
        "testAP6withinsomeirrelevantstring",
        "X-JFrog-Art-Api: $API_KEY",
        "X-JFrog-Art-Api: $PASSWORD",
        "artifactory:_password=AP6xxxxxx",
        "artifactory:_password=AKCxxxxxxxx"};
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    String[] artifactoryStrings = {
        /*~~(Artifactory)~~>*/"AP6xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"AP2xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"AP3xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"AP5xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"APAxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"APBxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/" AP6xxxxxxxxxx",
        /*~~(Artifactory)~~>*/" AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"=AP6xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"=AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"\"AP6xxxxxxxxxx\"",
        /*~~(Artifactory)~~>*/"\"AKCxxxxxxxxxx\"",
        /*~~(Artifactory)~~>*/"artif-key:AP6xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"artif-key:AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"X-JFrog-Art-Api: AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"X-JFrog-Art-Api: AP6xxxxxxxxxx",
        /*~~(Artifactory)~~>*/"artifactoryx:_password=AKCxxxxxxxxxx",
        /*~~(Artifactory)~~>*/"artifactoryx:_password=AP6xxxxxxxxxx",
        "testAKCwithinsomeirrelevantstring",
        "testAP6withinsomeirrelevantstring",
        "X-JFrog-Art-Api: $API_KEY",
        "X-JFrog-Art-Api: $PASSWORD",
        "artifactory:_password=AP6xxxxxx",
        "artifactory:_password=AKCxxxxxxxx"};
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -3,19 +3,19 @@
class Test {
    String[] artifactoryStrings = {
-       "AP6xxxxxxxxxx",
-       "AP2xxxxxxxxxx",
-       "AP3xxxxxxxxxx",
-       "AP5xxxxxxxxxx",
-       "APAxxxxxxxxxx",
-       "APBxxxxxxxxxx",
-       "AKCxxxxxxxxxx",
-       " AP6xxxxxxxxxx",
-       " AKCxxxxxxxxxx",
-       "=AP6xxxxxxxxxx",
-       "=AKCxxxxxxxxxx",
-       "\"AP6xxxxxxxxxx\"",
-       "\"AKCxxxxxxxxxx\"",
-       "artif-key:AP6xxxxxxxxxx",
-       "artif-key:AKCxxxxxxxxxx",
-       "X-JFrog-Art-Api: AKCxxxxxxxxxx",
-       "X-JFrog-Art-Api: AP6xxxxxxxxxx",
-       "artifactoryx:_password=AKCxxxxxxxxxx",
-       "artifactoryx:_password=AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"AP2xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"AP3xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"AP5xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"APAxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"APBxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/" AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/" AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"=AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"=AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"\"AP6xxxxxxxxxx\"",
+       /*~~(Artifactory)~~>*/"\"AKCxxxxxxxxxx\"",
+       /*~~(Artifactory)~~>*/"artif-key:AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"artif-key:AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"X-JFrog-Art-Api: AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"X-JFrog-Art-Api: AP6xxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"artifactoryx:_password=AKCxxxxxxxxxx",
+       /*~~(Artifactory)~~>*/"artifactoryx:_password=AP6xxxxxxxxxx",
        "testAKCwithinsomeirrelevantstring",
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
    id("org.openrewrite.rewrite") version("6.1.25")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.secrets.FindArtifactorySecrets")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.secrets.FindArtifactorySecrets</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.security.secrets.FindArtifactorySecrets
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find secrets with regular expressions](../../../java/security/secrets/findsecretsbypattern.md)
  * secretName: `Artifactory`
  * valuePattern: `(?:\s|=|:|"|^)AP[\dABCDEF][a-zA-Z0-9]{8,}(?:\s|"|$)`
* [Find secrets with regular expressions](../../../java/security/secrets/findsecretsbypattern.md)
  * secretName: `Artifactory`
  * valuePattern: `(?:\s|=|:|"|^)AKC[a-zA-Z0-9]{10,}(?:\s|"|$)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.secrets.FindArtifactorySecrets
displayName: Find Artifactory secrets
description: Locates Artifactory secrets stored in plain text in code.
tags:
  - security
recipeList:
  - org.openrewrite.java.security.secrets.FindSecretsByPattern:
      secretName: Artifactory
      valuePattern: (?:\s|=|:|"|^)AP[\dABCDEF][a-zA-Z0-9]{8,}(?:\s|"|$)
  - org.openrewrite.java.security.secrets.FindSecretsByPattern:
      secretName: Artifactory
      valuePattern: (?:\s|=|:|"|^)AKC[a-zA-Z0-9]{10,}(?:\s|"|$)

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.security.secrets.FindArtifactorySecrets)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
