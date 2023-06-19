# Set charset encoding explicitly when calling `String#getBytes`

**org.openrewrite.staticanalysis.ExplicitCharsetOnStringGetBytes**

_This makes the behavior of the code platform neutral. It will not override any existing explicit encodings, even if they don't match the default encoding option._

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ExplicitCharsetOnStringGetBytes.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | encoding | *Optional*. The default encoding to supply to the `getBytes` call |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|encoding|`null`|


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
public class Test {
    void test() {
        String s = "hi";
        s.getBytes();
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.nio.charset.StandardCharsets;

public class Test {
    void test() {
        String s = "hi";
        s.getBytes(StandardCharsets.UTF_8);
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
@@ -1,0 +1,2 @@
+import java.nio.charset.StandardCharsets;
+
public class Test {
@@ -4,1 +6,1 @@
    void test() {
        String s = "hi";
-       s.getBytes();
+       s.getBytes(StandardCharsets.UTF_8);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.ExplicitCharsetOnStringGetBytes")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.1")
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
            <recipe>org.openrewrite.staticanalysis.ExplicitCharsetOnStringGetBytes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.1</version>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.ExplicitCharsetOnStringGetBytes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ExplicitCharsetOnStringGetBytes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
