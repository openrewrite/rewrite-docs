# Migrate to Java 11

**org.openrewrite.java.migrate.Java8toJava11**

_This recipe will apply changes commonly needed when upgrading to Java 11. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 11 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 11._

### Tags

* jaxb
* deprecated
* java11
* jaxws
* jakarta

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-11.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.5.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.5.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.5.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.Java8toJava11")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.5.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.6.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.5.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.Java8toJava11")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.17.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.Java8toJava11</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.5.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.Java8toJava11
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe Java8toJava11
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Java 8](../../java/migrate/upgradetojava8.md)
* [Prefer `java.util.Base64` instead of `sun.misc`](../../java/migrate/usejavautilbase64.md)
* [Remove explicit casts on `Arrays.asList(..).toArray()`](../../java/migrate/castarraysaslisttolist.md)
* [Add explicit JAXB dependencies](../../java/migrate/javax/addjaxbdependencies.md)
* [Add explicit JAX-WS dependencies](../../java/migrate/javax/addjaxwsdependencies.md)
* [Add explicit Inject dependencies](../../java/migrate/javax/addinjectdependencies.md)
* [`BigDecimal` rounding constants to `RoundingMode` enums](../../staticanalysis/bigdecimalroundingconstantstoenums.md)
* [Use primitive wrapper `valueOf` method](../../staticanalysis/primitivewrapperclassconstructortovalueof.md)
* [Use modernized `java.util.concurrent` APIs](../../java/migrate/concurrent/javaconcurrentapis.md)
* [Use modernized `java.lang` APIs](../../java/migrate/lang/javalangapis.md)
* [Remove methods calls](../../java/migrate/removemethodinvocation.md)
  * methodPattern: `java.lang.Runtime runFinalizersOnExit(boolean)`
* [Remove methods calls](../../java/migrate/removemethodinvocation.md)
  * methodPattern: `java.lang.System runFinalizersOnExit(boolean)`
* [Use modernized `java.util.logging` APIs](../../java/migrate/logging/javaloggingapis.md)
* [Migrate Lombok to a Java 11 compatible version](../../java/migrate/lombok/updatelomboktojava11.md)
* [Use modernized `java.net` APIs](../../java/migrate/net/javanetapis.md)
* [Use modernized `java.sql` APIs](../../java/migrate/sql/javasqlapis.md)
* [Use modernized `javax.lang.model.util` APIs](../../java/migrate/javax/javaxlangmodelutil.md)
* [Use modernized `javax.management.monitor` APIs](../../java/migrate/javax/javaxmanagementmonitorapis.md)
* [Use modernized `javax.xml.stream` APIs](../../java/migrate/javax/javaxxmlstreamapis.md)
* [Remove Cobertura Maven plugin](../../java/migrate/cobertura/removecoberturamavenplugin.md)
* [Upgrade Wro4j plugin version](../../java/migrate/wro4j/upgradewro4jmavenpluginversion.md)
* [Upgrade JaCoCo Maven plugin version](../../java/migrate/jacoco/upgradejacocomavenpluginversion.md)
* [Change Maven Java version property values to 11](../../java/migrate/javaversion11.md)
* [Prefer `Optional.isEmpty()`](../../java/migrate/util/optionalnotpresenttoisempty.md)
* [Prefer `Optional.isPresent()`](../../java/migrate/util/optionalnotemptytoispresent.md)
* [`Stream<Optional>` idiom recipe](../../java/migrate/util/optionalstreamrecipe.md)
* [Upgrade `actions/setup-java` `java-version`](../../github/setupjavaupgradejavaversion.md)
  * minimumJavaMajorVersion: `11`
* [Use `com.sun.xml.bind.v2.ContextFactory` instead of `com.sun.xml.internal.bind.v2.ContextFactory`](../../java/migrate/internalbindcontextfactory.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.Java8toJava11
displayName: Migrate to Java 11
description: This recipe will apply changes commonly needed when upgrading to Java 11. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 11 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 11.

tags:
  - jaxb
  - deprecated
  - java11
  - jaxws
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava8
  - org.openrewrite.java.migrate.UseJavaUtilBase64
  - org.openrewrite.java.migrate.CastArraysAsListToList
  - org.openrewrite.java.migrate.javax.AddJaxbDependencies
  - org.openrewrite.java.migrate.javax.AddJaxwsDependencies
  - org.openrewrite.java.migrate.javax.AddInjectDependencies
  - org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums
  - org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf
  - org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs
  - org.openrewrite.java.migrate.lang.JavaLangAPIs
  - org.openrewrite.java.migrate.RemoveMethodInvocation:
      methodPattern: java.lang.Runtime runFinalizersOnExit(boolean)
  - org.openrewrite.java.migrate.RemoveMethodInvocation:
      methodPattern: java.lang.System runFinalizersOnExit(boolean)
  - org.openrewrite.java.migrate.logging.JavaLoggingAPIs
  - org.openrewrite.java.migrate.lombok.UpdateLombokToJava11
  - org.openrewrite.java.migrate.net.JavaNetAPIs
  - org.openrewrite.java.migrate.sql.JavaSqlAPIs
  - org.openrewrite.java.migrate.javax.JavaxLangModelUtil
  - org.openrewrite.java.migrate.javax.JavaxManagementMonitorAPIs
  - org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs
  - org.openrewrite.java.migrate.cobertura.RemoveCoberturaMavenPlugin
  - org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion
  - org.openrewrite.java.migrate.jacoco.UpgradeJaCoCoMavenPluginVersion
  - org.openrewrite.java.migrate.JavaVersion11
  - org.openrewrite.java.migrate.util.OptionalNotPresentToIsEmpty
  - org.openrewrite.java.migrate.util.OptionalNotEmptyToIsPresent
  - org.openrewrite.java.migrate.util.OptionalStreamRecipe
  - org.openrewrite.github.SetupJavaUpgradeJavaVersion:
      minimumJavaMajorVersion: 11
  - org.openrewrite.java.migrate.InternalBindContextFactory

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.Java8toJava11)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Chuka Obinabo, [Sam Snyder](mailto:sam@moderne.io), [Shannon Pamperl](mailto:shanman190@gmail.com), Tyler Van Gorder, [Tim te Beek](mailto:tim.te.beek@jdriven.com), [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Satvika Eda](mailto:satvika164.reddy@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), Adam Slaski, [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), Aaron Gershman, [Patrick](mailto:patway99@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), Kun Li, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Joan Viladrosa](mailto:joan@moderne.io), [Tim te Beek](mailto:tim@moderne.io), Josh Soref, [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
