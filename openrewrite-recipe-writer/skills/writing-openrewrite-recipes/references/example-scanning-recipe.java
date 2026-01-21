package com.yourorg;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.*;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.tree.J;
import org.openrewrite.marker.SearchResult;

import java.util.HashMap;
import java.util.Map;

/**
 * A ScanningRecipe that marks classes only if the project uses a specific type.
 *
 * This example demonstrates:
 * - ScanningRecipe with accumulator pattern
 * - Using properties for displayName and description (not override methods)
 * - Three-phase execution: scan, generate (optional), edit
 * - Tracking per-project information with Map<JavaProject, T>
 * - Using accumulator data to inform editing decisions
 * - Proper handling of multi-module projects
 *
 * Use ScanningRecipe when you need to:
 * - See all files before making changes
 * - Generate new files based on analysis
 * - Share data across multiple files
 * - Make decisions based on project-wide information
 */
@EqualsAndHashCode(callSuper = false)
@Value
public class ScanningRecipeExample extends ScanningRecipe<ScanningRecipeExample.Accumulator> {

    String displayName = "Mark classes in projects using target type";
    String description = "Marks classes with SearchResult only if the project uses a specific type.";

    /**
     * The accumulator stores data collected during the scanning phase.
     * This data is then available during the editing phase.
     *
     * Important: For multi-module projects, track data per JavaProject.
     */
    public static class Accumulator {
        // Track which projects use the target type
        Map<JavaProject, Boolean> projectUsesTargetType = new HashMap<>();

        // You can store any data structure you need
        // Map<JavaProject, Set<String>> projectClasses = new HashMap<>();
        // Map<JavaProject, List<MethodInfo>> projectMethods = new HashMap<>();
    }

    /**
     * Initialize the accumulator before scanning begins.
     */
    @Override
    public Accumulator getInitialValue(ExecutionContext ctx) {
        return new Accumulator();
    }

    /**
     * Phase 1: SCANNING
     *
     * The scanner visits all source files and collects information
     * into the accumulator. No changes are made in this phase.
     */
    @Override
    public TreeVisitor<?, ExecutionContext> getScanner(Accumulator acc) {
        return new JavaIsoVisitor<ExecutionContext>() {

            @Override
            public J.CompilationUnit visitCompilationUnit(J.CompilationUnit cu, ExecutionContext ctx) {
                // Get the JavaProject marker to track per-project data
                JavaProject project = cu.getMarkers().findFirst(JavaProject.class).orElse(null);
                if (project == null) {
                    return cu;
                }

                // Initialize project tracking if needed
                acc.projectUsesTargetType.putIfAbsent(project, false);

                // Scan for the target type in this file
                // In this example, we're looking for usage of java.util.Optional
                cu.getImports().stream()
                    .filter(imp -> imp.getTypeName().equals("java.util.Optional"))
                    .findFirst()
                    .ifPresent(imp -> acc.projectUsesTargetType.put(project, true));

                // Continue scanning subtree
                return super.visitCompilationUnit(cu, ctx);
            }

            @Override
            public J.Import visitImport(J.Import import_, ExecutionContext ctx) {
                // You can also scan at finer granularity
                // Example: track specific imports, method calls, etc.
                return import_;
            }
        };
    }

    /**
     * Phase 2: GENERATING (optional)
     *
     * This phase is used to generate new source files based on the
     * accumulated data. Return null if no new files are needed.
     *
     * Uncomment to implement:
     */
    /*
    @Override
    public Collection<SourceFile> generate(Accumulator acc, ExecutionContext ctx) {
        List<SourceFile> newFiles = new ArrayList<>();

        // Example: Generate a file for each project that uses the target type
        for (Map.Entry<JavaProject, Boolean> entry : acc.projectUsesTargetType.entrySet()) {
            if (entry.getValue()) {
                JavaProject project = entry.getKey();
                // Create a new source file
                // newFiles.add(createNewFile(project));
            }
        }

        return newFiles;
    }
    */

