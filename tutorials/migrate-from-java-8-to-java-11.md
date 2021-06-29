# Migrate to Java 11 from Java 8

In this tutorial, we'll use Rewrite to perform an automated migration from Java 8 to Java 11. Upgrading an older codebase to Java 11 can be a daunting and time-consuming task. As a developer, you can use Rewrite to quickly tackle the most common issues you will encounter with your upgrade.

## Example Configuration

The [Java 11 migration recipe](https://docs.openrewrite.org/reference/recipes/java/migrate/java8tojava11) can be applied by including Rewrite's plug-in to your project and including a dependency on [rewrite-migrate-java](https://github.com/openrewrite/rewrite-migrate-java):

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>4.5.0</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.migrate.Java8toJava11</recipe>
    </activeRecipes>
  </configuration>
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-migrate-java</artifactId>
      <version>0.2.0</version>
    </dependency>
  </dependencies>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite").version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.Java8toJava11")
}

repositories {
    mavenCentral() // rewrite-spring is published to Maven Central
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:0.2.0")

    // Other project dependencies
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` \(or equivalent\), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## What to Expect

The above recipe is a composite and will perform the following tasks on your project:

* [BigDecimal rounding constants to RoundingMode enums](https://docs.openrewrite.org/reference/recipes/java/cleanup/bigdecimalroundingconstantstoenums)
* [Use primitive wrapper `valueOf` method](https://docs.openrewrite.org/reference/recipes/java/cleanup/primitivewrapperclassconstructortovalueof)
* [Migrate deprecated `java.util.concurrent` API](https://docs.openrewrite.org/reference/recipes/java/migrate/concurrent/javaconcurrentapis)s
* [Migrate deprecated `javax.lang.model.util` API](https://docs.openrewrite.org/reference/recipes/java/migrate/javax/javaxlangmodelutil)s
* [Migrate deprecated `javax.management.monitor` APIs](https://docs.openrewrite.org/reference/recipes/java/migrate/javax/javaxmanagementmonitorapis)
* [Migrate deprecated `javax.xml.stream` APIs](https://docs.openrewrite.org/reference/recipes/java/migrate/javax/javaxxmlstreamapis)
* [Migrate deprecated `java.lang` APIs](https://docs.openrewrite.org/reference/recipes/java/migrate/lang/javalangapis)
* [Migrate deprecated `java.util.logging` APIs](https://docs.openrewrite.org/reference/recipes/java/migrate/logging/javaloggingapis)
* [Migrate deprecated `java.net` APIs](https://docs.openrewrite.org/reference/recipes/java/migrate/net/javanetapis)
* [Migrate deprecated `java.sql` APIs](https://docs.openrewrite.org/reference/recipes/java/migrate/sql/javasqlapis)

For Maven-based projects, these additional modifications will be made:

* [The necessary JAXB dependencies will be added to the pom.xml](https://docs.openrewrite.org/reference/recipes/java/migrate/javax/addjaxbdependencies)
* [The necessary JAX-WS dependencies will be added to the pom.xml](https://docs.openrewrite.org/reference/recipes/java/migrate/javax/addjaxwsdependencies)
* [The `jdeprscan` build plugin will be added to the pom.xml](https://docs.openrewrite.org/reference/recipes/java/migrate/addjdeprscanplugin)

## Before and After

{% tabs %}
{% tab title="Example Class \(Before\)" %}
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
{% endtab %}

{% tab title="Example Class \(After\)" %}
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
{% endtab %}
{% endtabs %}

{% hint style="info" %}
The above example class demonstrates the two most common code migration tasks when moving to Java 11. There are many additional tasks covered by this recipe that are not represented in this example.
{% endhint %}

{% tabs %}
{% tab title="Maven pom \(Before\)" %}
```markup
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.openrewrite.example</groupId>
    <artifactId>jaxb-project</artifactId>
    <version>1.0</version>
    <name>jaxb-project</name>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <java.version>1.8</java.version>
        <maven-jaxb2-plugin.version>0.14.0</maven-jaxb2-plugin.version>
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
    <build>
        <plugins>
            <plugin>
                 <groupId>org.jvnet.jaxb2.maven2</groupId>
                 <artifactId>maven-jaxb2-plugin</artifactId>
                 <version>${maven-jaxb2-plugin.version}</version>
                 <executions>
                     <execution>
                         <goals>
                             <goal>generate</goal>
                         </goals>
                     </execution>
                 </executions>
                 <configuration>
                     <args>
                         <arg>-XautoNameResolution</arg>
                     </args>
                     <schemaDirectory>${project.basedir}/src/main/resources/wsdl</schemaDirectory>
                     <schemaIncludes>
                         <include>*.wsdl</include>
                     </schemaIncludes>
                     <generateDirectory>${project.basedir}/src/main/java</generateDirectory>
                 </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```
{% endtab %}

{% tab title="Maven pom \(After\)" %}
```markup
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.openrewrite.example</groupId>
    <artifactId>jaxb-project</artifactId>
    <version>1.0</version>
    <name>jaxb-project</name>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <java.version>11</java.version>
        <maven-jaxb2-plugin.version>2.5.0</maven-jaxb2-plugin.version>
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
    <build>
        <plugins>
            <plugin>
                 <groupId>org.jvnet.jaxb2.maven2</groupId>
                 <artifactId>maven-jaxb2-plugin</artifactId>
                 <version>${maven-jaxb2-plugin.version}</version>
                 <executions>
                     <execution>
                         <goals>
                             <goal>generate</goal>
                         </goals>
                     </execution>
                 </executions>
                 <configuration>
                     <args>
                         <arg>-XautoNameResolution</arg>
                     </args>
                     <schemaDirectory>${project.basedir}/src/main/resources/wsdl</schemaDirectory>
                     <schemaIncludes>
                         <include>*.wsdl</include>
                     </schemaIncludes>
                     <generateDirectory>${project.basedir}/src/main/java</generateDirectory>
                 </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jdeprscan-plugin</artifactId>
                <version>3.0.0-alpha-1</version>
                <configuration>
                    <release>11</release>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
The JAXB and JAX-WS dependencies will only be added to the project if types from those projects are detected.  
{% endhint %}

{% hint style="info" %}
If you want to know when dependency management for Gradle will be added to rewrite, follow [this issue](https://github.com/openrewrite/rewrite-roadmap/issues/7) on our roadmap.
{% endhint %}

### Known Limitations

The rewrite-migrate-java project is in its infancy and we are always looking for feedback on which tasks should be prioritized. If you have a specific use case that is not yet covered by this project, please reach out to our team!

The following is a list of know limitations/issues:

* The current recipe adds the JAXB and JAX-WS artifacts available from the Jakarta project. If your organization uses an alternate runtime, this may not be desirable.
* There are several build tool plugins that are used to generate Java code from WSDL files and this recipe currently does not automate this process. You will need to manually update the related build plugins.
* There are several additional libraries that have been removed from the Java 11 standard library that are not included with this recipe: `java.corba`, `javax.transaction`, `javax.batch`, JavaFX, Web Start. If you require support for one of these libraries, please reach out to our team or create an issue.
* This recipe does not cover all deprecations listed by the `jdeprscan` tool.  Please see the following these issue \([\#6](https://github.com/openrewrite/rewrite-migrate-java/issues/6), [\#7](https://github.com/openrewrite/rewrite-migrate-java/issues/7), [\#8](https://github.com/openrewrite/rewrite-migrate-java/issues/8), [\#9](https://github.com/openrewrite/rewrite-migrate-java/issues/9), [\#10](https://github.com/openrewrite/rewrite-migrate-java/issues/10), [\#11](https://github.com/openrewrite/rewrite-migrate-java/issues/11), [\#12](https://github.com/openrewrite/rewrite-migrate-java/issues/12), [\#13](https://github.com/openrewrite/rewrite-migrate-java/issues/13), [\#14](https://github.com/openrewrite/rewrite-migrate-java/issues/14), [\#15](https://github.com/openrewrite/rewrite-migrate-java/issues/15), [\#16](https://github.com/openrewrite/rewrite-migrate-java/issues/16)\) for a list of those deprecations covered/not covered and submit an issue if you are impacted by a deprecation that is not covered by this recipe. 



