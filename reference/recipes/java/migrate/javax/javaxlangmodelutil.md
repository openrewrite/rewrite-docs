# Migrate deprecated javax.lang.model.util APIs in openjdk.

 **org.openrewrite.java.migrate.javax.JavaxLangModelUtil** _Certain `javax.lang.model.util` APIs have become deprecated and their usages changed, necessitating usage changes._

## Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.2.0

## Recipe list

* [Use `AbstractAnnotationValueVisitor9`](migrateabstractannotationvaluevisitor6to9.md)
* [Use `AbstractElementVisitor9`](migrateabstractelementvisitor6to9.md)
* [Use `AbstractTypeVisitor9`](migrateabstracttypevisitor6to9.md)
* [Use `ElementKindVisitor9`](migrateelementkindvisitor6to9.md)
* [Use `ElementScanner9`](migrateelementscanner6to9.md)
* [Use `SimpleAnnotationValueVisitor9`](migratesimpleannotationvaluevisitor6to9.md)
* [Use `SimpleElementVisitor9`](migratesimpleelementvisitor6to9.md)
* [Use `SimpleTypeVisitor9`](migratesimpletypevisitor6to9.md)
* [Use `TypeKindVisitor9`](migratetypekindvisitor6to9.md)

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:0.2.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.JavaxLangModelUtil")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:0.2.0")
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
        <version>4.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.JavaxLangModelUtil</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>0.2.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.javax.JavaxLangModelUtil`