    /**
     * Phase 3: EDITING
     *
     * The editor visits all source files again and makes changes
     * based on the data collected in the scanning phase.
     */
    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor(Accumulator acc) {
        return new JavaIsoVisitor<ExecutionContext>() {

            @Override
            public J.CompilationUnit visitCompilationUnit(J.CompilationUnit cu, ExecutionContext ctx) {
                // Get the project for this file
                JavaProject project = cu.getMarkers().findFirst(JavaProject.class).orElse(null);
                if (project == null) {
                    return cu;
                }

                // Check the accumulator to see if this project uses the target type
                Boolean usesTargetType = acc.projectUsesTargetType.get(project);
                if (usesTargetType == null || !usesTargetType) {
                    // Don't make changes in projects that don't use the target type
                    return cu;
                }

                // This project uses the target type, continue with editing
                return super.visitCompilationUnit(cu, ctx);
            }

            @Override
            public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext ctx) {
                J.ClassDeclaration cd = super.visitClassDeclaration(classDecl, ctx);

                // Get the project
                JavaProject project = getCursor()
                    .firstEnclosing(J.CompilationUnit.class)
                    .getMarkers()
                    .findFirst(JavaProject.class)
                    .orElse(null);

                if (project == null) {
                    return cd;
                }

                // Only mark classes in projects that use the target type
                Boolean usesTargetType = acc.projectUsesTargetType.get(project);
                if (usesTargetType != null && usesTargetType) {
                    // Mark this class with a SearchResult
                    return SearchResult.found(cd, "Found in project using Optional");
                }

                return cd;
            }
        };
    }
}

// ============================================================
// SIMPLIFIED EXAMPLE: COUNT CLASSES
// ============================================================

/*
Here's a simpler ScanningRecipe that counts classes per project:

@EqualsAndHashCode(callSuper = false)
@Value
public class CountClasses extends ScanningRecipe<CountClasses.Accumulator> {

    String displayName = "Count classes per project";
    String description = "Counts the number of classes in each project.";

    public static class Accumulator {
        Map<JavaProject, Integer> classCounts = new HashMap<>();
    }

    @Override
    public Accumulator getInitialValue(ExecutionContext ctx) {
        return new Accumulator();
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getScanner(Accumulator acc) {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration cd, ExecutionContext ctx) {
                JavaProject project = getCursor()
                    .firstEnclosing(J.CompilationUnit.class)
                    .getMarkers()
                    .findFirst(JavaProject.class)
                    .orElse(null);

                if (project != null) {
                    acc.classCounts.merge(project, 1, Integer::sum);
                }

                return cd;
            }
        };
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor(Accumulator acc) {
        // Print the results
        return new JavaIsoVisitor<ExecutionContext>() {
            private boolean printed = false;

            @Override
            public J.CompilationUnit visitCompilationUnit(J.CompilationUnit cu, ExecutionContext ctx) {
                if (!printed) {
                    System.out.println("Class counts by project:");
                    acc.classCounts.forEach((project, count) ->
                        System.out.println(project.getProjectName() + ": " + count + " classes")
                    );
                    printed = true;
                }
                return cu;
            }
        };
    }
}
*/

// ============================================================
// KEY TAKEAWAYS
// ============================================================

/*
1. ScanningRecipe has THREE phases:
   - Scan: Collect data (no changes)
   - Generate: Create new files (optional)
   - Edit: Make changes based on collected data

2. Always track per-project data with Map<JavaProject, T>
   - Don't assume single project per repository
   - Get JavaProject from markers

3. Accumulator is shared across all phases
   - Use it to pass data from scan to edit
   - Keep it simple and focused

4. Scanner makes NO changes
   - Only collect information
   - Mark files or store data

5. Editor uses accumulator data
   - Make informed decisions
   - Can access all collected information

6. When multiple ScanningRecipes are in a recipe list:
   - All scanners run first
   - Then all generators run
   - Then all editors run
   - Scanners see state before ANY edits
   - But scanners DO see generated files
*/
