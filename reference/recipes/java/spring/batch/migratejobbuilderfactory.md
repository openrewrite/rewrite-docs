# Migrate `JobBuilderFactory` to `JobBuilder`

**org.openrewrite.java.spring.batch.MigrateJobBuilderFactory**

_`JobBuilderFactory` was deprecated in spring-batch 5.x. It is replaced by `JobBuilder`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/batch/MigrateJobBuilderFactory.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5

## Example


{% tabs %}
{% tab title="MyJobConfig.java" %}

###### Before
{% code title="MyJobConfig.java" %}
```java
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

public class MyJobConfig {

    @Autowired
    private JobBuilderFactory jobBuilderFactory;

    @Bean
    Job myJob(Step step) {
        return this.jobBuilderFactory.get("myJob")
            .start(step)
            .build();
    }
}
```
{% endcode %}

###### After
{% code title="MyJobConfig.java" %}
```java
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.context.annotation.Bean;

public class MyJobConfig {

    @Bean
    Job myJob(Step step, JobRepository jobRepository) {
        return new JobBuilder("myJob", jobRepository)
            .start(step)
            .build();
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- MyJobConfig.java
+++ MyJobConfig.java
@@ -3,2 +3,2 @@
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
-import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
-import org.springframework.beans.factory.annotation.Autowired;
+import org.springframework.batch.core.job.builder.JobBuilder;
+import org.springframework.batch.core.repository.JobRepository;
import org.springframework.context.annotation.Bean;
@@ -9,3 +9,0 @@
public class MyJobConfig {

-   @Autowired
-   private JobBuilderFactory jobBuilderFactory;
-
    @Bean
@@ -13,2 +10,2 @@

    @Bean
-   Job myJob(Step step) {
-       return this.jobBuilderFactory.get("myJob")
+   Job myJob(Step step, JobRepository jobRepository) {
+       return new JobBuilder("myJob", jobRepository)
            .start(step)
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
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.batch.MigrateJobBuilderFactory")
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
        <version>5.3.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.batch.MigrateJobBuilderFactory</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.batch.MigrateJobBuilderFactory
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* pdesprez
* Kun Li
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Tim te Beek](mailto:tim@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.batch.MigrateJobBuilderFactory)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
