# Upgrade un-managed spring project dependencies

**org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies**

_Upgrades un-managed spring-boot project dependencies according to the specified spring-boot version._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/maven/spring/UpgradeExplicitSpringBootDependencies.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | fromVersion | XRage pattern for spring version used to limit which projects should be updated |
| `String` | toVersion | Upgrade version of `org.springframework.boot` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|fromVersion|`2.7.X`|
|toVersion|`3.0.0-M3`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
    <groupId>com.example</groupId>
    <artifactId>explicit-deps-app</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <repositories>
        <repository>
            <id>spring-milestone</id>
            <url>https://repo.spring.io/milestone</url>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </repository>
    </repositories>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>2.7.3</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <version>2.7.3</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
    <groupId>com.example</groupId>
    <artifactId>explicit-deps-app</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <repositories>
        <repository>
            <id>spring-milestone</id>
            <url>https://repo.spring.io/milestone</url>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </repository>
    </repositories>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>3.0.0-M3</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <version>3.0.0-M3</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -18,1 +18,1 @@
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
-           <version>2.7.3</version>
+           <version>3.0.0-M3</version>
        </dependency>
@@ -23,1 +23,1 @@
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
-           <version>2.7.3</version>
+           <version>3.0.0-M3</version>
            <scope>test</scope>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeExplicitSpringBootDependenciesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeExplicitSpringBootDependenciesExample
displayName: Upgrade un-managed spring project dependencies example
recipeList:
  - org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies:
      fromVersion:  2.7.+
      toVersion: 3.0.0-M3
```
{% endcode %}

Now that `com.yourorg.UpgradeExplicitSpringBootDependenciesExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-spring:5.0.5 in your build file:
{% tabs %}

{% tab title="Maven" %}
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
            <recipe>com.yourorg.UpgradeExplicitSpringBootDependenciesExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
* [Andrei Shakirin](mailto:andrei.shakirin@gmail.com)
* Patrick Way
* [Patrick](mailto:patway99@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* Kun Li
* [Kyle Scully](mailto:scullykns@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
