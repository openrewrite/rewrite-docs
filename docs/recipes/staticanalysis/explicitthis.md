---
sidebar_label: "Use explicit `this.field` and `this.method()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use explicit `this.field` and `this.method()`

**org.openrewrite.staticanalysis.ExplicitThis**

_Add explicit 'this.' prefix to field and method access._

## Recipe source

[GitHub: ExplicitThis.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ExplicitThis.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.function.Consumer;

class Parent {
    private String parentField;

    Parent(String value) {
        parentField = value;
    }
}

class Test extends Parent {
    private String value;
    private String field;
    private String field1;
    private String field2;
    private static String staticField;
    private String alreadyPrefixed;

    private String fieldInit1 = "initial";
    private String fieldInit2 = field1;
    private String fieldInit3 = field1 + field2;

    private static String staticFieldInit = staticField;

    static {
        staticField = "static initializer";
        staticHelper();
    }

    {
        field = "instance initializer";
        field1 = field2;
    }

    Test(String value) {
        super(value);
        // Shadowed parameter: looks like a bug but replacing would change semantics
        value = value;
        field = "constructor";
        field1 = field2;
    }

    Test() {
        this("default");
    }

    void instanceMethod(String parameter) {
        field = "value";
        field1 = field2;
        helper();
        staticField = "static context";
        staticMethod();

        String localVariable = parameter;
        String result = parameter + localVariable;

        this.alreadyPrefixed = "already has this";
        this.alreadyPrefixedMethod();
        super.toString();

        Consumer<String> lambda = s -> {
            field = s;
            field1 = field2;
        };

        Runnable runnable = () -> field = "lambda";
    }

    static void staticMethod() {
        staticField = "static context";
        staticHelper();
    }

    // Shadowed parameter: looks like a bug but replacing would change semantics
    void setField(String field) {
        field = field;
    }

    void helper() {}
    void alreadyPrefixedMethod() {}
    static void staticHelper() {}

    class Inner {
        private String innerField;

        void method() {
            innerField = "inner";
            field = "outer";
            Consumer<String> lambda = s -> {
                innerField = s;
                field = s;
            };
        }

        class Nested {
            private String nestedField;

            void method() {
                nestedField = "nested";
                innerField = "inner";
                field = "outer";
            }
        }
    }

    static class StaticNested {
        private String nestedField;
        private static String nestedStaticField;

        void method() {
            nestedField = "nested";
            nestedStaticField = "static";
            staticField = "outer static";
        }

        static void staticMethod() {
            nestedStaticField = "static";
            staticField = "outer static";
        }
    }

    void anonymousClassExample() {
        Runnable r = new Runnable() {
            private String anonymousField = "anonymous";

            @Override
            public void run() {
                field = "outer";
                String local = anonymousField;
            }
        };
    }
}
```

###### After
```java
import java.util.function.Consumer;

class Parent {
    private String parentField;

    Parent(String value) {
        this.parentField = value;
    }
}

class Test extends Parent {
    private String value;
    private String field;
    private String field1;
    private String field2;
    private static String staticField;
    private String alreadyPrefixed;

    private String fieldInit1 = "initial";
    private String fieldInit2 = this.field1;
    private String fieldInit3 = this.field1 + this.field2;

    private static String staticFieldInit = staticField;

    static {
        staticField = "static initializer";
        staticHelper();
    }

    {
        this.field = "instance initializer";
        this.field1 = this.field2;
    }

    Test(String value) {
        super(value);
        // Shadowed parameter: looks like a bug but replacing would change semantics
        value = value;
        this.field = "constructor";
        this.field1 = this.field2;
    }

    Test() {
        this("default");
    }

    void instanceMethod(String parameter) {
        this.field = "value";
        this.field1 = this.field2;
        this.helper();
        staticField = "static context";
        staticMethod();

        String localVariable = parameter;
        String result = parameter + localVariable;

        this.alreadyPrefixed = "already has this";
        this.alreadyPrefixedMethod();
        super.toString();

        Consumer<String> lambda = s -> {
            this.field = s;
            this.field1 = this.field2;
        };

        Runnable runnable = () -> this.field = "lambda";
    }

    static void staticMethod() {
        staticField = "static context";
        staticHelper();
    }

    // Shadowed parameter: looks like a bug but replacing would change semantics
    void setField(String field) {
        field = field;
    }

    void helper() {}
    void alreadyPrefixedMethod() {}
    static void staticHelper() {}

    class Inner {
        private String innerField;

        void method() {
            this.innerField = "inner";
            Test.this.field = "outer";
            Consumer<String> lambda = s -> {
                this.innerField = s;
                Test.this.field = s;
            };
        }

        class Nested {
            private String nestedField;

            void method() {
                this.nestedField = "nested";
                Inner.this.innerField = "inner";
                Test.this.field = "outer";
            }
        }
    }

    static class StaticNested {
        private String nestedField;
        private static String nestedStaticField;

        void method() {
            this.nestedField = "nested";
            nestedStaticField = "static";
            staticField = "outer static";
        }

        static void staticMethod() {
            nestedStaticField = "static";
            staticField = "outer static";
        }
    }

    void anonymousClassExample() {
        Runnable r = new Runnable() {
            private String anonymousField = "anonymous";

            @Override
            public void run() {
                Test.this.field = "outer";
                String local = this.anonymousField;
            }
        };
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,1 @@

    Parent(String value) {
-       parentField = value;
+       this.parentField = value;
    }
@@ -20,2 +20,2 @@

    private String fieldInit1 = "initial";
-   private String fieldInit2 = field1;
-   private String fieldInit3 = field1 + field2;
+   private String fieldInit2 = this.field1;
+   private String fieldInit3 = this.field1 + this.field2;

@@ -31,2 +31,2 @@

    {
-       field = "instance initializer";
-       field1 = field2;
+       this.field = "instance initializer";
+       this.field1 = this.field2;
    }
@@ -39,2 +39,2 @@
        // Shadowed parameter: looks like a bug but replacing would change semantics
        value = value;
-       field = "constructor";
-       field1 = field2;
+       this.field = "constructor";
+       this.field1 = this.field2;
    }
@@ -48,3 +48,3 @@

    void instanceMethod(String parameter) {
-       field = "value";
-       field1 = field2;
-       helper();
+       this.field = "value";
+       this.field1 = this.field2;
+       this.helper();
        staticField = "static context";
@@ -62,2 +62,2 @@

        Consumer<String> lambda = s -> {
-           field = s;
-           field1 = field2;
+           this.field = s;
+           this.field1 = this.field2;
        };
@@ -66,1 +66,1 @@
        };

-       Runnable runnable = () -> field = "lambda";
+       Runnable runnable = () -> this.field = "lambda";
    }
@@ -87,2 +87,2 @@

        void method() {
-           innerField = "inner";
-           field = "outer";
+           this.innerField = "inner";
+           Test.this.field = "outer";
            Consumer<String> lambda = s -> {
@@ -90,2 +90,2 @@
            field = "outer";
            Consumer<String> lambda = s -> {
-               innerField = s;
-               field = s;
+               this.innerField = s;
+               Test.this.field = s;
            };
@@ -99,3 +99,3 @@

            void method() {
-               nestedField = "nested";
-               innerField = "inner";
-               field = "outer";
+               this.nestedField = "nested";
+               Inner.this.innerField = "inner";
+               Test.this.field = "outer";
            }
@@ -111,1 +111,1 @@

        void method() {
-           nestedField = "nested";
+           this.nestedField = "nested";
            nestedStaticField = "static";
@@ -128,2 +128,2 @@
            @Override
            public void run() {
-               field = "outer";
-               String local = anonymousField;
+               Test.this.field = "outer";
+               String local = this.anonymousField;
            }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.ExplicitThis"
  displayName="Use explicit `this.field` and `this.method()`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ExplicitThis" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
