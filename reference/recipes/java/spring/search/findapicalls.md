# Find API calls

**org.openrewrite.java.spring.search.FindApiCalls**

_Find outbound API calls that this application is making._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/search/FindApiCalls.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.7

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### API endpoints

_The API endpoints that applications expose._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the API call. |
| Method | The HTTP method of the API endpoint. |
| Path | The path of the API endpoint. |

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.springframework.web.client.RestTemplate;
class Test {
    RestTemplate restTemplate;
    void test() {
        restTemplate.getForObject(base() + "/getThing", String.class);
        restTemplate.postForEntity(base() + "/postThing", null, String.class);
    }

    String base() {
        return "https://base";
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.springframework.web.client.RestTemplate;
class Test {
    RestTemplate restTemplate;
    void test() {
        /*~~(GET base() + "/getThing")~~>*/restTemplate.getForObject(base() + "/getThing", String.class);
        /*~~(POST base() + "/postThing")~~>*/restTemplate.postForEntity(base() + "/postThing", null, String.class);
    }

    String base() {
        return "https://base";
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -5,2 +5,2 @@
    RestTemplate restTemplate;
    void test() {
-       restTemplate.getForObject(base() + "/getThing", String.class);
-       restTemplate.postForEntity(base() + "/postThing", null, String.class);
+       /*~~(GET base() + "/getThing")~~>*/restTemplate.getForObject(base() + "/getThing", String.class);
+       /*~~(POST base() + "/postThing")~~>*/restTemplate.postForEntity(base() + "/postThing", null, String.class);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.25")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.search.FindApiCalls")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.7")
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
            <recipe>org.openrewrite.java.spring.search.FindApiCalls</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.7</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.search.FindApiCalls
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.search.FindApiCalls)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
