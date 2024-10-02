# 8.13.1 release (2024-01-09)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [org.openrewrite.java.RemoveAnnotationAttribute](../../recipes/java/removeannotationattribute): Some annotations accept arguments. This recipe removes an existing attribute. 
* [org.openrewrite.java.logging.log4j.Slf4jToLog4j](../../recipes/java/logging/log4j/slf4jtolog4j): Transforms code written using SLF4J to use Log4j 2.x API. 
* [org.openrewrite.staticanalysis.SimplifyTernaryRecipes](../../recipes/staticanalysis/simplifyternaryrecipes): Refaster template recipes for `org.openrewrite.staticanalysis.SimplifyTernary`. 
* [org.openrewrite.staticanalysis.SimplifyTernaryRecipes$SimplifyTernaryFalseTrueRecipe](../../recipes/staticanalysis/simplifyternaryrecipesusdsimplifyternaryfalsetruerecipe): Simplify `expr ? false : true` to `!expr`. 
* [org.openrewrite.staticanalysis.SimplifyTernaryRecipes$SimplifyTernaryTrueFalseRecipe](../../recipes/staticanalysis/simplifyternaryrecipesusdsimplifyternarytruefalserecipe): Simplify `expr ? true : false` to `expr`.
*  [org.openrewrite.java.spring.boot3.SpringBoot3BestPractices](../../recipes/java/spring/boot3/springboot3bestpractices): Applies best practices to Spring Boot 3 applications.

## Changed Recipes

* [org.openrewrite.java.migrate.UseJavaUtilBase64](../../recipes/java/migrate/usejavautilbase64) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `useMimeCoder: { type: boolean, required: false }`