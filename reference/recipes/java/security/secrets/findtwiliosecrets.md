# Find Twilio secrets

**org.openrewrite.java.security.secrets.FindTwilioSecrets**
_Locates Twilio secrets stored in plain text in code._

### Tags

* security

## Source

[Github](https://github.com/openrewrite/rewrite-java-security), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-java-security/1.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 1.20.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-java-security:1.20.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.secrets.FindTwilioSecrets")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:1.20.0")
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
        <version>4.38.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.secrets.FindTwilioSecrets</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>1.20.0</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-security:1.20.0 \
  -DactiveRecipes=org.openrewrite.java.security.secrets.FindTwilioSecrets
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.security.secrets.FindTwilioSecrets`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find secrets with regular expressions](../../../java/security/secrets/findsecretsbypattern.md)
  * secretName: `Twilio API key auth token`
  * valuePattern: `SK[0-9a-fA-F]{32}`
* [Find secrets with regular expressions](../../../java/security/secrets/findsecretsbypattern.md)
  * secretName: `Twilio API key account SID`
  * valuePattern: `AC[a-z0-9]{32}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.secrets.FindTwilioSecrets
displayName: Find Twilio secrets
description: Locates Twilio secrets stored in plain text in code.
tags:
  - security
recipeList:
  - org.openrewrite.java.security.secrets.FindSecretsByPattern:
      secretName: Twilio API key auth token
      valuePattern: SK[0-9a-fA-F]{32}
  - org.openrewrite.java.security.secrets.FindSecretsByPattern:
      secretName: Twilio API key account SID
      valuePattern: AC[a-z0-9]{32}

```
{% endtab %}
{% endtabs %}
