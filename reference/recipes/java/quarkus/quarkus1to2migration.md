# Quarkus 2.x migration from Quarkus 1.x

** org.openrewrite.java.quarkus.Quarkus1to2Migration**
_Migrates Quarkus 1.x to 2.x._

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-quarkus/0.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-quarkus
* version: 0.1.0

## Recipe list

* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `smallrye.jwt.sign.key-location`
  * newPropertyKey: `smallrye.jwt.sign.key.location`
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `smallrye.jwt.encrypt.key-location`
  * newPropertyKey: `smallrye.jwt.encrypt.key.location`
* [Change properties file property value](../../properties/changepropertyvalue.md)
  * propertyKey: `quarkus.quartz.force-start`
  * newValue: `forced`
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.quartz.force-start`
  * newPropertyKey: `quarkus.quartz.start-mode`
* [Change properties file property value](../../properties/changepropertyvalue.md)
  * propertyKey: `quarkus.quartz.store-type`
  * newValue: `jdbc-cmt`
  * oldValue: `db`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.quarkus.qute.api.CheckedTemplate`
  * newFullyQualifiedTypeName: `io.quarkus.qute.CheckedTemplate`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.quarkus.qute.api.ResourcePath`
  * newFullyQualifiedTypeName: `io.quarkus.qute.Location`
* [Upgrade Maven plugin version](../../maven/upgradepluginversion.md)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-maven-plugin`
  * newVersion: `2.x`
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
    activeRecipe("org.openrewrite.java.quarkus.Quarkus1to2Migration")
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
            <recipe>org.openrewrite.java.quarkus.Quarkus1to2Migration</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.quarkus.Quarkus1to2Migration`
