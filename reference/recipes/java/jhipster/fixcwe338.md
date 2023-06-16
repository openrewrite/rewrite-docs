# Fix CWE-338 with `SecureRandom`

**org.openrewrite.java.jhipster.FixCwe338**

_Use a cryptographically strong pseudo-random number generator (PRNG)._

## Source

[GitHub](https://github.com/openrewrite/rewrite-jhipster/blob/main/src/main/java/org/openrewrite/java/jhipster/FixCwe338.java), [Issue Tracker](https://github.com/openrewrite/rewrite-jhipster/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jhipster/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-jhipster
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-jhipster:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.jhipster.FixCwe338")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-jhipster:2.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.jhipster.FixCwe338</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-jhipster</artifactId>
            <version>2.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jhipster:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.jhipster.FixCwe338
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut@moderne.io)
* [Aaron Gershman](aegershman@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.jhipster.FixCwe338)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
