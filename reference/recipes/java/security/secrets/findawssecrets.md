# Find AWS secrets

**org.openrewrite.java.security.secrets.FindAwsSecrets**

_Locates AWS secrets stored in plain text in code._

### Tags

* security

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/resources/META-INF/rewrite/secrets.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
env1:
  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
env2:
  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYa
evn3:
  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKE
```
{% endcode %}

###### After
{% code title="null" %}
```yaml
env1:
  ~~(AWS access key)~~>aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
env2:
  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYa
evn3:
  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKE
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -2,1 +2,1 @@
-  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
+  ~~(AWS access key)~~>aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="T.java" %}

###### Before
{% code title="T.java" %}
```java
class T {
    String[] awsSecrets = {
        "AKIAZZZZZZZZZZZZZZZZ",
        "akiazzzzzzzzzzzzzzzz",
        "AKIAZZZ",
    };
}
```
{% endcode %}

###### After
{% code title="T.java" %}
```java
class T {
    String[] awsSecrets = {
        /*~~(AWS access key)~~>*/"AKIAZZZZZZZZZZZZZZZZ",
        "akiazzzzzzzzzzzzzzzz",
        "AKIAZZZ",
    };
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- T.java
+++ T.java
@@ -3,1 +3,1 @@
-        "AKIAZZZZZZZZZZZZZZZZ",
+        /*~~(AWS access key)~~>*/"AKIAZZZZZZZZZZZZZZZZ",
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
env1:
  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
env2:
  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYa
evn3:
  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKE
```
{% endcode %}

###### After
{% code title="null" %}
```yaml
env1:
  ~~(AWS access key)~~>aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
env2:
  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYa
evn3:
  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKE
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -2,1 +2,1 @@
-  aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
+  ~~(AWS access key)~~>aws_access_key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="T.java" %}

###### Before
{% code title="T.java" %}
```java
class T {
    String[] awsSecrets = {
        "AKIAZZZZZZZZZZZZZZZZ",
        "akiazzzzzzzzzzzzzzzz",
        "AKIAZZZ",
    };
}
```
{% endcode %}

###### After
{% code title="T.java" %}
```java
class T {
    String[] awsSecrets = {
        /*~~(AWS access key)~~>*/"AKIAZZZZZZZZZZZZZZZZ",
        "akiazzzzzzzzzzzzzzzz",
        "AKIAZZZ",
    };
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- T.java
+++ T.java
@@ -3,1 +3,1 @@
-        "AKIAZZZZZZZZZZZZZZZZ",
+        /*~~(AWS access key)~~>*/"AKIAZZZZZZZZZZZZZZZZ",
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-security:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.secrets.FindAwsSecrets")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:2.0.1")
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
            <recipe>org.openrewrite.java.security.secrets.FindAwsSecrets</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-security:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.security.secrets.FindAwsSecrets
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find secrets with regular expressions](../../../java/security/secrets/findsecretsbypattern.md)
  * secretName: `AWS access key`
  * valuePattern: `AKIA[0-9A-Z]{16}`
* [Find secrets with regular expressions](../../../java/security/secrets/findsecretsbypattern.md)
  * secretName: `AWS access key`
  * keyPattern: `aws.{0,20}?(key|pwd|pw|password|pass|token)`
  * valuePattern: `^([0-9a-zA-Z/+]{40})$`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.secrets.FindAwsSecrets
displayName: Find AWS secrets
description: Locates AWS secrets stored in plain text in code.
tags:
  - security
recipeList:
  - org.openrewrite.java.security.secrets.FindSecretsByPattern:
      secretName: AWS access key
      valuePattern: AKIA[0-9A-Z]{16}
  - org.openrewrite.java.security.secrets.FindSecretsByPattern:
      secretName: AWS access key
      keyPattern: aws.{0,20}?(key|pwd|pw|password|pass|token)
      valuePattern: ^([0-9a-zA-Z/+]{40})$

```
{% endtab %}
{% endtabs %}
## Contributors
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.security.secrets.FindAwsSecrets)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
