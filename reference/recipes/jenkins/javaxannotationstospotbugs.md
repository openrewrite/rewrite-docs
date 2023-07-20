# Transform `javax.annotations` annotations to SpotBugs annotations

**org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs**

_SpotBugs is the [preferred replacement](https://www.jenkins.io/doc/developer/tutorial-improve/replace-jsr-305-annotations/) of JSR-305 annotations._

## Source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/jsr-305.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-jenkins
* version: 0.2.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-jenkins:0.2.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.18")
}

rewrite {
    activeRecipe("org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs")
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
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs</recipe>
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

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jenkins:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.Nonnull`
  * newFullyQualifiedTypeName: `edu.umd.cs.findbugs.annotations.NonNull`
  * ignoreDefinition: `true`
* [Rename package name](../java/changepackage.md)
  * oldPackageName: `javax.annotation`
  * newPackageName: `edu.umd.cs.findbugs.annotations`
  * recursive: `false`
* [Order imports](../java/orderimports.md)
  * removeUnused: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs
displayName: Transform `javax.annotations` annotations to SpotBugs annotations
description: SpotBugs is the [preferred replacement](https://www.jenkins.io/doc/developer/tutorial-improve/replace-jsr-305-annotations/) of JSR-305 annotations.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.Nonnull
      newFullyQualifiedTypeName: edu.umd.cs.findbugs.annotations.NonNull
      ignoreDefinition: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.annotation
      newPackageName: edu.umd.cs.findbugs.annotations
      recursive: false
  - org.openrewrite.java.OrderImports:
      removeUnused: false

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
