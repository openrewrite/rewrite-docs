# Migrate Log4j 2.x Layout to logback-classic equivalents

**org.openrewrite.java.logging.logback.Log4jLayoutToLogback**

_Migrates custom Log4j 2.x Layout components to `logback-classic`. This recipe operates on the following assumptions: 1. A logback-classic layout must extend the `LayoutBase<ILoggingEvent>` class. 2. log4j's `format()` is renamed to `doLayout()` in a logback-classic layout. 3. LoggingEvent `getRenderedMessage()` is converted to LoggingEvent `getMessage()`. 4. The log4j ignoresThrowable() method is not needed and has no equivalent in logback-classic. 5. The activateOptions() method merits further discussion. In log4j, a layout will have its activateOptions() method invoked by log4j configurators, that is PropertyConfigurator or DOMConfigurator just after all the options of the layout have been set. Thus, the layout will have an opportunity to check that its options are coherent and if so, proceed to fully initialize itself. 6. In logback-classic, layouts must implement the LifeCycle interface which includes a method called start(). The start() method is the equivalent of log4j's activateOptions() method. For more details, see this page from logback: [`Migration from log4j`](http://logback.qos.ch/manual/migrationFromLog4j.html)._

## Source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/logback/Log4jLayoutToLogback.java), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.0.2

## Example


{% tabs %}
{% tab title="TrivialLayout.java" %}

###### Before
{% code title="TrivialLayout.java" %}
```java
import org.apache.log4j.Layout;
import org.apache.log4j.spi.LoggingEvent;

class TrivialLayout extends Layout {

    @Override
    public void activateOptions() {
        // there are no options to activate
    }

    @Override
    public String format(LoggingEvent loggingEvent) {
        return loggingEvent.getRenderedMessage();
    }

    @Override
    public boolean ignoresThrowable() {
        return true;
    }
}
```
{% endcode %}

###### After
{% code title="TrivialLayout.java" %}
```java
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.LayoutBase;

class TrivialLayout extends LayoutBase<ILoggingEvent> {

    @Override
    public String doLayout(ILoggingEvent loggingEvent) {
        return loggingEvent.getMessage();
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- TrivialLayout.java
+++ TrivialLayout.java
@@ -1,2 +1,2 @@
-import org.apache.log4j.Layout;
-import org.apache.log4j.spi.LoggingEvent;
+import ch.qos.logback.classic.spi.ILoggingEvent;
+import ch.qos.logback.core.LayoutBase;

@@ -4,1 +4,1 @@
import org.apache.log4j.spi.LoggingEvent;

-class TrivialLayout extends Layout {
+class TrivialLayout extends LayoutBase<ILoggingEvent> {

@@ -7,2 +7,2 @@

    @Override
-   public void activateOptions() {
-       // there are no options to activate
+   public String doLayout(ILoggingEvent loggingEvent) {
+       return loggingEvent.getMessage();
    }
@@ -10,10 +10,0 @@
        // there are no options to activate
    }
-
-   @Override
-   public String format(LoggingEvent loggingEvent) {
-       return loggingEvent.getRenderedMessage();
-   }
-
-   @Override
-   public boolean ignoresThrowable() {
-       return true;
-   }
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
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.logback.Log4jLayoutToLogback")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.logback.Log4jLayoutToLogback</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.logging.logback.Log4jLayoutToLogback
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Aaron Gershman
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* Patrick Way


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.logback.Log4jLayoutToLogback)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
