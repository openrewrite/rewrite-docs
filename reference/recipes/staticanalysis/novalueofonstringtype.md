# Unnecessary String#valueOf(..)

**org.openrewrite.staticanalysis.NoValueOfOnStringType**

_Replace unnecessary `String#valueOf(..)` method invocations with the argument directly. This occurs when the argument to `String#valueOf(arg)` is a string literal, such as `String.valueOf("example")`. Or, when the `String#valueOf(..)` invocation is used in a concatenation, such as `"example" + String.valueOf("example")`._

### Tags

* RSPEC-1153

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/NoValueOfOnStringType.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.3

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
    static void method(char[] data) {
        String str = String.valueOf("changeMe");
        str = String.valueOf(0);
        str = "changeMe" + String.valueOf(0);
        str = String.valueOf(data);
        str = "changeMe" + String.valueOf(data);
        str = String.valueOf(data, 0, 0);
        str = "doNotChangeMe" + String.valueOf(data, 0, 0);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    static void method(char[] data) {
        String str = "changeMe";
        str = String.valueOf(0);
        str = "changeMe" + 0;
        str = String.valueOf(data);
        str = "changeMe" + String.valueOf(data);
        str = String.valueOf(data, 0, 0);
        str = "doNotChangeMe" + String.valueOf(data, 0, 0);
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
@@ -3,1 +3,1 @@
class Test {
    static void method(char[] data) {
-       String str = String.valueOf("changeMe");
+       String str = "changeMe";
        str = String.valueOf(0);
@@ -5,1 +5,1 @@
        String str = String.valueOf("changeMe");
        str = String.valueOf(0);
-       str = "changeMe" + String.valueOf(0);
+       str = "changeMe" + 0;
        str = String.valueOf(data);
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
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.NoValueOfOnStringType")
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
        <version>5.3.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.NoValueOfOnStringType</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.NoValueOfOnStringType
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* Tyler Van Gorder
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.NoValueOfOnStringType)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
