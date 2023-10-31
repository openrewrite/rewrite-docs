# Migrate from Hamcrest to AssertJ

In this tutorial, we'll use OpenRewrite to perform an automated migration from [Hamcrest](https://hamcrest.org/JavaHamcrest/) to [AssertJ](https://assertj.github.io/doc/#assertj-overview). While Hamcrest still _functions_, it hasn't been updated since 2019 and there's a growing number of [issues](https://github.com/hamcrest/JavaHamcrest/issues) and [pull requests](https://github.com/hamcrest/JavaHamcrest/pulls) open on the project. On the other hand, AssertJ has much more activity and is generally favored for testing assertions. 

## Example Configuration

In order to run the migration recipe, you will need to update your project with the following configuration:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.9.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.assertj.Assertj</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.13</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.4.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.Assertj")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.13")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You can also use the command line to run the recipe if you don't want to update your project:

{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.Assertj
```
{% endcode %}
{% endtab %}
{% endtabs %}

# Before and After

For the full list of changes this recipe will make, see its [reference page](https://docs.openrewrite.org/recipes/java/testing/assertj/assertj).

### Example test

#### Before

```java
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class BiscuitTest {
    @Test
    public void testEquals() {
        Biscuit theBiscuit = new Biscuit("Ginger");
        Biscuit myBiscuit = new Biscuit("Ginger");

        assertThat(theBiscuit, equalTo(myBiscuit));
        assertThat("chocolate chips", theBiscuit.getChocolateChipCount(), equalTo(10));
        assertThat("hazelnuts", theBiscuit.getHazelnutCount(), equalTo(3));
    }

    @Test
    public void otherExamples() {
        // ...

        assertThat(foo.get("id")).isEqualTo("test-data");
        assertThat(bar.size()).isEqualTo(1);
        assertThat(bash.get("one")).isEqualTo(1);
        assertThat(baz.size()).isEqualTo(concurrency * maxPerTask);
    }
}
```

#### After

```java
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class BiscuitTest {
    @Test
    public void testEquals() {
        Biscuit theBiscuit = new Biscuit("Ginger");
        Biscuit myBiscuit = new Biscuit("Ginger");

        assertThat(theBiscuit).isEqualTo(myBiscuit);
        assertThat(theBiscuit.getChocolateChipCount()).as("chocolate chips").isEqualTo(10);
        assertThat(theBiscuit.getHazelnutCount()).as("hazelnuts").isEqualTo(3);
    }

    @Test
    public void otherExamples() {
        // ...

        assertThat(foo).containsEntry("id", "test-data");
        assertThat(bar).hasSize(1);
        assertThat(bash).containsEntry("one", 1);
        assertThat(baz).hasSize(concurrency * maxPerTask);
    }
}
```