# Rename caught exceptions in empty catch blocks to `ignored`

**org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch**

_Renames caught exceptions in empty catch blocks to `ignored`. `ignored` will be incremented by 1 if a namespace conflict exists._

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RenameExceptionInEmptyCatch.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.4

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
    int ignored = 0;
    void method(int ignored1) {
        int ignored2 = 0;
        for (int ignored3 = 0; ignored3 < 10; ignored3++) { // scope does not apply.
            int ignored4 = 0; // scope does not apply.
        }
        if (ignored1 > 0) {
            int ignored5 = 0; // scope does not apply.
        }
        try {
            int ignored6 = 0; // scope does not apply.
        } catch (Exception ex) {
        }
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    int ignored = 0;
    void method(int ignored1) {
        int ignored2 = 0;
        for (int ignored3 = 0; ignored3 < 10; ignored3++) { // scope does not apply.
            int ignored4 = 0; // scope does not apply.
        }
        if (ignored1 > 0) {
            int ignored5 = 0; // scope does not apply.
        }
        try {
            int ignored6 = 0; // scope does not apply.
        } catch (Exception ignored3) {
        }
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
@@ -13,1 +13,1 @@
        try {
            int ignored6 = 0; // scope does not apply.
-       } catch (Exception ex) {
+       } catch (Exception ignored3) {
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
    activeRecipe("org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch")
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
            <recipe>org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Sam Snyder](mailto:sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
