# Use `DiskSpaceHealthIndicator(File, DataSize)`

**org.openrewrite.java.spring.boot2.MigrateDiskSpaceHealthIndicatorConstructor**

_`DiskSpaceHealthIndicator(File, long)` was deprecated in Spring Data 2.1 for removal in 2.2._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/MigrateDiskSpaceHealthIndicatorConstructor.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.7

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.springframework.boot.actuate.system.DiskSpaceHealthIndicator;

class Test {
    void method() {
        DiskSpaceHealthIndicator literal = new DiskSpaceHealthIndicator(null, 1L);
        DiskSpaceHealthIndicator methodInvocation = new DiskSpaceHealthIndicator(null, value());
        Long arg = 10L;
        DiskSpaceHealthIndicator variable = new DiskSpaceHealthIndicator(null, arg);
    }
    long value() {
        return 10L;
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.springframework.boot.actuate.system.DiskSpaceHealthIndicator;
import org.springframework.util.unit.DataSize;

class Test {
    void method() {
        DiskSpaceHealthIndicator literal = new DiskSpaceHealthIndicator(null, DataSize.ofBytes(1L));
        DiskSpaceHealthIndicator methodInvocation = new DiskSpaceHealthIndicator(null, DataSize.ofBytes(value()));
        Long arg = 10L;
        DiskSpaceHealthIndicator variable = new DiskSpaceHealthIndicator(null, DataSize.ofBytes(arg));
    }
    long value() {
        return 10L;
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
import org.springframework.boot.actuate.system.DiskSpaceHealthIndicator;
+import org.springframework.util.unit.DataSize;

@@ -5,2 +6,2 @@
class Test {
    void method() {
-       DiskSpaceHealthIndicator literal = new DiskSpaceHealthIndicator(null, 1L);
-       DiskSpaceHealthIndicator methodInvocation = new DiskSpaceHealthIndicator(null, value());
+       DiskSpaceHealthIndicator literal = new DiskSpaceHealthIndicator(null, DataSize.ofBytes(1L));
+       DiskSpaceHealthIndicator methodInvocation = new DiskSpaceHealthIndicator(null, DataSize.ofBytes(value()));
        Long arg = 10L;
@@ -8,1 +9,1 @@
        DiskSpaceHealthIndicator methodInvocation = new DiskSpaceHealthIndicator(null, value());
        Long arg = 10L;
-       DiskSpaceHealthIndicator variable = new DiskSpaceHealthIndicator(null, arg);
+       DiskSpaceHealthIndicator variable = new DiskSpaceHealthIndicator(null, DataSize.ofBytes(arg));
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.2.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateDiskSpaceHealthIndicatorConstructor")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.7")
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
        <version>5.4.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.MigrateDiskSpaceHealthIndicatorConstructor</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.7</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateDiskSpaceHealthIndicatorConstructor
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.MigrateDiskSpaceHealthIndicatorConstructor)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
