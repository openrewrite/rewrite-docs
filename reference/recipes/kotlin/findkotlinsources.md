# Find Kotlin sources and collect data metrics

**org.openrewrite.kotlin.FindKotlinSources**

_Use data table to collect source files types and counts of files with extensions `.kt`._

## Source

[Github](https://github.com/openrewrite/rewrite-kotlin/blob/main/src/main/java/org/openrewrite/kotlin/FindKotlinSources.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kotlin/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-kotlin/0.5.0-SNAPSHOT/jar)

* groupId: org.openrewrite
* artifactId: rewrite-kotlin
* version: 0.5.0-SNAPSHOT

## Example
* Example 1: 

#### Before
```null
class A

```

#### After
```null
/*~~>*/class A

```

## Contributors
<span style="display: inline-block; width: 50px; height: 50px; border-radius: 50%; background-color: #555; color: #fff; text-align: center; line-height: 50px; font-size: 24px; text-transform: uppercase;" title="traceyyoshima(tracey.yoshima@gmail.com)">T</span>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite:rewrite-kotlin:0.5.0-SNAPSHOT` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.kotlin.FindKotlinSources")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-kotlin:0.5.0-SNAPSHOT")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kotlin.FindKotlinSources</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-kotlin</artifactId>
            <version>0.5.0-SNAPSHOT</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite:rewrite-kotlin:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.kotlin.FindKotlinSources
```
{% endcode %}
{% endtab %}
{% endtabs %}


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.kotlin.FindKotlinSources)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
