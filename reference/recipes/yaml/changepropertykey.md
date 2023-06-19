# Change property key

**org.openrewrite.yaml.ChangePropertyKey**

_Change a YAML property key leaving the value intact. Nested YAML mappings are interpreted as dot separated property names, i.e. as Spring Boot interprets application.yml files._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/ChangePropertyKey.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldPropertyKey | The property key to rename. Supports glob |
| `String` | newPropertyKey | The new name for the property key. |
| `Boolean` | relaxedBinding | *Optional*. Whether to match the `oldPropertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Default is `true`. Set to `false`  to use exact matching. |
| `List` | except | *Optional*. If any of these property keys exist as direct children of `oldPropertyKey`, then they will not be moved to `newPropertyKey`. |

## Examples
##### Example 1

###### Parameters
| Parameter | Value |
| -- | -- |
|oldPropertyKey|`management.metrics.binders.*.enabled`|
|newPropertyKey|`management.metrics.enable.process.files`|
|relaxedBinding|`null`|
|except|`null`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
management.metrics.binders.files.enabled: true```
{% endcode %}

###### After
{% code title="null" %}
```yaml
management.metrics.enable.process.files: true```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -1,1 +1,1 @@
-management.metrics.binders.files.enabled: true
+management.metrics.enable.process.files: true
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2

###### Parameters
| Parameter | Value |
| -- | -- |
|oldPropertyKey|`a.b.c.d`|
|newPropertyKey|`a.b.c`|
|relaxedBinding|`null`|
|except|`null`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
a.b.c.d: true```
{% endcode %}

###### After
{% code title="null" %}
```yaml
a.b.c: true```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -1,1 +1,1 @@
-a.b.c.d: true
+a.b.c: true
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 3

###### Parameters
| Parameter | Value |
| -- | -- |
|oldPropertyKey|`spring.profiles`|
|newPropertyKey|`spring.config.activate.on-profile`|
|relaxedBinding|`null`|
|except|`null`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
spring.profiles.group.prod: proddb,prodmq,prodmetrics
```
{% endcode %}

###### After
{% code title="null" %}
```yaml
spring.config.activate.on-profile.group.prod: proddb,prodmq,prodmetrics
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -1,1 +1,1 @@
-spring.profiles.group.prod: proddb,prodmq,prodmetrics
+spring.config.activate.on-profile.group.prod: proddb,prodmq,prodmetrics

```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 4

###### Parameters
| Parameter | Value |
| -- | -- |
|oldPropertyKey|`spring.profiles`|
|newPropertyKey|`spring.config.activate.on-profile`|
|relaxedBinding|`null`|
|except|`List.of("group", "active", "include")`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
spring:
  profiles:
    active: allEnvs
    include: baseProfile
    foo: bar
    group:
      prod: proddb,prodmq,prodmetrics
```
{% endcode %}

###### After
{% code title="null" %}
```yaml
spring:
  profiles:
    active: allEnvs
    include: baseProfile
    group:
      prod: proddb,prodmq,prodmetrics
  config.activate.on-profile:
    foo: bar
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -5,1 +5,0 @@
    active: allEnvs
    include: baseProfile
-   foo: bar
    group:
@@ -8,0 +7,2 @@
    group:
      prod: proddb,prodmq,prodmetrics
+ config.activate.on-profile:
+   foo: bar

```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePropertyKeyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePropertyKeyExample
displayName: Change property key example
recipeList:
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.metrics.binders.*.enabled
      newPropertyKey: management.metrics.enable.process.files
      relaxedBinding: null
      except: null
```
{% endcode %}

Now that `com.yourorg.ChangePropertyKeyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.ChangePropertyKeyExample")
}

repositories {
    mavenCentral()
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangePropertyKeyExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Patrick](patway99@gmail.com)
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Thomas Zub](thomas.zub@outlook.de)
* [Sandeep Nagaraj](59915704+sanagaraj-pivotal@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.yaml.ChangePropertyKey)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
