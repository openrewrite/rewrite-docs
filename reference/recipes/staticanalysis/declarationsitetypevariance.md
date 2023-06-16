# Properly use declaration-site type variance

**org.openrewrite.staticanalysis.DeclarationSiteTypeVariance**

_Currently, Java requires use-site type variance, so if someone has `Function<IN, OUT>` method parameter, it should rather be `Function<? super IN, ? extends OUT>`. Unfortunately, it is not easy to notice that `? super` and `? extends` is missing, so this recipe adds it where that would improve the situation._

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/DeclarationSiteTypeVariance.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `List` | variantTypes | A list of well-known classes that have in/out type variance. |
| `List` | excludedBounds | *Optional*. A list of bounds that should not receive explicit variance. Globs supported. |
| `Boolean` | excludeFinalClasses | *Optional*. If true, do not add `? extends` variance to final classes. `? super` variance will be added regardless of finality. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|variantTypes|`List.of("java.util.function.Function<IN, OUT>")`|
|excludedBounds|`List.of("java.lang.*")`|
|excludeFinalClasses|`true`|


###### Unchanged
{% code title="In.java" %}
```java
interface In {}
interface Out {}
```
{% endcode %}

{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.util.function.Function;
class Test {
    void test(Function<In, Out> f) {
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.function.Function;
class Test {
    void test(Function<? super In, ? extends Out> f) {
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -3,1 +3,1 @@
-    void test(Function<In, Out> f) {
+    void test(Function<? super In, ? extends Out> f) {
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DeclarationSiteTypeVarianceExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DeclarationSiteTypeVarianceExample
displayName: Properly use declaration-site type variance example
recipeList:
  - org.openrewrite.staticanalysis.DeclarationSiteTypeVariance:
      variantTypes: java.util.function.Function<IN, OUT>
      excludedBounds: java.lang.*
      excludeFinalClasses: null
```
{% endcode %}

Now that `com.yourorg.DeclarationSiteTypeVarianceExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-static-analysis:1.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("com.yourorg.DeclarationSiteTypeVarianceExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.1")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven" %}
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
            <recipe>com.yourorg.DeclarationSiteTypeVarianceExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.staticanalysis.DeclarationSiteTypeVariance)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
