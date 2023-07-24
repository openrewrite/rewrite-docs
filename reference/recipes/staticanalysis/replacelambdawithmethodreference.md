# Use method references in lambda

**org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference**

_Replaces the single statement lambdas `o -> o instanceOf X`, `o -> (A) o`, `o -> System.out.println(o)`, `o -> o != null`, `o -> o == null` with the equivalent method reference._

### Tags

* RSPEC-1612

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ReplaceLambdaWithMethodReference.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.3

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.util.function.Function;
class Test {

    ChangeListener listener = (o, oldVal, newVal) -> {
        onChange(o, oldVal, newVal);
    };

    protected void onChange(ObservableValue<?> o, Object oldVal, Object newVal) {
        String strVal = newVal.toString();
        System.out.println(strVal);
    }

    interface ObservableValue<T> {
    }

    @FunctionalInterface
    interface ChangeListener<T> {
        void changed(ObservableValue<? extends T> observable, T oldValue, T newValue);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.function.Function;
class Test {

    ChangeListener listener = this::onChange;

    protected void onChange(ObservableValue<?> o, Object oldVal, Object newVal) {
        String strVal = newVal.toString();
        System.out.println(strVal);
    }

    interface ObservableValue<T> {
    }

    @FunctionalInterface
    interface ChangeListener<T> {
        void changed(ObservableValue<? extends T> observable, T oldValue, T newValue);
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
@@ -4,3 +4,1 @@
class Test {

-   ChangeListener listener = (o, oldVal, newVal) -> {
-       onChange(o, oldVal, newVal);
-   };
+   ChangeListener listener = this::onChange;

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
    activeRecipe("org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference")
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
            <recipe>org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* Kun Li
* Tyler Van Gorder
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* Josh Soref
* [Rick Ossendrijver](mailto:rick.ossendrijver@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
