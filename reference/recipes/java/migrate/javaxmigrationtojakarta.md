# Migrate deprecated `javax` packages to `jakarta`

** org.openrewrite.java.migrate.JavaxMigrationToJakarta**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* jaxb
* jaxws
* jakarta

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.2.0

## Recipe list

* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * version: `3.x`
  * releasesOnly: `false`
  * onlyIfUsing: `[javax.xml.bind.*]`
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `com.sun.xml.bind`
  * artifactId: `jaxb-impl`
  * version: `3.x`
  * releasesOnly: `false`
  * scope: `runtime`
  * onlyIfUsing: `[javax.xml.bind.*]`
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.xml.ws`
  * artifactId: `jakarta.xml.ws-api`
  * version: `3.x`
  * releasesOnly: `false`
  * onlyIfUsing: `[javax.xml.ws.*]`
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `com.sun.xml.ws`
  * artifactId: `jaxws-rt`
  * version: `3.x`
  * releasesOnly: `false`
  * scope: `runtime`
  * onlyIfUsing: `[javax.xml.ws.*]`
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.transaction`
  * artifactId: `jakarta.transaction-api`
  * version: `2.x`
  * releasesOnly: `false`
  * onlyIfUsing: `[javax.transaction.*]`
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.annotation`
  * artifactId: `jakarta.annotation-api`
  * version: `2.x`
  * releasesOnly: `false`
  * onlyIfUsing: `[javax.annotation.*]`
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.activation`
  * artifactId: `jakarta.activation-api`
  * version: `2.x`
  * releasesOnly: `false`
  * onlyIfUsing: `[javax.activation.*]`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.xml.bind`
  * newPackageName: `jakarta.xml.bind`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.xml.ws`
  * newPackageName: `jakarta.xml.ws`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.transaction`
  * newPackageName: `jakarta.transaction`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.activation`
  * newPackageName: `jakarta.activation`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `javax.xml.ws`
  * artifactId: `jaxws-api`

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
    activeRecipe("org.openrewrite.java.migrate.JavaxMigrationToJakarta")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe":"rewrite-migrate-java":"0.2.0")
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
            <recipe>org.openrewrite.java.migrate.JavaxMigrationToJakarta</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.JavaxMigrationToJakarta`
