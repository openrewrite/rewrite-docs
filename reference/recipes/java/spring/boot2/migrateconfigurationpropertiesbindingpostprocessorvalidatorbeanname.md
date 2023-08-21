# Use `EnableConfigurationProperties.VALIDATOR_BEAN_NAME`

**org.openrewrite.java.spring.boot2.MigrateConfigurationPropertiesBindingPostProcessorValidatorBeanName**

_Replaces field and static access of `ConfigurationPropertiesBindingPostProcessor.VALIDATOR_BEAN_NAME` with `EnableConfigurationProperties.VALIDATOR_BEAN_NAME`. Deprecated in 2.2.x._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/MigrateConfigurationPropertiesBindingPostProcessorValidatorBeanName.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.7

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor;

class Test {
    static void method() {
        String value = ConfigurationPropertiesBindingPostProcessor.VALIDATOR_BEAN_NAME;
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.springframework.boot.context.properties.EnableConfigurationProperties;

class Test {
    static void method() {
        String value = EnableConfigurationProperties.VALIDATOR_BEAN_NAME;
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
@@ -1,1 +1,1 @@
-import org.springframework.boot.context.properties.ConfigurationPropertiesBindingPostProcessor;
+import org.springframework.boot.context.properties.EnableConfigurationProperties;

@@ -5,1 +5,1 @@
class Test {
    static void method() {
-       String value = ConfigurationPropertiesBindingPostProcessor.VALIDATOR_BEAN_NAME;
+       String value = EnableConfigurationProperties.VALIDATOR_BEAN_NAME;
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
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateConfigurationPropertiesBindingPostProcessorValidatorBeanName")
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
            <recipe>org.openrewrite.java.spring.boot2.MigrateConfigurationPropertiesBindingPostProcessorValidatorBeanName</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateConfigurationPropertiesBindingPostProcessorValidatorBeanName
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
* [Patrick](mailto:patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.MigrateConfigurationPropertiesBindingPostProcessorValidatorBeanName)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
