# Use modernized `javax.management.monitor` APIs

**org.openrewrite.java.migrate.javax.JavaxManagementMonitorAPIs**

_Certain `javax.management.monitor` APIs have become deprecated and their usages changed, necessitating usage changes._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/javax-management-monitor-apis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import javax.management.monitor.CounterMonitor;

public class Test {
    public void method() {
        CounterMonitor monitor = new CounterMonitor();
        monitor.setThreshold(10);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import javax.management.monitor.CounterMonitor;

public class Test {
    public void method() {
        CounterMonitor monitor = new CounterMonitor();
        monitor.setInitThreshold(10);
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
@@ -6,1 +6,1 @@
    public void method() {
        CounterMonitor monitor = new CounterMonitor();
-       monitor.setThreshold(10);
+       monitor.setInitThreshold(10);
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
import javax.management.monitor.CounterMonitor;

public class Test {
    public void method() {
        CounterMonitor monitor = new CounterMonitor();
        monitor.setThreshold(10);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import javax.management.monitor.CounterMonitor;

public class Test {
    public void method() {
        CounterMonitor monitor = new CounterMonitor();
        monitor.setInitThreshold(10);
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
@@ -6,1 +6,1 @@
    public void method() {
        CounterMonitor monitor = new CounterMonitor();
-       monitor.setThreshold(10);
+       monitor.setInitThreshold(10);
    }
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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.JavaxManagementMonitorAPIs")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.JavaxManagementMonitorAPIs</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.JavaxManagementMonitorAPIs
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `javax.management.monitor.CounterMonitor#setInitThreshold`](../../../java/migrate/javax/migratecountermonitorsetthresholdtosetinitthreshold.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.JavaxManagementMonitorAPIs
displayName: Use modernized `javax.management.monitor` APIs
description: Certain `javax.management.monitor` APIs have become deprecated and their usages changed, necessitating usage changes.
recipeList:
  - org.openrewrite.java.migrate.javax.MigrateCounterMonitorSetThresholdToSetInitThreshold

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.JavaxManagementMonitorAPIs)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
