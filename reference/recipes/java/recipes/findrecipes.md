# Find OpenRewrite recipes

**org.openrewrite.java.recipes.FindRecipes**

_This recipe finds all OpenRewrite recipes, primarily to produce a data table that is being used to experiment with fine-tuning a large language model to produce more recipes._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/recipes/FindRecipes.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Data Tables (Only available on the [Moderne platform](https://public.moderne.io/))

### Rewrite recipe source code

_This table contains the source code of recipes along with their metadata for use in an experiment fine-tuning large language models to produce more recipes._

| Column Name | Description |
| ----------- | ----------- |
| Recipe name | The name of the recipe. |
| Recipe description | The description of the recipe. |
| Recipe type | Differentiate between Java and YAML recipes, as they may be two independent data sets used in LLM fine-tuning. |
| Recipe source code | The full source code of the recipe. |

## Example


{% tabs %}
{% tab title="MyRecipe.java" %}

###### Before
{% code title="MyRecipe.java" %}
```java
import org.openrewrite.internal.lang.NonNullApi;
import org.openrewrite.Recipe;

@NonNullApi
class MyRecipe extends Recipe {
  @Override
  public String getDisplayName() {
      return "My recipe";
  }

  @Override
  public String getDescription() {
      return "This is my recipe.";
  }
}
```
{% endcode %}

###### After
{% code title="MyRecipe.java" %}
```java
import org.openrewrite.internal.lang.NonNullApi;
import org.openrewrite.Recipe;

@NonNullApi
class /*~~>*/MyRecipe extends Recipe {
  @Override
  public String getDisplayName() {
      return "My recipe";
  }

  @Override
  public String getDescription() {
      return "This is my recipe.";
  }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- MyRecipe.java
+++ MyRecipe.java
@@ -5,1 +5,1 @@
-class MyRecipe extends Recipe {
+class /*~~>*/MyRecipe extends Recipe {
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.recipes.FindRecipes")
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
            <recipe>org.openrewrite.java.recipes.FindRecipes</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.recipes.FindRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.recipes.FindRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
