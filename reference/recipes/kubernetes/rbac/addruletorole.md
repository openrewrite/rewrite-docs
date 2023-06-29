# Add RBAC rules

**org.openrewrite.kubernetes.rbac.AddRuleToRole**

_Add RBAC rules to ClusterRoles or namespaced Roles._

## Source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/java/org/openrewrite/kubernetes/rbac/AddRuleToRole.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.0.1

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

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|rbacResourceType|`ClusterRole`|
|rbacResourceName|`cluster-role`|
|apiGroups|`Set.of("")`|
|resources|`Set.of("pods")`|
|resourceNames|`null`|
|verbs|`Set.of("update")`|
|fileMatcher|`null`|


{% tabs %}
{% tab title="yaml" %}

###### Before
{% code %}
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: namespaced-role
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cluster-role
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["list"]
```
{% endcode %}

###### After
{% code %}
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: namespaced-role
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cluster-role
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["list"]
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["update"]
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -19,0 +19,3 @@
  resources: ["pods"]
  verbs: ["list"]
+- apiGroups: [""]
+ resources: ["pods"]
+ verbs: ["update"]

```
{% endcode %}
{% endtab %}
{% endtabs %}


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

Now that `com.yourorg.AddRuleToRoleExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:2.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.AddRuleToRoleExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:2.0.1")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddRuleToRoleExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>2.0.1</version>
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
* [Jon Brisbin](jon@jbrisbin.com)
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Tyler Van Gorder](1878529+tkvangorder@users.noreply.github.com)
* [Knut Wannheden](knut.wannheden@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kubernetes.rbac.AddRuleToRole)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
