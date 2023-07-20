# Change factory method return types to reflect their resolved return type

**org.openrewrite.java.micronaut.SubclassesReturnedFromFactoriesNotInjectable**

_As of Micronaut 3.x It is no longer possible to inject the internal implementation type from beans produced via factories. Factory method return types are changed to reflect the resolved return type if the method returns a single non-null type that does not match the method declaration return type._

## Source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/SubclassesReturnedFromFactoriesNotInjectable.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.1.0

## Example


{% tabs %}
{% tab title="ExecutorFactory.java" %}

###### Before
{% code title="ExecutorFactory.java" %}
```java
    import java.util.concurrent.ForkJoinPool;
    import java.util.concurrent.ExecutorService;
    import javax.inject.Singleton;
    import io.micronaut.context.annotation.Factory;

    @Factory
    public class ExecutorFactory {

        @Singleton
        public ExecutorService executorService() {
            return ForkJoinPool.commonPool();
        }
    }
```
{% endcode %}

###### After
{% code title="ExecutorFactory.java" %}
```java
    import java.util.concurrent.ForkJoinPool;
    import javax.inject.Singleton;
    import io.micronaut.context.annotation.Factory;

    @Factory
    public class ExecutorFactory {

        @Singleton
        public ForkJoinPool executorService() {
            return ForkJoinPool.commonPool();
        }
    }
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- ExecutorFactory.java
+++ ExecutorFactory.java
@@ -2,1 +2,0 @@
    import java.util.concurrent.ForkJoinPool;
-   import java.util.concurrent.ExecutorService;
    import javax.inject.Singleton;
@@ -10,1 +9,1 @@

        @Singleton
-       public ExecutorService executorService() {
+       public ForkJoinPool executorService() {
            return ForkJoinPool.commonPool();
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
    activeRecipe("org.openrewrite.java.micronaut.SubclassesReturnedFromFactoriesNotInjectable")
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
            <recipe>org.openrewrite.java.micronaut.SubclassesReturnedFromFactoriesNotInjectable</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.micronaut.SubclassesReturnedFromFactoriesNotInjectable
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.SubclassesReturnedFromFactoriesNotInjectable)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
