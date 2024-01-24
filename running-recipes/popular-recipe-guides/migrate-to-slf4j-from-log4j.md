# Migrate to SLF4J from Log4j

In this guide, we'll use OpenRewrite to perform an automated migration from Apache `Log4j` (handling both [log4j `1.x`](../../tutorials/\(https:/logging.apache.org/log4j/1.2/\)/) or [log4j `2.x`](../../tutorials/\(https:/logging.apache.org/log4j/2.x/\)/)) to [the Simple Logging Facade for Java (`SLF4J`)](http://www.slf4j.org).

## Example Configuration

The [org.openrewrite.java.logging.slf4j.Log4jToSlf4j](../../reference/recipes/java/logging/slf4j/log4jtoslf4j.md) recipe has no required configuration options and can be activated directly after taking a dependency on [rewrite-logging-frameworks](https://github.com/openrewrite/rewrite-logging-frameworks) in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.8.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.Log4jToSlf4j")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:2.6.3"))
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.21.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.Log4jToSlf4j</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.4.2</version>
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

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## Before and After

For the full list of changes, see the recipe's [reference documentation](../../reference/recipes/java/logging/slf4j/log4jtoslf4j.md).

Similar to the [`SLF4J Migrator`](http://www.slf4j.org/migrator.html), the goal of the `Log4jToSlf4j` recipe is to significantly reduce the amount of work involved in migrating `Log4j` to `SLF4J`. Because OpenRewrite works by leveraging type-attributed [Lossless Semantic Tree](../../concepts-and-explanations/lossless-semantic-trees.md) (LST) representing your source code, the `Log4jToSlf4j` recipe can overcome several limitations discussed in the [`SLF4J Migrator` guide](http://www.slf4j.org/migrator.html).

### `.toString()`

Because `Log4j` logging statements are automatically migrated to use the [`SLF4J Parameterized Logging` equivalent](http://www.slf4j.org/faq.html#logging\_performance)(see ["Use SLF4J Parameterized Logging"](../../reference/recipes/java/logging/slf4j/parameterizedlogging.md)), messages of type `String` are supported. Therefore, there is no need to add a `.toString()` method invocation on the object.

{% tabs %}
{% tab title="Object Parameters (Before)" %}
```java
import org.apache.log4j.Logger;

class Example {
    Logger logger = Logger.getLogger(Example.class);

    void method(Example example) {
        logger.info(example);
        logger.info(new Object());
        logger.info(new StringBuilder("append0"));
    }
}
```
{% endtab %}

{% tab title="Object Parameters (After)" %}
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class Example {
    Logger logger = LoggerFactory.getLogger(Example.class);

    void method(Example example) {
        logger.info("{}", example);
        logger.info("{}", new Object());
        logger.info("{}", new StringBuilder("append0"));
    }
}
```
{% endtab %}
{% endtabs %}

### `FATAL` to `ERROR`

The `Log4j` log level `FATAL` is not supported in `SLF4J`. Therefore, `FATAL` level log statements are migrated to `ERROR` level.

{% tabs %}
{% tab title="Migrate fatal to error (Before)" %}
```java
import org.apache.log4j.Logger;

class Example {
    Logger logger = Logger.getLogger(Example.class);

    void method() {
        logger.fatal("uh oh");
    }
}
```
{% endtab %}

{% tab title="Migrate fatal to error (After)" %}
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class Example {
    Logger logger = LoggerFactory.getLogger(Example.class);

    void method() {
        logger.error("uh oh");
    }
}
```
{% endtab %}
{% endtabs %}

### Migrate using `type` information

A method declaring multiple loggers on the same line will have a complete conversion.

{% tabs %}
{% tab title="Same Line Loggers (Before)" %}
```java
import org.apache.log4j.Logger;

class Example {
    public void someMethod(Logger l1, Logger l2) {
    }
}
```
{% endtab %}

{% tab title="Same Line Loggers (After)" %}
```java
// Notice the import change Logger to the SLF4J type equivalent:
import org.slf4j.Logger;

class Example {
    public void someMethod(Logger l1, Logger l2) {
    }
}
```
{% endtab %}
{% endtabs %}

### Handle `Exception` Migrations

Additionally, `Log4j` `ERROR` log level exceptions are migrated to their `SLF4J` equivalent:

{% tabs %}
{% tab title="Migrates Exceptions (Before)" %}
```java
import org.apache.log4j.Logger;

class Example {
    Logger logger = Logger.getLogger(Example.class);

    void method(String numberString) {
        try {
            Integer i = Integer.valueOf(numberString);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
    }
}
```
{% endtab %}

{% tab title="Migrates Exceptions (After)" %}
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class Example {
    Logger logger = LoggerFactory.getLogger(Example.class);

    void method(String numberString) {
        try {
            Integer i = Integer.valueOf(numberString);
        } catch (Exception e) {
            logger.error("{}", e.getMessage(), e);
        }
    }
}
```
{% endtab %}
{% endtabs %}

For the full list of changes, see the recipe's [reference documentation](../../reference/recipes/java/logging/slf4j/parameterizedlogging.md).

### Known Limitations

The following is a list of known limitations/issues:

* Currently, `log4j` properties and configuration files are not migrated.
* `Log4j` configuration customizations which do not have an `SLF4J` equivalent cannot be migrated.

We are always looking for feedback on which tasks should be prioritized. If you have a specific use case that is not yet covered by this project, please reach out to our team!
