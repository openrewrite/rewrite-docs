# Use HTTPS for repositories

**org.openrewrite.maven.security.UseHttpsForRepositories**

_Use HTTPS for repository urls._

### Tags

* security
* CWE-829

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/security/UseHttpsForRepositories.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.3

## Example


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <groupId>org.openrewrite.example</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <repositories>
    <repository>
      <id>my-repo</id>
      <url>http://repo.example.com/repo</url>
    </repository>
  </repositories>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
  <groupId>org.openrewrite.example</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <repositories>
    <repository>
      <id>my-repo</id>
      <url>https://repo.example.com/repo</url>
    </repository>
  </repositories>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -8,1 +8,1 @@
    <repository>
      <id>my-repo</id>
-     <url>http://repo.example.com/repo</url>
+     <url>https://repo.example.com/repo</url>
    </repository>
```
{% endcode %}
{% endtab %}
{% endtabs %}


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
        <version>5.2.2</version>
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
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.security.UseHttpsForRepositories)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
