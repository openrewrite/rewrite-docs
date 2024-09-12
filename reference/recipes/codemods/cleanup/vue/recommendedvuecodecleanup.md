# Recommended vue code cleanup

**org.openrewrite.codemods.cleanup.vue.RecommendedVueCodeCleanup**

_Collection of cleanup ESLint rules from [eslint-plugin-vue](https://eslint.vuejs.org/)._

### Tags

* ESLint
* vue
* eslint-plugin-vue

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-codemods/blob/main/src/main/resources/META-INF/rewrite/eslint-plugin-vue.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-codemods/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-codemods/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-codemods
* version: 0.2.0


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Lint source code with ESLint](../../../codemods/eslint.md)
  * fix: `true`
  * configFile: `{
  "root": true,
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": "2015",
    "sourceType": "module",
      "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": ["vue"],
  "rules": {
    "vue/attributes-order": 2,
    "vue/component-tags-order": 2,
    "vue/order-in-components": 2,
    "vue/this-in-template": 2,
    "vue/block-order": 2,
    "vue/block-tag-newline": 2,
    "vue/component-name-in-template-casing": 2,
    "vue/component-options-name-casing": 2,
    "vue/define-macros-order": 2,
    "vue/html-comment-content-newline": 2,
    "vue/html-comment-content-spacing": 2,
    "vue/html-comment-indent": 2,
    "vue/new-line-between-multi-line-property": 2,
    "vue/next-tick-style": 2,
    "vue/no-required-prop-with-default": 2,
    "vue/no-unsupported-features": 2,
    "vue/no-useless-mustaches": 2,
    "vue/no-useless-v-bind": 2,
    "vue/padding-line-between-blocks": 2,
    "vue/padding-line-between-tags": 2,
    "vue/padding-lines-in-component-definition": 2,
    "vue/prefer-define-options": 2,
    "vue/prefer-separate-static-class": 2,
    "vue/script-indent": 2,
    "vue/static-class-names-order": 2,
    "vue/v-for-delimiter-style": 2,
    "vue/v-if-else-key": 2,
    "vue/v-on-handler-style": 2,
    "vue/array-bracket-newline": 2,
    "vue/array-bracket-spacing": 2,
    "vue/array-element-newline": 2,
    "vue/arrow-spacing": 2,
    "vue/block-spacing": 2,
    "vue/brace-style": 2,
    "vue/comma-dangle": 2,
    "vue/comma-spacing": 2,
    "vue/comma-style": 2,
    "vue/dot-location": 2,
    "vue/dot-notation": 2,
    "vue/eqeqeq": 2,
    "vue/func-call-spacing": 2,
    "vue/key-spacing": 2,
    "vue/keyword-spacing": 2,
    "vue/multiline-ternary": 2,
    "vue/no-extra-parens": 2,
    "vue/object-curly-newline": 2,
    "vue/object-curly-spacing": 2,
    "vue/object-property-newline": 2,
    "vue/object-shorthand": 2,
    "vue/operator-linebreak": 2,
    "vue/prefer-template": 2,
    "vue/quote-props": 2,
    "vue/space-in-parens": 2,
    "vue/space-infix-ops": 2,
    "vue/space-unary-ops": 2,
    "vue/template-curly-spacing": 2,
  },
  "globals": {
    "browser": true,
    "node": true
  }
}
`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.codemods.cleanup.vue.RecommendedVueCodeCleanup
displayName: Recommended vue code cleanup
description: Collection of cleanup ESLint rules from [eslint-plugin-vue](https://eslint.vuejs.org/).

tags:
  - ESLint
  - vue
  - eslint-plugin-vue
recipeList:
  - org.openrewrite.codemods.ESLint:
      fix: true
      configFile: {
  "root": true,
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": "2015",
    "sourceType": "module",
      "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": ["vue"],
  "rules": {
    "vue/attributes-order": 2,
    "vue/component-tags-order": 2,
    "vue/order-in-components": 2,
    "vue/this-in-template": 2,
    "vue/block-order": 2,
    "vue/block-tag-newline": 2,
    "vue/component-name-in-template-casing": 2,
    "vue/component-options-name-casing": 2,
    "vue/define-macros-order": 2,
    "vue/html-comment-content-newline": 2,
    "vue/html-comment-content-spacing": 2,
    "vue/html-comment-indent": 2,
    "vue/new-line-between-multi-line-property": 2,
    "vue/next-tick-style": 2,
    "vue/no-required-prop-with-default": 2,
    "vue/no-unsupported-features": 2,
    "vue/no-useless-mustaches": 2,
    "vue/no-useless-v-bind": 2,
    "vue/padding-line-between-blocks": 2,
    "vue/padding-line-between-tags": 2,
    "vue/padding-lines-in-component-definition": 2,
    "vue/prefer-define-options": 2,
    "vue/prefer-separate-static-class": 2,
    "vue/script-indent": 2,
    "vue/static-class-names-order": 2,
    "vue/v-for-delimiter-style": 2,
    "vue/v-if-else-key": 2,
    "vue/v-on-handler-style": 2,
    "vue/array-bracket-newline": 2,
    "vue/array-bracket-spacing": 2,
    "vue/array-element-newline": 2,
    "vue/arrow-spacing": 2,
    "vue/block-spacing": 2,
    "vue/brace-style": 2,
    "vue/comma-dangle": 2,
    "vue/comma-spacing": 2,
    "vue/comma-style": 2,
    "vue/dot-location": 2,
    "vue/dot-notation": 2,
    "vue/eqeqeq": 2,
    "vue/func-call-spacing": 2,
    "vue/key-spacing": 2,
    "vue/keyword-spacing": 2,
    "vue/multiline-ternary": 2,
    "vue/no-extra-parens": 2,
    "vue/object-curly-newline": 2,
    "vue/object-curly-spacing": 2,
    "vue/object-property-newline": 2,
    "vue/object-shorthand": 2,
    "vue/operator-linebreak": 2,
    "vue/prefer-template": 2,
    "vue/quote-props": 2,
    "vue/space-in-parens": 2,
    "vue/space-infix-ops": 2,
    "vue/space-unary-ops": 2,
    "vue/template-curly-spacing": 2,
  },
  "globals": {
    "browser": true,
    "node": true
  }
}


```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-codemods:0.2.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.codemods.cleanup.vue.RecommendedVueCodeCleanup")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-codemods:0.2.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.23.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-codemods:0.2.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.codemods.cleanup.vue.RecommendedVueCodeCleanup")
        exportDatatables = true
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
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
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
        <version>5.40.2</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.codemods.cleanup.vue.RecommendedVueCodeCleanup</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-codemods</artifactId>
            <version>0.2.0</version>
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

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-codemods:RELEASE -Drewrite.activeRecipes=org.openrewrite.codemods.cleanup.vue.RecommendedVueCodeCleanup -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe RecommendedVueCodeCleanup
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.codemods.cleanup.vue.RecommendedVueCodeCleanup)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

