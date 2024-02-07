# Remediate OWASP A08:2021 Software and data integrity failures

**org.openrewrite.java.security.OwaspA08**

_OWASP [A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/) software and data integrity failures._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/resources/META-INF/rewrite/owasp.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.3.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-security:2.3.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.8.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.OwaspA08")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:2.3.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.8.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-java-security:2.3.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.security.OwaspA08")
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
        <version>5.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.OwaspA08</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>2.3.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-security:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.security.OwaspA08
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe OwaspA08
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Insecure JMS deserialization](../../java/security/marshalling/insecurejmsdeserialization.md)
* [Secure the use of SnakeYAML's constructor](../../java/security/marshalling/securesnakeyamlconstructor.md)
* [Secure the use of Jackson default typing](../../java/security/marshalling/securejacksondefaulttyping.md)
* [Find Jackson default type mapping enablement](../../java/security/search/findjacksondefaulttypemapping.md)
* [Find vulnerable uses of Jackson `@JsonTypeInfo`](../../java/security/search/findvulnerablejacksonjsontypeinfo.md)
* [Use secure temporary file creation](../../java/security/securetempfilecreation.md)
* [Find text-direction changes](../../java/security/findtextdirectionchanges.md)
* [Use `Files#createTempDirectory`](../../java/security/usefilescreatetempdirectory.md)
* [Enable CSRF attack prevention](../../java/security/spring/csrfprotection.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.OwaspA08
displayName: Remediate OWASP A08:2021 Software and data integrity failures
description: OWASP [A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/) software and data integrity failures.

recipeList:
  - org.openrewrite.java.security.marshalling.InsecureJmsDeserialization
  - org.openrewrite.java.security.marshalling.SecureSnakeYamlConstructor
  - org.openrewrite.java.security.marshalling.SecureJacksonDefaultTyping
  - org.openrewrite.java.security.search.FindJacksonDefaultTypeMapping
  - org.openrewrite.java.security.search.FindVulnerableJacksonJsonTypeInfo
  - org.openrewrite.java.security.SecureTempFileCreation
  - org.openrewrite.java.security.FindTextDirectionChanges
  - org.openrewrite.java.security.UseFilesCreateTempDirectory
  - org.openrewrite.java.security.spring.CsrfProtection:

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.security.OwaspA08)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Jonathan Leitschuh](mailto:Jonathan.Leitschuh@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Kun Li](mailto:kun@moderne.io), [Scott Jungling](mailto:scott@moderne.io), [Kyle Scully](mailto:scullykns@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com)
