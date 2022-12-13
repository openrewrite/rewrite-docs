# Add explicit JAXB dependencies

**org.openrewrite.java.migrate.javax.AddJaxbDependencies**
_This recipe will add explicit dependencies for Jakarta EE 8 when a Java 8 application is using JAXB. Any existing dependencies will be upgraded to the latest version of Jakarta EE 8. **The artifacts are moved to Jakarta EE 8 but the application can continue to use the `javax.xml.bind` namespace.
_

### Tags

* jaxb
* glassfish
* javax
* java11
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.15.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.15.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.15.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.AddJaxbDependencies")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.15.0")
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
        <version>4.38.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.AddJaxbDependencies</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.15.0</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.15.0 \
  -DactiveRecipes=org.openrewrite.java.migrate.javax.AddJaxbDependencies
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.AddJaxbDependencies`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `com.sun.xml.bind`
  * artifactId: `jaxb-core`
* [Remove Maven managed dependency](../../../maven/removemanageddependency.md)
  * groupId: `com.sun.xml.bind`
  * artifactId: `jaxb-core`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `javax.xml.bind`
  * oldArtifactId: `jaxb-api`
  * newGroupId: `jakarta.xml.bind`
  * newArtifactId: `jakarta.xml.bind-api`
  * newVersion: `2.3.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `javax.xml.bind`
  * oldArtifactId: `jaxb-api`
  * newGroupId: `jakarta.xml.bind`
  * newArtifactId: `jakarta.xml.bind-api`
  * newVersion: `2.3.x`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * version: `2.3.x`
  * onlyIfUsing: `javax.xml.bind.*`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * newVersion: `2.3.x`
  * retainVersions: `[]`
* [Use latest JAXB API and runtime for Jakarta EE 8](../../../java/migrate/javax/addjaxbruntime.md)
  * runtime: `glassfish`
* [Remove redundant explicit dependency versions](../../../maven/removeredundantdependencyversions.md)
  * groupPattern: `org.glassfish.jaxb`
  * artifactPattern: `*`
  * onlyIfVersionsMatch: `true`
* [Remove redundant explicit dependency versions](../../../maven/removeredundantdependencyversions.md)
  * groupPattern: `com.sun.xml.bind`
  * artifactPattern: `*`
  * onlyIfVersionsMatch: `true`
* [Remove redundant explicit dependency versions](../../../maven/removeredundantdependencyversions.md)
  * groupPattern: `jakarta.xml.bind`
  * artifactPattern: `*`
  * onlyIfVersionsMatch: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.AddJaxbDependencies
displayName: Add explicit JAXB dependencies
description: This recipe will add explicit dependencies for Jakarta EE 8 when a Java 8 application is using JAXB. Any existing dependencies will be upgraded to the latest version of Jakarta EE 8. **The artifacts are moved to Jakarta EE 8 but the application can continue to use the `javax.xml.bind` namespace.

tags:
  - jaxb
  - glassfish
  - javax
  - java11
  - jakarta
recipeList:
  - org.openrewrite.maven.RemoveDependency:
      groupId: com.sun.xml.bind
      artifactId: jaxb-core
  - org.openrewrite.maven.RemoveManagedDependency:
      groupId: com.sun.xml.bind
      artifactId: jaxb-core
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: javax.xml.bind
      oldArtifactId: jaxb-api
      newGroupId: jakarta.xml.bind
      newArtifactId: jakarta.xml.bind-api
      newVersion: 2.3.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: javax.xml.bind
      oldArtifactId: jaxb-api
      newGroupId: jakarta.xml.bind
      newArtifactId: jakarta.xml.bind-api
      newVersion: 2.3.x
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      version: 2.3.x
      onlyIfUsing: javax.xml.bind.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      newVersion: 2.3.x
      retainVersions: []
  - org.openrewrite.java.migrate.javax.AddJaxbRuntime:
      runtime: glassfish
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      groupPattern: org.glassfish.jaxb
      artifactPattern: *
      onlyIfVersionsMatch: true
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      groupPattern: com.sun.xml.bind
      artifactPattern: *
      onlyIfVersionsMatch: true
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      groupPattern: jakarta.xml.bind
      artifactPattern: *
      onlyIfVersionsMatch: true

```
{% endtab %}
{% endtabs %}
