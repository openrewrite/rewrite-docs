# 8.13.1 release (2024-01-09)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## New Recipes

* [org.openrewrite.java.RemoveAnnotationAttribute](https://docs.openrewrite.org/recipes/java/removeannotationattribute): Some annotations accept arguments. This recipe removes an existing attribute. 
* [org.openrewrite.java.logging.log4j.Slf4jToLog4j](https://docs.openrewrite.org/recipes/java/logging/log4j/slf4jtolog4j): Transforms code written using SLF4J to use Log4j 2.x API. 
* [org.openrewrite.staticanalysis.SimplifyTernaryRecipes](https://docs.openrewrite.org/recipes/staticanalysis/simplifyternaryrecipes): Refaster template recipes for `org.openrewrite.staticanalysis.SimplifyTernary`. 
* [org.openrewrite.staticanalysis.SimplifyTernaryRecipes$SimplifyTernaryFalseTrueRecipe](https://docs.openrewrite.org/recipes/staticanalysis/simplifyternaryrecipes$simplifyternaryfalsetruerecipe): Simplify `expr ? false : true` to `!expr`. 
* [org.openrewrite.staticanalysis.SimplifyTernaryRecipes$SimplifyTernaryTrueFalseRecipe](https://docs.openrewrite.org/recipes/staticanalysis/simplifyternaryrecipes$simplifyternarytruefalserecipe): Simplify `expr ? true : false` to `expr`. 

## Changed Recipes

* [org.openrewrite.java.migrate.UseJavaUtilBase64](https://docs.openrewrite.org/recipes/java/migrate/usejavautilbase64) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `useMimeCoder: { type: boolean, required: false }`