# Migrate deprecated `javax.lang.model.util` APIs in openjdk.

** org.openrewrite.java.migrate.javax.JavaxLangModelUtil**
_Certain `javax.lang.model.util` APIs have become deprecated and their usages changed, necessitating usage changes._

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.0.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.0.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.0.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.9")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.JavaxLangModelUtil")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.0.0")
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
        <version>4.17.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.JavaxLangModelUtil</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.0.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.java.migrate.javax.JavaxLangModelUtil`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `AbstractAnnotationValueVisitor9`](../../../java/migrate/javax/migrateabstractannotationvaluevisitor6to9.md)
* [Use `AbstractElementVisitor9`](../../../java/migrate/javax/migrateabstractelementvisitor6to9.md)
* [Use `AbstractTypeVisitor9`](../../../java/migrate/javax/migrateabstracttypevisitor6to9.md)
* [Use `ElementKindVisitor9`](../../../java/migrate/javax/migrateelementkindvisitor6to9.md)
* [Use `ElementScanner9`](../../../java/migrate/javax/migrateelementscanner6to9.md)
* [Use `SimpleAnnotationValueVisitor9`](../../../java/migrate/javax/migratesimpleannotationvaluevisitor6to9.md)
* [Use `SimpleElementVisitor9`](../../../java/migrate/javax/migratesimpleelementvisitor6to9.md)
* [Use `SimpleTypeVisitor9`](../../../java/migrate/javax/migratesimpletypevisitor6to9.md)
* [Use `TypeKindVisitor9`](../../../java/migrate/javax/migratetypekindvisitor6to9.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.JavaxLangModelUtil
displayName: Migrate deprecated `javax.lang.model.util` APIs in openjdk.
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
