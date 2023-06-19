# Replace `WebMvcConfigurerAdapter` with `WebMvcConfigurer`

**org.openrewrite.java.spring.framework.MigrateWebMvcConfigurerAdapter**

_As of 5.0 `WebMvcConfigurer` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/framework/MigrateWebMvcConfigurerAdapter.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="a/b/c/CustomMvcConfigurer.java" %}

###### Before
{% code title="a/b/c/CustomMvcConfigurer.java" %}
```java
package a.b.c;

import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

public class CustomMvcConfigurer extends WebMvcConfigurerAdapter {
    private final String someArg;
    public CustomMvcConfigurer(String someArg) {
        super();
        this.someArg = someArg;
    }
}
```
{% endcode %}

###### After
{% code title="a/b/c/CustomMvcConfigurer.java" %}
```java
package a.b.c;

import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class CustomMvcConfigurer implements WebMvcConfigurer {
    private final String someArg;
    public CustomMvcConfigurer(String someArg) {
        this.someArg = someArg;
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- a/b/c/CustomMvcConfigurer.java
+++ a/b/c/CustomMvcConfigurer.java
@@ -3,1 +3,1 @@
package a.b.c;

-import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
+import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@@ -5,1 +5,1 @@
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

-public class CustomMvcConfigurer extends WebMvcConfigurerAdapter {
+public class CustomMvcConfigurer implements WebMvcConfigurer {
    private final String someArg;
@@ -8,1 +8,0 @@
    private final String someArg;
    public CustomMvcConfigurer(String someArg) {
-       super();
        this.someArg = someArg;
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
    activeRecipe("org.openrewrite.java.spring.framework.MigrateWebMvcConfigurerAdapter")
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
            <recipe>org.openrewrite.java.spring.framework.MigrateWebMvcConfigurerAdapter</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.framework.MigrateWebMvcConfigurerAdapter
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick Way](pway99@users.noreply.github.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.framework.MigrateWebMvcConfigurerAdapter)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
