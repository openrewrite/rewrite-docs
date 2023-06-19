# Migrate Spring Boot properties to 2.4

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_4**

_Migrate properties found in `application.properties` and `application.yml`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-24.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="src/main/resources/application.properties" %}

###### Before
{% code title="src/main/resources/application.properties" %}
```properties
# application.properties
spring.profiles.active=production
spring.profiles=dev
```
{% endcode %}

###### After
{% code title="src/main/resources/application.properties" %}
```properties
# application.properties
spring.profiles.active=production
spring.config.activate.on-profile=dev
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- src/main/resources/application.properties
+++ src/main/resources/application.properties
@@ -3,1 +3,1 @@
# application.properties
spring.profiles.active=production
-spring.profiles=dev
+spring.config.activate.on-profile=dev

```
{% endcode %}
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="src/main/resources/application.yml" %}

###### Before
{% code title="src/main/resources/application.yml" %}
```yaml
    ---
    spring:
      profiles:
        active: dev
    ---
    spring:
      profiles: prod
```
{% endcode %}

###### After
{% code title="src/main/resources/application.yml" %}
```yaml
    ---
    spring:
      profiles:
        active: dev
    ---
    spring:
      config.activate.on-profile: prod
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- src/main/resources/application.yml
+++ src/main/resources/application.yml
@@ -7,1 +7,1 @@
    ---
    spring:
-     profiles: prod
+     config.activate.on-profile: prod

```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="src/main/resources/application.properties" %}

###### Before
{% code title="src/main/resources/application.properties" %}
```properties
# application.properties
spring.profiles.active=production
spring.profiles=dev
```
{% endcode %}

###### After
{% code title="src/main/resources/application.properties" %}
```properties
# application.properties
spring.profiles.active=production
spring.config.activate.on-profile=dev
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- src/main/resources/application.properties
+++ src/main/resources/application.properties
@@ -3,1 +3,1 @@
# application.properties
spring.profiles.active=production
-spring.profiles=dev
+spring.config.activate.on-profile=dev

```
{% endcode %}
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="src/main/resources/application.yml" %}

###### Before
{% code title="src/main/resources/application.yml" %}
```yaml
    ---
    spring:
      profiles:
        active: dev
    ---
    spring:
      profiles: prod
```
{% endcode %}

###### After
{% code title="src/main/resources/application.yml" %}
```yaml
    ---
    spring:
      profiles:
        active: dev
    ---
    spring:
      config.activate.on-profile: prod
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- src/main/resources/application.yml
+++ src/main/resources/application.yml
@@ -7,1 +7,1 @@
    ---
    spring:
-     profiles: prod
+     config.activate.on-profile: prod

```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_4")
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
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_4</recipe>
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

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_4
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `logging.pattern.rolling-file-name`
  * newPropertyKey: `logging.logback.rollingpolicy.file-name-pattern`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `logging.file.clean-history-on-start`
  * newPropertyKey: `logging.logback.rollingpolicy.clean-history-on-start`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `logging.file.max-size`
  * newPropertyKey: `logging.logback.rollingpolicy.max-file-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `logging.file.total-size-cap`
  * newPropertyKey: `logging.logback.rollingpolicy.total-size-cap`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `logging.file.max-history`
  * newPropertyKey: `logging.logback.rollingpolicy.max-history`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.profiles`
  * newPropertyKey: `spring.config.activate.on-profile`
  * except: `[active, default, group, include]`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.password`
  * newPropertyKey: `spring.neo4j.authentication.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.repositories.enabled`
  * newPropertyKey: `spring.data.neo4j.repositories.type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.uri`
  * newPropertyKey: `spring.neo4j.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.username`
  * newPropertyKey: `spring.neo4j.authentication.password`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_4
displayName: Migrate Spring Boot properties to 2.4
description: Migrate properties found in `application.properties` and `application.yml`.
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.pattern.rolling-file-name
      newPropertyKey: logging.logback.rollingpolicy.file-name-pattern
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file.clean-history-on-start
      newPropertyKey: logging.logback.rollingpolicy.clean-history-on-start
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file.max-size
      newPropertyKey: logging.logback.rollingpolicy.max-file-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file.total-size-cap
      newPropertyKey: logging.logback.rollingpolicy.total-size-cap
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file.max-history
      newPropertyKey: logging.logback.rollingpolicy.max-history
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.profiles
      newPropertyKey: spring.config.activate.on-profile
      except: [active, default, group, include]
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.neo4j.password
      newPropertyKey: spring.neo4j.authentication.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.neo4j.repositories.enabled
      newPropertyKey: spring.data.neo4j.repositories.type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.neo4j.uri
      newPropertyKey: spring.neo4j.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.neo4j.username
      newPropertyKey: spring.neo4j.authentication.password

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Nick McKinney](mckinneynichoals@gmail.com)
* [Patrick](patway99@gmail.com)
* [Kyle Scully](scullykns@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_4)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
