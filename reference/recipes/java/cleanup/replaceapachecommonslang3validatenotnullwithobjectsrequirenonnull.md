# Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`

**org.openrewrite.java.cleanup.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull**

_Replace `org.apache.commons.lang3.Validate.notNull(..)` with `Objects.requireNonNull(..)`._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/resources/META-INF/rewrite/java-best-practices.yml), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/7.40.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.40.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull")
}

repositories {
    mavenCentral()
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
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.cleanup.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`](../../java/cleanup/replacevalidatenotnullhavingsingleargwithobjectsrequirenonnull.md)
* [Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`](../../java/cleanup/replacevalidatenotnullhavingvarargswithobjectsrequirenonnull.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.cleanup.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull
displayName: Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`
description: Replace `org.apache.commons.lang3.Validate.notNull(..)` with `Objects.requireNonNull(..)`.
recipeList:
  - org.openrewrite.java.cleanup.ReplaceValidateNotNullHavingSingleArgWithObjectsRequireNonNull
  - org.openrewrite.java.cleanup.ReplaceValidateNotNullHavingVarargsWithObjectsRequireNonNull

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.cleanup.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
