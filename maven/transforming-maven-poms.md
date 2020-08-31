---
description: High-level abstractions to perform common refactoring tasks on Maven POMs.
---

# Transforming Maven POMs

Rewrite provides a set of basic building blocks to transform Maven POMs which can be composed into higher-level transformations. These are detailed in the subsequent pages and include:

* Add dependencies
* Change dependency scope
* Change dependency version
* Change parent version
* Change property value
* Upgrade parent version \(by using a semver-style version selector\)
* Upgrade version \(by using a semver-style version selector\) 

Each one of these operations is defined as a `MavenRefactorVisitor`designed for mutating the AST, ultimately leading to a `Change` object at the end of the refactoring operation.

### Advanced Version Upgrading

One of the difficulties of performing version updates in the Java ecosystem is that dynamic version selectors in Maven are limited in capability. Often Java developers are left performing dependency upgrades manually when they want to retrieve something like "the latest patch version" of a dependency, because Maven's range selectors just aren't enough. Rewrite transformations for Maven POM files bring Node Semver's [Advanced Range Selectors](https://github.com/npm/node-semver#advanced-range-syntax) to the Java ecosystem \(extended to compensate for irregular versions\).

