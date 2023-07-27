# Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`

**org.openrewrite.staticanalysis.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull**

_Replace `org.apache.commons.lang3.Validate.notNull(..)` with `Objects.requireNonNull(..)`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/java-best-practices.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.4

## Examples
##### Example 1


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.apache.commons.lang3.Validate;

class Test {
    void test(Object obj) {
        Validate.notNull(obj);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.Objects;

class Test {
    void test(Object obj) {
        Objects.requireNonNull(obj);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -1,1 +1,1 @@
-import org.apache.commons.lang3.Validate;
+import java.util.Objects;

@@ -5,1 +5,1 @@
class Test {
    void test(Object obj) {
-       Validate.notNull(obj);
+       Objects.requireNonNull(obj);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.apache.commons.lang3.Validate;

class Test {
    void test(Object obj) {
        Validate.notNull(obj);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.Objects;

class Test {
    void test(Object obj) {
        Objects.requireNonNull(obj);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -1,1 +1,1 @@
-import org.apache.commons.lang3.Validate;
+import java.util.Objects;

@@ -5,1 +5,1 @@
class Test {
    void test(Object obj) {
-       Validate.notNull(obj);
+       Objects.requireNonNull(obj);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.4` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.4")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.4</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`](../staticanalysis/replacevalidatenotnullhavingsingleargwithobjectsrequirenonnull.md)
* [Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`](../staticanalysis/replacevalidatenotnullhavingvarargswithobjectsrequirenonnull.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull
displayName: Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`
description: Replace `org.apache.commons.lang3.Validate.notNull(..)` with `Objects.requireNonNull(..)`.
recipeList:
  - org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingSingleArgWithObjectsRequireNonNull
  - org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingVarargsWithObjectsRequireNonNull

```
{% endtab %}
{% endtabs %}

## Contributors
* [srmalkan](mailto:smitmalkan99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
