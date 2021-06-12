# Migrate `@ConfigProperties` To `@ConfigMapping`

** org.openrewrite.java.quarkus.ConfigPropertiesToConfigMapping**
_Migrate the Quarkus `@ConfigProperties` annotated configurations to the equivalent Smallrye `@ConfigMapping`._

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-quarkus/0.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-quarkus
* version: 0.1.0


## Usage
This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-quarkus:0.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.quarkus.ConfigPropertiesToConfigMapping")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe":"rewrite-quarkus":"0.1.0")
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
            <recipe>org.openrewrite.java.quarkus.ConfigPropertiesToConfigMapping</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>0.1.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.quarkus.ConfigPropertiesToConfigMapping`
