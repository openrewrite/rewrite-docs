# Common static analysis issues

** org.openrewrite.java.cleanup.CommonStaticAnalysis**
_Resolve common static analysis issues discovered through 3rd party tools_

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.18.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.18.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.10")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.CommonStaticAnalysis")
}

repositories {
    mavenCentral()
}

```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.CommonStaticAnalysis</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.cleanup.CommonStaticAnalysis`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add `serialVersionUID` to a `Serializable` class when missing](../../java/cleanup/addserialversionuidtoserializable.md)
* [Atomic Boolean, Integer, and Long equality checks compare their values](../../java/cleanup/atomicprimitiveequalsusesget.md)
* [`BigDecimal` rounding constants to `RoundingMode` enums](../../java/cleanup/bigdecimalroundingconstantstoenums.md)
* [Boolean checks should not be inverted](../../java/cleanup/booleanchecksnotinverted.md)
* [CaseInsensitive comparisons do not alter case](../../java/cleanup/caseinsensitivecomparisonsdonotchangecase.md)
* [Catch clause should do more than just rethrow](../../java/cleanup/catchclauseonlyrethrows.md)
* [Control flow statement indentation](../../java/cleanup/controlflowindentation.md)
* [Covariant equals](../../java/cleanup/covariantequals.md)
* [Default comes last](../../java/cleanup/defaultcomeslast.md)
* [Equals avoids null](../../java/cleanup/equalsavoidsnull.md)
* [Explicit initialization](../../java/cleanup/explicitinitialization.md)
* [`Externalizable` classes have no-arguments constructor](../../java/cleanup/externalizablehasnoargsconstructor.md)
* [Fall through](../../java/cleanup/fallthrough.md)
* [Finalize classes with private constructors](../../java/cleanup/finalclass.md)
* [`for` loop counters incremented in update](../../java/cleanup/forloopincrementinupdate.md)
* [Hidden field](../../java/cleanup/hiddenfield.md)
* [Hide utility class constructor](../../java/cleanup/hideutilityclassconstructor.md)
* [Use `indexOf(String, int)`](../../java/cleanup/indexofchecksshoulduseastartposition.md)
* [`indexOf()` replaceable by `contains()`](../../java/cleanup/indexofreplaceablebycontains.md)
* [`indexOf` should not compare greater than zero](../../java/cleanup/indexofshouldnotcomparegreaterthanzero.md)
* [Use `Collections#isEmpty()` instead of comparing `size()`](../../java/cleanup/isemptycalloncollections.md)
* [Simplify lambda blocks to expressions](../../java/cleanup/lambdablocktoexpression.md)
* [Method name casing](../../java/cleanup/methodnamecasing.md)
* [`switch` statements should have at least 3 `case` clauses](../../java/cleanup/minimumswitchcases.md)
* [Modifier order](../../java/cleanup/modifierorder.md)
* [Multiple variable declarations](../../java/cleanup/multiplevariabledeclarations.md)
* [Nested enums are not static](../../java/cleanup/nestedenumsarenotstatic.md)
* [Change StringBuilder and StringBuffer character constructor arg to String](../../java/cleanup/newstringbuilderbufferwithcharargument.md)
* [No double brace initialization](../../java/cleanup/nodoublebraceinitialization.md)
* [Use `Collections#emptyList()`, `emptyMap()`, and `emptySet()`](../../java/cleanup/noemptycollectionwithrawtype.md)
* [Use comparison rather than equality checks in for conditions](../../java/cleanup/noequalityinforcondition.md)
* [Remove `finalize()` method](../../java/cleanup/nofinalizer.md)
* [No primitive wrappers for #toString() or #compareTo(..)](../../java/cleanup/noprimitivewrappersfortostringorcompareto.md)
* [Jump statements should not be redundant](../../java/cleanup/noredundantjumpstatements.md)
* [Unnecessary String#toString()](../../java/cleanup/notostringonstringtype.md)
* [Unnecessary String#valueOf(..)](../../java/cleanup/novalueofonstringtype.md)
* [`finalize()` calls super](../../java/cleanup/objectfinalizecallssuper.md)
* [Use primitive wrapper `valueOf` method](../../java/cleanup/primitivewrapperclassconstructortovalueof.md)
* [Redundant file creation](../../java/cleanup/redundantfilecreation.md)
* [Remove extra semicolons](../../java/cleanup/removeextrasemicolons.md)
* [Remove unused local variables](../../java/cleanup/removeunusedlocalvariables.md)
* [Reformat local variable names to camelCase](../../java/cleanup/renamelocalvariablestocamelcase.md)
* [Simplify boolean expression](../../java/cleanup/simplifybooleanexpression.md)
* [Simplify boolean return](../../java/cleanup/simplifybooleanreturn.md)
* [Static methods not final](../../java/cleanup/staticmethodnotfinal.md)
* [Use `String.equals()` on String literals](../../java/cleanup/stringliteralequality.md)
* [Unnecessary close in try-with-resources](../../java/cleanup/unnecessarycloseintrywithresources.md)
* [Unnecessary explicit type arguments](../../java/cleanup/unnecessaryexplicittypearguments.md)
* [Remove unnecessary parentheses](../../java/cleanup/unnecessaryparentheses.md)
* [Remove Nullable and CheckForNull annotations from primitives](../../java/cleanup/unnecessaryprimitiveannotations.md)
* [Unnecessary throws](../../java/cleanup/unnecessarythrows.md)
* [Use `Collection` interfaces](../../java/cleanup/usecollectioninterfaces.md)
* [Use diamond operator](../../java/cleanup/usediamondoperator.md)
* [No C-style array declarations](../../java/cleanup/usejavastylearraydeclarations.md)
* [Use lambdas where possible](../../java/cleanup/uselambdaforfunctionalinterface.md)
* [Prefer `while` over `for` loops](../../java/cleanup/whileinsteadoffor.md)
* [Write octal values as decimal](../../java/cleanup/writeoctalvaluesasdecimal.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.cleanup.CommonStaticAnalysis
displayName: Common static analysis issues
description: Resolve common static analysis issues discovered through 3rd party tools
recipeList:
  - org.openrewrite.java.cleanup.AddSerialVersionUidToSerializable
  - org.openrewrite.java.cleanup.AtomicPrimitiveEqualsUsesGet
  - org.openrewrite.java.cleanup.BigDecimalRoundingConstantsToEnums
  - org.openrewrite.java.cleanup.BooleanChecksNotInverted
  - org.openrewrite.java.cleanup.CaseInsensitiveComparisonsDoNotChangeCase
  - org.openrewrite.java.cleanup.CatchClauseOnlyRethrows
  - org.openrewrite.java.cleanup.ControlFlowIndentation
  - org.openrewrite.java.cleanup.CovariantEquals
  - org.openrewrite.java.cleanup.DefaultComesLast
  - org.openrewrite.java.cleanup.EqualsAvoidsNull
  - org.openrewrite.java.cleanup.ExplicitInitialization
  - org.openrewrite.java.cleanup.ExternalizableHasNoArgsConstructor
  - org.openrewrite.java.cleanup.FallThrough
  - org.openrewrite.java.cleanup.FinalClass
  - org.openrewrite.java.cleanup.ForLoopIncrementInUpdate
  - org.openrewrite.java.cleanup.HiddenField
  - org.openrewrite.java.cleanup.HideUtilityClassConstructor
  - org.openrewrite.java.cleanup.IndexOfChecksShouldUseAStartPosition
  - org.openrewrite.java.cleanup.IndexOfReplaceableByContains
  - org.openrewrite.java.cleanup.IndexOfShouldNotCompareGreaterThanZero
  - org.openrewrite.java.cleanup.IsEmptyCallOnCollections
  - org.openrewrite.java.cleanup.LambdaBlockToExpression
  - org.openrewrite.java.cleanup.MethodNameCasing
  - org.openrewrite.java.cleanup.MinimumSwitchCases
  - org.openrewrite.java.cleanup.ModifierOrder
  - org.openrewrite.java.cleanup.MultipleVariableDeclarations
  - org.openrewrite.java.cleanup.NestedEnumsAreNotStatic
  - org.openrewrite.java.cleanup.NewStringBuilderBufferWithCharArgument
  - org.openrewrite.java.cleanup.NoDoubleBraceInitialization
  - org.openrewrite.java.cleanup.NoEmptyCollectionWithRawType
  - org.openrewrite.java.cleanup.NoEqualityInForCondition
  - org.openrewrite.java.cleanup.NoFinalizer
  - org.openrewrite.java.cleanup.NoPrimitiveWrappersForToStringOrCompareTo
  - org.openrewrite.java.cleanup.NoRedundantJumpStatements
  - org.openrewrite.java.cleanup.NoToStringOnStringType
  - org.openrewrite.java.cleanup.NoValueOfOnStringType
  - org.openrewrite.java.cleanup.ObjectFinalizeCallsSuper
  - org.openrewrite.java.cleanup.PrimitiveWrapperClassConstructorToValueOf
  - org.openrewrite.java.cleanup.RedundantFileCreation
  - org.openrewrite.java.cleanup.RemoveExtraSemicolons
  - org.openrewrite.java.cleanup.RemoveUnusedLocalVariables:
  - org.openrewrite.java.cleanup.RenameLocalVariablesToCamelCase
  - org.openrewrite.java.cleanup.SimplifyBooleanExpression
  - org.openrewrite.java.cleanup.SimplifyBooleanReturn
  - org.openrewrite.java.cleanup.StaticMethodNotFinal
  - org.openrewrite.java.cleanup.StringLiteralEquality
  - org.openrewrite.java.cleanup.UnnecessaryCloseInTryWithResources
  - org.openrewrite.java.cleanup.UnnecessaryExplicitTypeArguments
  - org.openrewrite.java.cleanup.UnnecessaryParentheses
  - org.openrewrite.java.cleanup.UnnecessaryPrimitiveAnnotations
  - org.openrewrite.java.cleanup.UnnecessaryThrows
  - org.openrewrite.java.cleanup.UseCollectionInterfaces
  - org.openrewrite.java.cleanup.UseDiamondOperator
  - org.openrewrite.java.cleanup.UseJavaStyleArrayDeclarations
  - org.openrewrite.java.cleanup.UseLambdaForFunctionalInterface
  - org.openrewrite.java.cleanup.WhileInsteadOfFor
  - org.openrewrite.java.cleanup.WriteOctalValuesAsDecimal

```
{% endtab %}
{% endtabs %}
