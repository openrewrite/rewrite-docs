---
description: OpenRewrite best practices OpenRewrite recipes.
---

# OpenRewrite best practices

_Apply best practices to OpenRewrite recipes._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Java Recipe best practices](./javarecipebestpractices.md)
* [Migrate tests to Java 21](./upgradeteststojava21.md)
* [Recipe nullability best practices](./recipenullabilitybestpractices.md)
* [Recipe testing best practices](./recipetestingbestpractices.md)

## Recipes

* [Add a blank line around fields with annotations](./blanklinesaroundfieldswithannotations.md)
* [Automatically select recipe examples from the unit test cases of a recipe](./selectrecipeexamples.md)
* [Correctly spaced descriptions](./correctlyspaceddescriptions.md)
* [Extract documentation examples from tests](./examplesextractor.md)
* [Find OpenRewrite recipes](./findrecipes.md)
* [Find missing `@Option` `example` values](./missingoptionexample.md)
* [Minimal indentation for `SourceSpecs` text blocks](./sourcespectextblockindentation.md)
* [New line at the end of `SourceSpecs` text blocks](./sourcespectextblocknewline.md)
* [Recipe classes should be public](./recipeclassesshouldbepublic.md)
* [Recipe classes should not have mutable `static` fields](./nomutablestaticfieldsinrecipes.md)
* [Refactor RewriteTest to use defaults method](./userewritetestdefaults.md)
* [Refaster template `IsLiteralNull`](./isliteralnullrecipe.md)
* [Replace null with RewriteTest.doesNotExist()](./replacenullwithdoesnotexist.md)
* [RewriteTest classes should not be public](./rewritetestclassesshouldnotbepublic.md)
* [Show `@DocumentExample`s first](./reordertestmethods.md)
* [Single `@DocumentExample` per test class](./singledocumentexample.md)
* [Use `Tree.randomId()` in LST constructors](./usetreerandomid.md)
* [Use a standard name for `ExecutionContext`](./executioncontextparametername.md)
* [Use of `@EqualsAndHashCode` on `Recipe`](./recipeequalsandhashcodecallsuper.md)


