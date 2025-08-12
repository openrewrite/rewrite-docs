# java.lang APIs

## Categories

* [Var](/recipes/java/migrate/lang/var)

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [A collection of `String` rules](./stringrulesrecipes.md)
* [Find Virtual Thread opportunities](./findvirtualthreadopportunities.md)
* [Find non-virtual `ExecutorService` creation](./findnonvirtualexecutors.md)
* [Use local variable type inference](./usevar.md)
* [Use modernized `java.lang` APIs](./javalangapis.md)

## Recipes

* [Add explicit import for `Record` classes](./explicitrecordimport.md)
* [Add null check to existing switch cases](./nullcheckasswitchcase.md)
* [Convert assigning Switch statements to Switch expressions](./switchcaseassignmentstoswitchexpression.md)
* [Convert switch cases where every case returns into a returned switch expression](./switchcasereturnstoswitchexpression.md)
* [Convert switch expression yield to arrow](./switchexpressionyieldtoarrow.md)
* [If-else-if-else to switch](./ifelseifconstructtoswitch.md)
* [Prefer `String.formatted(Object...)`](./stringformatted.md)
* [Replace `0 &lt; s.length()` with `!s.isEmpty()`](./usestringisemptyrecipe.md)
* [Replace `String.indexOf(String, 0)` with `String.indexOf(String)`](./stringrulesrecipes$indexofstringrecipe.md)
* [Replace `String.indexOf(char, 0)` with `String.indexOf(char)`](./stringrulesrecipes$indexofcharrecipe.md)
* [Replace `Thread.resume()`, `Thread.stop()`, and `Thread.suspend()` with `throw new UnsupportedOperationException()`](./threadstopunsupported.md)
* [Replace lower and upper case `String` comparisons with `String.equalsIgnoreCase(String)`](./stringrulesrecipes$useequalsignorecaserecipe.md)
* [Replace redundant `String` method calls with self](./stringrulesrecipes$redundantcallrecipe.md)
* [Use `Character#isJavaIdentifierPart(char)`](./migratecharacterisjavaletterordigittoisjavaidentifierpart.md)
* [Use `Character#isJavaIdentifierStart(char)`](./migratecharacterisjavalettertoisjavaidentifierstart.md)
* [Use `Character#isWhitespace(char)`](./migratecharacterisspacetoiswhitespace.md)
* [Use `Class#getDeclaredConstructor().newInstance()`](./migrateclassnewinstancetogetdeclaredconstructornewinstance.md)
* [Use `ClassLoader#defineClass(String, byte[], int, int)`](./migrateclassloaderdefineclass.md)
* [Use `Runtime.Version#feature()`](./migrateruntimeversionmajortofeature.md)
* [Use `Runtime.Version#interim()`](./migrateruntimeversionminortointerim.md)
* [Use `Runtime.Version#update()`](./migrateruntimeversionsecuritytoupdate.md)
* [Use `SecurityManager#checkMulticast(InetAddress)`](./migratesecuritymanagermulticast.md)
* [Use switch cases labels for enums](./switchcaseenumguardtolabel.md)
* [Use switch cases refinement when possible](./refineswitchcases.md)
* [Use text blocks](./usetextblocks.md)


