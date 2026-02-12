---
description: How to create a recipe that produces a data table.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating recipes with data tables

Traditionally, recipes either tried to fix an issue by updating the code directly or they helped you find pieces of code based on a query. However, what if you wanted to extract some specific attributes or inferences from the code? For example, what if you wanted to know details about the vulnerabilities that exist in one of your repositories?

This is where data tables come in. In addition to modifying the code directly, recipes can generate tabular data that people can use for analysis purposes. Taking the security vulnerability scenario as an example, a recipe could fix certain vulnerabilities and produce a table containing vital information about what vulnerabilities exist in your repository. This information could include a summary of the CVE, the severity of the issue, and whether or not a version update could address the vulnerability.

To help you get started with data tables, let's walk through how to create a recipe that produces a data table – and the steps needed to make said recipe produce a data table. After that, we'll talk about some of the limitations of data tables and how you can potentially get around them.

:::info
If you want to see what recipes have data tables and what those tables are, check out our [recipes with data tables doc](../reference/recipes-with-data-tables.md).
:::


## Writing a recipe that produces a data table

_All of the code in the below steps can be found in the [rewrite-recipe-starter project](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/ClassHierarchy.java)._

### Step 1: Define your data table

Before you can begin writing or modifying a recipe, you should first create a class that defines your data table. At a minimum, this class should:

* Extend `org.openrewrite.DataTable`
* Have a public constructor that takes in a `Recipe` and calls `super` with a `displayName` and `description`.
    * `displayName` is a human-readable title for the data table (e.g., _"Class hierarchy report"_).
    * `description` summarizes what the purpose of your data table is (e.g., _"Records inheritance relationships between classes"_).
* Include a nested `Row` class - which contains one or more `Column` objects. Each `Column` object also needs a `displayName` and a `description` similar to the data table itself. This object defines what type of data you want your data table to store.

Below is an example that demonstrates what this should look like.

```java title="ClassHierarchyReport.java"
package com.yourorg.table;

import lombok.Value;
import org.openrewrite.Column;
import org.openrewrite.DataTable;
import org.openrewrite.Recipe;

public class ClassHierarchyReport extends DataTable<ClassHierarchyReport.Row> {

    public ClassHierarchyReport(Recipe recipe) {
        super(recipe,
                "Class hierarchy report",
                "Records inheritance relationships between classes.");
    }

    @Value
    public static class Row {
        @Column(displayName = "Class name",
                description = "Fully qualified name of the class.")
        String className;

        @Column(displayName = "Relationship",
                description = "Whether the class implements a super interface or extends a superclass.")
        Relationship relationship;

        @Column(displayName = "Super class name",
                description = "Fully qualified name of the superclass.")
        String superClassName;
    }

    public enum Relationship {
        EXTENDS,
        IMPLEMENTS
    }
}
```

### Step 2: Update your recipe

In the recipe that you want to produce a data table, please add:

1. A `transient` field that creates a new version of the data table class you defined above. You should pass in a reference to the recipe as part of this constructor. For example:

```java
transient ClassHierarchyReport report = new ClassHierarchyReport(this);
```

2.  One or more `insertRow` calls that add a row with columns that match what you defined in the data table class in step 1. For example:

```java
 report.insertRow(ctx, new ClassHierarchyReport.Row(
                            type.getFullyQualifiedName(),
                            ClassHierarchyReport.Relationship.EXTENDS,
                            supertype.getFullyQualifiedName()));
```

<details>

<summary>
Here is what an entire recipe class looks like with these components added:
</summary>

```java title="ClassHierarchy.java"
package com.yourorg;

import com.yourorg.table.ClassHierarchyReport;
import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.tree.J;
import org.openrewrite.java.tree.JavaType;

@Value
@EqualsAndHashCode(callSuper = false)
public class ClassHierarchy extends Recipe {

    transient ClassHierarchyReport report = new ClassHierarchyReport(this);

    String displayName = "Class hierarchy";
    String description = "Produces a data table showing inheritance relationships between classes.";

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {

            @Override
            public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext ctx) {
                JavaType.FullyQualified type = classDecl.getType();
                // Capture all classes, which all extend java.lang.Object
                if (type instanceof JavaType.Class && type.getSupertype() != null) {
                    JavaType.FullyQualified supertype = type.getSupertype();
                    // Capture the direct superclass
                    report.insertRow(ctx, new ClassHierarchyReport.Row(
                            type.getFullyQualifiedName(),
                            ClassHierarchyReport.Relationship.EXTENDS,
                            supertype.getFullyQualifiedName()));

                    // Capture all interfaces
                    for (JavaType.FullyQualified anInterface : type.getInterfaces()) {
                        report.insertRow(ctx, new ClassHierarchyReport.Row(
                                type.getFullyQualifiedName(),
                                ClassHierarchyReport.Relationship.IMPLEMENTS,
                                anInterface.getFullyQualifiedName()
                        ));
                    }
                }
                return super.visitClassDeclaration(classDecl, ctx);
            }
        };
    }
}
```

</details>

### Step 3: Test your recipe

Every recipe should have tests to ensure that it behaves the way you want.

To test that a data table is produced with the correct output, you can use the `dataTable` method and pass in the data table row class you created. For example:

