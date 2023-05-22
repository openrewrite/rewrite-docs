# Use `javax.management.monitor.CounterMonitor#setInitThreshold`

**org.openrewrite.java.migrate.javax.MigrateCounterMonitorSetThresholdToSetInitThreshold**

_Use `javax.management.monitor.CounterMonitor#setInitThreshold` instead of the deprecated `javax.management.monitor.CounterMonitor#setThreshold` in JMX 1.2 or higher._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/javax-management-monitor-apis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.22.0-SNAPSHOT/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.22.0-SNAPSHOT


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:1.22.0-SNAPSHOT` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.6")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.MigrateCounterMonitorSetThresholdToSetInitThreshold")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.22.0-SNAPSHOT")
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
        <version>4.46.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.MigrateCounterMonitorSetThresholdToSetInitThreshold</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.22.0-SNAPSHOT</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.MigrateCounterMonitorSetThresholdToSetInitThreshold
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `javax.management.monitor.CounterMonitor setThreshold(java.lang.Number)`
  * newMethodName: `setInitThreshold`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.MigrateCounterMonitorSetThresholdToSetInitThreshold
displayName: Use `javax.management.monitor.CounterMonitor#setInitThreshold`
description: Use `javax.management.monitor.CounterMonitor#setInitThreshold` instead of the deprecated `javax.management.monitor.CounterMonitor#setThreshold` in JMX 1.2 or higher.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: javax.management.monitor.CounterMonitor setThreshold(java.lang.Number)
      newMethodName: setInitThreshold

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.javax.MigrateCounterMonitorSetThresholdToSetInitThreshold)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
