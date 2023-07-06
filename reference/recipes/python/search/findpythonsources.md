# Find Python sources and collect data metrics

**org.openrewrite.python.search.FindPythonSources**

_Use data table to collect source files types and counts of files with extensions `.py`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-python/blob/main/src/main/java/org/openrewrite/python/search/FindPythonSources.java), [Issue Tracker](https://github.com/openrewrite/rewrite-python/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/1.0.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-python
* version: 1.0.3

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Python source files

_Python sources present in LSTs on the SAAS._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. |
| Source file type | The source file type that was created. |
| Language level | The version of python. |


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite:rewrite-python:1.0.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.python.search.FindPythonSources")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-python:1.0.3")
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
            <recipe>org.openrewrite.python.search.FindPythonSources</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-python</artifactId>
            <version>1.0.3</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite:rewrite-python:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.python.search.FindPythonSources
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.python.search.FindPythonSources)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
