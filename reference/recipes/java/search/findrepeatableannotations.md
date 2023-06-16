# Find uses of `@Repeatable` annotations

**org.openrewrite.java.search.FindRepeatableAnnotations**

_Java 8 introduced the concept of `@Repeatable` annotations._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/search/FindRepeatableAnnotations.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.mapstruct.*;
class Test {
    @ValueMappings({
            @ValueMapping(source = "UNKNOWN", target = MappingConstants.NULL),
            @ValueMapping(source = "UNRECOGNIZED", target = MappingConstants.NULL)
    })
    void test() {
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.mapstruct.*;
class Test {
    @ValueMappings({
            /*~~>*/@ValueMapping(source = "UNKNOWN", target = MappingConstants.NULL),
            /*~~>*/@ValueMapping(source = "UNRECOGNIZED", target = MappingConstants.NULL)
    })
    void test() {
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
@@ -4,2 +4,2 @@
-            @ValueMapping(source = "UNKNOWN", target = MappingConstants.NULL),
            @ValueMapping(source = "UNRECOGNIZED", target = MappingConstants.NULL)
+            /*~~>*/@ValueMapping(source = "UNKNOWN", target = MappingConstants.NULL),
            /*~~>*/@ValueMapping(source = "UNRECOGNIZED", target = MappingConstants.NULL)
```
{% endcode %}
{% endtab %}
{% endtabs %}

###### Unchanged
{% code title="org/mapstruct/ValueMapping.java" %}
```java
package org.mapstruct;

import java.lang.annotation.ElementType;
import java.lang.annotation.Repeatable;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Repeatable(ValueMappings.class)
@Retention(RetentionPolicy.CLASS)
@Target(ElementType.METHOD)
public @interface ValueMapping {
    String source();

    String target();
}
```
{% endcode %}

###### Unchanged
{% code title="org/mapstruct/ValueMappings.java" %}
```java
package org.mapstruct;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.METHOD})
@Retention(RetentionPolicy.CLASS)
public @interface ValueMappings {
    ValueMapping[] value();
}
```
{% endcode %}


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.search.FindRepeatableAnnotations")
}

repositories {
    mavenCentral()
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
            <recipe>org.openrewrite.java.search.FindRepeatableAnnotations</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.search.FindRepeatableAnnotations
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.search.FindRepeatableAnnotations)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
