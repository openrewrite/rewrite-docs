# Use JUnit Jupiter `@TempDir`

**org.openrewrite.java.testing.junit5.TemporaryFolderToTempDir**

_Translates JUnit 4's `org.junit.rules.TemporaryFolder` into JUnit 5's `org.junit.jupiter.api.io.TempDir`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/TemporaryFolderToTempDir.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.6

## Example


{% tabs %}
{% tab title="groovy" %}

###### Before
{% code %}
```groovy
import org.junit.Rule
import org.junit.rules.TemporaryFolder

class AbstractIntegrationTest {
    @Rule
    TemporaryFolder temporaryFolder = new TemporaryFolder()

    def setup() {
        projectDir = temporaryFolder.root
        buildFile = temporaryFolder.newFile('build.gradle')
        settingsFile = temporaryFolder.newFile('settings.gradle')
    }
}
```
{% endcode %}

###### After
{% code %}
```groovy
import org.junit.Rule
import org.junit.rules.TemporaryFolder

class AbstractIntegrationTest {
    @TempDir
    File temporaryFolder

    def setup() {
        projectDir = temporaryFolder.root
        buildFile = File.createTempFile('build.gradle', null, temporaryFolder)
        settingsFile = File.createTempFile('settings.gradle', null, temporaryFolder)
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -5,2 +5,2 @@

class AbstractIntegrationTest {
-   @Rule
-   TemporaryFolder temporaryFolder = new TemporaryFolder()
+   @TempDir
+   File temporaryFolder

@@ -10,2 +10,2 @@
    def setup() {
        projectDir = temporaryFolder.root
-       buildFile = temporaryFolder.newFile('build.gradle')
-       settingsFile = temporaryFolder.newFile('settings.gradle')
+       buildFile = File.createTempFile('build.gradle', null, temporaryFolder)
+       settingsFile = File.createTempFile('settings.gradle', null, temporaryFolder)
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.6` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.TemporaryFolderToTempDir")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.6")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.TemporaryFolderToTempDir</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.6</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.TemporaryFolderToTempDir
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* Patrick Way
* [Sam Snyder](mailto:sam@moderne.io)
* [Greg Adams](mailto:greg@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Michael Keppler](mailto:bananeweizen@gmx.de)
* [Aaron Gershman](mailto:aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.TemporaryFolderToTempDir)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
