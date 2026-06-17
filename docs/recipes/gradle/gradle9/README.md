---
description: Gradle9 OpenRewrite recipes.
---

# Gradle9

## Recipes

* [Move `sourceCompatibility` and `targetCompatibility` into the `java \{ \}` extension block](./usejavaextensionblock.md)
* [Replace spread-`all*` calls in `configurations` blocks with `configurations.all \{ \}`](./rewritespreadallinconfigurationsblock.md)
* [Use `application \{ mainClass \}` instead of `mainClassName`](./usemainclasspropertyforapplication.md)
* [Use `mainClass` instead of `main` for `JavaExec` tasks](./usemainclassproperty.md)
* [Use `matching(Closure)` instead of `findAll(Closure)` on Gradle container collections](./usematchinginsteadoffindall.md)
* [Use one dependency declaration per statement](./onedependencydeclarationperstatement.md)
* [Use `project(...)` dependency notation instead of the current project's module coordinates](./useprojectdependencyinsteadofmodulecoordinates.md)
* [Use `version \{ \}` closure instead of `version = \{ \}` assignment](./useversionclosure.md)


