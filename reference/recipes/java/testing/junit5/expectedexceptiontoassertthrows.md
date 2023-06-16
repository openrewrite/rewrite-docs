# JUnit 4 `ExpectedException` To JUnit Jupiter's `assertThrows()`

**org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows**

_Replace usages of JUnit 4's `@Rule ExpectedException` with JUnit 5's `Assertions.assertThrows()`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/ExpectedExceptionToAssertThrows.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.1

## Example


{% tabs %}
{% tab title="MyTest.java" %}

###### Before
{% code title="MyTest.java" %}
```java
import org.junit.Rule;
import org.junit.rules.TemporaryFolder;
import org.junit.rules.ExpectedException;

class MyTest {

    @Rule
    TemporaryFolder tempDir = new TemporaryFolder();

    @Rule
    ExpectedException thrown = ExpectedException.none();
}
```
{% endcode %}

###### After
{% code title="MyTest.java" %}
```java
import org.junit.Rule;
import org.junit.rules.TemporaryFolder;

class MyTest {

    @Rule
    TemporaryFolder tempDir = new TemporaryFolder();
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- MyTest.java
+++ MyTest.java
@@ -3,1 +3,0 @@
-import org.junit.rules.ExpectedException;
@@ -9,3 +8,0 @@
-
    @Rule
    ExpectedException thrown = ExpectedException.none();
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1")
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
            <recipe>org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Greg Adams](greg@moderne.io)
* [Sam Snyder](sam@moderne.io)
* [Patrick Way](pway99@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Patrick](patway99@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
