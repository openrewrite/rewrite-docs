# Adds `TimeUnit` to timeouts and duration methods

**org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient\_5\_TimeUnit**

_Apache HttpClient 5.x Timeout and duration methods need an extra the TimeUnit argument. This recipe uses milliseconds as a default unit._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.9/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.9


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.9` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.9")
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
            <recipe>org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.9</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Adds a TimeUnit argument to the matched method invocations](../../../java/apache/httpclient5/addtimeunitargument.md)
  * methodPattern: `org.apache.hc.client5.http.config.RequestConfig.Builder setConnectionRequestTimeout(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../../java/apache/httpclient5/addtimeunitargument.md)
  * methodPattern: `org.apache.hc.client5.http.config.RequestConfig.Builder setConnectTimeout(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../../java/apache/httpclient5/addtimeunitargument.md)
  * methodPattern: `org.apache.hc.client5.http.config.RequestConfig.Builder setResponseTimeout(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../../java/apache/httpclient5/addtimeunitargument.md)
  * methodPattern: `org.apache.hc.core5.http.io.SocketConfig.Builder setSoLinger(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../../java/apache/httpclient5/addtimeunitargument.md)
  * methodPattern: `org.apache.hc.core5.http.io.SocketConfig.Builder setSoTimeout(int)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit
displayName: Adds `TimeUnit` to timeouts and duration methods
description: Apache HttpClient 5.x Timeout and duration methods need an extra the TimeUnit argument. This recipe uses milliseconds as a default unit.
recipeList:
  - org.openrewrite.java.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.client5.http.config.RequestConfig.Builder setConnectionRequestTimeout(int)
  - org.openrewrite.java.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.client5.http.config.RequestConfig.Builder setConnectTimeout(int)
  - org.openrewrite.java.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.client5.http.config.RequestConfig.Builder setResponseTimeout(int)
  - org.openrewrite.java.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.core5.http.io.SocketConfig.Builder setSoLinger(int)
  - org.openrewrite.java.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.core5.http.io.SocketConfig.Builder setSoTimeout(int)

```
{% endtab %}
{% endtabs %}

## Contributors
* [Joan Viladrosa](mailto:joan@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
