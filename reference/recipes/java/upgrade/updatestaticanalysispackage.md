# update referencing package name for the recipes moved to `rewrite-static-analysis`

**org.openrewrite.java.upgrade.UpdateStaticAnalysisPackage**

_Some recipes have been moved from `rewrite` to `rewrite-static-analysis`, so any referencing places should update the class package name accordingly._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/resources/META-INF/rewrite/migrate-rewrite.yml), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.7.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.7.3


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.18")
}

rewrite {
    activeRecipe("org.openrewrite.java.upgrade.UpdateStaticAnalysisPackage")
}

repositories {
    mavenCentral()
}

```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:latest.release") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite:rewrite-java")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.upgrade.UpdateStaticAnalysisPackage")
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
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.8.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.upgrade.UpdateStaticAnalysisPackage</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.upgrade.UpdateStaticAnalysisPackage
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.AddSerialVersionUidToSerializable`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.AddSerialVersionUidToSerializable`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.AtomicPrimitiveEqualsUsesGet`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.AvoidBoxedBooleanExpressions`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.AvoidBoxedBooleanExpressions`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.BigDecimalRoundingConstantsToEnums`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.BooleanChecksNotInverted`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.BooleanChecksNotInverted`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.CaseInsensitiveComparisonsDoNotChangeCase`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.CaseInsensitiveComparisonsDoNotChangeCase`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.CatchClauseOnlyRethrows`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.CatchClauseOnlyRethrows`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ChainStringBuilderAppendCalls`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.CombineSemanticallyEqualCatchBlocks`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.CombineSemanticallyEqualCatchBlocks`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.CompareEnumsWithEqualityOperator`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.CompareEnumsWithEqualityOperator`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ControlFlowIndentation`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ControlFlowIndentation`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.CovariantEquals`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.CovariantEquals`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.DeclarationSiteTypeVariance`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.DeclarationSiteTypeVariance`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.DefaultComesLast`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.DefaultComesLast`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.EmptyBlock`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.EmptyBlock`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.EqualsAvoidsNull`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.EqualsAvoidsNull`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ExplicitCharsetOnStringGetBytes`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ExplicitCharsetOnStringGetBytes`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ExplicitInitialization`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ExplicitInitialization`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ExplicitLambdaArgumentTypes`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ExplicitLambdaArgumentTypes`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ExternalizableHasNoArgsConstructor`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ExternalizableHasNoArgsConstructor`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.FallThrough`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.FallThrough`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.FinalClass`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.FinalClass`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.FinalizeLocalVariables`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.FinalizeLocalVariables`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.FinalizeMethodArguments`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.FinalizeMethodArguments`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.FinalizePrivateFields`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.FinalizePrivateFields`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.FixStringFormatExpressions`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.FixStringFormatExpressions`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ForLoopControlVariablePostfixOperators`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ForLoopControlVariablePostfixOperators`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ForLoopIncrementInUpdate`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ForLoopIncrementInUpdate`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.HiddenField`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.HiddenField`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.HideUtilityClassConstructor`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.HideUtilityClassConstructor`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.IndexOfChecksShouldUseAStartPosition`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.IndexOfChecksShouldUseAStartPosition`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.IndexOfReplaceableByContains`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.IndexOfReplaceableByContains`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.IndexOfShouldNotCompareGreaterThanZero`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.IndexOfShouldNotCompareGreaterThanZero`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.InlineVariable`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.InlineVariable`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.InstanceOfPatternMatch`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.InstanceOfPatternMatch`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.IsEmptyCallOnCollections`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.IsEmptyCallOnCollections`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.LambdaBlockToExpression`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.LambdaBlockToExpression`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.LowercasePackage`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.LowercasePackage`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.MethodNameCasing`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.MethodNameCasing`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.MinimumSwitchCases`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.MinimumSwitchCases`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.MissingOverrideAnnotation`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.MissingOverrideAnnotation`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ModifierOrder`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ModifierOrder`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.MultipleVariableDeclarations`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.MultipleVariableDeclarations`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NeedBraces`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NeedBraces`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NestedEnumsAreNotStatic`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NestedEnumsAreNotStatic`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NewStringBuilderBufferWithCharArgument`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NewStringBuilderBufferWithCharArgument`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NoDoubleBraceInitialization`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NoDoubleBraceInitialization`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NoEmptyCollectionWithRawType`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NoEmptyCollectionWithRawType`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NoEqualityInForCondition`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NoEqualityInForCondition`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NoFinalizedLocalVariables`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NoFinalizedLocalVariables`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NoFinalizer`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NoFinalizer`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NoPrimitiveWrappersForToStringOrCompareTo`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NoPrimitiveWrappersForToStringOrCompareTo`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NoRedundantJumpStatements`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NoRedundantJumpStatements`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NoToStringOnStringType`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NoToStringOnStringType`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.NoValueOfOnStringType`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.NoValueOfOnStringType`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ObjectFinalizeCallsSuper`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ObjectFinalizeCallsSuper`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.OperatorWrap`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.OperatorWrap`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.PrimitiveWrapperClassConstructorToValueOf`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RedundantFileCreation`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RedundantFileCreation`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ReferentialEqualityToObjectEquals`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ReferentialEqualityToObjectEquals`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveCallsToObjectFinalize`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveCallsToObjectFinalize`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveCallsToSystemGc`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveCallsToSystemGc`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveEmptyJavaDocParameters`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveEmptyJavaDocParameters`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveInstanceOfPatternMatch`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveInstanceOfPatternMatch`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveJavaDocAuthorTag`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveJavaDocAuthorTag`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveRedundantTypeCast`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveRedundantTypeCast`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveSystemOutPrintln`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveSystemOutPrintln`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveUnneededAssertion`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveUnneededAssertion`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveUnneededBlock`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveUnneededBlock`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveUnusedLocalVariables`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveUnusedLocalVariables`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveUnusedPrivateFields`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveUnusedPrivateFields`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RemoveUnusedPrivateMethods`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RemoveUnusedPrivateMethods`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RenameExceptionInEmptyCatch`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RenameLocalVariablesToCamelCase`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RenameMethodsNamedHashcodeEqualOrTostring`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrTostring`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RenamePrivateFieldsToCamelCase`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RenamePrivateFieldsToCamelCase`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.RenameToCamelCase`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.RenameToCamelCase`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ReplaceDeprecatedRuntimeExecMethods`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ReplaceDeprecatedRuntimeExecMethods`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ReplaceDuplicateStringLiterals`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ReplaceLambdaWithMethodReference`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ReplaceOptionalIsPresentWithIfPresent`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ReplaceOptionalIsPresentWithIfPresent`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ReplaceRedundantFormatWithPrintf`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ReplaceRedundantFormatWithPrintf`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ReplaceStackWithDeque`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ReplaceStackWithDeque`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ReplaceStreamToListWithCollect`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ReplaceStreamToListWithCollect`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ReplaceStringBuilderWithString`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ReplaceStringBuilderWithString`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ReplaceTextBlockWithString`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ReplaceTextBlockWithString`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.ReplaceValidateNotNullHavingVarargsWithObjectsRequireNonNull`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingVarargsWithObjectsRequireNonNull`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.SimplifyBooleanExpression`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.SimplifyBooleanExpression`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.SimplifyBooleanReturn`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.SimplifyBooleanReturn`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.SimplifyCompoundStatement`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.SimplifyCompoundStatement`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.SimplifyConsecutiveAssignments`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.SimplifyConsecutiveAssignments`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.SimplifyConstantIfBranchExecution`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.SimplifyConstantIfBranchExecution`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.SimplifyDurationCreationUnits`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.SimplifyDurationCreationUnits`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.StaticMethodNotFinal`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.StaticMethodNotFinal`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.StringLiteralEquality`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.StringLiteralEquality`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.TypecastParenPad`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.TypecastParenPad`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UnnecessaryCatch`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UnnecessaryCatch`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UnnecessaryCloseInTryWithResources`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UnnecessaryCloseInTryWithResources`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UnnecessaryExplicitTypeArguments`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UnnecessaryExplicitTypeArguments`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UnnecessaryPrimitiveAnnotations`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UnnecessaryPrimitiveAnnotations`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UnnecessaryParentheses`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UnnecessaryParentheses`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UnnecessaryThrows`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UnnecessaryThrows`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UnwrapRepeatableAnnotations`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UnwrapRepeatableAnnotations`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UpperCaseLiteralSuffixes`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UpperCaseLiteralSuffixes`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UseAsBuilder`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UseAsBuilder`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UseCollectionInterfaces`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UseCollectionInterfaces`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UseDiamondOperator`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UseDiamondOperator`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UseForEachRemoveInsteadOfSetRemoveAll`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UseForEachRemoveInsteadOfSetRemoveAll`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UseJavaStyleArrayDeclarations`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UseJavaStyleArrayDeclarations`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UseLambdaForFunctionalInterface`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UseLambdaForFunctionalInterface`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UseObjectNotifyAll`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UseObjectNotifyAll`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UseStandardCharset`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UseStandardCharset`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UseStringReplace`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UseStringReplace`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.UseSystemLineSeparator`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.UseSystemLineSeparator`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.WhileInsteadOfFor`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.WhileInsteadOfFor`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.java.cleanup.WriteOctalValuesAsDecimal`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.staticanalysis.WriteOctalValuesAsDecimal`
* [Update moved package recipe](../../java/recipes/updatemovedrecipe.md)
  * oldRecipeFullyQualifiedClassName: `org.openrewrite.gradle.plugins.AddGradleEnterprise`
  * newRecipeFullyQualifiedClassName: `org.openrewrite.gradle.plugins.AddGradleEnterpriseGradlePlugin`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.upgrade.UpdateStaticAnalysisPackage
displayName: update referencing package name for the recipes moved to `rewrite-static-analysis`
description: Some recipes have been moved from `rewrite` to `rewrite-static-analysis`, so any referencing places should update the class package name accordingly.

recipeList:
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.AddSerialVersionUidToSerializable
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.AddSerialVersionUidToSerializable
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.AtomicPrimitiveEqualsUsesGet
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.AvoidBoxedBooleanExpressions
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.AvoidBoxedBooleanExpressions
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.BigDecimalRoundingConstantsToEnums
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.BooleanChecksNotInverted
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.BooleanChecksNotInverted
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.CaseInsensitiveComparisonsDoNotChangeCase
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.CaseInsensitiveComparisonsDoNotChangeCase
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.CatchClauseOnlyRethrows
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.CatchClauseOnlyRethrows
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ChainStringBuilderAppendCalls
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.CombineSemanticallyEqualCatchBlocks
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.CombineSemanticallyEqualCatchBlocks
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.CompareEnumsWithEqualityOperator
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.CompareEnumsWithEqualityOperator
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ControlFlowIndentation
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ControlFlowIndentation
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.CovariantEquals
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.CovariantEquals
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.DeclarationSiteTypeVariance
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.DeclarationSiteTypeVariance
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.DefaultComesLast
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.DefaultComesLast
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.EmptyBlock
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.EmptyBlock
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.EqualsAvoidsNull
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.EqualsAvoidsNull
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ExplicitCharsetOnStringGetBytes
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ExplicitCharsetOnStringGetBytes
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ExplicitInitialization
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ExplicitInitialization
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ExplicitLambdaArgumentTypes
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ExplicitLambdaArgumentTypes
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ExternalizableHasNoArgsConstructor
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ExternalizableHasNoArgsConstructor
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.FallThrough
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.FallThrough
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.FinalClass
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.FinalClass
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.FinalizeLocalVariables
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.FinalizeLocalVariables
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.FinalizeMethodArguments
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.FinalizeMethodArguments
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.FinalizePrivateFields
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.FinalizePrivateFields
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.FixStringFormatExpressions
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.FixStringFormatExpressions
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ForLoopControlVariablePostfixOperators
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ForLoopControlVariablePostfixOperators
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ForLoopIncrementInUpdate
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ForLoopIncrementInUpdate
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.HiddenField
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.HiddenField
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.HideUtilityClassConstructor
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.HideUtilityClassConstructor
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.IndexOfChecksShouldUseAStartPosition
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.IndexOfChecksShouldUseAStartPosition
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.IndexOfReplaceableByContains
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.IndexOfReplaceableByContains
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.IndexOfShouldNotCompareGreaterThanZero
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.IndexOfShouldNotCompareGreaterThanZero
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.InlineVariable
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.InlineVariable
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.InstanceOfPatternMatch
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.InstanceOfPatternMatch
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.IsEmptyCallOnCollections
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.IsEmptyCallOnCollections
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.LambdaBlockToExpression
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.LambdaBlockToExpression
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.LowercasePackage
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.LowercasePackage
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.MethodNameCasing
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.MethodNameCasing
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.MinimumSwitchCases
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.MinimumSwitchCases
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.MissingOverrideAnnotation
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.MissingOverrideAnnotation
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ModifierOrder
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ModifierOrder
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.MultipleVariableDeclarations
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.MultipleVariableDeclarations
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NeedBraces
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NeedBraces
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NestedEnumsAreNotStatic
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NestedEnumsAreNotStatic
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NewStringBuilderBufferWithCharArgument
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NewStringBuilderBufferWithCharArgument
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NoDoubleBraceInitialization
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NoDoubleBraceInitialization
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NoEmptyCollectionWithRawType
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NoEmptyCollectionWithRawType
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NoEqualityInForCondition
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NoEqualityInForCondition
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NoFinalizedLocalVariables
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NoFinalizedLocalVariables
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NoFinalizer
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NoFinalizer
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NoPrimitiveWrappersForToStringOrCompareTo
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NoPrimitiveWrappersForToStringOrCompareTo
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NoRedundantJumpStatements
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NoRedundantJumpStatements
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NoToStringOnStringType
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NoToStringOnStringType
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.NoValueOfOnStringType
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.NoValueOfOnStringType
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ObjectFinalizeCallsSuper
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ObjectFinalizeCallsSuper
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.OperatorWrap
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.OperatorWrap
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.PrimitiveWrapperClassConstructorToValueOf
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RedundantFileCreation
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RedundantFileCreation
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ReferentialEqualityToObjectEquals
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ReferentialEqualityToObjectEquals
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveCallsToObjectFinalize
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveCallsToObjectFinalize
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveCallsToSystemGc
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveCallsToSystemGc
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveEmptyJavaDocParameters
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveEmptyJavaDocParameters
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveInstanceOfPatternMatch
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveInstanceOfPatternMatch
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveJavaDocAuthorTag
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveJavaDocAuthorTag
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveRedundantTypeCast
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveRedundantTypeCast
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveSystemOutPrintln
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveSystemOutPrintln
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveUnneededAssertion
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveUnneededAssertion
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveUnneededBlock
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveUnneededBlock
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveUnusedLocalVariables
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveUnusedLocalVariables
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveUnusedPrivateFields
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveUnusedPrivateFields
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RemoveUnusedPrivateMethods
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RemoveUnusedPrivateMethods
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RenameExceptionInEmptyCatch
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RenameExceptionInEmptyCatch
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RenameLocalVariablesToCamelCase
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RenameMethodsNamedHashcodeEqualOrTostring
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrTostring
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RenamePrivateFieldsToCamelCase
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RenamePrivateFieldsToCamelCase
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.RenameToCamelCase
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.RenameToCamelCase
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ReplaceDeprecatedRuntimeExecMethods
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ReplaceDeprecatedRuntimeExecMethods
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ReplaceDuplicateStringLiterals
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ReplaceLambdaWithMethodReference
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ReplaceOptionalIsPresentWithIfPresent
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ReplaceOptionalIsPresentWithIfPresent
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ReplaceRedundantFormatWithPrintf
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ReplaceRedundantFormatWithPrintf
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ReplaceStackWithDeque
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ReplaceStackWithDeque
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ReplaceStreamToListWithCollect
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ReplaceStreamToListWithCollect
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ReplaceStringBuilderWithString
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ReplaceStringBuilderWithString
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ReplaceTextBlockWithString
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ReplaceTextBlockWithString
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.ReplaceValidateNotNullHavingVarargsWithObjectsRequireNonNull
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.ReplaceValidateNotNullHavingVarargsWithObjectsRequireNonNull
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.SimplifyBooleanExpression
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.SimplifyBooleanExpression
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.SimplifyBooleanReturn
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.SimplifyBooleanReturn
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.SimplifyCompoundStatement
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.SimplifyCompoundStatement
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.SimplifyConsecutiveAssignments
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.SimplifyConsecutiveAssignments
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.SimplifyConstantIfBranchExecution
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.SimplifyConstantIfBranchExecution
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.SimplifyDurationCreationUnits
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.SimplifyDurationCreationUnits
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.StaticMethodNotFinal
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.StaticMethodNotFinal
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.StringLiteralEquality
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.StringLiteralEquality
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.TypecastParenPad
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.TypecastParenPad
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UnnecessaryCatch
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UnnecessaryCatch
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UnnecessaryCloseInTryWithResources
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UnnecessaryCloseInTryWithResources
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UnnecessaryExplicitTypeArguments
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UnnecessaryExplicitTypeArguments
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UnnecessaryPrimitiveAnnotations
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UnnecessaryPrimitiveAnnotations
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UnnecessaryParentheses
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UnnecessaryParentheses
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UnnecessaryThrows
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UnnecessaryThrows
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UnwrapRepeatableAnnotations
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UnwrapRepeatableAnnotations
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UpperCaseLiteralSuffixes
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UpperCaseLiteralSuffixes
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UseAsBuilder
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UseAsBuilder
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UseCollectionInterfaces
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UseCollectionInterfaces
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UseDiamondOperator
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UseDiamondOperator
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UseForEachRemoveInsteadOfSetRemoveAll
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UseForEachRemoveInsteadOfSetRemoveAll
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UseJavaStyleArrayDeclarations
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UseJavaStyleArrayDeclarations
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UseLambdaForFunctionalInterface
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UseLambdaForFunctionalInterface
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UseObjectNotifyAll
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UseObjectNotifyAll
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UseStandardCharset
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UseStandardCharset
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UseStringReplace
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UseStringReplace
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UseSystemLineSeparator
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UseSystemLineSeparator
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.WhileInsteadOfFor
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.WhileInsteadOfFor
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.WriteOctalValuesAsDecimal
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.WriteOctalValuesAsDecimal
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.gradle.plugins.AddGradleEnterprise
      newRecipeFullyQualifiedClassName: org.openrewrite.gradle.plugins.AddGradleEnterpriseGradlePlugin

```
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](mailto:kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.upgrade.UpdateStaticAnalysisPackage)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
