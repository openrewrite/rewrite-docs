# Add date bounds to OWASP suppressions

**org.openrewrite.xml.security.AddOwaspDateBoundSuppressions**

_Adds an expiration date to all OWASP suppressions in order to ensure that they are periodically reviewed. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/security/AddOwaspDateBoundSuppressions.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-xml/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-xml
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | untilDate | *Optional*. Optional. The date to add to the suppression. Default will be 30 days from today. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|untilDate|`2020-01-01`|


{% tabs %}
{% tab title="suppressions.xml" %}

###### Before
{% code title="suppressions.xml" %}
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<suppressions xmlns="https://jeremylong.github.io/DependencyCheck/dependency-suppression.1.3.xsd">
    <suppress>
        <notes>
        </notes>
    </suppress>
</suppressions>
```
{% endcode %}

###### After
{% code title="suppressions.xml" %}
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<suppressions xmlns="https://jeremylong.github.io/DependencyCheck/dependency-suppression.1.3.xsd">
    <suppress until="2020-01-01Z">
        <notes>
        </notes>
    </suppress>
</suppressions>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- suppressions.xml
+++ suppressions.xml
@@ -3,1 +3,1 @@
<?xml version="1.0" encoding="UTF-8" ?>
<suppressions xmlns="https://jeremylong.github.io/DependencyCheck/dependency-suppression.1.3.xsd">
-   <suppress>
+   <suppress until="2020-01-01Z">
        <notes>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.xml.security.AddOwaspDateBoundSuppressions")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.xml.security.AddOwaspDateBoundSuppressions</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.xml.security.AddOwaspDateBoundSuppressions
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kevin McCarpenter™️](kevin@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.xml.security.AddOwaspDateBoundSuppressions)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
