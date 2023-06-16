# Prefer `new LinkedHashMap<>()`

**org.openrewrite.java.migrate.guava.NoGuavaMapsNewLinkedHashMap**

_Prefer the Java standard library over third-party usage of Guava in simple cases like this._

### Tags

* guava

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/guava/NoGuavaMapsNewLinkedHashMap.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import com.google.common.collect.*;

import java.util.Map;

class Test {
    Map<Integer, Integer> cardinalsWorldSeries = Maps.newLinkedHashMap();
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.LinkedHashMap;
import java.util.Map;

class Test {
    Map<Integer, Integer> cardinalsWorldSeries = new LinkedHashMap<>();
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -1,2 +1,1 @@
-import com.google.common.collect.*;

+import java.util.LinkedHashMap;
@@ -6,1 +5,1 @@
-    Map<Integer, Integer> cardinalsWorldSeries = Maps.newLinkedHashMap();
+    Map<Integer, Integer> cardinalsWorldSeries = new LinkedHashMap<>();
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.guava.NoGuavaMapsNewLinkedHashMap")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.1")
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
            <recipe>org.openrewrite.java.migrate.guava.NoGuavaMapsNewLinkedHashMap</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.guava.NoGuavaMapsNewLinkedHashMap
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.guava.NoGuavaMapsNewLinkedHashMap)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
