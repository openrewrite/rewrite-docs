# Find SQL in code and resource files

**org.openrewrite.sql.FindSql**

_Find SQL in code (e.g. in string literals) and in resources like those ending with `.sql`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-sql/blob/main/src/main/java/org/openrewrite/sql/FindSql.java), [Issue Tracker](https://github.com/openrewrite/rewrite-sql/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-sql/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-sql
* version: 1.0.1

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Database columns used

_Shows which database columns are read/written by a SQL statement._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file. |
| Operation | Whether the column is read, written, etc. |
| Table | The table name. |
| Column | The column name. In the case of a DELETE, column will be null. |


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
    activeRecipe("org.openrewrite.sql.FindSql")
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
            <recipe>org.openrewrite.sql.FindSql</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.sql.FindSql
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.sql.FindSql)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
