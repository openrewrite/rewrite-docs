# Use Java standard library instead of Guava

** org.openrewrite.java.migrate.guava.NoGuava**
_Guava filled in important gaps in the Java standard library and still does. But at least some of Guava's API surface area is covered by the Java standard library now, and some projects may be able to remove Guava altogether if they migrate to standard library for these functions._

### Tags

* guava

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.4.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:0.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.3.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.guava.NoGuava")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:0.4.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.7.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.guava.NoGuava</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>0.4.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.guava.NoGuava`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `Set#of(..)` not Guava](../../../java/migrate/guava/noguavaimmutablesetof.md)
* [Use Java SDK instead of `MoreExecutors#directExecutor()`](../../../java/migrate/guava/noguavadirectexecutor.md)
* [Use `new ArrayList<>()` instead of Guava](../../../java/migrate/guava/noguavalistsnewarraylist.md)
* [Use `new CopyOnWriteArrayList<>()` instead of Guava](../../../java/migrate/guava/noguavalistsnewcopyonwritearraylist.md)
* [Use `new LinkedList<>()` instead of Guava](../../../java/migrate/guava/noguavalistsnewlinkedlist.md)
* [Use `new HashSet<>()` instead of Guava](../../../java/migrate/guava/noguavasetsnewhashset.md)
* [Construct a set from a `new ConcurrentHashMap<>()` instead of Guava](../../../java/migrate/guava/noguavasetsnewconcurrenthashset.md)
* [Use `new LinkedHashSet<>()` instead of Guava](../../../java/migrate/guava/noguavasetsnewlinkedhashset.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.guava.NoGuava
displayName: Use Java standard library instead of Guava
description: Guava filled in important gaps in the Java standard library and still does. But at least some of Guava's API surface area is covered by the Java standard library now, and some projects may be able to remove Guava altogether if they migrate to standard library for these functions.
tags:
  - guava
recipeList:
  - org.openrewrite.java.migrate.guava.NoGuavaImmutableSetOf
  - org.openrewrite.java.migrate.guava.NoGuavaDirectExecutor
  - org.openrewrite.java.migrate.guava.NoGuavaListsNewArrayList
  - org.openrewrite.java.migrate.guava.NoGuavaListsNewCopyOnWriteArrayList
  - org.openrewrite.java.migrate.guava.NoGuavaListsNewLinkedList
  - org.openrewrite.java.migrate.guava.NoGuavaSetsNewHashSet
  - org.openrewrite.java.migrate.guava.NoGuavaSetsNewConcurrentHashSet
  - org.openrewrite.java.migrate.guava.NoGuavaSetsNewLinkedHashSet

```
{% endtab %}
{% endtabs %}
