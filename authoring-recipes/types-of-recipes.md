# Types of recipes

Before you jump into coding recipes, it's important to figure out what type of recipe you're going to make.

OpenRewrite offers support for three different types of recipes: declarative, refaster, and imperative. Each of these has its own advantages and disadvantages depending on the type of recipe you want to build. 

In this doc, we'll briefly describe each of these so that you can determine what type of recipe works best for your needs. 

## Declarative recipes

[Declarative recipes](/reference/yaml-format-reference.md) are the simplest and most common recipes. They are entirely written in YAML, and they generally tie together existing recipes while adding some light configuration to them.

The [common static analysis recipe](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/common-static-analysis.yml) is a great example of this. It takes a bunch of simple recipes relating to static analysis and combines them into one larger recipe that can be run more easily. It does not add any logic, and it doesn't change the existing recipes.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.CommonStaticAnalysis
displayName: Common static analysis issues
description: Resolve common static analysis issues discovered through 3rd party tools.
recipeList:
  - org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet
  - org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums
  - org.openrewrite.staticanalysis.BooleanChecksNotInverted
  - org.openrewrite.staticanalysis.CaseInsensitiveComparisonsDoNotChangeCase
  - org.openrewrite.staticanalysis.CatchClauseOnlyRethrows
  - org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls
  # ...
---
```

Another good example that demonstrates how you can use a declarative recipe to define a complex migration recipe is the [ApacheHttpClient migration recipe](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-5.yml):

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5
displayName: Migrate to ApacheHttpClient 5.x
description: >
  Migrate applications to the latest Apache HttpClient 5.x release. This recipe will modify an
  application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have
  changes between versions.
tags:
  - apache
  - httpclient
recipeList:
  - org.openrewrite.java.apache.httpclient4.UpgradeApacheHttpClient_4_5
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.apache.httpcomponents
      oldArtifactId: httpclient
      newGroupId: org.apache.httpcomponents.client5
      newArtifactId: httpclient5
      newVersion: 5.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.apache.httpcomponents
      oldArtifactId: httpcore
      newGroupId: org.apache.httpcomponents.core5
      newArtifactId: httpcore5
      newVersion: 5.1.x
  - org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping
  - org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods
  - org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit
  - org.openrewrite.java.apache.httpclient5.StatusLine
---
```

{% hint style="success" %}
As a best practice, if your recipe can be declarative (meaning it can be built out of other recipes), then you should make it declarative.
{% endhint %}

{% hint style="success" %}
Want to use a UI to build declarative recipes rather than trying to figure out all the keys on your own and manually typing out the recipes? Check out the [Moderne recipe builder](https://app.moderne.io/recipes/builder).
{% endhint %}

## Refaster template recipes

Refaster template recipes are the "middle ground" of recipes. They offer more functionality than [declarative recipes](#declarative-recipes), but not as much as [imperative recipes](#imperative-recipes). On the other hand, compared to an imperative recipe, they're much quicker to create and require much less knowledge to get started.

Refaster template recipes can only be used to replace one expression with another – or one statement with another. Because of that, they're ideal for straightforward replacements such as converting `StringUtils.equals(..)` to `Objects.equals(..)`. These are more than just a string replacement, though; they offer compiler and type support.

To make Refaster template recipes, you will create [Refaster templates](https://errorprone.info/docs/refaster) that will get automatically converted to Refaster template recipes when you build your repository.

{% hint style="info" %}
While these recipes support Refaster template syntax, OpenRewrite **does not** invoke Refaster or ErrorProne. Instead, we generate OpenRewrite recipes from those templates.
{% endhint %}

Refaster template recipes can also be used as a starting point for more complex recipe implementations. This is due to the fact that, when you define a Refaster template, an imperative recipe is what is actually created behind the scenes. You can find these imperative recipes in the `build` directory after you've built your repository.

{% hint style="info" %}
If you want to learn more about Refaster, in general, check out the [Error Prone Refaster docs](https://errorprone.info/docs/refaster). Please note, though, that not all annotations available in those docs are available in Moderne.
{% endhint %}

A variety of refaster templates can be found in the [StringRules](https://github.com/openrewrite/rewrite-migrate-java/blob/v2.1.1/src/main/java/org/openrewrite/java/migrate/lang/StringRules.java#L23-L48) class in `rewrite-migrate-java`:

```java
@RecipeDescriptor(
        name = "Replace redundant `String` method calls with self",
        description = "Replace redundant `substring(..)` and `toString()` method calls with the `String` self."
)
@SuppressWarnings("StringOperationCanBeSimplified")
public static class RedundantCall {
    @BeforeTemplate
    public String start(String string) {
        return string.substring(0, string.length());
    }

    @BeforeTemplate
    public String startAndEnd(String string) {
        return string.substring(0);
    }

    @BeforeTemplate
    public String toString(String string) {
        return string.toString();
    }

    @AfterTemplate
    public String self(String string) {
        return string;
    }
}
```

## Imperative recipes

[Imperative recipes](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe) offer the most freedom and functionality at the cost of being more difficult to create. They allow you to write Java code to implement your recipe.

Imperative recipes are ideal for situations where there is a lot of complexity or nuance needed to determine what should be changed or what it should be changed into. For instance, if you wanted to write a recipe that added the `final` modifier to any local variables that aren't reassigned, you would need to create an imperative recipe as refaster templates don't have the ability to determine whether a variable has been reassigned.

If your recipe can be defined via a declarative YAML file or via a refaster template, you should do so -- even if you can technically create an imperative recipe that does the same thing.

The [FinalizeLocalVariables recipe](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/FinalizeLocalVariables.java) is a great example of an imperative recipe.

## Next steps

* If you want more information about the types of recipes and the recipe execution pipeline, please see our [recipes documentation](/concepts-and-explanations/recipes.md)
* If you want to write your own imperative recipe, please check out the [writing a Java refactoring recipe](/authoring-recipes/writing-a-java-refactoring-recipe.md) guide.
* If you want to learn more about how to test recipes, please see our [recipe testing guide](/authoring-recipes/recipe-testing.md)