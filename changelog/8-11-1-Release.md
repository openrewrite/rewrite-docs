# 8.11.1 release (2023-12-08)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## New Recipes

* [org.openrewrite.github.ChangeActionVersion](https://docs.openrewrite.org/recipes/github/changeactionversion): Change the version of a GitHub Action in any `.github/workflows/*.yml` file. 
* [org.openrewrite.java.migrate.CastArraysAsListToList](https://docs.openrewrite.org/recipes/java/migrate/castarraysaslisttolist): Convert code like `(Integer[]) Arrays.asList(1, 2, 3).toArray()` to `Arrays.asList(1, 2, 3).toArray(new Integer[0])`. 
* [org.openrewrite.java.migrate.JpaCacheProperties](https://docs.openrewrite.org/recipes/java/migrate/jpacacheproperties): Sets an explicit value for the shared cache mode. 
* [org.openrewrite.java.security.servlet.CookieSetSecure](https://docs.openrewrite.org/recipes/java/security/servlet/cookiesetsecure): Check for use of insecure cookies. Cookies should be marked as secure. This ensures that the cookie is sent only over HTTPS to prevent cross-site scripting attacks. 
* [org.openrewrite.java.spring.security6.ApplyToWithLambdaDsl](https://docs.openrewrite.org/recipes/java/spring/security6/applytowithlambdadsl): Converts `HttpSecurity::apply` chained call from Spring Security pre 6.2.x into new lambda DSL style calls and removes `and()` methods. 
* [org.openrewrite.java.testing.mockito.Mockito1to5Migration](https://docs.openrewrite.org/recipes/java/testing/mockito/mockito1to5migration): Upgrade Mockito from 1.x to 5.x. 
* [org.openrewrite.kotlin.cleanup.UnnecessaryTypeParentheses](https://docs.openrewrite.org/recipes/kotlin/cleanup/unnecessarytypeparentheses): In Kotlin, it's possible to add redundant nested parentheses in type definitions. This recipe is designed to remove those unnecessary parentheses. 

## Changed Recipes

* [org.openrewrite.text.FindAndReplace](https://docs.openrewrite.org/recipes/text/findandreplace) was changed:
  * Old Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: true }`
  * New Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: false }`
* [org.openrewrite.java.search.FindImplementations](https://docs.openrewrite.org/recipes/java/search/findimplementations) was changed:
  * Old Options:
    * `interfaceFullyQualifiedName: { type: String, required: true }`
    * `matchInherited: { type: Boolean, required: false }`
  * New Options:
    * `typeName: { type: String, required: true }`
* [org.openrewrite.properties.AddProperty](https://docs.openrewrite.org/recipes/properties/addproperty) was changed:
  * Old Options:
    * `delimiter: { type: String, required: false }`
    * `property: { type: String, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `comment: { type: String, required: false }`
    * `delimiter: { type: String, required: false }`
    * `property: { type: String, required: true }`
    * `value: { type: String, required: true }`
* [org.openrewrite.java.spring.RenameBean](https://docs.openrewrite.org/recipes/java/spring/renamebean) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `newName: { type: String, required: true }`
    * `oldName: { type: String, required: true }`
    * `type: { type: String, required: false }`