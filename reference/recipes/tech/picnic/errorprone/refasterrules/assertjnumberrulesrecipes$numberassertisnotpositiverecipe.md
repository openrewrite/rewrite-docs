# Refaster template `AssertJNumberRules.NumberAssertIsNotPositive`

**tech.picnic.errorprone.refasterrules.AssertJNumberRulesRecipes$NumberAssertIsNotPositiveRecipe**

_Recipe created for the following Refaster template:
```java
static final class NumberAssertIsNotPositive {
    
    @BeforeTemplate
    AbstractByteAssert<?> before(AbstractByteAssert<?> numberAssert) {
        return Refaster.anyOf(numberAssert.isLessThanOrEqualTo((byte)0), numberAssert.isLessThan((byte)1));
    }
    
    @BeforeTemplate
    AbstractShortAssert<?> before(AbstractShortAssert<?> numberAssert) {
        return Refaster.anyOf(numberAssert.isLessThanOrEqualTo((short)0), numberAssert.isLessThan((short)1));
    }
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(AbstractIntegerAssert<?> numberAssert) {
        return Refaster.anyOf(numberAssert.isLessThanOrEqualTo(0), numberAssert.isLessThan(1));
    }
    
    @BeforeTemplate
    AbstractLongAssert<?> before(AbstractLongAssert<?> numberAssert) {
        return Refaster.anyOf(numberAssert.isLessThanOrEqualTo(0), numberAssert.isLessThan(1));
    }
    
    @BeforeTemplate
    AbstractFloatAssert<?> before(AbstractFloatAssert<?> numberAssert) {
        return numberAssert.isLessThanOrEqualTo(0);
    }
    
    @BeforeTemplate
    AbstractDoubleAssert<?> before(AbstractDoubleAssert<?> numberAssert) {
        return numberAssert.isLessThanOrEqualTo(0);
    }
    
    @BeforeTemplate
    AbstractBigIntegerAssert<?> before(AbstractBigIntegerAssert<?> numberAssert) {
        return Refaster.anyOf(numberAssert.isLessThanOrEqualTo(BigInteger.ZERO), numberAssert.isLessThan(BigInteger.valueOf(1)));
    }
    
    @BeforeTemplate
    AbstractBigDecimalAssert<?> before(AbstractBigDecimalAssert<?> numberAssert) {
        return numberAssert.isLessThanOrEqualTo(BigDecimal.ZERO);
    }
    
    @AfterTemplate
    NumberAssert<?, ?> after(NumberAssert<?, ?> numberAssert) {
        return numberAssert.isNotPositive();
    }
}
```
._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.AssertJNumberRulesRecipes$NumberAssertIsNotPositiveRecipe), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.5.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.AssertJNumberRulesRecipes$NumberAssertIsNotPositiveRecipe")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.16.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.AssertJNumberRulesRecipes$NumberAssertIsNotPositiveRecipe")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.34.1</version>
        <configuration>
          
          <activeRecipes>
            <recipe>tech.picnic.errorprone.refasterrules.AssertJNumberRulesRecipes$NumberAssertIsNotPositiveRecipe</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.AssertJNumberRulesRecipes$NumberAssertIsNotPositiveRecipe 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AssertJNumberRulesRecipes$NumberAssertIsNotPositiveRecipe
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.AssertJNumberRulesRecipes$NumberAssertIsNotPositiveRecipe)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
