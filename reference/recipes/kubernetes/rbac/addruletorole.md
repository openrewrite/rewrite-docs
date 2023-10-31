# Add RBAC rules

**org.openrewrite.kubernetes.rbac.AddRuleToRole**

_Add RBAC rules to ClusterRoles or namespaced Roles._

## Source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/java/org/openrewrite/kubernetes/rbac/AddRuleToRole.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.0.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.0.6

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | rbacResourceType | Type of RBAC resource to which this recipe adds a rule. |
| `String` | rbacResourceName | Glob pattern of the name of the RBAC resource to which this recipe adds a rule. |
| `Set` | apiGroups | Comma-separated list of API groups to which this rule refers. |
| `Set` | resources | Comma-separated list of Kubernetes resource types to which this rule refers. |
| `Set` | resourceNames | *Optional*. Comma-separated list of names of Kubernetes resources to which this rule applies. |
| `Set` | verbs | The API verbs to enable with this rule. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddRuleToRoleExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddRuleToRoleExample
displayName: Add RBAC rules example
recipeList:
  - org.openrewrite.kubernetes.rbac.AddRuleToRole:
      rbacResourceType: ClusterRole
      rbacResourceName: my-cluster-role
      apiGroups: ,v1
      resources: pods
      resourceNames: my-pod
      verbs: get,list
      fileMatcher: '**/pod-*.yml'
```
{% endcode %}

Now that `com.yourorg.AddRuleToRoleExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:2.0.6 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.4.3")
}

rewrite {
    activeRecipe("com.yourorg.AddRuleToRoleExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:2.0.6")
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
        <version>5.10.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddRuleToRoleExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>2.0.6</version>
          </dependency>
        </dependencies>
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
mod run <PATH> --recipe AddRuleToRole
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jon Brisbin](mailto:jon@jbrisbin.com)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* Tyler Van Gorder
* [Knut Wannheden](mailto:knut.wannheden@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Tim te Beek](mailto:timtebeek@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kubernetes.rbac.AddRuleToRole)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
