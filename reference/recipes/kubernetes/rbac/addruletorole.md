# Add RBAC rules

** org.openrewrite.kubernetes.rbac.AddRuleToRole**
_Add RBAC rules to ClusterRoles or namespaced Roles._

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.19.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.19.0

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

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddRuleToRoleExample`.
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

Now that `com.yourorg.AddRuleToRoleExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.19.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.24.0")
}

rewrite {
    activeRecipe("com.yourorg.AddRuleToRoleExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.19.0")
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
        <version>4.27.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddRuleToRoleExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.19.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipescom.yourorg.AddRuleToRoleExample`
