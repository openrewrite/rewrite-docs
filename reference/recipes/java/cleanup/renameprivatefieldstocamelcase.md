# Reformat private field names to camelCase

** org.openrewrite.java.cleanup.RenamePrivateFieldsToCamelCase**
_Reformat private field names to camelCase to comply with Java naming convention. The recipe will not rename fields with default, protected or public access modifiers.The recipe will not rename private constants.The first character is set to lower case and existing capital letters are preserved. Special characters that are allowed in java field names `$` and `_` are removed. If a special character is removed the next valid alphanumeric will be capitalized. The recipe will not rename a field if the result already exists in the class, conflicts with a java reserved keyword, or the result is blank._

### Tags

* RSPEC-116
* RSPEC-3008

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.27.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.27.1


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.26.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.RenamePrivateFieldsToCamelCase")
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
        <version>4.31.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.RenamePrivateFieldsToCamelCase</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.cleanup.RenamePrivateFieldsToCamelCase`
