# Find text-direction changes

**org.openrewrite.java.security.FindTextDirectionChanges**

_Finds unicode control characters which can change the direction text is displayed in. These control characters can alter how source code is presented to a human reader without affecting its interpretation by tools like compilers. So a malicious patch could pass code review while introducing vulnerabilities. Note that text direction-changing unicode control characters aren't inherently malicious. These characters can appear for legitimate reasons in code written in or dealing with right-to-left languages. See: https://trojansource.codes/ for more information._

### Tags

* CVE-2021-42574

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/java/org/openrewrite/java/security/FindTextDirectionChanges.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.0.2

## Example


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
class A {
    void foo() {
        boolean isAdmin = false;
        /*‮ } ⁦ if(isAdmin) ⁩ ⁦ begin admins only */
            System.out.println("You are an admin.");
        /* end admins only ‮ { ⁦ */
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
class A {
    void foo() {
        boolean isAdmin = false;
        /*‮ } ⁦ if(isAdmin) ⁩ ⁦ begin admins only */
            System.out./*~~(Found text-direction altering unicode control characters: LRI,RLO,PDI)~~>*/println("You are an admin.");
        /* end admins only ‮ { ⁦ */
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- A.java
+++ A.java
@@ -5,1 +5,1 @@
        boolean isAdmin = false;
        /*‮ } ⁦ if(isAdmin) ⁩ ⁦ begin admins only */
-           System.out.println("You are an admin.");
+           System.out./*~~(Found text-direction altering unicode control characters: LRI,RLO,PDI)~~>*/println("You are an admin.");
        /* end admins only ‮ { ⁦ */
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-security:2.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.15")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.FindTextDirectionChanges")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:2.0.2")
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
            <recipe>org.openrewrite.java.security.FindTextDirectionChanges</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>2.0.2</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-security:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.security.FindTextDirectionChanges
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Sam Snyder](mailto:sam@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Kyle Scully](mailto:scullykns@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.security.FindTextDirectionChanges)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
