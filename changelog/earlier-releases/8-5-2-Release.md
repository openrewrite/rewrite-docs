# 8.5.2 release (2023-09-22)

## New Recipes

* [org.openrewrite.maven.IncrementProjectVersion](https://docs.openrewrite.org/recipes/maven/incrementprojectversion): Increase Maven project version by incrementing either the major, minor, or patch version as defined by [semver](https://semver.org/). Other versioning schemes are not supported. 

## Changed Recipes

* [org.openrewrite.maven.AddPlugin](https://docs.openrewrite.org/recipes/maven/addplugin) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `dependencies: { type: String, required: false }`
    * `executions: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `version: { type: String, required: true }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `dependencies: { type: String, required: false }`
    * `executions: { type: String, required: false }`
    * `filePattern: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `version: { type: String, required: false }`