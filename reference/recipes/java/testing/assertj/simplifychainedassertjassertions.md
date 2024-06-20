# Simplify AssertJ chained assertions

**org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions**

_Replace AssertJ chained assertions with dedicated assertions that function the same._

### Tags

* testing
* assertj

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/assertj.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.12.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.12.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.12.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.12.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.12.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions")
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.12.2</version>
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

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe SimplifyChainedAssertJAssertions
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `getString`
  * assertToReplace: `hasSize`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `equals`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEqualTo`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `equalsIgnoreCase`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEqualToIgnoringCase`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `contains`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `contains`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `contains`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `doesNotContain`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `startsWith`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `startsWith`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `endsWith`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `endsWith`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `matches`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `matches`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `trim`
  * assertToReplace: `isEmpty`
  * dedicatedAssertion: `isBlank`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `length`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasSize`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isNotEmpty`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `length`
  * assertToReplace: `hasSize`
  * dedicatedAssertion: `hasSameSizeAs`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `getFile`
  * assertToReplace: `hasSize`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `length`
  * assertToReplace: `isZero`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `length`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasSize`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `canRead`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `canRead`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `canWrite`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `canWrite`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `exists`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `exists`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `getName`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasName`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `getParent`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasParent`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `getParentFile`
  * assertToReplace: `isNull`
  * dedicatedAssertion: `hasNoParent`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isAbsolute`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isAbsolute`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isAbsolute`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isRelative`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isDirectory`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isDirectory`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isFile`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isFile`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `list`
  * assertToReplace: `isEmpty`
  * dedicatedAssertion: `isEmptyDirectory`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `startsWith`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `startsWithRaw`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `endsWith`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `endsWithRaw`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `getParent`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasParentRaw`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `getParent`
  * assertToReplace: `isNull`
  * dedicatedAssertion: `hasNoParentRaw`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isAbsolute`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isAbsolute`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isAbsolute`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isRelative`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isNotEmpty`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `size`
  * assertToReplace: `isZero`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `size`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasSize`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `contains`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `contains`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `contains`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `doesNotContain`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `containsAll`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `containsAll`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `size`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasSize`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `containsKey`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `containsKey`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `keySet`
  * assertToReplace: `contains`
  * dedicatedAssertion: `containsKey`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `keySet`
  * assertToReplace: `containsOnly`
  * dedicatedAssertion: `containsOnlyKeys`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `containsValue`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `containsValue`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `values`
  * assertToReplace: `contains`
  * dedicatedAssertion: `containsValue`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `get`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `containsEntry`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isNotEmpty`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isPresent`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isPresent`
  * requiredType: `java.util.Optional`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.util.Optional`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isPresent`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isNotPresent`
  * requiredType: `java.util.Optional`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isNotEmpty`
  * requiredType: `java.util.Optional`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `get`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `contains`
  * requiredType: `java.util.Optional`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion.md)
  * chainedAssertion: `get`
  * assertToReplace: `isSameAs`
  * dedicatedAssertion: `containsSame`
  * requiredType: `java.util.Optional`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions
