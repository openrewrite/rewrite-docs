# 8.2.0 release (2023-08-14)

## New Recipes

* [org.openrewrite.xml.ChangeNamespaceValue](../../../recipes/xml/changenamespacevalue): Alters XML Attribute value within specified element of a specific resource versions. 

## Changed Recipes

* [org.openrewrite.maven.search.EffectiveMavenRepositories](../../../recipes/maven/search/effectivemavenrepositories) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `useMarkers: { type: Boolean, required: false }`