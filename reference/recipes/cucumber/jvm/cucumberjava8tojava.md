# Cucumber-Java8 migration to Cucumber-Java

**org.openrewrite.cucumber.jvm.CucumberJava8ToJava**

_Migrates Cucumber-Java8 step definitions and LambdaGlue hooks to Cucumber-Java annotated methods._

### Tags

* cucumber
* testing

## Source

[GitHub](https://github.com/openrewrite/rewrite-cucumber-jvm/blob/main/src/main/resources/META-INF/rewrite/cucumber.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-cucumber-jvm/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-cucumber-jvm/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cucumber-jvm
* version: 1.0.4

## Examples
##### Example 1


{% tabs %}
{% tab title="com/example/app/CucumberJava8Definitions.java" %}

###### Before
{% code title="com/example/app/CucumberJava8Definitions.java" %}
```java
package com.example.app;

import io.cucumber.java8.En;
import io.cucumber.java8.Scenario;
import io.cucumber.java8.Status;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CucumberJava8Definitions implements En {

    private int a;

    public CucumberJava8Definitions() {
        Before(() -> {
            a = 0;
        });
        When("I add {int}", (Integer b) -> {
            a += b;
        });
        Then("I expect {int}", (Integer c) -> assertEquals(c, a));

        After((Scenario scn) -> {
            if (scn.getStatus() == Status.FAILED) {
                scn.log("failed");
            }
        });

    }

}
```
{% endcode %}

###### After
{% code title="com/example/app/CucumberJava8Definitions.java" %}
```java
package com.example.app;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.Scenario;
import io.cucumber.java.Status;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CucumberJava8Definitions {

    private int a;

    @Before
    public void before() {
        a = 0;
    }

    @After
    public void after(io.cucumber.java.Scenario scn) {
        if (scn.getStatus() == Status.FAILED) {
            scn.log("failed");
        }
    }

    @When("I add {int}")
    public void i_add_int(Integer b) {
        a += b;
    }

    @Then("I expect {int}")
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
--- com/example/app/CucumberJava8Definitions.java
+++ com/example/app/CucumberJava8Definitions.java
@@ -3,3 +3,6 @@
package com.example.app;

-import io.cucumber.java8.En;
-import io.cucumber.java8.Scenario;
-import io.cucumber.java8.Status;
+import io.cucumber.java.After;
+import io.cucumber.java.Before;
+import io.cucumber.java.en.Then;
+import io.cucumber.java.en.When;
+import io.cucumber.java.Scenario;
+import io.cucumber.java.Status;

@@ -9,1 +12,1 @@
import static org.junit.jupiter.api.Assertions.assertEquals;

-public class CucumberJava8Definitions implements En {
+public class CucumberJava8Definitions {

@@ -13,8 +16,4 @@
    private int a;

-   public CucumberJava8Definitions() {
-       Before(() -> {
-           a = 0;
-       });
-       When("I add {int}", (Integer b) -> {
-           a += b;
-       });
-       Then("I expect {int}", (Integer c) -> assertEquals(c, a));
+   @Before
+   public void before() {
+       a = 0;
+   }

@@ -22,5 +21,6 @@
        Then("I expect {int}", (Integer c) -> assertEquals(c, a));

-       After((Scenario scn) -> {
-           if (scn.getStatus() == Status.FAILED) {
-               scn.log("failed");
-           }
-       });
+   @After
+   public void after(io.cucumber.java.Scenario scn) {
+       if (scn.getStatus() == Status.FAILED) {
+           scn.log("failed");
+       }
+   }

@@ -28,0 +28,3 @@
        });

+   @When("I add {int}")
+   public void i_add_int(Integer b) {
+       a += b;
    }
@@ -30,0 +33,5 @@
    }

+   @Then("I expect {int}")
+   public void i_expect_int(Integer c) {
+       assertEquals(c, a);
+   }
+
}
@@ -31,0 +39,1 @@

}
+
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="com/example/app/CucumberJava8Definitions.java" %}

###### Before
{% code title="com/example/app/CucumberJava8Definitions.java" %}
```java
package com.example.app;

import io.cucumber.java8.En;
import io.cucumber.java8.Scenario;
import io.cucumber.java8.Status;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CucumberJava8Definitions implements En {

    private int a;

    public CucumberJava8Definitions() {
        Before(() -> {
            a = 0;
        });
        When("I add {int}", (Integer b) -> {
            a += b;
        });
        Then("I expect {int}", (Integer c) -> assertEquals(c, a));

        After((Scenario scn) -> {
            if (scn.getStatus() == Status.FAILED) {
                scn.log("failed");
            }
        });

    }

}
```
{% endcode %}

###### After
{% code title="com/example/app/CucumberJava8Definitions.java" %}
```java
package com.example.app;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.Scenario;
import io.cucumber.java.Status;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CucumberJava8Definitions {

    private int a;

    @Before
    public void before() {
        a = 0;
    }

    @After
    public void after(io.cucumber.java.Scenario scn) {
        if (scn.getStatus() == Status.FAILED) {
            scn.log("failed");
        }
    }

    @When("I add {int}")
    public void i_add_int(Integer b) {
        a += b;
    }

    @Then("I expect {int}")
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
--- com/example/app/CucumberJava8Definitions.java
+++ com/example/app/CucumberJava8Definitions.java
@@ -3,3 +3,6 @@
package com.example.app;

-import io.cucumber.java8.En;
-import io.cucumber.java8.Scenario;
-import io.cucumber.java8.Status;
+import io.cucumber.java.After;
+import io.cucumber.java.Before;
+import io.cucumber.java.en.Then;
+import io.cucumber.java.en.When;
+import io.cucumber.java.Scenario;
+import io.cucumber.java.Status;

@@ -9,1 +12,1 @@
import static org.junit.jupiter.api.Assertions.assertEquals;

-public class CucumberJava8Definitions implements En {
+public class CucumberJava8Definitions {

@@ -13,8 +16,4 @@
    private int a;

-   public CucumberJava8Definitions() {
-       Before(() -> {
-           a = 0;
-       });
-       When("I add {int}", (Integer b) -> {
-           a += b;
-       });
-       Then("I expect {int}", (Integer c) -> assertEquals(c, a));
+   @Before
+   public void before() {
+       a = 0;
+   }

@@ -22,5 +21,6 @@
        Then("I expect {int}", (Integer c) -> assertEquals(c, a));

-       After((Scenario scn) -> {
-           if (scn.getStatus() == Status.FAILED) {
-               scn.log("failed");
-           }
-       });
+   @After
+   public void after(io.cucumber.java.Scenario scn) {
+       if (scn.getStatus() == Status.FAILED) {
+           scn.log("failed");
+       }
+   }

@@ -28,0 +28,3 @@
        });

+   @When("I add {int}")
+   public void i_add_int(Integer b) {
+       a += b;
    }
@@ -30,0 +33,5 @@
    }

+   @Then("I expect {int}")
+   public void i_expect_int(Integer c) {
+       assertEquals(c, a);
+   }
+
}
@@ -31,0 +39,1 @@

}
+
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
    id("org.openrewrite.rewrite") version("6.1.18")
}

