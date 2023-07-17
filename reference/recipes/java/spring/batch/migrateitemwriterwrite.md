# Migrate `ItemWriter`

**org.openrewrite.java.spring.batch.MigrateItemWriterWrite**

_`JobBuilderFactory` was deprecated in Springbatch 5.x : replaced by `JobBuilder`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/batch/MigrateItemWriterWrite.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5

## Example


{% tabs %}
{% tab title="ConsoleItemWriter.java" %}

###### Before
{% code title="ConsoleItemWriter.java" %}
```java
import java.util.List;
import org.springframework.batch.item.ItemWriter;

public class ConsoleItemWriter<T> implements ItemWriter<T> {

    @Override
    public void write(final List<? extends T> items) throws Exception {
        for (final T item : items) {
            System.out.println(item.toString());
        }
    }
}
```
{% endcode %}

###### After
{% code title="ConsoleItemWriter.java" %}
```java
import org.springframework.batch.item.Chunk;
import org.springframework.batch.item.ItemWriter;

public class ConsoleItemWriter<T> implements ItemWriter<T> {

    @Override
    public void write(final Chunk<? extends T> items) throws Exception {
        for (final T item : items) {
            System.out.println(item.toString());
        }
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- ConsoleItemWriter.java
+++ ConsoleItemWriter.java
@@ -1,1 +1,1 @@
-import java.util.List;
+import org.springframework.batch.item.Chunk;
import org.springframework.batch.item.ItemWriter;
@@ -7,1 +7,1 @@

    @Override
-   public void write(final List<? extends T> items) throws Exception {
+   public void write(final Chunk<? extends T> items) throws Exception {
        for (final T item : items) {
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.batch.MigrateItemWriterWrite")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.5")
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
        <version>5.3.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.batch.MigrateItemWriterWrite</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.batch.MigrateItemWriterWrite
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* pdesprez
* [Knut Wannheden](mailto:knut@moderne.io)
* Kun Li


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.batch.MigrateItemWriterWrite)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
