# Add missing `@Override` to overriding and implementing methods

**org.openrewrite.staticanalysis.MissingOverrideAnnotation**

_Adds `@Override` to methods overriding superclass methods or implementing interface methods. Annotating methods improves readability by showing the author's intent to override. Additionally, when annotated, the compiler will emit an error when a signature of the overridden method does not match the superclass method._

### Tags

* RSPEC-1161

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/MissingOverrideAnnotation.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | ignoreAnonymousClassMethods | *Optional*. When enabled, ignore missing annotations on methods which override methods when the class definition is within an anonymous class. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|ignoreAnonymousClassMethods|`false`|


{% tabs %}
{% tab title="com/example/Test.java" %}

###### Before
{% code title="com/example/Test.java" %}
```java
package com.example;

class Test {
    public void method() {
        //noinspection all
        Runnable t = new Runnable() {
            public void run() {
            }
        };
    }
}
```
{% endcode %}

###### After
{% code title="com/example/Test.java" %}
```java
package com.example;

class Test {
    public void method() {
        //noinspection all
        Runnable t = new Runnable() {
            @Override
            public void run() {
            }
        };
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- com/example/Test.java
+++ com/example/Test.java
@@ -7,0 +7,1 @@
        //noinspection all
        Runnable t = new Runnable() {
+           @Override
            public void run() {
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
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.MissingOverrideAnnotation")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.MissingOverrideAnnotation</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.MissingOverrideAnnotation
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* Tyler Van Gorder
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.MissingOverrideAnnotation)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
