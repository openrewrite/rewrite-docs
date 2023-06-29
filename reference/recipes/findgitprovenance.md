# Show Git source control metadata

**org.openrewrite.FindGitProvenance**

_List out the contents of each unique `GitProvenance` marker in the set of source files. When everything is working correctly, exactly one such marker should be printed as all source files are expected to come from the same repository / branch / commit hash._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/FindGitProvenance.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-core/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 8.1.3

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Distinct Git Provenance

_List out the contents of each unique `GitProvenance` marker in the set of source files. When everything is working correctly, exactly one such marker should be printed as all source files are expected to come from the same repository / branch / commit hash._

| Column Name | Description |
| ----------- | ----------- |
| Origin | The URL of the git remote. |
| Branch | The branch that was checked out at the time the source file was parsed. |
| Changeset | The commit hash of the changeset that was checked out. |
| AutoCRLF | The value of the `core.autocrlf` git config setting. |
| EOL | The value of the `core.eol` git config setting. |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.FindGitProvenance")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.FindGitProvenance</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.FindGitProvenance
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kevin McCarpenter™️](kevin@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.FindGitProvenance)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
