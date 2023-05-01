# Snapshot (2023-05-01)

{% hint style="info" %}
Want to learn how to use snapshot versions in your project? Check out our [snapshot version guide](/reference/snapshot-instructions.md).
{% endhint %}

## New Artifacts
* rewrite-kotlin
* rewrite-python

## New Recipes
* [org.openrewrite.gradle.UpgradeDependencyVersion](https://docs.openrewrite.org/reference/recipes/gradle/upgradedependencyversion): Upgrade the version of a dependency in a build.gradle file. Supports updating dependency declarations of various forms:
* `String` notation:  `implementation "group:artifact:version"` 
* `Map` notation: `implementation group: 'group', name: 'artifact', version: 'version'`
Can update version numbers which are defined earlier in the same file in variable declarations. 
* [org.openrewrite.gradle.plugins.AddSettingsPluginRepository](https://docs.openrewrite.org/reference/recipes/gradle/plugins/addsettingspluginrepository): Add a Gradle settings repository to `settings.gradle(.kts)`. 
* [org.openrewrite.gradle.search.FindRepository](https://docs.openrewrite.org/reference/recipes/gradle/search/findrepository): Find a Gradle repository by url. 
* [org.openrewrite.java.migrate.lang.UseStringIsEmptyRecipe](https://docs.openrewrite.org/reference/recipes/java/migrate/lang/usestringisemptyrecipe): Recipe created for the following Refaster template:
    ```java
    public class UseStringIsEmpty {
        
        @BeforeTemplate
        boolean before(String s) {
            return s.length() > 0;
        }
        
        @AfterTemplate
        boolean after(String s) {
            return !s.isEmpty();
        }
    }
    ```. 
* [org.openrewrite.java.recipes.SelectRecipeExamples](https://docs.openrewrite.org/reference/recipes/java/recipes/selectrecipeexamples): Add `@DocumentExample` to the first non-issue and not a disabled unit test of a recipe as an example, if there are not any examples yet. 
* [org.openrewrite.kotlin.ChangeTypeAlias](https://docs.openrewrite.org/reference/recipes/kotlin/changetypealias): Change a given type alias to another. 
* [org.openrewrite.kotlin.FindKotlinSources](https://docs.openrewrite.org/reference/recipes/kotlin/findkotlinsources): Use data table to collect source files types and counts of files with extensions `.kt`. 
* [org.openrewrite.python.ChangeMethodName](https://docs.openrewrite.org/reference/recipes/python/changemethodname): Renames a method. 
* [org.openrewrite.python.cleanup.CommonStaticAnalysis](https://docs.openrewrite.org/reference/recipes/python/cleanup/commonstaticanalysis): Resolve common static analysis issues discovered through 3rd party tools. 
* [org.openrewrite.python.format.PythonSpaces](https://docs.openrewrite.org/reference/recipes/python/format/pythonspaces): Standardizes spaces in Python code. Currently limited to formatting method arguments. 
* [org.openrewrite.python.search.FindPythonSources](https://docs.openrewrite.org/reference/recipes/python/search/findpythonsources): Use data table to collect source files types and counts of files with extensions `.py`. 
* [org.openrewrite.text.AppendToTextFile](https://docs.openrewrite.org/reference/recipes/text/appendtotextfile): Appends content to a plaintext file. Multiple instances of this recipe in the same execution context can all contribute. 
* [org.openrewrite.text.ChangeText](https://docs.openrewrite.org/reference/recipes/text/changetext): Completely replaces the contents of the text file with other text. 
* [org.openrewrite.text.CreateTextFile](https://docs.openrewrite.org/reference/recipes/text/createtextfile): Creates a new plain text file. 
* [org.openrewrite.text.EndOfLineAtEndOfFile](https://docs.openrewrite.org/reference/recipes/text/endoflineatendoffile): Ensure that the file ends with the newline character. *Note*: If this recipe modifies a file, it converts the file into plain text. As such, this recipe should be run after any recipe that modifies the language-specific LST. 
* [org.openrewrite.text.Find](https://docs.openrewrite.org/reference/recipes/text/find): Search for text, treating all textual sources as plain text. 
* [org.openrewrite.text.FindAndReplace](https://docs.openrewrite.org/reference/recipes/text/findandreplace): Simple text find and replace. When the original source file is a language-specific Lossless Semantic Tree, this operation irreversibly converts the source file to a plain text file. Subsequent recipes will not be able to operate on language-specific type. 

## Removed Recipes
* **org.openrewrite.java.logging.slf4j.ConvertLogMessageMessageOnlyToLogMessageAndThrowable**: Convert `Logger#error|warn(throwable#message)` to `Logger#error|warn(<log-message>, e)` invocations having only the error's message as the parameter, to a log statement with message and throwable. 

## Changed Recipes
* [org.openrewrite.java.cleanup.UnnecessaryCatch](https://docs.openrewrite.org/reference/recipes/java/cleanup/unnecessarycatch) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `includeJavaLangException: { type: boolean, required: false }`