# Code cleanup

**org.openrewrite.java.cleanup.Cleanup** _Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions._

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
    activeRecipe("org.openrewrite.java.cleanup.Cleanup")
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

{% tab title="Maven Command Line" %}
{% code title="shell" %}
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -DactiveRecipes=org.openrewrite.java.cleanup.Cleanup
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.cleanup.Cleanup`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Default comes last](defaultcomeslast.md)
* [Remove empty blocks](emptyblock.md)
* [End files with a single newline](../format/emptynewlineatendoffile.md)
* [`for` loop counters should use postfix operators](forloopcontrolvariablepostfixoperators.md)
* [Method parameter padding](methodparampad.md)
* [No whitespace after](nowhitespaceafter.md)
* [No whitespace before](nowhitespacebefore.md)
* [Pad empty `for` loop components](pademptyforloopcomponents.md)
* [Typecast parenthesis padding](typecastparenpad.md)
* [Equals avoids null](equalsavoidsnull.md)
* [Explicit initialization](explicitinitialization.md)
* [Fall through](fallthrough.md)
* [Hide utility class constructor](hideutilityclassconstructor.md)
* [Fix missing braces](needbraces.md)
* [Operator wrapping](operatorwrap.md)
* [Remove unnecessary parentheses](unnecessaryparentheses.md)
* [Replace calls to `Thread.run()` with `Thread.start()`](replacethreadrunwiththreadstart.md)
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
  - org.openrewrite.java.cleanup.ReplaceThreadRunWithThreadStart
```
{% endtab %}
{% endtabs %}
