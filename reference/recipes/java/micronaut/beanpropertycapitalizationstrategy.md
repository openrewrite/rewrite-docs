# De-capitalize `BeanIntrospection` `getProperty(..)` and `getRequiredProperty(..)` name arguments

**org.openrewrite.java.micronaut.BeanPropertyCapitalizationStrategy**

_As of Micronaut 3.x property names for getters like `getXForwarded()` are de-capitalized from `XForwarded` to `xForwarded`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/BeanPropertyCapitalizationStrategy.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.1.0

## Example


{% tabs %}
{% tab title="a/b/T.java" %}

###### Before
{% code title="a/b/T.java" %}
```java
package a.b;
import io.micronaut.core.beans.BeanIntrospection;
import io.micronaut.core.beans.BeanProperty;
import org.checkerframework.checker.units.qual.C;

class T {
    void p() {
        BeanIntrospection<C> introspection = BeanIntrospection.getIntrospection(C.class);
        BeanProperty<C, String> p1 = introspection.getRequiredProperty("CName", String.class);
        Optional<BeanProperty<C, String>> p2 = introspection.getProperty("CName", String.class);
        Optional<BeanProperty<C, Object>> p3 = introspection.getProperty("CName");
    }
}
```
{% endcode %}

###### After
{% code title="a/b/T.java" %}
```java
package a.b;
import io.micronaut.core.beans.BeanIntrospection;
import io.micronaut.core.beans.BeanProperty;
import org.checkerframework.checker.units.qual.C;

class T {
    void p() {
        BeanIntrospection<C> introspection = BeanIntrospection.getIntrospection(C.class);
        BeanProperty<C, String> p1 = introspection.getRequiredProperty("cName", String.class);
        Optional<BeanProperty<C, String>> p2 = introspection.getProperty("cName", String.class);
        Optional<BeanProperty<C, Object>> p3 = introspection.getProperty("cName");
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- a/b/T.java
+++ a/b/T.java
@@ -9,3 +9,3 @@
    void p() {
        BeanIntrospection<C> introspection = BeanIntrospection.getIntrospection(C.class);
-       BeanProperty<C, String> p1 = introspection.getRequiredProperty("CName", String.class);
-       Optional<BeanProperty<C, String>> p2 = introspection.getProperty("CName", String.class);
-       Optional<BeanProperty<C, Object>> p3 = introspection.getProperty("CName");
+       BeanProperty<C, String> p1 = introspection.getRequiredProperty("cName", String.class);
+       Optional<BeanProperty<C, String>> p2 = introspection.getProperty("cName", String.class);
+       Optional<BeanProperty<C, Object>> p3 = introspection.getProperty("cName");
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.1.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.18")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.BeanPropertyCapitalizationStrategy")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.1.0")
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
            <recipe>org.openrewrite.java.micronaut.BeanPropertyCapitalizationStrategy</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.1.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.micronaut.BeanPropertyCapitalizationStrategy
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.BeanPropertyCapitalizationStrategy)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
