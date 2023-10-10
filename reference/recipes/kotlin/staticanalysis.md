# Kotlin Common Static Analysis

**org.openrewrite.kotlin.StaticAnalysis**

_Static analysis fixes for Kotlin sources._

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/common-static-analysis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.8/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.8


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.8` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.18")
}

rewrite {
    activeRecipe("org.openrewrite.kotlin.StaticAnalysis")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.8")
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
    dependencies { classpath("org.openrewrite:plugin:6.3.18") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.8")
    }
    rewrite {
        activeRecipe("org.openrewrite.kotlin.StaticAnalysis")
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
            <recipe>org.openrewrite.kotlin.StaticAnalysis</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.8</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.kotlin.StaticAnalysis
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add `serialVersionUID` to a `Serializable` class when missing](../staticanalysis/addserialversionuidtoserializable.md)
* [Atomic Boolean, Integer, and Long equality checks compare their values](../staticanalysis/atomicprimitiveequalsusesget.md)
* [`BigDecimal` rounding constants to `RoundingMode` enums](../staticanalysis/bigdecimalroundingconstantstoenums.md)
* [Boolean checks should not be inverted](../staticanalysis/booleanchecksnotinverted.md)
* [CaseInsensitive comparisons do not alter case](../staticanalysis/caseinsensitivecomparisonsdonotchangecase.md)
* [Catch clause should do more than just rethrow](../staticanalysis/catchclauseonlyrethrows.md)
* [Chain `StringBuilder.append()` calls](../staticanalysis/chainstringbuilderappendcalls.md)
* [Covariant equals](../staticanalysis/covariantequals.md)
* [Default comes last](../staticanalysis/defaultcomeslast.md)
* [Remove empty blocks](../staticanalysis/emptyblock.md)
* [Equals avoids null](../staticanalysis/equalsavoidsnull.md)
* [Explicit initialization](../staticanalysis/explicitinitialization.md)
* [`Externalizable` classes have no-arguments constructor](../staticanalysis/externalizablehasnoargsconstructor.md)
* [Finalize private fields](../staticanalysis/finalizeprivatefields.md)
* [Fall through](../staticanalysis/fallthrough.md)
* [Fix `String#format` and `String#formatted` expressions](../staticanalysis/fixstringformatexpressions.md)
* [`for` loop counters incremented in update](../staticanalysis/forloopincrementinupdate.md)
* [Use `indexOf(String, int)`](../staticanalysis/indexofchecksshoulduseastartposition.md)
* [`indexOf()` replaceable by `contains()`](../staticanalysis/indexofreplaceablebycontains.md)
* [`indexOf` should not compare greater than zero](../staticanalysis/indexofshouldnotcomparegreaterthanzero.md)
* [Inline variable](../staticanalysis/inlinevariable.md)
* [Use `Collection#isEmpty()` instead of comparing `size()`](../staticanalysis/isemptycalloncollections.md)
* [Simplify lambda blocks to expressions](../staticanalysis/lambdablocktoexpression.md)
* [Rename packages to lowercase](../staticanalysis/lowercasepackage.md)
* [Method name casing](../staticanalysis/methodnamecasing.md)
* [`switch` statements should have at least 3 `case` clauses](../staticanalysis/minimumswitchcases.md)
* [Modifier order](../staticanalysis/modifierorder.md)
* [Fix missing braces](../staticanalysis/needbraces.md)
* [Nested enums are not static](../staticanalysis/nestedenumsarenotstatic.md)
* [Change `StringBuilder` and `StringBuffer` character constructor argument to `String`](../staticanalysis/newstringbuilderbufferwithcharargument.md)
* [No double brace initialization](../staticanalysis/nodoublebraceinitialization.md)
* [Use `Collections#emptyList()`, `emptyMap()`, and `emptySet()`](../staticanalysis/noemptycollectionwithrawtype.md)
* [Use comparison rather than equality checks in for conditions](../staticanalysis/noequalityinforcondition.md)
* [Remove `finalize()` method](../staticanalysis/nofinalizer.md)
* [No primitive wrappers for #toString() or #compareTo(..)](../staticanalysis/noprimitivewrappersfortostringorcompareto.md)
* [Jump statements should not be redundant](../staticanalysis/noredundantjumpstatements.md)
* [Unnecessary String#toString()](../staticanalysis/notostringonstringtype.md)
* [Unnecessary String#valueOf(..)](../staticanalysis/novalueofonstringtype.md)
* [`finalize()` calls super](../staticanalysis/objectfinalizecallssuper.md)
* [Use primitive wrapper `valueOf` method](../staticanalysis/primitivewrapperclassconstructortovalueof.md)
* [Redundant file creation](../staticanalysis/redundantfilecreation.md)
* [Remove extra semicolons](../staticanalysis/removeextrasemicolons.md)
* [Reformat local variable names to camelCase](../staticanalysis/renamelocalvariablestocamelcase.md)
* [Rename methods named `hashcode`, `equal`, or `tostring`](../staticanalysis/renamemethodsnamedhashcodeequalortostring.md)
* [Reformat private field names to camelCase](../staticanalysis/renameprivatefieldstocamelcase.md)
* [Replace StringBuilder.append() with String](../staticanalysis/replacestringbuilderwithstring.md)
* [Simplify boolean expression](../staticanalysis/simplifybooleanexpression.md)
* [Simplify boolean return](../staticanalysis/simplifybooleanreturn.md)
* [Static methods not final](../staticanalysis/staticmethodnotfinal.md)
* [Unnecessary close in try-with-resources](../staticanalysis/unnecessarycloseintrywithresources.md)
* [Remove unnecessary parentheses](../staticanalysis/unnecessaryparentheses.md)
* [Remove Nullable and CheckForNull annotations from primitives](../staticanalysis/unnecessaryprimitiveannotations.md)
* [Upper case literal suffixes](../staticanalysis/uppercaseliteralsuffixes.md)
* [Use diamond operator](../staticanalysis/usediamondoperator.md)
* [No C-style array declarations](../staticanalysis/usejavastylearraydeclarations.md)
* [Prefer `while` over `for` loops](../staticanalysis/whileinsteadoffor.md)
* [Write octal values as decimal](../staticanalysis/writeoctalvaluesasdecimal.md)
* [Structural equality tests should use "==" or "!="](../kotlin/cleanup/equalsmethodusage.md)
* ["it" shouldn't be used as a lambda parameter name](../kotlin/cleanup/implicitparameterinlambda.md)
* [Replace `Char#toInt()` with `Char#code`](../kotlin/cleanup/replacechartointwithcode.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.kotlin.StaticAnalysis
displayName: Kotlin Common Static Analysis
description: Static analysis fixes for Kotlin sources.
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
  - org.openrewrite.staticanalysis.MinimumSwitchCases
  - org.openrewrite.staticanalysis.ModifierOrder
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
  - org.openrewrite.staticanalysis.ReplaceStringBuilderWithString
  - org.openrewrite.staticanalysis.SimplifyBooleanExpression
  - org.openrewrite.staticanalysis.SimplifyBooleanReturn
  - org.openrewrite.staticanalysis.StaticMethodNotFinal
  - org.openrewrite.staticanalysis.UnnecessaryCloseInTryWithResources
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
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* Patrick Way
* [Knut Wannheden](mailto:knut@moderne.io)
* [Kun Li](mailto:kun@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* Guliver
* [Tim te Beek](mailto:tim@moderne.io)
* Tyler Van Gorder
* Kun Li
* [Peter Streef](mailto:p.streef@gmail.com)
* Tyler Van Gorder
* Josh Soref
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* [Grzegorz Olędzki](mailto:grzegon@poczta.onet.pl)
* [Knut Wannheden](mailto:knut.wannheden@mobi.ch)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [xshen053](mailto:shenxiaxi26@gmail.com)
* [Greg Adams](mailto:greg@moderne.io)
* [Knut Wannheden](mailto:knut.wannheden@gmail.com)
* [pstreef](mailto:p.streef@gmail.com)
* Mike Sol
* mrbitrary
* [Tim te Beek](mailto:timtebeek@gmail.com)
* [Scott Jungling](mailto:scott.jungling@gmail.com)
* [Martin Panzer](mailto:postremus1996@googlemail.com)
* [Mike Solomon](mailto:mike@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kotlin.StaticAnalysis)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
