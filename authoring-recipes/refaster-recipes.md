# Getting started with Refaster template recipes

Refaster template recipes are recipes created from [Refaster templates](#terminology) that refactor code by doing straightforward replacements (e.g., converting `StringUtils.equals(..)` to `Objects.equals(..)`). These are more than just a string replacement, though; they offer compiler and type support. They can also be used to build more complex recipes.

Let's walk through everything you need to know to get started making your own.

## Terminology

### Refaster template

A Java class is considered to be a **Refaster template** if:

* There are multiple methods with the same return type
* All arguments in those methods are identical and have the same name
* One of the methods is annotated with `@AfterTemplate`
* Every other method is annotated with `@BeforeTemplate`

Here is an example of what a Refaster template looks like:

```java
import com.google.errorprone.refaster.annotation.AfterTemplate;
import com.google.errorprone.refaster.annotation.BeforeTemplate;

public class StringIsEmpty {
  @BeforeTemplate
  boolean equalsEmptyString(String string) {
    return string.equals("");
  }

  @BeforeTemplate
  boolean lengthEquals0(String string) {
    return string.length() == 0;
  }

  @AfterTemplate
  boolean optimizedMethod(String string) {
    return string.isEmpty();
  }
}
```

### Refaster template recipe

A Refaster template recipe is an [imperative recipe](/authoring-recipes/types-of-recipes.md#imperative-recipes) that is created automatically when you build your Java classes that have one or more [Refaster templates](#refaster-template) in them.

You can combine multiple Refaster templates into one larger recipe by creating the templates as subclasses such as in the [SimplifyTernary recipe](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/SimplifyTernary.java).

Refaster template recipe names are the class name + `Recipe` or `Recipes` depending on if there is more than one template in the class. For example, in the above `SimplifyTernary` recipe, there are two Refaster templates, so the final recipe name is `SimplifyTernaryRecipes`. On the other hand, if you look at the [example in the Refaster template section](#refaster-template), you can see that there is only one template and no wrapper class. Because of that, the recipe would be named `StringIsEmptyRecipe`.

## How to create a Refaster recipe

{% hint style="info" %}
Moderne provides a [starter recipe repository](https://github.com/moderneinc/rewrite-recipe-starter) which contains all of the below code. We'd recommend using that template repository as a getting started point.
{% endhint %}

### Update your dependencies

The first thing you'll need to do is update your dependencies  and add an annotation processor. Below are the minimum recommended dependencies to include in your project:

{% code title="build.gradle" %}
```groovy
dependencies {
    // The bom version can also be set to a specific version:
    // https://github.com/openrewrite/rewrite-recipe-bom/releases
    implementation(platform("org.openrewrite.recipe:rewrite-recipe-bom:latest.release"))

    // If you are developing recipes in Java, you'll need to bring in rewrite-java
    implementation("org.openrewrite:rewrite-java")
    runtimeOnly("org.openrewrite:rewrite-java-17")

    // Refaster style recipes need the rewrite-templating annotation processor and dependency for generated recipes:
    // https://github.com/openrewrite/rewrite-templating/releases
    annotationProcessor("org.openrewrite:rewrite-templating:latest.release")

    implementation("org.openrewrite:rewrite-templating")

    // The `@BeforeTemplate` and `@AfterTemplate` annotations are needed for refaster style recipes
    compileOnly("com.google.errorprone:error_prone_core:2.19.1:with-dependencies") {
        exclude("com.google.auto.service", "auto-service-annotations")
    }
}
```
{% endcode %}

### Create a Java class

Next up is creating a Java class. In the below example, you can see that we've defined two Refaster templates inside a wrapper class.

A couple of important things to note:

* You should provide a `RecipeDescriptor` with a useful `name` and `description`. Doing so will make it easier for others to discover and understand your recipe.
* Every template needs one or more `@BeforeTemplate` and exactly one `@AfterTemplate`.
* You do not need a wrapper class if you want to just make a single template recipe. 

```java
package com.yourorg;

import com.google.errorprone.refaster.annotation.AfterTemplate;
import com.google.errorprone.refaster.annotation.BeforeTemplate;
import org.openrewrite.java.template.RecipeDescriptor;

@RecipeDescriptor(
        name = "Simplify ternary expressions",
        description = "Simplifies various types of ternary expressions to improve code readability."
)
public class SimplifyTernary {

    @RecipeDescriptor(
            name = "Replace `booleanExpression ? true : false` with `booleanExpression`",
            description = "Replace ternary expressions like `booleanExpression ? true : false` with `booleanExpression`."
    )
    public static class SimplifyTernaryTrueFalse {

        @BeforeTemplate
        boolean before(boolean expr) {
            return expr ? true : false;
        }

        @AfterTemplate
        boolean after(boolean expr) {
            return expr;
        }
    }

    @RecipeDescriptor(
            name = "Replace `booleanExpression ? false : true` with `!booleanExpression`",
            description = "Replace ternary expressions like `booleanExpression ? false : true` with `!booleanExpression`."
    )
    public static class SimplifyTernaryFalseTrue {

        @BeforeTemplate
        boolean before(boolean expr) {
            return expr ? false : true;
        }

        @AfterTemplate
        boolean after(boolean expr) {
            return !(expr);
        }
    }
}
```

<details>

<summary>The above Refaster template recipe gets translated into this imperative recipe when your project is built:</summary>

```java
package com.yourorg;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Preconditions;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.internal.lang.NonNullApi;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.JavaVisitor;
import org.openrewrite.java.search.*;
import org.openrewrite.java.template.Primitive;
import org.openrewrite.java.template.Semantics;
import org.openrewrite.java.template.function.*;
import org.openrewrite.java.template.internal.AbstractRefasterJavaVisitor;
import org.openrewrite.java.tree.*;

import java.util.*;

import static org.openrewrite.java.template.internal.AbstractRefasterJavaVisitor.EmbeddingOption.*;

/**
 * OpenRewrite recipes created for Refaster template {@code com.yourorg.SimplifyTernary}.
 */
@SuppressWarnings("all")
public class SimplifyTernaryRecipes extends Recipe {
    /**
     * Instantiates a new instance.
     */
    public SimplifyTernaryRecipes() {}

    @Override
    public String getDisplayName() {
        return "Simplify ternary expressions";
    }

    @Override
    public String getDescription() {
        return "Simplifies various types of ternary expressions to improve code readability.";
    }

    @Override
    public List<Recipe> getRecipeList() {
        return Arrays.asList(
                new SimplifyTernaryTrueFalseRecipe(),
                new SimplifyTernaryFalseTrueRecipe()
        );
    }

    /**
     * OpenRewrite recipe created for Refaster template {@code SimplifyTernary.SimplifyTernaryTrueFalse}.
     */
    @SuppressWarnings("all")
    @NonNullApi
    public static class SimplifyTernaryTrueFalseRecipe extends Recipe {

        /**
         * Instantiates a new instance.
         */
        public SimplifyTernaryTrueFalseRecipe() {}

        @Override
        public String getDisplayName() {
            return "Replace `booleanExpression ? true : false` with `booleanExpression`";
        }

        @Override
        public String getDescription() {
            return "Replace ternary expressions like `booleanExpression ? true : false` with `booleanExpression`.";
        }

        @Override
        public TreeVisitor<?, ExecutionContext> getVisitor() {
            JavaVisitor<ExecutionContext> javaVisitor = new AbstractRefasterJavaVisitor() {
                final JavaTemplate before = Semantics.expression(this, "before", (@Primitive Boolean expr) -> expr ? true : false).build();
                final JavaTemplate after = Semantics.expression(this, "after", (@Primitive Boolean expr) -> expr).build();

                @Override
                public J visitTernary(J.Ternary elem, ExecutionContext ctx) {
                    JavaTemplate.Matcher matcher;
                    if ((matcher = before.matcher(getCursor())).find()) {
                        return embed(
                                after.apply(getCursor(), elem.getCoordinates().replace(), matcher.parameter(0)),
                                getCursor(),
                                ctx,
                                SHORTEN_NAMES, SIMPLIFY_BOOLEANS
                        );
                    }
                    return super.visitTernary(elem, ctx);
                }

            };
            return javaVisitor;
        }
    }

    /**
     * OpenRewrite recipe created for Refaster template {@code SimplifyTernary.SimplifyTernaryFalseTrue}.
     */
    @SuppressWarnings("all")
    @NonNullApi
    public static class SimplifyTernaryFalseTrueRecipe extends Recipe {

        /**
         * Instantiates a new instance.
         */
        public SimplifyTernaryFalseTrueRecipe() {}

        @Override
        public String getDisplayName() {
            return "Replace `booleanExpression ? false : true` with `!booleanExpression`";
        }

        @Override
        public String getDescription() {
            return "Replace ternary expressions like `booleanExpression ? false : true` with `!booleanExpression`.";
        }

        @Override
        public TreeVisitor<?, ExecutionContext> getVisitor() {
            JavaVisitor<ExecutionContext> javaVisitor = new AbstractRefasterJavaVisitor() {
                final JavaTemplate before = Semantics.expression(this, "before", (@Primitive Boolean expr) -> expr ? false : true).build();
                final JavaTemplate after = Semantics.expression(this, "after", (@Primitive Boolean expr) -> !(expr)).build();

                @Override
                public J visitTernary(J.Ternary elem, ExecutionContext ctx) {
                    JavaTemplate.Matcher matcher;
                    if ((matcher = before.matcher(getCursor())).find()) {
                        return embed(
                                after.apply(getCursor(), elem.getCoordinates().replace(), matcher.parameter(0)),
                                getCursor(),
                                ctx,
                                REMOVE_PARENS, SHORTEN_NAMES, SIMPLIFY_BOOLEANS
                        );
                    }
                    return super.visitTernary(elem, ctx);
                }

            };
            return javaVisitor;
        }
    }

}
```
</details>

### Create tests

The last step in creating a Refaster template recipe is writing tests. These tests are the same as any other recipe development so our [recipe testing guide](/authoring-recipes/recipe-testing.md) still applies here.

Here is an example of what the test class might look like for the above recipe:

```java
package com.yourorg;

import org.junit.jupiter.api.Test;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;

class SimplifyTernaryTest implements RewriteTest {
    @Test
    void simplified() {
        rewriteRun(
          spec -> spec.recipe(new SimplifyTernaryRecipes()),
          //language=java
          java(
            """
              class Test {
                  boolean trueCondition1 = true ? true : false;
                  boolean trueCondition2 = false ? false : true;
                  boolean trueCondition3 = booleanExpression() ? true : false;
                  boolean trueCondition4 = trueCondition1 && trueCondition2 ? true : false;
                  boolean trueCondition5 = !true ? false : true;
                  boolean trueCondition6 = !false ? true : false;
                  
                  boolean falseCondition1 = true ? false : true;
                  boolean falseCondition2 = !false ? false : true;
                  boolean falseCondition3 = booleanExpression() ? false : true;
                  boolean falseCondition4 = trueCondition1 && trueCondition2 ? false : true;
                  boolean falseCondition5 = !false ? false : true;
                  boolean falseCondition6 = !true ? true : false;
                  
                  boolean binary1 = booleanExpression() && booleanExpression() ? true : false;
                  boolean binary2 = booleanExpression() && booleanExpression() ? false : true;
                  boolean binary3 = booleanExpression() || booleanExpression() ? true : false;
                  boolean binary4 = booleanExpression() || booleanExpression() ? false : true;
                  
                  boolean booleanExpression() {
                    return true;
                  }
              }
              """,
            """
              class Test {
                  boolean trueCondition1 = true;
                  boolean trueCondition2 = true;
                  boolean trueCondition3 = booleanExpression();
                  boolean trueCondition4 = trueCondition1 && trueCondition2;
                  boolean trueCondition5 = true;
                  boolean trueCondition6 = true;
                  
                  boolean falseCondition1 = false;
                  boolean falseCondition2 = false;
                  boolean falseCondition3 = !booleanExpression();
                  boolean falseCondition4 = !(trueCondition1 && trueCondition2);
                  boolean falseCondition5 = false;
                  boolean falseCondition6 = false;
                  
                  boolean binary1 = booleanExpression() && booleanExpression();
                  boolean binary2 = !(booleanExpression() && booleanExpression());
                  boolean binary3 = booleanExpression() || booleanExpression();
                  boolean binary4 = !(booleanExpression() || booleanExpression());
                  
                  boolean booleanExpression() {
                    return true;
                  }
              }
              """
          )
        );
    }

    @Test
    void unchanged() {
        rewriteRun(
          spec -> spec.recipe(new SimplifyTernaryRecipes()),
          //language=java
          java(
            """
              class Test {
                  boolean unchanged1 = booleanExpression() ? booleanExpression() : !booleanExpression();
                  boolean unchanged2 = booleanExpression() ? true : !booleanExpression();
                  boolean unchanged3 = booleanExpression() ? booleanExpression() : false;
                  
                  boolean booleanExpression() {
                    return true;
                  }
              }
              """
          )
        );
    }
}
```