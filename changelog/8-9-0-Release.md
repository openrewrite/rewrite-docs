# 8.9.0 release (2023-11-13)

## New Recipes

* [org.openrewrite.java.dependencies.DependencyInsight](https://docs.openrewrite.org/recipes/java/dependencies/dependencyinsight): Finds dependencies, including transitive dependencies, in both Gradle and Maven projects. Matches within all Gradle dependency configurations and maven scopes. 
* [org.openrewrite.java.dependencies.DependencyResolutionDiagnostic](https://docs.openrewrite.org/recipes/java/dependencies/dependencyresolutiondiagnostic): Recipes which manipulate dependencies must be able to successfully access the artifact repositories and resolve dependencies from them. This recipe produces two data tables used to understand the state of dependency resolution. 

The Repository accessibility report lists all the artifact repositories known to the project and whether respond to network access. The network access is attempted while the recipe is run and so is representative of current conditions. 

The Gradle dependency configuration errors lists all the dependency configurations that failed to resolve one or more dependencies when the project was parsed. This is representative of conditions at the time the LST was parsed. 
* [org.openrewrite.java.migrate.DontOverfetchDto](https://docs.openrewrite.org/recipes/java/migrate/dontoverfetchdto): Replace method parameters that have DTOs with their data elements when only the specified data element is used. 
* [org.openrewrite.java.migrate.search.FindDataUsedOnDto](https://docs.openrewrite.org/recipes/java/migrate/search/finddatausedondto): Find data elements used on DTOs. This is useful to provide information where data over-fetching may be a problem. 
* [org.openrewrite.java.migrate.search.FindDtoOverfetching](https://docs.openrewrite.org/recipes/java/migrate/search/finddtooverfetching): Find methods that have 'opportunities' for improvement. 
* [org.openrewrite.java.spring.boot3.SpringBootProperties_3_2](https://docs.openrewrite.org/recipes/java/spring/boot3/springbootproperties_3_2): Migrate properties found in `application.properties` and `application.yml`. 
* [org.openrewrite.java.testing.jmockit.JMockitExpectationsToMockito](https://docs.openrewrite.org/recipes/java/testing/jmockit/jmockitexpectationstomockito): Rewrites JMockit `Expectations` blocks to Mockito statements. 

## Removed Recipes

* **org.openrewrite.java.testing.jmockit.JMockitExpectationsToMockitoWhen**: Rewrites JMockit `Expectations` to `Mockito.when`. 

## Changed Recipes

* [org.openrewrite.gradle.search.DependencyInsight](https://docs.openrewrite.org/recipes/gradle/search/dependencyinsight) was changed:
  * Old Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupIdPattern: { type: String, required: true }`
  * New Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupIdPattern: { type: String, required: true }`
    * `version: { type: String, required: false }`
* [org.openrewrite.maven.search.DependencyInsight](https://docs.openrewrite.org/recipes/maven/search/dependencyinsight) was changed:
  * Old Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
    * `onlyDirect: { type: Boolean, required: false }`
    * `scope: { type: String, required: true }`
  * New Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
    * `onlyDirect: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `version: { type: String, required: false }`