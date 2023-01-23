# Migrate Log4j 2.x Layout to logback-classic equivalents

**org.openrewrite.java.logging.logback.Log4jLayoutToLogback**
_Migrates custom Log4j 2.x Layout components to `logback-classic`. This recipe operates on the following assumptions: 1. A logback-classic layout must extend the `LayoutBase<ILoggingEvent>` class. 2. log4j's `format()` is renamed to `doLayout()` in a logback-classic layout. 3. LoggingEvent `getRenderedMessage()` is converted to LoggingEvent `getMessage()`. 4. The log4j ignoresThrowable() method is not needed and has no equivalent in logback-classic. 5. The activateOptions() method merits further discussion. In log4j, a layout will have its activateOptions() method invoked by log4j configurators, that is PropertyConfigurator or DOMConfigurator just after all the options of the layout have been set. Thus, the layout will have an opportunity to check that its options are coherent and if so, proceed to fully initialize itself. 6. In logback-classic, layouts must implement the LifeCycle interface which includes a method called start(). The start() method is the equivalent of log4j's activateOptions() method. For more details, see this page from logback: [`Migration from log4j`](http://logback.qos.ch/manual/migrationFromLog4j.html)._

## Source

[Github](https://github.com/openrewrite/rewrite-logging-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/1.16.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 1.16.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-logging-frameworks:1.16.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.logback.Log4jLayoutToLogback")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:1.16.0")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.logback.Log4jLayoutToLogback</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>1.16.0</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:1.16.0 \
  -DactiveRecipes=org.openrewrite.java.logging.logback.Log4jLayoutToLogback
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.logging.logback.Log4jLayoutToLogback`
