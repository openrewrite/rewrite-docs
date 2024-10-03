import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rewrite 7 to 8 migration. 8.1.2 Release (2023-06-13)

OpenRewrite 8 makes some substantial changes in order to support large monorepos that cannot fit into memory. All recipes will need to be migrated in order for them to keep working.

Below, we'll detail the [key changes](#key-changes) being made and provide guidance for how you can update your recipes to ensure they keep working. [At the bottom](#new-recipes) you'll find the standard new/changed/deleted recipe list.

## Key Changes

### Applicability tests have been replaced

[Recipe](https://github.com/openrewrite/rewrite/blob/v8.1.1/rewrite-core/src/main/java/org/openrewrite/Recipe.java) no longer exposes a [getSingleSourceApplicableTest](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-core/src/main/java/org/openrewrite/Recipe.java#L241) or a [getApplicableTest](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-core/src/main/java/org/openrewrite/Recipe.java#L203) method. Recipe authors should, instead, use [Preconditions.check(TreeVisitor check, TreeVisitor visitor)](https://github.com/openrewrite/rewrite/blob/v8.0.0/rewrite-core/src/main/java/org/openrewrite/Preconditions.java#L30) to conditionally apply the visitor only if the check makes sense.

As this is semantically equivalent to the OpenRewrite 7 single source applicability test, recipe authors will generally just have to copy the body of their old applicability test method into the first argument of the call to `Preconditions.check()`.

In OpenRewrite 7, `Recipe.getApplicabilityTest()` was rarely used as it was confusing to most users. If your recipe uses it, you will need to convert your recipe to a [ScanningRecipe](#new-approach-to-recipe-visiting).

:::info
For information on how to use `Preconditions` with YAML recipes, please see our [YAML format reference doc](/reference/yaml-format-reference.md#preconditions).
:::

**Example**:

<Tabs>
	<TabItem value="before" label="Before">
```java
package org.openrewrite.java.cleanup;

import org.openrewrite.Applicability;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.internal.lang.Nullable;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.search.UsesMethod;
import org.openrewrite.java.tree.*;
import org.openrewrite.java.PartProvider;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import static java.util.Collections.emptyList;
import static java.util.Collections.singletonList;

public class ChainStringBuilderAppendCalls extends Recipe {
    private static final MethodMatcher STRING_BUILDER_APPEND = new MethodMatcher("java.lang.StringBuilder append(String)");
    private static J.Binary additiveBinaryTemplate = null;

    @Override
    public String getDisplayName() {
        return "Chain `StringBuilder.append()` calls";
    }

    @Override
    protected @Nullable TreeVisitor<?, ExecutionContext> getSingleSourceApplicableTest() {
        return Applicability.or(new UsesMethod<>(STRING_BUILDER_APPEND),
            new UsesMethod<>(STRING_BUILDER_APPEND));
    }

    @Override
    protected JavaIsoVisitor<ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
                J.MethodInvocation m = super.visitMethodInvocation(method, ctx);
                // do something
                return m;
            }
        };
    }
}
```
	</TabItem>

	<TabItem value="after" label="After">
```java
package org.openrewrite.java.cleanup;

import org.openrewrite.*;
import org.openrewrite.internal.lang.Nullable;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.search.UsesMethod;
import org.openrewrite.java.tree.*;
import org.openrewrite.java.PartProvider;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import static java.util.Collections.emptyList;
import static java.util.Collections.singletonList;

public class ChainStringBuilderAppendCalls extends Recipe {
    private static final MethodMatcher STRING_BUILDER_APPEND = new MethodMatcher("java.lang.StringBuilder append(String)");
    private static J.Binary additiveBinaryTemplate = null;

    @Override
    public String getDisplayName() {
        return "Chain `StringBuilder.append()` calls";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return Preconditions.check(
                Preconditions.or(new UsesMethod<>(STRING_BUILDER_APPEND),
                        new UsesMethod<>(STRING_BUILDER_APPEND)), new JavaIsoVisitor<ExecutionContext>() {
                    @Override
                    public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
                        J.MethodInvocation m = super.visitMethodInvocation(method, ctx);
                        // do something
                        return m;
                    }
                });
    }
}
```
	</TabItem>
</Tabs>

### New approach to recipe visiting

In the previous version of OpenRewrite, developers could use [Recipe.visit(List< SourceFile > ...)](https://github.com/openrewrite/rewrite/blob/v7.40.8/rewrite-core/src/main/java/org/openrewrite/Recipe.java#L477-L479) to randomly access different files when their recipes needed them. Unfortunately, this random access took a considerable amount of time and was not scalable for large source sets. To address that problem, OpenRewrite 8 introduces a new type of recipe that separates the run functionality into three, scalable, phases.

For recipes that only change a single source file, you won't need to use the new recipe type. Instead, you will need to update the `Recipe.getVisitor()` method to be `public` instead of `protected`.

For recipes that change many source files, you will need to convert the recipe to be a [ScanningRecipe](https://github.com/openrewrite/rewrite/blob/v8.1.1/rewrite-core/src/main/java/org/openrewrite/ScanningRecipe.java).

#### What is a ScanningRecipe?

A `ScanningRecipe` extends the normal `Recipe` and adds two key objects: an [accumulator](https://github.com/openrewrite/rewrite/blob/v8.1.1/rewrite-core/src/main/java/org/openrewrite/ScanningRecipe.java#L88-L90) and a [scanner](https://github.com/openrewrite/rewrite/blob/v8.1.1/rewrite-core/src/main/java/org/openrewrite/ScanningRecipe.java#L53). The `accumulator` object is a custom data structure defined by the recipe itself to store any information the recipe needs to function. The `scanner` object is a `visitor` which populates the `accumulator` with data.

Scanning recipes have three phases:

1. A scanning phase that collects information while making no new code changes. In this phase, the `scanner` is called for each source file and information is added to the `accumulator` that the recipe will need for future steps.
    * For example, a recipe might want to detect whether a project is a Maven project or not. The `scanner` could detect a `pom.xml` file and add a flag to the `accumulator` so that future steps know this.
2. An _optional_ generating phase where new files are created (if any are needed). In this phase, the `accumulator` can be accessed to determine whether or not a file should be created.
3. An editing phase where the recipe makes changes (as it would before). Like the generating phase, an `accumulator` can be accessed to make changes – but you **cannot** randomly access other source code or files.

#### Example

As converting a `Recipe` to a `ScanningRecipe` is a substantial change, the migration recipe is not able to automate this. You will need to rewrite your recipes that need to be `ScanningRecipes` on your own.

Below is an example of what a recipe might look like before/after this change. You can find the converted recipe in its entirety [here](https://github.com/openrewrite/rewrite/blob/v8.1.2/rewrite-gradle/src/main/java/org/openrewrite/gradle/AddProperty.java).

<Tabs>
	<TabItem value="before" label="Before">
```java
// imports

@Value
@EqualsAndHashCode(callSuper = false)
public class AddProperty extends Recipe {

    @Option(displayName = "Property name",
            description = "The name of the property to add.",
            example = "org.gradle.caching")
    String key;

    @Option(displayName = "Property value",
            description = "The value of the property to add.")
    String value;

    @Option(displayName = "Overwrite if exists",
            description = "If a property with the same key exists, overwrite.",
            example = "Enable the Gradle build cache")
    @Nullable
    Boolean overwrite;

    @Override
    public String getDisplayName() {
        return "Add Gradle property";
    }

    @Override
    public String getDescription() {
        return "Add a property to the `gradle.properties` file.";
    }

    @Override
    protected TreeVisitor<?, ExecutionContext> getApplicableTest() {
        return new FindGradleProject(FindGradleProject.SearchCriteria.Marker).getVisitor();
    }

    @Override
    protected List<SourceFile> visit(List<SourceFile> before, ExecutionContext ctx) {
        AtomicBoolean exists = new AtomicBoolean();
        List<SourceFile> after = ListUtils.map(before, sourceFile -> {
            if (sourceFile.getSourcePath().endsWith(Paths.get("gradle.properties"))) {
                exists.set(true);
                Tree t = !Boolean.TRUE.equals(overwrite) ?
                        sourceFile :
                        new ChangePropertyValue(key, value, null, false, null, null)
                                .getVisitor().visitNonNull(sourceFile, ctx);
                return (SourceFile) new org.openrewrite.properties.AddProperty(key, value, null, null)
                        .getVisitor()
                        .visitNonNull(t, ctx);
            }
            return sourceFile;
        });

        if (!exists.get()) {
            after = ListUtils.concatAll(before, PropertiesParser.builder().build()
                    .parseInputs(singletonList(Parser.Input.fromString(Paths.get("gradle.properties"),
                            key + "=" + value)), null, ctx));
        }

        return after;
    }
}
```
	</TabItem>

	<TabItem value="after" label="After">
```java
// imports

@Value
@EqualsAndHashCode(callSuper = false)
public class AddProperty extends ScanningRecipe<AddProperty.NeedsProperty> {

    @Option(displayName = "Property name",
            description = "The name of the property to add.",
            example = "org.gradle.caching")
    String key;

    @Option(displayName = "Property value",
            description = "The value of the property to add.")
    String value;

    @Option(displayName = "Overwrite if exists",
            description = "If a property with the same key exists, overwrite.",
            example = "Enable the Gradle build cache")
    @Nullable
    Boolean overwrite;

    @Override
    public String getDisplayName() {
        return "Add Gradle property";
    }

    @Override
    public String getDescription() {
        return "Add a property to the `gradle.properties` file.";
    }

    static class NeedsProperty {
        boolean isGradleProject;
        boolean hasGradleProperties;
    }

    @Override
    public NeedsProperty getInitialValue(ExecutionContext ctx) {
        return new NeedsProperty();
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getScanner(NeedsProperty acc) {
        return new TreeVisitor<Tree, ExecutionContext>() {
            @Override
            public Tree visit(@Nullable Tree tree, ExecutionContext ctx) {
                SourceFile sourceFile = (SourceFile) requireNonNull(tree);
                if (sourceFile.getSourcePath().endsWith(Paths.get("gradle.properties"))) {
                    acc.hasGradleProperties = true;
                } else if (IsBuildGradle.matches(sourceFile.getSourcePath())) {
                    acc.isGradleProject = true;
                }
                return tree;
            }
        };
    }

    @Override
    public Collection<? extends SourceFile> generate(NeedsProperty acc, ExecutionContext ctx) {
        if (!acc.hasGradleProperties) {
            return PropertiesParser.builder().build()
                    .parseInputs(singletonList(Parser.Input.fromString(Paths.get("gradle.properties"),
                            key + "=" + value)), null, ctx)
                    .collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor(NeedsProperty acc) {
        return Preconditions.check(acc.isGradleProject && acc.hasGradleProperties, new TreeVisitor<Tree, ExecutionContext>() {
            @Override
            public Tree visit(@Nullable Tree tree, ExecutionContext ctx) {
                SourceFile sourceFile = (SourceFile) requireNonNull(tree);
                if (sourceFile.getSourcePath().endsWith(Paths.get("gradle.properties"))) {
                    Tree t = !Boolean.TRUE.equals(overwrite) ?
                            sourceFile :
                            new ChangePropertyValue(key, value, null, false, null)
                                    .getVisitor().visitNonNull(sourceFile, ctx);
                    return new org.openrewrite.properties.AddProperty(key, value, null)
                            .getVisitor()
                            .visitNonNull(t, ctx);
                }
                return sourceFile;
            }
        });
    }
}
```
	</TabItem>
</Tabs>

### JavaTemplate API has been updated

Up until now, `JavaTemplate` has had a single purpose: for creating LST subtrees based on template code and input parameters. In OpenRewrite 8, however, a second use case has been added – `JavaTemplate` can now be defined as a pattern that matches against an LST subtree, similar to a regular expression (regexp). To make this work, the template needs to be context-free, meaning it doesn't refer to surrounding code but, instead, only to template parameters and statically available elements like classes and static members.

This context-free nature allows us to embed the template into a skeleton Java class, compile it once to an LST, and then compare it with other LSTs to determine if they match. The template parameters in the LST act as wildcards in a regexp-like manner. This approach significantly improves efficiency compared to replacing each subtree separately.

The context-free templates also benefit the first use case of LST substitution, although the impact may not be as significant since template application is relatively infrequent. However, for template matching, where potentially thousands of subtrees in a single source file need to be matched, the context-free nature is crucial. 

To support this new functionality, **we've had to redesign the `JavaTemplate` API**. New methods, such as `matches()` and `matcher()`, have been introduced for templating matching (similar to Java's regex functionality). Furthermore, the builder now produces context-free templates by default. If a template requires context sensitivity, the `contextSensitive()` method of the builder must be invoked.

**You will need to update all references to `JavaTemplate` in your recipes.** You will need to:

1. Double-check whether or not `contextSensitive()` makes sense for your recipe. It is added by default – but if your recipe doesn't refer to the surrounding code and, instead, only refers to template parameters or statically available elements like classes and static methods, you can remove it.

2. Determine what type of `Cursor` should go into the `JavaTemplate.apply()` method. Typically this should be `getCursor()`. However, if the `J` instance is updated in the method, the cursor on this visitor will need to be updated. In that case, you should use [updateCursor](https://github.com/openrewrite/rewrite/blob/v8.1.1/rewrite-core/src/main/java/org/openrewrite/TreeVisitor.java#L158-L169) instead.

**Example**:

<Tabs>
	<TabItem value="before" label="Before">
```java
package org.openrewrite.java;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.java.tree.Expression;
import org.openrewrite.java.tree.J;
import java.util.List;

@Value
@EqualsAndHashCode(callSuper = false)
public class AddOrUpdateAnnotationAttribute extends Recipe {
    @Override
    public String getDisplayName() {
        return "Add or update annotation attribute";
    }

    @Override
    public String getDescription() {
        return "Add or update annotation attribute.";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.Annotation visitAnnotation(J.Annotation a, ExecutionContext context) {
                String param1 = "test parameter 1";
                String param2 = "test parameter 2";
                List<Expression> currentArgs = a.getArguments();
                if (currentArgs == null || currentArgs.isEmpty()) {
                    return a.withTemplate(
                        JavaTemplate.builder(this::getCursor, "#{}")
                            .build(),
                        a.getCoordinates().replaceArguments(),
                        param1,
                        param2);
                }
                return a;
            }
        };
    }
}
```
	</TabItem>

	<TabItem value="after" label="After">
```java
package org.openrewrite.java;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.java.tree.Expression;
import org.openrewrite.java.tree.J;
import java.util.List;

@Value
@EqualsAndHashCode(callSuper = false)
public class AddOrUpdateAnnotationAttribute extends Recipe {
    @Override
    public String getDisplayName() {
        return "Add or update annotation attribute";
    }

    @Override
    public String getDescription() {
        return "Add or update annotation attribute.";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.Annotation visitAnnotation(J.Annotation a, ExecutionContext context) {
                String param1 = "test parameter 1";
                String param2 = "test parameter 2";
                List<Expression> currentArgs = a.getArguments();
                if (currentArgs == null || currentArgs.isEmpty()) {
                    return JavaTemplate.builder("#{}")/*[Rewrite8 migration]`contextSensitive()` could be unnecessary and can be removed, please double-check manually*/.contextSensitive()
                            .build().apply(/*[Rewrite8 migration] please double-check correctness of this parameter manually, it could be updateCursor() if the value is updated somewhere*/getCursor(),
                            a.getCoordinates().replaceArguments(),
                            param1,
                            param2);
                }
                return a;
            }
        };
    }
}
```
	</TabItem>
</Tabs>

### Cleanup recipes have been moved

All cleanup recipes have been moved to the [rewrite-static-analysis](https://github.com/openrewrite/rewrite-static-analysis) repository. The package name has also changed from `org.openrewrite.java.cleanup` to `org.openrewrite.staticanalysis`.

### visitJavaSourceFile and visitSource were removed

The [JavaVisitor.visitJavaSourceFile(JavaSourceFile cu, P p)](https://github.com/openrewrite/rewrite/blob/v7.40.8/rewrite-java/src/main/java/org/openrewrite/java/JavaVisitor.java#L459-L462) method was removed in favor of the [TreeVisitor.visit(@Nullable Tree tree, P p) method](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/TreeVisitor.java#L66).

Similarly, [TreeVisitor.visitSource](https://github.com/openrewrite/rewrite/blob/v7.40.8/rewrite-core/src/main/java/org/openrewrite/TreeVisitor.java#L176-L179) has been replaced with [TreeVisitor.visit(Tree tree, P p)](https://github.com/openrewrite/rewrite/blob/v8.9.6/rewrite-core/src/main/java/org/openrewrite/TreeVisitor.java#L253).

**Example**:

<Tabs>
	<TabItem value="before" label="Before">
```java
package org.openrewrite.staticanalysis;

import org.openrewrite.*;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.RenameVariable;
import org.openrewrite.java.tree.Flag;
import org.openrewrite.java.tree.J;
import org.openrewrite.java.tree.JavaSourceFile;

import java.time.Duration;
import java.util.*;

import static org.openrewrite.internal.NameCaseConvention.LOWER_CAMEL;

public class RenamePrivateFieldsToCamelCase extends Recipe {

    @Override
    public String getDisplayName() {
        return "Reformat private field names to camelCase";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new RenameNonCompliantNames();
    }

    private static class RenameNonCompliantNames extends JavaIsoVisitor<ExecutionContext> {
        @Override
        public JavaSourceFile visitJavaSourceFile(JavaSourceFile cu, ExecutionContext ctx) {
            Map<J.VariableDeclarations.NamedVariable, String> renameVariablesMap = new LinkedHashMap<>();
            Set<String> hasNameSet = new HashSet<>();

            getCursor().putMessage("RENAME_VARIABLES_KEY", renameVariablesMap);
            getCursor().putMessage("HAS_NAME_KEY", hasNameSet);
            super.visitJavaSourceFile(cu, ctx);

            renameVariablesMap.forEach((key, value) -> {
                if (!hasNameSet.contains(value) && !hasNameSet.contains(key.getSimpleName())) {
                    doAfterVisit(new RenameVariable<>(key, value));
                    hasNameSet.add(value);
                }
            });
            return cu;
        }
    }
}
```
	</TabItem>

	<TabItem value="after" label="After">
```java
package org.openrewrite.staticanalysis;

import org.openrewrite.*;
import org.openrewrite.internal.lang.Nullable;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.RenameVariable;
import org.openrewrite.java.tree.Flag;
import org.openrewrite.java.tree.J;
import org.openrewrite.java.tree.JavaSourceFile;

import java.time.Duration;
import java.util.*;

import static org.openrewrite.internal.NameCaseConvention.LOWER_CAMEL;

public class RenamePrivateFieldsToCamelCase extends Recipe {

    @Override
    public String getDisplayName() {
        return "Reformat private field names to camelCase";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new RenameNonCompliantNames();
    }

    private static class RenameNonCompliantNames extends JavaIsoVisitor<ExecutionContext> {

        @Override
        public  @Nullable J visit(@Nullable Tree tree, ExecutionContext ctx) {
            if (tree instanceof JavaSourceFile) {
                JavaSourceFile cu = (JavaSourceFile) tree;
                Map<J.VariableDeclarations.NamedVariable, String> renameVariablesMap = new LinkedHashMap<>();
                Set<String> hasNameSet = new HashSet<>();

                getCursor().putMessage("RENAME_VARIABLES_KEY", renameVariablesMap);
                getCursor().putMessage("HAS_NAME_KEY", hasNameSet);
                super.visit(cu, ctx);

                renameVariablesMap.forEach((key, value) -> {
                    if (!hasNameSet.contains(value) && !hasNameSet.contains(key.getSimpleName())) {
                        doAfterVisit(new RenameVariable<>(key, value));
                        hasNameSet.add(value);
                    }
                });
            }
            return super.visit(tree, ctx);
        }
    }
}
```
	</TabItem>
</Tabs>

### searchResult methods have been removed

The deprecated [Markers#searchResult](https://github.com/openrewrite/rewrite/blob/v7.40.8/rewrite-core/src/main/java/org/openrewrite/marker/Markers.java#L171-L183) methods have been removed in favor of the [SearchResult#found](https://github.com/openrewrite/rewrite/blob/large-repositories/rewrite-core/src/main/java/org/openrewrite/marker/SearchResult.java#L43-L54) methods.

**Example**:

<Tabs>
	<TabItem value="before" label="Before">
```java
package org.openrewrite.kubernetes.resource;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.*;
import org.openrewrite.yaml.YamlIsoVisitor;
import org.openrewrite.yaml.tree.Yaml;

@Value
@EqualsAndHashCode(callSuper = false)
public class FindExceedsResourceRatio extends Recipe {
    @Override
    public String getDisplayName() {
        return "Find exceeds resource ratio";
    }

    @Override
    protected TreeVisitor<?, ExecutionContext> getVisitor() {
        return new YamlIsoVisitor<ExecutionContext>() {
            @Override
            public Yaml.Mapping.Entry visitMappingEntry(Yaml.Mapping.Entry entry, ExecutionContext ctx) {
                Yaml.Mapping.Entry e = super.visitMappingEntry(entry, ctx);
                return e.withMarkers(e.getMarkers().searchResult("foo"));
            }
        };
    }
}
```
	</TabItem>

	<TabItem value="after" label="After">
```java
package org.openrewrite.kubernetes.resource;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.*;
import org.openrewrite.marker.SearchResult;
import org.openrewrite.yaml.YamlIsoVisitor;
import org.openrewrite.yaml.tree.Yaml;

@Value
@EqualsAndHashCode(callSuper = false)
public class FindExceedsResourceRatio extends Recipe {
    @Override
    public String getDisplayName() {
        return "Find exceeds resource ratio";
    }

    @Override
    protected TreeVisitor<?, ExecutionContext> getVisitor() {
        return new YamlIsoVisitor<ExecutionContext>() {
            @Override
            public Yaml.Mapping.Entry visitMappingEntry(Yaml.Mapping.Entry entry, ExecutionContext ctx) {
                Yaml.Mapping.Entry e = super.visitMappingEntry(entry, ctx);
                return SearchResult.found(e, "foo");
            }
        };
    }
}
```
	</TabItem>
</Tabs>

### The doNext method has been removed

The [org.openrewrite.Recipe doNext(..)](https://github.com/openrewrite/rewrite/blob/v7.40.8/rewrite-core/src/main/java/org/openrewrite/Recipe.java#L306-L313) method has been removed. In most situations, it should be replaced with [TreeVisitor#doAfterVisit(Visitor)](https://github.com/openrewrite/rewrite/blob/v8.1.2/rewrite-core/src/main/java/org/openrewrite/TreeVisitor.java#L136).

However, as the `doAfterVisit` method only changes the current source file, if your recipe needs to change other files, it will need to be rewritten as a [ScanningRecipe](#new-approach-to-recipe-visiting).

Similarly, the `doAfterVisit(Recipe)` method has been removed in favor of `doAfterVisit(Visitor)`. 

## New Artifacts

* rewrite-analysis
* rewrite-cucumber-jvm
* rewrite-hibernate
* rewrite-recommendations
* rewrite-sql
* rewrite-static-analysis

## New recipes

* org.openrewrite.FindCollidingSourceFiles: Finds source files which share a path with another source file. There should always be exactly one source file per path within a repository. This is a diagnostic for finding problems in OpenRewrite parsers/build plugins. 
* org.openrewrite.analysis.controlflow.ControlFlowVisualization: Visualize the control flow of a Java program. 
* org.openrewrite.analysis.search.FindFlowBetweenMethods: Takes two patterns for the start/end methods to find flow between. 
* org.openrewrite.analysis.search.FindMethods: Find method usages by pattern. 
* org.openrewrite.analysis.search.UriCreatedWithHttpScheme: This is a sample recipe demonstrating a simple application of local data flow analysis. 
* org.openrewrite.cucumber.jvm.CucumberAnnotationToSuite: Replace @Cucumber with @Suite and @SelectClasspathResource("cucumber/annotated/class/package"). 
* org.openrewrite.cucumber.jvm.CucumberJava8HookDefinitionToCucumberJava: Replace LambdaGlue hook definitions with new annotated methods with the same body. 
* org.openrewrite.cucumber.jvm.CucumberJava8StepDefinitionToCucumberJava: Replace StepDefinitionBody methods with StepDefinitionAnnotations on new methods with the same body. 
* org.openrewrite.cucumber.jvm.CucumberJava8ToJava: Migrates Cucumber-Java8 step definitions and LambdaGlue hooks to Cucumber-Java annotated methods. 
* org.openrewrite.cucumber.jvm.CucumberToJunitPlatformSuite: Migrates Cucumber tests to JUnit Test Suites. 
* org.openrewrite.cucumber.jvm.DropSummaryPrinter: Replace SummaryPrinter with Plugin, if not already present. 
* org.openrewrite.cucumber.jvm.RegexToCucumberExpression: Strip regex prefix and suffix from step annotation expressions arguments where possible. 
* org.openrewrite.cucumber.jvm.UpgradeCucumber2x: Upgrade to Cucumber-JVM 2.x from any previous version. 
* org.openrewrite.cucumber.jvm.UpgradeCucumber5x: Upgrade to Cucumber-JVM 5.x from any previous version. 
* org.openrewrite.cucumber.jvm.UpgradeCucumber7x: Upgrade to Cucumber-JVM 7.x from any previous version. 
* org.openrewrite.github.SetupJavaAdoptOpenJDKToTemurin: Adopt OpenJDK got moved to Eclipse Temurin and won't be updated anymore. It is highly recommended to migrate workflows from adopt to temurin to keep receiving software and security updates. See more details in the Good-bye AdoptOpenJDK post. 
* org.openrewrite.github.SetupJavaAdoptOpenj9ToSemeru: Adopt OpenJDK got moved to Eclipse Temurin and won't be updated anymore. It is highly recommended to migrate workflows from adopt-openj9 to IBM semeru to keep receiving software and security updates. See more details in the Good-bye AdoptOpenJDK post. 
* org.openrewrite.gradle.ChangeDependency: Change a Gradle dependency coordinates. 
* org.openrewrite.gradle.RemoveDependency: Removes a single dependency from the dependencies section of the `build.gradle`. 
* org.openrewrite.gradle.UpdateJavaCompatibility: Find and updates the Java compatibility for the Gradle project. 
* org.openrewrite.hibernate.MigrateToHibernate61: This recipe will apply changes commonly needed when migrating to Hibernate 6.1.x. The hibernate dependencies will   be updated to use the new org.hibernate.orm group ID and the recipe will make changes necessary to use Hibernate with Jakarta EE 9.0. 
* org.openrewrite.hibernate.MigrateToHibernateDependencies61: This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.1.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifacts names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies. 
* org.openrewrite.hibernate.TypeDescriptorToType: Rename `JavaTypeDescriptor` and `SqlTypeDescriptor` to `JavaType` and `SqlType` respectively. See https://github.com/hibernate/hibernate-orm/blob/6.0/migration-guide.adoc#type-system 
* org.openrewrite.java.ShortenFullyQualifiedTypeReferences: Any fully qualified references to Java types will be replaced with corresponding simple names and import statements, provided that it doesn't result in any conflicts with other imports or types declared in the local compilation unit. 
* org.openrewrite.java.dependencies.AddDependency: For a Gradle project, add a gradle dependency to a `build.gradle` file in the correct configuration based on where it is used. Or For a maven project, Add a Maven dependency to a `pom.xml` file in the correct scope based on where it is used. 
* org.openrewrite.java.dependencies.ChangeDependency: Change the groupId, artifactId and/or the version of a specified Gradle or Maven dependency. 
* org.openrewrite.java.dependencies.RemoveDependency: For Gradle project, removes a single dependency from the dependencies section of the `build.gradle`. For Maven project, removes a single dependency from the `<dependencies>` section of the pom.xml. 
* org.openrewrite.java.dependencies.UpgradeDependencyVersion: For Gradle projects, upgrade the version of a dependency in a build.gradle file. Supports updating dependency declarations of various forms:
  * `String` notation: `"group:artifact:version"` 
  * `Map` notation: `group: 'group', name: 'artifact', version: 'version'`. Can update version numbers which are defined earlier in the same file in variable declarations. 
  * For Maven projects, upgrade the version of a dependency by specifying a group and (optionally) an artifact using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases. 
* org.openrewrite.java.format.MethodParamPad: Fixes whitespace padding between the identifier of a method definition or method invocation and the left parenthesis of the parameter list. For example, when configured to remove spacing, `someMethodInvocation (x);` becomes `someMethodInvocation(x)`. 
* org.openrewrite.java.format.NoWhitespaceAfter: Removes unnecessary whitespace appearing after a token. A linebreak after a token is allowed unless `allowLineBreaks` is set to `false`, in which case it will be removed. 
* org.openrewrite.java.format.NoWhitespaceBefore: Removes unnecessary whitespace preceding a token. A linebreak before a token will be removed unless `allowLineBreaks` is set to `true`. 
* org.openrewrite.java.format.OperatorWrap: Fixes line wrapping policies on operators. 
* org.openrewrite.java.format.PadEmptyForLoopComponents: Fixes padding on empty `for` loop iterators and initializers to match Checkstyle policies. 
* org.openrewrite.java.format.TypecastParenPad: Fixes whitespace padding between a typecast type identifier and the enclosing left and right parenthesis. For example, when configured to remove spacing, `( int ) 0L;` becomes `(int) 0L;`. 
* org.openrewrite.java.micronaut.AddMicronautRetryDependencyIfNeeded: This recipe will add the explicit Micronaut Retry dependency if needed 
* org.openrewrite.java.micronaut.AddMicronautWebsocketDependencyIfNeeded: This recipe will add the explicit Micronaut Websocket dependency if needed 
* org.openrewrite.java.micronaut.AddSnakeYamlDependencyIfNeeded: This recipe will add the `snakeyaml` dependency to a Micronaut 4 application that uses yaml configuration. 
* org.openrewrite.java.micronaut.ChangeAnnotationProcessorPath: Change the groupId, artifactId, and version of a Maven annotation processor path. 
* org.openrewrite.java.micronaut.FindPropertiesConfig: Find Micronaut properties configuration files. 
* org.openrewrite.java.micronaut.FindYamlConfig: Find Micronaut yaml configuration files. 
* org.openrewrite.java.micronaut.Micronaut3to4Migration: This recipe will apply changes required for migrating from Micronaut 3 to Micronaut 4. 
* org.openrewrite.java.micronaut.UpdateBuildPlugins: This recipe will update the shadow jar plugin to 8.x and the Micronaut build plugins to 4.x for a Gradle build. 
* org.openrewrite.java.micronaut.UpdateBuildToMicronaut4Version: This recipe will update the Micronaut version to 4.x for a Gradle or Maven build. 
* org.openrewrite.java.micronaut.UpdateJakartaAnnotations: This recipe will remove jakarta annotations dependency as it is a transitive dependency of micronaut-inject, and migrate from javax.annotation if needed. 
* org.openrewrite.java.micronaut.UpdateMicronautEmail: This recipe will migrate from javax.validation if needed, and update packages in for the Postmark integration if needed. 
* org.openrewrite.java.micronaut.UpdateMicronautPlatformBom: This recipe will update a Gradle or Maven build to reference the Micronaut 4 platform BOM. 
* org.openrewrite.java.micronaut.UpdateMicronautSecurity: This recipe will update imports for relocated classes and update configuration files with renamed keys. 
* org.openrewrite.java.micronaut.UpdateMicronautSession: This recipe will update the Micronaut Session dependency if needed 
* org.openrewrite.java.micronaut.UpdateMicronautValidation: This recipe will add jakarta validation dependency if needed, migrate from javax.validation if needed, and update micronaut validation dependencies. 
* org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded: This recipe will update relocated security config keys in Micronaut configuration property files. 
* org.openrewrite.java.micronaut.UpdateSecurityYamlIfNeeded: This recipe will update relocated security config keys in Micronaut configuration yaml files. 
* org.openrewrite.java.migrate.javax.MigrateCounterMonitorSetThresholdToSetInitThreshold: Use `javax.management.monitor.CounterMonitor#setInitThreshold` instead of the deprecated `javax.management.monitor.CounterMonitor#setThreshold` in JMX 1.2 or higher. 
* org.openrewrite.java.migrate.lang.UseStringIsEmptyRecipe: Recipe created for the following Refaster template:
  ```java
  public class UseStringIsEmpty {
      
      @BeforeTemplate
      boolean before(String s) {
          return s.length() > 0;
      }
      
      @AfterTemplate
      boolean after(String s) {
          return !s.isEmpty();
      }
  }
  ```. 
* org.openrewrite.java.recipes.MigrateJavaTemplateToRewrite8: Migrate `JavaTemplate` to accommodate Rewrite 8, due to wide open-ended usage of JavaTemplate, this recipe just apply most of common changes to pass compile and will leave some comments to require human's review. 
* org.openrewrite.java.recipes.MigrateMarkersSearchResult: Methods of `org.openrewrite.marker.Markers#SearchResult(..)` are deprecated and removed in rewrite 8, use `SearchResult.found()` instead. 
* org.openrewrite.java.recipes.MigrateRecipeToRewrite8: Rewrite Recipe Migration to version 8. While most parts can be automatically migrated, there are some complex and open-ended scenarios that require manual attention. In those cases, this recipe will add a comment to the code and request a human to review and handle it manually. 
* org.openrewrite.java.recipes.MigrateTestToRewrite8: Since the method `Recipe::doNext(..)` is deprecated, For unit test, change usage like `RecipeSpec.recipe(X.doNext(Y))` to `RecipeSpec.recipes(X, Y)`. 
* org.openrewrite.java.recipes.RemoveApplicabilityTestFromYamlRecipe: Remove the applicability test from the YAML recipe when migrating from Rewrite 7 to 8, as it is no longer supported and may require migrating the recipe to Java code. 
* org.openrewrite.java.recipes.UpdateMovedPackageClassName: When a class moved from package A to B, update the fully qualified className accordingly. 
* org.openrewrite.java.recipes.UpdateMovedRecipe: Update moved package recipe. 
* org.openrewrite.java.recipes.UpdateMovedRecipesYaml: Update moved package recipe. 
* org.openrewrite.java.search.FindCallGraph: Produce the call graph describing the relationships between methods. 
* org.openrewrite.java.spring.amqp.UseTlsAmqpConnectionString: Use TLS for AMQP connection strings. 
* org.openrewrite.java.spring.boot2.MigrateApplicationHealthIndicatorToPingHealthIndicator: `org.springframework.boot.actuate.health.ApplicationHealthIndicator` was deprecated in 2.2. 
* org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax: Use `javax.validation.constraints` instead of the deprecated `org.hibernate.validator.constraints` in Spring Boot 2.0 or higher. 
* org.openrewrite.java.spring.boot3.MavenPomUpgrade_3_1: Upgrade Maven POM to Spring Boot 3.1 from prior 3.0 version. 
* org.openrewrite.java.spring.boot3.SpringBootProperties_3_0: Migrate properties found in `application.properties` and `application.yml`. 
* org.openrewrite.java.spring.boot3.SpringBootProperties_3_1: Migrate properties found in `application.properties` and `application.yml`. 
* org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1: Upgrade to Spring Boot 3.1 
* org.openrewrite.java.spring.cloud2022.AddLoggingPatternLevelForSleuth: Add `logging.pattern.level` for traceId and spanId which was previously set by default, if not already set. 
* org.openrewrite.java.spring.security5.RenameNimbusdsJsonObjectPackageName: Rename the package name from `com.nimbusds.jose.shaded.json.JSONObject` to `net.minidev.json.JSONObject`. 
* org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter: The Spring Security `WebSecurityConfigurerAdapter` was deprecated 5.7, this recipe will transform `WebSecurityConfigurerAdapter` classes by using a component based approach. Check out the spring-security-without-the-websecurityconfigureradapter blog for more details. 
* org.openrewrite.java.testing.assertj.UseExplicitIsEmpty: Convert AssertJ `assertThat(collection.isEmpty()).isTrue()` to `assertThat(collection).isEmpty()` and `assertThat(collection.isEmpty()).isFalse()` to `assertThat(collection).isNotEmpty()`. 
* org.openrewrite.java.testing.junit5.ThrowingRunnableToExecutable: Migrates JUnit 4.x `ThrowingRunnable` to JUnit Jupiter `Executable`. 
* org.openrewrite.java.upgrade.MigrateToRewrite8: Migrate rewrite recipe and test from version 7 to version 8. While most parts can be automatically migrated, there are some complex and open-ended scenarios that require manual attention. In those cases, this recipe will add a comment to the code and request a human to review and handle it manually. Reference : Migration guide (URL to be written). 
* org.openrewrite.java.upgrade.UpdateStaticAnalysisPackage: Some recipes have been moved from `rewrite` to `rewrite-static-analysis`, so any referencing places should update the class package name accordingly. 
* org.openrewrite.kotlin.RenameTypeAlias: Change the name of a given type alias. 
* org.openrewrite.kotlin.StaticAnalysis: Static analysis fixes for Kotlin sources. 
* org.openrewrite.maven.AddProfile: Add a maven profile to a `pom.xml` file. 
* org.openrewrite.python.cleanup.CommonStaticAnalysis: Resolve common static analysis issues discovered through 3rd party tools. 
* org.openrewrite.recommendations.CodeHealth: Used for Code Health metric on moderne radar. 
* org.openrewrite.recommendations.CodeStyle: Used for Code Style metric on moderne radar. 
* org.openrewrite.recommendations.DependencyManagement: Used for Dependency Management metric on moderne radar. 
* org.openrewrite.recommendations.InfrastructureAsCode: Used for Infrastructure As Code metric on moderne radar. 
* org.openrewrite.sql.FindSql: Find SQL in code (e.g. in string literals) and in resources like those ending with `.sql`. 
* org.openrewrite.sql.FormatSql: Checks whether a text block may contain SQL, and if so, formats the text accordingly. 
* org.openrewrite.staticanalysis.AddSerialVersionUidToSerializable: A `serialVersionUID` field is strongly recommended in all `Serializable` classes. If this is not defined on a `Serializable` class, the compiler will generate this value. If a change is later made to the class, the generated value will change and attempts to deserialize the class will fail. 
* org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet: `AtomicBoolean#equals(Object)`, `AtomicInteger#equals(Object)` and `AtomicLong#equals(Object)` are only equal to their instance. This recipe converts `a.equals(b)` to `a.get() == b.get()`. 
* org.openrewrite.staticanalysis.AvoidBoxedBooleanExpressions: Under certain conditions the `java.lang.Boolean` type is used as an expression, and it may throw a `NullPointerException` if the value is null. 
* org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums: Convert `BigDecimal` rounding constants to the equivalent `RoundingMode` enum. 
* org.openrewrite.staticanalysis.BooleanChecksNotInverted: It is needlessly complex to invert the result of a boolean comparison. The opposite comparison should be made instead. Also double negation of boolean expressions should be avoided. 
* org.openrewrite.staticanalysis.CaseInsensitiveComparisonsDoNotChangeCase: Remove `String#toLowerCase()` or `String#toUpperCase()` from `String#equalsIgnoreCase(..)` comparisons. 
* org.openrewrite.staticanalysis.CatchClauseOnlyRethrows: A `catch` clause that only rethrows the caught exception is unnecessary. Letting the exception bubble up as normal achieves the same result with less code. 
* org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls: String concatenation within calls to `StringBuilder.append()` causes unnecessary memory allocation. Except for concatenations of String literals, which are joined together at compile time. Replaces inefficient concatenations with chained calls to `StringBuilder.append()`. 
* org.openrewrite.staticanalysis.CodeCleanup: Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions. 
* org.openrewrite.staticanalysis.CombineSemanticallyEqualCatchBlocks: Combine catches in a try that contain semantically equivalent blocks. No change will be made when a caught exception exists if combing catches may change application behavior or type attribution is missing. 
* org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances: When using a method parameter like `Function<IN, OUT>`, it should rather be `Function<? super IN, ? extends OUT>`. This recipe checks for method parameters of well-known types. 
* org.openrewrite.staticanalysis.CommonStaticAnalysis: Resolve common static analysis issues discovered through 3rd party tools. 
* org.openrewrite.staticanalysis.CompareEnumsWithEqualityOperator: Replaces `Enum equals(java.lang.Object)` with `Enum == java.lang.Object`. An `!Enum equals(java.lang.Object)` will change to `!=`. 
* org.openrewrite.staticanalysis.ControlFlowIndentation: Program flow control statements like `if`, `while`, and `for` can omit curly braces when they apply to only a single statement. This recipe ensures that any statements which follow that statement are correctly indented to show they are not part of the flow control statement. 
* org.openrewrite.staticanalysis.CovariantEquals: Checks that classes and records which define a covariant `equals()` method also override method `equals(Object)`. Covariant `equals()` means a method that is similar to `equals(Object)`, but with a covariant parameter type (any subtype of `Object`). 
* org.openrewrite.staticanalysis.DeclarationSiteTypeVariance: Currently, Java requires use-site type variance, so if someone has `Function<IN, OUT>` method parameter, it should rather be `Function<? super IN, ? extends OUT>`. Unfortunately, it is not easy to notice that `? super` and `? extends` is missing, so this recipe adds it where that would improve the situation. 
* org.openrewrite.staticanalysis.DefaultComesLast: Ensure the `default` case comes last after all the cases in a switch statement. 
* org.openrewrite.staticanalysis.EmptyBlock: Remove empty blocks that effectively do nothing. 
* org.openrewrite.staticanalysis.EqualsAvoidsNull: Checks that any combination of String literals is on the left side of an `equals()` comparison. Also checks for String literals assigned to some field (such as `someString.equals(anotherString = "text"))`. 
* org.openrewrite.staticanalysis.ExplicitCharsetOnStringGetBytes: This makes the behavior of the code platform neutral. It will not override any existing explicit encodings, even if they don't match the default encoding option. 
* org.openrewrite.staticanalysis.ExplicitInitialization: Checks if any class or object member is explicitly initialized to default for its type value:
  - `null` for object references
  - zero for numeric types and `char`
  - and `false` for `boolean`
  Removes explicit initializations where they aren't necessary. 
* org.openrewrite.staticanalysis.ExplicitLambdaArgumentTypes: Adds explicit types on lambda arguments, which are otherwise optional. This can make the code clearer and easier to read. This does not add explicit types on arguments when the lambda has one or two parameters and does not have a block body, as things are considered more readable in those cases. For example, `stream.map((a, b) -> a.length);` will not have explicit types added. 
* org.openrewrite.staticanalysis.ExternalizableHasNoArgsConstructor: `Externalizable` classes handle both serialization and deserialization and must have a no-args constructor for the deserialization process. 
* org.openrewrite.staticanalysis.FallThrough: Checks for fall-through in switch statements, adding `break` statements in locations where a case contains Java code but does not have a `break`, `return`, `throw`, or `continue` statement. 
* org.openrewrite.staticanalysis.FinalClass: Adds the `final` modifier to classes that expose no public or package-private constructors. 
* org.openrewrite.staticanalysis.FinalizeLocalVariables: Adds the `final` modifier keyword to local variables which are not reassigned. 
* org.openrewrite.staticanalysis.FinalizeMethodArguments: Adds the `final` modifier keyword to method parameters. 
* org.openrewrite.staticanalysis.FinalizePrivateFields: Adds the `final` modifier keyword to private instance variables which are not reassigned. 
* org.openrewrite.staticanalysis.FixStringFormatExpressions: Fix `String#format` and `String#formatted` expressions by replacing `\n` newline characters with `%n` and removing any unused arguments. Note this recipe is scoped to only transform format expressions which do not specify the argument index. 
* org.openrewrite.staticanalysis.ForLoopControlVariablePostfixOperators: Replace `for` loop control variables using pre-increment (`++i`) or pre-decrement (`--i`) operators with their post-increment (`i++`) or post-decrement (`i++`) notation equivalents. 
* org.openrewrite.staticanalysis.ForLoopIncrementInUpdate: The increment should be moved to the loop's increment clause if possible. 
* org.openrewrite.staticanalysis.HiddenField: Refactor local variables or parameters which shadow a field defined in the same class. 
* org.openrewrite.staticanalysis.HideUtilityClassConstructor: Ensures utility classes (classes containing only static methods or fields in their API) do not have a public constructor. 
* org.openrewrite.staticanalysis.IndexOfChecksShouldUseAStartPosition: Replaces `indexOf(String)` in binary operations if the compared value is an int and not less than 1. 
* org.openrewrite.staticanalysis.IndexOfReplaceableByContains: Checking if a value is included in a `String` or `List` using `indexOf(value)>-1` or `indexOf(value)>=0` can be replaced with `contains(value)`. 
* org.openrewrite.staticanalysis.IndexOfShouldNotCompareGreaterThanZero: Replaces `String#indexOf(String) > 0` and `List#indexOf(Object) > 0` with `>=1`. Checking `indexOf` against `>0` ignores the first element, whereas `>-1` is inclusive of the first element. For clarity, `>=1` is used, because `>0` and `>=1` are semantically equal. Using `>0` may appear to be a mistake with the intent of including all elements. If the intent is to check whether a value in included in a `String` or `List`, the `String#contains(String)` or `List#contains(Object)` methods may be better options altogether. 
* org.openrewrite.staticanalysis.InlineVariable: Inline variables when they are immediately used to return or throw. 
* org.openrewrite.staticanalysis.InstanceOfPatternMatch: Adds pattern variables to `instanceof` expressions wherever the same (side effect free) expression is referenced in a corresponding type cast expression within the flow scope of the `instanceof`. Currently, this recipe supports `if` statements and ternary operator expressions. 
* org.openrewrite.staticanalysis.IsEmptyCallOnCollections: Also check for _not_ `isEmpty()` when testing for not equal to zero size. 
* org.openrewrite.staticanalysis.JavaApiBestPractices: Use the Java standard library in a way that is most idiomatic. 
* org.openrewrite.staticanalysis.LambdaBlockToExpression: Single-line statement lambdas returning a value can be replaced with expression lambdas. 
* org.openrewrite.staticanalysis.LowercasePackage: By convention all Java package names should contain only lowercase letters, numbers, and dashes. This recipe converts any uppercase letters in package names to be lowercase. 
* org.openrewrite.staticanalysis.MethodNameCasing: Method names should comply with a naming convention. 
* org.openrewrite.staticanalysis.MinimumSwitchCases: `switch` statements are useful when many code paths branch depending on the value of a single expression. For just one or two code paths, the code will be more readable with `if` statements. 
* org.openrewrite.staticanalysis.MissingOverrideAnnotation: Adds `@Override` to methods overriding superclass methods or implementing interface methods. Annotating methods improves readability by showing the author's intent to override. Additionally, when annotated, the compiler will emit an error when a signature of the overridden method does not match the superclass method. 
* org.openrewrite.staticanalysis.ModifierOrder: Modifiers should be declared in the correct order as recommended by the JLS. 
* org.openrewrite.staticanalysis.MultipleVariableDeclarations: Places each variable declaration in its own statement and on its own line. Using one variable declaration per line encourages commenting and can increase readability. 
* org.openrewrite.staticanalysis.NeedBraces: Adds missing braces around code such as single-line `if`, `for`, `while`, and `do-while` block bodies. 
* org.openrewrite.staticanalysis.NestedEnumsAreNotStatic: Remove static modifier from nested enum types since they are implicitly static. 
* org.openrewrite.staticanalysis.NewStringBuilderBufferWithCharArgument: Instantiating a `StringBuilder` or a `StringBuffer` with a `Character` results in the `int` representation of the character being used for the initial size. 
* org.openrewrite.staticanalysis.NoDoubleBraceInitialization: Replace `List`, `Map`, and `Set` double brace initialization with an initialization block. 
* org.openrewrite.staticanalysis.NoEmptyCollectionWithRawType: Replaces `Collections#EMPTY_..` with methods that return generic types. 
* org.openrewrite.staticanalysis.NoEqualityInForCondition: Testing for loop termination using an equality operator (`==` and `!=`) is dangerous, because it could set up an infinite loop. Using a relational operator instead makes it harder to accidentally write an infinite loop. 
* org.openrewrite.staticanalysis.NoFinalizedLocalVariables: Remove the `final` modifier keyword from local variables regardless of whether they are used within a local class or an anonymous class. 
* org.openrewrite.staticanalysis.NoFinalizer: Finalizers are deprecated. Use of `finalize()` can lead to performance issues, deadlocks, hangs, and other undesirable behavior. 
* org.openrewrite.staticanalysis.NoPrimitiveWrappersForToStringOrCompareTo: Primitive wrappers should not be instantiated only for `#toString()` or `#compareTo(..)` invocations. 
* org.openrewrite.staticanalysis.NoRedundantJumpStatements: Jump statements such as return and continue let you change the default flow of program execution, but jump statements that direct the control flow to the original direction are just a waste of keystrokes. 
* org.openrewrite.staticanalysis.NoToStringOnStringType: Remove unnecessary `String#toString()` invocations on objects which are already a string. 
* org.openrewrite.staticanalysis.NoValueOfOnStringType: Replace unnecessary `String#valueOf(..)` method invocations with the argument directly. This occurs when the argument to `String#valueOf(arg)` is a string literal, such as `String.valueOf("example")`. Or, when the `String#valueOf(..)` invocation is used in a concatenation, such as `"example" + String.valueOf("example")`. 
* org.openrewrite.staticanalysis.ObjectFinalizeCallsSuper: Overrides of `Object#finalize()` should call super. 
* org.openrewrite.staticanalysis.OperatorWrap: Fixes line wrapping policies on operators. 
* org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf: The constructor of all primitive types has been deprecated in favor of using the static factory method `valueOf` available for each of the primitive type wrappers. 
* org.openrewrite.staticanalysis.RedundantFileCreation: Remove unnecessary intermediate creations of files. 
* org.openrewrite.staticanalysis.ReferentialEqualityToObjectEquals: Using `==` or `!=` compares object references, not the equality of two objects. This modifies code where both sides of a binary operation (`==` or `!=`) override `Object.equals(Object obj)` except when the comparison is within an overridden `Object.equals(Object obj)` method declaration itself. The resulting transformation must be carefully reviewed since any modifications change the program's semantics. 
* org.openrewrite.staticanalysis.RemoveCallsToObjectFinalize: Remove calls to `Object.finalize()`. This method is called during garbage collection and calling it manually is misleading. 
* org.openrewrite.staticanalysis.RemoveCallsToSystemGc: Removes calls to `System.gc()` and `Runtime.gc()`. When to invoke garbage collection is best left to the JVM. 
* org.openrewrite.staticanalysis.RemoveEmptyJavaDocParameters: Removes `@param`, `@return`, and `@throws` with no description from JavaDocs. 
* org.openrewrite.staticanalysis.RemoveExtraSemicolons: Optional semicolons at the end of try-with-resources are also removed. 
* org.openrewrite.staticanalysis.RemoveInstanceOfPatternMatch: Adds an explicit variable declaration at the beginning of `if` statement instead of `instanceof` pattern matching. 
* org.openrewrite.staticanalysis.RemoveJavaDocAuthorTag: Removes author tags from JavaDocs to reduce code maintenance. 
* org.openrewrite.staticanalysis.RemoveRedundantTypeCast: Removes unnecessary type casts. Does not currently check casts in lambdas, class constructors, and method invocations. 
* org.openrewrite.staticanalysis.RemoveSystemOutPrintln: Print statements are often left accidentally after debugging an issue. 
* org.openrewrite.staticanalysis.RemoveUnneededAssertion: Remove unneeded assertions like `assert true`, `assertTrue(true)`, or `assertFalse(false)`. 
* org.openrewrite.staticanalysis.RemoveUnneededBlock: Flatten blocks into inline statements when possible. 
* org.openrewrite.staticanalysis.RemoveUnusedLocalVariables: If a local variable is declared but not used, it is dead code and should be removed. 
* org.openrewrite.staticanalysis.RemoveUnusedPrivateFields: If a private field is declared but not used in the program, it can be considered dead code and should therefore be removed. 
* org.openrewrite.staticanalysis.RemoveUnusedPrivateMethods: `private` methods that are never executed are dead code and should be removed. 
* org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch: Renames caught exceptions in empty catch blocks to `ignored`. `ignored` will be incremented by 1 if a namespace conflict exists. 
* org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase: Reformat local variable and method parameter names to camelCase to comply with Java naming convention. The recipe will not rename variables declared in for loop controls or catches with a single character. The first character is set to lower case and existing capital letters are preserved. Special characters that are allowed in java field names `$` and `_` are removed. If a special character is removed the next valid alphanumeric will be capitalized. Currently, does not support renaming members of classes. The recipe will not rename a variable if the result already exists in the class, conflicts with a java reserved keyword, or the result is blank. 
* org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrTostring: Methods should not be named `hashcode`, `equal`, or `tostring`. Any of these are confusing as they appear to be intended as overridden methods from the `Object` base class, despite being case-insensitive. 
* org.openrewrite.staticanalysis.RenamePrivateFieldsToCamelCase: Reformat private field names to camelCase to comply with Java naming convention. The recipe will not rename fields with default, protected or public access modifiers.The recipe will not rename private constants.The first character is set to lower case and existing capital letters are preserved. Special characters that are allowed in java field names `$` and `_` are removed. If a special character is removed the next valid alphanumeric will be capitalized. The recipe will not rename a field if the result already exists in the class, conflicts with a java reserved keyword, or the result is blank. 
* org.openrewrite.staticanalysis.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull: Replace `org.apache.commons.lang3.Validate.notNull(..)` with `Objects.requireNonNull(..)`. 
* org.openrewrite.staticanalysis.ReplaceDeprecatedRuntimeExecMethods: Replace `Runtime.exec(String)` methods to use `exec(String[])` instead because the former is deprecated after Java 18 and is no longer recommended for use by the Java documentation. 
* org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals: Replaces `String` literals with a length of 5 or greater repeated a minimum of 3 times. Qualified `String` literals include final Strings, method invocations, and new class invocations. Adds a new `private static final String` or uses an existing equivalent class field. A new variable name will be generated based on the literal value if an existing field does not exist. The generated name will append a numeric value to the variable name if a name already exists in the compilation unit. 
* org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference: Replaces the single statement lambdas `o -> o instanceOf X`, `o -> (A) o`, `o -> System.out.println(o)`, `o -> o != null`, `o -> o == null` with the equivalent method reference. 
* org.openrewrite.staticanalysis.ReplaceOptionalIsPresentWithIfPresent: Replace `Optional#isPresent()` with `Optional#ifPresent()`. Please note that this recipe is only suitable for if-blocks that lack an Else-block and have a single condition applied. 
* org.openrewrite.staticanalysis.ReplaceRedundantFormatWithPrintf: Replaces `PrintStream.print(String.format(format, ...args))` with `PrintStream.printf(format, ...args)` (and for `println`, appends a newline to the format string). 
* org.openrewrite.staticanalysis.ReplaceStackWithDeque: From the Javadoc of `Stack`:
  > A more complete and consistent set of LIFO stack operations is provided by the Deque interface and its implementations, which should be used in preference to this class. 
* org.openrewrite.staticanalysis.ReplaceStreamToListWithCollect: Replace Java 16 `Stream.toList()` with Java 11 `Stream.collect(Collectors.toList())`. 
* org.openrewrite.staticanalysis.ReplaceStringBuilderWithString: Replace `StringBuilder.append()` with String if you are only concatenating a small number of strings and the code is simple and easy to read, as the compiler can optimize simple string concatenation expressions into a single String object, which can be more efficient than using StringBuilder. 
* org.openrewrite.staticanalysis.ReplaceTextBlockWithString: Replace text block with a regular multi-line string. 
* org.openrewrite.staticanalysis.ReplaceThreadRunWithThreadStart: `Thread.run()` should not be called directly. 
* org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingSingleArgWithObjectsRequireNonNull: Replace `org.apache.commons.lang3.Validate.notNull(Object)` with `Objects.requireNonNull(Object)`. 
* org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingVarargsWithObjectsRequireNonNull: Replace `org.apache.commons.lang3.Validate.notNull(Object, String, Object[])` with `Objects.requireNonNull(Object, String)`. 
* org.openrewrite.staticanalysis.SimplifyCompoundStatement: Fixes or removes useless compound statements. For example, removing `b &= true`, and replacing `b &= false` with `b = false`. 
* org.openrewrite.staticanalysis.SimplifyConsecutiveAssignments: Combine consecutive assignments into a single statement where possible. 
* org.openrewrite.staticanalysis.SimplifyConstantIfBranchExecution: Checks for if expressions that are always `true` or `false` and simplifies them. 
* org.openrewrite.staticanalysis.SimplifyDurationCreationUnits: Simplifies `java.time.Duration` units to be more human-readable. 
* org.openrewrite.staticanalysis.StaticMethodNotFinal: Static methods do not need to be declared final because they cannot be overridden. 
* org.openrewrite.staticanalysis.StringLiteralEquality: `String.equals()` should be used when checking value equality on String literals. Using `==` or `!=` compares object references, not the actual value of the Strings. This only modifies code where at least one side of the binary operation (`==` or `!=`) is a String literal, such as `"someString" == someVariable;`. This is to prevent inadvertently changing code where referential equality is the user's intent. 
* org.openrewrite.staticanalysis.TypecastParenPad: Fixes whitespace padding between a typecast type identifier and the enclosing left and right parenthesis. For example, when configured to remove spacing, `( int ) 0L;` becomes `(int) 0L;`. 
* org.openrewrite.staticanalysis.UnnecessaryCatch: A refactoring operation may result in a checked exception that is no longer thrown from a `try` block. This recipe will find and remove unnecessary catch blocks. 
* org.openrewrite.staticanalysis.UnnecessaryCloseInTryWithResources: Remove unnecessary `AutoCloseable#close()` statements in try-with-resources. 
* org.openrewrite.staticanalysis.UnnecessaryExplicitTypeArguments: When explicit type arguments are inferrable by the compiler, they may be removed. 
* org.openrewrite.staticanalysis.UnnecessaryPrimitiveAnnotations: Remove `@Nullable` and `@CheckForNull` annotations from primitives since they can't be null. 
* org.openrewrite.staticanalysis.UnnecessaryThrows: Remove unnecessary `throws` declarations. This recipe will only remove unused, checked exception if:
  - The declaring class or the method declaration is `final`.
  - The method declaration is `static` or `private`.
  - If the method overriding a method declaration in a super class and the super does not throw the exception.
  - If the method is `public` or `protected` and the exception is not documented via a JavaDoc as a `@throws` tag. 
* org.openrewrite.staticanalysis.UnwrapRepeatableAnnotations: Java 8 introduced the concept of `@Repeatable` annotations, making the wrapper annotation unnecessary. 
* org.openrewrite.staticanalysis.UpperCaseLiteralSuffixes: Using upper case literal suffixes for declaring literals is less ambiguous, e.g., `1l` versus `1L`. 
* org.openrewrite.staticanalysis.UseAsBuilder: When an API has been designed as a builder, use it that way rather than as a series of setter calls. 
* org.openrewrite.staticanalysis.UseCollectionInterfaces: Use `Deque`, `List`, `Map`, `ConcurrentMap`, `Queue`, and `Set` instead of implemented collections. Replaces the return type of public method declarations and the variable type public variable declarations. 
* org.openrewrite.staticanalysis.UseDiamondOperator: The diamond operator (`<>`) should be used. Java 7 introduced the diamond operator (`<>`) to reduce the verbosity of generics code. For instance, instead of having to declare a List's type in both its declaration and its constructor, you can now simplify the constructor declaration with `<>`, and the compiler will infer the type. 
* org.openrewrite.staticanalysis.UseForEachRemoveInsteadOfSetRemoveAll: Using `java.util.Collection#forEach(Set::remove)` rather than `java.util.Set#removeAll(java.util.Collection)` may improve performance due to a possible O(n^2) complexity. 
* org.openrewrite.staticanalysis.UseJavaStyleArrayDeclarations: Change C-Style array declarations `int i[];` to `int[] i;`. 
* org.openrewrite.staticanalysis.UseLambdaForFunctionalInterface: Instead of anonymous class declarations, use a lambda where possible. Using lambdas to replace anonymous classes can lead to more expressive and maintainable code, improve code readability, reduce code duplication, and achieve better performance in some cases. 
* org.openrewrite.staticanalysis.UseListSort: The `java.util.Collections#sort(..)` implementation defers to the `java.util.List#sort(Comparator)`, replaced it with the `java.util.List#sort(Comparator)` implementation for better readability. 
* org.openrewrite.staticanalysis.UseMapContainsKey: `map.keySet().contains(a)` can be simplified to `map.containsKey(a)`. 
* org.openrewrite.staticanalysis.UseObjectNotifyAll: `Object.notifyAll()` and `Object.notify()` both wake up sleeping threads, but `Object.notify()` only rouses one while `Object.notifyAll()` rouses all of them. Since `Object.notify()` might not wake up the right thread, `Object.notifyAll()` should be used instead. See this for more information. 
* org.openrewrite.staticanalysis.UseStandardCharset: Replaces `Charset.forName(java.lang.String)` with the equivalent `StandardCharset` constant. 
* org.openrewrite.staticanalysis.UseStringReplace: When `String::replaceAll` is used, the first argument should be a real regular expression. If it’s not the case, `String::replace` does exactly the same thing as `String::replaceAll` without the performance drawback of the regex. 
* org.openrewrite.staticanalysis.UseSystemLineSeparator: Replace calls to `System.getProperty("line.separator")` with `System.lineSeparator()`. 
* org.openrewrite.staticanalysis.WhileInsteadOfFor: When only the condition expression is defined in a for loop, and the initialization and increment expressions are missing, a while loop should be used instead to increase readability. 
* org.openrewrite.staticanalysis.WriteOctalValuesAsDecimal: Developers may not recognize octal values as such, mistaking them instead for decimal values. 
* org.openrewrite.xml.RemoveXmlTag: Removes XML tags matching the provided expression. 
* org.openrewrite.yaml.CommentOutProperty: Comment out a YAML property and add a comment in front. 

## Removed recipes

* **org.openrewrite.github.ActionsSetupJavaAdoptOpenJDKToTemurin**: Adopt OpenJDK got moved to Eclipse Temurin and won't be updated anymore. It is highly recommended to migrate workflows from adopt to temurin to keep receiving software and security updates. See more details in the Good-bye AdoptOpenJDK post. 
* **org.openrewrite.gradle.ActivateStyle**: Sets the specified style as active. Once the style has been set, future recipes will use the specified style for any changes they make. This recipe does not reformat anything on its own. Prefers to set the `activeStyle()` method in the `rewrite` DSL in a build.gradle.If no `rewrite` DSL can be found to update, will instead place a "systemProp.rewrite.activeStyles" entry within the project's gradle.properties. Styles can be provided by rewrite itself, defined in a rewrite.yml, or provided by recipe modules. 
* **org.openrewrite.gradle.AddDelegatesToGradleApi**: The Gradle API has methods which accept `groovy.lang.Closure`. Typically, there is an overload which accepts an `org.gradle.api.Action`.This recipe takes the type declared as the receiver of the `Action` overload and adds an appropriate `@groovy.lang.DelegatesTo` annotation to the `Closure` overload. 
* **org.openrewrite.gradle.AddGradleWrapper**: Add a Gradle wrapper where one does not exist. 
* **org.openrewrite.gradle.ChangeDependencyVersion**: Change a version of a specified dependency. The new version must be an exact version number. 
* **org.openrewrite.gradle.ChangeJavaCompatibility**: Find and updates the Java compatibility for the Gradle project. 
* **org.openrewrite.gradle.RemoveGradleDependency**: Removes a single dependency from the dependencies section of the `build.gradle`. 
* **org.openrewrite.gradle.UpgradeLiteralDependencyVersion**: Deprecated form of `UpgradeDependencyVersion`. Use that instead. 
* **org.openrewrite.java.DoesNotUseRewriteSkip**: The annotation provides a mechanism to skip a whole source file from consideration 
* **org.openrewrite.java.RecipeExceptionDemonstration**: Show how recipe exceptions are rendered in various forms of OpenRewrite tooling. 
* **org.openrewrite.java.cleanup.AddSerialVersionUidToSerializable**: A `serialVersionUID` field is strongly recommended in all `Serializable` classes. If this is not defined on a `Serializable` class, the compiler will generate this value. If a change is later made to the class, the generated value will change and attempts to deserialize the class will fail. 
* **org.openrewrite.java.cleanup.AtomicPrimitiveEqualsUsesGet**: `AtomicBoolean#equals(Object)`, `AtomicInteger#equals(Object)` and `AtomicLong#equals(Object)` are only equal to their instance. This recipe converts `a.equals(b)` to `a.get() == b.get()`. 
* **org.openrewrite.java.cleanup.AvoidBoxedBooleanExpressions**: Under certain conditions the `java.lang.Boolean` type is used as an expression, and it may throw a `NullPointerException` if the value is null. 
* **org.openrewrite.java.cleanup.BigDecimalRoundingConstantsToEnums**: Convert `BigDecimal` rounding constants to the equivalent `RoundingMode` enum. 
* **org.openrewrite.java.cleanup.BooleanChecksNotInverted**: It is needlessly complex to invert the result of a boolean comparison. The opposite comparison should be made instead. Also double negation of boolean expressions should be avoided. This recipes takes care of that. 
* **org.openrewrite.java.cleanup.CaseInsensitiveComparisonsDoNotChangeCase**: Remove `String#toLowerCase()` or `String#toUpperCase()` from `String#equalsIgnoreCase(..)` comparisons. 
* **org.openrewrite.java.cleanup.CatchClauseOnlyRethrows**: A `catch` clause that only rethrows the caught exception is unnecessary. Letting the exception bubble up as normal achieves the same result with less code. 
* **org.openrewrite.java.cleanup.ChainStringBuilderAppendCalls**: String concatenation within calls to `StringBuilder.append()` causes unnecessary memory allocation. Except for concatenations of String literals, which are joined together at compile time. Replaces inefficient concatenations with chained calls to `StringBuilder.append()`. 
* **org.openrewrite.java.cleanup.Cleanup**: Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions. 
* **org.openrewrite.java.cleanup.CombineSemanticallyEqualCatchBlocks**: Combine catches in a try that contain semantically equivalent blocks. No change will be made when a caught exception exists if combing catches may change application behavior or type attribution is missing. 
* **org.openrewrite.java.cleanup.CommonDeclarationSiteTypeVariances**: When using a method parameter like `Function<IN, OUT>`, it should rather be `Function<? super IN, ? extends OUT>`. This recipe checks for method parameters of well-known types. 
* **org.openrewrite.java.cleanup.CommonStaticAnalysis**: Resolve common static analysis issues discovered through 3rd party tools. 
* **org.openrewrite.java.cleanup.CompareEnumsWithEqualityOperator**: Replaces `Enum equals(java.lang.Object)` with `Enum == java.lang.Object`. An `!Enum equals(java.lang.Object)` will change to `!=`. 
* **org.openrewrite.java.cleanup.ControlFlowIndentation**: Program flow control statements like `if`, `while`, and `for` can omit curly braces when they apply to only a single statement. This recipe ensures that any statements which follow that statement are correctly indented to show they are not part of the flow control statement. 
* **org.openrewrite.java.cleanup.CovariantEquals**: Checks that classes and records which define a covariant `equals()` method also override method `equals(Object)`. Covariant `equals()` means a method that is similar to `equals(Object)`, but with a covariant parameter type (any subtype of `Object`). 
* **org.openrewrite.java.cleanup.DeclarationSiteTypeVariance**: Currently, Java requires use-site type variance, so if someone has `Function<IN, OUT>` method parameter, it should rather be `Function<? super IN, ? extends OUT>`. Unfortunately, it is not easy to notice that `? super` and `? extends` is missing, so this recipe adds it where that would improve the situation. 
* **org.openrewrite.java.cleanup.DefaultComesLast**: Ensure the `default` case comes last after all the cases in a switch statement. 
* **org.openrewrite.java.cleanup.EmptyBlock**: Remove empty blocks that effectively do nothing. 
* **org.openrewrite.java.cleanup.EqualsAvoidsNull**: Checks that any combination of String literals is on the left side of an `equals()` comparison. Also checks for String literals assigned to some field (such as `someString.equals(anotherString = "text"))`. 
* **org.openrewrite.java.cleanup.ExplicitCharsetOnStringGetBytes**: This makes the behavior of the code platform neutral. It will not override any existing explicit encodings, even if they don't match the default encoding option. 
* **org.openrewrite.java.cleanup.ExplicitInitialization**: Checks if any class or object member is explicitly initialized to default for its type value (`null` for object references, zero for numeric types and `char` and `false` for `boolean`. 
* **org.openrewrite.java.cleanup.ExplicitLambdaArgumentTypes**: Adds explicit types on lambda arguments, which are otherwise optional. This can make the code clearer and easier to read. This does not add explicit types on arguments when the lambda has one or two parameters and does not have a block body, as things are considered more readable in those cases. For example, `stream.map((a, b) -> a.length);` will not have explicit types added. 
* **org.openrewrite.java.cleanup.ExternalizableHasNoArgsConstructor**: `Externalizable` classes handle both serialization and deserialization and must have a no-args constructor for the deserialization process. 
* **org.openrewrite.java.cleanup.FallThrough**: Checks for fall-through in switch statements, adding `break` statements in locations where a case contains Java code but does not have a `break`, `return`, `throw`, or `continue` statement. 
* **org.openrewrite.java.cleanup.FinalClass**: Adds the `final` modifier to classes that expose no public or package-private constructors. 
* **org.openrewrite.java.cleanup.FinalizeLocalVariables**: Adds the `final` modifier keyword to local variables which are not reassigned. 
* **org.openrewrite.java.cleanup.FinalizeMethodArguments**: Adds the `final` modifier keyword to method parameters. 
* **org.openrewrite.java.cleanup.FinalizePrivateFields**: Adds the `final` modifier keyword to private instance variables which are not reassigned. 
* **org.openrewrite.java.cleanup.FixSerializableFields**: The fields of a class that implements `Serializable` must also implement `Serializable` or be marked as `transient`.
* **org.openrewrite.java.cleanup.FixStringFormatExpressions**: Fix `String#format` and `String#formatted` expressions by replacing `\n` newline characters with `%n` and removing any unused arguments. Note this recipe is scoped to only transform format expressions which do not specify the argument index. 
* **org.openrewrite.java.cleanup.ForLoopControlVariablePostfixOperators**: Replace `for` loop control variables using pre-increment (`++i`) or pre-decrement (`--i`) operators with their post-increment (`i++`) or post-decrement (`i++`) notation equivalents. 
* **org.openrewrite.java.cleanup.ForLoopIncrementInUpdate**: The increment should be moved to the loop's increment clause if possible. 
* **org.openrewrite.java.cleanup.HiddenField**: Refactor local variables or parameters which shadow a field defined in the same class. 
* **org.openrewrite.java.cleanup.HideUtilityClassConstructor**: Ensures utility classes (classes containing only static methods or fields in their API) do not have a public constructor. 
* **org.openrewrite.java.cleanup.IndexOfChecksShouldUseAStartPosition**: Replaces `indexOf(String)` in binary operations if the compared value is an int and not less than 1. 
* **org.openrewrite.java.cleanup.IndexOfReplaceableByContains**: Checking if a value is included in a `String` or `List` using `indexOf(value)>-1` or `indexOf(value)>=0` can be replaced with `contains(value)`. 
* **org.openrewrite.java.cleanup.IndexOfShouldNotCompareGreaterThanZero**: Replaces `String#indexOf(String) > 0` and `List#indexOf(Object) > 0` with `>=1`. Checking `indexOf` against `>0` ignores the first element, whereas `>-1` is inclusive of the first element. For clarity, `>=1` is used, because `>0` and `>=1` are semantically equal. Using `>0` may appear to be a mistake with the intent of including all elements. If the intent is to check whether a value in included in a `String` or `List`, the `String#contains(String)` or `List#contains(Object)` methods may be better options altogether. 
* **org.openrewrite.java.cleanup.InlineVariable**: Inline variables when they are immediately used to return or throw. 
* **org.openrewrite.java.cleanup.InstanceOfPatternMatch**: Adds pattern variables to `instanceof` expressions wherever the same (side effect free) expression is referenced in a corresponding type cast expression within the flow scope of the `instanceof`. Currently, this recipe supports `if` statements and ternary operator expressions. 
* **org.openrewrite.java.cleanup.IsEmptyCallOnCollections**: Also check for _not_ `isEmpty()` when testing for not equal to zero size. 
* **org.openrewrite.java.cleanup.JavaApiBestPractices**: Use the Java standard library in a way that is most idiomatic. 
* **org.openrewrite.java.cleanup.LambdaBlockToExpression**: Single-line statement lambdas returning a value can be replaced with expression lambdas. 
* **org.openrewrite.java.cleanup.LowercasePackage**: By convention all Java package names should contain only lowercase letters, numbers, and dashes. This recipe converts any uppercase letters in package names to be lowercase. 
* **org.openrewrite.java.cleanup.MethodNameCasing**: Method names should comply with a naming convention. 
* **org.openrewrite.java.cleanup.MethodParamPad**: Fixes whitespace padding between the identifier of a method definition or method invocation and the left parenthesis of the parameter list. For example, when configured to remove spacing, `someMethodInvocation (x);` becomes `someMethodInvocation(x)`. 
* **org.openrewrite.java.cleanup.MinimumSwitchCases**: `switch` statements are useful when many code paths branch depending on the value of a single expression. For just one or two code paths, the code will be more readable with `if` statements. 
* **org.openrewrite.java.cleanup.MissingOverrideAnnotation**: Adds `@Override` to methods overriding superclass methods or implementing interface methods. Annotating methods improves readability by showing the author's intent to override. Additionally, when annotated, the compiler will emit an error when a signature of the overridden method does not match the superclass method. 
* **org.openrewrite.java.cleanup.ModifierOrder**: Modifiers should be declared in the correct order as recommended by the JLS. 
* **org.openrewrite.java.cleanup.MultipleVariableDeclarations**: Places each variable declaration in its own statement and on its own line. Using one variable declaration per line encourages commenting and can increase readability. 
* **org.openrewrite.java.cleanup.NeedBraces**: Adds missing braces around code such as single-line `if`, `for`, `while`, and `do-while` block bodies. 
* **org.openrewrite.java.cleanup.NestedEnumsAreNotStatic**: Remove static modifier from nested enum types since they are implicitly static. 
* **org.openrewrite.java.cleanup.NewStringBuilderBufferWithCharArgument**: Instantiating a `StringBuilder` or a `StringBuffer` with a `Character` results in the `int` representation of the character being used for the initial size. 
* **org.openrewrite.java.cleanup.NoDoubleBraceInitialization**: Replace `List`, `Map`, and `Set` double brace initialization with an initialization block. 
* **org.openrewrite.java.cleanup.NoEmptyCollectionWithRawType**: Replaces `Collections#EMPTY_..` with methods that return generic types. 
* **org.openrewrite.java.cleanup.NoEqualityInForCondition**: Testing for loop termination using an equality operator (`==` and `!=`) is dangerous, because it could set up an infinite loop. Using a relational operator instead makes it harder to accidentally write an infinite loop. 
* **org.openrewrite.java.cleanup.NoFinalizedLocalVariables**: Remove the `final` modifier keyword from local variables regardless of whether or not they are used within a local class or an anonymous class. 
* **org.openrewrite.java.cleanup.NoFinalizer**: Finalizers are deprecated. Use of `finalize()` can lead to performance issues, deadlocks, hangs, and other undesirable behavior. 
* **org.openrewrite.java.cleanup.NoPrimitiveWrappersForToStringOrCompareTo**: Primitive wrappers should not be instantiated only for `#toString()` or `#compareTo(..)` invocations. 
* **org.openrewrite.java.cleanup.NoRedundantJumpStatements**: Jump statements such as return and continue let you change the default flow of program execution, but jump statements that direct the control flow to the original direction are just a waste of keystrokes. 
* **org.openrewrite.java.cleanup.NoToStringOnStringType**: Remove unnecessary `String#toString()` invocations on objects which are already a string. 
* **org.openrewrite.java.cleanup.NoValueOfOnStringType**: Replace unnecessary `String#valueOf(..)` method invocations with the argument directly. This occurs when the argument to `String#valueOf(arg)` is a string literal, such as `String.valueOf("example")`. Or, when the `String#valueOf(..)` invocation is used in a concatenation, such as `"example" + String.valueOf("example")`. 
* **org.openrewrite.java.cleanup.NoWhitespaceAfter**: Removes unnecessary whitespace appearing after a token. A linebreak after a token is allowed unless `allowLineBreaks` is set to `false`, in which case it will be removed. 
* **org.openrewrite.java.cleanup.NoWhitespaceBefore**: Removes unnecessary whitespace preceding a token. A linebreak before a token will be removed unless `allowLineBreaks` is set to `true`. 
* **org.openrewrite.java.cleanup.ObjectFinalizeCallsSuper**: Overrides of `Object#finalize()` should call super. 
* **org.openrewrite.java.cleanup.OperatorWrap**: Fixes line wrapping policies on operators. 
* **org.openrewrite.java.cleanup.PadEmptyForLoopComponents**: Fixes padding on empty `for` loop iterators and initializers to match Checkstyle policies. 
* **org.openrewrite.java.cleanup.PrimitiveWrapperClassConstructorToValueOf**: The constructor of all primitive types has been deprecated in favor of using the static factory method `valueOf` available for each of the primitive type wrappers. 
* **org.openrewrite.java.cleanup.RedundantFileCreation**: Remove unnecessary intermediate creations of files. 
* **org.openrewrite.java.cleanup.ReferentialEqualityToObjectEquals**: Using `==` or `!=` compares object references, not the equality of two objects. This modifies code where both sides of a binary operation (`==` or `!=`) override `Object.equals(Object obj)` except when the comparison is within an overridden `Object.equals(Object obj)` method declaration itself. The resulting transformation must be carefully reviewed since any modifications change the program's semantics. 
* **org.openrewrite.java.cleanup.RemoveCallsToObjectFinalize**: Removes calls to `Object.finalize()`. This method is called during garbage collection and calling it manually is misleading. 
* **org.openrewrite.java.cleanup.RemoveCallsToSystemGc**: Removes calls to `System.gc()` and `Runtime.gc()`. When to invoke garbage collection is best left to the JVM. 
* **org.openrewrite.java.cleanup.RemoveEmptyJavaDocParameters**: Removes `@params`, `@return`, and `@throws` with no description from JavaDocs. 
* **org.openrewrite.java.cleanup.RemoveExtraSemicolons**: Optional semicolons at the end of try-with-resources are also removed. 
* **org.openrewrite.java.cleanup.RemoveInstanceOfPatternMatch**: Adds an explicit variable declaration at the beginning of `if` statement instead of `instanceof` pattern matching. 
* **org.openrewrite.java.cleanup.RemoveJavaDocAuthorTag**: Removes author tags from JavaDocs to reduce code maintenance. 
* **org.openrewrite.java.cleanup.RemoveRedundantTypeCast**: Removes unnecessary type casts. Does not currently check casts in lambdas, class constructors, and method invocations. 
* **org.openrewrite.java.cleanup.RemoveSystemOutPrintln**: Print statements are often left accidentally after debugging an issue. 
* **org.openrewrite.java.cleanup.RemoveUnneededAssertion**: Remove unneeded assertions like `assert true`, `assertTrue(true)`, or `assertFalse(false)`. 
* **org.openrewrite.java.cleanup.RemoveUnneededBlock**: Flatten blocks into inline statements when possible. 
* **org.openrewrite.java.cleanup.RemoveUnusedLocalVariables**: If a local variable is declared but not used, it is dead code and should be removed. 
* **org.openrewrite.java.cleanup.RemoveUnusedPrivateFields**: If a private field is declared but not used in the program, it can be considered dead code and should therefore be removed. 
* **org.openrewrite.java.cleanup.RemoveUnusedPrivateMethods**: `private` methods that are never executed are dead code and should be removed. 
* **org.openrewrite.java.cleanup.RenameExceptionInEmptyCatch**: Renames caught exceptions in empty catch blocks to `ignored`. `ignored` will be incremented by 1 if a namespace conflict exists. 
* **org.openrewrite.java.cleanup.RenameLocalVariablesToCamelCase**: Reformat local variable and method parameter names to camelCase to comply with Java naming convention. The recipe will not rename variables declared in for loop controls or catches with a single character. The first character is set to lower case and existing capital letters are preserved. Special characters that are allowed in java field names `$` and `_` are removed. If a special character is removed the next valid alpha-numeric will be capitalized. Currently, does not support renaming members of classes. The recipe will not rename a variable if the result already exists in the class, conflicts with a java reserved keyword, or the result is blank. 
* **org.openrewrite.java.cleanup.RenameMethodsNamedHashcodeEqualOrTostring**: Methods should not be named `hashcode`, `equal`, or `tostring`. Any of these are confusing as they appear to be intended as overridden methods from the `Object` base class, despite being case-insensitive. 
* **org.openrewrite.java.cleanup.RenamePrivateFieldsToCamelCase**: Reformat private field names to camelCase to comply with Java naming convention. The recipe will not rename fields with default, protected or public access modifiers.The recipe will not rename private constants.The first character is set to lower case and existing capital letters are preserved. Special characters that are allowed in java field names `$` and `_` are removed. If a special character is removed the next valid alphanumeric will be capitalized. The recipe will not rename a field if the result already exists in the class, conflicts with a java reserved keyword, or the result is blank. 
* **org.openrewrite.java.cleanup.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull**: Replace `org.apache.commons.lang3.Validate.notNull(..)` with `Objects.requireNonNull(..)`. 
* **org.openrewrite.java.cleanup.ReplaceDeprecatedRuntimeExecMethods**: Replace `Runtime.exec(String)` methods to use `exec(String[])` instead because the former is deprecated after Java 18 and is no longer recommended for use by the Java documentation. 
* **org.openrewrite.java.cleanup.ReplaceDuplicateStringLiterals**: Replaces `String` literals with a length of 5 or greater repeated a minimum of 3 times. Qualified `String` literals include final Strings, method invocations, and new class invocations. Adds a new `private static final String` or uses an existing equivalent class field. A new variable name will be generated based on the literal value if an existing field does not exist. The generated name will append a numeric value to the variable name if a name already exists in the compilation unit. 
* **org.openrewrite.java.cleanup.ReplaceLambdaWithMethodReference**: Replaces the single statement lambdas `o -> o instanceOf X`, `o -> (A) o`, `o -> System.out.println(o)`, `o -> o != null`, `o -> o == null` with the equivalent method reference. 
* **org.openrewrite.java.cleanup.ReplaceRedundantFormatWithPrintf**: Replaces `PrintStream.print(String.format(format, ...args))` with `PrintStream.printf(format, ...args)` (and for `println`, appends a newline to the format string). 
* **org.openrewrite.java.cleanup.ReplaceStackWithDeque**: From the Javadoc of `Stack` ...
* **org.openrewrite.java.cleanup.ReplaceStreamToListWithCollect**: Replace Java 16 `Stream.toList()` with Java 11 `Stream.collect(Collectors.toList())`. 
* **org.openrewrite.java.cleanup.ReplaceStringBuilderWithString**: Replace `StringBuilder.append()` with String if you are only concatenating a small number of strings and the code is simple and easy to read, as the compiler can optimize simple string concatenation expressions into a single String object, which can be more efficient than using StringBuilder. 
* **org.openrewrite.java.cleanup.ReplaceTextBlockWithString**: Replace text block with a regular multi-line string. 
* **org.openrewrite.java.cleanup.ReplaceThreadRunWithThreadStart**: `Thread.run()` should not be called directly. 
* **org.openrewrite.java.cleanup.ReplaceValidateNotNullHavingSingleArgWithObjectsRequireNonNull**: Replace `org.apache.commons.lang3.Validate.notNull(Object)` with `Objects.requireNonNull(Object)`. 
* **org.openrewrite.java.cleanup.ReplaceValidateNotNullHavingVarargsWithObjectsRequireNonNull**: Replace `org.apache.commons.lang3.Validate.notNull(Object, String, Object[])` with `Objects.requireNonNull(Object, String)`. 
* **org.openrewrite.java.cleanup.ShortenFullyQualifiedTypeReferences**: Any fully qualified references to Java types will be replaced with corresponding simple names and import statements, provided that it doesn't result in any conflicts with other imports or types declared in the local compilation unit. 
* **org.openrewrite.java.cleanup.SimplifyCompoundStatement**: Fixes or removes useless compound statements. For example, removing `b &= true`, and replacing `b &= false` with `b = false`. 
* **org.openrewrite.java.cleanup.SimplifyConsecutiveAssignments**: Combine consecutive assignments into a single statement where possible. 
* **org.openrewrite.java.cleanup.SimplifyConstantIfBranchExecution**: Checks for if expressions that are always `true` or `false` and simplifies them. 
* **org.openrewrite.java.cleanup.SimplifyDurationCreationUnits**: Simplifies `java.time.Duration` units to be more human-readable. 
* **org.openrewrite.java.cleanup.StaticMethodNotFinal**: Static methods do not need to be declared final because they cannot be overridden. 
* **org.openrewrite.java.cleanup.StringLiteralEquality**: `String.equals()` should be used when checking value equality on String literals. Using `==` or `!=` compares object references, not the actual value of the Strings. This only modifies code where at least one side of the binary operation (`==` or `!=`) is a String literal, such as `"someString" == someVariable;`. This is to prevent inadvertently changing code where referential equality is the user's intent. 
* **org.openrewrite.java.cleanup.TypecastParenPad**: Fixes whitespace padding between a typecast type identifier and the enclosing left and right parenthesis. For example, when configured to remove spacing, `( int ) 0L;` becomes `(int) 0L;`. 
* **org.openrewrite.java.cleanup.UnnecessaryCatch**: A refactoring operation may result in a checked exception that is no longer thrown from a `try` block. This recipe will find and remove unnecessary catch blocks. 
* **org.openrewrite.java.cleanup.UnnecessaryCloseInTryWithResources**: Remove unnecessary `AutoCloseable#close()` statements in try-with-resources. 
* **org.openrewrite.java.cleanup.UnnecessaryExplicitTypeArguments**: When explicit type arguments are inferrable by the compiler, they may be removed. 
* **org.openrewrite.java.cleanup.UnnecessaryPrimitiveAnnotations**: Remove `@Nullable` and `@CheckForNull` annotations from primitives since they can't be null. 
* **org.openrewrite.java.cleanup.UnnecessaryThrows**: Remove unnecessary `throws` declarations. This recipe will only remove unused, checked exception if ...
* **org.openrewrite.java.cleanup.UnwrapRepeatableAnnotations**: Java 8 introduced the concept of `@Repeatable` annotations, making the wrapper annotation unnecessary. 
* **org.openrewrite.java.cleanup.UpperCaseLiteralSuffixes**: Using upper case literal suffixes for declaring literals is less ambiguous, e.g., `1l` versus `1L`. 
* **org.openrewrite.java.cleanup.UseAsBuilder**: When an API has been designed as a builder, use it that way rather than as a series of setter calls. 
* **org.openrewrite.java.cleanup.UseCollectionInterfaces**: Use `Deque`, `List`, `Map`, `ConcurrentMap`, `Queue`, and `Set` instead of implemented collections. Replaces the return type of public method declarations and the variable type public variable declarations. 
* **org.openrewrite.java.cleanup.UseDiamondOperator**: The diamond operator (`<>`) should be used. Java 7 introduced the diamond operator (`<>`) to reduce the verbosity of generics code. For instance, instead of having to declare a List's type in both its declaration and its constructor, you can now simplify the constructor declaration with `<>`, and the compiler will infer the type. 
* **org.openrewrite.java.cleanup.UseForEachRemoveInsteadOfSetRemoveAll**: Using `java.util.Collection#forEach(Set::remove)` rather than `java.util.Set#removeAll(java.util.Collection)` may improve performance due to a possible O(n^2) complexity. 
* **org.openrewrite.java.cleanup.UseJavaStyleArrayDeclarations**: Change C-Style array declarations `int i[];` to `int[] i;`. 
* **org.openrewrite.java.cleanup.UseLambdaForFunctionalInterface**: Instead of anonymous class declarations, use a lambda where possible. Using lambdas to replace anonymous classes can lead to more expressive and maintainable code, improve code readability, reduce code duplication, and achieve better performance in some cases. 
* **org.openrewrite.java.cleanup.UseListSort**: The `java.util.Collections#sort(..)` implementation defers to the `java.util.List#sort(Comparator)`, replaced it with the `java.util.List#sort(Comparator)` implementation for better readability. 
* **org.openrewrite.java.cleanup.UseMapContainsKey**: `map.keySet().contains(a)` can be simplified to `map.containsKey(a)`. 
* **org.openrewrite.java.cleanup.UseObjectNotifyAll**: `Object.notifyAll()` and `Object.notify()` both wake up sleeping threads, but `Object.notify()` only rouses one while `Object.notifyAll()` rouses all of them. Since `Object.notify()` might not wake up the right thread, `Object.notifyAll()` should be used instead. See this for more information. 
* **org.openrewrite.java.cleanup.UseStandardCharset**: Replaces `Charset.forName(java.lang.String)` with the equivalent `StandardCharset` constant. 
* **org.openrewrite.java.cleanup.UseStringReplace**: When `String::replaceAll` is used, the first argument should be a real regular expression. If it’s not the case, `String::replace` does exactly the same thing as `String::replaceAll` without the performance drawback of the regex. 
* **org.openrewrite.java.cleanup.UseSystemLineSeparator**: Replaces calls to `System.getProperty("line.separator")` with `System.lineSeparator()`. 
* **org.openrewrite.java.cleanup.WhileInsteadOfFor**: When only the condition expression is defined in a for loop, and the initialization and increment expressions are missing, a while loop should be used instead to increase readability. 
* **org.openrewrite.java.cleanup.WriteOctalValuesAsDecimal**: Developers may not recognize octal values as such, mistaking them instead for decimal values. 
* **org.openrewrite.java.controlflow.ControlFlowVisualization**: Visualize the control flow of a Java program. 
* **org.openrewrite.java.logging.slf4j.ConvertLogMessageMessageOnlyToLogMessageAndThrowable**: Convert `Logger#error|warn(throwable#message)` to `Logger#error|warn(<log-message>, e)` invocations having only the error's message as the parameter, to a log statement with message and throwable. 
* **org.openrewrite.java.migrate.javax.MigrateCounterMonitorSetThreshholdToSetInitThreshold**: Use `javax.management.monitor.CounterMonitor#setInitThreshold` instead of the deprecated `javax.management.monitor.CounterMonitor#setThreshhold` in JMX 1.2 or higher. 
* **org.openrewrite.java.recipes.PublicGetVisitor**: It would be a breaking API change to increase the visibility of the method by default, but any recipe can increase visibility of the `Recipe` class. Making them public makes recipes easier to use in other recipes in unexpected ways. 
* **org.openrewrite.java.search.FindFlowBetweenMethods**: Takes two patterns for the start/end methods to find flow between. 
* **org.openrewrite.java.search.PotentiallyDeadCode**: Method definitions that are defined in this project and aren't used. 
* **org.openrewrite.java.search.UriCreatedWithHttpScheme**: This is a sample recipe demonstrating a simple application of local data flow analysis. 
* **org.openrewrite.java.spring.boot2.MigrateAbstractHealthIndicatorToPingHealthIndicator**: `org.springframework.boot.actuate.health.AbstractHealthIndicator` was deprecated in 2.2. 
* **org.openrewrite.java.spring.boot2.MigrateHibernateContraintsToJavax**: Use `javax.validation.constraints` instead of the deprecated `org.hibernate.validator.constraints` in Spring Boot 2.0 or higher. 
* **org.openrewrite.java.spring.boot2.WebSecurityConfigurerAdapter**: The Spring Security `WebSecurityConfigurerAdapter` was deprecated 5.7, this recipe will transform `WebSecurityConfigurerAdapter` classes by using a component based approach. Check out the spring-security-without-the-websecurityconfigureradapter blog for more details. 
* **org.openrewrite.java.spring.boot3.SpringBootProperties_3_0_0**: Migrate properties found in `application.properties` and `application.yml`. 
* **org.openrewrite.kotlin.ChangeTypeAlias**: Change a given type alias to another. 
* **org.openrewrite.maven.utilities.ListDependencies**: List all the dependencies in a scope and add to a text file.

## Changes recipes

* org.openrewrite.FindParseFailures was changed:
  * Old Options:
    * `None`
  * New Options:
    * `maxSnippetLength: { type: Integer, required: false }`
* org.openrewrite.text.AppendToTextFile was changed:
  * Old Options:
    * `appendNewline: { type: Boolean, required: false }`
    * `content: { type: String, required: true }`
    * `existingFileStrategy: { type: String, required: false }`
    * `preamble: { type: String, required: false }`
    * `relativeFileName: { type: String, required: true }`
  * New Options:
    * `appendNewline: { type: Boolean, required: false }`
    * `content: { type: String, required: true }`
    * `existingFileStrategy: { type: Strategy, required: false }`
    * `preamble: { type: String, required: false }`
    * `relativeFileName: { type: String, required: true }`
* org.openrewrite.text.FindAndReplace was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `find: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: true }`
  * New Options:
    * `find: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: true }`
* org.openrewrite.gradle.AddDependency was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `classifier: { type: String, required: false }`
    * `configuration: { type: String, required: false }`
    * `extension: { type: String, required: false }`
    * `familyPattern: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: true }`
    * `version: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `acceptTransitive: { type: Boolean, required: false }`
    * `artifactId: { type: String, required: true }`
    * `classifier: { type: String, required: false }`
    * `configuration: { type: String, required: false }`
    * `extension: { type: String, required: false }`
    * `familyPattern: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* org.openrewrite.gradle.UpdateGradleWrapper was changed:
  * Old Options:
    * `distribution: { type: String, required: false }`
    * `version: { type: String, required: true }`
  * New Options:
    * `distribution: { type: String, required: false }`
    * `repositoryUrl: { type: String, required: true }`
    * `version: { type: String, required: true }`
* org.openrewrite.java.search.FindMethods was changed:
  * Old Options:
    * `flow: { type: String, required: false }`
    * `matchOverrides: { type: Boolean, required: false }`
    * `methodPattern: { type: String, required: true }`
  * New Options:
    * `matchOverrides: { type: Boolean, required: false }`
    * `methodPattern: { type: String, required: true }`
* org.openrewrite.json.ChangeKey was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `newKey: { type: String, required: true }`
    * `oldKeyPath: { type: String, required: true }`
  * New Options:
    * `newKey: { type: String, required: true }`
    * `oldKeyPath: { type: String, required: true }`
* org.openrewrite.json.ChangeValue was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `oldKeyPath: { type: String, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `oldKeyPath: { type: String, required: true }`
    * `value: { type: String, required: true }`
* org.openrewrite.json.DeleteKey was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `keyPath: { type: String, required: true }`
  * New Options:
    * `keyPath: { type: String, required: true }`
* org.openrewrite.maven.AddGradleEnterpriseMavenExtension was changed:
  * Old Options:
    * `allowUntrustedServer: { type: Boolean, required: false }`
    * `server: { type: String, required: true }`
    * `version: { type: String, required: true }`
  * New Options:
    * `allowUntrustedServer: { type: Boolean, required: false }`
    * `captureGoalInputFiles: { type: Boolean, required: false }`
    * `publishCriteria: { type: PublishCriteria, required: false }`
    * `server: { type: String, required: true }`
    * `uploadInBackground: { type: Boolean, required: false }`
    * `version: { type: String, required: true }`
* org.openrewrite.properties.AddProperty was changed:
  * Old Options:
    * `delimiter: { type: String, required: false }`
    * `fileMatcher: { type: String, required: false }`
    * `property: { type: String, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `delimiter: { type: String, required: false }`
    * `property: { type: String, required: true }`
    * `value: { type: String, required: true }`
* org.openrewrite.properties.ChangePropertyKey was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `newPropertyKey: { type: String, required: true }`
    * `oldPropertyKey: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `relaxedBinding: { type: Boolean, required: false }`
  * New Options:
    * `newPropertyKey: { type: String, required: true }`
    * `oldPropertyKey: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `relaxedBinding: { type: Boolean, required: false }`
* org.openrewrite.properties.ChangePropertyValue was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `relaxedBinding: { type: Boolean, required: false }`
  * New Options:
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `relaxedBinding: { type: Boolean, required: false }`
* org.openrewrite.properties.DeleteProperty was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
  * New Options:
    * `propertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
* org.openrewrite.xml.ChangeTagAttribute was changed:
  * Old Options:
    * `attributeName: { type: String, required: true }`
    * `elementName: { type: String, required: true }`
    * `fileMatcher: { type: String, required: false }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
  * New Options:
    * `attributeName: { type: String, required: true }`
    * `elementName: { type: String, required: true }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
* org.openrewrite.xml.ChangeTagName was changed:
  * Old Options:
    * `elementName: { type: String, required: true }`
    * `fileMatcher: { type: String, required: false }`
    * `newName: { type: String, required: true }`
  * New Options:
    * `elementName: { type: String, required: true }`
    * `newName: { type: String, required: true }`
* org.openrewrite.xml.ChangeTagValue was changed:
  * Old Options:
    * `elementName: { type: String, required: true }`
    * `fileMatcher: { type: String, required: false }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
  * New Options:
    * `elementName: { type: String, required: true }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
* org.openrewrite.yaml.AppendToSequence was changed:
  * Old Options:
    * `existingSequenceValues: { type: List, required: false }`
    * `fileMatcher: { type: String, required: false }`
    * `matchExistingSequenceValuesInAnyOrder: { type: String, required: false }`
    * `sequencePath: { type: String, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `existingSequenceValues: { type: List, required: false }`
    * `matchExistingSequenceValuesInAnyOrder: { type: Boolean, required: false }`
    * `sequencePath: { type: String, required: true }`
    * `value: { type: String, required: true }`
* org.openrewrite.yaml.ChangeKey was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `newKey: { type: String, required: true }`
    * `oldKeyPath: { type: String, required: true }`
  * New Options:
    * `newKey: { type: String, required: true }`
    * `oldKeyPath: { type: String, required: true }`
* org.openrewrite.yaml.ChangePropertyKey was changed:
  * Old Options:
    * `except: { type: List, required: false }`
    * `fileMatcher: { type: String, required: false }`
    * `newPropertyKey: { type: String, required: true }`
    * `oldPropertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
  * New Options:
    * `except: { type: List, required: false }`
    * `newPropertyKey: { type: String, required: true }`
    * `oldPropertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
* org.openrewrite.yaml.ChangeValue was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `oldKeyPath: { type: String, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `oldKeyPath: { type: String, required: true }`
    * `value: { type: String, required: true }`
* org.openrewrite.yaml.CopyValue was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `newKey: { type: String, required: true }`
    * `oldKeyPath: { type: String, required: true }`
  * New Options:
    * `newKey: { type: String, required: true }`
    * `oldKeyPath: { type: String, required: true }`
* org.openrewrite.yaml.DeleteKey was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `keyPath: { type: String, required: true }`
  * New Options:
    * `keyPath: { type: String, required: true }`
* org.openrewrite.yaml.DeleteProperty was changed:
  * Old Options:
    * `coalesce: { type: Boolean, required: false }`
    * `fileMatcher: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
  * New Options:
    * `coalesce: { type: Boolean, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
* org.openrewrite.yaml.MergeYaml was changed:
  * Old Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `fileMatcher: { type: String, required: false }`
    * `key: { type: String, required: true }`
    * `objectIdentifyingProperty: { type: String, required: false }`
    * `yaml: { type: String, required: true }`
  * New Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `key: { type: String, required: true }`
    * `objectIdentifyingProperty: { type: String, required: false }`
    * `yaml: { type: String, required: true }`