# Update relocated Micronaut Security config yaml keys

**org.openrewrite.java.micronaut.UpdateSecurityYamlIfNeeded**

_This recipe will update relocated security config keys in Micronaut configuration yaml files._

## Source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/UpdateSecurityYamlIfNeeded.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.15")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.UpdateSecurityYamlIfNeeded")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.0.1")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.UpdateSecurityYamlIfNeeded</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.micronaut.UpdateSecurityYamlIfNeeded
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Merge YAML snippet](../../yaml/mergeyaml.md)
  * key: `$.micronaut.security.token`
  * yaml: `generator:
  access-token:
    expiration:
cookie:
  enabled:
  cookie-max-age:
  cookie-path:
  cookie-domain:
  cookie-same-site:
bearer:
  enabled:`
  * acceptTheirs: `true`
* [Copy YAML value](../../yaml/copyvalue.md)
  * oldKeyPath: `$.micronaut.security.token.jwt.generator.access-token.expiration`
  * newKey: `$.micronaut.security.token.generator.access-token.expiration`
* [Copy YAML value](../../yaml/copyvalue.md)
  * oldKeyPath: `$.micronaut.security.token.jwt.cookie.enabled`
  * newKey: `$.micronaut.security.token.cookie.enabled`
* [Copy YAML value](../../yaml/copyvalue.md)
  * oldKeyPath: `$.micronaut.security.token.jwt.cookie.cookie-max-age`
  * newKey: `$.micronaut.security.token.cookie.cookie-max-age`
* [Copy YAML value](../../yaml/copyvalue.md)
  * oldKeyPath: `$.micronaut.security.token.jwt.cookie.cookie-path`
  * newKey: `$.micronaut.security.token.cookie.cookie-path`
* [Copy YAML value](../../yaml/copyvalue.md)
  * oldKeyPath: `$.micronaut.security.token.jwt.cookie.cookie-domain`
  * newKey: `$.micronaut.security.token.cookie.cookie-domain`
* [Copy YAML value](../../yaml/copyvalue.md)
  * oldKeyPath: `$.micronaut.security.token.jwt.cookie.cookie-same-site`
  * newKey: `$.micronaut.security.token.cookie.cookie-same-site`
* [Copy YAML value](../../yaml/copyvalue.md)
  * oldKeyPath: `$.micronaut.security.token.jwt.bearer.enabled`
  * newKey: `$.micronaut.security.token.bearer.enabled`
* [Delete key](../../yaml/deletekey.md)
  * keyPath: `$.micronaut.security.token.jwt.generator`
* [Delete key](../../yaml/deletekey.md)
  * keyPath: `$.micronaut.security.token.jwt.cookie`
* [Delete key](../../yaml/deletekey.md)
  * keyPath: `$.micronaut.security.token.jwt.bearer`
* [Remove unused YAML](../../yaml/cleanup/removeunused.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.UpdateSecurityYamlIfNeeded
displayName: Update relocated Micronaut Security config yaml keys
description: This recipe will update relocated security config keys in Micronaut configuration yaml files.
recipeList:
  - org.openrewrite.yaml.MergeYaml:
      key: $.micronaut.security.token
      yaml: generator:
  access-token:
    expiration:
cookie:
  enabled:
  cookie-max-age:
  cookie-path:
  cookie-domain:
  cookie-same-site:
bearer:
  enabled:
      acceptTheirs: true
  - org.openrewrite.yaml.CopyValue:
      oldKeyPath: $.micronaut.security.token.jwt.generator.access-token.expiration
      newKey: $.micronaut.security.token.generator.access-token.expiration
  - org.openrewrite.yaml.CopyValue:
      oldKeyPath: $.micronaut.security.token.jwt.cookie.enabled
      newKey: $.micronaut.security.token.cookie.enabled
  - org.openrewrite.yaml.CopyValue:
      oldKeyPath: $.micronaut.security.token.jwt.cookie.cookie-max-age
      newKey: $.micronaut.security.token.cookie.cookie-max-age
  - org.openrewrite.yaml.CopyValue:
      oldKeyPath: $.micronaut.security.token.jwt.cookie.cookie-path
      newKey: $.micronaut.security.token.cookie.cookie-path
  - org.openrewrite.yaml.CopyValue:
      oldKeyPath: $.micronaut.security.token.jwt.cookie.cookie-domain
      newKey: $.micronaut.security.token.cookie.cookie-domain
  - org.openrewrite.yaml.CopyValue:
      oldKeyPath: $.micronaut.security.token.jwt.cookie.cookie-same-site
      newKey: $.micronaut.security.token.cookie.cookie-same-site
  - org.openrewrite.yaml.CopyValue:
      oldKeyPath: $.micronaut.security.token.jwt.bearer.enabled
      newKey: $.micronaut.security.token.bearer.enabled
  - org.openrewrite.yaml.DeleteKey:
      keyPath: $.micronaut.security.token.jwt.generator
  - org.openrewrite.yaml.DeleteKey:
      keyPath: $.micronaut.security.token.jwt.cookie
  - org.openrewrite.yaml.DeleteKey:
      keyPath: $.micronaut.security.token.jwt.bearer
  - org.openrewrite.yaml.cleanup.RemoveUnused

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jeremy Grelle](mailto:grellej@unityfoundation.io)
* [Tim te Beek](mailto:tim@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpdateSecurityYamlIfNeeded)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
