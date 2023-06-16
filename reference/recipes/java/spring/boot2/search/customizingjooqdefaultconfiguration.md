# In Spring Boot 2.5 a `DefaultConfigurationCustomizer` can now be used in favour of defining one or more `*Provider` beans

**org.openrewrite.java.spring.boot2.search.CustomizingJooqDefaultConfiguration**

_To streamline the customization of jOOQ’s `DefaultConfiguration`, a bean that implements `DefaultConfigurationCustomizer` can now be defined. This customizer callback should be used in favour of defining one or more `*Provider` beans, the support for which has now been deprecated. See [Spring Boot 2.5 jOOQ customization](https://docs.spring.io/spring-boot/docs/2.5.x/reference/htmlsingle/#features.sql.jooq.customizing)._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/search/CustomizingJooqDefaultConfiguration.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="PersistenceConfiguration.java" %}

###### Before
{% code title="PersistenceConfiguration.java" %}
```java
import org.jooq.conf.Settings;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

@Configuration
class PersistenceConfiguration {

    @Bean
    Settings settings() {
        return null;
    }
}
```
{% endcode %}

###### After
{% code title="PersistenceConfiguration.java" %}
```java
import org.jooq.conf.Settings;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

@Configuration
class PersistenceConfiguration {

    /*~~>*/@Bean
    Settings settings() {
        return null;
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- PersistenceConfiguration.java
+++ PersistenceConfiguration.java
@@ -8,1 +8,1 @@
-    @Bean
+    /*~~>*/@Bean
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
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.search.CustomizingJooqDefaultConfiguration")
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
            <recipe>org.openrewrite.java.spring.boot2.search.CustomizingJooqDefaultConfiguration</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.search.CustomizingJooqDefaultConfiguration
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Fabian Krüger](56278322+fabapp2@users.noreply.github.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Nick McKinney](mckinneynichoals@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.search.CustomizingJooqDefaultConfiguration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
