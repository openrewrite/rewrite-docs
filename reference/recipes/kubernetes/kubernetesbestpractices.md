# Kubernetes best practices

 **org.openrewrite.kubernetes.KubernetesBestPractices** _Applies best practices to Kubernetes manifests._

### Tags

* kubernetes

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.4.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.6.0")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.KubernetesBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.4.0")
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
        <version>4.8.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.KubernetesBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.4.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.kubernetes.KubernetesBestPractices`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Ensure liveness probe is configured](missingpodlivenessprobe.md)
* [Ensure readiness probe is configured](missingpodreadinessprobe.md)
* [Ensure CPU request is set](missingcpurequest.md)
* [Ensure CPU limits are set](missingcpulimits.md)
* [Ensure memory request is set](missingmemoryrequest.md)
* [Ensure memory limits are set](missingmemorylimits.md)
* [No privileged containers](noprivilegedcontainers.md)
* [Ensure lifecycle rule on `StorageBucket`](lifecycleruleonstoragebucket.md)
* [No host process ID sharing](nohostprocessidsharing.md)
* [No host IPC sharing](nohostipcsharing.md)
* [No root containers](norootcontainers.md)
* [Ensure image pull policy is `Always`](imagepullpolicyalways.md)
* [No privilege escalation](noprivilegeescalation.md)
* [No host network sharing](nohostnetworksharing.md)
* [Read-only root filesystem](readonlyrootfilesystem.md)
* [Limit root capabilities in a container](limitcontainercapabilities.md)
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

