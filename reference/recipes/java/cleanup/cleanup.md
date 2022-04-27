# Code cleanup

** org.openrewrite.java.cleanup.Cleanup**
_Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.22.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.22.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.20.0")
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
        <version>4.23.0</version>
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
* [Default comes last](../../java/cleanup/defaultcomeslast.md)
* [Remove empty blocks](../../java/cleanup/emptyblock.md)
* [End files with a single newline](../../java/format/emptynewlineatendoffile.md)
* [Use explicit types on lambda arguments](../../java/cleanup/explicitlambdaargumenttypes.md)
* [`for` loop counters should use postfix operators](../../java/cleanup/forloopcontrolvariablepostfixoperators.md)
* [Method parameter padding](../../java/cleanup/methodparampad.md)
* [No whitespace after](../../java/cleanup/nowhitespaceafter.md)
* [No whitespace before](../../java/cleanup/nowhitespacebefore.md)
* [Pad empty `for` loop components](../../java/cleanup/pademptyforloopcomponents.md)
* [Typecast parenthesis padding](../../java/cleanup/typecastparenpad.md)
* [Equals avoids null](../../java/cleanup/equalsavoidsnull.md)
* [Explicit initialization](../../java/cleanup/explicitinitialization.md)
* [Fall through](../../java/cleanup/fallthrough.md)
* [Hide utility class constructor](../../java/cleanup/hideutilityclassconstructor.md)
* [Fix missing braces](../../java/cleanup/needbraces.md)
* [Operator wrapping](../../java/cleanup/operatorwrap.md)
* [Remove unnecessary parentheses](../../java/cleanup/unnecessaryparentheses.md)
* [Remove redundant casts](../../java/cleanup/removeredundanttypecast.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.cleanup.Cleanup
displayName: Code cleanup
description: Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions.
recipeList:
  - org.openrewrite.java.cleanup.DefaultComesLast
  - org.openrewrite.java.cleanup.EmptyBlock
  - org.openrewrite.java.format.EmptyNewlineAtEndOfFile
  - org.openrewrite.java.cleanup.ExplicitLambdaArgumentTypes
  - org.openrewrite.java.cleanup.ForLoopControlVariablePostfixOperators
  - org.openrewrite.java.cleanup.MethodParamPad
  - org.openrewrite.java.cleanup.NoWhitespaceAfter
  - org.openrewrite.java.cleanup.NoWhitespaceBefore
  - org.openrewrite.java.cleanup.PadEmptyForLoopComponents
  - org.openrewrite.java.cleanup.TypecastParenPad
  - org.openrewrite.java.cleanup.EqualsAvoidsNull
  - org.openrewrite.java.cleanup.ExplicitInitialization
  - org.openrewrite.java.cleanup.FallThrough
  - org.openrewrite.java.cleanup.HideUtilityClassConstructor
  - org.openrewrite.java.cleanup.NeedBraces
  - org.openrewrite.java.cleanup.OperatorWrap
  - org.openrewrite.java.cleanup.UnnecessaryParentheses
  - org.openrewrite.java.cleanup.RemoveRedundantTypeCast

```
{% endtab %}
{% endtabs %}
