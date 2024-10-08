# 8.1.3 release (2023-06-23)

## New Recipes

* org.openrewrite.java.recipes.UpdateMovedRecipeXml: Update moved package recipe in pom.xml. 
* org.openrewrite.java.recipes.UpdateMovedRecipeYaml: Update moved package recipe in yaml file. 
* org.openrewrite.java.search.FindComments: Find regular expression matches within comments and literals. "Literals" includes string literals, character literals, and numeric literals. 

## Removed Recipes

* **org.openrewrite.java.recipes.UpdateMovedRecipesYaml**: Update moved package recipe. 
* **org.openrewrite.java.search.FindText**: Find occurrences of regular expression based patterns in comments and literals. 

## Changed Recipes

* org.openrewrite.text.Find was changed:
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
* org.openrewrite.gradle.UpdateGradleWrapper was changed:
  * Old Options:
    * `distribution: { type: String, required: false }`
    * `repositoryUrl: { type: String, required: true }`
    * `version: { type: String, required: true }`
  * New Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distribution: { type: String, required: false }`
    * `repositoryUrl: { type: String, required: false }`
    * `version: { type: String, required: true }`