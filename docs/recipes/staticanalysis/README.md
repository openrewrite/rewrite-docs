# Static analysis and remediation

_Remediations for issues identified by SAST tools._

## Categories

* [Java](/recipes/staticanalysis/java)

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Code cleanup](./codecleanup.md)
* [Common static analysis issues](./commonstaticanalysis.md)
* [Modernize `BufferedWriter` creation & prevent file descriptor leaks](./bufferedwritercreationrecipes.md)
* [Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`](./replaceapachecommonslang3validatenotnullwithobjectsrequirenonnull.md)
* [Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`](./replacevalidatenotnullhavingsingleargwithobjectsrequirenonnull.md)
* [Simplify ternary expressions](./simplifyternaryrecipes.md)
* [URL Equals and Hash Code](./urlequalshashcoderecipes.md)

## Recipes

* [Add `@Serial` annotation to `serialVersionUID`](./addserialannotationtoserialversionuid.md)
* [Add missing `@Override` to overriding and implementing methods](./missingoverrideannotation.md)
* [Add `serialVersionUID` to a `Serializable` class when missing](./addserialversionuidtoserializable.md)
* [Annotate methods which may return `null` with `@Nullable`](./annotatenullablemethods.md)
* [Annotate null-checked method parameters with `@Nullable`](./annotatenullableparameters.md)
* [Atomic Boolean, Integer, and Long equality checks compare their values](./atomicprimitiveequalsusesget.md)
* [Avoid boxed boolean expressions](./avoidboxedbooleanexpressions.md)
* [`BigDecimal` rounding constants to `RoundingMode` enums](./bigdecimalroundingconstantstoenums.md)
* [Boolean checks should not be inverted](./booleanchecksnotinverted.md)
* [CaseInsensitive comparisons do not alter case](./caseinsensitivecomparisonsdonotchangecase.md)
* [Catch clause should do more than just rethrow](./catchclauseonlyrethrows.md)
* [Chain `StringBuilder.append()` calls](./chainstringbuilderappendcalls.md)
* [Chain calls to builder methods](./useasbuilder.md)
* [Change `StringBuilder` and `StringBuffer` character constructor argument to `String`](./newstringbuilderbufferwithcharargument.md)
* [Changes code to use Java 17's `instanceof` pattern matching](./instanceofpatternmatch.md)
* [Combine semantically equal catch blocks](./combinesemanticallyequalcatchblocks.md)
* [Constructors of an `abstract` class should not be declared `public`](./abstractclasspublicconstructor.md)
* [Control flow statement indentation](./controlflowindentation.md)
* [Convert `new BufferedWriter(new FileWriter(File))` to `Files.newBufferedWriter(Path)`](./bufferedwritercreationrecipes$bufferedwriterfromnewfilewriterwithfileargumentrecipe.md)
* [Convert `new BufferedWriter(new FileWriter(File, boolean))` to `Files.newBufferedWriter(Path, StandardOpenOption)`](./bufferedwritercreationrecipes$bufferedwriterfromnewfilewriterwithfileandbooleanargumentsrecipe.md)
* [Convert `new BufferedWriter(new FileWriter(String))` to `Files.newBufferedWriter(Path)`](./bufferedwritercreationrecipes$bufferedwriterfromnewfilewriterwithstringargumentrecipe.md)
* [Convert `new BufferedWriter(new FileWriter(String, boolean))` to `Files.newBufferedWriter(Path, StandardOpenOption)`](./bufferedwritercreationrecipes$bufferedwriterfromnewfilewriterwithstringandbooleanargumentsrecipe.md)
* [Covariant equals](./covariantequals.md)
* [Custom import order](./customimportorder.md)
* [Default comes last](./defaultcomeslast.md)
* [Don't use final on local variables](./nofinalizedlocalvariables.md)
* [Enum values should be compared with "=="](./compareenumswithequalityoperator.md)
* [Equals avoids null](./equalsavoidsnull.md)
* [Explicit initialization](./explicitinitialization.md)
* [`Externalizable` classes have no-arguments constructor](./externalizablehasnoargsconstructor.md)
* [Fall through](./fallthrough.md)
* [Finalize classes with private constructors](./finalclass.md)
* [Finalize local variables](./finalizelocalvariables.md)
* [Finalize method arguments](./finalizemethodarguments.md)
* [Finalize private fields](./finalizeprivatefields.md)
* [Fix `String#format` and `String#formatted` expressions](./fixstringformatexpressions.md)
* [Fix missing braces](./needbraces.md)
* [Hidden field](./hiddenfield.md)
* [Hide utility class constructor](./hideutilityclassconstructor.md)
* [Inline variable](./inlinevariable.md)
* [Java API best practices](./javaapibestpractices.md)
* [Jump statements should not be redundant](./noredundantjumpstatements.md)
* [Mask credit card numbers](./maskcreditcardnumbers.md)
* [Modifier order](./modifierorder.md)
* [Move `@Nullable` method annotations to the return type](./nullableonmethodreturntype.md)
* [Nested enums are not static](./nestedenumsarenotstatic.md)
* [No C-style array declarations](./usejavastylearraydeclarations.md)
* [No double brace initialization](./nodoublebraceinitialization.md)
* [No multiple variable declarations](./multiplevariabledeclarations.md)
* [No primitive wrappers for #toString() or #compareTo(..)](./noprimitivewrappersfortostringorcompareto.md)
* [Operator wrapping](./operatorwrap.md)
* [Prefer `while` over `for` loops](./whileinsteadoffor.md)
* [Properly use declaration-site type variance](./declarationsitetypevariance.md)
* [Properly use declaration-site type variance for well-known types](./commondeclarationsitetypevariances.md)
* [Redundant file creation](./redundantfilecreation.md)
* [Reformat local variable names to camelCase](./renamelocalvariablestocamelcase.md)
* [Reformat private field names to camelCase](./renameprivatefieldstocamelcase.md)
* [Remove `@Nullable` and `@CheckForNull` annotations from primitives](./unnecessaryprimitiveannotations.md)
* [Remove JavaDoc `@param`, `@return`, and `@throws` with no description](./removeemptyjavadocparameters.md)
* [Remove `Object.finalize()` invocations](./removecallstoobjectfinalize.md)
* [Remove `System.out#println` statements](./removesystemoutprintln.md)
* [Remove author tags from JavaDocs](./removejavadocauthortag.md)
* [Remove catch for a checked exception if the try block does not throw that exception](./unnecessarycatch.md)
* [Remove empty blocks](./emptyblock.md)
* [Remove extra semicolons](./removeextrasemicolons.md)
* [Remove `finalize()` method](./nofinalizer.md)
* [Remove garbage collection invocations](./removecallstosystemgc.md)
* [Remove redundant casts](./removeredundanttypecast.md)
* [Remove redundant null checks before instanceof](./removeredundantnullcheckbeforeinstanceof.md)
* [Remove `toString()` calls on arrays](./removetostringcallsfromarrayinstances.md)
* [Remove unnecessary parentheses](./unnecessaryparentheses.md)
* [Remove unneeded assertions](./removeunneededassertion.md)
* [Remove unneeded block](./removeunneededblock.md)
* [Remove unused local variables](./removeunusedlocalvariables.md)
* [Remove unused private fields](./removeunusedprivatefields.md)
* [Remove unused private methods](./removeunusedprivatemethods.md)
* [Removes from code Java 14's `instanceof` pattern matching](./removeinstanceofpatternmatch.md)
* [Rename caught exceptions in empty catch blocks to `ignored`](./renameexceptioninemptycatch.md)
* [Rename methods named `hashcode`, `equal`, or `tostring`](./renamemethodsnamedhashcodeequalortostring.md)
* [Rename packages to lowercase](./lowercasepackage.md)
* [Reorder annotations alphabetically](./reorderannotations.md)
* [Replace `A.class.isInstance(a)` with `a instanceof A`](./replaceclassisinstancewithinstanceof.md)
* [Replace `Optional#isPresent()` with `Optional#ifPresent()`](./replaceoptionalispresentwithifpresent.md)
* [Replace Stream.toList() with Stream.collect(Collectors.toList())](./replacestreamtolistwithcollect.md)
* [Replace `StringBuilder#append` with `String`](./replacestringbuilderwithstring.md)
* [Replace `booleanExpression ? false : true` with `!booleanExpression`](./simplifyternaryrecipes$simplifyternaryfalsetruerecipe.md)
* [Replace `booleanExpression ? true : false` with `booleanExpression`](./simplifyternaryrecipes$simplifyternarytruefalserecipe.md)
* [Replace calls to `Thread.run()` with `Thread.start()`](./replacethreadrunwiththreadstart.md)
* [Replace deprecated `Runtime#exec()` methods](./replacedeprecatedruntimeexecmethods.md)
* [Replace duplicate `String` literals](./replaceduplicatestringliterals.md)
* [Replace invocations of `Collections#sort(List, Comparator)` with `List#sort(Comparator)`](./uselistsort.md)
* [Replace `java.util.Set#removeAll(java.util.Collection)` with `java.util.Collection#forEach(Set::remove)`](./useforeachremoveinsteadofsetremoveall.md)
* [Replace `java.util.Stack` with `java.util.Deque`](./replacestackwithdeque.md)
* [Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`](./replacevalidatenotnullhavingvarargswithobjectsrequirenonnull.md)
* [Replace redundant String format invocations that are wrapped with PrintStream operations](./replaceredundantformatwithprintf.md)
* [Replace referential equality operators with Object equals method invocations when the operands both override `Object.equals(Object obj)`](./referentialequalitytoobjectequals.md)
* [Replace text block with regular string](./replacetextblockwithstring.md)
* [Replaces `Object.notify()` with `Object.notifyAll()`](./useobjectnotifyall.md)
* [Set charset encoding explicitly when calling `String#getBytes`](./explicitcharsetonstringgetbytes.md)
* [Simplify `Arrays.asList(..)` with varargs](./simplifyarraysaslist.md)
* [Simplify boolean expression](./simplifybooleanexpression.md)
* [Simplify boolean return](./simplifybooleanreturn.md)
* [Simplify compound statement](./simplifycompoundstatement.md)
* [Simplify consecutive assignments](./simplifyconsecutiveassignments.md)
* [Simplify constant if branch execution](./simplifyconstantifbranchexecution.md)
* [Simplify `java.time.Duration` units](./simplifydurationcreationunits.md)
* [Simplify lambda blocks to expressions](./lambdablocktoexpression.md)
* [Sorted set stream should be collected to LinkedHashSet](./sortedsetstreamtolinkedhashset.md)
* [Standardize method name casing](./methodnamecasing.md)
* [Static methods need not be final](./staticmethodnotfinal.md)
* [Ternary operators should not be nested](./ternaryoperatorsshouldnotbenested.md)
* [Typecast parenthesis padding](./typecastparenpad.md)
* [URL Equals](./urlequalshashcoderecipes$urlequalsrecipe.md)
* [URL Hash Code](./urlequalshashcoderecipes$urlhashcoderecipe.md)
* [Unnecessary `String#toString`](./notostringonstringtype.md)
* [Unnecessary `String#valueOf(..)`](./novalueofonstringtype.md)
* [Unnecessary close in try-with-resources](./unnecessarycloseintrywithresources.md)
* [Unnecessary explicit type arguments](./unnecessaryexplicittypearguments.md)
* [Unnecessary `return` as last statement in void method](./unnecessaryreturnaslaststatement.md)
* [Unnecessary throws](./unnecessarythrows.md)
* [Unwrap `@Repeatable` annotations](./unwraprepeatableannotations.md)
* [Upper case literal suffixes](./uppercaseliteralsuffixes.md)
* [Use `Collection` interfaces](./usecollectioninterfaces.md)
* [Use `Collection#isEmpty()` instead of comparing `size()`](./isemptycalloncollections.md)
* [Use `Collections#emptyList()`, `emptyMap()`, and `emptySet()`](./noemptycollectionwithrawtype.md)
* [Use Empty Array for `Collection.toArray()`](./replacecollectiontoarrayargwithemptyarray.md)
* [Use `Map#containsKey`](./usemapcontainskey.md)
* [Use `StandardCharset` constants](./usestandardcharset.md)
* [Use `String.contentEquals(CharSequence)` instead of `String.equals(CharSequence.toString())`](./equalstocontentequals.md)
* [Use `String.equals()` on `String` literals](./stringliteralequality.md)
* [Use `String::replace()` when first parameter is not a real regular expression](./usestringreplace.md)
* [Use `System.lineSeparator()`](./usesystemlineseparator.md)
* [Use comparison rather than equality checks in for conditions](./noequalityinforcondition.md)
* [Use explicit types on lambda arguments](./explicitlambdaargumenttypes.md)
* [Use `indexOf(String, int)`](./indexofchecksshoulduseastartposition.md)
* [Use lambda expressions instead of anonymous classes](./uselambdaforfunctionalinterface.md)
* [Use method references in lambda](./replacelambdawithmethodreference.md)
* [Use primitive wrapper `valueOf` method](./primitivewrapperclassconstructortovalueof.md)
* [Use the diamond operator](./usediamondoperator.md)
* [Week Year (YYYY) should not be used for date formatting](./replaceweekyearwithyear.md)
* [Write octal values as decimal](./writeoctalvaluesasdecimal.md)
* [`finalize()` calls super](./objectfinalizecallssuper.md)
* [`for` loop counters incremented in update](./forloopincrementinupdate.md)
* [`for` loop counters should use postfix operators](./forloopcontrolvariablepostfixoperators.md)
* [`hashCode()` should not be called on array instances](./removehashcodecallsfromarrayinstances.md)
* [`indexOf` should not compare greater than zero](./indexofshouldnotcomparegreaterthanzero.md)
* [`indexOf()` replaceable by `contains()`](./indexofreplaceablebycontains.md)
* [`new BigDecimal(double)` should not be used](./bigdecimaldoubleconstructorrecipe.md)
* [`switch` statements should have at least 3 `case` clauses](./minimumswitchcases.md)


