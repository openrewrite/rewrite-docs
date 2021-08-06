# Java security best practices

 **org.openrewrite.java.security.JavaSecurityBestPractices** _Applies security best practices to Java code._

### Tags

* security

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.10.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.10.0

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.5.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.JavaSecurityBestPractices")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.8.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.JavaSecurityBestPractices</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.security.JavaSecurityBestPractices`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Result of method call ignored](../search/resultofmethodcallignored.md)
  * methodPattern: `java.io.File mkdir*(..)`
* [XML parser XXE vulnerability](xmlparserxxevulnerability.md)
* [Use secure temporary file creation](securetempfilecreation.md)
* [Use comparison rather than equality checks in for conditions](../cleanup/noequalityinforcondition.md)
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
  - org.openrewrite.java.search.ResultOfMethodCallIgnored:
      methodPattern: java.io.File mkdir*(..)
  - org.openrewrite.java.security.XmlParserXXEVulnerability
  - org.openrewrite.java.security.SecureTempFileCreation
  - org.openrewrite.java.cleanup.NoEqualityInForCondition
```
{% endtab %}
{% endtabs %}

