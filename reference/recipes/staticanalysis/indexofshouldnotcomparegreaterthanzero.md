# `indexOf` should not compare greater than zero

**org.openrewrite.staticanalysis.IndexOfShouldNotCompareGreaterThanZero**

_Replaces `String#indexOf(String) > 0` and `List#indexOf(Object) > 0` with `>=1`. Checking `indexOf` against `>0` ignores the first element, whereas `>-1` is inclusive of the first element. For clarity, `>=1` is used, because `>0` and `>=1` are semantically equal. Using `>0` may appear to be a mistake with the intent of including all elements. If the intent is to check whether a value in included in a `String` or `List`, the `String#contains(String)` or `List#contains(Object)` methods may be better options altogether._

### Tags

* RSPEC-2692

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/IndexOfShouldNotCompareGreaterThanZero.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.util.List;

class Test {
    static boolean hasIndex(List<String> strList, String str) {
        if (strList.indexOf(str) > 0) {
        }
        return strList.indexOf(str) > 0;
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.List;

class Test {
    static boolean hasIndex(List<String> strList, String str) {
        if (strList.indexOf(str) >= 1) {
        }
        return strList.indexOf(str) >= 1;
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -5,1 +5,1 @@
-        if (strList.indexOf(str) > 0) {
+        if (strList.indexOf(str) >= 1) {
@@ -7,1 +7,1 @@
-        return strList.indexOf(str) > 0;
+        return strList.indexOf(str) >= 1;
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.IndexOfShouldNotCompareGreaterThanZero")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.1")
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
            <recipe>org.openrewrite.staticanalysis.IndexOfShouldNotCompareGreaterThanZero</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.IndexOfShouldNotCompareGreaterThanZero
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Aaron Gershman](aegershman@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.staticanalysis.IndexOfShouldNotCompareGreaterThanZero)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
