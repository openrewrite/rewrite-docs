# Use `MultipartConfigFactory` with `DataSize` arguments

**org.openrewrite.java.spring.boot2.MigrateMultipartConfigFactory**

_Methods to set `DataSize` with primitive arguments were deprecated in 2.1 and removed in 2.2._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/MigrateMultipartConfigFactory.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.springframework.boot.web.servlet.MultipartConfigFactory;

class Test {
    void method() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
        factory.setMaxFileSize(1);
        factory.setMaxFileSize("1");
        factory.setMaxRequestSize(1);
        factory.setMaxRequestSize("1");
        factory.setFileSizeThreshold(1);
        factory.setFileSizeThreshold("1");
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.util.unit.DataSize;

class Test {
    void method() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
        factory.setMaxFileSize(DataSize.ofBytes(1));
        factory.setMaxFileSize(DataSize.parse("1"));
        factory.setMaxRequestSize(DataSize.ofBytes(1));
        factory.setMaxRequestSize(DataSize.parse("1"));
        factory.setFileSizeThreshold(DataSize.ofBytes(1));
        factory.setFileSizeThreshold(DataSize.parse("1"));
    }
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
import org.springframework.boot.web.servlet.MultipartConfigFactory;
+import org.springframework.util.unit.DataSize;

@@ -6,6 +7,6 @@
    void method() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
-       factory.setMaxFileSize(1);
-       factory.setMaxFileSize("1");
-       factory.setMaxRequestSize(1);
-       factory.setMaxRequestSize("1");
-       factory.setFileSizeThreshold(1);
-       factory.setFileSizeThreshold("1");
+       factory.setMaxFileSize(DataSize.ofBytes(1));
+       factory.setMaxFileSize(DataSize.parse("1"));
+       factory.setMaxRequestSize(DataSize.ofBytes(1));
+       factory.setMaxRequestSize(DataSize.parse("1"));
+       factory.setFileSizeThreshold(DataSize.ofBytes(1));
+       factory.setFileSizeThreshold(DataSize.parse("1"));
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.18")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateMultipartConfigFactory")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.5")
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
            <recipe>org.openrewrite.java.spring.boot2.MigrateMultipartConfigFactory</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateMultipartConfigFactory
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* Kun Li
* [Jonathan Schneider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.MigrateMultipartConfigFactory)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
