# Latest versions of every OpenRewrite module

OpenRewrite's modules are published to [Maven Central](https://search.maven.org/search?q=org.openrewrite). Each time a release is made, a bill of materials artifact is also published to correctly align and manage the versions of all published artifacts. The Gradle plugin is published to the [Gradle Plugin Portal](https://plugins.gradle.org/plugin/org.openrewrite.rewrite).

It is highly recommended that developers use the [rewrite-recipe-bom](https://github.com/openrewrite/rewrite-recipe-bom) to align the versions of Rewrite's modules to ensure compatibility. The use of the "bill of materials" means that a developer will only need to specify explicit versions of the BOM and the build plugins:

| Module                                            | Version    |
| ------------------------------------------------- | ---------- |
| **[org.openrewrite:rewrite-recipe-bom](https://github.com/openrewrite/rewrite-recipe-bom)**            | **1.17.0** |
| **[org.openrewrite:rewrite-maven-plugin](https://github.com/openrewrite/rewrite-maven-plugin)**          | **4.42.0** |
| **[org.openrewrite:rewrite-gradle-plugin](https://github.com/openrewrite/rewrite-gradle-plugin)**         | **5.38.0** |
| org.openrewrite:rewrite-core                      | 7.38.0     |
| org.openrewrite:rewrite-groovy                    | 7.38.0     |
| org.openrewrite:rewrite-gradle                    | 7.38.0     |
| org.openrewrite:rewrite-hcl                       | 7.38.0     |
| org.openrewrite:rewrite-java                      | 7.38.0     |
| org.openrewrite:rewrite-java-8                    | 7.38.0     |
| org.openrewrite:rewrite-java-11                   | 7.38.0     |
| org.openrewrite:rewrite-java-17                   | 7.38.0     |
| org.openrewrite:rewrite-json                      | 7.38.0     |
| org.openrewrite:rewrite-maven                     | 7.38.0     |
| org.openrewrite:rewrite-properties                | 7.38.0     |
| org.openrewrite:rewrite-protobuf                  | 7.38.0     |
| org.openrewrite:rewrite-xml                       | 7.38.0     |
| org.openrewrite:rewrite-yaml                      | 7.38.0     |
| org.openrewrite:rewrite-test                      | 7.38.0     |
| [org.openrewrite.recipe:rewrite-circleci](https://github.com/openrewrite/rewrite-circleci)           | 1.18.0     |
| [org.openrewrite.recipe:rewrite-concourse](https://github.com/openrewrite/rewrite-concourse)          | 1.17.0     |
| [org.openrewrite.recipe:rewrite-github-actions](https://github.com/openrewrite/rewrite-github-actions)     | 1.18.0     |
| [org.openrewrite.recipe:rewrite-java-dependencies](https://github.com/openrewrite/rewrite-java-dependencies) | 0.2.0     |
| [org.openrewrite.recipe:rewrite-java-security](https://github.com/openrewrite/rewrite-java-security)      | 1.23.0     |
| [org.openrewrite.recipe:rewrite-jhipster](https://github.com/openrewrite/rewrite-jhipster)           | 1.18.0     |
| [org.openrewrite.recipe:rewrite-kubernetes](https://github.com/openrewrite/rewrite-kubernetes)         | 1.28.0     |
| [org.openrewrite.recipe:rewrite-logging-frameworks](https://github.com/openrewrite/rewrite-logging-frameworks) | 1.19.0     |
| [org.openrewrite.recipe:rewrite-micronaut](https://github.com/openrewrite/rewrite-micronaut)          | 1.22.0     |
| [org.openrewrite.recipe.rewrite-migrate-java](https://github.com/openrewrite/rewrite-migrate-java)       | 1.18.0     |
| [org.openrewrite.recipe:rewrite-quarkus](https://github.com/openrewrite/rewrite-quarkus)            | 1.17.0     |
| [org.openrewrite.recipe:rewrite-spring](https://github.com/openrewrite/rewrite-spring)             | 4.34.0     |
| [org.openrewrite.recipe:rewrite-terraform](https://github.com/openrewrite/rewrite-terraform)          | 1.17.0     |
| [org.openrewrite.recipe:rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks) | 1.34.0     |
