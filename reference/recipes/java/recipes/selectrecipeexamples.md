# Automatically select recipe examples from the unit test cases of a recipe

**org.openrewrite.java.recipes.SelectRecipeExamples**

_Add `@DocumentExample` to the first non-issue and not a disabled unit test of a recipe as an example, if there are not any examples yet._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/recipes/SelectRecipeExamples.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/7.41.0-SNAPSHOT/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.41.0-SNAPSHOT

## Contributors
<span style="display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: #555; color: #fff; text-align: center; line-height: 50px; font-size: 24px; text-transform: uppercase;" title="Kun Li(kun@moderne.io)">KL</span>

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.recipes.SelectRecipeExamples")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.recipes.SelectRecipeExamples</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.recipes.SelectRecipeExamples
```
{% endcode %}
{% endtab %}
{% endtabs %}


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.recipes.SelectRecipeExamples)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
