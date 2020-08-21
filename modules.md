# Modules

Rewrite consists of a core module `rewrite-core` and a series of language bindings including:

* `rewrite-java` containing the Java abstract syntax tree, refactoring rules, and a `JavaParser` interface.
  * `rewrite-java-11` contains the `JavaParser` implementation based off of OpenJDK 11.
  * `rewrite-java-8` contains the `JavaParser` implementation based off of OpenJDK 1.8.
* `rewrite-xml` contains a parser, abstract syntax tree, and refactoring rules for XML files.
* `rewrite-maven` contains a parser, abstract syntax tree, and refactoring rules for Maven POM files. It is built on top of `rewrite-xml`, adding Maven domain-specific knowledge to an underlying XML AST.
* `rewrite-properties` contains a parser, abstract syntax tree, and refactoring rules for simple properties files.
* `rewrite-yaml` contains a parser, abstract syntax tree, and refactoring rules for YAML files.

The core module provides abstractions for building refactoring plans and executing them. It defines interfaces for outputting the transformed source, generating diffs, and mass committing changes to remote Git repositories.

Language bindings provide parsers that generate language-specific Rewrite ASTs that are type-attributed, style-preserving, and serializable.

