# Code cleanup

**org.openrewrite.java.cleanup.Cleanup**

_Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/resources/META-INF/rewrite/cleanup.yml), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/7.40.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.40.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
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
        <version>4.44.0</version>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.cleanup.Cleanup
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Default comes last](../../java/cleanup/defaultcomeslast.md)
* [Remove empty blocks](../../java/cleanup/emptyblock.md)
* [End files with a single newline](../../java/format/emptynewlineatendoffile.md)
* [`for` loop counters should use postfix operators](../../java/cleanup/forloopcontrolvariablepostfixoperators.md)
* [Finalize private fields](../../java/cleanup/finalizeprivatefields.md)
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
* [Replace calls to `Thread.run()` with `Thread.start()`](../../java/cleanup/replacethreadrunwiththreadstart.md)
* [Chain `StringBuilder.append()` calls](../../java/cleanup/chainstringbuilderappendcalls.md)
* [Replace StringBuilder.append() with String](../../java/cleanup/replacestringbuilderwithstring.md)

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
  - org.openrewrite.java.cleanup.FinalizePrivateFields
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
  - org.openrewrite.java.cleanup.ChainStringBuilderAppendCalls
  - org.openrewrite.java.cleanup.ReplaceStringBuilderWithString

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.cleanup.Cleanup)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
