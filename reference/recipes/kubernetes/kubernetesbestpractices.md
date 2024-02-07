# Kubernetes best practices

**org.openrewrite.kubernetes.KubernetesBestPractices**

_Applies best practices to Kubernetes manifests._

### Tags

* kubernetes

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/resources/META-INF/rewrite/kubernetes.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.2.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-kubernetes:2.2.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.8.2")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.KubernetesBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:2.2.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.8.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-kubernetes:2.2.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.kubernetes.KubernetesBestPractices")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.KubernetesBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>2.2.0</version>
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

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-kubernetes:RELEASE -Drewrite.activeRecipes=org.openrewrite.kubernetes.KubernetesBestPractices
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe KubernetesBestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Ensure liveness probe is configured](../kubernetes/missingpodlivenessprobe.md)
* [Ensure readiness probe is configured](../kubernetes/missingpodreadinessprobe.md)
* [Ensure CPU request is set](../kubernetes/missingcpurequest.md)
* [Ensure CPU limits are set](../kubernetes/missingcpulimits.md)
* [Ensure memory request is set](../kubernetes/missingmemoryrequest.md)
* [Ensure memory limits are set](../kubernetes/missingmemorylimits.md)
* [No privileged containers](../kubernetes/noprivilegedcontainers.md)
* [Ensure lifecycle rule on `StorageBucket`](../kubernetes/lifecycleruleonstoragebucket.md)
* [No host process ID sharing](../kubernetes/nohostprocessidsharing.md)
* [No host IPC sharing](../kubernetes/nohostipcsharing.md)
* [No root containers](../kubernetes/norootcontainers.md)
* [Ensure image pull policy is `Always`](../kubernetes/imagepullpolicyalways.md)
* [No privilege escalation](../kubernetes/noprivilegeescalation.md)
* [No host network sharing](../kubernetes/nohostnetworksharing.md)
* [Read-only root filesystem](../kubernetes/readonlyrootfilesystem.md)
* [Limit root capabilities in a container](../kubernetes/limitcontainercapabilities.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.kubernetes.KubernetesBestPractices
displayName: Kubernetes best practices
description: Applies best practices to Kubernetes manifests.
tags:
  - kubernetes
recipeList:
  - org.openrewrite.kubernetes.MissingPodLivenessProbe
  - org.openrewrite.kubernetes.MissingPodReadinessProbe
  - org.openrewrite.kubernetes.MissingCpuRequest
  - org.openrewrite.kubernetes.MissingCpuLimits
  - org.openrewrite.kubernetes.MissingMemoryRequest
  - org.openrewrite.kubernetes.MissingMemoryLimits
  - org.openrewrite.kubernetes.NoPrivilegedContainers
  - org.openrewrite.kubernetes.LifecycleRuleOnStorageBucket
  - org.openrewrite.kubernetes.NoHostProcessIdSharing
  - org.openrewrite.kubernetes.NoHostIPCSharing
  - org.openrewrite.kubernetes.NoRootContainers
  - org.openrewrite.kubernetes.ImagePullPolicyAlways
  - org.openrewrite.kubernetes.NoPrivilegeEscalation
  - org.openrewrite.kubernetes.NoHostNetworkSharing
  - org.openrewrite.kubernetes.ReadOnlyRootFilesystem
  - org.openrewrite.kubernetes.LimitContainerCapabilities

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kubernetes.KubernetesBestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Jon Brisbin](mailto:jon@moderne.io), [Aaron Gershman](mailto:aegershman@gmail.com), Tyler Van Gorder, [Knut Wannheden](mailto:knut.wannheden@gmail.com), [Jon Brisbin](mailto:jon@jbrisbin.com), [Tim te Beek](mailto:timtebeek@gmail.com)
