package com.yourorg;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.jspecify.annotations.NonNull;
import org.openrewrite.*;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.tree.J;

/**
 * A simple recipe that adds a hello() method to a specified class.
 *
 * This example demonstrates:
 * - Basic recipe structure with @EqualsAndHashCode and @Value (in that order)
 * - Using properties for displayName and description (not override methods)
 * - Using @Option for configurable parameters with Lombok handling serialization
 * - Using JavaTemplate for code generation
 * - Checking preconditions before making changes
 * - Following the "do no harm" principle
 *
 * Based on the official OpenRewrite tutorial:
 * https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe
 */
@EqualsAndHashCode(callSuper = false)
@Value
public class SayHelloRecipe extends Recipe {

    String displayName = "Say 'Hello'";
    String description = "Adds a \"hello\" method to the specified class.";

    @Option(
        displayName = "Fully Qualified Class Name",
        description = "A fully qualified class name indicating which class to add a hello() method to.",
        example = "com.yourorg.FooBar"
    )
    @NonNull
    String fullyQualifiedClassName;

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        // Always return a new instance - never cache visitors
        return new JavaIsoVisitor<ExecutionContext>() {

            @Override
            public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext ctx) {
                // Step 1: Traverse the subtree first
                J.ClassDeclaration cd = super.visitClassDeclaration(classDecl, ctx);

                // Step 2: Check if this is the class we're looking for
                // Do no harm: return unchanged if this isn't the target class
                if (cd.getType() == null || !cd.getType().getFullyQualifiedName().equals(fullyQualifiedClassName)) {
                    return cd;
                }

                // Step 3: Check if the class already has a hello() method
                // Do no harm: don't add if it already exists
                boolean helloMethodExists = cd.getBody().getStatements().stream()
                    .filter(statement -> statement instanceof J.MethodDeclaration)
                    .map(J.MethodDeclaration.class::cast)
                    .anyMatch(methodDeclaration -> "hello".equals(methodDeclaration.getName().getSimpleName()));

                if (helloMethodExists) {
                    return cd;
                }

                // Step 4: Add the hello() method using JavaTemplate
                // The template uses #{} for parameter substitution
                J.Block body = JavaTemplate.apply(
                    "public String hello() { return \"Hello from #{}!\"; }",
                    new Cursor(getCursor(), cd.getBody()),
                    cd.getBody().getCoordinates().lastStatement(),
                    fullyQualifiedClassName
                );

                return cd.withBody(body);
            }
        };
    }
}

// ============================================================
// TEST CLASS
// ============================================================

/*
package com.yourorg;

import org.junit.jupiter.api.Test;
import org.openrewrite.DocumentExample;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;

class SayHelloRecipeTest implements RewriteTest {

    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(new SayHelloRecipe("com.yourorg.FooBar"));
    }

    @DocumentExample
    @Test
    void addsHelloToFooBar() {
        rewriteRun(
            java(
                """
                package com.yourorg;

                class FooBar {
                }
                """,
                """
                package com.yourorg;

                class FooBar {
                    public String hello() {
                        return "Hello from com.yourorg.FooBar!";
                    }
                }
                """
            )
        );
    }

    @Test
    void doesNotChangeExistingHello() {
        rewriteRun(
            java(
                """
                package com.yourorg;

                class FooBar {
                    public String hello() { return ""; }
                }
                """
            )
        );
    }

    @Test
    void doesNotChangeOtherClasses() {
        rewriteRun(
            java(
                """
                package com.yourorg;

                class OtherClass {
                }
                """
            )
        );
    }
}
*/

// ============================================================
// YAML USAGE
// ============================================================

/*
Save this in src/main/resources/META-INF/rewrite/say-hello.yml:

---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.SayHelloToFooBar
displayName: Say Hello to FooBar
description: Adds a hello() method to the FooBar class.
recipeList:
  - com.yourorg.SayHelloRecipe:
      fullyQualifiedClassName: com.yourorg.FooBar
*/
