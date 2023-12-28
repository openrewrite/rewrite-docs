# 8.12.0 release (2023-12-28)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## New Recipes

* [org.openrewrite.java.ai.ClassDefinitionLength](https://docs.openrewrite.org/recipes/java/ai/classdefinitionlength): Locates class definitions and predicts the number of token in each. 
* [org.openrewrite.java.ai.MethodDefinitionLength](https://docs.openrewrite.org/recipes/java/ai/methoddefinitionlength): Locates method definitions and predicts the number of token in each. 

## Removed Recipes

* **org.openrewrite.java.ClassDefinitionLength**: Locates class definitions and predicts the number of token in each. 
* **org.openrewrite.java.MethodDefinitionLength**: Locates method definitions and predicts the number of token in each. 

## Changed Recipes

* [org.openrewrite.java.search.HasJavaVersion](https://docs.openrewrite.org/recipes/java/search/hasjavaversion) was changed:
  * Old Options:
    * `checkTargetCompatibility: { type: Boolean, required: true }`
    * `version: { type: String, required: true }`
  * New Options:
    * `checkTargetCompatibility: { type: Boolean, required: false }`
    * `version: { type: String, required: true }`
* [org.openrewrite.maven.ChangePluginGroupIdAndArtifactId](https://docs.openrewrite.org/recipes/maven/changeplugingroupidandartifactid) was changed:
  * Old Options:
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
  * New Options:
    * `newArtifact: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`