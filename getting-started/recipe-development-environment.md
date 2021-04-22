---
description: 'Prerequisites, tools, and recommendations for developing with Rewrite'
---

# Recipe Development Environment

This getting started guide covers setting up your development environment for creating your own Rewrite recipes.

## Prerequisites

* [JDK](https://adoptopenjdk.net/) \(version 1.8+\)
  * A JRE alone is insufficient since Rewrite uses compiler internals and tools only found in the JDK
* [Gradle](https://gradle.org/) \(version 4.7+ \) or [Maven ](https://maven.apache.org/)\(version 3.2+\)
* Text Editor or IDE with Java support. [Kotlin ](https://kotlinlang.org/)support optional but recommended for a good test authoring experience
  * [IntelliJ](https://www.jetbrains.com/idea/download/)
  * [Eclipse](https://www.eclipse.org/downloads/) with [Kotlin Plugin](https://marketplace.eclipse.org/content/kotlin-plugin-eclipse)

## Project Setup

Gradle and Maven both provide helpful commands for initializing a new project. Either of these commands will lay out an appropriate directory structure and a basic build.gradle or pom.xml.

{% tabs %}
{% tab title="Gradle" %}
```text
gradle init
```
{% endtab %}

{% tab title="Maven" %}
```text
mvn -B archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4
```
{% endtab %}
{% endtabs %}

### Dependencies

Which rewrite libraries you take dependencies on is determined by which languages/data formats you want to write Recipes for.

{% tabs %}
{% tab title="Gradle" %}
```groovy
dependencies {
    // rewrite-java depedencies only necessary for Java Recipe development
    implementation("org.openrewrite:rewrite-java:7.2.1")
    runtimeOnly("org.openrewrite:rewrite-java-11:7.2.1")
    runtimeOnly("org.openrewrite:rewrite-java-8:7.2.1")

    // rewrite-maven dependency only necessary for Maven Recipe development
    implementation("org.openrewrite:rewrite-maven:7.2.1")

    // rewrite-yaml dependency only necessary for Yaml Recipe development
    implementation("org.openrewrite:rewrite-yaml:7.2.1")

    // rewrite-properties dependency only necessary for Properties Recipe development
    implementation("org.openrewrite:rewrite-properties:7.2.1")

    // rewrite-xml dependency only necessary for XML Recipe development
    implementation("org.openrewrite:rewrite-xml:7.2.1")

    // For authoring tests for any kind of Recipe
    testImplementation("org.openrewrite:rewrite-test:7.2.1")
}
```
{% endtab %}

{% tab title="Maven" %}
```markup
<dependencies>
    <!-- rewrite-java depedencies only necessary for Java Recipe development -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java</artifactId>
        <version>7.2.1</version>
        <scope>compile</scope>
    </dependency>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java-8</artifactId>
        <version>7.2.1</version>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java-11</artifactId>
        <version>7.2.1</version>
        <scope>runtime</scope>
    </dependency>

    <!-- rewrite-maven dependency only necessary for Maven Recipe development -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-maven</artifactId>
        <version>7.2.1</version>
        <scope>compile</scope>
    </dependency>

    <!-- rewrite-yaml dependency only necessary for Yaml Recipe development -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-yaml</artifactId>
        <version>7.2.1</version>
        <scope>compile</scope>
    </dependency>

    <!-- rewrite-properties dependency only necessary for Properties Recipe development -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-properties</artifactId>
        <version>7.2.1</version>
        <scope>compile</scope>
    </dependency>

    <!-- rewrite-xml dependency only necessary for XML Recipe development -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-xml</artifactId>
        <version>7.2.1</version>
        <scope>compile</scope>
    </dependency>    

    <!-- For authoring tests for any kind of Recipe -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-test</artifactId>
        <version>7.2.1</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
rewrite-test uses [JUnit 5](https://junit.org/junit5/).
{% endhint %}

{% hint style="success" %}
rewrite-java-11 and rewrite-java-8 can happily coexist on the same classpath. At runtime the appropriate module for the current JDK will be selected.
{% endhint %}

### Set Language Level and Bytecode Level

In order to be able to use Rewrite to modernize old projects it's important to be able to run on older JDK implementations. So configure the Java compiler to target Java Language and Bytecode level 1.8.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
// See https://docs.gradle.org/current/userguide/building_java_projects.html#sec:java_cross_compilation
tasks.withType(JavaCompile) {        
    sourceCompatibility = JavaVersion.VERSION_1_8.toString()
    targetCompatibility = JavaVersion.VERSION_1_8.toString()
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
  <!-- see https://maven.apache.org/plugins/maven-compiler-plugin/examples/set-compiler-source-and-target.html -->
  <properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Kotlin Plugin \(Optional\)

For a good test authoring experience we recommend also applying the Kotlin plugin.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
// https://kotlinlang.org/docs/gradle.html#targeting-the-jvm
plugins {
    id("org.jetbrains.kotlin.jvm") version("1.4.31")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<!-- https://kotlinlang.org/docs/maven.html -->
<properties>
    <kotlin.version>1.4.31</kotlin.version>
</properties>

<dependencies>
    <dependency>
        <groupId>org.jetbrains.kotlin</groupId>
        <artifactId>kotlin-stdlib</artifactId>
        <version>${kotlin.version}</version>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <groupId>org.jetbrains.kotlin</groupId>
            <artifactId>kotlin-maven-plugin</artifactId>
            <version>${kotlin.version}</version>
            <executions>
                <execution>
                    <id>compile</id>
                    <goals>
                        <goal>compile</goal>
                    </goals>
                    <configuration>
                        <sourceDirs>
                            <sourceDir>${project.basedir}/src/main/kotlin</sourceDir>
                            <sourceDir>${project.basedir}/src/main/java</sourceDir>
                        </sourceDirs>
                    </configuration>
                </execution>
                <execution>
                    <id>test-compile</id>
                    <goals> <goal>test-compile</goal> </goals>
                    <configuration>
                        <sourceDirs>
                            <sourceDir>${project.basedir}/src/test/kotlin</sourceDir>
                            <sourceDir>${project.basedir}/src/test/java</sourceDir>
                        </sourceDirs>
                    </configuration>
                </execution>
            </executions>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.5.1</version>
            <executions>
                <!-- Replacing default-compile as it is treated specially by maven -->
                <execution>
                    <id>default-compile</id>
                    <phase>none</phase>
                </execution>
                <!-- Replacing default-testCompile as it is treated specially by maven -->
                <execution>
                    <id>default-testCompile</id>
                    <phase>none</phase>
                </execution>
                <execution>
                    <id>java-compile</id>
                    <phase>compile</phase>
                    <goals>
                        <goal>compile</goal>
                    </goals>
                </execution>
                <execution>
                    <id>java-test-compile</id>
                    <phase>test-compile</phase>
                    <goals>
                        <goal>testCompile</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Throughout Rewrite's documentation Java is used for Recipe authoring and Kotlin is used for test authoring. You do not have to be constrained by this recommendation: Recipes and tests can be authored in any language that runs on the JVM.
{% endhint %}

## Project Layout

Having configured the project per these recommendations, you're now able to begin Recipe development. With Gradle and Maven's default project layout, here is where to put the various kinds of sources that go into a Rewrite Module:

* src/main/java - Recipe implementations in Java
* src/main/kotlin - Recipe implementations in Kotlin
* src/main/resources/META-INF/rewrite - Yaml files defining declarative Rewrite Recipes
* src/test/java - Recipe tests in Java
* src/test/kotlin - Recipe tests in Kotlin

With this project setup is complete and you are ready to move on to authoring a Recipe!

## Recipe Distribution

With your project set up as instructed by this guide the jar produced by your build is ready to be consumed as a rewrite module. Once published to an artifact repository like Maven Central, other projects can take a dependency on your Rewrite module and activate the recipes contained therein.

## Next Steps

* [Writing a Java Refactoring Recipe](../tutorials/writing-a-java-refactoring-recipe.md)
* [Maven Plugin Configuration](../reference/rewrite-maven-plugin.md)
* [Gradle Plugin Configuration](../reference/gradle-plugin-configuration.md)

