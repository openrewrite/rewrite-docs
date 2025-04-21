---
description: Instructions for setting up your local development environment to create OpenRewrite recipes.
---

import ReactPlayer from 'react-player';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Recipe development environment

This getting started guide covers setting up your development environment for creating your own OpenRewrite recipes.

:::info
If you are looking to build [OpenRewrite](https://github.com/openrewrite/rewrite) itself instead of a specific recipe, check out our [building and developing OpenRewrite guide](../reference/building-openrewrite-from-source.md).
:::

## Prerequisites

* [JDK](https://adoptopenjdk.net) (version 1.8+)
  * A JRE alone is insufficient since OpenRewrite uses compiler internals and tools only found in the JDK
* [Gradle](https://gradle.org) (version 4.0+ ) or [Maven](https://maven.apache.org) (version 3.2+)
* [IntelliJ](https://www.jetbrains.com/idea/download/) (version 2024.1+) with [built-in support](https://blog.jetbrains.com/idea/2024/02/intellij-idea-2024-1-eap-7/) for OpenRewrite
  * Other IDEs might work as well, but lack dedicated support

## OpenRewrite plugin in IntelliJ IDEA

We'd strongly recommend you enable the OpenRewrite plugin in IntelliJ when creating your own recipes. For more details on this, check out the video below:

<ReactPlayer url='https://www.youtube.com/watch?v=ULFnBwnTZ9E' controls="true" />

## Automatic project setup

The easiest way to get started developing your own recipes is to visit the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) repository and click the "Use this template" button. That template comes already set up with all the necessary dependencies, build configuration, an example recipe, and tests of the example recipe.

If you've chosen to use the template, skip to [Recipe Distribution](#recipe-distribution). If you'd prefer to not use the template, please continue with the below instructions.

## Manual project setup

Gradle and Maven both provide helpful commands for initializing a new project. Either of these commands will lay out an appropriate directory structure and a basic `build.gradle` or `pom.xml` file.

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

```bash
gradle init
```
</TabItem>

<TabItem value="maven" label="Maven">

```bash
mvn -B archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.5
```

</TabItem>
</Tabs>

:::tip
If you are using Gradle, it is highly-recommended that you apply the [`org.openrewrite.build.recipe-library-base` plugin](https://plugins.gradle.org/plugin/org.openrewrite.build.recipe-library-base). The plugin automatically configures the project with meaningful conventions like necessary compiler options.
:::

### Dependencies & dependency management

Rewrite provides a bill of materials (BOM) that, when imported into your build, will manage the versions of any rewrite dependencies that are included within a project.

You can import the bill of materials into either Gradle or Maven and then include concrete dependencies on the various rewrite libraries without specifying their version.

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

```groovy title="build.gradle"
dependencies {
    // import Rewrite's bill of materials.
    implementation(platform("org.openrewrite.recipe:rewrite-recipe-bom:latest.release"))

    // rewrite-java dependencies only necessary for Java Recipe development
    implementation("org.openrewrite:rewrite-java")

    // You only need the version that corresponds to your current
    // Java version. It is fine to add all of them, though, as
    // they can coexist on a classpath.
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

    // lombok is optional, but recommended for authoring recipes
    compileOnly("org.projectlombok:lombok:latest.release")
    annotationProcessor("org.projectlombok:lombok:latest.release")

    // For authoring tests for any kind of Recipe
    testImplementation("org.openrewrite:rewrite-test")
    testImplementation("org.junit.jupiter:junit-jupiter-api:latest.release")
    testImplementation("org.junit.jupiter:junit-jupiter-params:latest.release")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:latest.release")
}
```
</TabItem>

<TabItem value="maven" label="Maven">

```xml title="pom.xml"
<properties>
  <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
</properties>

<dependencyManagement>
  <dependencies>
      <dependency>
        <groupId>org.junit</groupId>
        <artifactId>junit-bom</artifactId>
        <version>5.11.0</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
      <dependency>
          <groupId>org.openrewrite.recipe</groupId>
          <artifactId>rewrite-recipe-bom</artifactId>
          <version>{{VERSION_REWRITE_RECIPE_BOM}}</version>
          <type>pom</type>
          <scope>import</scope>
      </dependency>
      <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.36</version>
      </dependency>
  </dependencies>
</dependencyManagement>

<dependencies>
    <!-- rewrite-java dependencies only necessary for Java Recipe development -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java</artifactId>
        <scope>compile</scope>
    </dependency>

    <!-- You only need the version that corresponds to your current
    Java version. It is fine to add all of them, though, as
    they can coexist on a classpath. -->
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
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-java-17</artifactId>
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

    <!-- lombok is optional, but recommended for authoring recipes -->
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <optional>true</optional>
    </dependency>

    <!-- For authoring tests for any kind of Recipe -->
    <dependency>
        <groupId>org.openrewrite</groupId>
        <artifactId>rewrite-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>

<build>
    <plugins>
        <plugin>
            <artifactId>maven-surefire-plugin</artifactId>
        </plugin>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.13.0</version>
            <configuration>
                <!-- lombok is optional, but recommended for authoring recipes -->
                <annotationProcessorPaths>
                    <path>
                        <groupId>org.projectlombok</groupId>
                        <artifactId>lombok</artifactId>
                    </path>
                </annotationProcessorPaths>
            </configuration>
        </plugin>
    </plugins>
</build>
```
	</TabItem>
</Tabs>

:::info
rewrite-test uses [JUnit 5](https://junit.org/junit5/).
:::

:::tip
rewrite-java-17, rewrite-java-11 and rewrite-java-8 can happily coexist on the same classpath. At runtime, the appropriate module for the current JDK will be selected.
:::

### Set Language Level and Bytecode Level

To enable running on the widest possible range of JDK versions, configure the Java compiler to target Java Language and Bytecode level 1.8:

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">
For Gradle Kotlin

```kotlin title="build.gradle.kts"
tasks.named<JavaCompile>("compileJava") {
    options.release.set(8)
}
```

For Gradle Groovy

```groovy title="build.gradle"
// notice that we allow test source code to be compiled to release level >8
tasks.compileJava {
    options.release.set(8)
}
```

</TabItem>

<TabItem value="maven" label="Maven">

```markup title="pom.xml"
  <!-- see https://maven.apache.org/plugins/maven-compiler-plugin/examples/set-compiler-source-and-target.html -->
  <properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>
```
</TabItem>
</Tabs>

### Jackson deserialization

Some recipe implementations may use [Jackson deserialization](https://github.com/FasterXML/jackson-annotations) by defining annotations such as `@JsonCreator` and `@JsonProperty`.

In order to deserialize Java classes, you need to add the `-parameters` compiler argument. This is necessary for Jackson to be able to deserialize the constructor parameters of a class.

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

```groovy title="build.gradle"
tasks.withType(JavaCompile).configureEach {
    options.compilerArgs.add('-parameters')
}
```
</TabItem>

<TabItem value="maven" label="Maven">

```xml title="pom.xml"
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.14.0</version>
            <configuration>
                <compilerArgs>
                    <arg>-parameters</arg>
                </compilerArgs>
            </configuration>
        </plugin>
    </plugins>
</build>
```
</TabItem>
</Tabs>

### Project layout

Having configured the project per these recommendations, you're now able to begin Recipe development. With Gradle and Maven's default project layout, you'll want to put your files in these directories:

* `src/main/java` - Recipe implementations
* `src/test/java` - Recipe tests
* (optional) `src/main/resources/META-INF/rewrite` - YAML files for defining [declarative OpenRewrite Recipes](../reference/yaml-format-reference.md)

With all of that done, your project setup is complete! You are now ready to [create a Recipe](./writing-a-java-refactoring-recipe.md).

## Recipe distribution

In order for your recipes to be usable by the OpenRewrite build plugins or on [app.moderne.io](https://app.moderne.io), they have to be published to an artifact repository.

### Local publishing for testing

Before you publish your recipe module to an artifact repository, you may want to try it out locally. Run the command in the below table to publish your recipe to your local Maven repository (which typically exists at `~/.m2/repository`). You can then test this recipe in a separate repository locally by following the instructions in the [running your recipes](#running-your-recipes) section.

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">
Run `gradle publishToMavenLocal` (or, equivalently, `gradle pTML`).
</TabItem>

<TabItem value="maven" label="Maven">

```bash
mvn install
```

</TabItem>
</Tabs>

### Publishing to artifact repositories

The [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) project is configured to publish to Moderne's open artifact repository (via the `publishing` task at the bottom of the `build.gradle.kts` file). If you want to publish elsewhere, you'll want to update that task. [app.moderne.io](https://app.moderne.io) can draw recipes from the provided repository, as well as from [Maven Central](https://search.maven.org).

:::info
Running the publish task _will not_ update [app.moderne.io](https://app.moderne.io), as only Moderne employees can add new recipes. If you want to add your recipe to [app.moderne.io](https://app.moderne.io), please ask the team in [Slack](https://join.slack.com/t/rewriteoss/shared\_invite/zt-nj42n3ea-b\~62rIHzb3Vo0E1APKCXEA) or in [Discord](https://discord.gg/xk3ZKrhWAb).
:::

These other docs might also be useful for you depending on where you want to publish the recipe:

* Sonatype's instructions for [publishing to Maven Central](https://maven.apache.org/repository/guide-central-repository-upload.html)
* Gradle's instructions on the [Gradle Publishing Plugin](https://docs.gradle.org/current/userguide/publishing\_maven.html).

### Running your Recipes

Once your recipe module is published, either locally for testing or to an external artifact repository for broader distribution, you'll need to configure a separate repository to test with (See the [Getting Started Guide](../running-recipes/getting-started.md) for more detailed instructions). In the repository you want to test your recipe against, update the build plugins accordingly:

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

```groovy title="build.gradle"
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
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

:::info
If testing locally, your `rewrite` `dependency` should match the structure of your `.m2` folder. For example, if the path to your recipe in the `.m2` folder is:

* `~/.m2/repository/com/yourorg/rewrite-recipe-starter`

and the jar in that folder is:

* `rewrite-recipe-starter-0.1.0-dev.25.uncommitted+f58d7fa`

then the `rewrite` `dependency` should be:

* `rewrite("com.yourorg:rewrite-recipe-starter:0.1.0-dev.25.uncommitted+f58d7fa")`.
:::

:::warning
If the recipe you're wanting to use is a [Refaster template recipe](./refaster-recipes.md), please keep in mind that the _recipe name_ is not the class name – it is the generated class name. For instance, if you wanted to test the [SimplifyTernary recipe](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/SimplifyTernary.java) - you would need to enter `com.yourorg.SimplifyTernaryRecipes` as the recipe name.
:::

Now you can run your recipe with `gradle rewriteRun` or `gradle rewriteDryRun`

If you run into errors when trying to publish and read your recipe locally, try deleting the jars that end with `uncommitted+<hash>` and then re-build them. Furthermore, if you're getting errors in your IDE when trying to build or run recipes, try restarting the IDE.
</TabItem>

<TabItem value="maven" label="Maven">
```xml title="pom.xml"
<project>
    <build>
        <plugins>
            <plugin>
                <groupId>org.openrewrite.maven</groupId>
                <artifactId>rewrite-maven-plugin</artifactId>
                <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
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

:::info
If testing locally, your `rewrite` `dependency` should match the structure of your `.m2` folder. For example, if the path to your recipe in the `.m2` folder is:

* `~/.m2/repository/com/yourorg/rewrite-recipe-starter/1.0.1-SNAPSHOT`

and the jar in that folder is:

* `rewrite-recipe-starter-1.0.1-SNAPSHOT.jar`

then the `rewrite` `dependency` should have:

* A `groupId` of `com.yourorg`
* An `artifactId` of `rewrite-recipe-starter`,
* A `version` of `1.0.1-SNAPSHOT`.
:::

:::warning
If the recipe you're wanting to use is a [Refaster template recipe](./refaster-recipes.md), please keep in mind that the _recipe name_ is not the class name – it is the generated class name. For instance, if you wanted to test the [SimplifyTernary recipe](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/SimplifyTernary.java) - you would need to enter `com.yourorg.SimplifyTernaryRecipes` as the recipe name.
:::

Now you can run your recipe with `mvn rewrite:run` or `mvn rewrite:dryRun`
</TabItem>
</Tabs>

## Moderne IntelliJ plugin

Moderne offers a [CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) and an [IntelliJ plugin](https://docs.moderne.io/user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install) that can help speed up the development and testing of recipes. We'd strongly encourage you to check those out while developing recipes.

## Next steps

* [Learn about the different types of recipes you can create](./types-of-recipes.md)
* [Write a Java refactoring recipe](./writing-a-java-refactoring-recipe.md)
* [Maven plugin configuration](../reference/rewrite-maven-plugin.md)
* [Gradle plugin configuration](../reference/gradle-plugin-configuration.md)
