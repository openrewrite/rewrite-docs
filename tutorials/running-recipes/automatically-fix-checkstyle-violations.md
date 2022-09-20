# Automatically Fix Checkstyle Violations

Most programmers agree that having consistent formatting across a code base makes it easier to work with. Tools like [Checkstyle](https://checkstyle.sourceforge.io/) provide automated enforcement of these policies. But it's never fun to have your workflow interrupted by complaints about formatting. This guide will show you how to configure rewrite to automate the remediation of Checkstyle policy violations.

## Example Configuration

How you configure Checkstyle integration depends on whether or not your build also applies a Checkstyle plugin. For Gradle builds this means the built-in plugin named [Checkstyle Plugin](https://docs.gradle.org/current/userguide/checkstyle\_plugin.html). For Maven builds this means [maven-checkstyle-plugin](https://maven.apache.org/plugins/maven-checkstyle-plugin/).

### With Checkstyle Plugin

If your build uses either the Gradle or Maven checkstyle plugins, then good news, the rewrite build plugins will detect that and automatically match their configuration. All that remains is to activate the [Code cleanup ](automatically-fix-checkstyle-violations.md)recipe. Activating that recipe in your build file and running rewrite is all you need to do to begin auto-remediating Checkstyle policy violations.

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <plugins>
    <plugin>
      <groupId>org.openrewrite.maven</groupId>
      <artifactId>rewrite-maven-plugin</artifactId>
      <version>4.33.0</version>
      <configuration>
        <activeRecipes>
          <recipe>org.openrewrite.java.cleanup.Cleanup</recipe>
        </activeRecipes>
      </configuration>
    </plugin>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-checkstyle-plugin</artifactId>
      <version>3.1.2</version>
      <configuration>
        <configLocation>checkstyle.xml</configLocation>
      </configuration>
    </plugin>
  </plugins>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("checkstyle")
    id("org.openrewrite.rewrite") version("5.28.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.Cleanup")
}

repositories {
    mavenCentral() // rewrite is published to Maven Central
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to fix Checkstyle policy violations by running `mvn rewrite:run` or `gradlew rewriteRun`.

{% hint style="info" %}
OpenRewrite can be configured to use different checkstyle policies than your Checkstyle plugin. Follow the "No Checkstyle Plugin" instructions to override the location of the checkstyle configuration file.
{% endhint %}

### No Checkstyle Plugin

If your build does not use either of the Gradle or Maven Checkstyle plugins, you can still configure the rewrite build plugins to use a checkstyle xml configuration file.

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <plugins>
    <plugin>
      <groupId>org.openrewrite.maven</groupId>
      <artifactId>rewrite-maven-plugin</artifactId>
      <version>4.33.0</version>
      <configuration>
        <activeRecipes>
          <recipe>org.openrewrite.java.cleanup.Cleanup</recipe>
        </activeRecipes>
        <checkstyleConfigFile>checkstyle.xml</checkstyleConfigFile>
      </configuration>
    </plugin>
  </plugins>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("5.28.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.Cleanup")
    checkstyleConfigFile = file("checkstyle.xml")
}

repositories {
    mavenCentral() // rewrite is published to Maven Central
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to fix Checkstyle policy violations by running `mvn rewrite:run` or `gradlew rewriteRun`.

## Applying Refactors before Checkstyle

Depending on exactly how your build is configured, it might run Checkstyle _before_ OpenRewrite. So the Checkstyle tool might report violations that would be fixed if your build were to run OpenRewrite first.

{% hint style="warning" %}
With this configuration, rewrite refactoring will be run as part of any build that runs checkstyle.
{% endhint %}

### Gradle

In Gradle, [Task.dependsOn()](https://docs.gradle.org/current/javadoc/org/gradle/api/Task.html#dependsOn-java.lang.Object...-) can be used to ensure that invoking one task always causes another task to run first. That means making all tasks of type `org.gradle.api.plugins.quality.Checkstyle` depend on the rewriteRun task provided by the OpenRewrite plugin.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("checkstyle")
    id("org.openrewrite.rewrite") version("5.28.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.Cleanup")
    checkstyleConfigFile = file("checkstyle.xml")
}

repositories {
    mavenCentral() // rewrite is published to Maven Central
}

// In older versions of gradle, use tasks.get() instead instead of tasks.named()
def rewriteRunTask = tasks.named("rewriteRun")

// In a kotlin build script, use tasks.withType<Checkstyle>() 
tasks.withType(Checkstyle) {
    dependsOn(rewriteRunTask)
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Maven

In Maven, the ordering of goals depends first on which phase of the [Build Lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html) they are declared in, then secondarily by the order in which plugins are declared. This means that the rewrite-maven-plugin should be declared _above_ the maven-checkstyle-plugin in your pom.xml and configured to execute within the same phase as you configure checkstyle to run its "check" goal.

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <plugins>
    <plugin>
      <groupId>org.openrewrite.maven</groupId>
      <artifactId>rewrite-maven-plugin</artifactId>
      <version>4.33.0</version>
      <configuration>
        <activeRecipes>
          <recipe>org.openrewrite.java.cleanup.Cleanup</recipe>
        </activeRecipes>
      </configuration>
      <executions>
        <execution>
          <id>validate</id>
          <phase>validate</phase>
          <goals>
            <goal>run</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-checkstyle-plugin</artifactId>
      <version>3.1.2</version>
      <configuration>
        <configLocation>checkstyle.xml</configLocation>
      </configuration>
      <executions>
        <execution>
          <id>validate</id>
          <phase>validate</phase>
          <goals>
            <goal>check</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
  </plugins>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Known Limitations

We don't have OpenRewrite recipes implemented for all publicly available policies. If you find a checkstyle policy violation you'd like automated, visit the [rewrite](https://github.com/openrewrite/rewrite) repository and file an issue.

{% hint style="info" %}
Checkstyle configuration loading only informs the behavior of recipes, not which recipes are active. Regardless of the presence or non-presence of Checkstyle configuration, OpenRewrite will never apply any refactoring you do not explicitly activate.
{% endhint %}
