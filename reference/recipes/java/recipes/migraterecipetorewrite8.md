# Migrate Rewrite recipes from version 7 to 8

**org.openrewrite.java.recipes.MigrateRecipeToRewrite8**

_Rewrite Recipe Migration to version 8. While most parts can be automatically migrated, there are some complex and open-ended scenarios that require manual attention. In those cases, this recipe will add a comment to the code and request a human to review and handle it manually._

### Tags

* Rewrite8 migration

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/recipes/MigrateRecipeToRewrite8.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Examples
##### Example 1
`org.openrewrite.java.JavaVisitor.visitJavaSourceFile(JavaSourceFile cu, P p)` is removed, use `org.openrewrite.java.TreeVisitor.visit(@Nullable Tree tree, P p)` instead.


{% tabs %}
{% tab title="org/openrewrite/staticanalysis/RenamePrivateFieldsToCamelCase.java" %}

###### Before
{% code title="org/openrewrite/staticanalysis/RenamePrivateFieldsToCamelCase.java" %}
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
{% endcode %}

###### After
{% code title="org/openrewrite/staticanalysis/RenamePrivateFieldsToCamelCase.java" %}
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
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/openrewrite/staticanalysis/RenamePrivateFieldsToCamelCase.java
+++ org/openrewrite/staticanalysis/RenamePrivateFieldsToCamelCase.java
@@ -4,0 +4,1 @@

import org.openrewrite.*;
+import org.openrewrite.internal.lang.Nullable;
import org.openrewrite.java.JavaIsoVisitor;
@@ -28,0 +29,1 @@

    private static class RenameNonCompliantNames extends JavaIsoVisitor<ExecutionContext> {
+
        @Override
@@ -29,3 +31,5 @@
    private static class RenameNonCompliantNames extends JavaIsoVisitor<ExecutionContext> {
        @Override
-       public JavaSourceFile visitJavaSourceFile(JavaSourceFile cu, ExecutionContext ctx) {
-           Map<J.VariableDeclarations.NamedVariable, String> renameVariablesMap = new LinkedHashMap<>();
-           Set<String> hasNameSet = new HashSet<>();
+       public  @Nullable J visit(@Nullable Tree tree, ExecutionContext ctx) {
+           if (tree instanceof JavaSourceFile) {
+               JavaSourceFile cu = (JavaSourceFile) tree;
+               Map<J.VariableDeclarations.NamedVariable, String> renameVariablesMap = new LinkedHashMap<>();
+               Set<String> hasNameSet = new HashSet<>();

@@ -33,3 +37,3 @@
            Set<String> hasNameSet = new HashSet<>();

-           getCursor().putMessage("RENAME_VARIABLES_KEY", renameVariablesMap);
-           getCursor().putMessage("HAS_NAME_KEY", hasNameSet);
-           super.visitJavaSourceFile(cu, ctx);
+               getCursor().putMessage("RENAME_VARIABLES_KEY", renameVariablesMap);
+               getCursor().putMessage("HAS_NAME_KEY", hasNameSet);
+               super.visit(cu, ctx);

@@ -37,7 +41,8 @@
            super.visitJavaSourceFile(cu, ctx);

-           renameVariablesMap.forEach((key, value) -> {
-               if (!hasNameSet.contains(value) && !hasNameSet.contains(key.getSimpleName())) {
-                   doAfterVisit(new RenameVariable<>(key, value));
-                   hasNameSet.add(value);
-               }
-           });
-           return cu;
+               renameVariablesMap.forEach((key, value) -> {
+                   if (!hasNameSet.contains(value) && !hasNameSet.contains(key.getSimpleName())) {
+                       doAfterVisit(new RenameVariable<>(key, value));
+                       hasNameSet.add(value);
+                   }
+               });
+           }
+           return super.visit(tree, ctx);
        }
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2
`getSingleSourceApplicableTest()` is removed, change to use `Preconditions` instead. And also change `getVisitor()` to be public.


{% tabs %}
{% tab title="org/openrewrite/java/cleanup/ChainStringBuilderAppendCalls.java" %}

###### Before
{% code title="org/openrewrite/java/cleanup/ChainStringBuilderAppendCalls.java" %}
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

public class ChainStringBuilderAppendCalls extends Recipe {
    private static final MethodMatcher STRING_BUILDER_APPEND = new MethodMatcher("java.lang.StringBuilder append(String)");

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
{% endcode %}

###### After
{% code title="org/openrewrite/java/cleanup/ChainStringBuilderAppendCalls.java" %}
```java
package org.openrewrite.java.cleanup;

import org.openrewrite.*;
import org.openrewrite.internal.lang.Nullable;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.search.UsesMethod;
import org.openrewrite.java.tree.*;

public class ChainStringBuilderAppendCalls extends Recipe {
    private static final MethodMatcher STRING_BUILDER_APPEND = new MethodMatcher("java.lang.StringBuilder append(String)");

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
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/openrewrite/java/cleanup/ChainStringBuilderAppendCalls.java
+++ org/openrewrite/java/cleanup/ChainStringBuilderAppendCalls.java
@@ -3,4 +3,1 @@
package org.openrewrite.java.cleanup;

-import org.openrewrite.Applicability;
-import org.openrewrite.ExecutionContext;
-import org.openrewrite.Recipe;
-import org.openrewrite.TreeVisitor;
+import org.openrewrite.*;
import org.openrewrite.internal.lang.Nullable;
@@ -22,3 +19,11 @@

    @Override
-   protected @Nullable TreeVisitor<?, ExecutionContext> getSingleSourceApplicableTest() {
-       return Applicability.or(new UsesMethod<>(STRING_BUILDER_APPEND),
-           new UsesMethod<>(STRING_BUILDER_APPEND));
+   public TreeVisitor<?, ExecutionContext> getVisitor() {
+       return Preconditions.check(
+               Preconditions.or(new UsesMethod<>(STRING_BUILDER_APPEND),
+                       new UsesMethod<>(STRING_BUILDER_APPEND)), new JavaIsoVisitor<ExecutionContext>() {
+                   @Override
+                   public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
+                       J.MethodInvocation m = super.visitMethodInvocation(method, ctx);
+                       // do something
+                       return m;
+                   }
+               });
    }
@@ -26,12 +31,0 @@
            new UsesMethod<>(STRING_BUILDER_APPEND));
    }
-
-   @Override
-   protected JavaIsoVisitor<ExecutionContext> getVisitor() {
-       return new JavaIsoVisitor<ExecutionContext>() {
-           @Override
-           public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
-               J.MethodInvocation m = super.visitMethodInvocation(method, ctx);
-               // do something
-               return m;
-           }
-       };
-   }
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.recipes.MigrateRecipeToRewrite8")
}

repositories {
    mavenCentral()
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.recipes.MigrateRecipeToRewrite8</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.recipes.MigrateRecipeToRewrite8
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](kun@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.recipes.MigrateRecipeToRewrite8)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
