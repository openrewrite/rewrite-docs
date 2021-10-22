# Code cleanup

** org.openrewrite.java.cleanup.Cleanup**
_Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.15.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.15.1


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.13.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.Cleanup")
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
        <version>4.13.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.Cleanup</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.cleanup.Cleanup`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [CaseInsensitive comparisons do not alter case](../../java/cleanup/caseinsensitivecomparisonsdonotchangecase.md)
* [Covariant equals](../../java/cleanup/covariantequals.md)
* [Remove empty blocks](../../java/cleanup/emptyblock.md)
* [Equals avoids null](../../java/cleanup/equalsavoidsnull.md)
* [Explicit initialization](../../java/cleanup/explicitinitialization.md)
* [Hide utility class constructor](../../java/cleanup/hideutilityclassconstructor.md)
* [Modifier order](../../java/cleanup/modifierorder.md)
* [Nested enums are not static](../../java/cleanup/nestedenumsarenotstatic.md)
* [Change StringBuilder and StringBuffer character constructor arg to String](../../java/cleanup/newstringbuilderbufferwithcharargument.md)
* [No double brace initialization](../../java/cleanup/nodoublebraceinitialization.md)
* [No #toString() on String](../../java/cleanup/notostringonstringtype.md)
* [Use `String`](../../java/cleanup/novalueofonstringtype.md)
* [Redundant file creation](../../java/cleanup/redundantfilecreation.md)
* [Simplify boolean expression](../../java/cleanup/simplifybooleanexpression.md)
* [Simplify boolean return](../../java/cleanup/simplifybooleanreturn.md)
* [Static methods not final](../../java/cleanup/staticmethodnotfinal.md)
* [Unnecessary explicit type arguments](../../java/cleanup/unnecessaryexplicittypearguments.md)
* [Remove unnecessary parentheses](../../java/cleanup/unnecessaryparentheses.md)
* [Unnecessary throws](../../java/cleanup/unnecessarythrows.md)
* [Use diamond operator](../../java/cleanup/usediamondoperator.md)
* [Remove Nullable and CheckForNull annotations from primitives](../../java/cleanup/unnecessaryprimitiveannotations.md)
* [No C-style array declarations](../../java/cleanup/usejavastylearraydeclarations.md)
* [Use primitive wrapper `valueOf` method](../../java/cleanup/primitivewrapperclassconstructortovalueof.md)
* [`BigDecimal` rounding constants to `RoundingMode` enums](../../java/cleanup/bigdecimalroundingconstantstoenums.md)
* [Finalize classes with private constructors](../../java/cleanup/finalclass.md)
* [Pad empty `for` loop components](../../java/cleanup/pademptyforloopcomponents.md)
* [Catch clause should do more than just rethrow](../../java/cleanup/catchclauseonlyrethrows.md)
* [Control flow statement indentation](../../java/cleanup/controlflowindentation.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.cleanup.Cleanup
displayName: Code cleanup
description: Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions.
recipeList:
  - org.openrewrite.java.cleanup.CaseInsensitiveComparisonsDoNotChangeCase
  - org.openrewrite.java.cleanup.CovariantEquals
  - org.openrewrite.java.cleanup.EmptyBlock
  - org.openrewrite.java.cleanup.EqualsAvoidsNull
  - org.openrewrite.java.cleanup.ExplicitInitialization
  - org.openrewrite.java.cleanup.HideUtilityClassConstructor
  - org.openrewrite.java.cleanup.ModifierOrder
  - org.openrewrite.java.cleanup.NestedEnumsAreNotStatic
  - org.openrewrite.java.cleanup.NewStringBuilderBufferWithCharArgument
  - org.openrewrite.java.cleanup.NoDoubleBraceInitialization
  - org.openrewrite.java.cleanup.NoToStringOnStringType
  - org.openrewrite.java.cleanup.NoValueOfOnStringType
  - org.openrewrite.java.cleanup.RedundantFileCreation
  - org.openrewrite.java.cleanup.SimplifyBooleanExpression
  - org.openrewrite.java.cleanup.SimplifyBooleanReturn
  - org.openrewrite.java.cleanup.StaticMethodNotFinal
  - org.openrewrite.java.cleanup.UnnecessaryExplicitTypeArguments
  - org.openrewrite.java.cleanup.UnnecessaryParentheses
  - org.openrewrite.java.cleanup.UnnecessaryThrows
  - org.openrewrite.java.cleanup.UseDiamondOperator
  - org.openrewrite.java.cleanup.UnnecessaryPrimitiveAnnotations
  - org.openrewrite.java.cleanup.UseJavaStyleArrayDeclarations
  - org.openrewrite.java.cleanup.PrimitiveWrapperClassConstructorToValueOf
  - org.openrewrite.java.cleanup.BigDecimalRoundingConstantsToEnums
  - org.openrewrite.java.cleanup.FinalClass
  - org.openrewrite.java.cleanup.PadEmptyForLoopComponents
  - org.openrewrite.java.cleanup.CatchClauseOnlyRethrows
  - org.openrewrite.java.cleanup.ControlFlowIndentation

```
{% endtab %}
{% endtabs %}
