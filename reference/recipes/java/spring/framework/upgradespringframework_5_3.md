# Migrate to Spring Framework 5.3

**org.openrewrite.java.spring.framework.UpgradeSpringFramework\_5\_3**

_Migrate applications to the latest Spring Framework 5.3 release._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-framework-53.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Framework 5.2](../../../java/spring/framework/upgradespringframework_5_2.md)
* [Upgrade spring-framework Maven dependencies](../../../java/spring/framework/upgradespringframeworkdependencies.md)
  * newVersion: `5.3.x`
* [Use `ObjectUtils#isEmpty(Object)`](../../../java/spring/framework/useobjectutilsisempty.md)
* [Convert `InstantiationAwareBeanPostProcessorAdapter` to `SmartInstantiationAwareBeanPostProcessor`](../../../java/spring/framework/migrateinstantiationawarebeanpostprocessoradapter.md)
* [Use varargs equivalents for deprecated JdbcTemplate signatures](../../../java/spring/framework/jdbctemplateobjectarrayargtovarargs.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.hibernate`
  * artifactId: `hibernate-search-orm`
  * newVersion: `5.11.x`
  * overrideManagedVersion: `false`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `org.aspectj`
  * artifactId: `aspectjrt`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `aopalliance`
  * artifactId: `aopalliance`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `cglib`
  * artifactId: `cglib`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3
displayName: Migrate to Spring Framework 5.3
description: Migrate applications to the latest Spring Framework 5.3 release.
recipeList:
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2
  - org.openrewrite.java.spring.framework.UpgradeSpringFrameworkDependencies:
      newVersion: 5.3.x
  - org.openrewrite.java.spring.framework.UseObjectUtilsIsEmpty
  - org.openrewrite.java.spring.framework.MigrateInstantiationAwareBeanPostProcessorAdapter
  - org.openrewrite.java.spring.framework.JdbcTemplateObjectArrayArgToVarArgs
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.hibernate
      artifactId: hibernate-search-orm
      newVersion: 5.11.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.aspectj
      artifactId: aspectjrt
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: aopalliance
      artifactId: aopalliance
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: cglib
      artifactId: cglib

```
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick](patway99@gmail.com)
* [Patrick Way](pway99@users.noreply.github.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Kun Li](kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
