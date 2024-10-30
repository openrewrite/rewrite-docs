import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use SLF4J Parameterized Logging

In this guide we'll look at using OpenRewrite to automatically refactor logging statements to take advantage of [performance improvements offered by using `slf4j` parameterized logging](http://www.slf4j.org/faq.html#logging\_performance) over String concatenation.

## Example Configuration

The [ParameterizedLogging](../../recipes/java/logging/slf4j/parameterizedlogging.md) recipe has no required configuration options and can be activated directly after taking a dependency on [rewrite-logging-frameworks](https://github.com/openrewrite/rewrite-logging-frameworks) in your build file:

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.ParameterizedLogging")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:latest.release"))
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks")
}
```

</TabItem>

<TabItem value="maven" label="Maven">

```xml title="pom.xml"
  <project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.ParameterizedLogging</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>{{VERSION_REWRITE_LOGGING_FRAMEWORKS}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

</TabItem>
</Tabs>

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

For the full list of changes, see the recipe's [reference documentation](../../recipes/java/logging/slf4j/parameterizedlogging.md).

<Tabs>
<TabItem value="example-class-before" label="Example Class (Before)">

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
</TabItem>

<TabItem value="example-class-after" label="Example Class (After)">

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
</TabItem>
</Tabs>
