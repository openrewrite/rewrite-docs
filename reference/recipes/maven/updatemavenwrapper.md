# Update Maven wrapper

**org.openrewrite.maven.UpdateMavenWrapper**

_Update the version of Maven used in an existing Maven wrapper._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/UpdateMavenWrapper.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.15.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.15.2

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | wrapperVersion | *Optional*. An exact version number or node-style semver selector used to select the wrapper version number. | `3.x` |
                        | `String` | wrapperDistribution | *Optional*. The distribution of the Maven wrapper to use.

* "bin" uses a `maven-wrapper.jar` compiled binary.
* "only-script" uses a lite version of `mvnw`/`mvnw.cmd` using wget/curl or powershell. (required wrapper 3.2.0 or newer)
* "script" downloads `maven-wrapper.jar` or `MavenWrapperDownloader.java` to then download a full distribution.
* "source" uses `MavenWrapperDownloader.java` source file.

Defaults to "bin". Valid options: `bin`, `only-script`, `script`, `source` |  |
| `String` | distributionVersion | *Optional*. An exact version number or node-style semver selector used to select the Maven version number. | `3.x` |
| `String` | repositoryUrl | *Optional*. The URL of the repository to download the Maven wrapper and distribution from. Supports repositories with a Maven layout. Defaults to `https://repo.maven.apache.org/maven2`. | `https://repo.maven.apache.org/maven2` |
| `Boolean` | addIfMissing | *Optional*. Add a Maven wrapper, if it's missing. Defaults to `true`. |  |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}

{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.maven.UpdateMavenWrapper</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.maven.UpdateMavenWrapper
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpdateMavenWrapper
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.UpdateMavenWrapper)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
