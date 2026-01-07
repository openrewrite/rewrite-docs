---
description: Commons Lang OpenRewrite recipes.
---

# Commons Lang

_Recipes for [Apache Commons Lang](https://commons.apache.org/proper/commons-lang/) upgrades and migrations._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [`ApacheCommonsStringUtils` Refaster recipes](./apachecommonsstringutilsrecipes.md)
* [Migrate `WordUtils` to Apache Commons Text](./wordutilstocommonstext.md)
* [Migrates to Apache Commons Lang 3.x](./upgradeapachecommonslang_2_3.md)

## Recipes

* [Remove redundant null check when using `StringUtils.isNotBlank(String)`](./apachecommonsstringutilsrecipes$removeredundantnullcheckwithisnotblankrecipe.md)
* [Replace `StringUtils.abbreviate(String, int)` with JDK provided API](./apachecommonsstringutilsrecipes$abbreviaterecipe.md)
* [Replace `StringUtils.capitalize(String)` with JDK provided API](./apachecommonsstringutilsrecipes$capitalizerecipe.md)
* [Replace `StringUtils.defaultString(String)` with JDK provided API](./apachecommonsstringutilsrecipes$defaultstringrecipe.md)
* [Replace `StringUtils.defaultString(String, String)` with JDK provided API](./apachecommonsstringutilsrecipes$defaultstringfallbackrecipe.md)
* [Replace `StringUtils.deleteWhitespace(String)` with JDK provided API](./apachecommonsstringutilsrecipes$deletewhitespacerecipe.md)
* [Replace `StringUtils.equals(CharSequence, CharSequence)` with JDK provided API](./apachecommonsstringutilsrecipes$equalsrecipe.md)
* [Replace `StringUtils.equalsIgnoreCase(CharSequence, CharSequence)` with JDK provided API](./apachecommonsstringutilsrecipes$equalsignorecaserecipe.md)
* [Replace `StringUtils.join(Iterable&lt;? extends CharSequence&gt;, String)` with JDK provided API](./apachecommonsstringutilsrecipes$stringjoinseparatoriterablecharsequencerecipe.md)
* [Replace `StringUtils.lowerCase(String)` with JDK provided API](./apachecommonsstringutilsrecipes$lowercaserecipe.md)
* [Replace `StringUtils.removeEnd(String, String)` with JDK provided API](./apachecommonsstringutilsrecipes$removeendrecipe.md)
* [Replace `StringUtils.replace(String, String, String)` with JDK provided API](./apachecommonsstringutilsrecipes$replacerecipe.md)
* [Replace `StringUtils.reverse(String)` with JDK provided API](./apachecommonsstringutilsrecipes$reverserecipe.md)
* [Replace `StringUtils.split(String)` with JDK provided API](./apachecommonsstringutilsrecipes$splitrecipe.md)
* [Replace `StringUtils.strip(String)` with JDK provided API](./apachecommonsstringutilsrecipes$striprecipe.md)
* [Replace `StringUtils.trim(String)` with JDK provided API](./apachecommonsstringutilsrecipes$trimrecipe.md)
* [Replace `StringUtils.trimToEmpty(String)` with JDK provided API](./apachecommonsstringutilsrecipes$trimtoemptyrecipe.md)
* [Replace `StringUtils.trimToNull(String)` with JDK provided API](./apachecommonsstringutilsrecipes$trimtonullrecipe.md)
* [Replace `StringUtils.upperCase(String)` with JDK internals](./apachecommonsstringutilsrecipes$uppercaserecipe.md)
* [Replace any StringUtils#isEmpty(String) and #isNotEmpty(String)](./isnotemptytojdk.md)


