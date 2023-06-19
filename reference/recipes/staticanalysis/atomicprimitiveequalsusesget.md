# Atomic Boolean, Integer, and Long equality checks compare their values

**org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet**

_`AtomicBoolean#equals(Object)`, `AtomicInteger#equals(Object)` and `AtomicLong#equals(Object)` are only equal to their instance. This recipe converts `a.equals(b)` to `a.get() == b.get()`._

### Tags

* RSPEC-2204

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/AtomicPrimitiveEqualsUsesGet.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1

## Example


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.AtomicBoolean;

class A {
    boolean areEqual(AtomicInteger i1, AtomicInteger i2) {
        return i1.equals(i2);
    }
    boolean areEqual(AtomicLong l1, AtomicLong l2) {
        return l1.equals(l2);
    }
    boolean areEqual(AtomicBoolean b1, AtomicBoolean b2) {
        return b1.equals(b2);
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.AtomicBoolean;

class A {
    boolean areEqual(AtomicInteger i1, AtomicInteger i2) {
        return i1.get() == i2.get();
    }
    boolean areEqual(AtomicLong l1, AtomicLong l2) {
        return l1.get() == l2.get();
    }
    boolean areEqual(AtomicBoolean b1, AtomicBoolean b2) {
        return b1.get() == b2.get();
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
@@ -7,1 +7,1 @@
class A {
    boolean areEqual(AtomicInteger i1, AtomicInteger i2) {
-       return i1.equals(i2);
+       return i1.get() == i2.get();
    }
@@ -10,1 +10,1 @@
    }
    boolean areEqual(AtomicLong l1, AtomicLong l2) {
-       return l1.equals(l2);
+       return l1.get() == l2.get();
    }
@@ -13,1 +13,1 @@
    }
    boolean areEqual(AtomicBoolean b1, AtomicBoolean b2) {
-       return b1.equals(b2);
+       return b1.get() == b2.get();
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
    activeRecipe("org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet")
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
            <recipe>org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick Way](pway99@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
