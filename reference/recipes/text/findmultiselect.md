# Experimental find text with multiselect

**org.openrewrite.text.FindMultiselect**

_Search for text, treating all textual sources as plain text. This version of the recipe exists to experiment with multiselect recipe options._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/text/FindMultiselect.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-core/8.17.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 8.17.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | find | The text to find. This snippet can be multiline. | `blacklist` |
| `Boolean` | regex | *Optional*. If true, `find` will be interpreted as a Regular Expression. Default `false`. |  |
                        | `Set` | regexOptions | *Optional*. Regex processing options. Multiple options may be specified. These options do nothing if `regex` mode is not enabled.
* Case-sensitive - The search will be sensitive to letter case. * Multiline - Allows `^` and `$` to match the beginning and end of lines, respectively.* Dot all - Allows `.` to match line terminators. Valid options: `Case-sensitive`, `Multiline`, `Dot all` |  |
| `String` | filePattern | A glob expression that can be used to constrain which directories or source files should be searched. Multiple patterns may be specified, separated by a semicolon `;`. If multiple patterns are supplied any of the patterns matching will be interpreted as a match. When not set, all source files are searched.  | `**/*.java` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindMultiselectExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindMultiselectExample
displayName: Experimental find text with multiselect example
recipeList:
  - org.openrewrite.text.FindMultiselect:
      find: blacklist
      filePattern: '**/*.java'
```
{% endcode %}

Now that `com.yourorg.FindMultiselectExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.8.4")
}

rewrite {
    activeRecipe("com.yourorg.FindMultiselectExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.23.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindMultiselectExample</recipe>
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
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe FindMultiselectExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.text.FindMultiselect)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim@moderne.io)
