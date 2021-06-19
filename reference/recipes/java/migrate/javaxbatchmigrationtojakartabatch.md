# Migrate deprecated javax.batch packages to jakarta.batch

 **org.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch** _Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* batch
* jakarta

## Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.2.0

## Recipe list

* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.batch`
  * artifactId: `jakarta.batch-api`
  * version: `2.x`
  * releasesOnly: `false`
  * onlyIfUsing: `[javax.batch.*]`
* [Rename package name](../changepackage.md)
  * oldPackageName: `javax.batch`
  * newPackageName: `jakarta.batch`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `javax.batch`
  * artifactId: `javax.batch-api`

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
    activeRecipe("org.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch")
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
            <recipe>org.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch`

