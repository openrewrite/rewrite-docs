# Remove unused local variables

**org.openrewrite.staticanalysis.RemoveUnusedLocalVariables**

_If a local variable is declared but not used, it is dead code and should be removed._

### Tags

* RSPEC-1481

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RemoveUnusedLocalVariables.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.4

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String[]` | ignoreVariablesNamed | *Optional*. An array of variable identifier names for local variables to ignore, even if the local variable is unused. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|ignoreVariablesNamed|`J.NewArray(padding=org.openrewrite.java.tree.J$NewArray$Padding@464db881, id=3eb308f0-25e7-467f-b2b5-36e427fce27d, prefix=Space(comments=<0 comments>, whitespace=''), markers=Markers(id=b5e7edb4-5453-424e-901f-970a70cfed33, markers=[]), typeExpression=String, dimensions=[[0]], initializer=null, type=java.lang.String[])`|


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
    static int method(int x) {
        int a = 0;
        int b = 0;
        return a;
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    static int method(int x) {
        int a = 0;
        return a;
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
@@ -4,1 +4,0 @@
    static int method(int x) {
        int a = 0;
-       int b = 0;
        return a;
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
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.RemoveUnusedLocalVariables")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.RemoveUnusedLocalVariables</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.RemoveUnusedLocalVariables
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)
* [Shannon Pamperl](mailto:shanman190@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.RemoveUnusedLocalVariables)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
