# Use javax.xml.stream.XMLOutputFactory\#newFactory\(String, ClassLoader\)

 **org.openrewrite.java.migrate.javax.MigrateXMLOutputFactoryNewInstanceToNewFactory** _`javax.xml.stream.XMLOutputFactory#newInstance` has been deprecated Java 7._

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.2.0

## Recipe list

* [Change method name](../../changemethodname.md)
  * methodPattern: `javax.xml.stream.XMLOutputFactory newInstance(String, ClassLoader)`
  * newMethodName: `newFactory`

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
    activeRecipe("org.openrewrite.java.migrate.javax.MigrateXMLOutputFactoryNewInstanceToNewFactory")
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
            <recipe>org.openrewrite.java.migrate.javax.MigrateXMLOutputFactoryNewInstanceToNewFactory</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.javax.MigrateXMLOutputFactoryNewInstanceToNewFactory` ry\`

