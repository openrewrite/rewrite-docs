# Add `@Configuration` to classes with `@EnableXXXSecurity` annotations

**org.openrewrite.java.spring.boot3.ConfigurationOverEnableSecurity**

_Prior to Spring Security 6, `@EnableXXXSecurity` implicitly had `@Configuration`. `Configuration` was removed from the definitions of the `@EnableSecurity` definitions in Spring Security 6. Consequently classes annotated with `@EnableXXXSecurity` coming from pre-Boot 3 should have `@Configuration` annotation added._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot3/ConfigurationOverEnableSecurity.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `boolean` | forceAddConfiguration | Force add `@Configuration` regardless current Boot version. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|forceAddConfiguration|`false`|


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@EnableWebSecurity
class A {}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
class A {}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- A.java
+++ A.java
@@ -1,0 +1,1 @@
+import org.springframework.context.annotation.Configuration;
@@ -3,0 +4,1 @@
+@Configuration
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ConfigurationOverEnableSecurityExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ConfigurationOverEnableSecurityExample
displayName: Add `@Configuration` to classes with `@EnableXXXSecurity` annotations example
recipeList:
  - org.openrewrite.java.spring.boot3.ConfigurationOverEnableSecurity:
      forceAddConfiguration: true
```
{% endcode %}

Now that `com.yourorg.ConfigurationOverEnableSecurityExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-spring:5.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("com.yourorg.ConfigurationOverEnableSecurityExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ConfigurationOverEnableSecurityExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Alex Boyko](aboyko@vmware.com)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut@moderne.io)
* [Kun Li](kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot3.ConfigurationOverEnableSecurity)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
