# Change type alias

**org.openrewrite.kotlin.ChangeTypeAlias**

_Change a given type alias to another._

## Source

[Github](https://github.com/openrewrite/rewrite-kotlin/blob/main/src/main/java/org/openrewrite/kotlin/ChangeTypeAlias.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kotlin/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-kotlin/0.5.0-SNAPSHOT/jar)

* groupId: org.openrewrite
* artifactId: rewrite-kotlin
* version: 0.5.0-SNAPSHOT

## Contributors
<span style="display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: #555; color: #fff; text-align: center; line-height: 50px; font-size: 24px; text-transform: uppercase;" title="traceyyoshima(tracey.yoshima@gmail.com)">T</span>
## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | aliasName | Name of the alias type. |
| `String` | newName | Name of the alias type. |
| `String` | fullyQualifiedAliasedType | Fully-qualified class name of the aliased type. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeTypeAliasExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeTypeAliasExample
displayName: Change type alias example
recipeList:
  - org.openrewrite.kotlin.ChangeTypeAlias:
      aliasName: OldAlias
      newName: NewAlias
      fullyQualifiedAliasedType: org.junit.Assume
```
{% endcode %}

Now that `com.yourorg.ChangeTypeAliasExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-kotlin:0.5.0-SNAPSHOT in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("com.yourorg.ChangeTypeAliasExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-kotlin:0.5.0-SNAPSHOT")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeTypeAliasExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-kotlin</artifactId>
            <version>0.5.0-SNAPSHOT</version>
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


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.kotlin.ChangeTypeAlias)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
