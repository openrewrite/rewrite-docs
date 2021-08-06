# Migrate deprecated java.lang APIs

 **org.openrewrite.java.migrate.lang.JavaLangAPIs** _Certain Java lang APIs have become deprecated and their usages changed, necessitating usage changes._

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.5.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.5.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:0.5.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.5.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.lang.JavaLangAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:0.5.0")
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
        <version>4.8.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.lang.JavaLangAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>0.5.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.lang.JavaLangAPIs`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `Character#isJavaIdentifierStart(char)`](migratecharacterisjavalettertoisjavaidentifierstart.md)
* [Use `Character#isJavaIdentifierPart(char)`](migratecharacterisjavaletterordigittoisjavaidentifierpart.md)
* [Use `Character#isWhitespace(char)`](migratecharacterisspacetoiswhitespace.md)
* [Use `Class#getDeclaredConstructor().newInstance()`](migrateclassnewinstancetogetdeclaredconstructornewinstance.md)
* [Use `Runtime.Version#feature()`](migrateruntimeversionmajortofeature.md)
* [Use `Runtime.Version#interim()`](migrateruntimeversionminortointerim.md)
* [Use `Runtime.Version#update()`](migrateruntimeversionsecuritytoupdate.md)
* [Use `SecurityManager#checkMulticast(InetAddress)`](migratesecuritymanagermulticast.md)
* [Use `ClassLoader#defineClass(String, byte[], int, int)`](migrateclassloaderdefineclass.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.lang.JavaLangAPIs
displayName: Migrate deprecated `java.lang` APIs
description: Certain Java lang APIs have become deprecated and their usages changed, necessitating usage changes.
recipeList:
  - org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterToIsJavaIdentifierStart
  - org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart
  - org.openrewrite.java.migrate.lang.MigrateCharacterIsSpaceToIsWhitespace
  - org.openrewrite.java.migrate.lang.MigrateClassNewInstanceToGetDeclaredConstructorNewInstance
  - org.openrewrite.java.migrate.lang.MigrateRuntimeVersionMajorToFeature
  - org.openrewrite.java.migrate.lang.MigrateRuntimeVersionMinorToInterim
  - org.openrewrite.java.migrate.lang.MigrateRuntimeVersionSecurityToUpdate
  - org.openrewrite.java.migrate.lang.MigrateSecurityManagerMulticast
  - org.openrewrite.java.migrate.lang.MigrateClassLoaderDefineClass
```
{% endtab %}
{% endtabs %}

