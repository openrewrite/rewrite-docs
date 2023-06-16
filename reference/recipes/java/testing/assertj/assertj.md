# AssertJ best practices

**org.openrewrite.java.testing.assertj.Assertj**

_Migrates JUnit asserts to AssertJ and applies best practices to assertions._

### Tags

* testing
* assertj

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/assertj.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.Assertj")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1")
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
            <recipe>org.openrewrite.java.testing.assertj.Assertj</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.Assertj
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Statically import AssertJ's `assertThat`](../../../java/testing/assertj/staticimports.md)
* [Migrate JUnit asserts to AssertJ](../../../java/testing/assertj/junittoassertj.md)
* [Use AssertJ `contains()` on collections](../../../java/testing/assertj/useexplicitcontains.md)
* [Use AssertJ `isEmpty()` on collections](../../../java/testing/assertj/useexplicitisempty.md)
* [Use AssertJ `hasSize()` on collections](../../../java/testing/assertj/useexplicitsize.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.Assertj
displayName: AssertJ best practices
description: Migrates JUnit asserts to AssertJ and applies best practices to assertions.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.testing.assertj.StaticImports
  - org.openrewrite.java.testing.assertj.JUnitToAssertj
  - org.openrewrite.java.testing.assertj.UseExplicitContains
  - org.openrewrite.java.testing.assertj.UseExplicitIsEmpty
  - org.openrewrite.java.testing.assertj.UseExplicitSize

```
{% endtab %}
{% endtabs %}
## Contributors
* [Greg Adams](greg@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Paolo Bizzarri](pibizza@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Patrick Way](pway99@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Patrick](patway99@gmail.com)
* [Jeroen Meijer](jjgmeijer@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Tim te Beek](timtebeek@gmail.com)
* [Scott Jungling](scott.jungling@gmail.com)
* [Michael Keppler](bananeweizen@gmx.de)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.assertj.Assertj)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
