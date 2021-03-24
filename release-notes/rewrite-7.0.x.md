---
description: 'Released Monday, March 22nd'
---

# Rewrite 7.0.x

These notes are for versions:

* rewrite core libraries: 7.0.1
* rewrite-maven-plugin: 3.0.0
* rewrite-gradle-plugin: 3.0.0
* rewrite-testing-frameworks: 1.0.2
* rewrite-spring: 4.0.1

## Changes and Enhancements

### Renamed Recipes

These are the current names of the major migration recipes.  
From [rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks):

* org.openrewrite.java.testing.junit5.JUnit4to5Migration - JUnit 4 to 5 migration. This is also included in the spring migrations
* org.openrewrite.java.testing.mockito.Mockito1to3Migration - Mockito 1 to 3 Migration. This is also included in the spring migrations.
* org.openrewrite.java.testing.assertj.Assertj - Replace JUnit 5 assertions with AssertJ assertions. New in this release. 

From [rewrite-spring](https://github.com/openrewrite/rewrite-spring):

* org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration - Junit 4 to 5 migration including spring-test specific migrations. Superset of the base JUnit4to5Migration.
* org.openrewrite.java.spring.boot2.SpringBoot1To2Migration - Spring boot 1 to 2 migration.We have made some improvements here but there are still gaps. Includes JUnit and Mockito migrations.

### Java Templating

With JavaTemplate you can patch snippets of Java code directly into the AST. No need to hand-construct Java ASTs to use in refactoring visitors anymore.

### Java Formatting and Styling

Write your refactoring visitors to achieve the desired semantics and let `AutoFormat` figure out the whitespace.

### Search Recipes

It is now possible to create search recipes which don't alter the AST but leave behind `Markers` that can either be printed out by a search result printer or responded to by other search or refactoring recipes.

### **Build Tool Plugin Enhancements**

#### Recipe Discovery

See more information about what recipes are available and how to configure them, without having to dig through docs or source code: `mvn rewrite:discover`and `gradle rewriteDiscover` now show recipe descriptions that include an overview of their parameters.

#### CycloneDx BOM Generation

To generate a [CycloneDx](https://cyclonedx.org/) bom with the maven plugin run `mvn rewrite:cyclonedx`.  The gradle plugin does not yet generate cyclonedx boms.  


### **Simplified YAML File Format**

Here's an example of configuring the new **\`**ChangePackage\` recipe in your rewrite.yml move everything in one package into another package:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.VetToVeterinary
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldFullyQualifiedPackageName: org.springframework.samples.petclinic.vet
      newFullyQualifiedPackageName: org.springframework.samples.petclinic.veterinary
```
{% endcode %}

With that rewrite.yml, adding `com.yourorg.VetToVeterinary` to the list of activeRecipes in your build plugin configuration will affect the package relocation, including moving the files on disk, when you run `mvn rewrite:fix` or `gradlew rewriteFix`.



