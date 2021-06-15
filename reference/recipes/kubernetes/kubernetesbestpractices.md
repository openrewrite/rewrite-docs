# Kubernetes best practices

 **org.openrewrite.kubernetes.KubernetesBestPractices** _Applies best practices to Kubernetes manifests._

### Tags

* kubernetes

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.1.0

## Recipe list

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

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.KubernetesBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.1.0")
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
        <version>4.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.KubernetesBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.1.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.kubernetes.KubernetesBestPractices` es\`

