# Remediate vulnerabilities from the OWASP Top Ten

**org.openrewrite.java.security.OwaspTopTen**

_[OWASP](https://owasp.org) publishes a list of the most impactful common security vulnerabilities.  These recipes identify and remediate vulnerabilities from the OWASP Top Ten._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/resources/META-INF/rewrite/owasp.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.1.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-security:2.1.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.OwaspTopTen")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:2.1.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.5.4") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-java-security:2.1.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.security.OwaspTopTen")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.OwaspTopTen</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>2.1.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-security:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.security.OwaspTopTen
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe OwaspTopTen
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remediate OWASP A01:2021 Broken access control](../../java/security/owaspa01.md)
* [Remediate OWASP A02:2021 Cryptographic failures](../../java/security/owaspa02.md)
* [Remediate OWASP A03:2021 Injection](../../java/security/owaspa03.md)
* [Remediate OWASP A04:2021 Insecure Design](../../java/security/owaspa04.md)
* [Remediate OWASP A05:2021 Security misconfiguration](../../java/security/owaspa05.md)
* [Remediate OWASP A06:2021 Vulnerable and outdated components](../../java/security/owaspa06.md)
* [Remediate OWASP A08:2021 Software and data integrity failures](../../java/security/owaspa08.md)
* [Remediate OWASP A10:2021 Server-side request forgery (SSRF)](../../java/security/owaspa10.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.OwaspTopTen
displayName: Remediate vulnerabilities from the OWASP Top Ten
description: [OWASP](https://owasp.org) publishes a list of the most impactful common security vulnerabilities.  These recipes identify and remediate vulnerabilities from the OWASP Top Ten.

recipeList:
  - org.openrewrite.java.security.OwaspA01
  - org.openrewrite.java.security.OwaspA02
  - org.openrewrite.java.security.OwaspA03
  - org.openrewrite.java.security.OwaspA04
  - org.openrewrite.java.security.OwaspA05
  - org.openrewrite.java.security.OwaspA06
  - org.openrewrite.java.security.OwaspA08
  - org.openrewrite.java.security.OwaspA10

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.security.OwaspTopTen)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Patrick](mailto:patway99@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Jonathan Leitschuh](mailto:Jonathan.Leitschuh@gmail.com), [Kun Li](mailto:kun@moderne.io), [Scott Jungling](mailto:scott@moderne.io), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), [Kyle Scully](mailto:scullykns@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com)
