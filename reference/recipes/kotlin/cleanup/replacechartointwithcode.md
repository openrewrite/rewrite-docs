# Replace `Char#toInt()` with `Char#code`

**org.openrewrite.kotlin.cleanup.ReplaceCharToIntWithCode**

_Replace the usage of the deprecated `Char#toInt()` with `Char#code`. Please ensure that your Kotlin version is 1.5 or later to support the `Char#code` property. Note that the current implementation does not perform a Kotlin version check._

## Source

[GitHub](https://github.com/openrewrite/rewrite-kotlin/blob/main/src/main/java/org/openrewrite/kotlin/cleanup/ReplaceCharToIntWithCode.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kotlin/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-kotlin/1.1.9/jar)

* groupId: org.openrewrite
* artifactId: rewrite-kotlin
* version: 1.1.9

## Example


{% tabs %}
{% tab title="kotlin" %}

###### Before
{% code %}
```kotlin
fun decimalDigitalNumber(c : Char) : Int? {
    if (c in '0'..'9') {
        return c.toInt() - '0'.toInt()
    }
    return null
}
```
{% endcode %}

###### After
{% code %}
```kotlin
fun decimalDigitalNumber(c : Char) : Int? {
    if (c in '0'..'9') {
        return c.code - '0'.code
    }
    return null
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -3,1 +3,1 @@
fun decimalDigitalNumber(c : Char) : Int? {
    if (c in '0'..'9') {
-       return c.toInt() - '0'.toInt()
+       return c.code - '0'.code
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite:rewrite-kotlin:1.1.9` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("org.openrewrite.kotlin.cleanup.ReplaceCharToIntWithCode")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-kotlin:1.1.9")
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
            <recipe>org.openrewrite.kotlin.cleanup.ReplaceCharToIntWithCode</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-kotlin</artifactId>
            <version>1.1.9</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite:rewrite-kotlin:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.kotlin.cleanup.ReplaceCharToIntWithCode
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](mailto:kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kotlin.cleanup.ReplaceCharToIntWithCode)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
