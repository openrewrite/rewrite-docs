# java.lang APIs

## Categories

* [Var](/reference/recipes/java/migrate/lang/var)

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [A collection of `String` rules](./stringrulesrecipes.md)
* [Use local variable type inference](./usevar.md)
* [Use modernized `java.lang` APIs](./javalangapis.md)

## Recipes

* [Prefer `String.formatted(Object...)`](./stringformatted.md)
* [Replace `0 < s.length()` with `!s.isEmpty()`](./usestringisemptyrecipe.md)
* [Replace `String.indexOf(String, 0)` with `String.indexOf(String)`](./stringrulesrecipesindexofstringrecipe.md)
* [Replace `String.indexOf(char, 0)` with `String.indexOf(char)`](./stringrulesrecipesindexofcharrecipe.md)
* [Replace `Thread.resume()`, `Thread.stop()`, and `Thread.suspend()` with `throw new UnsupportedOperationException()`](./threadstopunsupported.md)
* [Replace lower and upper case `String` comparisons with `String.equalsIgnoreCase(String)`](./stringrulesrecipesuseequalsignorecaserecipe.md)
* [Replace redundant `String` method calls with self](./stringrulesrecipesredundantcallrecipe.md)
* [Use `Character#isJavaIdentifierPart(char)`](./migratecharacterisjavaletterordigittoisjavaidentifierpart.md)
* [Use `Character#isJavaIdentifierStart(char)`](./migratecharacterisjavalettertoisjavaidentifierstart.md)
* [Use `Character#isWhitespace(char)`](./migratecharacterisspacetoiswhitespace.md)
* [Use `Class#getDeclaredConstructor().newInstance()`](./migrateclassnewinstancetogetdeclaredconstructornewinstance.md)
* [Use `ClassLoader#defineClass(String, byte[], int, int)`](./migrateclassloaderdefineclass.md)
* [Use `Runtime.Version#feature()`](./migrateruntimeversionmajortofeature.md)
* [Use `Runtime.Version#interim()`](./migrateruntimeversionminortointerim.md)
* [Use `Runtime.Version#update()`](./migrateruntimeversionsecuritytoupdate.md)
* [Use `SecurityManager#checkMulticast(InetAddress)`](./migratesecuritymanagermulticast.md)
* [Use text blocks](./usetextblocks.md)


