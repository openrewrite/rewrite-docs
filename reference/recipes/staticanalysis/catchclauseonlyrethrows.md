# Catch clause should do more than just rethrow

**org.openrewrite.staticanalysis.CatchClauseOnlyRethrows**

_A `catch` clause that only rethrows the caught exception is unnecessary. Letting the exception bubble up as normal achieves the same result with less code._

### Tags

* RSPEC-2737

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/CatchClauseOnlyRethrows.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1

## Example


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
import java.io.FileReader;
import java.io.IOException;

class A {
    void foo() throws IOException {
        try {
            new FileReader("").read();
        } catch (IOException e) {
            throw e;
        }
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
import java.io.FileReader;
import java.io.IOException;

class A {
    void foo() throws IOException {
        new FileReader("").read();
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- A.java
+++ A.java
@@ -6,5 +6,1 @@
-        try {
            new FileReader("").read();
        } catch (IOException e) {
            throw e;
        }
+        new FileReader("").read();
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
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.CatchClauseOnlyRethrows")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.CatchClauseOnlyRethrows</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.CatchClauseOnlyRethrows
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.staticanalysis.CatchClauseOnlyRethrows)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
