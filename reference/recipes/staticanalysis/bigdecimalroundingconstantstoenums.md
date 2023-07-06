# `BigDecimal` rounding constants to `RoundingMode` enums

**org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums**

_Convert `BigDecimal` rounding constants to the equivalent `RoundingMode` enum._

### Tags

* RSPEC-2111

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/BigDecimalRoundingConstantsToEnums.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.3

## Example


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
import java.math.BigDecimal;

class A {
    void divide() {
        BigDecimal bd = BigDecimal.valueOf(10);
        BigDecimal bd2 = BigDecimal.valueOf(2);
        BigDecimal bd3 = bd.divide(bd2, BigDecimal.ROUND_DOWN);
        bd.divide(bd2, 1);
        bd.divide(bd2, 1, BigDecimal.ROUND_CEILING);
        bd.divide(bd2, 1, 1);
        bd.setScale(2, 1);
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
import java.math.BigDecimal;
import java.math.RoundingMode;

class A {
    void divide() {
        BigDecimal bd = BigDecimal.valueOf(10);
        BigDecimal bd2 = BigDecimal.valueOf(2);
        BigDecimal bd3 = bd.divide(bd2, RoundingMode.DOWN);
        bd.divide(bd2, RoundingMode.DOWN);
        bd.divide(bd2, 1, RoundingMode.CEILING);
        bd.divide(bd2, 1, RoundingMode.DOWN);
        bd.setScale(2, RoundingMode.DOWN);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- A.java
+++ A.java
@@ -2,0 +2,1 @@
import java.math.BigDecimal;
+import java.math.RoundingMode;

@@ -7,5 +8,5 @@
        BigDecimal bd = BigDecimal.valueOf(10);
        BigDecimal bd2 = BigDecimal.valueOf(2);
-       BigDecimal bd3 = bd.divide(bd2, BigDecimal.ROUND_DOWN);
-       bd.divide(bd2, 1);
-       bd.divide(bd2, 1, BigDecimal.ROUND_CEILING);
-       bd.divide(bd2, 1, 1);
-       bd.setScale(2, 1);
+       BigDecimal bd3 = bd.divide(bd2, RoundingMode.DOWN);
+       bd.divide(bd2, RoundingMode.DOWN);
+       bd.divide(bd2, 1, RoundingMode.CEILING);
+       bd.divide(bd2, 1, RoundingMode.DOWN);
+       bd.setScale(2, RoundingMode.DOWN);
    }
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
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Patrick](mailto:patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
