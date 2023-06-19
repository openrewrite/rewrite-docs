# Print Maven dependency hierarchy in DOT format

**org.openrewrite.maven.utilities.PrintMavenAsDot**

_The DOT language format is specified [here](https://graphviz.org/doc/info/lang.html)._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/utilities/PrintMavenAsDot.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Example


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>

  <dependencies>
    <dependency>
        <groupId>org.yaml</groupId>
        <artifactId>snakeyaml</artifactId>
        <version>1.27</version>
    </dependency>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.7.0</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<!--~~(digraph main {
0 [label="com.mycompany.app:my-app:1"];
1 [label="org.yaml:snakeyaml:1.27"];
2 [label="org.junit.jupiter:junit-jupiter:5.7.0"];
3 [label="org.junit.jupiter:junit-jupiter-api:5.7.0"];
4 [label="org.junit.jupiter:junit-jupiter-params:5.7.0"];
5 [label="org.junit.jupiter:junit-jupiter-engine:5.7.0"];
6 [label="org.apiguardian:apiguardian-api:1.1.0"];
7 [label="org.opentest4j:opentest4j:1.2.0"];
8 [label="org.junit.platform:junit-platform-commons:1.7.0"];
9 [label="org.junit.platform:junit-platform-engine:1.7.0"];
0 -> 1 [taillabel="Compile"];
0 -> 2 [taillabel="Test"];
2 -> 3 [taillabel="Test"];
3 -> 6 [taillabel="Test"];
3 -> 7 [taillabel="Test"];
3 -> 8 [taillabel="Test"];
2 -> 4 [taillabel="Test"];
2 -> 5 [taillabel="Test"];
5 -> 9 [taillabel="Test"];
})~~>--><project>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>

  <dependencies>
    <dependency>
        <groupId>org.yaml</groupId>
        <artifactId>snakeyaml</artifactId>
        <version>1.27</version>
    </dependency>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.7.0</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -1,1 +1,21 @@
-<project>
+<!--~~(digraph main {
+0 [label="com.mycompany.app:my-app:1"];
+1 [label="org.yaml:snakeyaml:1.27"];
+2 [label="org.junit.jupiter:junit-jupiter:5.7.0"];
+3 [label="org.junit.jupiter:junit-jupiter-api:5.7.0"];
+4 [label="org.junit.jupiter:junit-jupiter-params:5.7.0"];
+5 [label="org.junit.jupiter:junit-jupiter-engine:5.7.0"];
+6 [label="org.apiguardian:apiguardian-api:1.1.0"];
+7 [label="org.opentest4j:opentest4j:1.2.0"];
+8 [label="org.junit.platform:junit-platform-commons:1.7.0"];
+9 [label="org.junit.platform:junit-platform-engine:1.7.0"];
+0 -> 1 [taillabel="Compile"];
+0 -> 2 [taillabel="Test"];
+2 -> 3 [taillabel="Test"];
+3 -> 6 [taillabel="Test"];
+3 -> 7 [taillabel="Test"];
+3 -> 8 [taillabel="Test"];
+2 -> 4 [taillabel="Test"];
+2 -> 5 [taillabel="Test"];
+5 -> 9 [taillabel="Test"];
+})~~>--><project>
  <groupId>com.mycompany.app</groupId>
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.maven.utilities.PrintMavenAsDot</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.maven.utilities.PrintMavenAsDot
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.utilities.PrintMavenAsDot)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
