# Migrate deprecated Spring Web UTF8 `MediaType` enums

**org.openrewrite.java.spring.framework.MigrateUtf8MediaTypes**

_Spring Web `MediaType#APPLICATION_JSON_UTF8` and `MediaType#APPLICATION_PROBLEM_JSON_UTF8` were deprecated in 5.2._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/framework/MigrateUtf8MediaTypes.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5

## Example


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
import org.springframework.http.MediaType;

class A {
    void method() {
        MediaType valueA = MediaType.APPLICATION_JSON_UTF8;
        String valueB = MediaType.APPLICATION_JSON_UTF8_VALUE;
        MediaType valueC = MediaType.APPLICATION_PROBLEM_JSON_UTF8;
        String valueD = MediaType.APPLICATION_PROBLEM_JSON_UTF8_VALUE;
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
import org.springframework.http.MediaType;

class A {
    void method() {
        MediaType valueA = MediaType.APPLICATION_JSON;
        String valueB = MediaType.APPLICATION_JSON_VALUE;
        MediaType valueC = MediaType.APPLICATION_PROBLEM_JSON;
        String valueD = MediaType.APPLICATION_PROBLEM_JSON_VALUE;
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- A.java
+++ A.java
@@ -5,4 +5,4 @@
class A {
    void method() {
-       MediaType valueA = MediaType.APPLICATION_JSON_UTF8;
-       String valueB = MediaType.APPLICATION_JSON_UTF8_VALUE;
-       MediaType valueC = MediaType.APPLICATION_PROBLEM_JSON_UTF8;
-       String valueD = MediaType.APPLICATION_PROBLEM_JSON_UTF8_VALUE;
+       MediaType valueA = MediaType.APPLICATION_JSON;
+       String valueB = MediaType.APPLICATION_JSON_VALUE;
+       MediaType valueC = MediaType.APPLICATION_PROBLEM_JSON;
+       String valueD = MediaType.APPLICATION_PROBLEM_JSON_VALUE;
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.framework.MigrateUtf8MediaTypes")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.5")
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
            <recipe>org.openrewrite.java.spring.framework.MigrateUtf8MediaTypes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.framework.MigrateUtf8MediaTypes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Aaron Gershman](mailto:aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.framework.MigrateUtf8MediaTypes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
