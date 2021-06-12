# Migrate deprecated `java.lang` APIs

** org.openrewrite.java.migrate.lang.JavaLangAPIs**
_Certain Java lang APIs have become deprecated and their usages changed, necessitating usage changes._

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.2.0

## Recipe list

* [Use `Character#isJavaIdentifierStart(char)`](../../../java/migrate/lang/migratecharacterisjavalettertoisjavaidentifierstart.md)
* [Use `Character#isJavaIdentifierPart(char)`](../../../java/migrate/lang/migratecharacterisjavaletterordigittoisjavaidentifierpart.md)
* [Use `Character#isWhitespace(char)`](../../../java/migrate/lang/migratecharacterisspacetoiswhitespace.md)
* [Use `Class#getDeclaredConstructor().newInstance()`](../../../java/migrate/lang/migrateclassnewinstancetogetdeclaredconstructornewinstance.md)
* [Use `Runtime.Version#feature()`](../../../java/migrate/lang/migrateruntimeversionmajortofeature.md)
* [Use `Runtime.Version#interim()`](../../../java/migrate/lang/migrateruntimeversionminortointerim.md)
* [Use `Runtime.Version#update()`](../../../java/migrate/lang/migrateruntimeversionsecuritytoupdate.md)
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
    activeRecipe("org.openrewrite.java.migrate.lang.JavaLangAPIs")
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
            <recipe>org.openrewrite.java.migrate.lang.JavaLangAPIs</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.lang.JavaLangAPIs`
