# Migrate Log4j 2.x Appender to logback-classic equivalents

**org.openrewrite.java.logging.logback.Log4jAppenderToLogback**

_Migrates custom Log4j 2.x Appender components to `logback-classic`. This recipe operates on the following assumptions: 1.) The contents of the `append()` method remains unchanged. 2.) The `requiresLayout()` method is not used in logback and can be removed. 3.) In logback, the `stop()` method is the equivalent of log4j's close() method. For more details, see this page from logback: [`Migration from log4j`](http://logback.qos.ch/manual/migrationFromLog4j.html)._

## Source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/logback/Log4jAppenderToLogback.java), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.0.2

## Example


{% tabs %}
{% tab title="TrivialAppender.java" %}

###### Before
{% code title="TrivialAppender.java" %}
```java
import org.apache.log4j.AppenderSkeleton;
import org.apache.log4j.spi.LoggingEvent;

class TrivialAppender extends AppenderSkeleton {
    @Override
    protected void append(LoggingEvent loggingEvent) {
        String s = this.layout.format(loggingEvent);
        System.out.println(s);
    }

    @Override
    public void close() {
        // nothing to do
    }

    @Override
    public boolean requiresLayout() {
        return true;
    }
}
```
{% endcode %}

###### After
{% code title="TrivialAppender.java" %}
```java
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.AppenderBase;

class TrivialAppender extends AppenderBase<ILoggingEvent> {
    @Override
    protected void append(ILoggingEvent loggingEvent) {
        String s = this.layout.doLayout(loggingEvent);
        System.out.println(s);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- TrivialAppender.java
+++ TrivialAppender.java
@@ -1,2 +1,2 @@
-import org.apache.log4j.AppenderSkeleton;
-import org.apache.log4j.spi.LoggingEvent;
+import ch.qos.logback.classic.spi.ILoggingEvent;
+import ch.qos.logback.core.AppenderBase;

@@ -4,1 +4,1 @@
import org.apache.log4j.spi.LoggingEvent;

-class TrivialAppender extends AppenderSkeleton {
+class TrivialAppender extends AppenderBase<ILoggingEvent> {
    @Override
@@ -6,2 +6,2 @@
class TrivialAppender extends AppenderSkeleton {
    @Override
-   protected void append(LoggingEvent loggingEvent) {
-       String s = this.layout.format(loggingEvent);
+   protected void append(ILoggingEvent loggingEvent) {
+       String s = this.layout.doLayout(loggingEvent);
        System.out.println(s);
@@ -10,10 +10,0 @@
        System.out.println(s);
    }
-
-   @Override
-   public void close() {
-       // nothing to do
-   }
-
-   @Override
-   public boolean requiresLayout() {
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
    id("org.openrewrite.rewrite") version("6.1.25")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.logback.Log4jAppenderToLogback")
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
            <recipe>org.openrewrite.java.logging.logback.Log4jAppenderToLogback</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.logging.logback.Log4jAppenderToLogback
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* Patrick Way


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.logback.Log4jAppenderToLogback)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
