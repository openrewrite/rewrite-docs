# Add imports for fully qualified references to types

**org.openrewrite.java.ShortenFullyQualifiedTypeReferences**

_Any fully qualified references to Java types will be replaced with corresponding simple names and import statements, provided that it doesn't result in any conflicts with other imports or types declared in the local compilation unit._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ShortenFullyQualifiedTypeReferences.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Example


{% tabs %}
{% tab title="T.java" %}

###### Before
{% code title="T.java" %}
```java
import java.util.List;

class T {
    java.util.List<String> list;
}
```
{% endcode %}

###### After
{% code title="T.java" %}
```java
import java.util.List;

class T {
    List<String> list;
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- T.java
+++ T.java
@@ -4,1 +4,1 @@

class T {
-   java.util.List<String> list;
+   List<String> list;
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.ShortenFullyQualifiedTypeReferences")
}

repositories {
    mavenCentral()
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
            <recipe>org.openrewrite.java.ShortenFullyQualifiedTypeReferences</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.ShortenFullyQualifiedTypeReferences
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Knut Wannheden](knut@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.ShortenFullyQualifiedTypeReferences)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
