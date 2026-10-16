---
description: A list of projects outside of OpenRewrite that publish recipes for their users.
---

# OpenRewrite recipes created by the community

Many frameworks, libraries, and tools publish their own OpenRewrite recipes, most often to help their users upgrade to a new major version. This page lists the ones we know about.

Projects marked with a link to the recipe catalog are also bundled in [rewrite-third-party](https://github.com/openrewrite/rewrite-third-party), so you can browse their recipes on this site and run them like any other OpenRewrite recipe.

If you want to see your project on this list, click the `Edit this page` link at the bottom of this page and submit a pull request.

## Framework and library upgrades

These recipes are maintained by the same people who maintain the framework or library.

* [Apache Camel](https://github.com/apache/camel-upgrade-recipes): Upgrades Camel applications across releases, including from Camel 3 to Camel 4. [Recipe catalog](/recipes/apache/camel/upgrade).
* [Apache Wicket](https://github.com/apache/wicket/tree/master/wicket-migration): Migrates applications to Wicket 10 and Wicket 11. [Recipe catalog](/recipes/apache/wicket).
* [Arrow](https://github.com/arrow-kt/rewrite-arrow): Migrates Kotlin code from Arrow 1.1 to the `Raise` APIs of Arrow 1.2 and 2.x.
* [AWS SDK for Java v2](https://github.com/aws/aws-sdk-java-v2/tree/master/v2-migration): Migrates code from the AWS SDK for Java v1 to v2. [Recipe catalog](/recipes/amazon/awssdk/v2migration).
* [Axon Framework](https://github.com/AxonIQ/AxonFramework/tree/main/migration): Migrates Axon Framework 4 applications to Axon Framework 5. [Recipe catalog](/recipes/axonframework/migration) (Axon Framework 4 upgrades).
* [Hibernate](https://github.com/hibernate/hibernate-migration-recipes): Upgrades applications across versions of Hibernate projects, starting with Hibernate ORM.
* [Morphia](https://github.com/MorphiaOrg/morphia/tree/master/rewrite): Upgrades MongoDB applications that use Morphia to Morphia 3.0.
* [Operaton](https://github.com/operaton/migrate-from-camunda-recipe): Migrates Camunda 7 applications to Operaton, the open-source continuation of Camunda 7.
* [Oracle WebLogic](https://github.com/oracle/rewrite-recipes): Migrates WebLogic applications to newer versions of WebLogic and Java. [Recipe catalog](/recipes/oracle/weblogic).
* [Quarkus](https://github.com/quarkusio/quarkus-updates): The recipes behind `quarkus update`, which upgrade Quarkus applications to newer versions. [Recipe catalog](/recipes/quarkus).
* [Stubborn Contract](https://github.com/stubborn-sh/stubborn-contract/tree/main/stubborn-contract-migration): Migrates from Spring Cloud Contract to Stubborn Contract, its community continuation. [Recipe catalog](/recipes/sh/stubborn/contract/migration).
* [Timefold Solver](https://github.com/TimefoldAI/timefold-solver/tree/main/tools/migration): Upgrades Timefold Solver applications and migrates from OptaPlanner to Timefold. [Recipe catalog](/recipes/timefold/solver/migration).

## Tools built on OpenRewrite

* [Atlassian Data Center apps](https://developer.atlassian.com/platform/marketplace/dc-apps-platform-7-openrewrite/): Recipes that help Marketplace partners adapt their apps to the breaking changes in Data Center Platform 7.
* [Jenkins Plugin Modernizer](https://github.com/jenkins-infra/plugin-modernizer-tool): A CLI that runs OpenRewrite recipes against Jenkins plugins to keep them compatible with current Java and Jenkins versions, and opens pull requests with the results.
* [Konveyor kantra](https://github.com/konveyor/kantra): `kantra transform openrewrite` applies the [OpenRewrite recipes from the Windup rulesets](https://github.com/windup/windup-rulesets/tree/master/rules/rules-reviewed/openrewrite), such as Jakarta EE package renames, JBoss EAP 8 configuration updates, and Spring Boot to Quarkus property conversions. Konveyor is the upstream project for Red Hat's Migration Toolkit for Applications (MTA).

## Other recipe collections

* [Error Prone Support](https://github.com/PicnicSupermarket/error-prone-support): [Picnic](https://picnic.app/)'s extensions to Google's [Error Prone](https://github.com/google/error-prone), whose Refaster rules are also published as OpenRewrite recipes. [Recipe catalog](/recipes/picnic/errorprone).
* [JDO to JPA](https://github.com/ecpnv-devops/jdo2jpa): Migrates projects from JDO to JPA. Supports DataNucleus, EclipseLink, and Apache Causeway, and should also work with Hibernate.
* [Liftwizard](https://github.com/liftwizard/liftwizard/tree/main/liftwizard-utility/liftwizard-rewrite): Recipes for idiomatic Eclipse Collections code and general Java best practices.
* [Rewrite Format SQL](https://github.com/mhagnumdw/rewrite-format-sql): Formats SQL and HQL in Java text blocks and in `.sql` files.
* [Rewrite Sorter](https://github.com/khairulsyamil/rewrite-sorter): Sorts JSON files, `.properties` files, and Java class methods.
* [Spring MVC Migrator](https://github.com/omidp/spring-mvc-migrator): Adds explicit names to `@PathVariable` and `@RequestParam` parameters, which Spring Framework 6.1 needs when code isn't compiled with `-parameters`.
* [TestNG to JUnit 5](https://github.com/Philzen/rewrite-TestNG-to-JUnit5): Migrates tests from TestNG to JUnit 5 (Jupiter).
