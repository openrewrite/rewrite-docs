# Common static analysis issues

**org.openrewrite.java.cleanup.CommonStaticAnalysis** _Resolve common static analysis issues discovered through 3rd party tools._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.33.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.33.0

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
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

{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.37.0</version>
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

{% tab title="Maven Command Line" %}
{% code title="shell" %}
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -DactiveRecipes=org.openrewrite.java.cleanup.CommonStaticAnalysis
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.cleanup.CommonStaticAnalysis`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add `serialVersionUID` to a `Serializable` class when missing](addserialversionuidtoserializable.md)
* [Atomic Boolean, Integer, and Long equality checks compare their values](atomicprimitiveequalsusesget.md)
* [`BigDecimal` rounding constants to `RoundingMode` enums](bigdecimalroundingconstantstoenums.md)
* [Boolean checks should not be inverted](booleanchecksnotinverted.md)
* [CaseInsensitive comparisons do not alter case](caseinsensitivecomparisonsdonotchangecase.md)
* [Catch clause should do more than just rethrow](catchclauseonlyrethrows.md)
* [Covariant equals](covariantequals.md)
* [Default comes last](defaultcomeslast.md)
* [Remove empty blocks](emptyblock.md)
* [Equals avoids null](equalsavoidsnull.md)
* [Explicit initialization](explicitinitialization.md)
* [`Externalizable` classes have no-arguments constructor](externalizablehasnoargsconstructor.md)
* [Fall through](fallthrough.md)
* [Finalize classes with private constructors](finalclass.md)
* [Fix `String#format` and `String#formatted` expressions](fixstringformatexpressions.md)
* [`for` loop counters incremented in update](forloopincrementinupdate.md)
* [Use `indexOf(String, int)`](indexofchecksshoulduseastartposition.md)
* [`indexOf()` replaceable by `contains()`](indexofreplaceablebycontains.md)
* [`indexOf` should not compare greater than zero](indexofshouldnotcomparegreaterthanzero.md)
* [Inline variable](inlinevariable.md)
* [Use `Collection#isEmpty()` instead of comparing `size()`](isemptycalloncollections.md)
* [Simplify lambda blocks to expressions](lambdablocktoexpression.md)
* [Rename packages to lowercase](lowercasepackage.md)
* [Method name casing](methodnamecasing.md)
* [`switch` statements should have at least 3 `case` clauses](minimumswitchcases.md)
* [Modifier order](modifierorder.md)
* [No multiple variable declarations](multiplevariabledeclarations.md)
* [Fix missing braces](needbraces.md)
* [Nested enums are not static](nestedenumsarenotstatic.md)
* [Change `StringBuilder` and `StringBuffer` character constructor argument to `String`](newstringbuilderbufferwithcharargument.md)
* [No double brace initialization](nodoublebraceinitialization.md)
* [Use `Collections#emptyList()`, `emptyMap()`, and `emptySet()`](noemptycollectionwithrawtype.md)
* [Use comparison rather than equality checks in for conditions](noequalityinforcondition.md)
* [Remove `finalize()` method](nofinalizer.md)
* [No primitive wrappers for #toString() or #compareTo(..)](noprimitivewrappersfortostringorcompareto.md)
* [Jump statements should not be redundant](noredundantjumpstatements.md)
* [Unnecessary String#toString()](notostringonstringtype.md)
* [Unnecessary String#valueOf(..)](novalueofonstringtype.md)
* [`finalize()` calls super](objectfinalizecallssuper.md)
* [Use primitive wrapper `valueOf` method](primitivewrapperclassconstructortovalueof.md)
* [Redundant file creation](redundantfilecreation.md)
* [Remove extra semicolons](removeextrasemicolons.md)
* [Reformat local variable names to camelCase](renamelocalvariablestocamelcase.md)
* [Rename methods named `hashcode`, `equal`, or `tostring`](renamemethodsnamedhashcodeequalortostring.md)
* [Reformat private field names to camelCase](renameprivatefieldstocamelcase.md)
* [Use method references in lambda](replacelambdawithmethodreference.md)
* [Simplify boolean expression](simplifybooleanexpression.md)
* [Simplify boolean return](simplifybooleanreturn.md)
* [Static methods not final](staticmethodnotfinal.md)
* [Use `String.equals()` on String literals](stringliteralequality.md)
* [Unnecessary close in try-with-resources](unnecessarycloseintrywithresources.md)
* [Unnecessary explicit type arguments](unnecessaryexplicittypearguments.md)
* [Remove unnecessary parentheses](unnecessaryparentheses.md)
* [Remove Nullable and CheckForNull annotations from primitives](unnecessaryprimitiveannotations.md)
* [Upper case literal suffixes](uppercaseliteralsuffixes.md)
* [Use diamond operator](usediamondoperator.md)
* [No C-style array declarations](usejavastylearraydeclarations.md)
* [Use lambdas where possible](uselambdaforfunctionalinterface.md)
* [Prefer `while` over `for` loops](whileinsteadoffor.md)
* [Write octal values as decimal](writeoctalvaluesasdecimal.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.cleanup.CommonStaticAnalysis
displayName: Common static analysis issues
description: Resolve common static analysis issues discovered through 3rd party tools.
recipeList:
  - org.openrewrite.java.cleanup.AddSerialVersionUidToSerializable
  - org.openrewrite.java.cleanup.AtomicPrimitiveEqualsUsesGet
  - org.openrewrite.java.cleanup.BigDecimalRoundingConstantsToEnums
  - org.openrewrite.java.cleanup.BooleanChecksNotInverted
  - org.openrewrite.java.cleanup.CaseInsensitiveComparisonsDoNotChangeCase
  - org.openrewrite.java.cleanup.CatchClauseOnlyRethrows
  - org.openrewrite.java.cleanup.CovariantEquals
  - org.openrewrite.java.cleanup.DefaultComesLast
  - org.openrewrite.java.cleanup.EmptyBlock
  - org.openrewrite.java.cleanup.EqualsAvoidsNull
  - org.openrewrite.java.cleanup.ExplicitInitialization
  - org.openrewrite.java.cleanup.ExternalizableHasNoArgsConstructor
  - org.openrewrite.java.cleanup.FallThrough
  - org.openrewrite.java.cleanup.FinalClass
  - org.openrewrite.java.cleanup.FixStringFormatExpressions
  - org.openrewrite.java.cleanup.ForLoopIncrementInUpdate
  - org.openrewrite.java.cleanup.IndexOfChecksShouldUseAStartPosition
  - org.openrewrite.java.cleanup.IndexOfReplaceableByContains
  - org.openrewrite.java.cleanup.IndexOfShouldNotCompareGreaterThanZero
  - org.openrewrite.java.cleanup.InlineVariable
  - org.openrewrite.java.cleanup.IsEmptyCallOnCollections
  - org.openrewrite.java.cleanup.LambdaBlockToExpression
  - org.openrewrite.java.cleanup.LowercasePackage
  - org.openrewrite.java.cleanup.MethodNameCasing:
  - org.openrewrite.java.cleanup.MinimumSwitchCases
  - org.openrewrite.java.cleanup.ModifierOrder
  - org.openrewrite.java.cleanup.MultipleVariableDeclarations
  - org.openrewrite.java.cleanup.NeedBraces
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
  - org.openrewrite.java.cleanup.RenameLocalVariablesToCamelCase
  - org.openrewrite.java.cleanup.RenameMethodsNamedHashcodeEqualOrTostring
  - org.openrewrite.java.cleanup.RenamePrivateFieldsToCamelCase
  - org.openrewrite.java.cleanup.ReplaceLambdaWithMethodReference
  - org.openrewrite.java.cleanup.SimplifyBooleanExpression
  - org.openrewrite.java.cleanup.SimplifyBooleanReturn
  - org.openrewrite.java.cleanup.StaticMethodNotFinal
  - org.openrewrite.java.cleanup.StringLiteralEquality
  - org.openrewrite.java.cleanup.UnnecessaryCloseInTryWithResources
  - org.openrewrite.java.cleanup.UnnecessaryExplicitTypeArguments
  - org.openrewrite.java.cleanup.UnnecessaryParentheses
  - org.openrewrite.java.cleanup.UnnecessaryPrimitiveAnnotations
  - org.openrewrite.java.cleanup.UpperCaseLiteralSuffixes
  - org.openrewrite.java.cleanup.UseDiamondOperator
  - org.openrewrite.java.cleanup.UseJavaStyleArrayDeclarations
  - org.openrewrite.java.cleanup.UseLambdaForFunctionalInterface
  - org.openrewrite.java.cleanup.WhileInsteadOfFor
  - org.openrewrite.java.cleanup.WriteOctalValuesAsDecimal
```
{% endtab %}
{% endtabs %}