```java
@Test
void basic() {
    rewriteRun(
        spec -> spec.dataTable(ClassHierarchyReport.Row.class, rows -> {
            assertThat(rows).containsExactly(new ClassHierarchyReport.Row("A", ClassHierarchyReport.Relationship.EXTENDS, "java.lang.Object"));
        }),
        //language=java
        java(
            """
            class A {}
            """
        )
    );
}
```

<details>

<summary>
Below is an example of a test class that checks that a specific data table is produced:
</summary>

```java title="ClassHierarchyTest.java"
package com.yourorg;

import com.yourorg.table.ClassHierarchyReport;
import org.junit.jupiter.api.Test;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.openrewrite.java.Assertions.java;

class ClassHierarchyTest implements RewriteTest {

    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(new ClassHierarchy());
    }

    @Test
    void basic() {
        rewriteRun(
          spec -> spec.dataTable(ClassHierarchyReport.Row.class, rows -> {
              assertThat(rows).containsExactly(new ClassHierarchyReport.Row("A", ClassHierarchyReport.Relationship.EXTENDS, "java.lang.Object"));
          }),
          //language=java
          java(
              """
              class A {}
              """
          )
        );
    }

    @Test
    void bExtendsA() {
        rewriteRun(
          spec -> spec.dataTable(ClassHierarchyReport.Row.class, rows -> {
              assertThat(rows).containsExactly(
                new ClassHierarchyReport.Row("A", ClassHierarchyReport.Relationship.EXTENDS, "java.lang.Object"),
                new ClassHierarchyReport.Row("B", ClassHierarchyReport.Relationship.EXTENDS, "A"));
          }),
          //language=java
          java(
              """
              class A {}
              """
          ),
          //language=java
          java(
              """
              class B extends A {}
              """
          )
        );
    }

    @Test
    void interfaceRelationship() {
        rewriteRun(
          spec -> spec.dataTable(ClassHierarchyReport.Row.class, rows -> {
              assertThat(rows).containsExactly(
                new ClassHierarchyReport.Row("A", ClassHierarchyReport.Relationship.EXTENDS, "java.lang.Object"),
                new ClassHierarchyReport.Row("A", ClassHierarchyReport.Relationship.IMPLEMENTS, "java.io.Serializable"));
          }),
          // language=java
          java(
              """
              import java.io.Serializable;
              class A implements Serializable {}
              """
          )
        );
    }
}
```

</details>

## Generating the data table

Once you have a recipe that can produce a data table, there are a few things you need to do to generate said data table.

### Step 1: Enable data table functionality

By default, OpenRewrite recipes will **not** produce a data table. In order for a recipe to produce one, you will need to do two things:

1. You will need to ensure your project is built with
   - [rewrite-maven-plugin](https://github.com/openrewrite/rewrite-maven-plugin) version `5.39.0` or higher.
   - [rewrite-gradle-plugin](https://github.com/openrewrite/rewrite-gradle-plugin/) version `6.16.5` or higher. 
2. Next, you will either need to update build file or modify your command for running a recipe:

<Tabs>

<TabItem value="build.gradle" label="build.gradle">
Add `exportDatatables = true` to your `build.gradle` file such as in the following example:

```groovy
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.dependencies.DependencyVulnerabilityCheck")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}")
}
```
</TabItem>

<TabItem value="gradle-command-line" label="Gradle command line">
Add `-Drewrite.exportDatatables=true` to your Gradle command for running a recipe such as in the following example:


```bash
gradle -Drewrite.exportDatatables=true rewriteRun
```

</TabItem>
<TabItem value="pom.xml" label="pom.xml">
Add `<exportDatatables>true</exportDatatables>` to your `pom.xml` file such as in the following example:

```xml
<plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
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
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}</version>
        </dependency>
    </dependencies>
</plugin>
```
</TabItem>

<TabItem value="maven-command-line" label="Maven command line">
Add `-Drewrite.exportDatatables=true` to your Maven command for running a recipe such as in the following example:


```bash
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.exportDatatables=true -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-dependencies:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.dependencies.DependencyVulnerabilityCheck
```

</TabItem>
</Tabs>

### Step 2: Run your recipe

Once data tables have been enabled, please run your recipe as normal such as with the `mvn rewrite:run` command.

### Step 3: Access your data table

After your recipe has been run, a `target/rewrite/datatables` directory will be created in your repository. In there, there will be a timestamped folder that contains CSVs for the data tables that were produced by the recipe:

<figure>
  ![](./assets/datatable-example.png)
  <figcaption>_Example target folder_</figcaption>
</figure>

## Limitations + how Moderne can help

OpenRewrite recipes only run on a single repository at a time. Likewise, a data table can only be produced for a single repository at a time. This caveat significantly limits the potential benefit of data tables.

For instance, if you had 1000 repositories you wanted to check, you'd have to configure _each repository_, run the recipe, and build up your own CSV that concatenates all 1000 results together. That would take a considerable amount of time and effort for only a single recipe. If you wanted to run multiple recipes that produced multiple data tables - it spirals out of control even more quickly.

Fortunately, [Moderne](https://docs.moderne.io/) can help with this. Data tables can be produced for any types of repositories (whether they're built with Maven or not) without any configuration changes. Moderne can also run recipes against all of your repositories at once in a significantly shorter period of time.

For more information about data tables in Moderne, check out our [getting started with data tables guide](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables). 