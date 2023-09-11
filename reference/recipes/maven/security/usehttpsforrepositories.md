# Use HTTPS for repositories

**org.openrewrite.maven.security.UseHttpsForRepositories**

_Use HTTPS for repository urls._

### Tags

* security
* CWE-829

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/security/UseHttpsForRepositories.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.4.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.4.2


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}

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
            <recipe>org.openrewrite.maven.security.UseHttpsForRepositories</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.maven.security.UseHttpsForRepositories
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Patrick](mailto:patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.security.UseHttpsForRepositories)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