rewrite {
    activeRecipe("org.openrewrite.cucumber.jvm.CucumberJava8ToJava")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.cucumber.jvm.CucumberJava8ToJava</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.cucumber.jvm.CucumberJava8ToJava
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace Cucumber-Java8 hook definition with Cucumber-Java](../../cucumber/jvm/cucumberjava8hookdefinitiontocucumberjava.md)
* [Replace Cucumber-Java8 step definitions with Cucumber-Java](../../cucumber/jvm/cucumberjava8stepdefinitiontocucumberjava.md)
* [Change Maven dependency groupId, artifactId and/or the version](../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `io.cucumber`
  * oldArtifactId: `cucumber-java8`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-java`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `io.cucumber.java8`
  * newPackageName: `io.cucumber.java`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cucumber.jvm.CucumberJava8ToJava
displayName: Cucumber-Java8 migration to Cucumber-Java
description: Migrates Cucumber-Java8 step definitions and LambdaGlue hooks to Cucumber-Java annotated methods.
tags:
  - cucumber
  - testing
recipeList:
  - org.openrewrite.cucumber.jvm.CucumberJava8HookDefinitionToCucumberJava
  - org.openrewrite.cucumber.jvm.CucumberJava8StepDefinitionToCucumberJava
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: io.cucumber
      oldArtifactId: cucumber-java8
      newGroupId: io.cucumber
      newArtifactId: cucumber-java
  - org.openrewrite.java.ChangePackage:
      oldPackageName: io.cucumber.java8
      newPackageName: io.cucumber.java

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tim te Beek](mailto:tim@moderne.io)
* renovate[bot]


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.cucumber.jvm.CucumberJava8ToJava)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
