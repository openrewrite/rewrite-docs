package com.yourorg;

import org.junit.jupiter.api.Test;
import org.openrewrite.DocumentExample;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;
import static org.assertj.core.api.Assertions.assertThat;

/**
 * Test class for YourRecipeName
 *
 * Best Practices:
 * - Test both cases where changes ARE made and where they ARE NOT made
 * - Test edge cases and boundary conditions
 * - Use meaningful test names that describe what is being tested
 * - Add @DocumentExample to one test to generate documentation
 */
class YourRecipeNameTest implements RewriteTest {

    /**
     * Configure defaults for all tests in this class.
     * This is called before each test method.
     */
    @Override
    public void defaults(RecipeSpec spec) {
        // Set the recipe to test with default parameters
        spec.recipe(new YourRecipeName("parameter-value"));

        // Optional: Configure parser with classpath dependencies
        // spec.parser(JavaParser.fromJavaVersion()
        //     .classpath("library-name")
        //     .logCompilationWarningsAndErrors(true));

        // Optional: Configure for specific Java version
        // spec.allSources(s -> s.markers(javaVersion(17)));
    }

    /**
     * Test that the recipe makes the expected change.
     * @DocumentExample marks this as the primary example for documentation.
     */
    @DocumentExample
    @Test
    void makesExpectedChange() {
        rewriteRun(
            // First argument: before state
            // Second argument: after state
            java(
                """
                package com.example;

                class BeforeExample {
                    // TODO: Add code that should be changed
                }
                """,
                """
                package com.example;

                class AfterExample {
                    // TODO: Add expected code after transformation
                }
                """
            )
        );
    }

    /**
     * Test that the recipe does NOT make changes when they are not needed.
     * This is crucial - recipes must not make unnecessary changes!
     */
    @Test
    void doesNotChangeWhenNotNeeded() {
        rewriteRun(
            java(
                """
                package com.example;

                class AlreadyCorrect {
                    // TODO: Add code that should NOT be changed
                }
                """
                // No second argument means we expect NO changes
            )
        );
    }

    /**
     * Test edge case or boundary condition
     */
    @Test
    void handlesEdgeCase() {
        rewriteRun(
            java(
                """
                package com.example;

                class EdgeCase {
                    // TODO: Add edge case scenario
                }
                """,
                """
                package com.example;

                class EdgeCase {
                    // TODO: Add expected result for edge case
                }
                """
            )
        );
    }

    /**
     * Example: Test with multiple files
     * Demonstrates that some files change and others don't
     */
    @Test
    void handlesMultipleFiles() {
        rewriteRun(
            // First file: should change
            java(
                """
                package com.example;

                class ShouldChange {
                }
                """,
                """
                package com.example;

                class DidChange {
                }
                """
            ),
            // Second file: should NOT change
            java(
                """
                package com.example;

                class ShouldNotChange {
                }
                """
            )
        );
    }

    /**
     * Example: Test with custom recipe spec for this specific test
     */
    @Test
    void testWithCustomConfiguration() {
        rewriteRun(
            // Customize the spec for just this test
            spec -> spec
                .recipe(new YourRecipeName("different-parameter"))
                // Add specific classpath for this test
                // .parser(JavaParser.fromJavaVersion().classpath("specific-library"))
            ,
            java(
                """
                package com.example;

                class Example {
                }
                """,
                """
                package com.example;

                class Example {
                    // Changes based on different parameter
                }
                """
            )
        );
    }

    /**
     * Example: Test with afterRecipe callback for additional assertions
     */
    @Test
    void testWithCallback() {
        rewriteRun(
            java(
                """
                package com.example;

                class Example {
                }
                """,
                """
                package com.example;

                class Example {
                    // Some change
                }
                """,
                // Callback to perform additional assertions after recipe runs
                spec -> spec.afterRecipe(cu -> {
                    // Custom assertions on the compilation unit
                    assertThat(cu.getClasses()).hasSize(1);
                    // Add more assertions as needed
                })
            )
        );
    }

    /**
     * Example: Test for declarative YAML recipe
     */
    // @Test
    // void testDeclarativeRecipe() {
    //     rewriteRun(
    //         spec -> spec
    //             .recipeFromResources("com.yourorg.YourRecipeName")
    //             .parser(JavaParser.fromJavaVersion()
    //                 .classpath("dependencies-needed-for-before-code")),
    //         java(
    //             """
    //             package com.example;
    //
    //             class Before {
    //             }
    //             """,
    //             """
    //             package com.example;
    //
    //             class After {
    //             }
    //             """
    //         )
    //     );
    // }

    /**
     * Example: Test with specific file path
     */
    // @Test
    // void testWithSpecificPath() {
    //     rewriteRun(
    //         java(
    //             """
    //             server.port=8080
    //             """,
    //             """
    //             server.port=80
    //             """,
    //             spec -> spec.path("src/main/resources/application.properties")
    //         )
    //     );
    // }

    /**
     * Example: Test with Java version marker
     */
    // @Test
    // void testWithJavaVersion() {
    //     rewriteRun(
    //         spec -> spec.allSources(s -> s.markers(javaVersion(17))),
    //         java(
    //             """
    //             package com.example;
    //
    //             class Example {
    //                 // Java 17 specific code
    //             }
    //             """
    //         )
    //     );
    // }

    /**
     * Example: Test combining different source file types
     */
    // @Test
    // void testMultipleFileTypes() {
    //     rewriteRun(
    //         java(
    //             """
    //             package com.example;
    //             class Example { }
    //             """
    //         ),
    //         // You can mix java(), xml(), yaml(), properties(), etc.
    //         // yaml(
    //         //     """
    //         //     key: value
    //         //     """
    //         // )
    //     );
    // }
}
