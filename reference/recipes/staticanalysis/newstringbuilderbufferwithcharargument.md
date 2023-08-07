# Change `StringBuilder` and `StringBuffer` character constructor argument to `String`

**org.openrewrite.staticanalysis.NewStringBuilderBufferWithCharArgument**

_Instantiating a `StringBuilder` or a `StringBuffer` with a `Character` results in the `int` representation of the character being used for the initial size._

### Tags

* RSPEC-1317

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/NewStringBuilderBufferWithCharArgument.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.4

## Example


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
class A {
    StringBuffer buffer = new StringBuffer('a');
    StringBuilder builder = new StringBuilder('a');
    char notALiteral = 'c';
    StringBuffer buffer = new StringBuffer(notALiteral);
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
class A {
    StringBuffer buffer = new StringBuffer("a");
    StringBuilder builder = new StringBuilder("a");
    char notALiteral = 'c';
    StringBuffer buffer = new StringBuffer(String.valueOf(notALiteral));
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- A.java
+++ A.java
@@ -2,2 +2,2 @@
class A {
-   StringBuffer buffer = new StringBuffer('a');
-   StringBuilder builder = new StringBuilder('a');
+   StringBuffer buffer = new StringBuffer("a");
+   StringBuilder builder = new StringBuilder("a");
    char notALiteral = 'c';
@@ -5,1 +5,1 @@
    StringBuilder builder = new StringBuilder('a');
    char notALiteral = 'c';
-   StringBuffer buffer = new StringBuffer(notALiteral);
+   StringBuffer buffer = new StringBuffer(String.valueOf(notALiteral));
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.4` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.NewStringBuilderBufferWithCharArgument")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.4")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.NewStringBuilderBufferWithCharArgument</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.4</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.NewStringBuilderBufferWithCharArgument
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Grzegorz Olędzki](mailto:grzegon@poczta.onet.pl)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Patrick](mailto:patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.NewStringBuilderBufferWithCharArgument)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
