---
sidebar_label: Running Rewrite on a Maven project without modifying the build
description: How to run OpenRewrite on a Maven project without modifying any of the build files.
---

# Running Rewrite on a Maven project without modifying the build

In this tutorial, we will apply a Rewrite [recipe](../concepts-and-explanations/recipes.md) to a source code repository built with Maven without modifying the build itself. The instructions for this differ slightly depending on whether or not the recipe has configuration parameters. Please note that you will need to have [Maven](https://maven.apache.org/download.cgi) installed to run the shell commands.

## Configure the Code Genome Project repository

OpenRewrite releases are published to the [Code Genome Project](https://artifacts.codegenomeproject.org/maven) repository, which requires authentication. Because the commands below leave your `pom.xml` untouched, that repository has to be declared in your Maven `settings.xml` file (typically at `~/.m2/settings.xml`) instead:

* as a `pluginRepository`, so that `rewrite-maven-plugin` itself can be resolved
* as a `repository`, so that any recipe artifact passed to `rewrite.recipeArtifactCoordinates` can be resolved

```markup title="settings.xml"
<settings>
  <servers>
    <server>
      <id>codegenome</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
  <profiles>
    <profile>
      <id>codegenome</id>
      <repositories>
        <repository>
          <id>codegenome</id>
          <url>https://artifacts.codegenomeproject.org/maven</url>
        </repository>
      </repositories>
      <pluginRepositories>
        <pluginRepository>
          <id>codegenome</id>
          <url>https://artifacts.codegenomeproject.org/maven</url>
        </pluginRepository>
      </pluginRepositories>
    </profile>
  </profiles>
  <activeProfiles>
    <activeProfile>codegenome</activeProfile>
  </activeProfiles>
</settings>
```

Replace `USERNAME` with the email or username you signed in to the Code Genome Project with, and `TOKEN` with a download token created there, as described in the [quickstart guide](./getting-started.md#step-2-add-rewrite-maven-plugin-or-rewrite-gradle-plugin-to-your-project).

## Running a recipe without configuration parameters

If the recipe you're trying to run does not have any required configuration parameters, then you can run the recipe by executing a shell command.

:::tip
Our [recipe documentation](/recipes) includes the specific shell commands to run for any recipe without configuration parameters. You may find it easier to copy and run the provided command instead of manually creating it.
:::

If the recipe comes from the [core Rewrite library](https://github.com/openrewrite/rewrite) (such as with [Remove Unused Imports](../recipes/java/removeunusedimports.md)) then you can run the following command and replace `org.openrewrite.java.RemoveUnusedImports` with the path to the recipe you're wanting to run: 

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:{{VERSION_REWRITE_MAVEN_PLUGIN}}:run \
  -Drewrite.activeRecipes=org.openrewrite.java.RemoveUnusedImports
```

If the recipe comes from a different library (such as with [Migrate to Jakarta EE 9](../recipes/java/migrate/jakarta/javaxmigrationtojakarta.md)) then you can run the following command and replace `org.openrewrite.recipe:rewrite-migrate-java:RELEASE` with the artifact coordinates of your recipe and `org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta` with the path to the recipe you're wanting to run:

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:{{VERSION_REWRITE_MAVEN_PLUGIN}}:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
```

## Running a recipe with configuration parameters

### Using the `rewrite.yml` file

If the recipe you're trying to run has configuration parameters, then you will need to:

1. [Create or update a `rewrite.yml` file in your project root](../running-recipes/getting-started.md#step-5-run-a-recipe-with-yaml-configuration). In there, you will need to create a new recipe that wraps the recipe you want to run and specifies the parameters you want to use.
2. Run a shell command that executes the new recipe you've defined in step 1.

For instance, if you wanted to run the [ChangePackage recipe](../recipes/java/changepackage.md) to change `org.old.package.name` to `org.new.package.name`, you would need to create a `rewrite.yml` file that looks like this: 

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.NameYouDefine
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.old.package.name
      newPackageName: org.new.package.name
```

You could then run that recipe by executing the following shell command:

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:{{VERSION_REWRITE_MAVEN_PLUGIN}}:run \
  -Drewrite.activeRecipes=com.yourorg.NameYouDefine
```
### Applying options in shell command.

While the preferred way to configure recipes is through a `rewrite.yml` file, it is possible to pass configuration parameters directly from the command line. However, this only works when running a _single_ recipe.

For example, to run the [AddCommentToMethod](../recipes/java/addcommenttomethod.md) recipe without modifying your `pom.xml`, you can use the following command:

```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:{{VERSION_REWRITE_MAVEN_PLUGIN}}:run \
  -Drewrite.activeRecipes=org.openrewrite.java.AddCommentToMethod \
  -Drewrite.options=comment='Some comment with "quotes"',methodPattern="example.SomeClass someMethod(..)"
```

:::warning
This approach does not scale well for larger projects. Each time you run a recipe from the command line, the LST is built from scratch before the recipe is applied. While this is fine for quick, one-off runs, it becomes inefficient if you run multiple recipes one after another. In contrast, when using a `rewrite.yml` file, all configured recipes are applied in a single pass, and the LST is only built once.

For more information, see the [frequently asked questions](../reference/faq.md#is-it-possible-to-pass-arguments-to-a-recipe-from-the-command-line).
:::
