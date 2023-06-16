# Find which Java version is in use

**org.openrewrite.java.migrate.search.AboutJavaVersion**

_A diagnostic for studying the distribution of Java language version levels (both source and target compatibility across files and source sets)._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/search/AboutJavaVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | whenUsesType | *Optional*. Only mark the Java version when this type is in use. |

## Data Tables (Only available on the [Moderne platform](https://public.moderne.io/))

### Java versions by file

_A per-file view of Java version in use._

| Column Name | Description |
| ----------- | ----------- |
| Project name | The module name (useful especially for multi-module repositories). |
| Source set name | The source set, e.g. `main` or `test`. |
| Created by | The JDK release that was used to compile the source file. |
| VM vendor | The vendor of the JVM that was used to compile the source file. |
| Source compatibility | The source compatibility of the source file. |
| Major version source compatibility | The major version. |
| Target compatibility | The target compatibility or `--release` version of the source file. |

### Java versions by source set

_A per-source set view of Java version in use._

| Column Name | Description |
| ----------- | ----------- |
| Project name | The module name (useful especially for multi-module repositories). |
| Source set name | The source set, e.g. `main` or `test`. |
| Created by | The JDK release that was used to compile the source file. |
| VM vendor | The vendor of the JVM that was used to compile the source file. |
| Source compatibility | The source compatibility of the source file. |
| Major version source compatibility | The major version. |
| Target compatibility | The target compatibility or `--release` version of the source file. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|whenUsesType|`null`|


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
/*~~(Java version: 11)~~>*/class Test {
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -1,1 +1,1 @@
-class Test {
+/*~~(Java version: 11)~~>*/class Test {
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.search.AboutJavaVersion")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.search.AboutJavaVersion</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.search.AboutJavaVersion
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.search.AboutJavaVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
