# No double brace initialization

**org.openrewrite.staticanalysis.NoDoubleBraceInitialization**

_Replace `List`, `Map`, and `Set` double brace initialization with an initialization block._

### Tags

* RSPEC-1171
* RSPEC-3599

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/NoDoubleBraceInitialization.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.4

## Example


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
import java.util.Set;
import java.util.LinkedHashSet;
class A {
    void a() {
        Integer CNT = 10;
        final Set<Integer> keys = new LinkedHashSet<>(){{
            for (int i = 0; i < CNT; i++) {
                add(i);
            }
        }};
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
import java.util.Set;
import java.util.LinkedHashSet;
class A {
    void a() {
        Integer CNT = 10;
        final Set<Integer> keys = new LinkedHashSet<>();
        for (int i = 0; i < CNT; i++) {
            keys.add(i);
        }
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
@@ -6,5 +6,4 @@
    void a() {
        Integer CNT = 10;
-       final Set<Integer> keys = new LinkedHashSet<>(){{
-           for (int i = 0; i < CNT; i++) {
-               add(i);
-           }
-       }};
+       final Set<Integer> keys = new LinkedHashSet<>();
+       for (int i = 0; i < CNT; i++) {
+           keys.add(i);
+       }
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
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.NoDoubleBraceInitialization")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.NoDoubleBraceInitialization</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.NoDoubleBraceInitialization
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Patrick](mailto:patway99@gmail.com)
* Kun Li
* [Knut Wannheden](mailto:knut@moderne.io)
* [Sam Snyder](mailto:sam@moderne.io)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* Tyler Van Gorder


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.NoDoubleBraceInitialization)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
