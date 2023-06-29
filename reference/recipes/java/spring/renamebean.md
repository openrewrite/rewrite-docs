# Rename bean

**org.openrewrite.java.spring.RenameBean**

_Renames a Spring bean, both declaration and references._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/RenameBean.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="sample/A.java" %}

###### Before
{% code title="sample/A.java" %}
```java
package sample;

import org.springframework.context.annotation.Bean;
import sample.MyType;

class A {
    @Bean
    public MyType foo() {
        return new MyType();
    }
}
```
{% endcode %}

###### After
{% code title="sample/A.java" %}
```java
package sample;

import org.springframework.context.annotation.Bean;
import sample.MyType;

class A {
    @Bean
    public MyType bar() {
        return new MyType();
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- sample/A.java
+++ sample/A.java
@@ -8,1 +8,1 @@
class A {
    @Bean
-   public MyType foo() {
+   public MyType bar() {
        return new MyType();
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="sample/Foo.java" %}

###### Before
{% code title="sample/Foo.java" %}
```java
package sample;

import org.springframework.context.annotation.Configuration;
import sample.MyType;

@Configuration
class Foo {
}
```
{% endcode %}

###### After
{% code title="sample/Foo.java" %}
```java
package sample;

import org.springframework.context.annotation.Configuration;
import sample.MyType;

@Configuration
class Bar {
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- sample/Foo.java
+++ sample/Foo.java
@@ -7,1 +7,1 @@

@Configuration
-class Foo {
+class Bar {
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 3


{% tabs %}
{% tab title="sample/A.java" %}

###### Before
{% code title="sample/A.java" %}
```java
package sample;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import sample.MyType;

@Configuration
class A {
    @Bean
    public String myBean(@Qualifier("foo") MyType myType) {
        return "";
    }
}
```
{% endcode %}

###### After
{% code title="sample/A.java" %}
```java
package sample;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import sample.MyType;

@Configuration
class A {
    @Bean
    public String myBean(@Qualifier("bar") MyType myType) {
        return "";
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- sample/A.java
+++ sample/A.java
@@ -11,1 +11,1 @@
class A {
    @Bean
-   public String myBean(@Qualifier("foo") MyType myType) {
+   public String myBean(@Qualifier("bar") MyType myType) {
        return "";
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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.RenameBean")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.RenameBean</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.RenameBean
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.RenameBean)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
