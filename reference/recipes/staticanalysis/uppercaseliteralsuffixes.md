# Upper case literal suffixes

**org.openrewrite.staticanalysis.UpperCaseLiteralSuffixes**

_Using upper case literal suffixes for declaring literals is less ambiguous, e.g., `1l` versus `1L`._

### Tags

* RSPEC-818

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/UpperCaseLiteralSuffixes.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.3

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
    long lp = 1l;
    Long l = 100l;
    Double d = 100.0d;
    Float f = 100f;
    Integer i = 0;
    Long l2 = 0x100000000l;
    String s = "hello";
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    long lp = 1L;
    Long l = 100L;
    Double d = 100.0D;
    Float f = 100F;
    Integer i = 0;
    Long l2 = 0x100000000L;
    String s = "hello";
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -2,4 +2,4 @@
class Test {
-   long lp = 1l;
-   Long l = 100l;
-   Double d = 100.0d;
-   Float f = 100f;
+   long lp = 1L;
+   Long l = 100L;
+   Double d = 100.0D;
+   Float f = 100F;
    Integer i = 0;
@@ -7,1 +7,1 @@
    Float f = 100f;
    Integer i = 0;
-   Long l2 = 0x100000000l;
+   Long l2 = 0x100000000L;
    String s = "hello";
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.UpperCaseLiteralSuffixes")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.3")
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
            <recipe>org.openrewrite.staticanalysis.UpperCaseLiteralSuffixes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.3</version>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.UpperCaseLiteralSuffixes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.UpperCaseLiteralSuffixes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
