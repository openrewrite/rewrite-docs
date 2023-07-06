# Rename methods named `hashcode`, `equal`, or `tostring`

**org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrTostring**

_Methods should not be named `hashcode`, `equal`, or `tostring`. Any of these are confusing as they appear to be intended as overridden methods from the `Object` base class, despite being case-insensitive._

### Tags

* RSPEC-1221

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RenameMethodsNamedHashcodeEqualOrTostring.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.3

## Example


{% tabs %}
{% tab title="ITest.java" %}

###### Before
{% code title="ITest.java" %}
```java
interface ITest {
    int HASHcoDE();

    boolean equal(Object obj);

    String tostring();
}

class Test {
    public int hashcode() {
        return 0;
    }

    public boolean equal(Object obj) {
        return false;
    }

    public String tostring() {
        return "";
    }
}
```
{% endcode %}

###### After
{% code title="ITest.java" %}
```java
interface ITest {
    int hashCode();

    boolean equals(Object obj);

    String toString();
}

class Test {
    public int hashCode() {
        return 0;
    }

    public boolean equals(Object obj) {
        return false;
    }

    public String toString() {
        return "";
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- ITest.java
+++ ITest.java
@@ -2,1 +2,1 @@
interface ITest {
-   int HASHcoDE();
+   int hashCode();

@@ -4,1 +4,1 @@
    int HASHcoDE();

-   boolean equal(Object obj);
+   boolean equals(Object obj);

@@ -6,1 +6,1 @@
    boolean equal(Object obj);

-   String tostring();
+   String toString();
}
@@ -10,1 +10,1 @@

class Test {
-   public int hashcode() {
+   public int hashCode() {
        return 0;
@@ -14,1 +14,1 @@
    }

-   public boolean equal(Object obj) {
+   public boolean equals(Object obj) {
        return false;
@@ -18,1 +18,1 @@
    }

-   public String tostring() {
+   public String toString() {
        return "";
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrTostring")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.3")
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
            <recipe>org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrTostring</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.3</version>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrTostring
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Sam Snyder](mailto:sam@moderne.io)
* [Patrick](mailto:patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrTostring)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
