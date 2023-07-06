# Migrate multi-condition `@ConditionalOnBean` annotations

**org.openrewrite.java.spring.boot2.ConditionalOnBeanAnyNestedCondition**

_Migrate multi-condition `@ConditionalOnBean` annotations to `AnyNestedCondition`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/ConditionalOnBeanAnyNestedCondition.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5

## Example


{% tabs %}
{% tab title="ThingOne.java" %}

###### Before
{% code title="ThingOne.java" %}
```java
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;

class ThingOne {}

class ThingTwo {}

class ConfigClass {
    @Bean
    @ConditionalOnBean({Aa.class, Bb.class})
    public ThingOne thingOne() {
        return new ThingOne();
    }
    @Bean
    @ConditionalOnBean({Bb.class, Aa.class})
    public ThingTwo thingTwo() {
        return new ThingTwo();
    }
}
```
{% endcode %}

###### After
{% code title="ThingOne.java" %}
```java
import org.springframework.boot.autoconfigure.condition.AnyNestedCondition;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;

class ThingOne {}

class ThingTwo {}

class ConfigClass {
    @Bean
    @Conditional(ConditionAaOrBb.class)
    public ThingOne thingOne() {
        return new ThingOne();
    }

    @Bean
    @Conditional(ConditionAaOrBb.class)
    public ThingTwo thingTwo() {
        return new ThingTwo();
    }

    private static class ConditionAaOrBb extends AnyNestedCondition {
        ConditionAaOrBb() {
            super(ConfigurationPhase.REGISTER_BEAN);
        }

        @ConditionalOnBean(Aa.class)
        class AaCondition {
        }

        @ConditionalOnBean(Bb.class)
        class BbCondition {
        }
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- ThingOne.java
+++ ThingOne.java
@@ -1,0 +1,1 @@
+import org.springframework.boot.autoconfigure.condition.AnyNestedCondition;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
@@ -3,0 +4,1 @@
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
+import org.springframework.context.annotation.Conditional;

@@ -10,1 +12,1 @@
class ConfigClass {
    @Bean
-   @ConditionalOnBean({Aa.class, Bb.class})
+   @Conditional(ConditionAaOrBb.class)
    public ThingOne thingOne() {
@@ -14,0 +16,1 @@
        return new ThingOne();
    }
+
    @Bean
@@ -15,1 +18,1 @@
    }
    @Bean
-   @ConditionalOnBean({Bb.class, Aa.class})
+   @Conditional(ConditionAaOrBb.class)
    public ThingTwo thingTwo() {
@@ -19,0 +22,14 @@
        return new ThingTwo();
    }
+
+   private static class ConditionAaOrBb extends AnyNestedCondition {
+       ConditionAaOrBb() {
+           super(ConfigurationPhase.REGISTER_BEAN);
+       }
+
+       @ConditionalOnBean(Aa.class)
+       class AaCondition {
+       }
+
+       @ConditionalOnBean(Bb.class)
+       class BbCondition {
+       }
+   }
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.ConditionalOnBeanAnyNestedCondition")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.5")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.ConditionalOnBeanAnyNestedCondition</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.ConditionalOnBeanAnyNestedCondition
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* Kun Li
* [Knut Wannheden](mailto:knut@moderne.io)
* [Sam Snyder](mailto:sam@moderne.io)
* [Aaron Gershman](mailto:aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.ConditionalOnBeanAnyNestedCondition)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
