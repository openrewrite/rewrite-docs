# Mockito 3.x migration from 1.x

 **org.openrewrite.java.testing.mockito.Mockito1to3Migration** _Spring Boot 2.x requires upgrading from Mockito 1.x to 3.x._

### Tags

* testing
* mockito

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.6.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.6.0

## Recipe list

* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.MockitoAnnotations.Mock`
  * newFullyQualifiedTypeName: `org.mockito.Mock`
* [Change method name](../../changemethodname.md)
  * methodPattern: `org.mockito.Matchers anyVararg()`
  * newMethodName: `any`
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.Matchers`
  * newFullyQualifiedTypeName: `org.mockito.ArgumentMatchers`
* [Change method name](../../changemethodname.md)
  * methodPattern: `org.mockito.invocation.InvocationOnMock getArgumentAt(int, java.lang.Class)`
  * newMethodName: `getArgument`
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.runners.MockitoJUnitRunner`
  * newFullyQualifiedTypeName: `org.mockito.junit.MockitoJUnitRunner`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.mockito`
  * artifactId: `mockito-junit-jupiter`
  * version: `3.x`
  * releasesOnly: `false`
  * onlyIfUsing: `[org.mockito.junit.jupiter.MockitoExtension]`

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.6.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.mockito.Mockito1to3Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.6.0")
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
        <version>4.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.mockito.Mockito1to3Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.6.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.testing.mockito.Mockito1to3Migration` on\`

