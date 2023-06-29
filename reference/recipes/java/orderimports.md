# Order imports

**org.openrewrite.java.OrderImports**

_Group and order imports._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/OrderImports.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | removeUnused | *Optional*. Remove unnecessary imports. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|removeUnused|`false`|


{% tabs %}
{% tab title="660606438982.java" %}

###### Before
{% code title="660606438982.java" %}
```java
import java.util.List;
import java.util.ArrayList;
import java.util.regex.Pattern;
import java.util.Objects;
import java.util.Set;
import java.util.Map;
```
{% endcode %}

###### After
{% code title="660606438982.java" %}
```java
import java.util.*;
import java.util.regex.Pattern;
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- 660606438982.java
+++ 660606438982.java
@@ -1,2 +1,1 @@
-import java.util.List;
-import java.util.ArrayList;
+import java.util.*;
import java.util.regex.Pattern;
@@ -4,3 +3,0 @@
import java.util.ArrayList;
import java.util.regex.Pattern;
-import java.util.Objects;
-import java.util.Set;
-import java.util.Map;

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
    activeRecipe("org.openrewrite.java.OrderImports")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.OrderImports</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.OrderImports
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Greg Adams](greg@moderne.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut.wannheden@gmail.com)
* [Tracey Yoshima](tracey.yoshima@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.OrderImports)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
