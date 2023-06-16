# No primitive wrappers for #toString() or #compareTo(..)

**org.openrewrite.staticanalysis.NoPrimitiveWrappersForToStringOrCompareTo**

_Primitive wrappers should not be instantiated only for `#toString()` or `#compareTo(..)` invocations._

### Tags

* RSPEC-1158

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/NoPrimitiveWrappersForToStringOrCompareTo.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1

## Example


{% tabs %}
{% tab title="T.java" %}

###### Before
{% code title="T.java" %}
```java
class T {
     String a = new Integer(3).toString();
     String b = Long.valueOf(3).toString();
     String c = Double.valueOf(3.0).toString();
     String d = Float.valueOf("4").toString();
     String e = new Float("3").toString();
     String f = Boolean.valueOf(true).toString();
     String G = Boolean.valueOf("true").toString();
}
```
{% endcode %}

###### After
{% code title="T.java" %}
```java
class T {
     String a = Integer.toString(3);
     String b = Long.toString(3);
     String c = Double.toString(3.0);
     String d = Float.valueOf("4").toString();
     String e = new Float("3").toString();
     String f = Boolean.toString(true);
     String G = Boolean.valueOf("true").toString();
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- T.java
+++ T.java
@@ -2,3 +2,3 @@
-     String a = new Integer(3).toString();
     String b = Long.valueOf(3).toString();
     String c = Double.valueOf(3.0).toString();
+     String a = Integer.toString(3);
     String b = Long.toString(3);
     String c = Double.toString(3.0);
@@ -7,1 +7,1 @@
-     String f = Boolean.valueOf(true).toString();
+     String f = Boolean.toString(true);
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.NoPrimitiveWrappersForToStringOrCompareTo")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.1")
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
            <recipe>org.openrewrite.staticanalysis.NoPrimitiveWrappersForToStringOrCompareTo</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.1</version>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.NoPrimitiveWrappersForToStringOrCompareTo
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick Way](pway99@users.noreply.github.com)
* [Patrick](patway99@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.staticanalysis.NoPrimitiveWrappersForToStringOrCompareTo)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
