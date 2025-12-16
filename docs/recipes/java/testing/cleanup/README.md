---
description: Cleanup OpenRewrite recipes.
---

# Cleanup

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Replace JUnit `assertTrue(false, &quot;reason&quot;)` and `assertFalse(true, &quot;reason&quot;)` with `fail(&quot;reason&quot;)`](./assertliteralbooleantofailrecipes.md)
* [Testing best practices](./bestpractices.md)

## Recipes

* [Assertion arguments should be passed in the correct order](./assertionsargumentorder.md)
* [Include an assertion in tests](./testsshouldincludeassertions.md)
* [Junit `assertTrue(a == b)` to `assertEquals(a,b)`](./asserttruecomparisontoassertequals.md)
* [Kotlin test methods should have return type `Unit`](./kotlintestmethodsshouldreturnunit.md)
* [Refaster template `AssertLiteralBooleanToFail.WithMessage`](./assertliteralbooleantofailrecipes$withmessagerecipe.md)
* [Refaster template `AssertLiteralBooleanToFail.WithoutMessage`](./assertliteralbooleantofailrecipes$withoutmessagerecipe.md)
* [Remove JUnit `assertTrue(true)` and `assertFalse(false)`](./assertliteralbooleanremovedrecipe.md)
* [Remove empty tests without comments](./removeemptytests.md)
* [Remove `public` visibility of JUnit 5 tests](./testsshouldnotbepublic.md)
* [Remove `test` prefix from JUnit 5 tests](./removetestprefix.md)
* [Replace JUnit `assertEquals(false, &lt;boolean&gt;)` to `assertFalse(&lt;boolean&gt;)` / `assertTrue(&lt;boolean&gt;)`](./assertequalsbooleantoassertboolean.md)
* [Replace JUnit `assertFalse(!&lt;boolean&gt;)` to `assertTrue(&lt;boolean&gt;)`](./assertfalsenegationtoasserttrue.md)
* [Replace JUnit `assertFalse(a == null)` to `assertNotNull(a)`](./assertfalsenulltoassertnotnull.md)
* [Replace JUnit `assertFalse(a.equals(b))` to `assertNotEquals(a,b)`](./assertfalseequalstoassertnotequals.md)
* [Replace JUnit `assertNotEquals(false, &lt;boolean&gt;)` to `assertFalse(&lt;boolean&gt;)` / `assertTrue(&lt;boolean&gt;)`](./assertnotequalsbooleantoassertboolean.md)
* [Replace JUnit `assertTrue(!&lt;boolean&gt;)` to `assertFalse(&lt;boolean&gt;)`](./asserttruenegationtoassertfalse.md)
* [Replace JUnit `assertTrue(a == null)` to `assertNull(a)`](./asserttruenulltoassertnull.md)
* [Replace JUnit `assertTrue(a.equals(b))` to `assertEquals(a,b)`](./asserttrueequalstoassertequals.md)
* [Simplify `throws` statements of tests](./simplifytestthrows.md)
* [Test methods should have void return type](./testmethodsshouldbevoid.md)
* [`assertEquals(a, null)` to `assertNull(a)`](./assertequalsnulltoassertnull.md)


