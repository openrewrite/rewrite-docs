# Upgrade given property to version if necessary

**org.openrewrite.jenkins.UpgradeVersionProperty**

_If the current value is a version < given version, upgrade it._

## Source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/java/org/openrewrite/jenkins/UpgradeVersionProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-jenkins
* version: 0.2.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | key | The name of the property key whose value is to be changed. |
| `String` | minimumVersion | Value to apply to the matching property if currently < this. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|key|`jenkins.version`|
|minimumVersion|`2.364.1`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
    <parent>
        <groupId>org.jenkins-ci.plugins</groupId>
        <artifactId>plugin</artifactId>
        <version>4.40</version>
        <relativePath/>
    </parent>
    <artifactId>example-plugin</artifactId>
    <version>0.8-SNAPSHOT</version>
    <properties>
        <jenkins.version>2.303.1</jenkins.version>
    </properties>
    <repositories>
        <repository>
            <id>repo.jenkins-ci.org</id>
            <url>http://repo.jenkins-ci.org/public/</url>
        </repository>
    </repositories>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
    <parent>
        <groupId>org.jenkins-ci.plugins</groupId>
        <artifactId>plugin</artifactId>
        <version>4.40</version>
        <relativePath/>
    </parent>
    <artifactId>example-plugin</artifactId>
    <version>0.8-SNAPSHOT</version>
    <properties>
        <jenkins.version>2.364.1</jenkins.version>
    </properties>
    <repositories>
        <repository>
            <id>repo.jenkins-ci.org</id>
            <url>http://repo.jenkins-ci.org/public/</url>
        </repository>
    </repositories>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -11,1 +11,1 @@
    <version>0.8-SNAPSHOT</version>
    <properties>
-       <jenkins.version>2.303.1</jenkins.version>
+       <jenkins.version>2.364.1</jenkins.version>
    </properties>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeVersionPropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeVersionPropertyExample
displayName: Upgrade given property to version if necessary example
recipeList:
  - org.openrewrite.jenkins.UpgradeVersionProperty:
      key: jenkins.version
      minimumVersion: 2.375.1
```
{% endcode %}

Now that `com.yourorg.UpgradeVersionPropertyExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-jenkins:0.2.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.25")
}

rewrite {
    activeRecipe("com.yourorg.UpgradeVersionPropertyExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-jenkins:0.2.0")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpgradeVersionPropertyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-jenkins</artifactId>
            <version>0.2.0</version>
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
* [Steve Hill](mailto:sghill.dev@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.jenkins.UpgradeVersionProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
