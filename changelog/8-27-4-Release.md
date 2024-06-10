# 8.27.4 release (2024-06-10)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## New Artifacts
* rewrite-ai-search

## New Recipes

* [io.moderne.ai.FindCommentsLanguage](https://docs.openrewrite.org/recipes/ai/findcommentslanguage): Finds all comments and uses AI to predict which language the comment is in. 
* [io.moderne.ai.FixMisencodedCommentsInFrench](https://docs.openrewrite.org/recipes/ai/fixmisencodedcommentsinfrench): Fixes mis-encoded French comments in your code, javadocs and in your pom.xml files. Mis-encoded comments contain a ? or � character. 
* [io.moderne.ai.ListAllMethodsUsed](https://docs.openrewrite.org/recipes/ai/listallmethodsused): List all methods used in any Java source file. 
* [io.moderne.ai.SpellCheckCommentsInFrench](https://docs.openrewrite.org/recipes/ai/spellcheckcommentsinfrench): Use spellchecker to fix mis-encoded French comments. Mis-encoded comments will contain either '?' or '�'. 
* [io.moderne.ai.SpellCheckCommentsInFrenchPomXml](https://docs.openrewrite.org/recipes/ai/spellcheckcommentsinfrenchpomxml): Use spellchecker to fix mis-encoded French comments in pom.xml files. Mis-encoded comments will contain either '?' or '�'. 
* [io.moderne.ai.research.FindCodeThatResembles](https://docs.openrewrite.org/recipes/ai/research/findcodethatresembles): This recipe uses two phase AI approach to find a method invocation that resembles a search string. 
* [io.moderne.ai.research.GetCodeEmbedding](https://docs.openrewrite.org/recipes/ai/research/getcodeembedding): This recipe calls an AI model to get an embedding for either classes or methods which can then be used for downstream tasks. 
* [io.moderne.ai.research.GetRecommendations](https://docs.openrewrite.org/recipes/ai/research/getrecommendations): This recipe calls an AI model to get recommendations for modernizing the code base by looking at a sample of method declarations. 
* [io.moderne.transposeCapitalization.SpongeBobCase](https://docs.openrewrite.org/recipes/transposecapitalization/spongebobcase): Change all your comments to be SpongeBob-case. 
* [org.openrewrite.hibernate.validator.HibernateValidator_8_0](https://docs.openrewrite.org/recipes/hibernate/validator/hibernatevalidator_8_0): This recipe will apply changes commonly needed when migrating to Hibernate Validator 8.0.x. 
* [org.openrewrite.java.ReplaceAnnotation](https://docs.openrewrite.org/recipes/java/replaceannotation): Replace an Annotation with another one if the annotation pattern matches. Only fixed parameters can be set in the replacement. 
* [org.openrewrite.java.jackson.codehaus.JsonIncludeAnnotation](https://docs.openrewrite.org/recipes/java/jackson/codehaus/jsonincludeannotation): Move Codehaus' `@JsonSerialize.include` argument to FasterXMLs `@JsonInclude` annotation. 
* [org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty](https://docs.openrewrite.org/recipes/java/liberty/migratefromwebspheretoliberty): Use this category of rules to identify code changes needed when migrating  from WebSphere Application Server traditional to Liberty. 
* [org.openrewrite.java.logging.log4j.UpgradeLog4J2DependencyVersion](https://docs.openrewrite.org/recipes/java/logging/log4j/upgradelog4j2dependencyversion): Upgrades the Log4j 2.x dependencies to the latest 2.x version.<br />Mitigates the [Log4Shell and other Log4j2-related vulnerabilities](https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-356a). 
* [org.openrewrite.java.migrate.jakarta.RemoveJakartaAnnotationDependency](https://docs.openrewrite.org/recipes/java/migrate/jakarta/removejakartaannotationdependency): Counteract the `jakarta.annotation-api` added by `org.openrewrite.java.migrate.javax.AddCommonAnnotationsDependencies` for Spring Boot applications. 

## Removed Recipes

* **org.openrewrite.java.liberty**: Use this category of rules to identify code changes needed when migrating  from WebSphere Application Server traditional to Liberty. 
* **org.openrewrite.java.spring.boot3.AdditionalSpringBootProperties_3_0**: Rename `management.metrics.export.atlas.aggrConfig` to `management.atlas.metrics.export.aggrConfig`. 

## Changed Recipes

* [org.openrewrite.gradle.UpgradeTransitiveDependencyVersion](https://docs.openrewrite.org/recipes/gradle/upgradetransitivedependencyversion) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `because: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `because: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyForConfigurations: { type: List, required: false }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.xml.search.FindTags](https://docs.openrewrite.org/recipes/xml/search/findtags) was changed:
  * Old Options:
    * `xPath: { type: String, required: true }`
  * New Options:
    * `xpath: { type: String, required: true }`