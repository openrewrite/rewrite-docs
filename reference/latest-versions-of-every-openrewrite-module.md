# Latest versions of every OpenRewrite module

OpenRewrite's modules are published to [Maven Central](https://search.maven.org/search?q=org.openrewrite).
Each time a release is made, a bill of materials artifact is also published to correctly align and manage the versions of all published artifacts.
The Gradle plugin is published to the [Gradle Plugin Portal](https://plugins.gradle.org/plugin/org.openrewrite.rewrite).

It is highly recommended that developers use the [rewrite-recipe-bom](https://github.com/openrewrite/rewrite-recipe-bom)
to align the versions of Rewrite's modules to ensure compatibility.
The use of the "bill of materials" means that a developer will only need to specify explicit versions of the BOM and the build plugins:

| Module                                                                                                                | Version                                                                                  |
|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [**org.openrewrite.recipe:rewrite-recipe-bom**](https://github.com/openrewrite/rewrite-recipe-bom)                    | **[2.13.2](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v2.13.2)**                                                                           |
| [**org.openrewrite:rewrite-maven-plugin**](https://github.com/openrewrite/rewrite-maven-plugin)                       | **[5.34.1](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v5.34.1)**   |
| [**org.openrewrite:rewrite-gradle-plugin**](https://github.com/openrewrite/rewrite-gradle-plugin)                     | **[6.16.2](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v6.16.2)**  |
| [org.openrewrite:rewrite-core](https://github.com/openrewrite/rewrite)                                                | [8.28.1](https://github.com/openrewrite/rewrite/releases/tag/v8.28.1)                    |
| [org.openrewrite:rewrite-gradle](https://github.com/openrewrite/rewrite)                                              | [8.28.1](https://github.com/openrewrite/rewrite/releases/tag/v8.28.1)                    |
| [org.openrewrite:rewrite-groovy](https://github.com/openrewrite/rewrite)                                              | [8.28.1](https://github.com/openrewrite/rewrite/releases/tag/v8.28.1)                    |
| [org.openrewrite:rewrite-hcl](https://github.com/openrewrite/rewrite)                                                 | [8.28.1](https://github.com/openrewrite/rewrite/releases/tag/v8.28.1)                    |
| [org.openrewrite:rewrite-java](https://github.com/openrewrite/rewrite)                                                | [8.28.1](https://github.com/openrewrite/rewrite/releases/tag/v8.28.1)                    |
| [org.openrewrite:rewrite-java-test](https://github.com/openrewrite/rewrite-java-test)                                 | [8.28.1](https://github.com/openrewrite/rewrite-java-test/releases/tag/v8.28.1)          |
| [org.openrewrite:rewrite-json](https://github.com/openrewrite/rewrite)                                                | [8.28.1](https://github.com/openrewrite/rewrite/releases/tag/v8.28.1)                    |
| [org.openrewrite:rewrite-maven](https://github.com/openrewrite/rewrite)                                               | [8.28.1](https://github.com/openrewrite/rewrite/releases/tag/v8.28.1)                    |
| [org.openrewrite:rewrite-properties](https://github.com/openrewrite/rewrite)                                          | [8.28.1](https://github.com/openrewrite/rewrite/releases/tag/v8.28.1)                    |
| [org.openrewrite:rewrite-protobuf](https://github.com/openrewrite/rewrite-protobuf)                                   | [8.28.1](https://github.com/openrewrite/rewrite-protobuf/releases/tag/v8.28.1)           |
| [org.openrewrite:rewrite-xml](https://github.com/openrewrite/rewrite)                                                 | [8.28.1](https://github.com/openrewrite/rewrite/releases/tag/v8.28.1)                    |
| [org.openrewrite:rewrite-yaml](https://github.com/openrewrite/rewrite)                                                | [8.28.1](https://github.com/openrewrite/rewrite/releases/tag/v8.28.1)                    |
| [org.openrewrite:rewrite-kotlin](https://github.com/openrewrite/rewrite-kotlin)                                       | [1.18.1](https://github.com/openrewrite/rewrite-kotlin/releases/tag/v1.18.1)             |
| [org.openrewrite.meta:rewrite-analysis](https://github.com/openrewrite/rewrite-analysis)                              | [2.9.1](https://github.com/openrewrite/rewrite-analysis/releases/tag/v2.9.1)             |
| [org.openrewrite.recipe:rewrite-ai-search](https://github.com/openrewrite/rewrite-ai-search)                          | [0.14.1](https://github.com/openrewrite/rewrite-ai-search/releases/tag/v0.14.1)          |
| [org.openrewrite.recipe:rewrite-apache](https://github.com/openrewrite/rewrite-apache)                                | [1.4.1](https://github.com/openrewrite/rewrite-apache/releases/tag/v1.4.1)               |
| [org.openrewrite.recipe:rewrite-circleci](https://github.com/openrewrite/rewrite-circleci)                            | [2.5.1](https://github.com/openrewrite/rewrite-circleci/releases/tag/v2.5.1)             |
| [org.openrewrite.recipe:rewrite-concourse](https://github.com/openrewrite/rewrite-concourse)                          | [2.5.1](https://github.com/openrewrite/rewrite-concourse/releases/tag/v2.5.1)            |
| [org.openrewrite.recipe:rewrite-cucumber-jvm](https://github.com/openrewrite/rewrite-cucumber-jvm)                    | [1.5.1](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v1.5.1)         |
| [org.openrewrite.recipe:rewrite-github-actions](https://github.com/openrewrite/rewrite-github-actions)                | [2.6.1](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v2.6.1)       |
| [org.openrewrite.recipe:rewrite-hibernate](https://github.com/openrewrite/rewrite-hibernate)                          | [1.7.1](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v1.7.1)            |
| [org.openrewrite.recipe:rewrite-jackson](https://github.com/openrewrite/rewrite-jackson)                              | [0.3.2](https://github.com/openrewrite/rewrite-jackson/releases/tag/v0.3.2)              |
| [org.openrewrite.recipe:rewrite-java-dependencies](https://github.com/openrewrite/rewrite-java-dependencies)          | [1.11.1](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.11.1)  |
| [org.openrewrite.recipe:rewrite-java-security](https://github.com/openrewrite/rewrite-java-security)                  | [2.10.2](https://github.com/openrewrite/rewrite-java-security/releases/tag/v2.10.2)      |
| [org.openrewrite.recipe:rewrite-jenkins](https://github.com/openrewrite/rewrite-jenkins)                              | [0.8.1](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.8.1)              |
| [org.openrewrite.recipe:rewrite-kubernetes](https://github.com/openrewrite/rewrite-kubernetes)                        | [2.6.1](https://github.com/openrewrite/rewrite-kubernetes/releases/tag/v2.6.1)           |
| [org.openrewrite.recipe:rewrite-liberty](https://github.com/openrewrite/rewrite-liberty)                              | [1.6.1](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.6.1)              |
| [org.openrewrite.recipe:rewrite-launchdarkly](https://github.com/openrewrite/rewrite-launchdarkly)                    | [0.6.1](https://github.com/openrewrite/rewrite-launchdarkly/releases/tag/v0.6.1)         |
| [org.openrewrite.recipe:rewrite-logging-frameworks](https://github.com/openrewrite/rewrite-logging-frameworks)        | [2.9.1](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v2.9.1)   |
| [org.openrewrite.recipe:rewrite-micrometer](https://github.com/openrewrite/rewrite-micrometer)                        | [0.5.1](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.5.1)           |
| [org.openrewrite.recipe:rewrite-micronaut](https://github.com/openrewrite/rewrite-micronaut)                          | [2.7.1](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.7.1)            |
| [org.openrewrite.recipe:rewrite-migrate-java](https://github.com/openrewrite/rewrite-migrate-java)                    | [2.18.1](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v2.18.1)       |
| [org.openrewrite.recipe:rewrite-nodejs](https://github.com/openrewrite/rewrite-nodejs)                                | [0.4.2](https://github.com/openrewrite/rewrite-nodejs/releases/tag/v0.4.2)               |
| [org.openrewrite.recipe:rewrite-okhttp](https://github.com/openrewrite/rewrite-okhttp)                                | [0.3.2](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.3.2)               |
| [org.openrewrite.recipe:rewrite-openapi](https://github.com/openrewrite/rewrite-openapi)                              | [0.5.1](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.5.1)              |
| [org.openrewrite.recipe:rewrite-quarkus](https://github.com/openrewrite/rewrite-quarkus)                              | [2.7.1](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.7.1)              |
| [org.openrewrite.recipe:rewrite-recommendations](https://github.com/openrewrite/rewrite-recommendations)              | [1.6.1](https://github.com/openrewrite/rewrite-recommendations/releases/tag/v1.6.1)      |
| [org.openrewrite.recipe:rewrite-spring](https://github.com/openrewrite/rewrite-spring)                                | [5.13.2](https://github.com/openrewrite/rewrite-spring/releases/tag/v5.13.2)             |
| [org.openrewrite.recipe:rewrite-sql](https://github.com/openrewrite/rewrite-sql)                                      | [1.6.1](https://github.com/openrewrite/rewrite-sql/releases/tag/v1.6.1)                  |
| [org.openrewrite.recipe:rewrite-static-analysis](https://github.com/openrewrite/rewrite-static-analysis)              | [1.10.1](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v1.10.1)    |
| [org.openrewrite.recipe:rewrite-struts](https://github.com/openrewrite/rewrite-struts)                                | [0.4.4](https://github.com/openrewrite/rewrite-struts/releases/tag/v0.4.4)               |
| [org.openrewrite.recipe:rewrite-terraform](https://github.com/openrewrite/rewrite-terraform)                          | [2.3.2](https://github.com/openrewrite/rewrite-terraform/releases/tag/v2.3.2)            |
| [org.openrewrite.recipe:rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks)        | [2.12.2](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v2.12.2) |
| [org.openrewrite.recipe:rewrite-third-party](https://github.com/openrewrite/rewrite-third-party)                      | [0.5.1](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.5.1)          |
