# Add the Develocity Maven extension

**org.openrewrite.maven.AddDevelocityMavenExtension**

_To integrate the Develocity Maven extension into Maven projects, ensure that the `gradle-enterprise-maven-extension` is added to the `.mvn/extensions.xml` file if not already present. Additionally, configure the extension by adding the `.mvn/gradle-enterprise.xml` configuration file._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddDevelocityMavenExtension.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.28.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.28.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | version | *Optional*. A maven-compatible version number to select the gradle-enterprise-maven-extension version. | `1.17.4` |
| `String` | server | The URL of the Develocity server. | `https://scans.gradle.com/` |
| `Boolean` | allowUntrustedServer | *Optional*. When set to `true` the extension will be configured to allow unencrypted http connections with the server. If set to `false` or omitted, the extension will refuse to communicate without transport layer security enabled. | `true` |
| `Boolean` | captureGoalInputFiles | *Optional*. When set to `true` the extension will capture additional information about the inputs to Maven goals. This increases the size of build scans, but is useful for diagnosing issues with goal caching.  | `true` |
| `Boolean` | uploadInBackground | *Optional*. When set to `false` the extension will not upload build scan in the background. By default, build scans are uploaded in the background after the build has finished to avoid blocking the build process. | `false` |
| `PublishCriteria` | publishCriteria | *Optional*. When set to `Always` the extension will publish build scans of every single build. This is the default behavior when omitted.When set to `Failure` the extension will only publish build scans when the build fails. When set to `Demand` the extension will only publish build scans when explicitly requested. Valid options: `Always`, `Failure`, `Demand` | `Always` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddDevelocityMavenExtensionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddDevelocityMavenExtensionExample
displayName: Add the Develocity Maven extension example
recipeList:
  - org.openrewrite.maven.AddDevelocityMavenExtension:
      version: 1.17.4
      server: https://scans.gradle.com/
      allowUntrustedServer: true
      captureGoalInputFiles: true
      uploadInBackground: false
      publishCriteria: Always
```
{% endcode %}

Now that `com.yourorg.AddDevelocityMavenExtensionExample` has been defined activate it in your build file:
{% tabs %}

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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.AddDevelocityMavenExtensionExample</recipe>
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
mod run . --recipe AddDevelocityMavenExtensionExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.AddDevelocityMavenExtension)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
