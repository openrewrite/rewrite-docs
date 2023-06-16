# Common static analysis issues

**org.openrewrite.python.cleanup.CommonStaticAnalysis**

_Resolve common static analysis issues discovered through 3rd party tools._

## Source

[GitHub](https://github.com/openrewrite/rewrite-python/blob/main/src/main/resources/META-INF/rewrite/static-analysis-cleanup.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-python/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/1.0.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-python
* version: 1.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite:rewrite-python:1.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.python.cleanup.CommonStaticAnalysis")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-python:1.0.1")
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
            <recipe>org.openrewrite.python.cleanup.CommonStaticAnalysis</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-python</artifactId>
            <version>1.0.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite:rewrite-python:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.python.cleanup.CommonStaticAnalysis
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add `serialVersionUID` to a `Serializable` class when missing](../../staticanalysis/addserialversionuidtoserializable.md)
* [Atomic Boolean, Integer, and Long equality checks compare their values](../../staticanalysis/atomicprimitiveequalsusesget.md)
* [`BigDecimal` rounding constants to `RoundingMode` enums](../../staticanalysis/bigdecimalroundingconstantstoenums.md)
* [Boolean checks should not be inverted](../../staticanalysis/booleanchecksnotinverted.md)
* [CaseInsensitive comparisons do not alter case](../../staticanalysis/caseinsensitivecomparisonsdonotchangecase.md)
* [Catch clause should do more than just rethrow](../../staticanalysis/catchclauseonlyrethrows.md)
* [Chain `StringBuilder.append()` calls](../../staticanalysis/chainstringbuilderappendcalls.md)
* [Covariant equals](../../staticanalysis/covariantequals.md)
* [Default comes last](../../staticanalysis/defaultcomeslast.md)
* [Remove empty blocks](../../staticanalysis/emptyblock.md)
* [Equals avoids null](../../staticanalysis/equalsavoidsnull.md)
* [Explicit initialization](../../staticanalysis/explicitinitialization.md)
* [`Externalizable` classes have no-arguments constructor](../../staticanalysis/externalizablehasnoargsconstructor.md)
* [Finalize private fields](../../staticanalysis/finalizeprivatefields.md)
* [Fall through](../../staticanalysis/fallthrough.md)
* [Finalize classes with private constructors](../../staticanalysis/finalclass.md)
* [Fix `String#format` and `String#formatted` expressions](../../staticanalysis/fixstringformatexpressions.md)
* [`for` loop counters incremented in update](../../staticanalysis/forloopincrementinupdate.md)
* [Use `indexOf(String, int)`](../../staticanalysis/indexofchecksshoulduseastartposition.md)
* [`indexOf()` replaceable by `contains()`](../../staticanalysis/indexofreplaceablebycontains.md)
* [`indexOf` should not compare greater than zero](../../staticanalysis/indexofshouldnotcomparegreaterthanzero.md)
* [Inline variable](../../staticanalysis/inlinevariable.md)
* [Use `Collection#isEmpty()` instead of comparing `size()`](../../staticanalysis/isemptycalloncollections.md)
* [Simplify lambda blocks to expressions](../../staticanalysis/lambdablocktoexpression.md)
* [Rename packages to lowercase](../../staticanalysis/lowercasepackage.md)
* [Method name casing](../../staticanalysis/methodnamecasing.md)
* [No multiple variable declarations](../../staticanalysis/multiplevariabledeclarations.md)
* [Fix missing braces](../../staticanalysis/needbraces.md)
* [Nested enums are not static](../../staticanalysis/nestedenumsarenotstatic.md)
* [Change `StringBuilder` and `StringBuffer` character constructor argument to `String`](../../staticanalysis/newstringbuilderbufferwithcharargument.md)
* [No double brace initialization](../../staticanalysis/nodoublebraceinitialization.md)
* [Use `Collections#emptyList()`, `emptyMap()`, and `emptySet()`](../../staticanalysis/noemptycollectionwithrawtype.md)
* [Use comparison rather than equality checks in for conditions](../../staticanalysis/noequalityinforcondition.md)
* [Remove `finalize()` method](../../staticanalysis/nofinalizer.md)
* [No primitive wrappers for #toString() or #compareTo(..)](../../staticanalysis/noprimitivewrappersfortostringorcompareto.md)
* [Jump statements should not be redundant](../../staticanalysis/noredundantjumpstatements.md)
* [Unnecessary String#toString()](../../staticanalysis/notostringonstringtype.md)
* [Unnecessary String#valueOf(..)](../../staticanalysis/novalueofonstringtype.md)
* [`finalize()` calls super](../../staticanalysis/objectfinalizecallssuper.md)
* [Use primitive wrapper `valueOf` method](../../staticanalysis/primitivewrapperclassconstructortovalueof.md)
* [Redundant file creation](../../staticanalysis/redundantfilecreation.md)
* [Remove extra semicolons](../../staticanalysis/removeextrasemicolons.md)
* [Reformat local variable names to camelCase](../../staticanalysis/renamelocalvariablestocamelcase.md)
* [Rename methods named `hashcode`, `equal`, or `tostring`](../../staticanalysis/renamemethodsnamedhashcodeequalortostring.md)
* [Reformat private field names to camelCase](../../staticanalysis/renameprivatefieldstocamelcase.md)
* [Use method references in lambda](../../staticanalysis/replacelambdawithmethodreference.md)
* [Replace StringBuilder.append() with String](../../staticanalysis/replacestringbuilderwithstring.md)
* [Simplify boolean expression](../../java/cleanup/simplifybooleanexpression.md)
* [Static methods not final](../../staticanalysis/staticmethodnotfinal.md)
* [Use `String.equals()` on String literals](../../staticanalysis/stringliteralequality.md)
* [Unnecessary close in try-with-resources](../../staticanalysis/unnecessarycloseintrywithresources.md)
* [Unnecessary explicit type arguments](../../staticanalysis/unnecessaryexplicittypearguments.md)
* [Remove Nullable and CheckForNull annotations from primitives](../../staticanalysis/unnecessaryprimitiveannotations.md)
* [Upper case literal suffixes](../../staticanalysis/uppercaseliteralsuffixes.md)
* [Use diamond operator](../../staticanalysis/usediamondoperator.md)
* [No C-style array declarations](../../staticanalysis/usejavastylearraydeclarations.md)
* [Use lambda expressions instead of anonymous classes](../../staticanalysis/uselambdaforfunctionalinterface.md)
* [Prefer `while` over `for` loops](../../staticanalysis/whileinsteadoffor.md)
* [Write octal values as decimal](../../staticanalysis/writeoctalvaluesasdecimal.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.python.cleanup.CommonStaticAnalysis
displayName: Common static analysis issues
description: Resolve common static analysis issues discovered through 3rd party tools.
recipeList:
  - org.openrewrite.staticanalysis.AddSerialVersionUidToSerializable
  - org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet
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
  - org.openrewrite.staticanalysis.LowercasePackage
  - org.openrewrite.staticanalysis.MethodNameCasing:
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
  - org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrTostring
  - org.openrewrite.staticanalysis.RenamePrivateFieldsToCamelCase
  - org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference
  - org.openrewrite.staticanalysis.ReplaceStringBuilderWithString
  - org.openrewrite.java.cleanup.SimplifyBooleanExpression
  - org.openrewrite.staticanalysis.StaticMethodNotFinal
  - org.openrewrite.staticanalysis.StringLiteralEquality
  - org.openrewrite.staticanalysis.UnnecessaryCloseInTryWithResources
  - org.openrewrite.staticanalysis.UnnecessaryExplicitTypeArguments
  - org.openrewrite.staticanalysis.UnnecessaryPrimitiveAnnotations
  - org.openrewrite.staticanalysis.UpperCaseLiteralSuffixes
  - org.openrewrite.staticanalysis.UseDiamondOperator
  - org.openrewrite.staticanalysis.UseJavaStyleArrayDeclarations
  - org.openrewrite.staticanalysis.UseLambdaForFunctionalInterface
  - org.openrewrite.staticanalysis.WhileInsteadOfFor
  - org.openrewrite.staticanalysis.WriteOctalValuesAsDecimal

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.python.cleanup.CommonStaticAnalysis)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
