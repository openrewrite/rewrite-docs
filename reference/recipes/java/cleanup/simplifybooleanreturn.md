# Simplify boolean return

**org.openrewrite.java.cleanup.SimplifyBooleanReturn**

_Simplifies Boolean expressions by removing redundancies, e.g.: `a && true` simplifies to `a`._

### Tags

* RSPEC-1126

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/cleanup/SimplifyBooleanReturn.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.3

## Example


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
public class A {
    boolean ifNoElse() {
        if (isOddMillis()) {
            return true;
        }
        return false;
    }

    static boolean isOddMillis() {
        boolean even = System.currentTimeMillis() % 2 == 0;
        if (even == true) {
            return false;
        }
        else {
            return true;
        }
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
public class A {
    boolean ifNoElse() {
        return isOddMillis();
    }

    static boolean isOddMillis() {
        boolean even = System.currentTimeMillis() % 2 == 0;
        return !(even == true);
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
@@ -3,4 +3,1 @@
public class A {
    boolean ifNoElse() {
-       if (isOddMillis()) {
-           return true;
-       }
-       return false;
+       return isOddMillis();
    }
@@ -11,6 +8,1 @@
    static boolean isOddMillis() {
        boolean even = System.currentTimeMillis() % 2 == 0;
-       if (even == true) {
-           return false;
-       }
-       else {
-           return true;
-       }
+       return !(even == true);
    }
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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.SimplifyBooleanReturn")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.SimplifyBooleanReturn</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.cleanup.SimplifyBooleanReturn
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)
* [Greg Adams](greg@moderne.io)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.cleanup.SimplifyBooleanReturn)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
