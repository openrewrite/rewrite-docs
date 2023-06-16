# Use `String.equals()` on String literals

**org.openrewrite.staticanalysis.StringLiteralEquality**

_`String.equals()` should be used when checking value equality on String literals. Using `==` or `!=` compares object references, not the actual value of the Strings. This only modifies code where at least one side of the binary operation (`==` or `!=`) is a String literal, such as `"someString" == someVariable;`. This is to prevent inadvertently changing code where referential equality is the user's intent._

### Tags

* RSPEC-4973

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/StringLiteralEquality.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.util.List;
class Test {
    public String getString() {
        return "stringy";
    }

    public void method(String str) {
        if (str == "test") ;
        if ("test" == str) ;
        if ("test" == "test") ;
        if ("test" == new String("test")) ;
        if ("test" == getString());
        boolean flag = (str == "test");
        while ("test" == str) {
        }
    }

    public void findPeter(List<Friend> friends) {
        friends.stream().filter(e -> e.name == "peter");
    }

    class Friend {
        String name;
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.List;
class Test {
    public String getString() {
        return "stringy";
    }

    public void method(String str) {
        if ("test".equals(str)) ;
        if ("test".equals(str)) ;
        if ("test".equals("test")) ;
        if ("test".equals(new String("test"))) ;
        if ("test".equals(getString()));
        boolean flag = ("test".equals(str));
        while ("test".equals(str)) {
        }
    }

    public void findPeter(List<Friend> friends) {
        friends.stream().filter(e -> "peter".equals(e.name));
    }

    class Friend {
        String name;
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
@@ -8,7 +8,7 @@

    public void method(String str) {
-       if (str == "test") ;
-       if ("test" == str) ;
-       if ("test" == "test") ;
-       if ("test" == new String("test")) ;
-       if ("test" == getString());
-       boolean flag = (str == "test");
-       while ("test" == str) {
+       if ("test".equals(str)) ;
+       if ("test".equals(str)) ;
+       if ("test".equals("test")) ;
+       if ("test".equals(new String("test"))) ;
+       if ("test".equals(getString()));
+       boolean flag = ("test".equals(str));
+       while ("test".equals(str)) {
        }
@@ -19,1 +19,1 @@

    public void findPeter(List<Friend> friends) {
-       friends.stream().filter(e -> e.name == "peter");
+       friends.stream().filter(e -> "peter".equals(e.name));
    }
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
    activeRecipe("org.openrewrite.staticanalysis.StringLiteralEquality")
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
            <recipe>org.openrewrite.staticanalysis.StringLiteralEquality</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.StringLiteralEquality
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Knut Wannheden](knut@moderne.io)
* [Aaron Gershman](aegershman@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.staticanalysis.StringLiteralEquality)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
