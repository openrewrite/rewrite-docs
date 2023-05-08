# Add Gradle Enterprise Maven Extension to maven projects

**org.openrewrite.maven.AddGradleEnterpriseMavenExtension**

_To integrate gradle enterprise maven extension into maven projects, ensure that the `gradle-enterprise-maven-extension` is added to the `.mvn/extensions.xml` file if not already present. Additionally, configure the extension by adding the `.mvn/gradle-enterprise.xml` configuration file._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddGradleEnterpriseMavenExtension.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/7.40.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.40.6

## Contributors
* [Kun Li](122563761+kunli2@users.noreply.github.com)

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | version | An exact version number or node-style semver selector used to select the gradle-enterprise-maven-extension version. |
| `String` | server | The URL of the Gradle Enterprise server. |
| `Boolean` | allowUntrustedServer | *Optional*. When set to `true` the plugin will be configured to allow unencrypted http connections with the server. If set to `false` or omitted, the plugin will refuse to communicate without transport layer security enabled. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddGradleEnterpriseMavenExtensionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddGradleEnterpriseMavenExtensionExample
displayName: Add Gradle Enterprise Maven Extension to maven projects example
recipeList:
  - org.openrewrite.maven.AddGradleEnterpriseMavenExtension:
      version: 1.x
      server: https://scans.gradle.com/
      allowUntrustedServer: true
```
{% endcode %}

Now that `com.yourorg.AddGradleEnterpriseMavenExtensionExample` has been defined activate it in your build file:
{% tabs %}

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
            <recipe>com.yourorg.AddGradleEnterpriseMavenExtensionExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.AddGradleEnterpriseMavenExtension)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
