# Add missing `@Override` to overriding and implementing methods

**org.openrewrite.staticanalysis.MissingOverrideAnnotation**

_Adds `@Override` to methods overriding superclass methods or implementing interface methods. Annotating methods improves readability by showing the author's intent to override. Additionally, when annotated, the compiler will emit an error when a signature of the overridden method does not match the superclass method._

### Tags

* RSPEC-1161

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/MissingOverrideAnnotation.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.1.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | ignoreAnonymousClassMethods | *Optional*. When enabled, ignore missing annotations on methods which override methods when the class definition is within an anonymous class. |


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.1.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.10")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.MissingOverrideAnnotation")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.1.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.5.10") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.1.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.staticanalysis.MissingOverrideAnnotation")
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
        <version>5.14.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.MissingOverrideAnnotation</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.1.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.MissingOverrideAnnotation
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MissingOverrideAnnotation
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.MissingOverrideAnnotation)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Aaron Gershman](mailto:aegershman@gmail.com), [Sam Snyder](mailto:sam@moderne.io), Tyler Van Gorder, [Jonathan Schneider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut@moderne.io)
