# Migrate to Java 17

In this tutorial, we'll use OpenRewrite to perform an automated migration from Java 8 to Java 17. Upgrading an older codebase to Java 17 can be a daunting and time-consuming task. As a developer, you can use OpenRewrite to quickly tackle the most common issues you will encounter with your upgrade.

This recipe covers the following themes:

* Applications that use any of the Java EE specifications will have those dependencies migrated to Jakarta EE 8. Additionally, the migration to Jakarta EE 8 will also add explicit runtime dependencies on those projects that have transitive dependencies on the Jakarta EE APIs. Currently, only Maven-based build files are supported.
* Any deprecated APIs in the earlier versions of Java that have a well-defined migration path will be automatically applied to an application's sources. The remediation included with this recipe were originally identified using a build plugin called Jdeprscan.
* Illegal Reflective Access warnings will be logged when an application attempts to use an API that has not been publically exported via the module system. This recipe will upgrade well-known, third-party libraries if they provide a version that is compliant with the Java module system.

## Example Configuration

The Java 17 migration recipe can be applied by including OpenRewrite's plug-in to your project and including a dependency on [rewrite-migrate-java](https://github.com/openrewrite/rewrite-migrate-java):

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.openrewrite.maven</groupId>
      <artifactId>rewrite-maven-plugin</artifactId>
      <version>5.40.2</version>
      <configuration>
        <activeRecipes>
          <recipe>org.openrewrite.java.migrate.UpgradeToJava17</recipe>
        </activeRecipes>
      </configuration>
      <dependencies>
        <dependency>
          <groupId>org.openrewrite.recipe</groupId>
          <artifactId>rewrite-migrate-java</artifactId>
          <version>2.21.0</version>
        </dependency>
      </dependencies>
    </plugin>
  </plugins>
</build>
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
      activeRecipe("org.openrewrite.java.migrate.UpgradeToJava17")
  }
  
  repositories {
      mavenCentral() // rewrite-spring is published to Maven Central
  }
  
  dependencies {
      rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:latest-release"))
      rewrite("org.openrewrite.recipe:rewrite-migrate-java")
  
      // Other project dependencies
  }
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## Before and After

For the complete list of changes made by this recipe, please see the reference pages for [Java 11](../../reference/recipes/java/migrate/java8tojava11.md) and [Java 17](../../reference/recipes/java/migrate/upgradetojava17.md). If you have a specific use case that is not yet covered by this project, please reach out to our team!

### Example Class

#### Before

```java
package org.openrewrite.example;

import java.math.BigDecimal;

public class Example {
    Boolean bool = new Boolean(true);
    Byte b = new Byte("1");
    Character c = new Character('c');
    Double d = new Double(1.0);
    Float f = new Float(1.1f);
    Long l = new Long(1);
    Short sh = new Short("12");
    short s3 = 3;
    Short sh3 = new Short(s3);
    Integer i = new Integer(1);

    void divide() {
        BigDecimal bd = BigDecimal.valueOf(10);
        BigDecimal bd2 = BigDecimal.valueOf(2);
        bd.divide(bd2, BigDecimal.ROUND_DOWN);
        bd.divide(bd2, 1);
        bd.divide(bd2, 1, BigDecimal.ROUND_CEILING);
        bd.divide(bd2, 1, 1);
        bd.setScale(2, 1);
    }
}
```

#### After

```java
package org.openrewrite.example;

import java.math.BigDecimal;

public class Example {
    Boolean bool = Boolean.valueOf(true);
    Byte b = Byte.valueOf("1");
    Character c = Character.valueOf('c');
    Double d = Double.valueOf(1.0);
    Float f = Float.valueOf(1.1f);
    Long l = Long.valueOf(1);
    Short sh = Short.valueOf("12");
    short s3 = 3;
    Short sh3 = Short.valueOf(s3);
    Integer i = Integer.valueOf(1);

    void divide() {
        BigDecimal bd = BigDecimal.valueOf(10);
        BigDecimal bd2 = BigDecimal.valueOf(2);
        bd.divide(bd2, RoundingMode.DOWN);
        bd.divide(bd2, RoundingMode.DOWN);
        bd.divide(bd2, 1, RoundingMode.CEILING);
        bd.divide(bd2, 1, RoundingMode.DOWN);
        bd.setScale(2, RoundingMode.DOWN);
    }    
}
```

{% hint style="info" %}
The above example class demonstrates the two most common code migration tasks when moving to Java 11. There are many additional tasks covered by this recipe that are not represented in this example.&#x20;
{% endhint %}

### Maven pom

#### Before

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.openrewrite.example</groupId>
    <artifactId>jaxb-project</artifactId>
    <version>1.0</version>
    <name>jaxb-project</name>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web-services</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
    </dependencies>
</project>
```

#### After

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.openrewrite.example</groupId>
    <artifactId>jaxb-project</artifactId>
    <version>1.0</version>
    <name>jaxb-project</name>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <java.version>17</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web-services</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <!-- JAXB API -->
        <dependency>
            <groupId>jakarta.xml.bind</groupId>
            <artifactId>jakarta.xml.bind-api</artifactId>
            <version>2.3.3</version>
        </dependency>
        <!-- JAXB runtime -->
        <dependency>
            <groupId>org.glassfish.jaxb</groupId>
            <artifactId>jaxb-runtime</artifactId>
            <version>2.3.4</version>
            <scope>runtime</scope>
        </dependency>
    </dependencies>
</project>
```

{% hint style="info" %}
The JAXB and JAX-WS dependencies will only be added to the project if types from those projects are detected.
{% endhint %}

{% hint style="info" %}
Dependency management for Gradle is not currently available but this feature is on OpenRewrite's roadmap.
{% endhint %}

### Known Limitations

The following is a list of known limitations/issues:

* The current recipe adds the JAXB and JAX-WS artifacts available from the Jakarta project. If your organization uses an alternate runtime, this may not be desirable.
* There are several build tool plugins that are used to generate Java code from WSDL files and this recipe currently does not automate this process. You will need to manually update the related build plugins.
* There are several additional libraries that have been removed from the Java 11 standard library that are not included with this recipe: `java.corba`, `javax.transaction`, `javax.batch`, JavaFX, Web Start. If you require support for one of these libraries, please reach out to our team or create an issue.
* This recipe does not cover all deprecations listed by the `jdeprscan` tool. Please see the following these issue ([#6](https://github.com/openrewrite/rewrite-migrate-java/issues/6), [#7](https://github.com/openrewrite/rewrite-migrate-java/issues/7), [#8](https://github.com/openrewrite/rewrite-migrate-java/issues/8), [#9](https://github.com/openrewrite/rewrite-migrate-java/issues/9), [#10](https://github.com/openrewrite/rewrite-migrate-java/issues/10), [#11](https://github.com/openrewrite/rewrite-migrate-java/issues/11), [#12](https://github.com/openrewrite/rewrite-migrate-java/issues/12), [#13](https://github.com/openrewrite/rewrite-migrate-java/issues/13), [#14](https://github.com/openrewrite/rewrite-migrate-java/issues/14), [#15](https://github.com/openrewrite/rewrite-migrate-java/issues/15), [#16](https://github.com/openrewrite/rewrite-migrate-java/issues/16)) for a list of those deprecations covered/not covered and submit an issue if you are impacted by a deprecation that is not covered by this recipe.

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava17)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.