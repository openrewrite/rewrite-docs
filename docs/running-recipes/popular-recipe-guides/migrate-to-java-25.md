---
keywords: [OpenRewrite, Java, Java 25, Java Migration]
description: How to automatically migrate from Java 21 to 25.
---

import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Java 25

In this tutorial, we'll use OpenRewrite to perform an automated migration from Java 21 to Java 25. While this recipe _will_ upgrade your Java 8, 11, or 17 projects to Java 25, this guide won't cover the changes that occur from those versions to Java 25. For information on migrating to Java 21 from those versions, check out our [migrate to Java 21 guide](./migrate-to-java-21.md).

## Example Configuration

The Java 25 migration recipe can be applied by including OpenRewrite's plugin to your project and including a dependency on [rewrite-migrate-java](https://github.com/openrewrite/rewrite-migrate-java):

<RunRecipe
  recipeName="org.openrewrite.java.migrate.UpgradeToJava25"
  displayName="Upgrade to Java 25"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables={true}
/>

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## Before and After

For the complete list of changes made by this recipe, please see the reference pages for [Java 25](../../recipes/java/migrate/upgradetojava25.md).

Please note that this recipe will also [migrate from Java 8 to Java 11](../../recipes/java/migrate/java8tojava11.md), [migrate from Java 11 to Java 17](../../recipes/java/migrate/upgradetojava17.md), and [migrate from Java 17 to 21](../../recipes/java/migrate/upgradetojava21.md), if you aren't already on Java 21. For details about migrating from Java 8 to 17, check out our [migrate to Java 17 popular recipe guide](./migrate-to-java-17.md).

If you have a specific use case that is not yet covered by this project, please reach out to our team!

### Example Class

#### Before

```java
package org.openrewrite.example;

import java.io.IOException;
import java.io.Reader;
import java.lang.SecurityManager;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.zip.Inflater;
import java.util.zip.ZipError;
import java.security.Policy;

public class Java25MigrationExamples {
  
    public static void main(String[] args) {
        System.out.println("Running main method");
    }

    public void printSomething() {
        System.out.print("Hello, Java 25!");
    }

    public void waitForProcess() throws IOException, InterruptedException {
        Process process = Runtime.getRuntime().exec(new String[]{"echo", "test"});
        process.waitFor(5000, TimeUnit.MILLISECONDS);
    }

    public Reader getReader() {
        return new java.io.StringReader("Example");
    }

    public void closeInflater() {
        Inflater inflater = new Inflater();
        inflater.end();
    }

    public void throwZipError() throws ZipError {
        throw new ZipError("bad zip");
    }

    public void underscoreUnused() {
        List<String> names = List.of("Alice", "Bob");
        names.forEach((String unused) -> System.out.println("Hello"));
    }

    public void checkSecurity() {
        Policy.setPolicy(null);

        SecurityManager sm = System.getSecurityManager();
        sm.checkRead("someFile.txt");
    }
}
```

#### After

```java
package org.openrewrite.example;

import java.io.IOException;
import java.io.Reader;
import java.lang.SecurityManager;
import java.time.Duration;
import java.util.List;
import java.util.zip.Inflater;
import java.util.zip.ZipException;

public class Java25MigrationExamples {

    // Main methods can now be instance methods
    void main() {
        IO.println("Running main method");
    }

    public void printSomething() {
        // System.out.print is replaced with more modern IO.print
        IO.print("Hello, Java 25!");
    }

    public void waitForProcess() throws IOException, InterruptedException {
        Process process = Runtime.getRuntime().exec(new String[]{"echo", "test"});
        // waitFor(Duration) is more type-safe and expressive than TimeUnit constants
        process.waitFor(Duration.ofSeconds(5));
    }

    public Reader getReader() {
        // Prefer Reader.of(..) over manually constructing StringReader
        return Reader.of("Example");
    }

    public void closeInflater() {
        Inflater inflater = new Inflater();
        // Inflater now implements AutoCloseable; using close() enables try-with-resources
        inflater.close();
    }

    public void throwZipError() throws ZipException {
        // ZipError is deprecated, replaced by ZipException
        throw new ZipException("bad zip");
    }

    public void underscoreUnused() {
        List<String> names = List.of("Alice", "Bob");
        // Unused lambda parameters should use `_`
        names.forEach((String _) -> IO.println("Hello"));
    }

    public void checkSecurity() {
        // SecurityManager is obsolete and unsupported in Java 25
        // Setting to `null` makes the dead code explicit and future-proof
        SecurityManager sm = null;
    }
}
```

:::info
The above example class demonstrates many of the common changes when migrating from Java 21 to 25. That being said, there may be additional tasks covered by this recipe that are not represented in this example. Check out the [migrate to Java 25 documentation](../../recipes/java/migrate/upgradetojava25.md) for a full list of what the recipe does.
:::

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava25" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.