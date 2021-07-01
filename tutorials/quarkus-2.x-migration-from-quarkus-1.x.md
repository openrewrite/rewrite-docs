# Migrate to Quarkus 2 from Quarkus 1

In this guide we'll look at using Rewrite to perform an automated migration from Quarkus 1.x to Quarkus 2.x.

## Example Configuration

The [Quarkus1to2Migration](../reference/recipes/java/quarkus/quarkus2/quarkus1to2migration.md) recipe has no required configuration options and can be activated directly after taking a dependency on [rewrite-quarkus](https://github.com/openrewrite/rewrite-quarkus) in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.quarkus.quarkus2.Quarkus1to2Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:0.2.1")
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
        <version>4.6.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.quarkus.quarkus2.Quarkus1to2Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>0.2.1</version>
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

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` \(or equivalent\), manually fix anything that wasn't able to be migrated automatically, and commit the results.

For the full list of changes, see the recipe's [reference documentation](../reference/recipes/java/quarkus/quarkus2/quarkus1to2migration.md). 

### Known Limitations

| Unsupported Functionality | Issue |
| :--- | :--- |
| `@ConfigProperties`-annotated interfaces migrate to using `@ConfigMapping`, but not yet `@ConfigProperties`-annotated classes | [\#24](https://github.com/openrewrite/rewrite-quarkus/issues/24) |

