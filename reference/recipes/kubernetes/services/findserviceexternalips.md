# Find uses of `externalIP`

** org.openrewrite.kubernetes.services.FindServiceExternalIPs**
_Find any `Service` whose `externalIP` list contains, or does not contain, one of a list of IPs._

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.10.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.10.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Set` | externalIPs | The list of IP addresses of which at least one external IP should . |
| `boolean` | findMissing | *Optional*. Whether to treat this search as finding Services whose externalIPs do not contain any of the query IPs. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindServiceExternalIPsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindServiceExternalIPsExample
displayName: Find uses of `externalIP` example
recipeList:
  - org.openrewrite.kubernetes.services.FindServiceExternalIPs:
      externalIPs: 192.168.0.1
      findMissing: null
      fileMatcher: **/pod-*.yml
```
{% endcode %}

Now that `com.yourorg.FindServiceExternalIPsExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.10.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("com.yourorg.FindServiceExternalIPsExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.10.0")
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
        <version>4.15.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindServiceExternalIPsExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.10.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.FindServiceExternalIPsExample`
