# Structural equality tests should use "==" or "!="

**org.openrewrite.kotlin.cleanup.EqualsMethodUsage**

_In Kotlin, `==` means structural equality and `!=` structural inequality and both map to the left-side term’s `equals()` function. It is, therefore, redundant to call `equals()` as a function. Also, `==` and `!=` are more general than `equals()` and `!equals()` because it allows either of both operands to be null.
Developers using `equals()` instead of `==` or `!=` is often the result of adapting styles from other languages like Java, where `==` means reference equality and `!=` means reference inequality.
The `==` and `!=` operators are a more concise and elegant way to test structural equality than calling a function._

### Tags

* RSPEC-6519

## Source

[GitHub](https://github.com/openrewrite/rewrite-kotlin/blob/main/src/main/java/org/openrewrite/kotlin/cleanup/EqualsMethodUsage.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kotlin/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-kotlin/1.1.9/jar)

* groupId: org.openrewrite
* artifactId: rewrite-kotlin
* version: 1.1.9

## Example


{% tabs %}
{% tab title="kotlin" %}

###### Before
{% code %}
```kotlin
fun isSame(obj1 : String, obj2: String) : Boolean {
    val isSame = obj1.equals(obj2)
}
```
{% endcode %}

###### After
{% code %}
```kotlin
fun isSame(obj1 : String, obj2: String) : Boolean {
    val isSame = obj1 == obj2
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -2,1 +2,1 @@
fun isSame(obj1 : String, obj2: String) : Boolean {
-   val isSame = obj1.equals(obj2)
+   val isSame = obj1 == obj2
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
    id("org.openrewrite.rewrite") version("6.1.18")
}

rewrite {
    activeRecipe("org.openrewrite.kotlin.cleanup.EqualsMethodUsage")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kotlin.cleanup.EqualsMethodUsage</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.kotlin.cleanup.EqualsMethodUsage
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](mailto:kun@moderne.io)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kotlin.cleanup.EqualsMethodUsage)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
