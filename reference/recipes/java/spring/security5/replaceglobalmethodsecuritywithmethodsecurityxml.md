# Replace global method security with method security

**org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurityXml**

_`@EnableGlobalMethodSecurity` and `<global-method-security>` are deprecated in favor of `@EnableMethodSecurity`  and `<method-security>`, respectively. The new annotation and XML element activate Spring’s pre-post annotations  by default and use AuthorizationManager internally._

### Tags

* spring
* security

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-security-58.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.7


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.26")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurityXml")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.7")
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
        <version>5.4.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurityXml</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.7</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurityXml
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change XML Tag Name](../../../xml/changetagname.md)
  * elementName: `global-method-security`
  * newName: `method-security`
* [Change XML Attribute](../../../xml/changetagattribute.md)
  * elementName: `method-security`
  * attributeName: `pre-post-enabled`
  * oldValue: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurityXml
displayName: Replace global method security with method security
description: `@EnableGlobalMethodSecurity` and `<global-method-security>` are deprecated in favor of `@EnableMethodSecurity`  and `<method-security>`, respectively. The new annotation and XML element activate Spring’s pre-post annotations  by default and use AuthorizationManager internally.

tags:
  - spring
  - security
recipeList:
  - org.openrewrite.xml.ChangeTagName:
      elementName: global-method-security
      newName: method-security
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: method-security
      attributeName: pre-post-enabled
      oldValue: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurityXml)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
