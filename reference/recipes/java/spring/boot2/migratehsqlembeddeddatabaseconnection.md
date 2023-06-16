# Migrate deprecated Spring-Boot `EmbeddedDatabaseConnection.HSQL`

**org.openrewrite.java.spring.boot2.MigrateHsqlEmbeddedDatabaseConnection**

_Spring-Boot `EmbeddedDatabaseConnection.HSQL` was deprecated in favor of `EmbeddedDatabaseConnection.HSQLDB` in 2.4._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/MigrateHsqlEmbeddedDatabaseConnection.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;

class A {
    void method() {
        EmbeddedDatabaseConnection edbc = EmbeddedDatabaseConnection.HSQL;
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;

class A {
    void method() {
        EmbeddedDatabaseConnection edbc = EmbeddedDatabaseConnection.HSQLDB;
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
@@ -5,1 +5,1 @@
-        EmbeddedDatabaseConnection edbc = EmbeddedDatabaseConnection.HSQL;
+        EmbeddedDatabaseConnection edbc = EmbeddedDatabaseConnection.HSQLDB;
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateHsqlEmbeddedDatabaseConnection")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
            <recipe>org.openrewrite.java.spring.boot2.MigrateHsqlEmbeddedDatabaseConnection</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateHsqlEmbeddedDatabaseConnection
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick](patway99@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.MigrateHsqlEmbeddedDatabaseConnection)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
