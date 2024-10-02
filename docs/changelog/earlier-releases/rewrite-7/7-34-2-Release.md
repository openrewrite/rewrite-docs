# 7.34.2 Release (2022-12-16)

## New Recipes
* [org.openrewrite.gradle.search.FindGradleWrapper](../../../recipes/gradle/search/findgradlewrapper): Find Gradle wrappers. 
* [org.openrewrite.maven.RemoveDuplicateDependencies](../../../recipes/maven/removeduplicatedependencies): Removes duplicated dependencies in the `<dependencies>` and `<dependencyManagement>` sections of the `pom.xml`. 

## Changed Recipes
* [org.openrewrite.properties.AddProperty](../../../recipes/properties/addproperty) was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `property: { type: String, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `delimiter: { type: String, required: false }`
    * `fileMatcher: { type: String, required: false }`
    * `property: { type: String, required: true }`
    * `value: { type: String, required: true }`