displayName: Simplify AssertJ chained assertions
description: Replace AssertJ chained assertions with dedicated assertions that function the same.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isTrue
      dedicatedAssertion: isEmpty
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getString
      assertToReplace: hasSize
      dedicatedAssertion: isEmpty
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: equals
      assertToReplace: isTrue
      dedicatedAssertion: isEqualTo
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: equalsIgnoreCase
      assertToReplace: isTrue
      dedicatedAssertion: isEqualToIgnoringCase
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: contains
      assertToReplace: isTrue
      dedicatedAssertion: contains
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: contains
      assertToReplace: isFalse
      dedicatedAssertion: doesNotContain
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: startsWith
      assertToReplace: isTrue
      dedicatedAssertion: startsWith
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: endsWith
      assertToReplace: isTrue
      dedicatedAssertion: endsWith
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: matches
      assertToReplace: isTrue
      dedicatedAssertion: matches
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: trim
      assertToReplace: isEmpty
      dedicatedAssertion: isBlank
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: length
      assertToReplace: isEqualTo
      dedicatedAssertion: hasSize
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isFalse
      dedicatedAssertion: isNotEmpty
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: length
      assertToReplace: hasSize
      dedicatedAssertion: hasSameSizeAs
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getFile
      assertToReplace: hasSize
      dedicatedAssertion: isEmpty
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: length
      assertToReplace: isZero
      dedicatedAssertion: isEmpty
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: length
      assertToReplace: isEqualTo
      dedicatedAssertion: hasSize
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: canRead
      assertToReplace: isTrue
      dedicatedAssertion: canRead
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: canWrite
      assertToReplace: isTrue
      dedicatedAssertion: canWrite
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: exists
      assertToReplace: isTrue
      dedicatedAssertion: exists
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getName
      assertToReplace: isEqualTo
      dedicatedAssertion: hasName
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getParent
      assertToReplace: isEqualTo
      dedicatedAssertion: hasParent
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getParentFile
      assertToReplace: isNull
      dedicatedAssertion: hasNoParent
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isAbsolute
      assertToReplace: isTrue
      dedicatedAssertion: isAbsolute
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isAbsolute
      assertToReplace: isFalse
      dedicatedAssertion: isRelative
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isDirectory
      assertToReplace: isTrue
      dedicatedAssertion: isDirectory
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isFile
      assertToReplace: isTrue
      dedicatedAssertion: isFile
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: list
      assertToReplace: isEmpty
      dedicatedAssertion: isEmptyDirectory
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: startsWith
      assertToReplace: isTrue
      dedicatedAssertion: startsWithRaw
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: endsWith
      assertToReplace: isTrue
      dedicatedAssertion: endsWithRaw
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getParent
      assertToReplace: isEqualTo
      dedicatedAssertion: hasParentRaw
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getParent
      assertToReplace: isNull
      dedicatedAssertion: hasNoParentRaw
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isAbsolute
      assertToReplace: isTrue
      dedicatedAssertion: isAbsolute
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isAbsolute
      assertToReplace: isFalse
      dedicatedAssertion: isRelative
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isTrue
      dedicatedAssertion: isEmpty
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isFalse
      dedicatedAssertion: isNotEmpty
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: size
      assertToReplace: isZero
      dedicatedAssertion: isEmpty
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: size
      assertToReplace: isEqualTo
      dedicatedAssertion: hasSize
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: contains
      assertToReplace: isTrue
      dedicatedAssertion: contains
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: contains
      assertToReplace: isFalse
      dedicatedAssertion: doesNotContain
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: containsAll
      assertToReplace: isTrue
      dedicatedAssertion: containsAll
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: size
      assertToReplace: isEqualTo
      dedicatedAssertion: hasSize
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: containsKey
      assertToReplace: isTrue
      dedicatedAssertion: containsKey
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: keySet
      assertToReplace: contains
      dedicatedAssertion: containsKey
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: keySet
      assertToReplace: containsOnly
      dedicatedAssertion: containsOnlyKeys
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: containsValue
      assertToReplace: isTrue
      dedicatedAssertion: containsValue
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: values
      assertToReplace: contains
      dedicatedAssertion: containsValue
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: get
      assertToReplace: isEqualTo
      dedicatedAssertion: containsEntry
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isTrue
      dedicatedAssertion: isEmpty
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isFalse
      dedicatedAssertion: isNotEmpty
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isPresent
      assertToReplace: isTrue
      dedicatedAssertion: isPresent
      requiredType: java.util.Optional
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isTrue
      dedicatedAssertion: isEmpty
      requiredType: java.util.Optional
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isPresent
      assertToReplace: isFalse
      dedicatedAssertion: isNotPresent
      requiredType: java.util.Optional
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isFalse
      dedicatedAssertion: isNotEmpty
      requiredType: java.util.Optional
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: get
      assertToReplace: isEqualTo
      dedicatedAssertion: contains
      requiredType: java.util.Optional
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: get
      assertToReplace: isSameAs
      dedicatedAssertion: containsSame
      requiredType: java.util.Optional

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Aleksandar A Simpson](mailto:alek@asu.me), [Tim te Beek](mailto:timtebeek@gmail.com)
