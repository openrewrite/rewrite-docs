# Cleanup

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Replace JUnit `assertTrue(false, "reason")` and `assertFalse(true, "reason")` with `fail("reason")`](./assertliteralbooleantofailrecipes.md)
* [Testing best practices](./bestpractices.md)

## Recipes

* [Assertion arguments should be passed in the correct order](./assertionsargumentorder.md)
* [Include an assertion in tests](./testsshouldincludeassertions.md)
* [Junit `assertTrue(a == b)` to `assertEquals(a,b)`](./asserttruecomparisontoassertequals.md)
* [Refaster template `AssertLiteralBooleanToFail.WithMessage`](./assertliteralbooleantofailrecipes$withmessagerecipe.md)
* [Refaster template `AssertLiteralBooleanToFail.WithoutMessage`](./assertliteralbooleantofailrecipes$withoutmessagerecipe.md)
* [Remove JUnit `assertTrue(true)` and `assertFalse(false)`](./assertliteralbooleanremovedrecipe.md)
* [Remove empty tests without comments](./removeemptytests.md)
* [Remove `public` visibility of JUnit 5 tests](./testsshouldnotbepublic.md)
* [Remove `test` prefix from JUnit 5 tests](./removetestprefix.md)
* [Replace JUnit `assertEquals(false, <boolean>)` to `assertFalse(<boolean>)` / `assertTrue(<boolean>)`](./assertequalsbooleantoassertboolean.md)
* [Replace JUnit `assertFalse(!<boolean>)` to `assertTrue(<boolean>)`](./assertfalsenegationtoasserttrue.md)
* [Replace JUnit `assertFalse(a == null)` to `assertNotNull(a)`](./assertfalsenulltoassertnotnull.md)
* [Replace JUnit `assertFalse(a.equals(b))` to `assertNotEquals(a,b)`](./assertfalseequalstoassertnotequals.md)
* [Replace JUnit `assertNotEquals(false, <boolean>)` to `assertFalse(<boolean>)` / `assertTrue(<boolean>)`](./assertnotequalsbooleantoassertboolean.md)
* [Replace JUnit `assertTrue(!<boolean>)` to `assertFalse(<boolean>)`](./asserttruenegationtoassertfalse.md)
* [Replace JUnit `assertTrue(a == null)` to `assertNull(a)`](./asserttruenulltoassertnull.md)
* [Replace JUnit `assertTrue(a.equals(b))` to `assertEquals(a,b)`](./asserttrueequalstoassertequals.md)
* [Simplify `throws` statements of tests](./simplifytestthrows.md)
* [`assertEquals(a, null)` to `assertNull(a)`](./assertequalsnulltoassertnull.md)


