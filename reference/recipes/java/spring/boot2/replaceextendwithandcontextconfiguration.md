# Replace `@ExtendWith` and `@ContextConfiguration` with `@SpringJunitConfig`

**org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration**

_Replaces `@ExtendWith(SpringRunner.class)` and `@ContextConfiguration` with `@SpringJunitConfig`, preserving attributes on `@ContextConfiguration`, unless `@ContextConfiguration(loader = ...)` is used._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/ReplaceExtendWithAndContextConfiguration.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5

## Example


{% tabs %}
{% tab title="org/example/ExampleClass.java" %}

###### Before
{% code title="org/example/ExampleClass.java" %}
```java
package org.example;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = ExampleClass.ExampleConfiguration.class)
public class ExampleClass {
    @Configuration
    static class ExampleConfiguration {
    }
}
```
{% endcode %}

###### After
{% code title="org/example/ExampleClass.java" %}
```java
package org.example;

import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;

@SpringJUnitConfig(classes = ExampleClass.ExampleConfiguration.class)
public class ExampleClass {
    @Configuration
    static class ExampleConfiguration {
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/example/ExampleClass.java
+++ org/example/ExampleClass.java
@@ -3,1 +3,0 @@
package org.example;

-import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.context.annotation.Configuration;
@@ -5,2 +4,1 @@
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.context.annotation.Configuration;
-import org.springframework.test.context.ContextConfiguration;
-import org.springframework.test.context.junit.jupiter.SpringExtension;
+import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;

@@ -8,2 +6,1 @@
import org.springframework.test.context.junit.jupiter.SpringExtension;

-@ExtendWith(SpringExtension.class)
-@ContextConfiguration(classes = ExampleClass.ExampleConfiguration.class)
+@SpringJUnitConfig(classes = ExampleClass.ExampleConfiguration.class)
public class ExampleClass {
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
    activeRecipe("org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration")
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
            <recipe>org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* nbruno
* [Knut Wannheden](mailto:knut@moderne.io)
* Kun Li


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
