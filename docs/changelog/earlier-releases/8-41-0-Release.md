# 8.41.0 release (2024-11-28)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [org.openrewrite.codehaus.plexus.AbstractLogEnabledToSlf4j](https://docs.openrewrite.org/recipes/codehaus/plexus/abstractlogenabledtoslf4j): Introduce a SLF4J `Logger` field and replace calls to `getLogger()` with calls to the field. 
* [org.openrewrite.github.UpgradeSlackNotificationVersion2](https://docs.openrewrite.org/recipes/github/upgradeslacknotificationversion2): Update the Slack GitHub Action to use version 2.0. 
* [org.openrewrite.gitlab.AddComponent](https://docs.openrewrite.org/recipes/gitlab/addcomponent): Add a GitLab component to an existing list, or add a new list where none was present. 
* [org.openrewrite.gitlab.AddTemplate](https://docs.openrewrite.org/recipes/gitlab/addtemplate): Add a GitLab template to an existing list, or add a new list where none was present. 
* [org.openrewrite.gitlab.ChangeTemplate](https://docs.openrewrite.org/recipes/gitlab/changetemplate): Change a GitLab template in use. 
* [org.openrewrite.gitlab.RemoveTemplate](https://docs.openrewrite.org/recipes/gitlab/removetemplate): Remove a GitLab template from use. 
* [org.openrewrite.gitlab.search.FindComponent](https://docs.openrewrite.org/recipes/gitlab/search/findcomponent): Find a GitLab Component in use. 
* [org.openrewrite.gitlab.search.FindTemplate](https://docs.openrewrite.org/recipes/gitlab/search/findtemplate): Find a GitLab Template in use. 
* [org.openrewrite.java.AddCommentToMethod](https://docs.openrewrite.org/recipes/java/addcommenttomethod): Add a comment to a Java source file. 
* [org.openrewrite.java.migrate.AddLombokMapstructBinding](https://docs.openrewrite.org/recipes/java/migrate/addlombokmapstructbinding): Add the `lombok-mapstruct-binding` annotation processor as needed when both MapStruct and Lombok are used. 
* [org.openrewrite.java.migrate.ArrayStoreExceptionToTypeNotPresentException](https://docs.openrewrite.org/recipes/java/migrate/arraystoreexceptiontotypenotpresentexception): Replace catch blocks for `ArrayStoreException` around `Class.getAnnotation()` with `TypeNotPresentException` to ensure compatibility with Java 11+. 
* [org.openrewrite.java.spring.ChangeMethodParameter](https://docs.openrewrite.org/recipes/java/spring/changemethodparameter): Change parameter type for a method declaration, identified by a method pattern. 
* [org.openrewrite.java.spring.CommentOutSpringPropertyKey](https://docs.openrewrite.org/recipes/java/spring/commentoutspringpropertykey): Add comment to specified Spring properties, and comment out the property. 
* [org.openrewrite.java.spring.batch.UpgradeSkipPolicyParameterType](https://docs.openrewrite.org/recipes/java/spring/batch/upgradeskippolicyparametertype): The `skipCount` parameter in `org.springframework.batch.core.step.skip.SkipPolicy#shouldSkip` has been changed from `int` to `long`, this recipe updates the parameter type in the implementing classes. 
* [org.openrewrite.java.spring.data.RefactorSimpleMongoDbFactory](https://docs.openrewrite.org/recipes/java/spring/data/refactorsimplemongodbfactory): Replace usage of deprecated `new SimpleMongoDbFactory(new MongoClientURI(String))` with `new SimpleMongoClientDbFactory(String)`. 
* [org.openrewrite.java.springdoc.MigrateSpringdocCommon](https://docs.openrewrite.org/recipes/java/springdoc/migratespringdoccommon): Migrate from springdoc-openapi-common to springdoc-openapi-starter-common. 
* [org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3](https://docs.openrewrite.org/recipes/java/testing/htmlunit/upgradehtmlunit_3): Automates the HtmlUnit [migration guide](https://htmlunit.sourceforge.io/migration.html) from 2.x to 3.x. 
* [org.openrewrite.java.testing.junit5.UseAssertSame](https://docs.openrewrite.org/recipes/java/testing/junit5/useassertsame): Prefers the usage of `assertSame` or `assertNotSame` methods instead of using of vanilla `assertTrue` or `assertFalse` with a boolean comparison. 
* [org.openrewrite.kubernetes.migrate.MigrateToAPIv1_16](https://docs.openrewrite.org/recipes/kubernetes/migrate/migratetoapiv1_16): This recipe will apply changes commonly needed when migrating to Kubernetes API v1.16. 
* [org.openrewrite.kubernetes.migrate.MigrateToAPIv1_22](https://docs.openrewrite.org/recipes/kubernetes/migrate/migratetoapiv1_22): This recipe will apply changes commonly needed when migrating to Kubernetes API v1.22. 
* [org.openrewrite.kubernetes.migrate.MigrateToAPIv1_25](https://docs.openrewrite.org/recipes/kubernetes/migrate/migratetoapiv1_25): This recipe will apply changes commonly needed when migrating to Kubernetes API v1.25. 
* [org.openrewrite.maven.AddAnnotationProcessor](https://docs.openrewrite.org/recipes/maven/addannotationprocessor): Add an annotation processor to the maven compiler plugin. Will not do anything if it already exists. Also doesn't add anything when no other annotation processors are defined yet. (Perhaps `ChangePluginConfiguration` can be used). 
* [org.openrewrite.properties.AddPropertyComment](https://docs.openrewrite.org/recipes/properties/addpropertycomment): Add a new comment before a property key if not already present, optionally commenting out the property. 
* [org.openrewrite.reactive.reactor.ReactorDoAfterSuccessOrErrorToTap](https://docs.openrewrite.org/recipes/reactive/reactor/reactordoaftersuccessorerrortotap): As of reactor-core 3.5 the `doAfterSuccessOrError` method is removed, this recipe replaces it with the `tap` operator. 
* [org.openrewrite.staticanalysis.UnnecessaryReturnAsLastStatement](https://docs.openrewrite.org/recipes/staticanalysis/unnecessaryreturnaslaststatement): Removes `return` from a `void` method if it's the last statement. 

## Removed Recipes

* **org.openrewrite.gitlab.core.AddTemplate**: Add a GitLab template to an existing list, or add a new list where none was present. 
* **org.openrewrite.gitlab.core.ChangeTemplate**: Change a GitLab template in use. 
* **org.openrewrite.gitlab.core.RemoveTemplate**: Remove a GitLab template from use. 
* **org.openrewrite.java.migrate.RemoveMethodInvocation**: Checks for a method patterns and removes the method call from the class. 
* **org.openrewrite.java.spring.boot3.SpringBootProperties_3_4**: Migrate properties found in `application.properties` and `application.yml`. 
* **org.openrewrite.java.spring.data.RefactorSimpleMongoDbFactoryRecipe**: Replace usage of deprecated `new SimpleMongoDbFactory(new MongoClientURI(String))` with `new SimpleMongoClientDbFactory(String)`. 
* **org.openrewrite.jenkins.UpgradeHtmlUnit_3_3_0**: Automates the HtmlUnit [migration guide](https://htmlunit.sourceforge.io/migration.html) from 2.x to 3.x. This change was brought in by [parent 4.66](https://github.com/jenkinsci/plugin-pom/releases/tag/plugin-4.66). 

## Changed Recipes

* [org.openrewrite.java.AddOrUpdateAnnotationAttribute](https://docs.openrewrite.org/recipes/java/addorupdateannotationattribute) was changed:
  * Old Options:
    * `addOnly: { type: Boolean, required: true }`
    * `annotationType: { type: String, required: true }`
    * `attributeName: { type: String, required: false }`
    * `attributeValue: { type: String, required: true }`
  * New Options:
    * `addOnly: { type: Boolean, required: true }`
    * `annotationType: { type: String, required: true }`
    * `appendArray: { type: Boolean, required: true }`
    * `attributeName: { type: String, required: false }`
    * `attributeValue: { type: String, required: true }`