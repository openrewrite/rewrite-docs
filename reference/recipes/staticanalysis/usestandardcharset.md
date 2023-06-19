# Use `StandardCharset` constants

**org.openrewrite.staticanalysis.UseStandardCharset**

_Replaces `Charset.forName(java.lang.String)` with the equivalent `StandardCharset` constant._

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/UseStandardCharset.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.nio.charset.Charset;

class Test {
    Charset US_ASCII = Charset.forName("US-ASCII");
    Charset ISO_8859_1 = Charset.forName("ISO-8859-1");
    Charset UTF_8 = Charset.forName("UTF-8");
    Charset UTF_16 = Charset.forName("UTF-16");
    Charset UTF_16BE = Charset.forName("UTF-16BE");
    Charset UTF_16LE = Charset.forName("UTF-16LE");
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

class Test {
    Charset US_ASCII = StandardCharsets.US_ASCII;
    Charset ISO_8859_1 = StandardCharsets.ISO_8859_1;
    Charset UTF_8 = StandardCharsets.UTF_8;
    Charset UTF_16 = StandardCharsets.UTF_16;
    Charset UTF_16BE = StandardCharsets.UTF_16BE;
    Charset UTF_16LE = StandardCharsets.UTF_16LE;
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -2,0 +2,1 @@
import java.nio.charset.Charset;
+import java.nio.charset.StandardCharsets;

@@ -4,6 +5,6 @@

class Test {
-   Charset US_ASCII = Charset.forName("US-ASCII");
-   Charset ISO_8859_1 = Charset.forName("ISO-8859-1");
-   Charset UTF_8 = Charset.forName("UTF-8");
-   Charset UTF_16 = Charset.forName("UTF-16");
-   Charset UTF_16BE = Charset.forName("UTF-16BE");
-   Charset UTF_16LE = Charset.forName("UTF-16LE");
+   Charset US_ASCII = StandardCharsets.US_ASCII;
+   Charset ISO_8859_1 = StandardCharsets.ISO_8859_1;
+   Charset UTF_8 = StandardCharsets.UTF_8;
+   Charset UTF_16 = StandardCharsets.UTF_16;
+   Charset UTF_16BE = StandardCharsets.UTF_16BE;
+   Charset UTF_16LE = StandardCharsets.UTF_16LE;
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
    activeRecipe("org.openrewrite.staticanalysis.UseStandardCharset")
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
            <recipe>org.openrewrite.staticanalysis.UseStandardCharset</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.UseStandardCharset
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.UseStandardCharset)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
