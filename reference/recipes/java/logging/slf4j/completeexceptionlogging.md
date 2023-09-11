# Enhances logging of exceptions by including the full stack trace in addition to the exception message

**org.openrewrite.java.logging.slf4j.CompleteExceptionLogging**

_It is a common mistake to call `Exception.getMessage()` when passing an exception into a log method. Not all exception types have useful messages, and even if the message is useful this omits the stack trace. Including a complete stack trace of the error along with the exception message in the log allows developers to better understand the context of the exception and identify the source of the error more quickly and accurately. 
 If the method invocation includes any call to `Exception.getMessage()` or `Exception.getLocalizedMessage()` and not an exception is already passed as the last parameter to the log method, then we will append the exception as the last parameter in the log method._

### Tags

* slf4j
* logging

## Source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/slf4j/CompleteExceptionLogging.java), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.0.3


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.0.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.CompleteExceptionLogging")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.0.3")
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
        <version>5.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.CompleteExceptionLogging</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.0.3</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.CompleteExceptionLogging
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](mailto:kun@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.CompleteExceptionLogging)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
