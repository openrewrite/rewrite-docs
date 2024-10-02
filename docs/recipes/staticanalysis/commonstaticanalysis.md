---
sidebar_label: "Common static analysis issues"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Common static analysis issues

**org.openrewrite.staticanalysis.CommonStaticAnalysis**

_Resolve common static analysis issues (also known as SAST issues)._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/common-static-analysis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.17.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.17.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipe-type">
<TabItem value="recipe-list" title="Recipe List" >
* [Atomic Boolean, Integer, and Long equality checks compare their values](../staticanalysis/atomicprimitiveequalsusesget)
* [`new BigDecimal(double)` should not be used](../staticanalysis/bigdecimaldoubleconstructorrecipe)
* [`BigDecimal` rounding constants to `RoundingMode` enums](../staticanalysis/bigdecimalroundingconstantstoenums)
* [Boolean checks should not be inverted](../staticanalysis/booleanchecksnotinverted)
* [CaseInsensitive comparisons do not alter case](../staticanalysis/caseinsensitivecomparisonsdonotchangecase)
* [Catch clause should do more than just rethrow](../staticanalysis/catchclauseonlyrethrows)
* [Chain `StringBuilder.append()` calls](../staticanalysis/chainstringbuilderappendcalls)
* [Covariant equals](../staticanalysis/covariantequals)
* [Default comes last](../staticanalysis/defaultcomeslast)
* [Remove empty blocks](../staticanalysis/emptyblock)
* [Equals avoids null](../staticanalysis/equalsavoidsnull)
* [Explicit initialization](../staticanalysis/explicitinitialization)
* [`Externalizable` classes have no-arguments constructor](../staticanalysis/externalizablehasnoargsconstructor)
* [Finalize private fields](../staticanalysis/finalizeprivatefields)
* [Fall through](../staticanalysis/fallthrough)
* [Finalize classes with private constructors](../staticanalysis/finalclass)
* [Fix `String#format` and `String#formatted` expressions](../staticanalysis/fixstringformatexpressions)
* [`for` loop counters incremented in update](../staticanalysis/forloopincrementinupdate)
* [Use `indexOf(String, int)`](../staticanalysis/indexofchecksshoulduseastartposition)
* [`indexOf()` replaceable by `contains()`](../staticanalysis/indexofreplaceablebycontains)
* [`indexOf` should not compare greater than zero](../staticanalysis/indexofshouldnotcomparegreaterthanzero)
* [Inline variable](../staticanalysis/inlinevariable)
* [Use `Collection#isEmpty()` instead of comparing `size()`](../staticanalysis/isemptycalloncollections)
* [Simplify lambda blocks to expressions](../staticanalysis/lambdablocktoexpression)
* [Standardize method name casing](../staticanalysis/methodnamecasing)
* [`switch` statements should have at least 3 `case` clauses](../staticanalysis/minimumswitchcases)
* [Modifier order](../staticanalysis/modifierorder)
* [No multiple variable declarations](../staticanalysis/multiplevariabledeclarations)
* [Fix missing braces](../staticanalysis/needbraces)
* [Nested enums are not static](../staticanalysis/nestedenumsarenotstatic)
* [Change `StringBuilder` and `StringBuffer` character constructor argument to `String`](../staticanalysis/newstringbuilderbufferwithcharargument)
* [No double brace initialization](../staticanalysis/nodoublebraceinitialization)
* [Use `Collections#emptyList()`, `emptyMap()`, and `emptySet()`](../staticanalysis/noemptycollectionwithrawtype)
* [Use comparison rather than equality checks in for conditions](../staticanalysis/noequalityinforcondition)
* [Remove `finalize()` method](../staticanalysis/nofinalizer)
* [No primitive wrappers for #toString() or #compareTo(..)](../staticanalysis/noprimitivewrappersfortostringorcompareto)
* [Jump statements should not be redundant](../staticanalysis/noredundantjumpstatements)
* [Unnecessary `String#toString`](../staticanalysis/notostringonstringtype)
* [Unnecessary `String#valueOf(..)`](../staticanalysis/novalueofonstringtype)
* [`finalize()` calls super](../staticanalysis/objectfinalizecallssuper)
* [Use primitive wrapper `valueOf` method](../staticanalysis/primitivewrapperclassconstructortovalueof)
* [Redundant file creation](../staticanalysis/redundantfilecreation)
* [Remove extra semicolons](../staticanalysis/removeextrasemicolons)
* [Reformat local variable names to camelCase](../staticanalysis/renamelocalvariablestocamelcase)
* [Rename methods named `hashcode`, `equal`, or `tostring`](../staticanalysis/renamemethodsnamedhashcodeequalortostring)
* [Reformat private field names to camelCase](../staticanalysis/renameprivatefieldstocamelcase)
* [Use method references in lambda](../staticanalysis/replacelambdawithmethodreference)
* [Replace `StringBuilder#append` with `String`](../staticanalysis/replacestringbuilderwithstring)
* [Simplify boolean expression](../staticanalysis/simplifybooleanexpression)
* [Simplify boolean return](../staticanalysis/simplifybooleanreturn)
* [Static methods need not be final](../staticanalysis/staticmethodnotfinal)
* [Use `String.equals()` on `String` literals](../staticanalysis/stringliteralequality)
* [Unnecessary close in try-with-resources](../staticanalysis/unnecessarycloseintrywithresources)
* [Unnecessary explicit type arguments](../staticanalysis/unnecessaryexplicittypearguments)
* [Remove unnecessary parentheses](../staticanalysis/unnecessaryparentheses)
* [Remove `@Nullable` and `@CheckForNull` annotations from primitives](../staticanalysis/unnecessaryprimitiveannotations)
* [Upper case literal suffixes](../staticanalysis/uppercaseliteralsuffixes)
* [Use the diamond operator](../staticanalysis/usediamondoperator)
* [No C-style array declarations](../staticanalysis/usejavastylearraydeclarations)
* [Prefer `while` over `for` loops](../staticanalysis/whileinsteadoffor)
* [Write octal values as decimal](../staticanalysis/writeoctalvaluesasdecimal)
* [Structural equality tests should use `==` or `!=`](../kotlin/cleanup/equalsmethodusage)
* [`it` shouldn't be used as a lambda parameter name](../kotlin/cleanup/implicitparameterinlambda)
* [Replace `Char#toInt()` with `Char#code`](../kotlin/cleanup/replacechartointwithcode)

</TabItem>

<TabItem value="yaml-recipe-list" title="Yaml Recipe List">
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.CommonStaticAnalysis
displayName: Common static analysis issues
description: Resolve common static analysis issues (also known as SAST issues).
recipeList:
  - org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet
  - org.openrewrite.staticanalysis.BigDecimalDoubleConstructorRecipe
  - org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums
  - org.openrewrite.staticanalysis.BooleanChecksNotInverted
  - org.openrewrite.staticanalysis.CaseInsensitiveComparisonsDoNotChangeCase
  - org.openrewrite.staticanalysis.CatchClauseOnlyRethrows
  - org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls
  - org.openrewrite.staticanalysis.CovariantEquals
  - org.openrewrite.staticanalysis.DefaultComesLast
  - org.openrewrite.staticanalysis.EmptyBlock
  - org.openrewrite.staticanalysis.EqualsAvoidsNull
  - org.openrewrite.staticanalysis.ExplicitInitialization
  - org.openrewrite.staticanalysis.ExternalizableHasNoArgsConstructor
  - org.openrewrite.staticanalysis.FinalizePrivateFields
  - org.openrewrite.staticanalysis.FallThrough
  - org.openrewrite.staticanalysis.FinalClass
  - org.openrewrite.staticanalysis.FixStringFormatExpressions
  - org.openrewrite.staticanalysis.ForLoopIncrementInUpdate
  - org.openrewrite.staticanalysis.IndexOfChecksShouldUseAStartPosition
  - org.openrewrite.staticanalysis.IndexOfReplaceableByContains
  - org.openrewrite.staticanalysis.IndexOfShouldNotCompareGreaterThanZero
  - org.openrewrite.staticanalysis.InlineVariable
  - org.openrewrite.staticanalysis.IsEmptyCallOnCollections
  - org.openrewrite.staticanalysis.LambdaBlockToExpression
  - org.openrewrite.staticanalysis.MethodNameCasing
  - org.openrewrite.staticanalysis.MinimumSwitchCases
  - org.openrewrite.staticanalysis.ModifierOrder
  - org.openrewrite.staticanalysis.MultipleVariableDeclarations
  - org.openrewrite.staticanalysis.NeedBraces
  - org.openrewrite.staticanalysis.NestedEnumsAreNotStatic
  - org.openrewrite.staticanalysis.NewStringBuilderBufferWithCharArgument
  - org.openrewrite.staticanalysis.NoDoubleBraceInitialization
  - org.openrewrite.staticanalysis.NoEmptyCollectionWithRawType
  - org.openrewrite.staticanalysis.NoEqualityInForCondition
  - org.openrewrite.staticanalysis.NoFinalizer
  - org.openrewrite.staticanalysis.NoPrimitiveWrappersForToStringOrCompareTo
  - org.openrewrite.staticanalysis.NoRedundantJumpStatements
  - org.openrewrite.staticanalysis.NoToStringOnStringType
  - org.openrewrite.staticanalysis.NoValueOfOnStringType
  - org.openrewrite.staticanalysis.ObjectFinalizeCallsSuper
  - org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf
  - org.openrewrite.staticanalysis.RedundantFileCreation
  - org.openrewrite.staticanalysis.RemoveExtraSemicolons
  - org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase
  - org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrToString
  - org.openrewrite.staticanalysis.RenamePrivateFieldsToCamelCase
  - org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference
  - org.openrewrite.staticanalysis.ReplaceStringBuilderWithString
  - org.openrewrite.staticanalysis.SimplifyBooleanExpression
  - org.openrewrite.staticanalysis.SimplifyBooleanReturn
  - org.openrewrite.staticanalysis.StaticMethodNotFinal
  - org.openrewrite.staticanalysis.StringLiteralEquality
  - org.openrewrite.staticanalysis.UnnecessaryCloseInTryWithResources
  - org.openrewrite.staticanalysis.UnnecessaryExplicitTypeArguments
  - org.openrewrite.staticanalysis.UnnecessaryParentheses
  - org.openrewrite.staticanalysis.UnnecessaryPrimitiveAnnotations
  - org.openrewrite.staticanalysis.UpperCaseLiteralSuffixes
  - org.openrewrite.staticanalysis.UseDiamondOperator
  - org.openrewrite.staticanalysis.UseJavaStyleArrayDeclarations
  - org.openrewrite.staticanalysis.WhileInsteadOfFor
  - org.openrewrite.staticanalysis.WriteOctalValuesAsDecimal
  - org.openrewrite.kotlin.cleanup.EqualsMethodUsage
  - org.openrewrite.kotlin.cleanup.ImplicitParameterInLambda
  - org.openrewrite.kotlin.cleanup.ReplaceCharToIntWithCode

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.17.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="project-type">
<TabItem value="gradle" title="Gradle">
    1. Add the following to your `build.gradle` file:
    ```groovy title="build.gradle"
    plugins {
        id("org.openrewrite.rewrite") version("6.24.0")
    }
    
    rewrite {
        activeRecipe("org.openrewrite.staticanalysis.CommonStaticAnalysis")
        exportDatatables = true
    }
    
    repositories {
        mavenCentral()
    }
    
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.17.0")
    }
    ```
    2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" title="Gradle init script">
    1. Create a file named `init.gradle` in the root of your project.
    ```groovy title="init.gradle"
    initscript {
        repositories {
            maven { url "https://plugins.gradle.org/m2" }
        }
        dependencies { classpath("org.openrewrite:plugin:6.24.0") }
    }
    rootProject {
        plugins.apply(org.openrewrite.gradle.RewritePlugin)
        dependencies {
            rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.17.0")
        }
        rewrite {
            activeRecipe("org.openrewrite.staticanalysis.CommonStaticAnalysis")
            exportDatatables = true
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
<TabItem value="maven" title="Maven POM">
    1. Add the following to your `pom.xml` file:
    ```xml title="pom.xml"
    <project>
      <build>
        <plugins>
          <plugin>
            <groupId>org.openrewrite.maven</groupId>
            <artifactId>rewrite-maven-plugin</artifactId>
            <version>5.41.0</version>
            <configuration>
              <exportDatatables>true</exportDatatables>
              <activeRecipes>
                <recipe>org.openrewrite.staticanalysis.CommonStaticAnalysis</recipe>
              </activeRecipes>
            </configuration>
            <dependencies>
              <dependency>
                <groupId>org.openrewrite.recipe</groupId>
                <artifactId>rewrite-static-analysis</artifactId>
                <version>1.17.0</version>
              </dependency>
            </dependencies>
          </plugin>
        </plugins>
      </build>
    </project>
    ```
    2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" title="Maven Command Line">
    You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

    ```shell title="shell"
    mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE -Drewrite.activeRecipes=org.openrewrite.staticanalysis.CommonStaticAnalysis -Drewrite.exportDatatables=true
    ```
</TabItem>
<TabItem value="moderne-cli" title="Moderne CLI">
    You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

    ```shell title="shell"
    mod run . --recipe CommonStaticAnalysis
    ```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |


## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), Patrick Way, [Kun Li](mailto:kun@moderne.io), [Patrick](mailto:patway99@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Tim te Beek](mailto:timtebeek@gmail.com), [SMIT MALKAN](mailto:smitmalkan99@gmail.com), Michel Gonzalez, [traceyyoshima](mailto:tracey.yoshima@gmail.com), Guliver, Kun Li, [Joan Viladrosa](mailto:joan@moderne.io), Tyler Van Gorder, [Peter Streef](mailto:p.streef@gmail.com), Josh Soref, [Jorge Otero](mailto:jorgeor@ext.inditex.com), [Michael Keppler](mailto:bananeweizen@gmx.de), [Grzegorz Olędzki](mailto:grzegon@poczta.onet.pl), [Knut Wannheden](mailto:knut.wannheden@gmail.com), timo-abele, [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Peter Streef](mailto:peter@moderne.io), [Greg Adams](mailto:greg@moderne.io), Mike Sol, [pstreef](mailto:p.streef@gmail.com), [Scott Jungling](mailto:scott.jungling@gmail.com), [Martin Panzer](mailto:postremus1996@googlemail.com), [Mike Solomon](mailto:mike@moderne.io), [xshen053](mailto:shenxiaxi26@gmail.com)