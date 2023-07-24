# Find source files with `ParseExceptionResult` markers

**org.openrewrite.FindParseFailures**

_This recipe explores parse failures after an LST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/FindParseFailures.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-core/8.1.12/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 8.1.12

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Integer` | maxSnippetLength | *Optional*. When the failure occurs on a granular tree element, its source code will be included as a column in the data table up to this maximum snippet length. |
| `String` | parserType | *Optional*. Only display specified parser failures. |
| `String` | stackTrace | *Optional*. Only mark specified stack traces. |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Parser failures

_A list of files that failed to parse along with stack traces of their failures._

| Column Name | Description |
| ----------- | ----------- |
| Parser | The parser implementation that failed. |
| Source path | The file that failed to parse. |
| Exception type | The class name of the exception that produce the parse failure. |
| Tree type | The type of the tree element that was being parsed when the failure occurred. This can refer either to the intended target OpenRewrite Tree type or a parser or compiler internal tree type that we couldn't determine how to map. |
| Snippet | The code snippet that the failure occurred on. Omitted when the parser fails on the whole file. |
| Stack trace | The stack trace of the failure. |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.FindParseFailures")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.FindParseFailures</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.FindParseFailures
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Shannon Pamperl](mailto:shanman190@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Mike Solomon](mailto:mike@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.FindParseFailures)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
