---
sidebar_label: "Prefer the Java standard library instead of Guava"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Prefer the Java standard library instead of Guava

**org.openrewrite.java.migrate.guava.NoGuava**

_Guava filled in important gaps in the Java standard library and still does. But at least some of Guava's API surface area is covered by the Java standard library now, and some projects may be able to remove Guava altogether if they migrate to standard library for these functions._

### Tags

* [guava](/reference/recipes-by-tag#guava)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/no-guava.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Prefer the Java 11 standard library instead of Guava](../../../java/migrate/guava/noguavajava11)
* [Prefer the Java 21 standard library instead of Guava](../../../java/migrate/guava/noguavajava21)
* [Prefer `Files#createTempDirectory()`](../../../java/migrate/guava/noguavacreatetempdir)
* [Prefer `Runnable::run`](../../../java/migrate/guava/noguavadirectexecutor)
* [Inline methods annotated with `@InlineMe`](../../../java/migrate/guava/noguavainlinememethods)
* [Prefer `new ArrayList&lt;&gt;()`](../../../java/migrate/guava/noguavalistsnewarraylist)
* [Prefer `new CopyOnWriteArrayList&lt;&gt;()`](../../../java/migrate/guava/noguavalistsnewcopyonwritearraylist)
* [Prefer `new LinkedList&lt;&gt;()`](../../../java/migrate/guava/noguavalistsnewlinkedlist)
* [Prefer `new TreeMap&lt;&gt;()`](../../../java/migrate/guava/noguavamapsnewtreemap)
* [Prefer `Arrays.asList(..)` over Guava primitives](../../../java/migrate/guava/noguavaprimitiveaslist)
* [Refaster style Guava to Java migration recipes](../../../java/migrate/guava/noguavarefasterrecipes)
* [Prefer `new HashSet&lt;&gt;()`](../../../java/migrate/guava/noguavasetsnewhashset)
* [Prefer `new ConcurrentHashMap&lt;&gt;()`](../../../java/migrate/guava/noguavasetsnewconcurrenthashset)
* [Prefer `new LinkedHashSet&lt;&gt;()`](../../../java/migrate/guava/noguavasetsnewlinkedhashset)
* [Prefer `java.nio.charset.StandardCharsets`](../../../java/migrate/guava/preferjavaniocharsetstandardcharsets)
* [Prefer `java.util.Optional`](../../../java/migrate/guava/preferjavautiloptional)
* [Prefer `java.util.function.Function`](../../../java/migrate/guava/preferjavautilfunction)
* [Prefer `java.util.function.Predicate`](../../../java/migrate/guava/preferjavautilpredicate)
* [Prefer `java.util.function.Supplier`](../../../java/migrate/guava/preferjavautilsupplier)
* [Prefer `java.util.Objects#equals`](../../../java/migrate/guava/preferjavautilobjectsequals)
* [Prefer `java.util.Objects#hash`](../../../java/migrate/guava/preferjavautilobjectshashcode)
* [Prefer `java.util.Collections#unmodifiableNavigableMap`](../../../java/migrate/guava/preferjavautilcollectionsunmodifiablenavigablemap)
* [Prefer `java.util.Collections#synchronizedNavigableMap`](../../../java/migrate/guava/preferjavautilcollectionssynchronizednavigablemap)
* [Prefer `java.lang.Char#compare`](../../../java/migrate/guava/prefercharcompare)
* [Prefer `Integer#compare`](../../../java/migrate/guava/preferintegercompare)
* [Prefer `Long#compare`](../../../java/migrate/guava/preferlongcompare)
* [Prefer `Short#compare`](../../../java/migrate/guava/prefershortcompare)
* [Prefer `Integer#compareUnsigned`](../../../java/migrate/guava/preferintegercompareunsigned)
* [Prefer `Integer#divideUnsigned`](../../../java/migrate/guava/preferintegerdivideunsigned)
* [Prefer `Integer#parseUnsignedInt`](../../../java/migrate/guava/preferintegerparseunsignedint)
* [Prefer `String#join()` over Guava `Joiner#join()`](../../../java/migrate/guava/preferjavastringjoin)
* [Prefer `Long#compareUnsigned`](../../../java/migrate/guava/preferlongcompareunsigned)
* [Prefer `Long#divideUnsigned`](../../../java/migrate/guava/preferlongdivideunsigned)
* [Prefer `Long#parseUnsignedInt`](../../../java/migrate/guava/preferlongparseunsignedlong)
* [Prefer `Long#remainderUnsigned`](../../../java/migrate/guava/preferlongremainderunsigned)
* [Prefer `Math#addExact`](../../../java/migrate/guava/prefermathaddexact)
* [Prefer `Math#subtractExact`](../../../java/migrate/guava/prefermathsubtractexact)
* [Prefer `Math#multiplyExact`](../../../java/migrate/guava/prefermathmultiplyexact)
* [Prefer `new AtomicReference&lt;&gt;()`](../../../java/migrate/guava/noguavaatomicsnewreference)
* [`InputStreamRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/inputstreamrulesrecipes)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.guava.NoGuava
displayName: Prefer the Java standard library instead of Guava
description: |
  Guava filled in important gaps in the Java standard library and still does. But at least some of Guava's API surface area is covered by the Java standard library now, and some projects may be able to remove Guava altogether if they migrate to standard library for these functions.
tags:
  - guava
recipeList:
  - org.openrewrite.java.migrate.guava.NoGuavaJava11
  - org.openrewrite.java.migrate.guava.NoGuavaJava21
  - org.openrewrite.java.migrate.guava.NoGuavaCreateTempDir
  - org.openrewrite.java.migrate.guava.NoGuavaDirectExecutor
  - org.openrewrite.java.migrate.guava.NoGuavaInlineMeMethods
  - org.openrewrite.java.migrate.guava.NoGuavaListsNewArrayList
  - org.openrewrite.java.migrate.guava.NoGuavaListsNewCopyOnWriteArrayList
  - org.openrewrite.java.migrate.guava.NoGuavaListsNewLinkedList
  - org.openrewrite.java.migrate.guava.NoGuavaMapsNewTreeMap
  - org.openrewrite.java.migrate.guava.NoGuavaPrimitiveAsList
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes
  - org.openrewrite.java.migrate.guava.NoGuavaSetsNewHashSet
  - org.openrewrite.java.migrate.guava.NoGuavaSetsNewConcurrentHashSet
  - org.openrewrite.java.migrate.guava.NoGuavaSetsNewLinkedHashSet
  - org.openrewrite.java.migrate.guava.PreferJavaNioCharsetStandardCharsets
  - org.openrewrite.java.migrate.guava.PreferJavaUtilOptional
  - org.openrewrite.java.migrate.guava.PreferJavaUtilFunction
  - org.openrewrite.java.migrate.guava.PreferJavaUtilPredicate
  - org.openrewrite.java.migrate.guava.PreferJavaUtilSupplier
  - org.openrewrite.java.migrate.guava.PreferJavaUtilObjectsEquals
  - org.openrewrite.java.migrate.guava.PreferJavaUtilObjectsHashCode
  - org.openrewrite.java.migrate.guava.PreferJavaUtilCollectionsUnmodifiableNavigableMap
  - org.openrewrite.java.migrate.guava.PreferJavaUtilCollectionsSynchronizedNavigableMap
  - org.openrewrite.java.migrate.guava.PreferCharCompare
  - org.openrewrite.java.migrate.guava.PreferIntegerCompare
  - org.openrewrite.java.migrate.guava.PreferLongCompare
  - org.openrewrite.java.migrate.guava.PreferShortCompare
  - org.openrewrite.java.migrate.guava.PreferIntegerCompareUnsigned
  - org.openrewrite.java.migrate.guava.PreferIntegerDivideUnsigned
  - org.openrewrite.java.migrate.guava.PreferIntegerParseUnsignedInt
  - org.openrewrite.java.migrate.guava.PreferJavaStringJoin
  - org.openrewrite.java.migrate.guava.PreferLongCompareUnsigned
  - org.openrewrite.java.migrate.guava.PreferLongDivideUnsigned
  - org.openrewrite.java.migrate.guava.PreferLongParseUnsignedLong
  - org.openrewrite.java.migrate.guava.PreferLongRemainderUnsigned
  - org.openrewrite.java.migrate.guava.PreferMathAddExact
  - org.openrewrite.java.migrate.guava.PreferMathSubtractExact
  - org.openrewrite.java.migrate.guava.PreferMathMultiplyExact
  - org.openrewrite.java.migrate.guava.NoGuavaAtomicsNewReference
  - tech.picnic.errorprone.refasterrules.InputStreamRulesRecipes

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`NoGuavaJava21Test#preferMathClampForDouble`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.google.common.primitives.Doubles;

class Test {
    public double testMethod() {
        return Doubles.constrainToRange(20D, 10D, 100D);
    }
}
```

###### After
```java
class Test {
    public double testMethod() {
        return Math.clamp(20D, 10D, 100D);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,0 @@
-import com.google.common.primitives.Doubles;
-
class Test {
@@ -5,1 +3,1 @@
class Test {
    public double testMethod() {
-       return Doubles.constrainToRange(20D, 10D, 100D);
+       return Math.clamp(20D, 10D, 100D);
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`NoGuavaTest#moreObjectsFirstNonNullToObjectsRequireNonNullElse`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.google.common.base.MoreObjects;

class A {
    Object foo(Object obj) {
        return MoreObjects.firstNonNull(obj, "default");
    }
}
```

###### After
```java
import java.util.Objects;

class A {
    Object foo(Object obj) {
        return Objects.requireNonNullElse(obj, "default");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.google.common.base.MoreObjects;
+import java.util.Objects;

@@ -5,1 +5,1 @@
class A {
    Object foo(Object obj) {
-       return MoreObjects.firstNonNull(obj, "default");
+       return Objects.requireNonNullElse(obj, "default");
    }
```
</TabItem>
</Tabs>

---

##### Example 3
`PreferJavaUtilOptionalTest#absentToEmpty`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.google.common.base.Optional;

class A {
    Optional<String> foo() {
        return Optional.absent();
    }
}
```

###### After
```java
import java.util.Optional;

class A {
    Optional<String> foo() {
        return Optional.empty();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.google.common.base.Optional;
+import java.util.Optional;

@@ -5,1 +5,1 @@
class A {
    Optional<String> foo() {
-       return Optional.absent();
+       return Optional.empty();
    }
```
</TabItem>
</Tabs>

---

##### Example 4
`NotYetImplemented#getCatchIllegalStateExceptionToNoSuchElementException`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.google.common.base.Optional;

class A {
    String foo(Optional<String> optional) {
        try {
            return optional.get();
        } catch (IllegalStateException e) {
            return "";
        }
    }
}
```

###### After
```java
import java.util.Optional;

class A {
    String foo(Optional<String> optional) {
        try {
            return optional.get();
        } catch (NoSuchElementException e) {
            return "";
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.google.common.base.Optional;
+import java.util.Optional;

@@ -7,1 +7,1 @@
        try {
            return optional.get();
-       } catch (IllegalStateException e) {
+       } catch (NoSuchElementException e) {
            return "";
```
</TabItem>
</Tabs>

---

##### Example 5
`NoGuavaJava21Test#preferMathClampForDouble`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.google.common.primitives.Doubles;

class Test {
    public double testMethod() {
        return Doubles.constrainToRange(20D, 10D, 100D);
    }
}
```

###### After
```java
class Test {
    public double testMethod() {
        return Math.clamp(20D, 10D, 100D);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,0 @@
-import com.google.common.primitives.Doubles;
-
class Test {
@@ -5,1 +3,1 @@
class Test {
    public double testMethod() {
-       return Doubles.constrainToRange(20D, 10D, 100D);
+       return Math.clamp(20D, 10D, 100D);
    }
```
</TabItem>
</Tabs>

---

##### Example 6
`NoGuavaTest#moreObjectsFirstNonNullToObjectsRequireNonNullElse`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.google.common.base.MoreObjects;

class A {
    Object foo(Object obj) {
        return MoreObjects.firstNonNull(obj, "default");
    }
}
```

###### After
```java
import java.util.Objects;

class A {
    Object foo(Object obj) {
        return Objects.requireNonNullElse(obj, "default");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.google.common.base.MoreObjects;
+import java.util.Objects;

@@ -5,1 +5,1 @@
class A {
    Object foo(Object obj) {
-       return MoreObjects.firstNonNull(obj, "default");
+       return Objects.requireNonNullElse(obj, "default");
    }
```
</TabItem>
</Tabs>

---

##### Example 7
`PreferJavaUtilOptionalTest#absentToEmpty`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.google.common.base.Optional;

class A {
    Optional<String> foo() {
        return Optional.absent();
    }
}
```

###### After
```java
import java.util.Optional;

class A {
    Optional<String> foo() {
        return Optional.empty();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.google.common.base.Optional;
+import java.util.Optional;

@@ -5,1 +5,1 @@
class A {
    Optional<String> foo() {
-       return Optional.absent();
+       return Optional.empty();
    }
```
</TabItem>
</Tabs>

---

##### Example 8
`NotYetImplemented#getCatchIllegalStateExceptionToNoSuchElementException`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.google.common.base.Optional;

class A {
    String foo(Optional<String> optional) {
        try {
            return optional.get();
        } catch (IllegalStateException e) {
            return "";
        }
    }
}
```

###### After
```java
import java.util.Optional;

class A {
    String foo(Optional<String> optional) {
        try {
            return optional.get();
        } catch (NoSuchElementException e) {
            return "";
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.google.common.base.Optional;
+import java.util.Optional;

@@ -7,1 +7,1 @@
        try {
            return optional.get();
-       } catch (IllegalStateException e) {
+       } catch (NoSuchElementException e) {
            return "";
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.guava.NoGuava")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.guava.NoGuava")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.guava.NoGuava</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.guava.NoGuava -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe NoGuava
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.guava.NoGuava" />

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
