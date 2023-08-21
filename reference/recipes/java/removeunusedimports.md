# Remove unused imports

**org.openrewrite.java.RemoveUnusedImports**

_Remove imports for types that are not referenced._

### Tags

* RSPEC-1128

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/RemoveUnusedImports.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.3.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.3.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.25")
}

rewrite {
    activeRecipe("org.openrewrite.java.RemoveUnusedImports")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.RemoveUnusedImports</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.RemoveUnusedImports
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Thomas Zub](mailto:thomas.zub@outlook.de)
* tclayton-newr
* [Greg Adams](mailto:greg@moderne.io)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* Patrick Way
* [Patrick](mailto:patway99@gmail.com)
* Tyler Van Gorder
* [Scott Jungling](mailto:scott.jungling@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Kun Li](mailto:kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.RemoveUnusedImports)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
