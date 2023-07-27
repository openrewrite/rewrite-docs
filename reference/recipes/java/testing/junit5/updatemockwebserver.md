# OkHttp 3.x `MockWebServer` `@Rule` To 4.x `MockWebServer`

**org.openrewrite.java.testing.junit5.UpdateMockWebServer**

_Replace usages of okhttp3 3.x `@Rule` MockWebServer with 4.x `MockWebServer`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/UpdateMockWebServer.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.8/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.8

## Example


{% tabs %}
{% tab title="MyTest.java" %}

###### Before
{% code title="MyTest.java" %}
```java
import okhttp3.mockwebserver.MockWebServer;
import org.junit.Rule;
class MyTest {
    @Rule
    public MockWebServer server = new MockWebServer();
}
```
{% endcode %}

###### After
{% code title="MyTest.java" %}
```java
import okhttp3.mockwebserver.MockWebServer;
import org.junit.jupiter.api.AfterEach;

import java.io.IOException;

class MyTest {
    public MockWebServer server = new MockWebServer();

    @AfterEach
    void afterEachTest() throws IOException {
        server.close();
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- MyTest.java
+++ MyTest.java
@@ -2,1 +2,4 @@
import okhttp3.mockwebserver.MockWebServer;
-import org.junit.Rule;
+import org.junit.jupiter.api.AfterEach;
+
+import java.io.IOException;
+
class MyTest {
@@ -4,1 +7,0 @@
import org.junit.Rule;
class MyTest {
-   @Rule
    public MockWebServer server = new MockWebServer();
@@ -6,0 +8,5 @@
    @Rule
    public MockWebServer server = new MockWebServer();
+
+   @AfterEach
+   void afterEachTest() throws IOException {
+       server.close();
+   }
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.8` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.UpdateMockWebServer")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.8")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.UpdateMockWebServer</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.8</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.UpdateMockWebServer
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `com.squareup.okhttp3`
  * artifactId: `mockwebserver`
  * newVersion: `4.X`
  * overrideManagedVersion: `false`
  * retainVersions: `[]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.UpdateMockWebServer
displayName: OkHttp 3.x `MockWebServer` `@Rule` To 4.x `MockWebServer`
description: Replace usages of okhttp3 3.x `@Rule` MockWebServer with 4.x `MockWebServer`.
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: com.squareup.okhttp3
      artifactId: mockwebserver
      newVersion: 4.X
      overrideManagedVersion: false
      retainVersions: []

```
{% endtab %}
{% endtabs %}

## Contributors
* [Knut Wannheden](mailto:knut@moderne.io)
* Patrick Way
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Michael Keppler](mailto:bananeweizen@gmx.de)
* [Tim te Beek](mailto:tim@moderne.io)
* [Kun Li](mailto:kun@moderne.io)
* [Aaron Gershman](mailto:aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.UpdateMockWebServer)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
