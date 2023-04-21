# Add explicit JAX-WS dependencies

**org.openrewrite.java.migrate.javax.AddJaxwsDependencies**

_This recipe will add explicit dependencies for Jakarta EE 8 when a Java 8 application is using JAX-WS. Any existing dependencies will be upgraded to the latest version of Jakarta EE 8. **The artifacts are moved to Jakarta EE 8 but the application can continue to use the `javax.xml.bind` namespace._

### Tags

* jaxb
* glassfish
* javax
* java11
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-11.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.20.0/jar)

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
    activeRecipe("org.openrewrite.java.migrate.javax.AddJaxwsDependencies")
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
            <recipe>org.openrewrite.java.migrate.javax.AddJaxwsDependencies</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.AddJaxwsDependencies
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `com.sun.xml.ws`
  * artifactId: `jaxws-ri`
* [Remove Maven managed dependency](../../../maven/removemanageddependency.md)
  * groupId: `com.sun.xml.ws`
  * artifactId: `jaxws-ri`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `javax.xml.ws`
  * oldArtifactId: `jaxws-api`
  * newGroupId: `jakarta.xml.ws`
  * newArtifactId: `jakarta.xml.ws-api`
  * newVersion: `2.3.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `javax.xml.ws`
  * oldArtifactId: `jaxws-api`
  * newGroupId: `jakarta.xml.ws`
  * newArtifactId: `jakarta.xml.ws-api`
  * newVersion: `2.3.x`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.xml.ws`
  * artifactId: `jakarta.xml.ws-api`
  * version: `2.3.x`
  * onlyIfUsing: `javax.jws..*`
  * acceptTransitive: `true`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.xml.ws`
  * artifactId: `jakarta.xml.ws-api`
  * newVersion: `2.3.x`
* [Use the latest JAX-WS API and runtime for Jakarta EE 8](../../../java/migrate/javax/addjaxwsruntime.md)
* [Remove redundant explicit dependency versions](../../../maven/removeredundantdependencyversions.md)
  * groupPattern: `jakarta.xml.ws`
  * artifactPattern: `*`
  * onlyIfVersionsMatch: `true`
* [Remove redundant explicit dependency versions](../../../maven/removeredundantdependencyversions.md)
  * groupPattern: `com.sun.xml.ws`
  * artifactPattern: `*`
  * onlyIfVersionsMatch: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.AddJaxwsDependencies
displayName: Add explicit JAX-WS dependencies
description: This recipe will add explicit dependencies for Jakarta EE 8 when a Java 8 application is using JAX-WS. Any existing dependencies will be upgraded to the latest version of Jakarta EE 8. **The artifacts are moved to Jakarta EE 8 but the application can continue to use the `javax.xml.bind` namespace.

tags:
  - jaxb
  - glassfish
  - javax
  - java11
  - jakarta
recipeList:
  - org.openrewrite.maven.RemoveDependency:
      groupId: com.sun.xml.ws
      artifactId: jaxws-ri
  - org.openrewrite.maven.RemoveManagedDependency:
      groupId: com.sun.xml.ws
      artifactId: jaxws-ri
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: javax.xml.ws
      oldArtifactId: jaxws-api
      newGroupId: jakarta.xml.ws
      newArtifactId: jakarta.xml.ws-api
      newVersion: 2.3.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: javax.xml.ws
      oldArtifactId: jaxws-api
      newGroupId: jakarta.xml.ws
      newArtifactId: jakarta.xml.ws-api
      newVersion: 2.3.x
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.xml.ws
      artifactId: jakarta.xml.ws-api
      version: 2.3.x
      onlyIfUsing: javax.jws..*
      acceptTransitive: true
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.xml.ws
      artifactId: jakarta.xml.ws-api
      newVersion: 2.3.x
  - org.openrewrite.java.migrate.javax.AddJaxwsRuntime
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      groupPattern: jakarta.xml.ws
      artifactPattern: *
      onlyIfVersionsMatch: true
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      groupPattern: com.sun.xml.ws
      artifactPattern: *
      onlyIfVersionsMatch: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.javax.AddJaxwsDependencies)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
