package com.yourorg;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.EqualsAndHashCode;
import lombok.Value;
import org.jspecify.annotations.NonNull;
import org.openrewrite.*;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.tree.J;

/**
 * TODO: Add recipe description
 *
 * Example usage in YAML:
 * ```yaml
 * type: specs.openrewrite.org/v1beta/recipe
 * name: com.yourorg.MyRecipeGroup
 * recipeList:
 *   - com.yourorg.YourRecipeName:
 *       parameterName: value
 * ```
 */
@Value
@EqualsAndHashCode(callSuper = false)
public class YourRecipeName extends Recipe {

    /**
     * TODO: Add options for recipe configuration
     * Each option becomes a parameter that can be configured in YAML
     */
    @Option(
        displayName = "Parameter Display Name",
        description = "A clear description of what this parameter does.",
        example = "com.example.ExampleValue"
    )
    @NonNull
    String parameterName;

    // Add more @Option fields as needed
    // @Option(displayName = "Another Parameter", ...)
    // String anotherParameter;

    /**
     * All recipes must be serializable via Jackson.
     * Use @JsonCreator and @JsonProperty annotations.
     */
    @JsonCreator
    public YourRecipeName(
        @NonNull @JsonProperty("parameterName") String parameterName
    ) {
        this.parameterName = parameterName;
    }

    @Override
    public String getDisplayName() {
        return "Your recipe display name";
    }

    @Override
    public String getDescription() {
        return "A clear description of what this recipe does. Use sentence case and end with a period.";
    }

    /**
     * Optional: Add preconditions to improve performance
     * Recipes only run on files that match these conditions
     */
    // @Override
    // public TreeVisitor<?, ExecutionContext> getVisitor() {
    //     return Preconditions.check(
    //         new UsesType<>("com.example.SomeType", true),
    //         new YourRecipeVisitor()
    //     );
    // }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        // IMPORTANT: Always return a NEW instance (no caching)
        return new YourRecipeVisitor();
    }

    /**
     * The visitor implements the actual transformation logic.
     * Use JavaIsoVisitor when always returning the same LST type.
     */
    public class YourRecipeVisitor extends JavaIsoVisitor<ExecutionContext> {

        /**
         * Optional: Create JavaTemplates for complex code generation
         * Templates are parsed once and can be reused
         */
        // private final JavaTemplate template = JavaTemplate
        //     .builder("your.code.template(#{any(String)})")
        //     .imports("your.imports.Here")
        //     .build();

        /**
         * Override visit methods for the LST elements you want to transform.
         * Common visit methods:
         * - visitCompilationUnit() - entire file
         * - visitClassDeclaration() - class declarations
         * - visitMethodDeclaration() - method declarations
         * - visitMethodInvocation() - method calls
         * - visitVariableDeclarations() - variable declarations
         * - visitAssignment() - assignments
         * - visitBinary() - binary operations
         * - visitImport() - imports
         */
        @Override
        public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext ctx) {
            // Step 1: ALWAYS call super to traverse the subtree
            J.ClassDeclaration cd = super.visitClassDeclaration(classDecl, ctx);

            // Step 2: Check if this element needs to be changed
            // DO NO HARM: If unsure, return unchanged
            if (!shouldChange(cd)) {
                return cd;
            }

            // Step 3: Make your changes
            // Never mutate the LST - always use .withX() methods
            cd = makeYourChanges(cd, ctx);

            // Step 4: Optional - chain other visitors
            // doAfterVisit(new SomeOtherRecipe().getVisitor());

            // Step 5: Optional - add/remove imports
            // maybeAddImport("java.util.List");
            // maybeRemoveImport("old.package.Type");

            return cd;
        }

        /**
         * Helper method to determine if changes are needed
         */
        private boolean shouldChange(J.ClassDeclaration classDecl) {
            // TODO: Implement your logic
            // Check if change is necessary and safe
            // Example: Check if class matches criteria

            // Check for null type (avoid NPE)
            if (classDecl.getType() == null) {
                return false;
            }

            // Example: Check fully qualified name
            // if (!classDecl.getType().getFullyQualifiedName().equals(parameterName)) {
            //     return false;
            // }

            // Example: Check if change already exists
            // if (alreadyHasTheChange(classDecl)) {
            //     return false;
            // }

            return true;
        }

        /**
         * Helper method to perform the transformation
         */
        private J.ClassDeclaration makeYourChanges(J.ClassDeclaration classDecl, ExecutionContext ctx) {
            // TODO: Implement your transformation logic

            // Example: Using a JavaTemplate
            // classDecl = classDecl.withBody(
            //     template.apply(
            //         new Cursor(getCursor(), classDecl.getBody()),
            //         classDecl.getBody().getCoordinates().lastStatement(),
            //         someParameter
            //     )
            // );

            // Example: Modifying using LST methods
            // classDecl = classDecl.withName(classDecl.getName().withSimpleName("NewName"));

            // Example: Using ListUtils to avoid mutation
            // classDecl = classDecl.withModifiers(
            //     ListUtils.concat(classDecl.getModifiers(), newModifier)
            // );

            return classDecl;
        }

        /**
         * Optional: Example of another visit method
         */
        // @Override
        // public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
        //     J.MethodInvocation m = super.visitMethodInvocation(method, ctx);
        //
        //     // Your logic here
        //
        //     return m;
        // }
    }
}
