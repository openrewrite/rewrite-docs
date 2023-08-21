# Use logger instead of `printStackTrace()`

**org.openrewrite.java.logging.PrintStackTraceToLogError**

_When a logger is present, log exceptions rather than calling `printStackTrace()`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/PrintStackTraceToLogError.java), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.0.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | addLogger | *Optional*. Add a logger field to the class if it isn't already present. |
| `String` | loggerName | *Optional*. The name of the logger to use when generating a field. |
| `String` | loggingFramework | *Optional*. The logging framework to use. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|addLogger|`null`|
|loggerName|`LOGGER`|
|loggingFramework|`null`|


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.slf4j.Logger;
class Test {
    Logger logger;

    void test() {
        try {
        } catch(Throwable t) {
            t.printStackTrace();
            t.printStackTrace(System.err);
            t.printStackTrace(System.out);
        }
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.slf4j.Logger;
class Test {
    Logger logger;

    void test() {
        try {
        } catch(Throwable t) {
            logger.error("Exception", t);
            logger.error("Exception", t);
            logger.error("Exception", t);
        }
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -8,3 +8,3 @@
        try {
        } catch(Throwable t) {
-           t.printStackTrace();
-           t.printStackTrace(System.err);
-           t.printStackTrace(System.out);
+           logger.error("Exception", t);
+           logger.error("Exception", t);
+           logger.error("Exception", t);
        }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.25")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.PrintStackTraceToLogError")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.0.2")
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
            <recipe>org.openrewrite.java.logging.PrintStackTraceToLogError</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.0.2</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.logging.PrintStackTraceToLogError
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.PrintStackTraceToLogError)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
