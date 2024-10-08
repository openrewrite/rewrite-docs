# 8.5.2 release (2023-09-22)

## New Recipes

* org.openrewrite.maven.IncrementProjectVersion: Increase Maven project version by incrementing either the major, minor, or patch version as defined by semver. Other versioning schemes are not supported. 

## Changed Recipes

* org.openrewrite.maven.AddPlugin was changed:
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