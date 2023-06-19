# Use `QuerydslPredicateExecutor<T>`

**org.openrewrite.java.spring.data.MigrateQuerydslJpaRepository**

_`QuerydslJpaRepository<T, ID extends Serializable>` was deprecated in Spring Data 2.1._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/data/MigrateQuerydslJpaRepository.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import javax.persistence.EntityManager;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.QuerydslJpaRepository;
import org.springframework.data.querydsl.SimpleEntityPathResolver;

class Test {
    JpaEntityInformation<String, Long> entityInformation;
    EntityManager entityManager;
    SimpleEntityPathResolver resolver;
    QuerydslJpaRepository<String, Long> declWith2Args = new QuerydslJpaRepository(entityInformation, entityManager);
    QuerydslJpaRepository<String, Long> declWith3Args = new QuerydslJpaRepository(entityInformation, entityManager, resolver);
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import javax.persistence.EntityManager;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.QuerydslJpaPredicateExecutor;
import org.springframework.data.querydsl.SimpleEntityPathResolver;

class Test {
    JpaEntityInformation<String, Long> entityInformation;
    EntityManager entityManager;
    SimpleEntityPathResolver resolver;
    QuerydslJpaPredicateExecutor<String> declWith2Args = new QuerydslJpaPredicateExecutor(entityInformation, entityManager, SimpleEntityPathResolver.INSTANCE, null);
    QuerydslJpaPredicateExecutor<String> declWith3Args = new QuerydslJpaPredicateExecutor(entityInformation, entityManager, resolver, null);
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -3,1 +3,1 @@
import javax.persistence.EntityManager;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
-import org.springframework.data.jpa.repository.support.QuerydslJpaRepository;
+import org.springframework.data.jpa.repository.support.QuerydslJpaPredicateExecutor;
import org.springframework.data.querydsl.SimpleEntityPathResolver;
@@ -10,2 +10,2 @@
    EntityManager entityManager;
    SimpleEntityPathResolver resolver;
-   QuerydslJpaRepository<String, Long> declWith2Args = new QuerydslJpaRepository(entityInformation, entityManager);
-   QuerydslJpaRepository<String, Long> declWith3Args = new QuerydslJpaRepository(entityInformation, entityManager, resolver);
+   QuerydslJpaPredicateExecutor<String> declWith2Args = new QuerydslJpaPredicateExecutor(entityInformation, entityManager, SimpleEntityPathResolver.INSTANCE, null);
+   QuerydslJpaPredicateExecutor<String> declWith3Args = new QuerydslJpaPredicateExecutor(entityInformation, entityManager, resolver, null);
}
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
    activeRecipe("org.openrewrite.java.spring.data.MigrateQuerydslJpaRepository")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.data.MigrateQuerydslJpaRepository</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.data.MigrateQuerydslJpaRepository
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.data.MigrateQuerydslJpaRepository)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
