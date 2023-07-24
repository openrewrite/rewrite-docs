# Format SQL in String Text Blocks

**org.openrewrite.sql.FormatSql**

_Checks whether a text block may contain SQL, and if so, formats the text accordingly._

## Source

[GitHub](https://github.com/openrewrite/rewrite-sql/blob/main/src/main/java/org/openrewrite/sql/FormatSql.java), [Issue Tracker](https://github.com/openrewrite/rewrite-sql/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-sql/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-sql
* version: 1.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | sqlDialect | *Optional*. Check out https://github.com/vertical-blank/sql-formatter#dialect for supported dialects. |
| `String` | indent | *Optional*. Defaults to two spaces. |
| `Integer` | maxColumnLength | *Optional*. Defaults to 50. |
| `Boolean` | uppercase | *Optional*. Defaults to false (not safe to use when SQL dialect has case-sensitive identifiers). |

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
    String query = """
            SELECT * FROM my_table
            WHERE
              something = 1;\
            """;
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    String query = """
            SELECT
              *
            FROM
              my_table
            WHERE
              something = 1;\
            """;
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -3,1 +3,4 @@
class Test {
    String query = """
-           SELECT * FROM my_table
+           SELECT
+             *
+           FROM
+             my_table
            WHERE
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-sql:1.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.sql.FormatSql")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-sql:1.0.1")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.sql.FormatSql</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-sql</artifactId>
            <version>1.0.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-sql:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.sql.FormatSql
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Mahatma_Fatal_Error


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.sql.FormatSql)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
