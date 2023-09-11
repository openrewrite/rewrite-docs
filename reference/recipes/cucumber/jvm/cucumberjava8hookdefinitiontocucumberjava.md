# Replace `cucumber-java8` hook definition with `cucumber-java`

**org.openrewrite.cucumber.jvm.CucumberJava8HookDefinitionToCucumberJava**

_Replace `LambdaGlue` hook definitions with new annotated methods with the same body._

## Source

[GitHub](https://github.com/openrewrite/rewrite-cucumber-jvm/blob/main/src/main/java/org/openrewrite/cucumber/jvm/CucumberJava8HookDefinitionToCucumberJava.java), [Issue Tracker](https://github.com/openrewrite/rewrite-cucumber-jvm/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-cucumber-jvm/1.0.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cucumber-jvm
* version: 1.0.6


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-cucumber-jvm:1.0.6` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("org.openrewrite.cucumber.jvm.CucumberJava8HookDefinitionToCucumberJava")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-cucumber-jvm:1.0.6")
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
            <recipe>org.openrewrite.cucumber.jvm.CucumberJava8HookDefinitionToCucumberJava</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-cucumber-jvm</artifactId>
            <version>1.0.6</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cucumber-jvm:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.cucumber.jvm.CucumberJava8HookDefinitionToCucumberJava
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tim te Beek](mailto:tim@moderne.io)
* renovate[bot]


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.cucumber.jvm.CucumberJava8HookDefinitionToCucumberJava)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
