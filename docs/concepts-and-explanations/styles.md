---
description: A technical overview of styles – including when to use them and how to configure them.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

:::info
[The full style schema can be found in rewrite-core](https://github.com/openrewrite/rewrite/blob/241e146a8996a917a8a460b27d17136108b3d50a/rewrite-core/openrewrite.json#L126-L153).
:::

| Key          | Type             | Description                                                       |
|--------------|------------------|-------------------------------------------------------------------|
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

To see how you would use this style in your project, please jump to [using styles](#using-styles).

#### Style configs

The `styleConfigs` array is where you define the specific formatting rules for your style. Each entry references a style config class and its configuration options.

You can find all available Java style configs in the [rewrite-java style package](https://github.com/openrewrite/rewrite/tree/main/rewrite-java/src/main/java/org/openrewrite/java/style). Some of the most commonly used ones include:

| Style config             | Description                                           |
|--------------------------|-------------------------------------------------------|
| `TabsAndIndentsStyle`    | Tabs vs. spaces, indent size, continuation indent     |
| `SpacesStyle`            | Whitespace around operators, brackets, keywords       |
| `ImportLayoutStyle`      | Import grouping, ordering, and star import thresholds |
| `BlankLinesStyle`        | Blank lines before/after classes, methods, fields     |
| `WrappingAndBracesStyle` | Line wrapping and brace placement                     |

When creating your own style, you can combine multiple style configs to fully define your formatting preferences. If you don't configure a particular style config, OpenRewrite will do its best to detect the settings from your existing code.

#### ImportLayoutStyle

Let's take a look at one of the more complicated style configs: `ImportLayoutStyle`. This style config controls how imports are grouped, ordered, and when star imports should be used. You can adjust the following properties on it:

| Property                    | Type             | Default          | Description                                                                                            |
|-----------------------------|------------------|------------------|--------------------------------------------------------------------------------------------------------|
| `classCountToUseStarImport` | int              | 5                | How many imports from the same package must be present before collapsing into a star import            |
| `nameCountToUseStarImport`  | int              | 3                | How many static imports from the same type must be present before collapsing into a static star import |
| `layout`                    | array of strings | [IntelliJ default](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/style/IntelliJ.java#L62-L71) | An ordered list defining how imports should be grouped and ordered                                     |
| `packagesToFold`            | array of strings | empty            | Packages that should always use star imports when 1 or more types are in use                           |

**Layout syntax**

The `layout` property in `ImportLayoutStyle` accepts an array of strings that define import groupings. Each string must use one of the following formats:

| Syntax                                          | Description                                                         |
|-------------------------------------------------|---------------------------------------------------------------------|
| `<blank line>`                                  | Adds a blank line separator between import groups                   |
| `import <package>.*`                            | Match imports from a specific package, including subpackages        |
| `import <package>.* without subpackages`        | Match imports from only that exact package, not subpackages         |
| `import static <package>.*`                     | Match static imports from a specific package, including subpackages |
| `import static <package>.* without subpackages` | Match static imports from only that exact package                   |
| `import all other imports`                      | Catchall for all remaining non-static imports                       |
| `import static all other imports`               | Catchall for all remaining static imports                           |

:::warning
The layout **must** contain at least one `import all other imports` entry and one `import static all other imports` entry.
:::

**Full example**

Below is a full example of how you'd use `ImportLayoutStyle`. This example layout is very similar to the Google Java style:

```yaml
---
type: specs.openrewrite.org/v1beta/style
name: com.yourorg.CustomImportLayout
styleConfigs:
  - org.openrewrite.java.style.ImportLayoutStyle:
      classCountToUseStarImport: 999
      nameCountToUseStarImport: 999
      layout:
        - 'import java.*'
        - 'import javax.*'
        - '<blank line>'
        - 'import all other imports'
        - '<blank line>'
        - 'import static all other imports'
      packagesToFold:
        - 'import java.awt.*'
        - 'import static org.junit.jupiter.api.Assertions.*'
```

This configuration will:

* Group `java.*` imports first, then `javax.*` imports
* Add a blank line, then all other non-static imports
* Add another blank line, then all static imports
* Avoid star imports unless there are 999+ imports from the same package
* Always use star imports for `java.awt.*` and static imports from `org.junit.jupiter.api.Assertions`

### Programmatically in Java

When you go to [specify a style to use](#using-styles), the style needs to be a `NamedStyles`. A `NamedStyles` contains one or more `Style` objects.

If you want to make a style in Java, you will need to extend the `NamedStyles` class such as in our [IntelliJ style](https://github.com/openrewrite/rewrite/blob/v8.8.4/rewrite-java/src/main/java/org/openrewrite/java/style/IntelliJ.java#L28). You'll then need to make sure that your style class returns [a collection of these Style objects](https://github.com/openrewrite/rewrite/blob/v8.8.4/rewrite-java/src/main/java/org/openrewrite/java/style/IntelliJ.java#L40-L44).

When a user goes to activate your style, all of the styles provided by your style will be merged together and given precedence over any auto-detected styles. If your style does not specify a particular way to handle something, the default detected style will be used.

## Using styles

To enable a style so that it is used for any formatting performed by an OpenRewrite recipe, please:

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

Update your `build.gradle` file to include an `activeStyle` such as in:

```groovy title="build.gradle"
rewrite {
  activeRecipe("someRecipe")

  // This style is made up to have an example.
  activeStyle("com.yourorg.YesTabsNoStarImports")
}
```
</TabItem>

<TabItem value="maven" label="Maven">

Update your `pom.xml` file to include an `<activeStyles>` such as in:

```xml title="pom.xml"
<plugins>
  <plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
    <configuration>
      <activeRecipes>
        <!-- Recipes here -->
      </activeRecipes>
      <activeStyles>
        <!-- This style is made up to have an example. It isn't packaged with OpenRewrite -->
        <style>com.yourorg.YesTabsNoStarImports</style>
      </activeStyles>
    </configuration>
  </plugin>
</plugins>
```
</TabItem>

<TabItem value="maven-command-line" label="Maven command line">

Add a `-Drewrite.activeStyles` parameter to your Maven command in the terminal such as in:

```bash
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.CommonStaticAnalysis \
  -Drewrite.activeStyles=org.some.style.name
```
</TabItem>
</Tabs>

Once the style has been specified as an `activeStyle`, the next time any OpenRewrite recipe is run in that project, any formatting it performs will take these styles into account.

## Reformatting your code

If you want to reformat your code to conform to your configured style so you can ensure consistency throughout your code base, you can use the [format Java code recipe](../recipes/java/format/autoformat).

