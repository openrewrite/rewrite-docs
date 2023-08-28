# Find LST provenance

**org.openrewrite.FindLstProvenance**

_Produces a data table showing what versions of OpenRewrite/Moderne tooling was used to produce a given LST._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/FindLstProvenance.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-core/8.4.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 8.4.1

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### LST provenance

_Table showing which tools were used to produce LSTs._

| Column Name | Description |
| ----------- | ----------- |
| Build tool type | The type of tool which produced the LST. |
| Build tool version | The version of the build tool which produced the LST. |
| LST serializer version | The version of LST serializer which produced the LST. |
| Timestamp (epoch millis) | UTC timestamp describing when the LST was produced, in milliseconds since the unix epoch. |
| Timestamp | UTC timestamp describing when the LST was produced, in ISO-8601 format. e.g.: "2023‐08‐07T22:24:06+00:00 UTC+00:00" |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.2.4")
}

rewrite {
    activeRecipe("org.openrewrite.FindLstProvenance")
}

repositories {
    mavenCentral()
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
        <version>5.4.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.FindLstProvenance</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.FindLstProvenance
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Sam Snyder](mailto:sam@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.FindLstProvenance)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
