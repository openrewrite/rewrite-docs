# Use `JavaParser.Builder` when constructing `JavaTemplate`

**org.openrewrite.java.recipes.UseJavaParserBuilderInJavaTemplate**

_Because we can now clone `JavaParser.Builder`, there is no need to fully build the parser inside a `Supplier<JavaParser>`. This also makes room for `JavaTemplate` to add shared `JavaTypeCache` implementations to parsers used to compile templates._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/recipes/UseJavaParserBuilderInJavaTemplate.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Example


{% tabs %}
{% tab title="MyTest.java" %}

###### Before
{% code title="MyTest.java" %}
```java
import org.openrewrite.java.*;
class MyTest {
    Object o = JavaTemplate.builder(() -> null, "")
      .javaParser(() -> JavaParser.fromJavaVersion().build());
}
```
{% endcode %}

###### After
{% code title="MyTest.java" %}
```java
import org.openrewrite.java.*;
class MyTest {
    Object o = JavaTemplate.builder(() -> null, "")
      .javaParser(JavaParser.fromJavaVersion());
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- MyTest.java
+++ MyTest.java
@@ -4,1 +4,1 @@
-      .javaParser(() -> JavaParser.fromJavaVersion().build());
+      .javaParser(JavaParser.fromJavaVersion());
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.recipes.UseJavaParserBuilderInJavaTemplate")
}

repositories {
    mavenCentral()
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
            <recipe>org.openrewrite.java.recipes.UseJavaParserBuilderInJavaTemplate</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.recipes.UseJavaParserBuilderInJavaTemplate
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.recipes.UseJavaParserBuilderInJavaTemplate)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
