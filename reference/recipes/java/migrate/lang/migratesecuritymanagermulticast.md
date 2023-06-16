# Use `SecurityManager#checkMulticast(InetAddress)`

**org.openrewrite.java.migrate.lang.MigrateSecurityManagerMulticast**

_Use `SecurityManager#checkMulticast(InetAddress)` instead of the deprecated `SecurityManager#checkMulticast(InetAddress, byte)` in Java 1.4 or higher._

### Tags

* deprecated

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/lang/MigrateSecurityManagerMulticast.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1

## Example


{% tabs %}
{% tab title="org/openrewrite/Test.java" %}

###### Before
{% code title="org/openrewrite/Test.java" %}
```java
package org.openrewrite;

import java.net.InetAddress;
import java.lang.SecurityManager;

class Test {
    public void method() {
        InetAddress maddr = InetAddress.getByName("127.0.0.1");
        byte b = 100;
        new SecurityManager().checkMulticast(maddr, b);
    }
}
```
{% endcode %}

###### After
{% code title="org/openrewrite/Test.java" %}
```java
package org.openrewrite;

import java.net.InetAddress;
import java.lang.SecurityManager;

class Test {
    public void method() {
        InetAddress maddr = InetAddress.getByName("127.0.0.1");
        byte b = 100;
        new SecurityManager().checkMulticast(maddr);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/openrewrite/Test.java
+++ org/openrewrite/Test.java
@@ -10,1 +10,1 @@
-        new SecurityManager().checkMulticast(maddr, b);
+        new SecurityManager().checkMulticast(maddr);
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.lang.MigrateSecurityManagerMulticast")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.1")
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
            <recipe>org.openrewrite.java.migrate.lang.MigrateSecurityManagerMulticast</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.lang.MigrateSecurityManagerMulticast
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.lang.MigrateSecurityManagerMulticast)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
