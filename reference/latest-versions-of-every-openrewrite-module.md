# Latest versions of every OpenRewrite module

OpenRewrite's modules are published to [Maven Central](https://search.maven.org/search?q=org.openrewrite). Each time a release is made, a bill of materials artifact is also published to correctly align and manage the versions of all published artifacts. The Gradle plugin is published to the [Gradle Plugin Portal](https://plugins.gradle.org/plugin/org.openrewrite.rewrite).

It is highly recommended that developers use the [rewrite-recipe-bom](https://github.com/openrewrite/rewrite-recipe-bom) to align the versions of Rewrite's modules to ensure compatibility. The use of the "bill of materials" means that a developer will only need to specify explicit versions of the BOM and the build plugins:

| Module                                                                                                                          | Version   |
| --------------------------------------------------------------------------------------------------------------------------------| ----------|
| [**org.openrewrite:rewrite-recipe-bom**](https://github.com/openrewrite/rewrite-recipe-bom)                                     | **2.6.2** |
| [**org.openrewrite:rewrite-maven-plugin**](https://github.com/openrewrite/rewrite-maven-plugin)                                 | **5.20.0** |
| [**org.openrewrite:rewrite-gradle-plugin**](https://github.com/openrewrite/rewrite-gradle-plugin)                               | **6.7.0** |
| org.openrewrite:rewrite-groovy                                                                                                  | 8.13.7    |
| org.openrewrite:rewrite-gradle                                                                                                  | 8.13.7    |
| org.openrewrite:rewrite-core                                                                                                    | 8.13.7    |
| org.openrewrite:rewrite-hcl                                                                                                     | 8.13.7    |
| org.openrewrite:rewrite-java                                                                                                    | 8.13.7    |
| org.openrewrite:rewrite-java-8                                                                                                  | 8.13.7    |
| org.openrewrite:rewrite-java-11                                                                                                 | 8.13.7    |
| org.openrewrite:rewrite-java-17                                                                                                 | 8.13.7    |
| org.openrewrite:rewrite-json                                                                                                    | 8.13.7    |
| org.openrewrite:rewrite-maven                                                                                                   | 8.13.7    |
| org.openrewrite:rewrite-properties                                                                                              | 8.13.7    |
| org.openrewrite:rewrite-protobuf                                                                                                | 8.13.7    |
| org.openrewrite:rewrite-xml                                                                                                     | 8.13.7    |
| org.openrewrite:rewrite-yaml                                                                                                    | 8.13.7    |
| org.openrewrite:rewrite-test                                                                                                    | 8.13.7    |
| [org.openrewrite.recipe:rewrite-circleci](https://github.com/openrewrite/rewrite-circleci)                                      | 2.1.2     |
| [org.openrewrite.recipe:rewrite-cloud-suitability-analyzer](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer)  | 2.1.2    |
| [org.openrewrite.recipe:rewrite-concourse](https://github.com/openrewrite/rewrite-concourse)                                    | 2.1.2     |
| [org.openrewrite.recipe:rewrite-cucumber-jvm](https://github.com/openrewrite/rewrite-cucumber-jvm)                              | 1.1.1    |
| [org.openrewrite.recipe:rewrite-github-actions](https://github.com/openrewrite/rewrite-github-actions)                          | 2.1.2    |
| [org.openrewrite.recipe:rewrite-hibernate](https://github.com/openrewrite/rewrite-hibernate)                                    | 1.1.2    |
| [org.openrewrite.recipe:rewrite-java-dependencies](https://github.com/openrewrite/rewrite-java-dependencies)                    | 1.3.2     |
| [org.openrewrite.recipe:rewrite-java-security](https://github.com/openrewrite/rewrite-java-security)                            | 2.2.1     |
| [org.openrewrite.recipe:rewrite-jenkins](https://github.com/openrewrite/rewrite-jenkins)                                        | 0.3.2     |
| [org.openrewrite.recipe:rewrite-kotlin](https://github.com/openrewrite/rewrite-kotlin)                                          | 1.10.0     |
| [org.openrewrite.recipe:rewrite-kubernetes](https://github.com/openrewrite/rewrite-kubernetes)                                  | 2.1.2    |
| [org.openrewrite.recipe:rewrite-liberty](https://github.com/openrewrite/rewrite-liberty)                                        | 1.1.1     |
| [org.openrewrite.recipe:rewrite-logging-frameworks](https://github.com/openrewrite/rewrite-logging-frameworks)                  | 2.4.1     | <!--Update-->
| [org.openrewrite.recipe:rewrite-micronaut](https://github.com/openrewrite/rewrite-micronaut)                                    | 2.2.1     | <!--Update-->
| [org.openrewrite.recipe.rewrite-migrate-java](https://github.com/openrewrite/rewrite-migrate-java)                              | 2.7.0     | <!--Update-->
| [org.openrewrite.recipe.rewrite-ok-http](https://github.com/openrewrite/rewrite-okhttp)                                         | 0.1.1     |
| [org.openrewrite.recipe:rewrite-quarkus](https://github.com/openrewrite/rewrite-quarkus)                                        | 2.1.1     | <!--Update-->
| [org.openrewrite.recipe:rewrite-spring](https://github.com/openrewrite/rewrite-spring)                                          | 5.3.0     | <!--Update-->
| [org.openrewrite.recipe:rewrite-static-analysis](https://github.com/openrewrite/rewrite-static-analysis)                        | 1.2.1     | <!--Update-->
| [org.openrewrite.recipe:rewrite-sql](https://github.com/openrewrite/rewrite-sql)                                                | 1.1.2     |
| [org.openrewrite.recipe:rewrite-terraform](https://github.com/openrewrite/rewrite-terraform)                                    | 2.1.2     |
| [org.openrewrite.recipe:rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks)                  | 2.3.0     | <!--Update-->
