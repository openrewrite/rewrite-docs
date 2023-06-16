# JUnit TestName @Rule to JUnit Jupiter TestInfo

**org.openrewrite.java.testing.junit5.TestRuleToTestInfo**

_Replace usages of JUnit 4's `@Rule TestName` with JUnit 5's TestInfo._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/TestRuleToTestInfo.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.1

## Example


{% tabs %}
{% tab title="SomeTest.java" %}

###### Before
{% code title="SomeTest.java" %}
```java
import org.junit.Rule;
import org.junit.rules.TestName;

public class SomeTest {
    @Rule
    public TestName name = new TestName();
    protected String randomName() {
        return name.getMethodName();
    }

    private static class SomeInnerClass {
    }
}
```
{% endcode %}

###### After
{% code title="SomeTest.java" %}
```java
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestInfo;

import java.lang.reflect.Method;
import java.util.Optional;

public class SomeTest {
    
    public String name;
    protected String randomName() {
        return name;
    }

    private static class SomeInnerClass {
    }

    @BeforeEach
    public void setup(TestInfo testInfo) {
        Optional<Method> testMethod = testInfo.getTestMethod();
        if (testMethod.isPresent()) {
            this.name = testMethod.get().getName();
        }
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- SomeTest.java
+++ SomeTest.java
@@ -1,2 +1,2 @@
-import org.junit.Rule;
import org.junit.rules.TestName;
+import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestInfo;
@@ -4,0 +4,3 @@
+import java.lang.reflect.Method;
import java.util.Optional;

@@ -5,2 +8,2 @@
-    @Rule
    public TestName name = new TestName();
+    
    public String name;
@@ -8,1 +11,1 @@
-        return name.getMethodName();
+        return name;
@@ -13,0 +16,8 @@
+
    @BeforeEach
    public void setup(TestInfo testInfo) {
        Optional<Method> testMethod = testInfo.getTestMethod();
        if (testMethod.isPresent()) {
            this.name = testMethod.get().getName();
        }
    }
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
    activeRecipe("org.openrewrite.java.testing.junit5.TestRuleToTestInfo")
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
            <recipe>org.openrewrite.java.testing.junit5.TestRuleToTestInfo</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.TestRuleToTestInfo
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick](patway99@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut@moderne.io)
* [Scott Jungling](scott.jungling@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.junit5.TestRuleToTestInfo)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
