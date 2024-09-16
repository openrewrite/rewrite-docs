# Text based recipes

[Text recipes](https://docs.openrewrite.org/recipes/text) are recipes that forego the [Lossless Semantic Tree](/concepts-and-explanations/lossless-semantic-trees.md) (LST) in favor of interacting with text directly. **In almost every situation, this is not what you want to do.** This is because running a text recipe against any file that could be parsed into an LST will convert said file into a plain text file and you will no longer be able to run non-text recipes against the file.

With that being said, there _are_ some situations where you may want to do this. For example, you may want to automate replacing the base images in your Dockerfiles as part of running a Java upgrade. As Dockerfiles are not parsed into an LST, modifying them with text recipes won't cause any harm.

Let's walk through an example of how to use a text recipe to modify a Dockerfile to change the base Java image. If you have an existing repository that you've run recipes on before, feel free to use that. Or, if you'd like to clone a sample repository, please checkout our [spring-petclinic-migration repository](https://github.com/openrewrite/spring-petclinic-migration) that many of the other tutorials use.

## Step 1: Create an example Dockerfile in the root of the project

To begin, let's pretend we're on Java 17 and we're wanting to upgrade to Java 21. We'll create a simple Dockerfile that uses a Java 17 JDK as the base image:

```docker
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:resolve

COPY src ./src

CMD ["./mvnw", "spring-boot:run"]
```

## Step 2: Create a `rewrite.yml` file in the root of the project

The `rewrite.yml` file will be where we'll define our recipe for updating the base image. In the below example, you can see that we are looking for the exact text of `eclipse-temurin:17-jdk-jammy` in files that match exactly `Dockerfile`. There are many options for this recipe and most of the options allow for regex to increase the flexibility of the recipe.

You can find all of the options for the `FindAndReplace` recipe in the [find and replace recipe doc](https://docs.openrewrite.org/recipes/text/findandreplace).

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindAndReplaceJDK17
displayName: Find and replace JDK 17 example
recipeList:
  - org.openrewrite.text.FindAndReplace:
      find: eclipse-temurin:17-jdk-jammy
      replace: eclipse-temurin:21.0.2_13-jdk-jammy
      filePattern: 'Dockerfile'
```

## Step 3: Update the `build.gradle` or `pom.xml` file

Now that we have the recipe defined in our `rewrite.yml` file, we can update our `build.gradle` or `pom.xml` file to tell OpenRewrite to use the recipe we defined above:

{% tabs %}
{% tab title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("com.yourorg.FindAndReplaceJDK17")
}

repositories {
    mavenCentral()
}
```
{% endtab %}

{% tab title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindAndReplaceJDK17</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endtab %}
{% endtabs %}

## Step 4: Run the recipe

Either run `gradle rewriteRun` or `mvn rewrite:run` and you should see that the Dockerfile is updated to look like:

```docker
FROM eclipse-temurin:21.0.2_13-jdk-jammy

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:resolve

COPY src ./src

CMD ["./mvnw", "spring-boot:run"]
```

## Next steps

Congrats on running your first text based recipe. Remember, though, that these recipes should be run with the utmost caution, as they break the ability to run subsequent LST based recipes.

If you're looking for other recipes to run, consider looking over our [popular recipe guides](./popular-recipe-guides/README.md). Or, if you want to look into creating your own recipes, check out our [creating a Java refactoring recipe guide](/authoring-recipes/writing-a-java-refactoring-recipe.md).