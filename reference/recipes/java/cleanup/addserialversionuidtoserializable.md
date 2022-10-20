# Add `serialVersionUID` to a `Serializable` class when missing

** org.openrewrite.java.cleanup.AddSerialVersionUidToSerializable**
_A `serialVersionUID` field is strongly recommended in all `Serializable` classes. If this is not defined on a `Serializable` class, the compiler will generate this value. If a change is later made to the class, the generated value will change and attempts to deserialize the class will fail._

### Tags

* RSPEC-2057

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.32.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.32.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.31.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.AddSerialVersionUidToSerializable")
}

repositories {
    mavenCentral()
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.AddSerialVersionUidToSerializable</recipe>
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
{% code title="shell" %}
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.36.0:run \
  -DactiveRecipes=org.openrewrite.java.cleanup.AddSerialVersionUidToSerializable
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.cleanup.AddSerialVersionUidToSerializable`
