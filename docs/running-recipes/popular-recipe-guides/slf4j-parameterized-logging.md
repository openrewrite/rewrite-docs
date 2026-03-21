---
description: How to automatically refactor logging statements to use SLF4J parameterized logging.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use SLF4J Parameterized Logging

In this guide we'll look at using OpenRewrite to automatically refactor logging statements to take advantage of [performance improvements offered by using `slf4j` parameterized logging](http://www.slf4j.org/faq.html#logging\_performance) over String concatenation.

## Example Configuration

The [ParameterizedLogging](../../recipes/java/logging/slf4j/parameterizedlogging.md) recipe has no required configuration options and can be activated directly after taking a dependency on [rewrite-logging-frameworks](https://github.com/openrewrite/rewrite-logging-frameworks) in your build file:

<RunRecipe
  recipeName="org.openrewrite.java.logging.slf4j.ParameterizedLogging"
  displayName="SLF4J parameterized logging"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-logging-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS"
/>

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

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.ParameterizedLogging" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
