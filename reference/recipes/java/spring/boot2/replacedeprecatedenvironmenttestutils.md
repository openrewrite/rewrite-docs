# Replace `EnvironmentTestUtils` with `TestPropertyValues`

**org.openrewrite.java.spring.boot2.ReplaceDeprecatedEnvironmentTestUtils**

_Replaces any references to the deprecated `EnvironmentTestUtils` with `TestPropertyValues` and the appropriate functionality._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/ReplaceDeprecatedEnvironmentTestUtils.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="com/mycompany/MyClass.java" %}

###### Before
{% code title="com/mycompany/MyClass.java" %}
```java
package com.mycompany;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import static org.springframework.boot.test.util.EnvironmentTestUtils.addEnvironment;

public class MyClass {
    public void myMethod() {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
        String pair = "pair";
        addEnvironment(context, pair);
    }
}
```
{% endcode %}

###### After
{% code title="com/mycompany/MyClass.java" %}
```java
package com.mycompany;

import org.springframework.boot.test.util.TestPropertyValues;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MyClass {
    public void myMethod() {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
        String pair = "pair";
        TestPropertyValues.of(pair).applyTo(context);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- com/mycompany/MyClass.java
+++ com/mycompany/MyClass.java
@@ -3,0 +3,1 @@
+import org.springframework.boot.test.util.TestPropertyValues;
@@ -4,1 +5,0 @@
-import static org.springframework.boot.test.util.EnvironmentTestUtils.addEnvironment;
@@ -10,1 +10,1 @@
-        addEnvironment(context, pair);
+        TestPropertyValues.of(pair).applyTo(context);
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.ReplaceDeprecatedEnvironmentTestUtils")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
            <recipe>org.openrewrite.java.spring.boot2.ReplaceDeprecatedEnvironmentTestUtils</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.ReplaceDeprecatedEnvironmentTestUtils
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Kevin McCarpenter](kevin@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Aaron Gershman](aegershman@gmail.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Patrick](patway99@gmail.com)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.ReplaceDeprecatedEnvironmentTestUtils)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
