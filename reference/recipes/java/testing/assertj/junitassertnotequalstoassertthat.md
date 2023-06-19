# JUnit `assertNotEquals` to AssertJ

**org.openrewrite.java.testing.assertj.JUnitAssertNotEqualsToAssertThat**

_Convert JUnit-style `assertNotEquals()` to AssertJ's `assertThat().isNotEqualTo()`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/assertj/JUnitAssertNotEqualsToAssertThat.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.2

## Example


{% tabs %}
{% tab title="MyTest.java" %}

###### Before
{% code title="MyTest.java" %}
```java
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class MyTest {
    @Test
    public void test() {
        assertNotEquals(1, notification());
    }
    private Integer notification() {
        return 2;
    }
}
```
{% endcode %}

###### After
{% code title="MyTest.java" %}
```java
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class MyTest {
    @Test
    public void test() {
        assertThat(notification()).isNotEqualTo(1);
    }
    private Integer notification() {
        return 2;
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- MyTest.java
+++ MyTest.java
@@ -3,1 +3,1 @@
import org.junit.jupiter.api.Test;

-import static org.junit.jupiter.api.Assertions.assertNotEquals;
+import static org.assertj.core.api.Assertions.assertThat;

@@ -8,1 +8,1 @@
    @Test
    public void test() {
-       assertNotEquals(1, notification());
+       assertThat(notification()).isNotEqualTo(1);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.JUnitAssertNotEqualsToAssertThat")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.2")
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
            <recipe>org.openrewrite.java.testing.assertj.JUnitAssertNotEqualsToAssertThat</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.2</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.JUnitAssertNotEqualsToAssertThat
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Greg Adams](greg@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Patrick Way](pway99@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Patrick](patway99@gmail.com)
* [Tim te Beek](timtebeek@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.JUnitAssertNotEqualsToAssertThat)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
