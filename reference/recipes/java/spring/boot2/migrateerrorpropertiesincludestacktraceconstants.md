# Use `ErrorProperties#IncludeStacktrace.ON_PARAM`

**org.openrewrite.java.spring.boot2.MigrateErrorPropertiesIncludeStackTraceConstants**

_`ErrorProperties#IncludeStacktrace.ON_TRACE_PARAM` was deprecated in 2.3.x and removed in 2.5.0._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/MigrateErrorPropertiesIncludeStackTraceConstants.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.7

## Example


{% tabs %}
{% tab title="org/test/Test.java" %}

###### Before
{% code title="org/test/Test.java" %}
```java
package org.test;

import org.springframework.boot.autoconfigure.web.ErrorProperties;

class Test {
    void methodA() {
        ErrorProperties.IncludeStacktrace value = ErrorProperties.IncludeStacktrace.ON_TRACE_PARAM;
    }
}
```
{% endcode %}

###### After
{% code title="org/test/Test.java" %}
```java
package org.test;

import org.springframework.boot.autoconfigure.web.ErrorProperties;

class Test {
    void methodA() {
        ErrorProperties.IncludeStacktrace value = ErrorProperties.IncludeStacktrace.ON_PARAM;
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/test/Test.java
+++ org/test/Test.java
@@ -7,1 +7,1 @@
class Test {
    void methodA() {
-       ErrorProperties.IncludeStacktrace value = ErrorProperties.IncludeStacktrace.ON_TRACE_PARAM;
+       ErrorProperties.IncludeStacktrace value = ErrorProperties.IncludeStacktrace.ON_PARAM;
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateErrorPropertiesIncludeStackTraceConstants")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.MigrateErrorPropertiesIncludeStackTraceConstants</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateErrorPropertiesIncludeStackTraceConstants
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.MigrateErrorPropertiesIncludeStackTraceConstants)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
