# Zip slip

**org.openrewrite.java.security.ZipSlip**

_Zip slip is an arbitrary file overwrite critical vulnerability, which typically results in remote command execution. A fuller description of this vulnerability is available in the [Snyk documentation](https://snyk.io/research/zip-slip-vulnerability) on it._

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/java/org/openrewrite/java/security/ZipSlip.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `boolean` | debug | Debug and output intermediate results. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|debug|`false`|


{% tabs %}
{% tab title="ZipTest.java" %}

###### Before
{% code title="ZipTest.java" %}
```java
import java.io.File;
import java.io.FileOutputStream;
import java.io.RandomAccessFile;
import java.io.FileWriter;
import java.util.zip.ZipEntry;

public class ZipTest {
    public void m1(ZipEntry entry, File dir) throws Exception {
        String name = entry.getName();
        File file = new File(dir, name);
        FileOutputStream os = new FileOutputStream(file); // ZipSlip
        RandomAccessFile raf = new RandomAccessFile(file, "rw"); // ZipSlip
        FileWriter fw = new FileWriter(file); // ZipSlip
    }
}
```
{% endcode %}

###### After
{% code title="ZipTest.java" %}
```java
import java.io.*;
import java.util.zip.ZipEntry;

public class ZipTest {
    public void m1(ZipEntry entry, File dir) throws Exception {
        String name = entry.getName();
        File file = new File(dir, name);
        if (!file.toPath().normalize().startsWith(dir.toPath().normalize())) {
            throw new IOException("Bad zip entry");
        }
        FileOutputStream os = new FileOutputStream(file); // ZipSlip
        RandomAccessFile raf = new RandomAccessFile(file, "rw"); // ZipSlip
        FileWriter fw = new FileWriter(file); // ZipSlip
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- ZipTest.java
+++ ZipTest.java
@@ -1,4 +1,1 @@
-import java.io.File;
-import java.io.FileOutputStream;
-import java.io.RandomAccessFile;
-import java.io.FileWriter;
+import java.io.*;
import java.util.zip.ZipEntry;
@@ -11,0 +8,3 @@
        String name = entry.getName();
        File file = new File(dir, name);
+       if (!file.toPath().normalize().startsWith(dir.toPath().normalize())) {
+           throw new IOException("Bad zip entry");
+       }
        FileOutputStream os = new FileOutputStream(file); // ZipSlip
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ZipSlipExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ZipSlipExample
displayName: Zip slip example
recipeList:
  - org.openrewrite.java.security.ZipSlip:
      debug: true
```
{% endcode %}

Now that `com.yourorg.ZipSlipExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-security:2.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.ZipSlipExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:2.0.1")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ZipSlipExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
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
{% endtabs %}

## Contributors
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.security.ZipSlip)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
