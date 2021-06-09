# Change method name

**org.openrewrite.java.ChangeMethodName**  
_Rename a method._

#### Source

All rewrite libraries are published to [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.6.0/jar).

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.6.0

## Options

* methodPattern: `String!`
  * A method pattern, expressed as a pointcut expression, that is used to find matching method declarations/invocations.
* newMethodName: `String!`
  * The method name that will replace the existing name.

## Example Usage

This recipe has configuration options so it cannot be activated directly. To activate this recipe you must fill in its configuration options. In your rewrite.yml create a new recipe with a unique name. For example `com.yourorg.ChangeMethodNameCustomzed`. In `com.yourorg.ChangeMethodNameCustomzed`'s `recipeList` include an instance of `org.openrewrite.java.ChangeMethodName`, configured for your use-case.

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMethodNameCustomized
displayName: Change method name customized
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.Matchers anyVararg()
      newMethodName: any
```
{% endcode %}

Now activate `com.yourorg.ChangeMethodNameCustomized` in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.0.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangeMethodNameCustomized")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-java:7.6.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.4.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeMethodNameCustomized</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-java</artifactId>
            <version>7.6.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}



