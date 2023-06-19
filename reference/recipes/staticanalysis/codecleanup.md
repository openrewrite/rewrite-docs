# Code cleanup

**org.openrewrite.staticanalysis.CodeCleanup**

_Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions._

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/static-analysis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.CodeCleanup")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.1")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.CodeCleanup</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.CodeCleanup
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Default comes last](../staticanalysis/defaultcomeslast.md)
* [Remove empty blocks](../staticanalysis/emptyblock.md)
* [End files with a single newline](../java/format/emptynewlineatendoffile.md)
* [`for` loop counters should use postfix operators](../staticanalysis/forloopcontrolvariablepostfixoperators.md)
* [Finalize private fields](../staticanalysis/finalizeprivatefields.md)
* [Method parameter padding](../java/format/methodparampad.md)
* [No whitespace after](../java/format/nowhitespaceafter.md)
* [No whitespace before](../java/format/nowhitespacebefore.md)
* [Pad empty `for` loop components](../java/format/pademptyforloopcomponents.md)
* [Typecast parenthesis padding](../staticanalysis/typecastparenpad.md)
* [Equals avoids null](../staticanalysis/equalsavoidsnull.md)
* [Explicit initialization](../staticanalysis/explicitinitialization.md)
* [Fall through](../staticanalysis/fallthrough.md)
* [Hide utility class constructor](../staticanalysis/hideutilityclassconstructor.md)
* [Fix missing braces](../staticanalysis/needbraces.md)
* [Operator wrapping](../staticanalysis/operatorwrap.md)
* [Remove unnecessary parentheses](../java/cleanup/unnecessaryparentheses.md)
* [Replace calls to `Thread.run()` with `Thread.start()`](../staticanalysis/replacethreadrunwiththreadstart.md)
* [Chain `StringBuilder.append()` calls](../staticanalysis/chainstringbuilderappendcalls.md)
* [Replace StringBuilder.append() with String](../staticanalysis/replacestringbuilderwithstring.md)
* [Add imports for fully qualified references to types](../java/shortenfullyqualifiedtypereferences.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.CodeCleanup
displayName: Code cleanup
description: Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions.
recipeList:
  - org.openrewrite.staticanalysis.DefaultComesLast
  - org.openrewrite.staticanalysis.EmptyBlock
  - org.openrewrite.java.format.EmptyNewlineAtEndOfFile
  - org.openrewrite.staticanalysis.ForLoopControlVariablePostfixOperators
  - org.openrewrite.staticanalysis.FinalizePrivateFields
  - org.openrewrite.java.format.MethodParamPad
  - org.openrewrite.java.format.NoWhitespaceAfter
  - org.openrewrite.java.format.NoWhitespaceBefore
  - org.openrewrite.java.format.PadEmptyForLoopComponents
  - org.openrewrite.staticanalysis.TypecastParenPad
  - org.openrewrite.staticanalysis.EqualsAvoidsNull
  - org.openrewrite.staticanalysis.ExplicitInitialization
  - org.openrewrite.staticanalysis.FallThrough
  - org.openrewrite.staticanalysis.HideUtilityClassConstructor
  - org.openrewrite.staticanalysis.NeedBraces
  - org.openrewrite.staticanalysis.OperatorWrap
  - org.openrewrite.java.cleanup.UnnecessaryParentheses
  - org.openrewrite.staticanalysis.ReplaceThreadRunWithThreadStart
  - org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls
  - org.openrewrite.staticanalysis.ReplaceStringBuilderWithString
  - org.openrewrite.java.ShortenFullyQualifiedTypeReferences

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Kun Li](kun@moderne.io)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut.wannheden@mobi.ch)
* [Greg Adams](greg@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Scott Jungling](scott.jungling@gmail.com)
* [Mike Solomon](mike@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CodeCleanup)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
