# Migrate deprecated `ActuatorMediaType` to `ApiVersion#getProducedMimeType`

**org.openrewrite.java.spring.boot2.MigrateActuatorMediaTypeToApiVersion**

_Spring Boot `ActuatorMediaType` was deprecated in 2.5 in favor of `ApiVersion#getProducedMimeType()`. Replace `MediaType.parseMediaType(ActuatorMediaType.Vx_JSON)` with `MediaType.asMediaType(ApiVersion.Vx.getProducedMimeType())`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/MigrateActuatorMediaTypeToApiVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="T.java" %}

###### Before
{% code title="T.java" %}
```java
import org.springframework.boot.actuate.endpoint.http.ActuatorMediaType;
import org.springframework.http.MediaType;

class T {
    private static final MediaType actuatorMediaType2 = MediaType.parseMediaType(ActuatorMediaType.V2_JSON);
    private static final MediaType actuatorMediaType3 = MediaType.parseMediaType(ActuatorMediaType.V3_JSON);
}
```
{% endcode %}

###### After
{% code title="T.java" %}
```java
import org.springframework.boot.actuate.endpoint.ApiVersion;
import org.springframework.http.MediaType;

class T {
    private static final MediaType actuatorMediaType2 = MediaType.asMediaType(ApiVersion.V2.getProducedMimeType());
    private static final MediaType actuatorMediaType3 = MediaType.asMediaType(ApiVersion.V3.getProducedMimeType());
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- T.java
+++ T.java
@@ -1,1 +1,1 @@
-import org.springframework.boot.actuate.endpoint.http.ActuatorMediaType;
+import org.springframework.boot.actuate.endpoint.ApiVersion;
@@ -5,2 +5,2 @@
-    private static final MediaType actuatorMediaType2 = MediaType.parseMediaType(ActuatorMediaType.V2_JSON);
    private static final MediaType actuatorMediaType3 = MediaType.parseMediaType(ActuatorMediaType.V3_JSON);
+    private static final MediaType actuatorMediaType2 = MediaType.asMediaType(ApiVersion.V2.getProducedMimeType());
    private static final MediaType actuatorMediaType3 = MediaType.asMediaType(ApiVersion.V3.getProducedMimeType());
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateActuatorMediaTypeToApiVersion")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.MigrateActuatorMediaTypeToApiVersion</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateActuatorMediaTypeToApiVersion
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick](patway99@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.MigrateActuatorMediaTypeToApiVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
