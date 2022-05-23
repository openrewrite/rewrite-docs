# Convert Logger#error|warn(Throwable#message) to Logger#error|warn(<log-message>, e)

** org.openrewrite.java.logging.slf4j.ConvertLogMessageMessageOnlyToLogMessageAndThrowable**
_Convert `Logger#error|warn(throwable#message)` to `Logger#error|warn(<log-message>, e)` invocations having only the error's message as the parameter, to a log statement with message and throwable_

## Source

[Github](https://github.com/openrewrite/rewrite-logging-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/1.6.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 1.6.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | logMessage | *Optional*. The message accompanying the exception. |


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-logging-frameworks:1.6.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.20.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.ConvertLogMessageMessageOnlyToLogMessageAndThrowable")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:1.6.0")
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
        <version>4.23.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.ConvertLogMessageMessageOnlyToLogMessageAndThrowable</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>1.6.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.ConvertLogMessageMessageOnlyToLogMessageAndThrowable`
