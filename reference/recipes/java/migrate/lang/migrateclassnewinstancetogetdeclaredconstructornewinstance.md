# Use `Class#getDeclaredConstructor().newInstance()`

**org.openrewrite.java.migrate.lang.MigrateClassNewInstanceToGetDeclaredConstructorNewInstance**

_Use `Class#getDeclaredConstructor().newInstance()` instead of the deprecated `Class#newInstance()` in Java 9 or higher._

### Tags

* deprecated

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/lang/MigrateClassNewInstanceToGetDeclaredConstructorNewInstance.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.9/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.9

## Example


{% tabs %}
{% tab title="com/abc/A.java" %}

###### Before
{% code title="com/abc/A.java" %}
```java
package com.abc;

class A {
   public void test() throws Throwable {
       Class<?> class_ = Class.forName("org.openrewrite.Test");
       class_.newInstance();
   }
}
```
{% endcode %}

###### After
{% code title="com/abc/A.java" %}
```java
package com.abc;

class A {
   public void test() throws Throwable {
       Class<?> class_ = Class.forName("org.openrewrite.Test");
       class_.getDeclaredConstructor().newInstance();
   }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- com/abc/A.java
+++ com/abc/A.java
@@ -6,1 +6,1 @@
   public void test() throws Throwable {
       Class<?> class_ = Class.forName("org.openrewrite.Test");
-      class_.newInstance();
+      class_.getDeclaredConstructor().newInstance();
   }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.9` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.26")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.lang.MigrateClassNewInstanceToGetDeclaredConstructorNewInstance")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.9")
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
            <recipe>org.openrewrite.java.migrate.lang.MigrateClassNewInstanceToGetDeclaredConstructorNewInstance</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.9</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.lang.MigrateClassNewInstanceToGetDeclaredConstructorNewInstance
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick](mailto:patway99@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* Tyler Van Gorder
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* Josh Soref
* [Knut Wannheden](mailto:knut@moderne.io)
* Aaron Gershman


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.lang.MigrateClassNewInstanceToGetDeclaredConstructorNewInstance)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
