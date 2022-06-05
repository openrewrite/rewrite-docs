---
description: Prerequisites, tools, and recommendations for developing with OpenRewrite
---

# Recipe Development Environment

This getting started guide covers setting up your development environment for creating your own OpenRewrite recipes.

## Prerequisites

* [JDK](https://adoptopenjdk.net) (version 1.8+)
  * A JRE alone is insufficient since OpenRewrite uses compiler internals and tools only found in the JDK
* [Gradle](https://gradle.org) (version 4.0+ ) or [Maven](https://maven.apache.org) (version 3.2+)
* Text Editor or IDE with Java support. [Kotlin](https://kotlinlang.org) support optional but recommended for a good test authoring experience
  * [IntelliJ](https://www.jetbrains.com/idea/download/)
  * [Eclipse](https://www.eclipse.org/downloads/) with [Kotlin Plugin](https://marketplace.eclipse.org/content/kotlin-plugin-eclipse)

## Automatic Project Setup

The easiest way to get started developing your own recipes is to visit the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) repository and click the "Use this template" button. That template comes already set up with all the necessary dependencies, build configuration, an example recipe, and tests of the example recipe.

If you've chosen to use the template, skip to [Recipe Distribution](recipe-development-environment.md#recipe-distribution).

## Manual Project Setup

Gradle and Maven both provide helpful commands for initializing a new project. Either of these commands will lay out an appropriate directory structure and a basic build.gradle or pom.xml.

{% tabs %}
{% tab title="Gradle" %}
```
gradle init
```
{% endtab %}

{% tab title="Maven" %}
```
mvn -B archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4
```
{% endtab %}
{% endtabs %}

### Dependencies & Dependency Management

Rewrite provides a bill of materials (BOM) that when imported into your build, will manage the versions of any rewrite dependencies that are included within a project.

You can import the bill of materials into either Gradle or Maven and then include concrete dependencies on the various rewrite libraries without specifying their version. &#x20;

{% tabs %}
{% tab title="Gradle" %}
```groovy
dependencies {
    // import Rewrite's bill of materials.
    implementation(platform("org.openrewrite.recipe:rewrite-recipe-bom:1.3.0"))

    // rewrite-java dependencies only necessary for Java Recipe development
    implementation("org.openrewrite:rewrite-java")
    runtimeOnly("org.openrewrite:rewrite-java-8")
    runtimeOnly("org.openrewrite:rewrite-java-11")
    runtimeOnly("org.openrewrite:rewrite-java-17")

    // rewrite-maven dependency only necessary for Maven Recipe development
    implementation("org.openrewrite:rewrite-maven")

    // rewrite-yaml dependency only necessary for Yaml Recipe development
    implementation("org.openrewrite:rewrite-yaml")

    // rewrite-properties dependency only necessary for Properties Recipe development
    implementation("org.openrewrite:rewrite-properties")

    // rewrite-xml dependency only necessary for XML Recipe development
    implementation("org.openrewrite:rewrite-xml")

    // For authoring tests for any kind of Recipe
    testImplementation("org.openrewrite:rewrite-test")
    testImplementation("org.junit.jupiter:junit-jupiter-api:latest.release")
    testImplementation("org.junit.jupiter:junit-jupiter-params:latest.release")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:latest.release")
}
```
{% endtab %}

{% tab title="Maven" %}
```markup
<dependencyManagement>
  <dependencies>
      <dependency>
          <groupId>org.openrewrite.recipe</groupId>
          <artifactId>rewrite-recipe-bom</artifactId>
          <version>1.3.0</version>
          <type>pom</type>
          <scope>import</scope>
      </dependency>
  </dependencies>
</dependencyManagement>

...
<dependencies>
    <!-- rewrite-java depedencies only necessary for Java Recipe development -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java</artifactId>
        <scope>compile</scope>
    </dependency>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java-8</artifactId>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java-11</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- rewrite-maven dependency only necessary for Maven Recipe development -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-maven</artifactId>
        <scope>compile</scope>
    </dependency>

    <!-- rewrite-yaml dependency only necessary for Yaml Recipe development -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-yaml</artifactId>
        <scope>compile</scope>
    </dependency>

    <!-- rewrite-properties dependency only necessary for Properties Recipe development -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-properties</artifactId>
        <scope>compile</scope>
    </dependency>

    <!-- rewrite-xml dependency only necessary for XML Recipe development -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-xml</artifactId>
        <scope>compile</scope>
    </dependency>

    <!-- For authoring tests for any kind of Recipe -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-test</artifactId>
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
rewite-java-17, rewrite-java-11 and rewrite-java-8 can happily coexist on the same classpath. At runtime the appropriate module for the current JDK will be selected.
{% endhint %}

### Set Language Level and Bytecode Level

In order to be able to use OpenRewrite to modernize old projects it's important to be able to run on older JDK implementations. So configure the Java compiler to target Java Language and Bytecode level 1.8.

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

### Kotlin Plugin (Optional)

For a good test authoring experience we recommend also applying the Kotlin plugin.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
// https://kotlinlang.org/docs/gradle.html#targeting-the-jvm
plugins {
    id("org.jetbrains.kotlin.jvm") version("1.5.20")
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
Throughout OpenRewrite's documentation, Java is used for Recipe authoring and Kotlin is used for test authoring. You do not have to be constrained by this recommendation: Recipes and tests can be authored in any language that runs on the JVM.
{% endhint %}

### Project Layout

Having configured the project per these recommendations, you're now able to begin Recipe development. With Gradle and Maven's default project layout, here is where to put the various kinds of sources that go into an OpenRewrite Module:

* src/main/java - Recipe implementations in Java
* src/main/kotlin - Recipe implementations in Kotlin
* src/main/resources/META-INF/rewrite - Yaml files defining declarative OpenRewrite Recipes
* src/test/java - Recipe tests in Java
* src/test/kotlin - Recipe tests in Kotlin

Project setup is complete. You are ready [create a Recipe](../tutorials/writing-a-java-refactoring-recipe.md)!

### IDE Configuration

{% hint style="warning" %}
Starting with java 16, the default JVM behavior is not to allow access to protected modules. The workaround for this issue is to add explicit exports for packages used by rewrite's java parser.
{% endhint %}

{% hint style="info" %}
Updating the IDE's JUnit template configuration avoids having to update the configuration for each Test.
{% endhint %}

Add the following exports to the IDE's JVM run configuratons.

```
--add-exports jdk.compiler/com.sun.tools.javac.code=ALL-UNNAME --add-exports jdk.compiler/com.sun.tools.javac.comp=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.file=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.jvm=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.main=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.model=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.processing=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.tree=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED
```

## Recipe Distribution

For your recipes to be usable by the OpenRewrite build plugins or on [app.moderne.io](https://app.moderne.io) they have to be published to an artifact repository.

### Local Publishing for Testing

Before you publish your recipe module to an artifact repository, you may want to try it out locally. To do this on the command line, run `./gradlew publishToMavenLocal` (or equivalently `./gradlew pTML`). This will publish to your local maven repository, typically under `~/.m2/repository`.

### Publishing to Artifact Repositories

The [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) project is configured to publish to Moderne's open artifact repository. [app.moderne.io](https://app.moderne.io) can draw recipes from this repository, as well as from [Maven Central](https://search.maven.org).

Also see:

* Sonatype's instructions for [publishing to Maven Central](https://maven.apache.org/repository/guide-central-repository-upload.html)
* Gradle's instructions on the [Gradle Publishing Plugin](https://docs.gradle.org/current/userguide/publishing\_maven.html).

### Running your Recipes

Once your recipe module is published, either locally for testing or to an external artifact repository for broader distribution, you can configure the build plugins to download your artifact and run its recipes.

{% tabs %}
{% tab title="Gradle" %}
```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("5.22.0")
}

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies {
    rewrite("[your recipe module's groupId]:[your recipe module's artifactId]:[your recipe module's version]")
}

rewrite {
    activeRecipe("[your recipe name]")
}
```

Now you can run your recipe with `./gradlew rewriteRun` or `./gradlew rewriteDryRun`
{% endtab %}

{% tab title="Maven" %}
```xml
<project>
    <build>
        <plugins>
            <plugin>
                <groupId>org.openrewrite.maven</groupId>
                <artifactId>rewrite-maven-plugin</artifactId>
                <version>4.25.0</version>
                <configuration>
                    <activeRecipes>
                        <recipe> [your recipe name] </recipe>
                    </activeRecipes>
                </configuration>
                <dependencies>
                    <dependency>
                        <groupId> [your recipe module's groupId] </groupId>
                        <artifactId> [your recipe module's artifactId] </artifactId>
                        <version> [your recipe module's version] </version>
                    </dependency>
                </dependencies>
            </plugin>
        </plugins>
    </build>
</project>
```

Now you can run your recipe with `mvn rewrite:run` or `mvn rewrite:dryRun`
{% endtab %}
{% endtabs %}

## Next Steps

* [Writing a Java Refactoring Recipe](../tutorials/writing-a-java-refactoring-recipe.md)
* [Maven Plugin Configuration](../reference/rewrite-maven-plugin.md)
* [Gradle Plugin Configuration](../reference/gradle-plugin-configuration.md)
