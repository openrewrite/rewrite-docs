# URIs created with an HTTP scheme

**org.openrewrite.analysis.search.UriCreatedWithHttpScheme**

_This is a sample recipe demonstrating a simple application of local data flow analysis._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-analysis/blob/main/src/main/java/org/openrewrite/analysis/search/UriCreatedWithHttpScheme.java), [Issue Tracker](https://github.com/openrewrite/rewrite-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.meta/rewrite-analysis/2.2.1/jar)

* groupId: org.openrewrite.meta
* artifactId: rewrite-analysis
* version: 2.2.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.meta:rewrite-analysis:2.2.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.4")
}

rewrite {
    activeRecipe("org.openrewrite.analysis.search.UriCreatedWithHttpScheme")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.meta:rewrite-analysis:2.2.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.6.4") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.meta:rewrite-analysis:2.2.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.analysis.search.UriCreatedWithHttpScheme")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
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
        <version>5.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.analysis.search.UriCreatedWithHttpScheme</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.meta</groupId>
            <artifactId>rewrite-analysis</artifactId>
            <version>2.2.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.meta:rewrite-analysis:RELEASE -Drewrite.activeRecipes=org.openrewrite.analysis.search.UriCreatedWithHttpScheme
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UriCreatedWithHttpScheme
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.analysis.search.UriCreatedWithHttpScheme)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Leitschuh](mailto:Jonathan.Leitschuh@gmail.com), [aaronist](mailto:aaronmblume@gmail.com), [Knut Wannheden](mailto:knut@moderne.io)
