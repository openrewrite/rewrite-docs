# Code cleanup

 **org.openrewrite.java.cleanup.Cleanup** _Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions._

## Source

[Github](https://github.com/openrewrite/rewrite-java), [Issue Tracker](https://github.com/openrewrite/rewrite-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.8.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.8.0

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.0")
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
        <version>4.6.0</version>
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
* [Covariant equals](covariantequals.md)
* [Remove empty blocks](emptyblock.md)
* [Equals avoids null](equalsavoidsnull.md)
* [Explicit initialization](explicitinitialization.md)
* [Hide utility class constructor](hideutilityclassconstructor.md)
* [Modifier order](modifierorder.md)
* [Redundant file creation](redundantfilecreation.md)
* [Simplify boolean expression](simplifybooleanexpression.md)
* [Simplify boolean return](simplifybooleanreturn.md)
* [Static methods not final](staticmethodnotfinal.md)
* [Unnecessary explicit type arguments](unnecessaryexplicittypearguments.md)
* [Remove unnecessary parentheses](unnecessaryparentheses.md)
* [Unnecessary throws](unnecessarythrows.md)
* [Use diamond operator](usediamondoperator.md)
* [Use primitive wrapper `valueOf` method](primitivewrapperclassconstructortovalueof.md)
* [`BigDecimal` rounding constants to `RoundingMode` enums](bigdecimalroundingconstantstoenums.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.cleanup.Cleanup
displayName: Code cleanup
description: Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions.
recipeList:
  - org.openrewrite.java.cleanup.CovariantEquals
  - org.openrewrite.java.cleanup.EmptyBlock
  - org.openrewrite.java.cleanup.EqualsAvoidsNull
  - org.openrewrite.java.cleanup.ExplicitInitialization
  - org.openrewrite.java.cleanup.HideUtilityClassConstructor
  - org.openrewrite.java.cleanup.ModifierOrder
  - org.openrewrite.java.cleanup.RedundantFileCreation
  - org.openrewrite.java.cleanup.SimplifyBooleanExpression
  - org.openrewrite.java.cleanup.SimplifyBooleanReturn
  - org.openrewrite.java.cleanup.StaticMethodNotFinal
  - org.openrewrite.java.cleanup.UnnecessaryExplicitTypeArguments
  - org.openrewrite.java.cleanup.UnnecessaryParentheses
  - org.openrewrite.java.cleanup.UnnecessaryThrows
  - org.openrewrite.java.cleanup.UseDiamondOperator
  - org.openrewrite.java.cleanup.PrimitiveWrapperClassConstructorToValueOf
  - org.openrewrite.java.cleanup.BigDecimalRoundingConstantsToEnums
```
{% endtab %}
{% endtabs %}

