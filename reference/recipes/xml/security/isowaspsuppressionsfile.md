# Find OWASP `suppressions.xml`

**org.openrewrite.xml.security.IsOwaspSuppressionsFile**

_These files are used to suppress false positives in OWASP [Dependency Check](https://jeremylong.github.io/DependencyCheck)._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/security/IsOwaspSuppressionsFile.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-xml/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-xml
* version: 8.1.2

## Example


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
</suppressions>```
{% endcode %}

###### After
{% code title="suppressions.xml" %}
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!--~~(Found it)~~>--><suppressions xmlns="https://jeremylong.github.io/DependencyCheck/dependency-suppression.1.3.xsd">
    <suppress>
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
@@ -2,1 +2,1 @@
<?xml version="1.0" encoding="UTF-8" ?>
-<suppressions xmlns="https://jeremylong.github.io/DependencyCheck/dependency-suppression.1.3.xsd">
+<!--~~(Found it)~~>--><suppressions xmlns="https://jeremylong.github.io/DependencyCheck/dependency-suppression.1.3.xsd">
    <suppress>
@@ -8,0 +8,1 @@
    </suppress>
</suppressions>
+
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
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.xml.security.IsOwaspSuppressionsFile")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.xml.security.IsOwaspSuppressionsFile</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.xml.security.IsOwaspSuppressionsFile
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Kevin McCarpenter™️](kevin@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.xml.security.IsOwaspSuppressionsFile)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
