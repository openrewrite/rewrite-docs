# Migrate to Java 17

**org.openrewrite.java.migrate.UpgradeToJava17**

_This recipe will apply changes commonly needed when migrating to Java 17. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 17 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 17._

### Tags

* java17
* lombok

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-17.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.6

## Examples
##### Example 1


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```java
package com.abc;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;

class A {
   private static final List<String> staticList = Collections.singletonList("0");

   /* This is a comment */
   public void test() {
       // This is a comment
       Set<String> stringSet = Collections.singleton("aaa");
       List<String> stringList = Collections.singletonList("bbb");
       Map<String, Object> stringMap = Collections.singletonMap("a-key", "a-value");
   }
}
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```java
package com.abc;

import java.util.List;
import java.util.Map;
import java.util.Set;

class A {
   private static final List<String> staticList = List.of("0");

   /* This is a comment */
   public void test() {
       // This is a comment
       Set<String> stringSet = Set.of("aaa");
       List<String> stringList = List.of("bbb");
       Map<String, Object> stringMap = Map.of("a-key", "a-value");
   }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -3,1 +3,0 @@
package com.abc;

-import java.util.Collections;
import java.util.List;
@@ -9,1 +8,1 @@

class A {
-  private static final List<String> staticList = Collections.singletonList("0");
+  private static final List<String> staticList = List.of("0");

@@ -14,3 +13,3 @@
   public void test() {
       // This is a comment
-      Set<String> stringSet = Collections.singleton("aaa");
-      List<String> stringList = Collections.singletonList("bbb");
-      Map<String, Object> stringMap = Collections.singletonMap("a-key", "a-value");
+      Set<String> stringSet = Set.of("aaa");
+      List<String> stringList = List.of("bbb");
+      Map<String, Object> stringMap = Map.of("a-key", "a-value");
   }
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```java
package com.abc;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;

class A {
   private static final List<String> staticList = Collections.singletonList("0");

   /* This is a comment */
   public void test() {
       // This is a comment
       Set<String> stringSet = Collections.singleton("aaa");
       List<String> stringList = Collections.singletonList("bbb");
       Map<String, Object> stringMap = Collections.singletonMap("a-key", "a-value");
   }
}
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```java
package com.abc;

import java.util.List;
import java.util.Map;
import java.util.Set;

class A {
   private static final List<String> staticList = List.of("0");

   /* This is a comment */
   public void test() {
       // This is a comment
       Set<String> stringSet = Set.of("aaa");
       List<String> stringList = List.of("bbb");
       Map<String, Object> stringMap = Map.of("a-key", "a-value");
   }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -3,1 +3,0 @@
package com.abc;

-import java.util.Collections;
import java.util.List;
@@ -9,1 +8,1 @@

class A {
-  private static final List<String> staticList = Collections.singletonList("0");
+  private static final List<String> staticList = List.of("0");

@@ -14,3 +13,3 @@
   public void test() {
       // This is a comment
-      Set<String> stringSet = Collections.singleton("aaa");
-      List<String> stringList = Collections.singletonList("bbb");
-      Map<String, Object> stringMap = Collections.singletonMap("a-key", "a-value");
+      Set<String> stringSet = Set.of("aaa");
+      List<String> stringList = List.of("bbb");
+      Map<String, Object> stringMap = Map.of("a-key", "a-value");
   }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.6` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.UpgradeToJava17")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.6")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.UpgradeToJava17</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.6</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.UpgradeToJava17
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Java 11](../../java/migrate/java8tojava11.md)
* [Change Maven Java version property values to 17](../../java/migrate/javaversion17.md)
* [Prefer `String#formatted(Object...)`](../../java/migrate/lang/stringformatted.md)
* [Migrate Lombok to a Java 17 compatible version](../../java/migrate/lombok/updatelomboktojava17.md)
* [Upgrade `actions/setup-java` `java-version`](../../github/setupjavaupgradejavaversion.md)
* [Changes code to use Java 17's `instanceof` pattern matching](../../staticanalysis/instanceofpatternmatch.md)
* [Use text blocks](../../java/migrate/lang/usetextblocks.md)
  * convertStringsWithoutNewlines: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.UpgradeToJava17
displayName: Migrate to Java 17
description: This recipe will apply changes commonly needed when migrating to Java 17. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 17 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 17.

tags:
  - java17
  - lombok
recipeList:
  - org.openrewrite.java.migrate.Java8toJava11
  - org.openrewrite.java.migrate.JavaVersion17
  - org.openrewrite.java.migrate.lang.StringFormatted
  - org.openrewrite.java.migrate.lombok.UpdateLombokToJava17
  - org.openrewrite.github.SetupJavaUpgradeJavaVersion:
  - org.openrewrite.staticanalysis.InstanceOfPatternMatch
  - org.openrewrite.java.migrate.lang.UseTextBlocks:
      convertStringsWithoutNewlines: true

```
{% endtab %}
{% endtabs %}

## Contributors
* [Shannon Pamperl](mailto:shanman190@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* Tyler Van Gorder
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Tim te Beek](mailto:tim.te.beek@jdriven.com)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* Yeikel
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* Aaron Gershman
* Kun Li
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Kun Li](mailto:kun@moderne.io)
* Aakarshit Uppal
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Knut Wannheden](mailto:knut.wannheden@gmail.com)
* Josh Soref
* [Tim te Beek](mailto:tim@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava17)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
