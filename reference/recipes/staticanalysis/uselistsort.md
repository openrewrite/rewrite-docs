# Replace invocations of `Collections#sort(List, Comparator)` with `List#sort(Comparator)`

**org.openrewrite.staticanalysis.UseListSort**

_The `java.util.Collections#sort(..)` implementation defers to the `java.util.List#sort(Comparator)`, replaced it with the `java.util.List#sort(Comparator)` implementation for better readability._

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/UseListSort.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.3

## Example


{% tabs %}
{% tab title="T.java" %}

###### Before
{% code title="T.java" %}
```java
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Collections;

class T {
    public void sortUsersById(List<String> names) {
        Collections.sort(names);
        Collections.sort(names, Comparator.naturalOrder());
    }
}
```
{% endcode %}

###### After
{% code title="T.java" %}
```java
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

class T {
    public void sortUsersById(List<String> names) {
        names.sort(null);
        names.sort(Comparator.naturalOrder());
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- T.java
+++ T.java
@@ -4,1 +4,0 @@
import java.util.Comparator;
import java.util.List;
-import java.util.Collections;

@@ -8,2 +7,2 @@
class T {
    public void sortUsersById(List<String> names) {
-       Collections.sort(names);
-       Collections.sort(names, Comparator.naturalOrder());
+       names.sort(null);
+       names.sort(Comparator.naturalOrder());
    }
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
    activeRecipe("org.openrewrite.staticanalysis.UseListSort")
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
            <recipe>org.openrewrite.staticanalysis.UseListSort</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.UseListSort
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Knut Wannheden](mailto:knut@moderne.io)
* [Patrick](mailto:patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.UseListSort)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
