# Use SLF4J Parameterized Logging

In this guide we'll look at using OpenRewrite to automatically refactor logging statements to take advantage of [performance improvements offered by using `slf4j` parameterized logging](http://www.slf4j.org/faq.html#logging_performance) over String concatenation.

## Example Configuration

The [ParameterizedLogging](https://github.com/openrewrite/rewrite-docs/tree/b187223ddcbf369a77a86efd6950e924fd91f00d/reference/recipes/java/logging/slf4j/parameterizedlogging.md) recipe has no required configuration options and can be activated directly after taking a dependency on [rewrite-logging-frameworks](https://github.com/openrewrite/rewrite-logging-frameworks) in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.ParameterizedLogging")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:0.9.0")
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
        <version>4.13.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.ParameterizedLogging</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>0.9.0</version>
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

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` \(or equivalent\), manually fix anything that wasn't able to be migrated automatically, and commit the results.

For the full list of changes, see the recipe's [reference documentation](https://github.com/openrewrite/rewrite-docs/tree/b187223ddcbf369a77a86efd6950e924fd91f00d/reference/recipes/java/logging/slf4j/parameterizedlogging.md).

{% tabs %}
{% tab title="Example Class \(Before\)" %}
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class Example {
    Logger logger = LoggerFactory.getLogger(Example.class);

    void method(String name, double percent) {
        logger.debug("Process [" + name + "] is at [" + percent * 100 + "%]");
    }

    void asInteger(String numberString) {
        try {
            Integer i = Integer.valueOf(numberString);
        } catch (NumberFormatException ex) {
            logger.warn("some big error: " + ex.getMessage(), ex);
        }
    }
}
```
{% endtab %}

{% tab title="Example Class \(After\)" %}
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class Example {
    Logger logger = LoggerFactory.getLogger(Example.class);

    void method(String name, double percent) {
        logger.debug("Process [{}] is at [{}%]", name, percent * 100);
    }

    void asInteger(String numberString) {
        try {
            Integer i = Integer.valueOf(numberString);
        } catch (NumberFormatException ex) {
            logger.warn("some big error: {}", ex.getMessage(), ex);
        }
    }
}
```
{% endtab %}
{% endtabs %}

