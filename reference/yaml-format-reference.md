---
description: Declaring and configuring Recipes and Styles in YAML
---

# Declarative YAML Format

There are two places OpenRewrite [YAML](https://yaml.org/) files may appear:

* Within the rewrite.yml file of a project that applies rewrite recipes via the [rewrite-gradle-plugin](gradle-plugin-configuration.md) or [rewrite-maven-plugin](rewrite-maven-plugin.md)
  * Will not be included in jars published from your project
* Inside the META-INF/rewrite folder of a jar
  * Put your recipes here if you want to redistribute and apply them to other repositories
  * See [Recipe Development Environment](../getting-started/recipe-development-environment.md) for instructions on setting up your project for recipe development
  * e.g.: [rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks/tree/master/src/main/resources/META-INF/rewrite)

In either case, these YAML files share the same format and purpose: making styles and recipes available to rewrite. A single OpenRewrite YAML file may contain any number of recipes and styles, separated by `---`.

{% hint style="info" %}
Within a YAML document recipe and style names are always fully qualified.
{% endhint %}

{% hint style="warning" %}
Don't place your custom recipes into the org.openrewrite namespace. We recommend using the same "reverse domain name" naming scheme used in Java packages.
{% endhint %}

## Recipes

The basic format of a recipe defined in YAML is:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RecipeA     # A fully qualified, unique name for this recipe
displayName: Recipe A         # A human-readable name for this recipe
description: Applies Recipe B # A human-readable description for this recipe
recipeList:                   # the list of recipes which comprise this recipe
  - com.yourorg.RecipeB:      # A fully qualified name for a recipe defined elsewhere
      exampleConfig: foo      # A configurable parameter of RecipeB
```

Consider this example declarative recipe which uses the built-in `ChangeMethodName` and `ChangePackage` recipes to rename a method and a package.

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.SayHello
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.yourorg.HelloWorld sayGoodbye()
      newMethodName: sayHello
  - org.openrewrite.java.ChangePackage:
      oldFullyQualifiedPackageName: com.yourorg.goodbye
      newFullyQualifiedPackageName: com.yourorg.hello
```
{% endcode %}

To run this recipe:

1. Put the above into a rewrite.yml file at the project root
2. Configure the [gradle plugin](gradle-plugin-configuration.md) or [maven plugin](rewrite-maven-plugin.md) with `com.yourorg.SayHello` listed as an active recipe
3. Run the "rewrite:run" maven goal or "rewriteRun" gradle task

{% hint style="success" %}
Order of recipe declaration is not important. A declarative recipe may include another declarative recipe declared later in the same file in its recipeList.
{% endhint %}

## Styles

The basic format of a Style defined in YAML is:

```yaml
---
type: specs.openrewrite.org/v1beta/style
name: com.yourorg.StyleA # A fully qualified, unique name for this style
displayName: Style A     # A human-readable name for this style
description: Applies B   # A human-readable description for this style
styleConfigs:            # The list of styles which comprise this style
  - com.yourorg.StyleB:  # The fully qualified name for a style defined elsewhere
      exampleConfig: foo # A configurable parameter of StyleB
```

{% hint style="warning" %}
While you can define whatever sort of styles you may want, the formatting recipes built into OpenRewrite itself know how to act upon styles built into OpenRewrite. A full reference for such styles will be added to this documentation soon.
{% endhint %}

Consider this example declarative style, which specifies that tabs should be used for indentation and that at least 9999 imports from a given package should be required before collapsing them into a single star import:

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

To put this style in effect for any formatting performed by OpenRewrite within the current project:

1. Put the above into a rewrite.yml file at the project root
2. Configure the [gradle plugin](gradle-plugin-configuration.md) or [maven plugin](rewrite-maven-plugin.md) with `com.yourorg.YesTabsNoStarImports` listed as the active style

The next time any OpenRewrite recipe is run any formatting it performs will take these styles into account.

