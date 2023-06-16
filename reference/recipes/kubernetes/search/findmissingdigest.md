# Find missing image digest

**org.openrewrite.kubernetes.search.FindMissingDigest**

_Find instances of a container name that fails to specify a digest._

## Source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/java/org/openrewrite/kubernetes/search/FindMissingDigest.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `boolean` | includeInitContainers | *Optional*. Boolean to indicate whether or not to treat initContainers/image identically to containers/image. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|includeInitContainers|`true`|
|fileMatcher|`null`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: image
---
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: app:v1.2.3
    initContainers:
    - image: account/image:latest@digest
```
{% endcode %}

###### After
{% code title="null" %}
```yaml
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: ~~(missing digest)~~>image
---
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: ~~(missing digest)~~>app:v1.2.3
    initContainers:
    - image: account/image:latest@digest
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -5,1 +5,1 @@
-    - image: image
+    - image: ~~(missing digest)~~>image
@@ -11,1 +11,1 @@
-    - image: app:v1.2.3
+    - image: ~~(missing digest)~~>app:v1.2.3
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-kubernetes:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.search.FindMissingDigest")
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
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.search.FindMissingDigest</recipe>
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

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-kubernetes:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.kubernetes.search.FindMissingDigest
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jon Brisbin](jon@jbrisbin.com)
* [Knut Wannheden](knut.wannheden@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.kubernetes.search.FindMissingDigest)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
