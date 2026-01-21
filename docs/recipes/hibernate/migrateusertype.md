---
sidebar_label: "Migrate `UserType` to Hibernate 6 (Community Edition)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate `UserType` to Hibernate 6 (Community Edition)

**org.openrewrite.hibernate.MigrateUserType**

_With Hibernate 6 the `UserType` interface received a type parameter making it more strictly typed. This recipe applies the changes required to adhere to this change._

## Recipe source

[GitHub: rewrite-hibernate-2.17.1.jar](https://github.com/openrewrite/rewrite-hibernate/blob/main/src/main/java/org/openrewrite/hibernate/MigrateUserType.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-hibernate/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-hibernate/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.usertype.UserType;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.Objects;

public class BigDecimalAsString implements UserType {

    @Override
    public int[] sqlTypes() {
        return new int[]{Types.VARCHAR};
    }

    @Override
    public Class returnedClass() {
        return BigDecimal.class;
    }

    @Override
    public boolean equals(Object x, Object y) {
        return Objects.equals(x, y);
    }

    @Override
    public int hashCode(Object x) {
        return Objects.hashCode(x);
    }

    @Override
    public Object nullSafeGet(ResultSet rs, String[] names, SharedSessionContractImplementor session, Object owner) throws SQLException {
        String string = rs.getString(names[0]);
        return string == null || rs.wasNull() ? null : new BigDecimal(string);
    }

    @Override
    public void nullSafeSet(PreparedStatement st, Object value, int index, SharedSessionContractImplementor session) throws SQLException {
        if (value == null) {
            st.setNull(index, Types.VARCHAR);
        } else {
            st.setString(index, value.toString());
        }
    }

    @Override
    public Object deepCopy(Object value1) {
        return value1;
    }

    @Override
    public boolean isMutable() {
        return false;
    }

    @Override
    public Serializable disassemble(Object value) {
        return (BigDecimal) value;
    }

    @Override
    public Object assemble(Serializable cached, Object owner) {
        return cached;
    }

    @Override
    public Object replace(Object original, Object target, Object owner) {
        return original;
    }
}
```

###### After
```java
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.usertype.UserType;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.Objects;

public class BigDecimalAsString implements UserType<BigDecimal> {

    @Override
    public int getSqlType() {
        return Types.VARCHAR;
    }

    @Override
    public Class<BigDecimal> returnedClass() {
        return BigDecimal.class;
    }

    @Override
    public boolean equals(BigDecimal x, BigDecimal y) {
        return Objects.equals(x, y);
    }

    @Override
    public int hashCode(BigDecimal x) {
        return Objects.hashCode(x);
    }

    @Override
    public BigDecimal nullSafeGet(ResultSet rs, int position, SharedSessionContractImplementor session, Object owner) throws SQLException {
        String string = rs.getString(position);
        return string == null || rs.wasNull() ? null : new BigDecimal(string);
    }

    @Override
    public void nullSafeSet(PreparedStatement st, BigDecimal value, int index, SharedSessionContractImplementor session) throws SQLException {
        if (value == null) {
            st.setNull(index, Types.VARCHAR);
        } else {
            st.setString(index, value.toString());
        }
    }

    @Override
    public BigDecimal deepCopy(BigDecimal value1) {
        return value1;
    }

    @Override
    public boolean isMutable() {
        return false;
    }

    @Override
    public Serializable disassemble(BigDecimal value) {
        return value;
    }

    @Override
    public BigDecimal assemble(Serializable cached, Object owner) {
        return (BigDecimal) cached;
    }

    @Override
    public BigDecimal replace(BigDecimal original, BigDecimal target, Object owner) {
        return original;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -13,1 +13,1 @@
import java.util.Objects;

-public class BigDecimalAsString implements UserType {
+public class BigDecimalAsString implements UserType<BigDecimal> {

@@ -16,2 +16,2 @@

    @Override
-   public int[] sqlTypes() {
-       return new int[]{Types.VARCHAR};
+   public int getSqlType() {
+       return Types.VARCHAR;
    }
@@ -21,1 +21,1 @@

    @Override
-   public Class returnedClass() {
+   public Class<BigDecimal> returnedClass() {
        return BigDecimal.class;
@@ -26,1 +26,1 @@

    @Override
-   public boolean equals(Object x, Object y) {
+   public boolean equals(BigDecimal x, BigDecimal y) {
        return Objects.equals(x, y);
@@ -31,1 +31,1 @@

    @Override
-   public int hashCode(Object x) {
+   public int hashCode(BigDecimal x) {
        return Objects.hashCode(x);
@@ -36,2 +36,2 @@

    @Override
-   public Object nullSafeGet(ResultSet rs, String[] names, SharedSessionContractImplementor session, Object owner) throws SQLException {
-       String string = rs.getString(names[0]);
+   public BigDecimal nullSafeGet(ResultSet rs, int position, SharedSessionContractImplementor session, Object owner) throws SQLException {
+       String string = rs.getString(position);
        return string == null || rs.wasNull() ? null : new BigDecimal(string);
@@ -42,1 +42,1 @@

    @Override
-   public void nullSafeSet(PreparedStatement st, Object value, int index, SharedSessionContractImplementor session) throws SQLException {
+   public void nullSafeSet(PreparedStatement st, BigDecimal value, int index, SharedSessionContractImplementor session) throws SQLException {
        if (value == null) {
@@ -51,1 +51,1 @@

    @Override
-   public Object deepCopy(Object value1) {
+   public BigDecimal deepCopy(BigDecimal value1) {
        return value1;
@@ -61,2 +61,2 @@

    @Override
-   public Serializable disassemble(Object value) {
-       return (BigDecimal) value;
+   public Serializable disassemble(BigDecimal value) {
+       return value;
    }
@@ -66,2 +66,2 @@

    @Override
-   public Object assemble(Serializable cached, Object owner) {
-       return cached;
+   public BigDecimal assemble(Serializable cached, Object owner) {
+       return (BigDecimal) cached;
    }
@@ -71,1 +71,1 @@

    @Override
-   public Object replace(Object original, Object target, Object owner) {
+   public BigDecimal replace(BigDecimal original, BigDecimal target, Object owner) {
        return original;
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-hibernate` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.hibernate.MigrateUserType")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-hibernate:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-hibernate:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.hibernate.MigrateUserType")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.hibernate.MigrateUserType</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-hibernate</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-hibernate:RELEASE -Drewrite.activeRecipes=org.openrewrite.hibernate.MigrateUserType -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateUserType
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-hibernate:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.hibernate.MigrateUserType" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
