# Add explicit JAXB dependencies

** org.openrewrite.java.migrate.javax.AddJaxbDependencies**
_This recipe will add the necessary JAXB dependencies for those projects migrating to Java 11._

### Tags

* jaxb
* glassfish
* javax
* java11
* jakarta

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.2.0

## Recipe list

* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * version: `2.3.x`
  * releasesOnly: `false`
  * onlyIfUsing: `[javax.xml.bind.*]`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * newVersion: `2.3.x`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.glassfish.jaxb`
  * artifactId: `jaxb-runtime`
  * version: `2.3.x`
  * releasesOnly: `false`
  * scope: `runtime`
  * onlyIfUsing: `[javax.xml.bind.*]`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.glassfish.jaxb`
  * artifactId: `jaxb-runtime`
  * newVersion: `2.3.x`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `javax.xml.bind`
  * artifactId: `jaxb-api`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `com.sun.xml.bind`
  * artifactId: `jaxb-impl`
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
    activeRecipe("org.openrewrite.java.migrate.javax.AddJaxbDependencies")
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
            <recipe>org.openrewrite.java.migrate.javax.AddJaxbDependencies</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.javax.AddJaxbDependencies`
