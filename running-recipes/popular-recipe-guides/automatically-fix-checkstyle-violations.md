# Automatically Fix Checkstyle Violations

Most programmers agree that having consistent formatting across a code base makes it easier to work with. Tools like [Checkstyle](https://checkstyle.sourceforge.io/) provide automated enforcement of these policies. But it's never fun to have your workflow interrupted by complaints about formatting. This guide will show you how to configure OpenRewrite to automate the remediation of Checkstyle policy violations.

## Example Configuration

How you configure Checkstyle integration depends on whether or not your build also applies a Checkstyle plugin. For Gradle builds this means the built-in plugin named [Checkstyle Plugin](https://docs.gradle.org/current/userguide/checkstyle_plugin.html). For Maven builds this means [maven-checkstyle-plugin](https://maven.apache.org/plugins/maven-checkstyle-plugin/).

### With Checkstyle Plugin

If your build uses either the Gradle or Maven checkstyle plugins, then good news, the OpenRewrite build plugins will detect that and automatically match their configuration. All that remains is to activate the [Code cleanup](/reference/recipes/staticanalysis/codecleanup.md) recipe:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.CodeCleanup</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.13.0</version>
          </dependency>
        </dependencies>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-checkstyle-plugin</artifactId>
        <version>3.4.0</version>
        <configuration>
          <configLocation>checkstyle.xml</configLocation>
        </configuration>
      </plugin>
    </plugins>
  </build>
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
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.CodeCleanup")
}

repositories {
    mavenCentral() // rewrite is published to Maven Central
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:latest-release")
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

If your build does not use either of the Gradle or Maven Checkstyle plugins, you can still configure the rewrite build plugins to use a checkstyle xml configuration file:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.CodeCleanup</recipe>
          </activeRecipes>
          <checkstyleConfigFile>checkstyle.xml</checkstyleConfigFile>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.13.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.CodeCleanup")
    checkstyleConfigFile = file("checkstyle.xml")
}

repositories {
    mavenCentral() // rewrite is published to Maven Central
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:latest-release")
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

In Gradle, [Task.dependsOn()](https://docs.gradle.org/current/javadoc/org/gradle/api/Task.html#dependsOn-java.lang.Object...-) can be used to ensure that invoking one task always causes another task to run first. That means making all tasks of type `org.gradle.api.plugins.quality.Checkstyle` depend on the `rewriteRun` task provided by the OpenRewrite plugin.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("checkstyle")
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.CodeCleanup")
    checkstyleConfigFile = file("checkstyle.xml")
}

repositories {
    mavenCentral() // rewrite is published to Maven Central
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:latest-release")
}

// In older versions of gradle, use tasks.get() instead of tasks.named()
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

In Maven, the ordering of goals depends first on which phase of the [Build Lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html) they are declared in, then secondarily by the order in which plugins are declared. This means that the `rewrite-maven-plugin` should be declared _above_ the `maven-checkstyle-plugin` in your `pom.xml` and configured to execute within the same phase as you configure checkstyle to run its "check" goal.

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.CodeCleanup</recipe>
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
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.13.0</version>
          </dependency>
        </dependencies>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-checkstyle-plugin</artifactId>
        <version>3.4.0</version>
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
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Known Limitations

We don't have OpenRewrite recipes implemented for all publicly available policies. If you find a checkstyle policy violation you'd like automated, visit the [rewrite](https://github.com/openrewrite/rewrite) repository and file an issue (or help out the community by contributing one yourself).

{% hint style="info" %}
Checkstyle configuration loading only informs the behavior of recipes, not which recipes are active. Regardless of the presence or non-presence of Checkstyle configuration, OpenRewrite will never apply any refactoring you do not explicitly activate.
{% endhint %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CodeCleanup)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.