# Explicit initialization

**org.openrewrite.staticanalysis.ExplicitInitialization**

_Checks if any class or object member is explicitly initialized to default for its type value:
- `null` for object references
- zero for numeric types and `char`
- and `false` for `boolean`
Removes explicit initializations where they aren't necessary._

### Tags

* RSPEC-3052

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ExplicitInitialization.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.3

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
    private int a = 0;
    private long b = 0L;
    private short c = 0;
    private int d = 1;
    private long e = 2L;
    private int f;
    private char g = '\0';

    private boolean h = false;
    private boolean i = true;

    private Object j = new Object();
    private Object k = null;

    int[] l = null;
    int[] m = new int[0];

    private final Long n = null;
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    private int a;
    private long b;
    private short c;
    private int d = 1;
    private long e = 2L;
    private int f;
    private char g;

    private boolean h;
    private boolean i = true;

    private Object j = new Object();
    private Object k;

    int[] l;
    int[] m = new int[0];

    private final Long n = null;
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -2,3 +2,3 @@
class Test {
-   private int a = 0;
-   private long b = 0L;
-   private short c = 0;
+   private int a;
+   private long b;
+   private short c;
    private int d = 1;
@@ -8,1 +8,1 @@
    private long e = 2L;
    private int f;
-   private char g = '\0';
+   private char g;

@@ -10,1 +10,1 @@
    private char g = '\0';

-   private boolean h = false;
+   private boolean h;
    private boolean i = true;
@@ -14,1 +14,1 @@

    private Object j = new Object();
-   private Object k = null;
+   private Object k;

@@ -16,1 +16,1 @@
    private Object k = null;

-   int[] l = null;
+   int[] l;
    int[] m = new int[0];
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
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.ExplicitInitialization")
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
        <version>5.3.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.ExplicitInitialization</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.ExplicitInitialization
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Aaron Gershman](mailto:aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ExplicitInitialization)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
