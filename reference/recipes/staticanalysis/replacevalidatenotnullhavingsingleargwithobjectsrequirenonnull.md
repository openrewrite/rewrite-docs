# Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`

**org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingSingleArgWithObjectsRequireNonNull**

_Replace `org.apache.commons.lang3.Validate.notNull(Object)` with `Objects.requireNonNull(Object)`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/java-best-practices.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.4


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.4` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingSingleArgWithObjectsRequireNonNull")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.4")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingSingleArgWithObjectsRequireNonNull</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.4</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingSingleArgWithObjectsRequireNonNull
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../java/changemethodname.md)
  * methodPattern: `org.apache.commons.lang3.Validate notNull(Object)`
  * newMethodName: `requireNonNull`
* [Change method target to static](../java/changemethodtargettostatic.md)
  * methodPattern: `org.apache.commons.lang3.Validate requireNonNull(Object)`
  * fullyQualifiedTargetTypeName: `java.util.Objects`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingSingleArgWithObjectsRequireNonNull
displayName: Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`
description: Replace `org.apache.commons.lang3.Validate.notNull(Object)` with `Objects.requireNonNull(Object)`.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.lang3.Validate notNull(Object)
      newMethodName: requireNonNull
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.apache.commons.lang3.Validate requireNonNull(Object)
      fullyQualifiedTargetTypeName: java.util.Objects

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingSingleArgWithObjectsRequireNonNull)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
