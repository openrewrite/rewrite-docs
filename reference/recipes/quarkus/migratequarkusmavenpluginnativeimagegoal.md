# Use `native` profile in `quarkus-maven-plugin`

**org.openrewrite.quarkus.MigrateQuarkusMavenPluginNativeImageGoal**

_Migrates the `quarkus-maven-plugin` deprecated `native-image` goal. If the `native-image` goal needs to be removed, this adds `<quarkus.package.type>native</quarkus.package.type>` to the `native` profile `properties` section, given the `native` profile exists in the `pom.xml`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/java/org/openrewrite/quarkus/MigrateQuarkusMavenPluginNativeImageGoal.java), [Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-quarkus/2.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-quarkus
* version: 2.0.3


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-quarkus:2.0.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("org.openrewrite.quarkus.MigrateQuarkusMavenPluginNativeImageGoal")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:2.0.3")
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
        <version>5.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.quarkus.MigrateQuarkusMavenPluginNativeImageGoal</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>2.0.3</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-quarkus:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.quarkus.MigrateQuarkusMavenPluginNativeImageGoal
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Aaron Gershman](mailto:aegershman@gmail.com)
* Tyler Van Gorder
* Kun Li
* [Knut Wannheden](mailto:knut.wannheden@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.quarkus.MigrateQuarkusMavenPluginNativeImageGoal)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
