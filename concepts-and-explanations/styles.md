# Styles

A style is a programmatic way of defining what your code visually looks like. Do you use tabs or spaces? How many spaces is a tab composed of? When do you make a new line vs. not? These are all questions that are answered by a style.

Styles, by themselves, cannot be directly applied to your code. Instead, styles are used when a recipe makes changes to your code. For example, if a recipe was going to add a new method to an existing file, the style would determine things like how it's capitalized, what spaces exist or don't exist between params, and whether the `{` should go on a new line or not.

By default, when you run a recipe, OpenRewrite will look at the existing code in your project to determine what "style" you have. It will then do its best to ensure recipes produce code according to that style.

There may be some cases where you want to ensure a recipe outputs code in a different style, though. In that case, OpenRewrite allows you to programmatically define and use a style.

Let's walk through everything you need to know to do this.

## Developing styles

There are two ways you can create a style: via a [declarative YAML file](../reference/yaml-format-reference.md) (**recommended**) or programmatically in Java.

### Declarative styles

There are two places where you can declaratively define a YAML style:

1. In the `rewrite.yml` file of a project that applies rewrite recipes via the [rewrite gradle plugin](../reference/gradle-plugin-configuration.md) or the [rewrite maven plugin](../reference/rewrite-maven-plugin.md).
2. Inside the `META-INF/rewrite` folder that gets bundled into the JAR for your project.

If you define a style in the `rewrite.yml` file, it _will not_ be included in the JARs published from your project.

If you want to distribute a style and apply it to other projects, you'll need to create it inside of the `META-INF/rewrite` folder of a JAR.

#### Format

Regardless of where you define the style, the style must adhere to the following format:

{% hint style="info" %}
You can find the full style schema [here](https://github.com/openrewrite/rewrite/blob/241e146a8996a917a8a460b27d17136108b3d50a/rewrite-core/openrewrite.json#L126-L153).
{% endhint %}

| Key          | Type             | Description                                                       |
| ------------ | ---------------- | ----------------------------------------------------------------- |
| type         | const            | A constant: `specs.openrewrite.org/v1beta/style`                  |
| name         | string           | A fully qualified, unique name for this style                     |
| displayName  | string           | A human-readable name for this style (does not end with a period) |
| description  | string           | A human-readable description for this style (ends with a period)  |
| tags         | array of strings | A list of strings that help categorize this style                 |
| styleConfigs | array of styles  | The list of styles which comprise this style                      |

#### Example

This style specifies that tabs should be used for indentation and that at least 9999 imports from a given package should be required before collapsing them into a single star import:

```yaml
---
type: specs.openrewrite.org/v1beta/style
name: com.yourorg.YesTabsNoStarImports
styleConfigs:
  - org.openrewrite.java.style.TabsAndIndentsStyle:
      useTabCharacter: true
  - org.openrewrite.java.style.ImportLayoutStyle:
      classCountToUseStarImport: 9999
```

To see how you would use this style in your project, please jump to [using styles](styles.md#using-styles).

### Programmatically in Java

When you go to [specify a style to use](styles.md#using-styles), the style needs to be a `NamedStyles`. A `NamedStyles` contains one or more `Style` objects.

If you want to make a style in Java, you will need to extend the `NamedStyles` class such as in our [IntelliJ style](https://github.com/openrewrite/rewrite/blob/v8.8.4/rewrite-java/src/main/java/org/openrewrite/java/style/IntelliJ.java#L28). You'll then need to make sure that your style class returns [a collection of these Style objects](https://github.com/openrewrite/rewrite/blob/v8.8.4/rewrite-java/src/main/java/org/openrewrite/java/style/IntelliJ.java#L40-L44).

When a user goes to activate your style, all of the styles provided by your style will be merged together and given precedence over any auto-detected styles. If your style does not specify a particular way to handle something, the default detected style will be used.

## Using styles

To enable a style so that it is used for any formatting performed by an OpenRewrite recipe, please:

{% tabs %}
{% tab title="Gradle" %}
Update your `build.gradle` file to include an `activeStyle` such as in:

```groovy
rewrite {
  activeRecipe("someRecipe")

  // This style is made up for the sake of example.
  activeStyle("com.yourorg.YesTabsNoStarImports")
}
```
{% endtab %}

{% tab title="Maven" %}
Update your `pom.xml` file to include an `<activeStyles>` such as in:

```xml
<plugins>
  <plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>5.40.2</version>
    <configuration>
      <activeRecipes>
        <!-- Recipes here -->
      </activeRecipes>
      <activeStyles>
        <!-- This style is made up for sake of example. It isn't packaged with OpenRewrite -->
        <style>com.yourorg.YesTabsNoStarImports</style>
      </activeStyles>
    </configuration>
  </plugin>
</plugins>
```
{% endtab %}

{% tab title="Maven command line" %}
Add a `-Drewrite.activeStyles` parameter to your Maven command in the terminal such as in:

```bash
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.CommonStaticAnalysis \
  -Drewrite.activeStyles=org.some.style.name
```
{% endtab %}
{% endtabs %}

Once the style has been specified as an `activeStyle`, the next time any OpenRewrite recipe is run in that project, any formatting it performs will take these styles into account.

## Reformatting your code

If you want to reformat your code to conform to your configured style so you can ensure consistency throughout your code base, you can use the [format Java code recipe](https://docs.openrewrite.org/recipes/java/format/autoformat). &#x20;

