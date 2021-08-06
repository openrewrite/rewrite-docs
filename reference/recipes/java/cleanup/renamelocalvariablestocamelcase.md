# Reformat local variable names to camelCase

 **org.openrewrite.java.cleanup.RenameLocalVariablesToCamelCase** _Reformat local variable and method parameter names to camelCase to comply with Java naming convention. The recipe will not rename variables declared in for loop controls or catches with a single character. The first character is set to lower case and existing capital letters are preserved. Special characters that are allowed in java field names `$` and \`_\` are removed. If a special character is removed the next valid alpha-numeric will be capitalized. Currently, does not support renaming members of classes. The recipe will not rename a variable if the result already exists in the class, conflicts with a java reserved keyword, or the result is blank.\_

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.10.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.10.0

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.6.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.RenameLocalVariablesToCamelCase")
}

repositories {
    mavenCentral()
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
        <version>4.8.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.RenameLocalVariablesToCamelCase</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.cleanup.RenameLocalVariablesToCamelCase`

