# Spring Security 5.4 introduces the ability to configure `HttpSecurity` by creating a `SecurityFilterChain` bean

**org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter**

_The Spring Security `WebSecurityConfigurerAdapter` was deprecated 5.7, this recipe will transform `WebSecurityConfigurerAdapter` classes by using a component based approach. Check out the [spring-security-without-the-websecurityconfigureradapter](https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter) blog for more details._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/security5/WebSecurityConfigurerAdapter.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.9/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.9


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.9` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.9")
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
            <recipe>org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.9</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Alex Boyko](mailto:aboyko@vmware.com)
* Kun Li
* Patrick Way
* [Knut Wannheden](mailto:knut@moderne.io)
* [Nick McKinney](mailto:mckinneynichoals@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
* Josh Soref


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
