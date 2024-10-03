# 8.7.0 release (2023-10-02)

## New Recipes

* org.openrewrite.maven.BestPractices: Applies best practices to Maven POMs. 
* org.openrewrite.maven.cleanup.ExplicitPluginGroupId: Add the default `<groupId>org.apache.maven.plugins</groupId>` to plugins for clarity. 
* org.openrewrite.maven.cleanup.PrefixlessExpressions: MNG-7404 drops support for prefixless in POMs. This recipe will add the `project.` prefix where missing. 
* org.openrewrite.maven.search.ParentPomInsight: Find Maven parents matching a `groupId` and `artifactId`. 

## Removed Recipes

* **org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtilsRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtils`. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtils`. 
* **org.openrewrite.java.migrate.lang.StringRulesRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.lang.StringRules`. 
* **org.openrewrite.java.migrate.lang.UseStringIsEmptyRecipe**: Recipe created for the following Refaster template:
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
```
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtils`. 
* **org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusFileUtils`. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusStringUtils`. 

## Changed Recipes

* org.openrewrite.java.search.FindDeprecatedFields was changed:
  * Old Options:
    * `ignoreDeprecatedScopes: { type: Boolean, required: false }`
    * `typePattern: { type: String, required: false }`
  * New Options:
    * `ignoreDeprecatedScopes: { type: Boolean, required: false }`
    * `matchInherited: { type: Boolean, required: false }`
    * `typePattern: { type: String, required: false }`
* org.openrewrite.java.search.FindFields was changed:
  * Old Options:
    * `fieldName: { type: String, required: true }`
    * `fullyQualifiedTypeName: { type: String, required: true }`
  * New Options:
    * `fieldName: { type: String, required: true }`
    * `fullyQualifiedTypeName: { type: String, required: true }`
    * `matchInherited: { type: Boolean, required: false }`
* org.openrewrite.java.search.FindFieldsOfType was changed:
  * Old Options:
    * `fullyQualifiedTypeName: { type: String, required: true }`
  * New Options:
    * `fullyQualifiedTypeName: { type: String, required: true }`
    * `matchInherited: { type: Boolean, required: false }`
* org.openrewrite.java.search.FindImplementations was changed:
  * Old Options:
    * `None`
  * New Options:
    * `interfaceFullyQualifiedName: { type: String, required: true }`
    * `matchInherited: { type: Boolean, required: false }`
* org.openrewrite.java.search.FindImports was changed:
  * Old Options:
    * `typePattern: { type: String, required: false }`
  * New Options:
    * `matchInherited: { type: Boolean, required: false }`
    * `typePattern: { type: String, required: false }`