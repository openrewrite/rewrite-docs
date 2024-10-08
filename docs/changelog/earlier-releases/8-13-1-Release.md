# 8.13.1 release (2024-01-09)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the releases page.
:::

## New Recipes

* org.openrewrite.java.RemoveAnnotationAttribute: Some annotations accept arguments. This recipe removes an existing attribute. 
* org.openrewrite.java.logging.log4j.Slf4jToLog4j: Transforms code written using SLF4J to use Log4j 2.x API. 
* org.openrewrite.staticanalysis.SimplifyTernaryRecipes: Refaster template recipes for `org.openrewrite.staticanalysis.SimplifyTernary`. 
* org.openrewrite.staticanalysis.SimplifyTernaryRecipes$SimplifyTernaryFalseTrueRecipe: Simplify `expr ? false : true` to `!expr`. 
* org.openrewrite.staticanalysis.SimplifyTernaryRecipes$SimplifyTernaryTrueFalseRecipe: Simplify `expr ? true : false` to `expr`.
*  org.openrewrite.java.spring.boot3.SpringBoot3BestPractices: Applies best practices to Spring Boot 3 applications.

## Changed Recipes

* org.openrewrite.java.migrate.UseJavaUtilBase64 was changed:
  * Old Options:
    * `None`
  * New Options:
    * `useMimeCoder: { type: boolean, required: false }`