# Use modernized `javax.lang.model.util` APIs

**org.openrewrite.java.migrate.javax.JavaxLangModelUtil**

_Certain `javax.lang.model.util` APIs have become deprecated and their usages changed, necessitating usage changes._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/javax-lang-model-util.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import javax.lang.model.util.AbstractAnnotationValueVisitor6;

abstract class Test extends AbstractAnnotationValueVisitor6 {}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import javax.lang.model.util.AbstractAnnotationValueVisitor9;

abstract class Test extends AbstractAnnotationValueVisitor9 {}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -1,1 +1,1 @@
-import javax.lang.model.util.AbstractAnnotationValueVisitor6;
+import javax.lang.model.util.AbstractAnnotationValueVisitor9;
@@ -3,1 +3,1 @@
-abstract class Test extends AbstractAnnotationValueVisitor6 {}
+abstract class Test extends AbstractAnnotationValueVisitor9 {}
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import javax.lang.model.util.AbstractAnnotationValueVisitor6;

abstract class Test extends AbstractAnnotationValueVisitor6 {}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import javax.lang.model.util.AbstractAnnotationValueVisitor9;

abstract class Test extends AbstractAnnotationValueVisitor9 {}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -1,1 +1,1 @@
-import javax.lang.model.util.AbstractAnnotationValueVisitor6;
+import javax.lang.model.util.AbstractAnnotationValueVisitor9;
@@ -3,1 +3,1 @@
-abstract class Test extends AbstractAnnotationValueVisitor6 {}
+abstract class Test extends AbstractAnnotationValueVisitor9 {}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.JavaxLangModelUtil")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.1")
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
            <recipe>org.openrewrite.java.migrate.javax.JavaxLangModelUtil</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.1</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.JavaxLangModelUtil
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `javax.lang.model.util.AbstractAnnotationValueVisitor9`](../../../java/migrate/javax/migrateabstractannotationvaluevisitor6to9.md)
* [Use `javax.lang.model.util.AbstractElementVisitor9`](../../../java/migrate/javax/migrateabstractelementvisitor6to9.md)
* [Use `javax.lang.model.util.AbstractTypeVisitor9`](../../../java/migrate/javax/migrateabstracttypevisitor6to9.md)
* [Use `javax.lang.model.util.ElementKindVisitor9`](../../../java/migrate/javax/migrateelementkindvisitor6to9.md)
* [Use `javax.lang.model.util.ElementScanner9`](../../../java/migrate/javax/migrateelementscanner6to9.md)
* [Use `javax.lang.model.util.SimpleAnnotationValueVisitor9`](../../../java/migrate/javax/migratesimpleannotationvaluevisitor6to9.md)
* [Use `javax.lang.model.util.SimpleElementVisitor9`](../../../java/migrate/javax/migratesimpleelementvisitor6to9.md)
* [Use `javax.lang.model.util.SimpleTypeVisitor9`](../../../java/migrate/javax/migratesimpletypevisitor6to9.md)
* [Use `javax.lang.model.util.TypeKindVisitor9`](../../../java/migrate/javax/migratetypekindvisitor6to9.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.JavaxLangModelUtil
displayName: Use modernized `javax.lang.model.util` APIs
description: Certain `javax.lang.model.util` APIs have become deprecated and their usages changed, necessitating usage changes.
recipeList:
  - org.openrewrite.java.migrate.javax.MigrateAbstractAnnotationValueVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateAbstractElementVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateAbstractTypeVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateElementKindVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateElementScanner6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleAnnotationValueVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleElementVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleTypeVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateTypeKindVisitor6To9

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.javax.JavaxLangModelUtil)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
