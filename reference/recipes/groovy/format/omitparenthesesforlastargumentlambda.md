# Move a closure which is the last argument of a method invocation out of parentheses

**org.openrewrite.groovy.format.OmitParenthesesForLastArgumentLambda**

_Groovy allows a shorthand syntax that allows a closure to be placed outside of parentheses._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-groovy/src/main/java/org/openrewrite/groovy/format/OmitParenthesesForLastArgumentLambda.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-groovy/7.40.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-groovy
* version: 7.40.6

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.groovy.format.OmitParenthesesForLastArgumentLambda")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.groovy.format.OmitParenthesesForLastArgumentLambda</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.groovy.format.OmitParenthesesForLastArgumentLambda
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.groovy.format.OmitParenthesesForLastArgumentLambda)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
