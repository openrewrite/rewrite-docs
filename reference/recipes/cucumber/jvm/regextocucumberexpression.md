# Replace Cucumber-Java step definition regexes with Cucumber expressions

**org.openrewrite.cucumber.jvm.RegexToCucumberExpression**

_Strip regex prefix and suffix from step annotation expressions arguments where possible._

## Source

[GitHub](https://github.com/openrewrite/rewrite-cucumber-jvm/blob/main/src/main/java/org/openrewrite/cucumber/jvm/RegexToCucumberExpression.java), [Issue Tracker](https://github.com/openrewrite/rewrite-cucumber-jvm/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-cucumber-jvm/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cucumber-jvm
* version: 1.0.4

## Example


{% tabs %}
{% tab title="com/example/app/ExpressionDefinitions.java" %}

###### Before
{% code title="com/example/app/ExpressionDefinitions.java" %}
```java
package com.example.app;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ExpressionDefinitions {

    private int a;

    @Before
    public void before() {
        a = 0;
    }

    @Given("^five cukes$")
    public void five_cukes() {
        a = 5;
    }

    @Then("^I expect (\\d+)$")
    public void i_expect_int(Integer c) {
        assertEquals(c, a);
    }

}
```
{% endcode %}

###### After
{% code title="com/example/app/ExpressionDefinitions.java" %}
```java
package com.example.app;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ExpressionDefinitions {

    private int a;

    @Before
    public void before() {
        a = 0;
    }

    @Given("five cukes")
    public void five_cukes() {
        a = 5;
    }

    @Then("^I expect (\\d+)$")
    public void i_expect_int(Integer c) {
        assertEquals(c, a);
    }

}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- com/example/app/ExpressionDefinitions.java
+++ com/example/app/ExpressionDefinitions.java
@@ -18,1 +18,1 @@
    }

-   @Given("^five cukes$")
+   @Given("five cukes")
    public void five_cukes() {
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-cucumber-jvm:1.0.4` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("org.openrewrite.cucumber.jvm.RegexToCucumberExpression")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-cucumber-jvm:1.0.4")
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
        <version>5.3.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.cucumber.jvm.RegexToCucumberExpression</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-cucumber-jvm</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cucumber-jvm:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.cucumber.jvm.RegexToCucumberExpression
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tim te Beek](mailto:tim@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.cucumber.jvm.RegexToCucumberExpression)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
