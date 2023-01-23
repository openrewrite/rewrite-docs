# Java security best practices

**org.openrewrite.java.security.JavaSecurityBestPractices**
_Applies security best practices to Java code._

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
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.JavaSecurityBestPractices")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.JavaSecurityBestPractices</recipe>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-security:1.20.0 \
  -DactiveRecipes=org.openrewrite.java.security.JavaSecurityBestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.security.JavaSecurityBestPractices`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [XML parser XXE vulnerability](../../java/security/xmlparserxxevulnerability.md)
* [Use `Files#createTempDirectory`](../../java/security/usefilescreatetempdirectory.md)
* [Use secure temporary file creation](../../java/security/securetempfilecreation.md)
  * target: ``
* [Use comparison rather than equality checks in for conditions](../../java/cleanup/noequalityinforcondition.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.JavaSecurityBestPractices
displayName: Java security best practices
description: Applies security best practices to Java code.
tags:
  - security
recipeList:
  - org.openrewrite.java.security.XmlParserXXEVulnerability
  - org.openrewrite.java.security.UseFilesCreateTempDirectory
  - org.openrewrite.java.security.SecureTempFileCreation:
      target: 
  - org.openrewrite.java.cleanup.NoEqualityInForCondition

```
{% endtab %}
{% endtabs %}
