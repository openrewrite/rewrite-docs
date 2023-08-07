# Adds `@DependsOnDatabaseInitialization` to Spring Beans and Components depending on `javax.sql.DataSource`

**org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering**

_Beans of certain well-known types, such as `JdbcTemplate`, will be ordered so that they are initialized after the database has been initialized. If you have a bean that works with the `DataSource` directly, annotate its class or `@Bean` method with `@DependsOnDatabaseInitialization` to ensure that it too is initialized after the database has been initialized. See the [release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes#initialization-ordering) for more._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/DatabaseComponentAndBeanInitializationOrdering.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.7

## Example


{% tabs %}
{% tab title="PersistenceConfiguration.java" %}

###### Before
{% code title="PersistenceConfiguration.java" %}
```java
import org.jooq.impl.DSL;
import org.jooq.DSLContext;
import org.jooq.SQLDialect;
import javax.sql.DataSource;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

@Configuration
class PersistenceConfiguration {

    public static class A { private DataSource ds;}

    @Bean
    DSLContext dslContext(DataSource ds) {
        return DSL.using(ds, SQLDialect.SQLITE);
    }

    @Bean
    A a() {
        return new A();
    }
}
```
{% endcode %}

###### After
{% code title="PersistenceConfiguration.java" %}
```java
import org.jooq.impl.DSL;
import org.springframework.boot.sql.init.dependency.DependsOnDatabaseInitialization;
import org.jooq.DSLContext;
import org.jooq.SQLDialect;
import javax.sql.DataSource;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

@Configuration
class PersistenceConfiguration {

    public static class A { private DataSource ds;}

    @Bean
    DSLContext dslContext(DataSource ds) {
        return DSL.using(ds, SQLDialect.SQLITE);
    }

    @Bean
    @DependsOnDatabaseInitialization
    A a() {
        return new A();
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
@@ -2,0 +2,1 @@
import org.jooq.impl.DSL;
+import org.springframework.boot.sql.init.dependency.DependsOnDatabaseInitialization;
import org.jooq.DSLContext;
@@ -19,0 +20,1 @@

    @Bean
+   @DependsOnDatabaseInitialization
    A a() {
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
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Fabian Krüger
* Kun Li
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
