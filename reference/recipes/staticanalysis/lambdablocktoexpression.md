# Simplify lambda blocks to expressions

**org.openrewrite.staticanalysis.LambdaBlockToExpression**

_Single-line statement lambdas returning a value can be replaced with expression lambdas._

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/LambdaBlockToExpression.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.util.function.Function;
class Test {
    Function<Integer, Integer> f = n -> {
        return n+1;
    };
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.function.Function;
class Test {
    Function<Integer, Integer> f = n -> n+1;
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -3,3 +3,1 @@
import java.util.function.Function;
class Test {
-   Function<Integer, Integer> f = n -> {
-       return n+1;
-   };
+   Function<Integer, Integer> f = n -> n+1;
}
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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.LambdaBlockToExpression")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.LambdaBlockToExpression</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.LambdaBlockToExpression
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [xshen053](shenxiaxi26@gmail.com)
* [Sam Snyder](sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.LambdaBlockToExpression)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
