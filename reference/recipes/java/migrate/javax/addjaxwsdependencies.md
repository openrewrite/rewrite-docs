# Add explicit JAX-WS dependencies

** org.openrewrite.java.migrate.javax.AddJaxwsDependencies**
_This recipe will add the necessary JAX-WS dependencies for those projects migrating to Java 11._

### Tags

* glassfish
* javax
* java11
* jaxws
* jakarta

## Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.2.0

## Recipe list

* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.xml.ws`
  * artifactId: `jakarta.xml.ws-api`
  * version: `2.3.x`
  * releasesOnly: `false`
  * onlyIfUsing: `[javax.jws.*]`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.xml.ws`
  * artifactId: `jakarta.xml.ws-api`
  * newVersion: `2.3.x`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `com.sun.xml.ws`
  * artifactId: `jaxws-rt`
  * version: `2.3.x`
  * releasesOnly: `false`
  * scope: `runtime`
  * onlyIfUsing: `[javax.jws.*]`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `com.sun.xml.ws`
  * artifactId: `jaxws-rt`
  * newVersion: `2.3.x`
* [Remove Maven dependency](../../../maven/removedependency.md)
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
    activeRecipe("org.openrewrite.java.migrate.javax.AddJaxwsDependencies")
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
            <recipe>org.openrewrite.java.migrate.javax.AddJaxwsDependencies</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.javax.AddJaxwsDependencies`
