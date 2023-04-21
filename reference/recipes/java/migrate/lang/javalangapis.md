# Use modernized `java.lang` APIs

**org.openrewrite.java.migrate.lang.JavaLangAPIs**

_Certain Java lang APIs have become deprecated and their usages changed, necessitating usage changes._

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-lang-apis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.20.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:1.20.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.lang.JavaLangAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.20.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.lang.JavaLangAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.20.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.lang.JavaLangAPIs
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `Character#isJavaIdentifierStart(char)`](../../../java/migrate/lang/migratecharacterisjavalettertoisjavaidentifierstart.md)
* [Use `Character#isJavaIdentifierPart(char)`](../../../java/migrate/lang/migratecharacterisjavaletterordigittoisjavaidentifierpart.md)
* [Use `Character#isWhitespace(char)`](../../../java/migrate/lang/migratecharacterisspacetoiswhitespace.md)
* [Use `Runtime.Version#feature()`](../../../java/migrate/lang/migrateruntimeversionmajortofeature.md)
* [Use `Runtime.Version#interim()`](../../../java/migrate/lang/migrateruntimeversionminortointerim.md)
* [Use `Runtime.Version#update()`](../../../java/migrate/lang/migrateruntimeversionsecuritytoupdate.md)
* [Use `SecurityManager#checkMulticast(InetAddress)`](../../../java/migrate/lang/migratesecuritymanagermulticast.md)
* [Use `ClassLoader#defineClass(String, byte[], int, int)`](../../../java/migrate/lang/migrateclassloaderdefineclass.md)
* [Use `Class#getDeclaredConstructor().newInstance()`](../../../java/migrate/lang/migrateclassnewinstancetogetdeclaredconstructornewinstance.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.lang.JavaLangAPIs
displayName: Use modernized `java.lang` APIs
description: Certain Java lang APIs have become deprecated and their usages changed, necessitating usage changes.
recipeList:
  - org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterToIsJavaIdentifierStart
  - org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart
  - org.openrewrite.java.migrate.lang.MigrateCharacterIsSpaceToIsWhitespace
  - org.openrewrite.java.migrate.lang.MigrateRuntimeVersionMajorToFeature
  - org.openrewrite.java.migrate.lang.MigrateRuntimeVersionMinorToInterim
  - org.openrewrite.java.migrate.lang.MigrateRuntimeVersionSecurityToUpdate
  - org.openrewrite.java.migrate.lang.MigrateSecurityManagerMulticast
  - org.openrewrite.java.migrate.lang.MigrateClassLoaderDefineClass
  - org.openrewrite.java.migrate.lang.MigrateClassNewInstanceToGetDeclaredConstructorNewInstance

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.lang.JavaLangAPIs)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
