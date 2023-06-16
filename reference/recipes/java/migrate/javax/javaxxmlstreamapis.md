# Use modernized `javax.xml.stream` APIs

**org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs**

_Certain `javax.xml.stream` APIs have become deprecated and their usages changed, necessitating usage changes._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/javax-xml-stream.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import javax.xml.stream.XMLEventFactory;

public class Test {
    public void method() {
        XMLEventFactory eventFactory = XMLEventFactory.newInstance("test", Test.class.getClassLoader());
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import javax.xml.stream.XMLEventFactory;

public class Test {
    public void method() {
        XMLEventFactory eventFactory = XMLEventFactory.newFactory("test", Test.class.getClassLoader());
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
@@ -5,1 +5,1 @@
-        XMLEventFactory eventFactory = XMLEventFactory.newInstance("test", Test.class.getClassLoader());
+        XMLEventFactory eventFactory = XMLEventFactory.newFactory("test", Test.class.getClassLoader());
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import javax.xml.stream.XMLEventFactory;

public class Test {
    public void method() {
        XMLEventFactory eventFactory = XMLEventFactory.newInstance("test", Test.class.getClassLoader());
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import javax.xml.stream.XMLEventFactory;

public class Test {
    public void method() {
        XMLEventFactory eventFactory = XMLEventFactory.newFactory("test", Test.class.getClassLoader());
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
@@ -5,1 +5,1 @@
-        XMLEventFactory eventFactory = XMLEventFactory.newInstance("test", Test.class.getClassLoader());
+        XMLEventFactory eventFactory = XMLEventFactory.newFactory("test", Test.class.getClassLoader());
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `javax.xml.stream.XMLEventFactory#newFactory(String, ClassLoader)`](../../../java/migrate/javax/migratexmleventfactorynewinstancetonewfactory.md)
* [Use `javax.xml.stream.XMLInputFactory#newFactory(String, ClassLoader)`](../../../java/migrate/javax/migratexmlinputfactorynewinstancetonewfactory.md)
* [Use `javax.xml.stream.XMLOutputFactory#newFactory(String, ClassLoader)`](../../../java/migrate/javax/migratexmloutputfactorynewinstancetonewfactory.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs
displayName: Use modernized `javax.xml.stream` APIs
description: Certain `javax.xml.stream` APIs have become deprecated and their usages changed, necessitating usage changes.
recipeList:
  - org.openrewrite.java.migrate.javax.MigrateXMLEventFactoryNewInstanceToNewFactory
  - org.openrewrite.java.migrate.javax.MigrateXMLInputFactoryNewInstanceToNewFactory
  - org.openrewrite.java.migrate.javax.MigrateXMLOutputFactoryNewInstanceToNewFactory

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
