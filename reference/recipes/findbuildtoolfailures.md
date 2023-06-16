# Find source files with `BuildToolFailure` markers

**org.openrewrite.FindBuildToolFailures**

_This recipe explores build tool failures after an LST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/FindBuildToolFailures.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-core/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | suppressLogOutput | *Optional*. Default false. If true, the `logOutput` column will be empty in the output table. |

## Data Tables (Only available on the [Moderne platform](https://public.moderne.io/))

### Build tool failures

_Log output of failed build tool runs along with exit code and further diagnostics._

| Column Name | Description |
| ----------- | ----------- |
| Type | The type of build tool that failed. |
| Version | The version of the build tool that failed, if available. |
| Command | The command that was executed. |
| Exit code | The exit code of the build tool run. |
| Required Java version | The required Java version for the build, if detectable. |
| Log output | The log output of the build tool run. |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.FindBuildToolFailures")
}

repositories {
    mavenCentral()
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
            <recipe>org.openrewrite.FindBuildToolFailures</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.FindBuildToolFailures
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tim te Beek](tim@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Mike Solomon](mike@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.FindBuildToolFailures)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
