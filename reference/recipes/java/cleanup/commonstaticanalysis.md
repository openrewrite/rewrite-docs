# Common static analysis issues

** org.openrewrite.java.cleanup.CommonStaticAnalysis**
_Resolve common static analysis issues discovered through 3rd party tools_

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.16.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.16.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
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
        <version>4.15.0</version>
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
* [Add `SerialVersionUID` to a Serializable class when it's missing.](../../java/cleanup/addserialversionuidtoserializable.md)
* [`BigDecimal` rounding constants to `RoundingMode` enums](../../java/cleanup/bigdecimalroundingconstantstoenums.md)
* [Boolean checks should not be inverted](../../java/cleanup/booleanchecksnotinverted.md)
* [Catch clause should do more than just rethrow](../../java/cleanup/catchclauseonlyrethrows.md)
* [CaseInsensitive comparisons do not alter case](../../java/cleanup/caseinsensitivecomparisonsdonotchangecase.md)
* [Control flow statement indentation](../../java/cleanup/controlflowindentation.md)
* [Covariant equals](../../java/cleanup/covariantequals.md)
* [Default comes last](../../java/cleanup/defaultcomeslast.md)
* [Remove empty blocks](../../java/cleanup/emptyblock.md)
* [End files with a single newline](../../java/format/emptynewlineatendoffile.md)
* [Equals avoids null](../../java/cleanup/equalsavoidsnull.md)
* [Explicit initialization](../../java/cleanup/explicitinitialization.md)
* [Fall through](../../java/cleanup/fallthrough.md)
* [Finalize classes with private constructors](../../java/cleanup/finalclass.md)
* [`for` loop counters incremented in update](../../java/cleanup/forloopincrementinupdate.md)
* [Hidden field](../../java/cleanup/hiddenfield.md)
* [Hide utility class constructor](../../java/cleanup/hideutilityclassconstructor.md)
* [`indexOf()` replaceable by `contains()`](../../java/cleanup/indexofreplaceablebycontains.md)
* [`indexOf` should not compare greater than zero](../../java/cleanup/indexofshouldnotcomparegreaterthanzero.md)
* [Use `Collections#isEmpty()` instead of comparing `size()`](../../java/cleanup/isemptycalloncollections.md)
* [Method name casing](../../java/cleanup/methodnamecasing.md)
* [`switch` statements should have at least 3 `case` clauses](../../java/cleanup/minimumswitchcases.md)
* [Modifier order](../../java/cleanup/modifierorder.md)
* [Multiple variable declarations](../../java/cleanup/multiplevariabledeclarations.md)
* [Fix missing braces](../../java/cleanup/needbraces.md)
* [Nested enums are not static](../../java/cleanup/nestedenumsarenotstatic.md)
* [Change StringBuilder and StringBuffer character constructor arg to String](../../java/cleanup/newstringbuilderbufferwithcharargument.md)
* [No double brace initialization](../../java/cleanup/nodoublebraceinitialization.md)
* [Use comparison rather than equality checks in for conditions](../../java/cleanup/noequalityinforcondition.md)
* [Remove `finalize()` method](../../java/cleanup/nofinalizer.md)
* [Jump statements should not be redundant](../../java/cleanup/noredundantjumpstatements.md)
* [No #toString() on String](../../java/cleanup/notostringonstringtype.md)
* [Unnecessary String#valueOf(..)](../../java/cleanup/novalueofonstringtype.md)
* [Use primitive wrapper `valueOf` method](../../java/cleanup/primitivewrapperclassconstructortovalueof.md)
* [Remove extra semicolons](../../java/cleanup/removeextrasemicolons.md)
* [Remove unused imports](../../java/removeunusedimports.md)
* [Remove unused local variables](../../java/cleanup/removeunusedlocalvariables.md)
* [Remove unused private methods](../../java/cleanup/removeunusedprivatemethods.md)
* [Reformat local variable names to camelCase](../../java/cleanup/renamelocalvariablestocamelcase.md)
* [Simplify boolean expression](../../java/cleanup/simplifybooleanexpression.md)
* [Simplify boolean return](../../java/cleanup/simplifybooleanreturn.md)
* [Static methods not final](../../java/cleanup/staticmethodnotfinal.md)
* [Use `String.equals()` on String literals](../../java/cleanup/stringliteralequality.md)
* [Remove unnecessary parentheses](../../java/cleanup/unnecessaryparentheses.md)
* [Remove Nullable and CheckForNull annotations from primitives](../../java/cleanup/unnecessaryprimitiveannotations.md)
* [Unnecessary throws](../../java/cleanup/unnecessarythrows.md)
* [Use Files#createTempDirectory](../../java/cleanup/usefilescreatetempdirectory.md)
* [No C-style array declarations](../../java/cleanup/usejavastylearraydeclarations.md)
* [Use diamond operator](../../java/cleanup/usediamondoperator.md)
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
  - org.openrewrite.java.cleanup.BigDecimalRoundingConstantsToEnums
  - org.openrewrite.java.cleanup.BooleanChecksNotInverted
  - org.openrewrite.java.cleanup.CatchClauseOnlyRethrows
  - org.openrewrite.java.cleanup.CaseInsensitiveComparisonsDoNotChangeCase
  - org.openrewrite.java.cleanup.ControlFlowIndentation
  - org.openrewrite.java.cleanup.CovariantEquals
  - org.openrewrite.java.cleanup.DefaultComesLast
  - org.openrewrite.java.cleanup.EmptyBlock
  - org.openrewrite.java.format.EmptyNewlineAtEndOfFile
  - org.openrewrite.java.cleanup.EqualsAvoidsNull
  - org.openrewrite.java.cleanup.ExplicitInitialization
  - org.openrewrite.java.cleanup.FallThrough
  - org.openrewrite.java.cleanup.FinalClass
  - org.openrewrite.java.cleanup.ForLoopIncrementInUpdate
  - org.openrewrite.java.cleanup.HiddenField
  - org.openrewrite.java.cleanup.HideUtilityClassConstructor
  - org.openrewrite.java.cleanup.IndexOfReplaceableByContains
  - org.openrewrite.java.cleanup.IndexOfShouldNotCompareGreaterThanZero
  - org.openrewrite.java.cleanup.IsEmptyCallOnCollections
  - org.openrewrite.java.cleanup.MethodNameCasing
  - org.openrewrite.java.cleanup.MinimumSwitchCases
  - org.openrewrite.java.cleanup.ModifierOrder
  - org.openrewrite.java.cleanup.MultipleVariableDeclarations
  - org.openrewrite.java.cleanup.NeedBraces
  - org.openrewrite.java.cleanup.NestedEnumsAreNotStatic
  - org.openrewrite.java.cleanup.NewStringBuilderBufferWithCharArgument
  - org.openrewrite.java.cleanup.NoDoubleBraceInitialization
  - org.openrewrite.java.cleanup.NoEqualityInForCondition
  - org.openrewrite.java.cleanup.NoFinalizer
  - org.openrewrite.java.cleanup.NoRedundantJumpStatements
  - org.openrewrite.java.cleanup.NoToStringOnStringType
  - org.openrewrite.java.cleanup.NoValueOfOnStringType
  - org.openrewrite.java.cleanup.PrimitiveWrapperClassConstructorToValueOf
  - org.openrewrite.java.cleanup.RemoveExtraSemicolons
  - org.openrewrite.java.RemoveUnusedImports
  - org.openrewrite.java.cleanup.RemoveUnusedLocalVariables
  - org.openrewrite.java.cleanup.RemoveUnusedPrivateMethods
  - org.openrewrite.java.cleanup.RenameLocalVariablesToCamelCase
  - org.openrewrite.java.cleanup.SimplifyBooleanExpression
  - org.openrewrite.java.cleanup.SimplifyBooleanReturn
  - org.openrewrite.java.cleanup.StaticMethodNotFinal
  - org.openrewrite.java.cleanup.StringLiteralEquality
  - org.openrewrite.java.cleanup.UnnecessaryParentheses
  - org.openrewrite.java.cleanup.UnnecessaryPrimitiveAnnotations
  - org.openrewrite.java.cleanup.UnnecessaryThrows
  - org.openrewrite.java.cleanup.UseFilesCreateTempDirectory
  - org.openrewrite.java.cleanup.UseJavaStyleArrayDeclarations
  - org.openrewrite.java.cleanup.UseDiamondOperator
  - org.openrewrite.java.cleanup.WhileInsteadOfFor
  - org.openrewrite.java.cleanup.WriteOctalValuesAsDecimal

```
{% endtab %}
{% endtabs %}
