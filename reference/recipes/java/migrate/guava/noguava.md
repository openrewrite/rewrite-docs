# Prefer the Java standard library instead of Guava

**org.openrewrite.java.migrate.guava.NoGuava**

_Guava filled in important gaps in the Java standard library and still does. But at least some of Guava's API surface area is covered by the Java standard library now, and some projects may be able to remove Guava altogether if they migrate to standard library for these functions._

### Tags

* guava

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/no-guava.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.1.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.1.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.16")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.guava.NoGuava")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.1.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.3.16") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.1.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.guava.NoGuava")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.7.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.guava.NoGuava</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.1.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.guava.NoGuava
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Prefer `Files#createTempDirectory()`](../../../java/migrate/guava/noguavacreatetempdir.md)
* [Prefer `Runnable::run`](../../../java/migrate/guava/noguavadirectexecutor.md)
* [Prefer `new ArrayList<>()`](../../../java/migrate/guava/noguavalistsnewarraylist.md)
* [Prefer `new CopyOnWriteArrayList<>()`](../../../java/migrate/guava/noguavalistsnewcopyonwritearraylist.md)
* [Prefer `new LinkedList<>()`](../../../java/migrate/guava/noguavalistsnewlinkedlist.md)
* [Prefer `new HashSet<>()`](../../../java/migrate/guava/noguavasetsnewhashset.md)
* [Prefer `new ConcurrentHashMap<>()`](../../../java/migrate/guava/noguavasetsnewconcurrenthashset.md)
* [Prefer `new LinkedHashSet<>()`](../../../java/migrate/guava/noguavasetsnewlinkedhashset.md)
* [Prefer `java.nio.charset.StandardCharsets`](../../../java/migrate/guava/preferjavaniocharsetstandardcharsets.md)
* [Prefer `java.util.Optional`](../../../java/migrate/guava/preferjavautiloptional.md)
* [Prefer `java.util.function.Function`](../../../java/migrate/guava/preferjavautilfunction.md)
* [Prefer `java.util.function.Predicate`](../../../java/migrate/guava/preferjavautilpredicate.md)
* [Prefer `java.util.function.Supplier`](../../../java/migrate/guava/preferjavautilsupplier.md)
* [Prefer `java.util.Objects#equals`](../../../java/migrate/guava/preferjavautilobjectsequals.md)
* [Prefer `java.util.Objects#hash`](../../../java/migrate/guava/preferjavautilobjectshashcode.md)
* [Prefer `java.util.Objects#requireNonNull`](../../../java/migrate/guava/preferjavautilobjectsrequirenonnull.md)
* [Prefer `java.util.Collections#unmodifiableNavigableMap`](../../../java/migrate/guava/preferjavautilcollectionsunmodifiablenavigablemap.md)
* [Prefer `java.util.Collections#synchronizedNavigableMap`](../../../java/migrate/guava/preferjavautilcollectionssynchronizednavigablemap.md)
* [Prefer `java.lang.Char#compare`](../../../java/migrate/guava/prefercharcompare.md)
* [Prefer `Integer#compare`](../../../java/migrate/guava/preferintegercompare.md)
* [Prefer `Long#compare`](../../../java/migrate/guava/preferlongcompare.md)
* [Prefer `Short#compare`](../../../java/migrate/guava/prefershortcompare.md)
* [Prefer `Integer#compareUnsigned`](../../../java/migrate/guava/preferintegercompareunsigned.md)
* [Prefer `Integer#divideUnsigned`](../../../java/migrate/guava/preferintegerdivideunsigned.md)
* [Prefer `Integer#parseUnsignedInt`](../../../java/migrate/guava/preferintegerparseunsignedint.md)
* [Prefer `Long#compareUnsigned`](../../../java/migrate/guava/preferlongcompareunsigned.md)
* [Prefer `Long#divideUnsigned`](../../../java/migrate/guava/preferlongdivideunsigned.md)
* [Prefer `Long#parseUnsignedInt`](../../../java/migrate/guava/preferlongparseunsignedlong.md)
* [Prefer `Long#remainderUnsigned`](../../../java/migrate/guava/preferlongremainderunsigned.md)
* [Prefer `Math#addExact`](../../../java/migrate/guava/prefermathaddexact.md)
* [Prefer `Math#subtractExact`](../../../java/migrate/guava/prefermathsubtractexact.md)
* [Prefer `Math#multiplyExact`](../../../java/migrate/guava/prefermathmultiplyexact.md)
* [Prefer `new AtomicReference<>()`](../../../java/migrate/guava/noguavaatomicsnewreference.md)
* [Prefer `List.of(..)` in Java 9 or higher](../../../java/migrate/guava/noguavaimmutablelistof.md)
* [Prefer `Map.of(..)` in Java 9 or higher](../../../java/migrate/guava/noguavaimmutablemapof.md)
* [Prefer `Set.of(..)` in Java 9 or higher](../../../java/migrate/guava/noguavaimmutablesetof.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.guava.NoGuava
displayName: Prefer the Java standard library instead of Guava
description: Guava filled in important gaps in the Java standard library and still does. But at least some of Guava's API surface area is covered by the Java standard library now, and some projects may be able to remove Guava altogether if they migrate to standard library for these functions.

tags:
  - guava
recipeList:
  - org.openrewrite.java.migrate.guava.NoGuavaCreateTempDir
  - org.openrewrite.java.migrate.guava.NoGuavaDirectExecutor
  - org.openrewrite.java.migrate.guava.NoGuavaListsNewArrayList
  - org.openrewrite.java.migrate.guava.NoGuavaListsNewCopyOnWriteArrayList
  - org.openrewrite.java.migrate.guava.NoGuavaListsNewLinkedList
  - org.openrewrite.java.migrate.guava.NoGuavaSetsNewHashSet
  - org.openrewrite.java.migrate.guava.NoGuavaSetsNewConcurrentHashSet
  - org.openrewrite.java.migrate.guava.NoGuavaSetsNewLinkedHashSet
  - org.openrewrite.java.migrate.guava.PreferJavaNioCharsetStandardCharsets
  - org.openrewrite.java.migrate.guava.PreferJavaUtilOptional
  - org.openrewrite.java.migrate.guava.PreferJavaUtilFunction
  - org.openrewrite.java.migrate.guava.PreferJavaUtilPredicate
  - org.openrewrite.java.migrate.guava.PreferJavaUtilSupplier
  - org.openrewrite.java.migrate.guava.PreferJavaUtilObjectsEquals
  - org.openrewrite.java.migrate.guava.PreferJavaUtilObjectsHashCode
  - org.openrewrite.java.migrate.guava.PreferJavaUtilObjectsRequireNonNull
  - org.openrewrite.java.migrate.guava.PreferJavaUtilCollectionsUnmodifiableNavigableMap
  - org.openrewrite.java.migrate.guava.PreferJavaUtilCollectionsSynchronizedNavigableMap
  - org.openrewrite.java.migrate.guava.PreferCharCompare
  - org.openrewrite.java.migrate.guava.PreferIntegerCompare
  - org.openrewrite.java.migrate.guava.PreferLongCompare
  - org.openrewrite.java.migrate.guava.PreferShortCompare
  - org.openrewrite.java.migrate.guava.PreferIntegerCompareUnsigned
  - org.openrewrite.java.migrate.guava.PreferIntegerDivideUnsigned
  - org.openrewrite.java.migrate.guava.PreferIntegerParseUnsignedInt
  - org.openrewrite.java.migrate.guava.PreferLongCompareUnsigned
  - org.openrewrite.java.migrate.guava.PreferLongDivideUnsigned
  - org.openrewrite.java.migrate.guava.PreferLongParseUnsignedLong
  - org.openrewrite.java.migrate.guava.PreferLongRemainderUnsigned
  - org.openrewrite.java.migrate.guava.PreferMathAddExact
  - org.openrewrite.java.migrate.guava.PreferMathSubtractExact
  - org.openrewrite.java.migrate.guava.PreferMathMultiplyExact
  - org.openrewrite.java.migrate.guava.NoGuavaAtomicsNewReference
  - org.openrewrite.java.migrate.guava.NoGuavaImmutableListOf
  - org.openrewrite.java.migrate.guava.NoGuavaImmutableMapOf
  - org.openrewrite.java.migrate.guava.NoGuavaImmutableSetOf

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Tim te Beek](mailto:tim@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)
* Patrick Way
* [Sam Snyder](mailto:sam@moderne.io)
* Tyler Van Gorder
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* Aaron Gershman
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.guava.NoGuava)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
