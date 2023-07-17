# Replace @Cucumber with @Suite

**org.openrewrite.cucumber.jvm.CucumberAnnotationToSuite**

_Replace @Cucumber with @Suite and @SelectClasspathResource("cucumber/annotated/class/package")._

## Source

[GitHub](https://github.com/openrewrite/rewrite-cucumber-jvm/blob/main/src/main/java/org/openrewrite/cucumber/jvm/CucumberAnnotationToSuite.java), [Issue Tracker](https://github.com/openrewrite/rewrite-cucumber-jvm/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-cucumber-jvm/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cucumber-jvm
* version: 1.0.4

## Example


{% tabs %}
{% tab title="com/example/app/CucumberJava8Definitions.java" %}

###### Before
{% code title="com/example/app/CucumberJava8Definitions.java" %}
```java
package com.example.app;

import io.cucumber.junit.platform.engine.Cucumber;

@Cucumber
public class CucumberJava8Definitions {
}
```
{% endcode %}

###### After
{% code title="com/example/app/CucumberJava8Definitions.java" %}
```java
package com.example.app;

import org.junit.platform.suite.api.SelectClasspathResource;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectClasspathResource("com/example/app")
public class CucumberJava8Definitions {
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- com/example/app/CucumberJava8Definitions.java
+++ com/example/app/CucumberJava8Definitions.java
@@ -3,1 +3,2 @@
package com.example.app;

-import io.cucumber.junit.platform.engine.Cucumber;
+import org.junit.platform.suite.api.SelectClasspathResource;
+import org.junit.platform.suite.api.Suite;

@@ -5,1 +6,2 @@
import io.cucumber.junit.platform.engine.Cucumber;

-@Cucumber
+@Suite
+@SelectClasspathResource("com/example/app")
public class CucumberJava8Definitions {
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
    activeRecipe("org.openrewrite.cucumber.jvm.CucumberAnnotationToSuite")
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
            <recipe>org.openrewrite.cucumber.jvm.CucumberAnnotationToSuite</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.cucumber.jvm.CucumberAnnotationToSuite
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tim te Beek](mailto:timtebeek@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.cucumber.jvm.CucumberAnnotationToSuite)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
