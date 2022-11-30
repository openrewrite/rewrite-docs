# Migrate to Java 11 from Java 8 through 10

**org.openrewrite.java.migrate.Java8toJava11** \_This recipe will apply changes commonly needed when upgrading to Java 11. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 11 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 11. \_

### Tags

* jaxb
* deprecated
* java11
* jaxws
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.14.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.14.1

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.14.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.Java8toJava11")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.14.1")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.Java8toJava11</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.14.1</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.14.1 \
  -DactiveRecipes=org.openrewrite.java.migrate.Java8toJava11
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.Java8toJava11`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `java.util.Base64` instead of `sun.misc`](usejavautilbase64.md)
* [Add explicit JAXB dependencies](javax/addjaxbdependencies.md)
* [Add explicit JAX-WS dependencies](javax/addjaxwsdependencies.md)
* [Add explicit Inject dependencies](javax/addinjectdependencies.md)
* [Add JDeprScan Maven Plug-in](addjdeprscanplugin.md)
  * release: \`\`
* [`BigDecimal` rounding constants to `RoundingMode` enums](../cleanup/bigdecimalroundingconstantstoenums.md)
* [Use primitive wrapper `valueOf` method](../cleanup/primitivewrapperclassconstructortovalueof.md)
* [Migrate deprecated `java.util.concurrent` APIs](concurrent/javaconcurrentapis.md)
* [Migrate deprecated `java.lang` APIs](lang/javalangapis.md)
* [Migrate deprecated `java.util.logging` APIs](logging/javaloggingapis.md)
* [Migrate deprecated `java.net` APIs](net/javanetapis.md)
* [Migrate deprecated `java.sql` APIs](sql/javasqlapis.md)
* [Migrate deprecated `javax.lang.model.util` APIs in openjdk.](javax/javaxlangmodelutil.md)
* [Migrate deprecated `javax.management.monitor` APIs](javax/javaxmanagementmonitorapis.md)
* [Migrate deprecated `javax.xml.stream` APIs](javax/javaxxmlstreamapis.md)
* [Remove Cobertura Maven plugin](cobertura/removecoberturamavenplugin.md)
* [Upgrade Wro4j plugin version](wro4j/upgradewro4jmavenpluginversion.md)
* [Upgrade JaCoCo Maven plugin version](jacoco/upgradejacocomavenpluginversion.md)
* [Change Maven Java version property values to 11](javaversion11.md)
* [Migrate `java.util` APIs](util/javautilapis.md)
* [Replace !optional.isPresent() with optional.isEmpty()](util/optionalnotpresenttoisempty.md)
* [Replace !optional.isEmpty() with optional.isPresent()](util/optionalnotemptytoispresent.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.Java8toJava11
displayName: Migrate to Java 11 from Java 8 through 10
description: This recipe will apply changes commonly needed when upgrading to Java 11. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 11 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 11.

tags:
  - jaxb
  - deprecated
  - java11
  - jaxws
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.UseJavaUtilBase64
  - org.openrewrite.java.migrate.javax.AddJaxbDependencies
  - org.openrewrite.java.migrate.javax.AddJaxwsDependencies
  - org.openrewrite.java.migrate.javax.AddInjectDependencies
  - org.openrewrite.java.migrate.AddJDeprScanPlugin:
      release: 
  - org.openrewrite.java.cleanup.BigDecimalRoundingConstantsToEnums
  - org.openrewrite.java.cleanup.PrimitiveWrapperClassConstructorToValueOf
  - org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs
  - org.openrewrite.java.migrate.lang.JavaLangAPIs
  - org.openrewrite.java.migrate.logging.JavaLoggingAPIs
  - org.openrewrite.java.migrate.net.JavaNetAPIs
  - org.openrewrite.java.migrate.sql.JavaSqlAPIs
  - org.openrewrite.java.migrate.javax.JavaxLangModelUtil
  - org.openrewrite.java.migrate.javax.JavaxManagementMonitorAPIs
  - org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs
  - org.openrewrite.java.migrate.cobertura.RemoveCoberturaMavenPlugin
  - org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion
  - org.openrewrite.java.migrate.jacoco.UpgradeJaCoCoMavenPluginVersion
  - org.openrewrite.java.migrate.JavaVersion11
  - org.openrewrite.java.migrate.util.JavaUtilAPIs
  - org.openrewrite.java.migrate.util.OptionalNotPresentToIsEmpty
  - org.openrewrite.java.migrate.util.OptionalNotEmptyToIsPresent
```
{% endtab %}
{% endtabs %}
