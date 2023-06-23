# 8.1.3 release (2023-06-23)

## New Recipes

* [org.openrewrite.java.recipes.UpdateMovedRecipeXml](https://docs.openrewrite.org/reference/recipes/java/recipes/updatemovedrecipexml): Update moved package recipe in pom.xml. 
* [org.openrewrite.java.recipes.UpdateMovedRecipeYaml](https://docs.openrewrite.org/reference/recipes/java/recipes/updatemovedrecipeyaml): Update moved package recipe in yaml file. 
* [org.openrewrite.java.search.FindComments](https://docs.openrewrite.org/reference/recipes/java/search/findcomments): Find regular expression matches within comments and literals. "Literals" includes string literals, character literals, and numeric literals. 

## Removed Recipes

* **org.openrewrite.java.recipes.UpdateMovedRecipesYaml**: Update moved package recipe. 
* **org.openrewrite.java.search.FindText**: Find occurrences of regular expression based patterns in comments and literals. 

## Changed Recipes

* [org.openrewrite.text.Find](https://docs.openrewrite.org/reference/recipes/text/find) was changed:
  * Old Options:
    * `find: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
  * New Options:
    * `caseInsensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: true }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
* [org.openrewrite.gradle.UpdateGradleWrapper](https://docs.openrewrite.org/reference/recipes/gradle/updategradlewrapper) was changed:
  * Old Options:
    * `distribution: { type: String, required: false }`
    * `repositoryUrl: { type: String, required: true }`
    * `version: { type: String, required: true }`
  * New Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distribution: { type: String, required: false }`
    * `repositoryUrl: { type: String, required: false }`
    * `version: { type: String, required: true }`