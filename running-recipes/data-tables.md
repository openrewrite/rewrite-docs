# Getting started with data tables

Traditionally, recipes either tried to fix an issue by updating the code directly or they helped you find pieces of code based on a query. However, what if you wanted to extract some specific attributes or inferences from the code? For example, what if you wanted to know details about the vulnerabilities that exist in one of your repositories?

This is where data tables come in. In addition to modifying the code directly, recipes can generate tabular data that people can use for analysis purposes. Taking the security vulnerability scenario as an example, a recipe could fix certain vulnerabilities and produce a table containing vital information about what vulnerabilities exist in your repository. This information could include a summary of the CVE, the severity of the issue, and whether or not a version update could address the vulnerability.

To help you get started with data tables, let's walk through the steps needed to make an OpenRewrite recipe produce a data table. We'll then talk about some of the limitations with them and how you can potentially get around them.

{% hint style="info" %}
If you want to see what recipes have data tables and what those tables are, check out our [recipes with data tables doc](https://docs.openrewrite.org/reference/recipes-with-data-tables).
{% endhint %}

## Producing data tables

### Step 1: Enable data table functionality

By default, OpenRewrite recipes will **not** produce a data table. In order for a recipe to produce one, you will need to do two things:

1. You will need to ensure your project is built with
   - [rewrite-maven-plugin](https://github.com/openrewrite/rewrite-maven-plugin) version `5.39.0` or higher.
   - [rewrite-gradle-plugin](https://github.com/openrewrite/rewrite-gradle-plugin/) version `6.16.5` or higher. 
2. Next, you will either need to update build file or modify your command for running a recipe:

{% tabs %}

{% tab title="build.gradle" %}
Add `exportDatatables = true` to your `build.gradle` file such as in the following example:

```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.dependencies.DependencyVulnerabilityCheck")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:1.13.0")
}
```
{% endtab %}

{% tab title="Gradle command line" %}
Add `-Drewrite.exportDatatables=true` to your Gradle command for running a recipe such as in the following example:

{% code overflow="wrap" %}
```bash
gradle -Drewrite.exportDatatables=true rewriteRun
```
{% endcode %}
{% endtab %}
{% tab title="pom.xml" %}
Add `<exportDatatables>true</exportDatatables>` to your `pom.xml` file such as in the following example:

```xml
<plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>5.40.2</version>
    <configuration>
        <exportDatatables>true</exportDatatables>
        <activeRecipes>
            <recipe>org.openrewrite.java.dependencies.DependencyVulnerabilityCheck</recipe>
        </activeRecipes>
    </configuration>
    <dependencies>
        <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>1.7.0</version>
        </dependency>
    </dependencies>
</plugin>
```
{% endtab %}

{% tab title="Maven command line" %}
Add `-Drewrite.exportDatatables=true` to your Maven command for running a recipe such as in the following example:

{% code overflow="wrap" %}
```bash
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.exportDatatables=true -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-dependencies:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.dependencies.DependencyVulnerabilityCheck
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Step 2: Run your recipe

Once data tables have been enabled, please run your recipe as normal such as with the `mvn rewrite:run` command.

### Step 3: Access your data table

After your recipe has been run, a `target/rewrite/datatables` directory will be created in your repository. In there, there will be a timestamped folder that contains CSVs for the data tables that were produced by the recipe:

![Example target folder](/.gitbook/assets/datatable-example.png)

## Limitations + how Moderne can help

OpenRewrite recipes only run on a single repository at a time. Likewise, a data table can only be produced for a single repository at a time. This caveat significantly limits the potential benefit of data tables.

For instance, if you had 1000 repositories you wanted to check, you'd have to configure _each repository_, run the recipe, and build up your own CSV that concatenates all 1000 results together. That would take a considerable amount of time and effort for only a single recipe. If you wanted to run multiple recipes that produced multiple data tables - it spirals out of control even more quickly.

Fortunately, [Moderne](https://docs.moderne.io/) can help with this. Data tables can be produced for any types of repositories (whether they're built with Maven or not) without any configuration changes. Moderne can also run recipes against all of your repositories at once in a significantly shorter period of time.

For more information about data tables in Moderne, check out our [getting started with data tables guide](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables). 