---
description: What's changed in OpenRewrite version 8.87.0.
---

# 8.87.0 release (2026-07-14)

_Total recipe count: 4461_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* CLI version `4.3.15`

## New Artifacts

* rewrite-go

## New Recipes

* [org.openrewrite.apache.httpclient5.InlineBasicAsyncRequestProducerLocals](https://docs.openrewrite.org/recipes/apache/httpclient5/inlinebasicasyncrequestproducerlocals): Normalizes hoisted entity and request locals into the inline `new BasicAsyncRequestProducer(HttpHost.create(uri), new HttpMethod(path).setEntity(new N*Entity(...)))` form so that `MigrateBasicAsyncRequestProducer` can rewrite the call site. 
* [org.openrewrite.apache.httpclient5.MigrateBasicAsyncRequestProducer](https://docs.openrewrite.org/recipes/apache/httpclient5/migratebasicasyncrequestproducer): Rewrites `new BasicAsyncRequestProducer(HttpHost.create(uri), new HttpMethod(path).setEntity(new N*Entity(...)))` to `AsyncRequestBuilder.<verb>(uri).setEntity(AsyncEntityProducers.create(...)).build()`. Sites that do not match this specific shape are left alone for later migration steps. 
* [org.openrewrite.apache.httpclient5.MigrateHttpAsyncMethods](https://docs.openrewrite.org/recipes/apache/httpclient5/migratehttpasyncmethods): Rewrites `HttpAsyncMethods.createPost/createGet/createConsumer` from Apache HttpAsyncClient 4.x to their HttpClient 5.x equivalents using `AsyncRequestBuilder`, `AsyncEntityProducers`, and `SimpleResponseConsumer`. 
* [org.openrewrite.github.IsGitHubActionDefinition](https://docs.openrewrite.org/recipes/github/isgithubactiondefinition): Checks if the file is a GitHub Action definition (`action.yml`), such as a composite action. 
* [org.openrewrite.golang.RegenerateGoSum](https://docs.openrewrite.org/recipes/golang/regenerategosum): Regenerate a Go module's `go.sum` from its `go.mod` by running `go mod download`, recomputing checksums for the whole module graph, including creating it when absent. Useful after a dependency version change to bring `go.sum` back in sync. Requires the `go` toolchain to be installed; otherwise `go.sum` is left unchanged. 
* [org.openrewrite.gradle.RemoveBomManagedDirectDependencies](https://docs.openrewrite.org/recipes/gradle/removebommanageddirectdependencies): Removes directly declared dependencies when they have a version that is incompatible with the version managed by an imported BOM (platform or enforcedPlatform). This is useful during framework upgrades (e.g., Spring Boot) where transitive dependencies receive major version bumps and explicitly declared older versions should be removed to use the BOM-managed versions instead. A dependency is only removed when it would still be reachable transitively through another direct dependency in every configuration where it is declared, so the BOM-managed version takes its place rather than the dependency disappearing from the classpath. 
* [org.openrewrite.java.jackson.ReplaceIOExceptionThrowInJacksonOverrides](https://docs.openrewrite.org/recipes/java/jackson/replaceioexceptionthrowinjacksonoverrides): In Jackson 3, `serialize()` and `deserialize()` methods no longer declare `throws IOException`. This recipe removes the `throws IOException` declaration from overrides of `JsonSerializer.serialize`, `JsonSerializer.serializeWithType`, `JsonDeserializer.deserialize`, and `JsonDeserializer.deserializeWithType`, and rewrites `throw new IOException(msg[, cause])` inside those overrides to `JsonMappingException.from(<generator|parser>, msg[, cause])`. A companion type change later migrates `JsonMappingException` to `tools.jackson.databind.DatabindException`. 
* [org.openrewrite.java.jackson.UseReadTreeAsValueInDeserializer](https://docs.openrewrite.org/recipes/java/jackson/usereadtreeasvalueindeserializer): In Jackson 3, `ObjectCodec` is replaced by `ObjectReadContext`, which does not expose `treeToValue`. The equivalent method is `readTreeAsValue(JsonNode, Class)` on `DeserializationContext`. This recipe rewrites `parser.getCodec().treeToValue(node, Foo.class)` to `ctxt.readTreeAsValue(node, Foo.class)` inside methods that have a `DeserializationContext` parameter (typically `JsonDeserializer.deserialize`). 
* [org.openrewrite.java.logging.slf4j.Log4j1MdcGetContextToCopyOfContextMap](https://docs.openrewrite.org/recipes/java/logging/slf4j/log4j1mdcgetcontexttocopyofcontextmap): Renames Log4j 1.x `org.apache.log4j.MDC.getContext()` (returns `Hashtable`) to `getCopyOfContextMap()` (returns `Map`) at every call site, and retypes any `Hashtable` declaration — local variable, field, method parameter, or method return type — that receives the result, whether initialized directly from the call, directly assigned it in a later statement, or returning it, to `Map<String, String>`, since `Map` is not assignable to `Hashtable`. Retyping a parameter or return type changes the method's signature; overriding methods are left unchanged to avoid breaking the override, so they need a manual fix. Does not change the `org.apache.log4j.MDC` type; compose with a `ChangeType` to complete the migration. 
* [org.openrewrite.java.logging.slf4j.Log4j1ToSlf4jMdc](https://docs.openrewrite.org/recipes/java/logging/slf4j/log4j1toslf4jmdc): Migrates `org.apache.log4j.MDC` to `org.slf4j.MDC`, wrapping non-`String` `put` values in `String.valueOf(...)` and converting `getContext()` to `getCopyOfContextMap()`. 
* [org.openrewrite.java.logging.slf4j.WrapLog4j1MdcPutValueInStringValueOf](https://docs.openrewrite.org/recipes/java/logging/slf4j/wraplog4j1mdcputvalueinstringvalueof): SLF4J `MDC.put(String, String)` requires a `String` value, but Log4j 1.x `MDC.put(String, Object)` accepts any object. Wrap non-`String` values in `String.valueOf(...)`, skipping values already typed `String`, `null` literals, and existing `String.valueOf(...)` calls. Does not change the `org.apache.log4j.MDC` type; compose with a `ChangeType` to complete the migration to `org.slf4j.MDC`. 
* [org.openrewrite.java.migrate.nio.file.RedundantUtf8Charset](https://docs.openrewrite.org/recipes/java/migrate/nio/file/redundantutf8charset): The character based `java.nio.file.Files` methods always default to UTF-8, so passing `StandardCharsets.UTF_8` explicitly is redundant and can be removed. 
* [org.openrewrite.java.spring.ConvertAutoConfigurationExcludeToExcludeName](https://docs.openrewrite.org/recipes/java/spring/convertautoconfigurationexcludetoexcludename): Rewrite a class literal in the `exclude` attribute of `@SpringBootApplication` or `@EnableAutoConfiguration` to a string literal in the `excludeName` attribute. Useful when the excluded auto-configuration is not on the compile classpath (for example because it became package-private in a newer version of its library). If the target was the last entry in `exclude`, that attribute is removed. If `excludeName` already contains the value, no duplicate is added. 
* [org.openrewrite.java.spring.RemoveAutoConfigurationExclude](https://docs.openrewrite.org/recipes/java/spring/removeautoconfigurationexclude): Remove a given auto-configuration class from the `exclude` and `excludeName` attributes of `@SpringBootApplication` and `@EnableAutoConfiguration` annotations. When removing the last entry, the attribute itself is removed. 
* [org.openrewrite.maven.ExtractVersionsAsProperties](https://docs.openrewrite.org/recipes/maven/extractversionsasproperties): Extracts inlined dependency versions into the `<properties>` section and replaces them with `${property}` references. 
* [org.openrewrite.maven.RemoveBomManagedDirectDependencies](https://docs.openrewrite.org/recipes/maven/removebommanageddirectdependencies): Removes directly declared dependencies when they have a version that is incompatible with the version managed by an imported BOM. This is useful during framework upgrades (e.g., Spring Boot) where transitive dependencies receive major version bumps and explicitly declared older versions should be removed to use the BOM-managed versions instead. A dependency is only removed when it would still be reachable transitively through another direct dependency, so the BOM-managed version takes its place rather than the dependency disappearing from the classpath. 
* [org.openrewrite.staticanalysis.UseStringCaseInsensitiveOrderRecipe](https://docs.openrewrite.org/recipes/staticanalysis/usestringcaseinsensitiveorderrecipe): Replaces case-insensitive string comparator lambdas and method references with the JDK constant `String.CASE_INSENSITIVE_ORDER`. Improves readability and removes one closure allocation per call site. 
* [tech.picnic.errorprone.refasterrules.AssertJBigIntegerRulesRecipes$AbstractBigIntegerAssertIsEqualToOneRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjbigintegerrulesrecipes$abstractbigintegerassertisequaltoonerecipe): Prefer `isEqualTo(1)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJBigIntegerRulesRecipes$AbstractBigIntegerAssertIsEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjbigintegerrulesrecipes$abstractbigintegerassertisequaltozerorecipe): Prefer `isEqualTo(0)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJBigIntegerRulesRecipes$AbstractBigIntegerAssertIsNotEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjbigintegerrulesrecipes$abstractbigintegerassertisnotequaltozerorecipe): Prefer `isNotEqualTo(0)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJBooleanRulesRecipes$AssertThatIsFalseRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjbooleanrulesrecipes$assertthatisfalserecipe): Prefer `AbstractBooleanAssert#isFalse()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJBooleanRulesRecipes$AssertThatIsTrueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjbooleanrulesrecipes$assertthatistruerecipe): Prefer `AbstractBooleanAssert#isTrue()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJByteRulesRecipes$AbstractByteAssertIsEqualToOneRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjbyterulesrecipes$abstractbyteassertisequaltoonerecipe): Prefer `AbstractByteAssert#isEqualTo(byte)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJByteRulesRecipes$AbstractByteAssertIsEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjbyterulesrecipes$abstractbyteassertisequaltozerorecipe): Prefer `AbstractByteAssert#isEqualTo(byte)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJByteRulesRecipes$AbstractByteAssertIsNotEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjbyterulesrecipes$abstractbyteassertisnotequaltozerorecipe): Prefer `AbstractByteAssert#isNotEqualTo(byte)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJCharSequenceRulesRecipes$AssertThatHasSizeRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjcharsequencerulesrecipes$assertthathassizerecipe): Prefer `AbstractCharSequenceAssert#hasSize(int)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJCharSequenceRulesRecipes$AssertThatIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjcharsequencerulesrecipes$assertthatisemptyrecipe): Prefer `AbstractCharSequenceAssert#isEmpty()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJCharSequenceRulesRecipes$AssertThatIsNotEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjcharsequencerulesrecipes$assertthatisnotemptyrecipe): Prefer `AbstractCharSequenceAssert#isNotEmpty()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsCloseToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjdoublerulesrecipes$abstractdoubleassertisclosetorecipe): Prefer `AbstractDoubleAssert#isCloseTo(double, Offset)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsEqualToOneRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjdoublerulesrecipes$abstractdoubleassertisequaltoonerecipe): Prefer `AbstractDoubleAssert#isEqualTo(double)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjdoublerulesrecipes$abstractdoubleassertisequaltozerorecipe): Prefer `AbstractDoubleAssert#isEqualTo(double)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsNotEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjdoublerulesrecipes$abstractdoubleassertisnotequaltozerorecipe): Prefer `AbstractDoubleAssert#isNotEqualTo(double)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJFloatRulesRecipes$AbstractFloatAssertIsCloseToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjfloatrulesrecipes$abstractfloatassertisclosetorecipe): Prefer `AbstractFloatAssert#isCloseTo(float, Offset)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJFloatRulesRecipes$AbstractFloatAssertIsEqualToOneRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjfloatrulesrecipes$abstractfloatassertisequaltoonerecipe): Prefer `isEqualTo(1)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJFloatRulesRecipes$AbstractFloatAssertIsEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjfloatrulesrecipes$abstractfloatassertisequaltozerorecipe): Prefer `isEqualTo(0)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJFloatRulesRecipes$AbstractFloatAssertIsNotEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjfloatrulesrecipes$abstractfloatassertisnotequaltozerorecipe): Prefer `isNotEqualTo(0)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJIntegerRulesRecipes$AbstractIntegerAssertIsEqualToOneRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjintegerrulesrecipes$abstractintegerassertisequaltoonerecipe): Prefer `AbstractIntegerAssert#isEqualTo(int)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJIntegerRulesRecipes$AbstractIntegerAssertIsEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjintegerrulesrecipes$abstractintegerassertisequaltozerorecipe): Prefer `AbstractIntegerAssert#isEqualTo(int)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJIntegerRulesRecipes$AbstractIntegerAssertIsNotEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjintegerrulesrecipes$abstractintegerassertisnotequaltozerorecipe): Prefer `AbstractIntegerAssert#isNotEqualTo(int)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatContainsExactlyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjiterablerulesrecipes$assertthatcontainsexactlyrecipe): Prefer `assertThat(iterable).containsExactly(element)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjiterablerulesrecipes$assertthatisemptyrecipe): Prefer `assertThat(iterable).isEmpty()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatIsNotEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjiterablerulesrecipes$assertthatisnotemptyrecipe): Prefer `assertThat(iterable).isNotEmpty()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatSizeRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjiterablerulesrecipes$assertthatsizerecipe): Prefer `assertThat(iterable).size()` over non-JDK or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJLongRulesRecipes$AbstractLongAssertIsEqualToOneRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjlongrulesrecipes$abstractlongassertisequaltoonerecipe): Prefer `AbstractLongAssert#isEqualTo(long)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJLongRulesRecipes$AbstractLongAssertIsEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjlongrulesrecipes$abstractlongassertisequaltozerorecipe): Prefer `AbstractLongAssert#isEqualTo(long)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJLongRulesRecipes$AbstractLongAssertIsNotEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjlongrulesrecipes$abstractlongassertisnotequaltozerorecipe): Prefer `AbstractLongAssert#isNotEqualTo(long)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AbstractMapAssertContainsExactlyEntriesOfImmutableMapOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjmaprulesrecipes$abstractmapassertcontainsexactlyentriesofimmutablemapofrecipe): Prefer `AbstractMapAssert#containsExactlyEntriesOf(Map)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatContainsKeyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjmaprulesrecipes$assertthatcontainskeyrecipe): Prefer `assertThat(map).containsKey(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatContainsOnlyKeysIterableRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjmaprulesrecipes$assertthatcontainsonlykeysiterablerecipe): Prefer `assertThat(map).containsOnlyKeys(Iterable)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatContainsOnlyKeysObjectRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjmaprulesrecipes$assertthatcontainsonlykeysobjectrecipe): Prefer `assertThat(map).containsOnlyKeys(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatContainsValueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjmaprulesrecipes$assertthatcontainsvaluerecipe): Prefer `assertThat(map).containsValue(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatDoesNotContainKeyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjmaprulesrecipes$assertthatdoesnotcontainkeyrecipe): Prefer `assertThat(map).doesNotContainKey(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatDoesNotContainValueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjmaprulesrecipes$assertthatdoesnotcontainvaluerecipe): Prefer `assertThat(map).doesNotContainValue(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjmaprulesrecipes$assertthatisemptyrecipe): Prefer `assertThat(map).isEmpty()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsEqualToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjobjectrulesrecipes$assertthatisequaltorecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior if `actual` is `null`:
 the original code throws a `NullPointerException`, while the replacement handles the
 comparison gracefully. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsInstanceOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjobjectrulesrecipes$assertthatisinstanceofrecipe): Prefer `ObjectAssert#isInstanceOf(Class)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsNotEqualToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjobjectrulesrecipes$assertthatisnotequaltorecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior if `actual` is `null`:
 the original code throws a `NullPointerException`, while the replacement handles the
 comparison gracefully. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatGetMatchesRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjoptionalrulesrecipes$assertthatgetmatchesrecipe): Prefer `assertThat(optional).get().matches(predicate)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatGetRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjoptionalrulesrecipes$assertthatgetrecipe): Prefer `assertThat(optional).get()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjoptionalrulesrecipes$assertthatisemptyrecipe): Prefer `assertThat(optional).isEmpty()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatIsPresentRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjoptionalrulesrecipes$assertthatispresentrecipe): Prefer `assertThat(optional).isPresent()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatAcceptsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatacceptsrecipe): Prefer `assertThat(predicate).accepts(object)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsAllRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsallrecipe): Prefer `ListAssert#containsAll(Iterable)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsAnyElementsOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsanyelementsofrecipe): Prefer `ListAssert#containsAnyElementsOf(Iterable)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsAnyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsanyofrecipe): Prefer `ListAssert#containsAnyOf(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsAnyOfVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsanyofvarargsrecipe): Prefer `ListAssert#containsAnyOf(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsEntryRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsentryrecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior when `value` is `null`
 and `key` is absent from the map: the original code passes (as `Map#get` returns
 `null` for absent keys), while `MapAssert#containsEntry(Object, Object)` requires
 the key to be explicitly present. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyElementsOfListRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyelementsoflistrecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior if `iterable` is not a `List`: `List#equals(Object)` returns `false` for non-`List` iterables, while
 `ListAssert#containsExactlyElementsOf(Iterable)` accepts any `Iterable`. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyElementsOfStreamRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyelementsofstreamrecipe): Prefer `ListAssert#containsExactlyElementsOf(Iterable)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyInAnyOrderElementsOfMultisetRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyinanyorderelementsofmultisetrecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior if `values` is not a `Multiset`: `Multiset#equals` returns `false` for non-`Multiset` iterables,
 while `AbstractCollectionAssert#containsExactlyInAnyOrderElementsOf(Iterable)` accepts
 any `Iterable`. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyInAnyOrderElementsOfStreamRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyinanyorderelementsofstreamrecipe): Prefer `ListAssert#containsExactlyInAnyOrderElementsOf(Iterable)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyInAnyOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyinanyorderrecipe): Prefer `ListAssert#containsExactlyInAnyOrder(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyInAnyOrderVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyinanyordervarargsrecipe): Prefer `ListAssert#containsExactlyInAnyOrder(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlySetRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlysetrecipe): Prefer `assertThat(set).containsExactly(element)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyStreamRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlystreamrecipe): Prefer `ListAssert#containsExactly(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyvarargsrecipe): Prefer `ListAssert#containsExactly(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsOnlyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsonlyrecipe): Prefer `ListAssert#containsOnly(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsOnlyVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsonlyvarargsrecipe): Prefer `ListAssert#containsOnly(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsrecipe): Prefer `ListAssert#contains(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsSequenceRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainssequencerecipe): Prefer `ListAssert#containsSequence(Iterable)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsSequenceVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainssequencevarargsrecipe): Prefer `ListAssert#containsSequence(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsSubsequenceRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainssubsequencerecipe): Prefer `ListAssert#containsSubsequence(Iterable)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsSubsequenceVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainssubsequencevarargsrecipe): Prefer `ListAssert#containsSubsequence(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsvarargsrecipe): Prefer `ListAssert#contains(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatDoesNotContainAnyElementsOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatdoesnotcontainanyelementsofrecipe): Prefer `ListAssert#doesNotContainAnyElementsOf(Iterable)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatDoesNotContainRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatdoesnotcontainrecipe): Prefer `ListAssert#doesNotContain(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatDoesNotContainSequenceRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatdoesnotcontainsequencerecipe): Prefer `ListAssert#doesNotContainSequence(Iterable)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatDoesNotContainSequenceVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatdoesnotcontainsequencevarargsrecipe): Prefer `ListAssert#doesNotContainSequence(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatDoesNotContainVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatdoesnotcontainvarargsrecipe): Prefer `ListAssert#doesNotContain(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatHasSameElementsAsSetRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthathassameelementsassetrecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior when `iterable` contains
 duplicates: `AbstractCollectionAssert#containsExactlyInAnyOrderElementsOf(Iterable)` is
 then guaranteed to fail, while `AbstractCollectionAssert#hasSameElementsAs(Iterable)` may
 not. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatHasSameElementsAsStreamRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthathassameelementsasstreamrecipe): Prefer `ListAssert#hasSameElementsAs(Iterable)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatHasValueOptionalDoubleRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthathasvalueoptionaldoublerecipe): Prefer `OptionalDoubleAssert#hasValue(double)` over more fragile alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatHasValueOptionalIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthathasvalueoptionalintrecipe): Prefer `OptionalIntAssert#hasValue(int)` over more fragile alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatHasValueOptionalLongRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthathasvalueoptionallongrecipe): Prefer `OptionalLongAssert#hasValue(long)` over more fragile alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatIsSubsetOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatissubsetofrecipe): Prefer `ListAssert#isSubsetOf(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatIsSubsetOfVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatissubsetofvarargsrecipe): Prefer `ListAssert#isSubsetOf(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatRejectsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatrejectsrecipe): Prefer `assertThat(predicate).rejects(object)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$ObjectEnumerableAssertContainsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$objectenumerableassertcontainsrecipe): Prefer `ObjectEnumerableAssert#contains(Object[])` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$ObjectEnumerableAssertDoesNotContainRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjrulesrecipes$objectenumerableassertdoesnotcontainrecipe): Prefer `ObjectEnumerableAssert#doesNotContain(Object[])` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJShortRulesRecipes$AbstractShortAssertIsEqualToOneRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjshortrulesrecipes$abstractshortassertisequaltoonerecipe): Prefer `AbstractShortAssert#isEqualTo(short)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJShortRulesRecipes$AbstractShortAssertIsEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjshortrulesrecipes$abstractshortassertisequaltozerorecipe): Prefer `AbstractShortAssert#isEqualTo(short)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJShortRulesRecipes$AbstractShortAssertIsNotEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjshortrulesrecipes$abstractshortassertisnotequaltozerorecipe): Prefer `AbstractShortAssert#isNotEqualTo(short)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStreamRulesRecipes$AssertThatAllMatchRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstreamrulesrecipes$assertthatallmatchrecipe): Prefer `ListAssert#allMatch(Predicate)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStreamRulesRecipes$AssertThatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstreamrulesrecipes$assertthatrecipe): Prefer `assertThat(collection)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AbstractStringAssertIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstringrulesrecipes$abstractstringassertisemptyrecipe): Prefer `AbstractStringAssert#isEmpty()` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AbstractStringAssertIsNotEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstringrulesrecipes$abstractstringassertisnotemptyrecipe): Prefer `AbstractStringAssert#isNotEmpty()` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatContainsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatcontainsrecipe): Prefer `AbstractStringAssert#contains(CharSequence...)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatContentRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatcontentrecipe): Prefer `assertThat(path).content(charset)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatContentUtf8Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatcontentutf8recipe): Prefer `assertThat(path).content(UTF_8)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatDoesNotContainRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatdoesnotcontainrecipe): Prefer `AbstractStringAssert#doesNotContain(CharSequence...)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatDoesNotEndWithRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatdoesnotendwithrecipe): Prefer `AbstractStringAssert#doesNotEndWith(CharSequence)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatDoesNotStartWithRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatdoesnotstartwithrecipe): Prefer `AbstractStringAssert#doesNotStartWith(CharSequence)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatEndsWithRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatendswithrecipe): Prefer `AbstractStringAssert#endsWith(CharSequence)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStartsWithRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatstartswithrecipe): Prefer `AbstractStringAssert#startsWith(CharSequence)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfHasMessageContainingRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofhasmessagecontainingrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfHasMessageNotContainingRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofhasmessagenotcontainingrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfHasMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofhasmessagerecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfHasMessageStartingWithRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofhasmessagestartingwithrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfHasMessageVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofhasmessagevarargsrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageContainingRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclasshasmessagecontainingrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageNotContainingRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclasshasmessagenotcontainingrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclasshasmessagerecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageStartingWithRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclasshasmessagestartingwithrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclasshasmessagevarargsrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclassrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassRootCauseHasMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclassrootcausehasmessagerecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageContainingRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclasshasmessagecontainingrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageNotContainingAnyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclasshasmessagenotcontaininganyrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclasshasmessagerecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageStartingWithRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclasshasmessagestartingwithrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclasshasmessagevarargsrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclassrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassRootCauseHasMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclassrootcausehasmessagerecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageContainingRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclasshasmessagecontainingrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageNotContainingRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclasshasmessagenotcontainingrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclasshasmessagerecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageStartingWithRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclasshasmessagestartingwithrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclasshasmessagevarargsrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclassrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassRootCauseHasMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclassrootcausehasmessagerecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageContainingRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclasshasmessagecontainingrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageNotContainingRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclasshasmessagenotcontainingrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclasshasmessagerecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageStartingWithRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclasshasmessagestartingwithrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclasshasmessagevarargsrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclassrecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassRootCauseHasMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclassrootcausehasmessagerecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfRootCauseHasMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofrootcausehasmessagerecipe): Prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$CheckIndexExpressionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assortedrulesrecipes$checkindexexpressionrecipe): Prefer `Objects#checkIndex(int, int)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$IterablesIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assortedrulesrecipes$iterablesisemptyrecipe): Prefer `Iterables#isEmpty(Iterable)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$IteratorsGetNextRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assortedrulesrecipes$iteratorsgetnextrecipe): Prefer `Iterators#getNext(Iterator, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$OrRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assortedrulesrecipes$orrecipe): Prefer `firstTest || secondTest` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$SplitterSplitToStreamRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assortedrulesrecipes$splittersplittostreamrecipe): Prefer `Splitter#splitToStream(CharSequence)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$StreamGenerateRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assortedrulesrecipes$streamgeneraterecipe): Prefer `Stream#generate(java.util.function.Supplier)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.BigDecimalRulesRecipes$BigDecimalSignumEqualToZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/bigdecimalrulesrecipes$bigdecimalsignumequaltozerorecipe): Prefer a `BigDecimal#signum()` comparison to 0 over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.ClassRulesRecipes$ClassCastRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/classrulesrecipes$classcastrecipe): Prefer `clazz::cast` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ClassRulesRecipes$ClassIsInstanceWithClassAndObjectRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/classrulesrecipes$classisinstancewithclassandobjectrecipe): Prefer `Class#isInstance(Object)` over more contrived or more fragile alternatives. 
* [tech.picnic.errorprone.refasterrules.ClassRulesRecipes$ClassIsInstanceWithClassRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/classrulesrecipes$classisinstancewithclassrecipe): Prefer `clazz::isInstance` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionAddAllExpressionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/collectionrulesrecipes$collectionaddallexpressionrecipe): Prefer `Collection#addAll(Collection)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionRemoveAllExpressionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/collectionrulesrecipes$collectionremoveallexpressionrecipe): Prefer `Collection#removeAll(Collection)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionStreamFindFirstRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/collectionrulesrecipes$collectionstreamfindfirstrecipe): Prefer `collection.stream().findFirst()` over less explicit or more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$DisjointRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/collectionrulesrecipes$disjointrecipe): Prefer `Collections#disjoint(Collection, Collection)` over non-JDK or less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionToArrayIntFunctionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/collectionrulesrecipes$immutablecollectiontoarrayintfunctionrecipe): Prefer `ImmutableCollection#toArray(IntFunction)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionToArrayObjectRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/collectionrulesrecipes$immutablecollectiontoarrayobjectrecipe): Prefer `ImmutableCollection#toArray(Object[])` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$NewArrayListRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/collectionrulesrecipes$newarraylistrecipe): Prefer `ArrayList#ArrayList(Collection)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$OptionalOfNullableNavigableSetPollFirstRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/collectionrulesrecipes$optionalofnullablenavigablesetpollfirstrecipe): Prefer `Optional#ofNullable(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$SetOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/collectionrulesrecipes$setofrecipe): Prefer `Set#of(Object[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$CollectionsMaxArraysAsListRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$collectionsmaxarraysaslistrecipe): Prefer `Collections#max(Collection, Comparator)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$CollectionsMaxArraysAsListVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$collectionsmaxarraysaslistvarargsrecipe): Prefer `Collections#max(Collection, Comparator)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$CollectionsMinArraysAsListRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$collectionsminarraysaslistrecipe): Prefer `Collections#min(Collection, Comparator)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$CollectionsMinArraysAsListVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$collectionsminarraysaslistvarargsrecipe): Prefer `Collections#min(Collection, Comparator)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparableCompareToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparablecomparetorecipe): Prefer `Comparable#compareTo(Object)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorThenComparingComparatorReversedRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorthencomparingcomparatorreversedrecipe): Prefer `Comparator#thenComparing(Function, Comparator)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorThenComparingDoubleRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorthencomparingdoublerecipe): Prefer `Comparator#thenComparingDouble(ToDoubleFunction)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorThenComparingIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorthencomparingintrecipe): Prefer `Comparator#thenComparingInt(ToIntFunction)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorThenComparingLongRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorthencomparinglongrecipe): Prefer `Comparator#thenComparingLong(ToLongFunction)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorThenComparingRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorthencomparingrecipe): Prefer `Comparator#thenComparing(Function)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorThenComparingReverseOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorthencomparingreverseorderrecipe): Prefer `Comparator#thenComparing(Function, Comparator)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorThenComparingWithComparatorRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorthencomparingwithcomparatorrecipe): Prefer `Comparator#thenComparing(Function, Comparator)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorsMax0Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorsmax0recipe): Prefer `Comparators#max(Comparable, Comparable)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorsMin0Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorsmin0recipe): Prefer `Comparators#min(Comparable, Comparable)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$EnumIsLessThanOrEqualToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$enumislessthanorequaltorecipe): Prefer `Enum#compareTo(Enum)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$EnumIsLessThanRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/comparatorrulesrecipes$enumislessthanrecipe): Prefer `Enum#compareTo(Enum)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$DoubleStreamAllMatchWithDoublePredicateRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/doublestreamrulesrecipes$doublestreamallmatchwithdoublepredicaterecipe): Prefer `DoubleStream#allMatch(DoublePredicate)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$DoubleStreamConcatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/doublestreamrulesrecipes$doublestreamconcatrecipe): Prefer `DoubleStream#concat(DoubleStream, DoubleStream)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$DoubleStreamFindAnyIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/doublestreamrulesrecipes$doublestreamfindanyisemptyrecipe): Prefer `DoubleStream#findAny()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$DoubleStreamFindAnyIsPresentRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/doublestreamrulesrecipes$doublestreamfindanyispresentrecipe): Prefer `DoubleStream#findAny()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$DoubleStreamIdentityRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/doublestreamrulesrecipes$doublestreamidentityrecipe): Prefer using `DoubleStream`s as-is over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$DoubleStreamNoneMatchWithDoublePredicateRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/doublestreamrulesrecipes$doublestreamnonematchwithdoublepredicaterecipe): Prefer `DoubleStream#noneMatch(DoublePredicate)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$BooleanIdentityRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/equalityrulesrecipes$booleanidentityrecipe): Prefer using the boolean expression as-is over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$EqualToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/equalityrulesrecipes$equaltorecipe): Prefer enum `==` comparison over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$EqualToWithBooleanRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/equalityrulesrecipes$equaltowithbooleanrecipe): Prefer `==` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$EqualToWithEnumRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/equalityrulesrecipes$equaltowithenumrecipe): Prefer enum `==` comparison over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$NotEqualToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/equalityrulesrecipes$notequaltorecipe): Prefer `!=` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$ObjectEqualsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/equalityrulesrecipes$objectequalsrecipe): Prefer `Object#equals(Object)` method references over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$ObjectEqualsWithObjectRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/equalityrulesrecipes$objectequalswithobjectrecipe): Prefer `Object#equals(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FileMkdirsOrFileExistsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/filerulesrecipes$filemkdirsorfileexistsrecipe): Prefer this evaluation order of `File#mkdirs()` and `File#exists()` over more fragile alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesCreateTempFileFileToPathToFileRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/filerulesrecipes$filescreatetempfilefiletopathtofilerecipe): Note that `File#createTempFile` treats the given prefix as a path, and ignores all but
 its file name. That is, the actual prefix used is derived from all characters following the
 final file separator (if any). This is not the case with `Files#createTempFile`, which
 will instead throw an `IllegalArgumentException` if the prefix contains any file
 separators. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewInputStreamFileToPathRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/filerulesrecipes$filesnewinputstreamfiletopathrecipe): Prefer `Files#newInputStream(Path, OpenOption...)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewOutputStreamFileToPathRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/filerulesrecipes$filesnewoutputstreamfiletopathrecipe): Prefer `Files#newOutputStream(Path, OpenOption...)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathIdentityRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/filerulesrecipes$pathidentityrecipe): Prefer the `Path` as-is over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/filerulesrecipes$pathofrecipe): Prefer `Path#of(URI)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathOfVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/filerulesrecipes$pathofvarargsrecipe): Prefer `Path#of(String, String...)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathToFileMkdirsOrFilesExistsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/filerulesrecipes$pathtofilemkdirsorfilesexistsrecipe): Prefer this evaluation order of `File#mkdirs()` and `Files#exists(Path, LinkOption...)` over more fragile alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$SetsImmutableEnumSetVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutableenumsetrulesrecipes$setsimmutableenumsetvarargsrecipe): Prefer `Sets#immutableEnumSet(Enum, Enum[])` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$StreamCollectToImmutableEnumSetRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutableenumsetrulesrecipes$streamcollecttoimmutableenumsetrecipe): &lt;strong>Warning:&lt;/strong> this rule is not completely behavior preserving: while the
 original code produces a set that iterates over its elements in encounter order, the
 replacement code iterates over the elements in enum definition order. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$BuilderPutRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipes$builderputrecipe): Prefer `ImmutableListMultimap.Builder#put(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$ImmutableListMultimapCopyOfMultimapsTransformValuesWithFunctionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipes$immutablelistmultimapcopyofmultimapstransformvalueswithfunctionrecipe): Prefer an immutable copy of `Multimaps#transformValues(Multimap, com.google.common.base.Function)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$ImmutableListMultimapCopyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipes$immutablelistmultimapcopyofrecipe): Prefer `ImmutableListMultimap#copyOf(Iterable)` over less efficient or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$ImmutableListMultimapOf0Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipes$immutablelistmultimapof0recipe): Prefer `ImmutableListMultimap#of()` over imprecisely typed or less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$ImmutableListMultimapOf2Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipes$immutablelistmultimapof2recipe): Prefer `ImmutableListMultimap#of(Object, Object)` over imprecisely typed or less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$ImmutableListMultimapOfEntryGetKeyEntryGetValueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipes$immutablelistmultimapofentrygetkeyentrygetvaluerecipe): Prefer `ImmutableListMultimap#of(Object, Object)` over less efficient or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListCopyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablelistrulesrecipes$immutablelistcopyofrecipe): Prefer `ImmutableList#copyOf(Iterable)` and variants over less efficient or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListOf0Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablelistrulesrecipes$immutablelistof0recipe): Prefer `ImmutableList#of()` over imprecisely typed or less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListSortedCopyOfWithComparatorRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablelistrulesrecipes$immutablelistsortedcopyofwithcomparatorrecipe): Prefer `ImmutableList#sortedCopyOf(Comparator, Iterable)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$StreamCollectToImmutableListRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablelistrulesrecipes$streamcollecttoimmutablelistrecipe): Prefer `ImmutableList#toImmutableList()` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$StreamCollectToImmutableSetAsListRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablelistrulesrecipes$streamcollecttoimmutablesetaslistrecipe): Prefer `stream.collect(toImmutableSet()).asList()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$BuilderBuildOrThrowRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemaprulesrecipes$builderbuildorthrowrecipe): Prefer `ImmutableMap.Builder#buildOrThrow()` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$BuilderPutRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemaprulesrecipes$builderputrecipe): Prefer `ImmutableMap.Builder#put(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapCopyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapcopyofrecipe): Prefer `ImmutableMap#copyOf(Iterable)` over imprecisely typed or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf0Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof0recipe): Prefer `ImmutableMap#of()` over more verbose or imprecisely typed alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf10Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof10recipe): Prefer `ImmutableMap#of(Object, Object, Object, Object, Object, Object, Object, Object, Object, Object)` over more verbose or imprecisely typed alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf6Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof6recipe): Prefer `ImmutableMap#of(Object, Object, Object, Object, Object, Object)` over more verbose or imprecisely typed alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf8Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof8recipe): Prefer `ImmutableMap#of(Object, Object, Object, Object, Object, Object, Object, Object)` over more verbose or imprecisely typed alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOfEntryGetKeyEntryGetValueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapofentrygetkeyentrygetvaluerecipe): Prefer `ImmutableMap#of(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMultisetRulesRecipes$ImmutableMultisetCopyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemultisetrulesrecipes$immutablemultisetcopyofrecipe): Prefer `ImmutableMultiset#copyOf(Iterable)` and variants over less efficient or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMultisetRulesRecipes$ImmutableMultisetOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemultisetrulesrecipes$immutablemultisetofrecipe): Prefer `ImmutableMultiset#of()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMultisetRulesRecipes$StreamCollectToImmutableMultisetRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemultisetrulesrecipes$streamcollecttoimmutablemultisetrecipe): Prefer `ImmutableMultiset#toImmutableMultiset()` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$BuilderPutRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipes$builderputrecipe): Prefer `ImmutableSetMultimap.Builder#put(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$ImmutableSetMultimapCopyOfMultimapsTransformValuesWithFunctionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipes$immutablesetmultimapcopyofmultimapstransformvalueswithfunctionrecipe): Prefer an immutable copy of `Multimaps#transformValues(Multimap, com.google.common.base.Function)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$ImmutableSetMultimapCopyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipes$immutablesetmultimapcopyofrecipe): Prefer `ImmutableSetMultimap#copyOf(Iterable)` over less efficient or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$ImmutableSetMultimapOf0Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipes$immutablesetmultimapof0recipe): Prefer `ImmutableSetMultimap#of()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$ImmutableSetMultimapOf2Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipes$immutablesetmultimapof2recipe): Prefer `ImmutableSetMultimap#of(Object, Object)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$ImmutableSetMultimapOfEntryGetKeyEntryGetValueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipes$immutablesetmultimapofentrygetkeyentrygetvaluerecipe): Prefer `ImmutableSetMultimap#of(Object, Object)` over less efficient or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetCopyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetrulesrecipes$immutablesetcopyofrecipe): Prefer `ImmutableSet#copyOf(Iterable)` and variants over less efficient or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetOf0Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetrulesrecipes$immutablesetof0recipe): Prefer `ImmutableSet#of()` over imprecisely typed, less efficient, or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetViewImmutableCopyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetrulesrecipes$setviewimmutablecopyrecipe): Prefer `SetView#immutableCopy()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsDifferenceImmutableCopyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetrulesrecipes$setsdifferenceimmutablecopyrecipe): Prefer `Sets.difference(set1, set2).immutableCopy()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsDifferenceMapKeySetImmutableCopyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetrulesrecipes$setsdifferencemapkeysetimmutablecopyrecipe): Prefer `Sets.difference(set, map.keySet()).immutableCopy()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsDifferenceMultimapKeySetImmutableCopyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetrulesrecipes$setsdifferencemultimapkeysetimmutablecopyrecipe): Prefer `Sets.difference(set, multimap.keySet()).immutableCopy()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsIntersectionImmutableCopyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetrulesrecipes$setsintersectionimmutablecopyrecipe): Prefer `Sets.intersection(set1, set2).immutableCopy()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsIntersectionMapKeySetImmutableCopyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetrulesrecipes$setsintersectionmapkeysetimmutablecopyrecipe): Prefer `Sets.intersection(set, map.keySet()).immutableCopy()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsIntersectionMultimapKeySetImmutableCopyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetrulesrecipes$setsintersectionmultimapkeysetimmutablecopyrecipe): Prefer `Sets.intersection(set, multimap.keySet()).immutableCopy()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsUnionImmutableCopyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetrulesrecipes$setsunionimmutablecopyrecipe): Prefer `Sets.union(set1, set2).immutableCopy()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$StreamCollectToImmutableSetRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesetrulesrecipes$streamcollecttoimmutablesetrecipe): Prefer `ImmutableSet#toImmutableSet()` over less efficient or less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapCopyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipes$immutablesortedmapcopyofrecipe): Prefer `ImmutableSortedMap#copyOf(Iterable)` over more verbose, less efficient, or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapNaturalOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipes$immutablesortedmapnaturalorderrecipe): Prefer `ImmutableSortedMap#naturalOrder()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapOfEntryGetKeyEntryGetValueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipes$immutablesortedmapofentrygetkeyentrygetvaluerecipe): Prefer `ImmutableSortedMap#of(Object, Object)` over less efficient or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipes$immutablesortedmapofrecipe): Prefer `ImmutableSortedMap#of()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapOfWithComparableAndObjectRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipes$immutablesortedmapofwithcomparableandobjectrecipe): Prefer `ImmutableSortedMap#of(Object, Object)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapOrderedByRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipes$immutablesortedmaporderedbyrecipe): Prefer `ImmutableSortedMap#orderedBy(Comparator)` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapReverseOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipes$immutablesortedmapreverseorderrecipe): Prefer `ImmutableSortedMap#reverseOrder()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ToImmutableSortedMapRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipes$toimmutablesortedmaprecipe): Prefer `ImmutableSortedMap#toImmutableSortedMap(Function, Function)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ToImmutableSortedMapWithBinaryOperatorRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipes$toimmutablesortedmapwithbinaryoperatorrecipe): Prefer `ImmutableSortedMap#toImmutableSortedMap(Function, Function, BinaryOperator)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$ImmutableSortedMultisetCopyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipes$immutablesortedmultisetcopyofrecipe): Prefer `ImmutableSortedMultiset#copyOf(Iterable)` and variants over more verbose, less efficient, or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$ImmutableSortedMultisetNaturalOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipes$immutablesortedmultisetnaturalorderrecipe): Prefer `ImmutableSortedMultiset#naturalOrder()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$ImmutableSortedMultisetOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipes$immutablesortedmultisetofrecipe): Prefer `ImmutableSortedMultiset#of()` over less efficient or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$ImmutableSortedMultisetOrderedByRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipes$immutablesortedmultisetorderedbyrecipe): Prefer `ImmutableSortedMultiset#orderedBy(Comparator)` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$ImmutableSortedMultisetReverseOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipes$immutablesortedmultisetreverseorderrecipe): Prefer `ImmutableSortedMultiset#reverseOrder()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$StreamCollectToImmutableSortedMultisetNaturalOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipes$streamcollecttoimmutablesortedmultisetnaturalorderrecipe): Prefer `ImmutableSortedMultiset#toImmutableSortedMultiset(Comparator)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$ImmutableSortedSetCopyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipes$immutablesortedsetcopyofrecipe): Prefer `ImmutableSortedSet#copyOf(Iterable)` and variants over more verbose, less efficient, or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$ImmutableSortedSetNaturalOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipes$immutablesortedsetnaturalorderrecipe): Prefer `ImmutableSortedSet#naturalOrder()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$ImmutableSortedSetOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipes$immutablesortedsetofrecipe): Prefer `ImmutableSortedSet#of()` over less efficient or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$ImmutableSortedSetOrderedByRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipes$immutablesortedsetorderedbyrecipe): Prefer `ImmutableSortedSet#orderedBy(Comparator)` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$ImmutableSortedSetReverseOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipes$immutablesortedsetreverseorderrecipe): Prefer `ImmutableSortedSet#reverseOrder()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$StreamCollectToImmutableSortedSetNaturalOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipes$streamcollecttoimmutablesortedsetnaturalorderrecipe): Prefer `ImmutableSortedSet#toImmutableSortedSet(Comparator)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes$BuilderBuildOrThrowRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutabletablerulesrecipes$builderbuildorthrowrecipe): Prefer `ImmutableTable.Builder#buildOrThrow()` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes$BuilderPutRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutabletablerulesrecipes$builderputrecipe): Prefer `ImmutableTable.Builder#put(Object, Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes$ImmutableTableOfCellGetRowKeyCellGetColumnKeyCellGetValueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutabletablerulesrecipes$immutabletableofcellgetrowkeycellgetcolumnkeycellgetvaluerecipe): Prefer `ImmutableTable#of(Object, Object, Object)` over less efficient or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamAllMatchWithIntPredicateRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamallmatchwithintpredicaterecipe): Prefer `IntStream#allMatch(IntPredicate)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamConcatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamconcatrecipe): Prefer `IntStream#concat(IntStream, IntStream)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamFindAnyIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamfindanyisemptyrecipe): Prefer `IntStream#findAny()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamFindAnyIsPresentRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamfindanyispresentrecipe): Prefer `IntStream#findAny()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamIdentityRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamidentityrecipe): Prefer using `IntStream`s as-is over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamNoneMatchWithIntPredicateRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamnonematchwithintpredicaterecipe): Prefer `IntStream#noneMatch(IntPredicate)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamRangeRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamrangerecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior when `endExclusive` equals
 `Integer#MIN_VALUE`: the subtraction `endExclusive - 1` overflows to `Integer#MAX_VALUE`, producing a semantically different stream. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyBooleanRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlybooleanrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyByteRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlybyterecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyCharRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlycharrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyDoubleRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlydoublerecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyFloatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyfloatrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyintrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyLongRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlylongrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyObjectRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyobjectrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyOffsetDoubleRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyoffsetdoublerecipe): Prefer `assertThat(...).containsExactly(..., offset(...))` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyOffsetFloatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyoffsetfloatrecipe): Prefer `assertThat(...).containsExactly(..., offset(...))` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyShortRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyshortrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyBooleanStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlybooleanstringrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyBooleanSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlybooleansupplierrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyByteStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlybytestringrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyByteSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlybytesupplierrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyCharStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlycharstringrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyCharSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlycharsupplierrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyDoubleStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlydoublestringrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyDoubleSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlydoublesupplierrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyFloatStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyfloatstringrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyFloatSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyfloatsupplierrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyIntStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyintstringrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyIntSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyintsupplierrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyLongStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlylongstringrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyLongSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlylongsupplierrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyObjectStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyobjectstringrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyObjectSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyobjectsupplierrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetDoubleStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetdoublestringrecipe): Prefer `assertThat(...).containsExactly(..., offset(...))` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetDoubleSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetdoublesupplierrecipe): Prefer `assertThat(...).containsExactly(..., offset(...))` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetFloatStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetfloatstringrecipe): Prefer `assertThat(...).containsExactly(..., offset(...))` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetFloatSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetfloatsupplierrecipe): Prefer `assertThat(...).containsExactly(..., offset(...))` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyShortStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyshortstringrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyShortSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyshortsupplierrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsFalseStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisfalsestringrecipe): Prefer `AbstractBooleanAssert#isFalse()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsFalseSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisfalsesupplierrecipe): Prefer `AbstractBooleanAssert#isFalse()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsInstanceOfStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisinstanceofstringrecipe): Prefer `AbstractAssert#isInstanceOf(Class)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsInstanceOfSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisinstanceofsupplierrecipe): Prefer `AbstractAssert#isInstanceOf(Class)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNotNullStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnotnullstringrecipe): Prefer `AbstractAssert#isNotNull()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNotNullSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnotnullsupplierrecipe): Prefer `AbstractAssert#isNotNull()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNotSameAsStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnotsameasstringrecipe): Prefer `AbstractAssert#isNotSameAs(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNotSameAsSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnotsameassupplierrecipe): Prefer `AbstractAssert#isNotSameAs(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNullStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnullstringrecipe): Prefer `AbstractAssert#isNull()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNullSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnullsupplierrecipe): Prefer `AbstractAssert#isNull()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsSameAsStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageissameasstringrecipe): Prefer `AbstractAssert#isSameAs(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsSameAsSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageissameassupplierrecipe): Prefer `AbstractAssert#isSameAs(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsTrueStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageistruestringrecipe): Prefer `AbstractBooleanAssert#isTrue()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsTrueSupplierRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageistruesupplierrecipe): Prefer `AbstractBooleanAssert#isTrue()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithStringAndThrowableRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$failwithstringandthrowablerecipe): Prefer `org.assertj.core.api.Assertions#fail(String, Throwable)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$failwithstringrecipe): Prefer `org.assertj.core.api.Assertions#fail(String)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$ObjectMapperConvertValueClassRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/jackson2rulesrecipes$objectmapperconvertvalueclassrecipe): Prefer `ObjectMapper#convertValue(Object, Class)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$ObjectMapperConvertValueJavaTypeRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/jackson2rulesrecipes$objectmapperconvertvaluejavatyperecipe): Prefer `ObjectMapper#convertValue(Object, JavaType)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$ObjectMapperConvertValueTypeReferenceRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/jackson2rulesrecipes$objectmapperconvertvaluetypereferencerecipe): Prefer `ObjectMapper#convertValue(Object, TypeReference)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$ObjectMapperConvertValueClassRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/jackson3rulesrecipes$objectmapperconvertvalueclassrecipe): Prefer `ObjectMapper#convertValue(Object, Class)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$ObjectMapperConvertValueJavaTypeRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/jackson3rulesrecipes$objectmapperconvertvaluejavatyperecipe): Prefer `ObjectMapper#convertValue(Object, JavaType)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$ObjectMapperConvertValueTypeReferenceRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/jackson3rulesrecipes$objectmapperconvertvaluetypereferencerecipe): Prefer `ObjectMapper#convertValue(Object, TypeReference)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamAllMatchWithLongPredicateRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamallmatchwithlongpredicaterecipe): Prefer `LongStream#allMatch(LongPredicate)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamConcatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamconcatrecipe): Prefer `LongStream#concat(LongStream, LongStream)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamFindAnyIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamfindanyisemptyrecipe): Prefer `LongStream#findAny()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamFindAnyIsPresentRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamfindanyispresentrecipe): Prefer `LongStream#findAny()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamIdentityRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamidentityrecipe): Prefer the `LongStream` as-is over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamNoneMatchWithLongPredicateRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamnonematchwithlongpredicaterecipe): Prefer `LongStream#noneMatch(LongPredicate)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamRangeRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamrangerecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior when `endExclusive` equals
 `Long#MIN_VALUE`: the subtraction `endExclusive - 1` overflows to `Long#MAX_VALUE`, producing a semantically different stream. 
* [tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$ComparingByKeyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/mapentryrulesrecipes$comparingbykeyrecipe): Prefer `Map.Entry#comparingByKey()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$ComparingByKeyWithComparatorRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/mapentryrulesrecipes$comparingbykeywithcomparatorrecipe): Prefer `Map.Entry#comparingByKey(Comparator)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$ComparingByValueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/mapentryrulesrecipes$comparingbyvaluerecipe): Prefer `Map.Entry#comparingByValue()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$ComparingByValueWithComparatorRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/mapentryrulesrecipes$comparingbyvaluewithcomparatorrecipe): Prefer `Map.Entry#comparingByValue(Comparator)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapGetRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/maprulesrecipes$mapgetrecipe): Prefer `Map#get(Object)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapKeySetStreamRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/maprulesrecipes$mapkeysetstreamrecipe): Prefer `map.keySet().stream()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapValuesStreamRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/maprulesrecipes$mapvaluesstreamrecipe): Prefer `map.values().stream()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MockitoRulesRecipes$InvocationOnMockGetArgumentRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/mockitorulesrecipes$invocationonmockgetargumentrecipe): Prefer `InvocationOnMock#getArgument(int)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.MockitoRulesRecipes$VerifyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/mockitorulesrecipes$verifyrecipe): Prefer `Mockito#verify(Object)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.NullRulesRecipes$EqualToNullRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/nullrulesrecipes$equaltonullrecipe): Prefer `== null` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.NullRulesRecipes$NotEqualToNullRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/nullrulesrecipes$notequaltonullrecipe): Prefer `!= null` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.NullRulesRecipes$ObjectsIsNullRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/nullrulesrecipes$objectsisnullrecipe): Prefer `Objects#isNull(Object)` over less idiomatic or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.NullRulesRecipes$ObjectsNonNullRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/nullrulesrecipes$objectsnonnullrecipe): Prefer `Objects#nonNull(Object)` over less idiomatic or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalEqualsOptionalOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/optionalrulesrecipes$optionalequalsoptionalofrecipe): Prefer `Optional#equals(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalFilterIsPresentRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/optionalrulesrecipes$optionalfilterispresentrecipe): Prefer `Optional#filter(Predicate)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalMapWithFunctionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/optionalrulesrecipes$optionalmapwithfunctionrecipe): Prefer `Optional#map(Function)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalOrElseThrowWithOptionalRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/optionalrulesrecipes$optionalorelsethrowwithoptionalrecipe): Prefer `Optional#orElseThrow()` over the less explicit `Optional#get()`. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalOrOrElseThrowRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/optionalrulesrecipes$optionalororelsethrowrecipe): Prefer `Optional#or(Supplier)` combined with `Optional#orElseThrow()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalOrRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/optionalrulesrecipes$optionalorrecipe): Prefer `Optional#or(Supplier)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$StreamFlatMapOptionalStreamRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/optionalrulesrecipes$streamflatmapoptionalstreamrecipe): Prefer `Optional#stream()` over more verbose or non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$StreamsStreamFindFirstRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/optionalrulesrecipes$streamsstreamfindfirstrecipe): Prefer `Streams.stream(iterator).findFirst()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.PreconditionsRulesRecipes$RequireNonNullExpressionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/preconditionsrulesrecipes$requirenonnullexpressionrecipe): Prefer `Objects#requireNonNull(Object)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.PreconditionsRulesRecipes$RequireNonNullWithStringExpressionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/preconditionsrulesrecipes$requirenonnullwithstringexpressionrecipe): Prefer `Objects#requireNonNull(Object, String)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedByteRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/primitiverulesrecipes$arrayscompareunsignedbyterecipe): Prefer `Arrays#compareUnsigned(byte[], byte[])` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/primitiverulesrecipes$arrayscompareunsignedintrecipe): Prefer `Arrays#compareUnsigned(int[], int[])` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedLongRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/primitiverulesrecipes$arrayscompareunsignedlongrecipe): Prefer `Arrays#compareUnsigned(long[], long[])` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerParseUnsignedIntWithIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/primitiverulesrecipes$integerparseunsignedintwithintrecipe): Prefer `Integer#parseUnsignedInt(String, int)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerToUnsignedStringWithIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/primitiverulesrecipes$integertounsignedstringwithintrecipe): Prefer `Integer#toUnsignedString(int, int)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongParseUnsignedLongWithIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/primitiverulesrecipes$longparseunsignedlongwithintrecipe): Prefer `Long#parseUnsignedLong(String, int)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongToUnsignedStringWithIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/primitiverulesrecipes$longtounsignedstringwithintrecipe): Prefer `Long#toUnsignedString(long, int)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$MathToIntExactRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/primitiverulesrecipes$mathtointexactrecipe): Prefer `Math#toIntExact(long)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextDoublePlusRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/randomgeneratorrulesrecipes$randomgeneratornextdoubleplusrecipe): &lt;strong>Warning:&lt;/strong> this rewrite may change the distribution of generated values; the
 before-template can silently yield a non-uniform domain. 
* [tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextIntPlusRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/randomgeneratorrulesrecipes$randomgeneratornextintplusrecipe): &lt;strong>Warning:&lt;/strong> this rewrite may change the set of generated values; the
 before-template can silently yield values outside the intended domain. 
* [tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextLongPlusRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/randomgeneratorrulesrecipes$randomgeneratornextlongplusrecipe): &lt;strong>Warning:&lt;/strong> this rewrite may change the set of generated values; the
 before-template can silently yield values outside the intended domain. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxAsStepVerifierCreateExpectNextRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxasstepverifiercreateexpectnextrecipe): Prefer using `FirstStep#expectNext(Object)` over collecting a single-element `Flux` into a list. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxAsStepVerifierCreateRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxasstepverifiercreaterecipe): Prefer `Flux#as(Function)` when creating a `StepVerifier`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxConcatMapIterableIdentityRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxconcatmapiterableidentityrecipe): Prefer `Flux#concatMapIterable(Function)` over alternatives that require an additional subscription. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxConcatMapIterableIdentityWithIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxconcatmapiterableidentitywithintrecipe): Prefer `Flux#concatMapIterable(Function, int)` over alternatives that require an additional subscription. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxErrorThrowableRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxerrorthrowablerecipe): Prefer `Flux#error(Supplier)` over unnecessarily deferring `Flux#error(Throwable)`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFromStreamRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxfromstreamrecipe): Prefer `Flux#fromStream(Supplier)` over `Flux#fromStream(Stream)`, as the former yields a `Flux` that is more likely to behave as expected when subscribed to more than once. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxIdentityRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxidentityrecipe): Prefer using `Flux`s as-is over unnecessarily passing an empty publisher to `Flux#switchIfEmpty(Publisher)`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxJustVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxjustvarargsrecipe): Prefer `Flux#just(Object[])` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxMapNotNullOptionalOrElseNullRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxmapnotnulloptionalorelsenullrecipe): Prefer `Flux#mapNotNull(Function)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorCompleteWithPredicateRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrorcompletewithpredicaterecipe): Prefer `Flux#onErrorComplete(Predicate)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenWithMonoRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenwithmonorecipe): Prefer `Flux#then(Mono)` over vacuously invoking `Flux#ignoreElements()`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMathFluxMaxSingleOrEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmathfluxmaxsingleoremptyrecipe): Prefer `MathFlux#max(Publisher)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMathFluxMaxSingleOrEmptyWithComparatorRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmathfluxmaxsingleoremptywithcomparatorrecipe): Prefer `MathFlux#max(Publisher, Comparator)` over less efficient or more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMathFluxMinSingleOrEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmathfluxminsingleoremptyrecipe): Prefer `MathFlux#min(Publisher)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMathFluxMinSingleOrEmptyWithComparatorRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmathfluxminsingleoremptywithcomparatorrecipe): Prefer `MathFlux#min(Publisher, Comparator)` over less efficient or more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipMapFunctionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipmapfunctionrecipe): Prefer `Flux#zip(Publisher, Publisher)` with a chained combinator over a chained `Flux#zipWith(Publisher, BiFunction)`, as the former better conveys that the `Publisher`s may be subscribed to concurrently, and generalizes to combining three or more reactive streams. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithIterableWithBiFunctionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithiterablewithbifunctionrecipe): Prefer `Flux#zipWithIterable(Iterable, BiFunction)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyCompleteRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifycompleterecipe): Prefer `StepVerifier.LastStep#verifyComplete()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorMatchesRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrormatchesrecipe): Prefer `StepVerifier.LastStep#verifyErrorMatches(Predicate)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrormessagerecipe): Prefer `StepVerifier.LastStep#verifyErrorMessage(String)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrorrecipe): Prefer `StepVerifier.LastStep#verifyError()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorSatisfiesAssertThatIsInstanceOfHasMessageRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrorsatisfiesassertthatisinstanceofhasmessagerecipe): Prefer `StepVerifier.LastStep#verifyErrorSatisfies(Consumer)` with AssertJ over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorSatisfiesRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrorsatisfiesrecipe): Prefer `StepVerifier.LastStep#verifyErrorSatisfies(Consumer)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorWithClassRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrorwithclassrecipe): Prefer `StepVerifier.LastStep#verifyError(Class)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyTimeoutRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifytimeoutrecipe): Prefer `StepVerifier.LastStep#verifyTimeout(Duration)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoAsStepVerifierCreateRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monoasstepverifiercreaterecipe): Prefer `Mono#as(Function)` when creating a `StepVerifier`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoErrorThrowableRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monoerrorthrowablerecipe): Prefer `Mono#error(Supplier)` over unnecessarily deferring `Mono#error(Throwable)`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureAsyncLoadingCacheGetAllTrueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfutureasyncloadingcachegetalltruerecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes cancellation propagation behavior. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureAsyncLoadingCacheGetTrueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfutureasyncloadingcachegettruerecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes cancellation propagation behavior. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfuturerecipe): Prefer `Mono#fromFuture(Supplier)` over `Mono#fromFuture(CompletableFuture)`, as the former may defer initiation of the asynchronous computation until subscription. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureWithBooleanRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfuturewithbooleanrecipe): Prefer `Mono#fromFuture(Supplier, boolean)` over `Mono#fromFuture(CompletableFuture, boolean)`, as the former may defer initiation of the asynchronous computation until subscription. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoJustOrEmptySwitchIfEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monojustoremptyswitchifemptyrecipe): In particular, avoid mixing of the `Optional` and `Mono` APIs. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompleteWithClassRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcompletewithclassrecipe): Prefer `Mono#onErrorComplete(Class)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompleteWithPredicateRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcompletewithpredicaterecipe): Prefer `Mono#onErrorComplete(Predicate)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenFluxRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monothenfluxrecipe): Prefer explicit invocation of `Mono#flux()` over implicit conversions from `Mono` to `Flux`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenWithMonoRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monothenwithmonorecipe): Prefer `Mono#then(Mono)` over applying vacuous operations first. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutMonoEmptyDurationRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutmonoemptydurationrecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior if the source can emit or propagate
 a `TimeoutException`: the original code suppresses any such signal, while the replacement
 only handles the one emitted by the `timeout` operator itself. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutMonoEmptyPublisherRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutmonoemptypublisherrecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior if the source can emit or propagate
 a `TimeoutException`: the original code suppresses any such signal, while the replacement
 only handles the one emitted by the `timeout` operator itself. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutMonoJustDurationRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutmonojustdurationrecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior if the source can emit or propagate
 a `TimeoutException`: the original code suppresses any such signal, while the replacement
 only handles the one emitted by the `timeout` operator itself. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutMonoJustPublisherRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutmonojustpublisherrecipe): &lt;strong>Warning:&lt;/strong> this rewrite changes behavior if the source can emit or propagate
 a `TimeoutException`: the original code suppresses any such signal, while the replacement
 only handles the one emitted by the `timeout` operator itself. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoZipMapFunctionRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$monozipmapfunctionrecipe): Prefer `Mono#zip(Mono, Mono)` with a chained combinator over a chained `Mono#zipWith(Mono, BiFunction)`, as the former better conveys that the `Mono`s may be subscribed to concurrently, and generalizes to combining three or more reactive streams. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepExpectNextRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$stepexpectnextrecipe): Prefer `StepVerifier.Step#expectNext(Object)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierVerifyWithDurationRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierverifywithdurationrecipe): Prefer `StepVerifier#verify(Duration)` over a dangling `StepVerifier#verifyThenAssertThat(Duration)`. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$CompletableAsRxJava2AdapterCompletableToMonoRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipes$completableasrxjava2adaptercompletabletomonorecipe): Prefer `RxJava2Adapter#completableToMono(Completable)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$FlowableAsRxJava2AdapterFlowableToFluxRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipes$flowableasrxjava2adapterflowabletofluxrecipe): Prefer `RxJava2Adapter#flowableToFlux(Flowable)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$FluxAsRxJava2AdapterFluxToFlowableRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipes$fluxasrxjava2adapterfluxtoflowablerecipe): Prefer `RxJava2Adapter#fluxToFlowable(Flux)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$FluxAsRxJava2AdapterFluxToObservableRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipes$fluxasrxjava2adapterfluxtoobservablerecipe): Prefer `RxJava2Adapter#fluxToObservable(Flux)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MaybeAsRxJava2AdapterMaybeToMonoRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipes$maybeasrxjava2adaptermaybetomonorecipe): Prefer `RxJava2Adapter#maybeToMono(Maybe)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoAsRxJava2AdapterMonoToCompletableRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipes$monoasrxjava2adaptermonotocompletablerecipe): Prefer `RxJava2Adapter#monoToCompletable(Mono)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoAsRxJava2AdapterMonoToFlowableRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipes$monoasrxjava2adaptermonotoflowablerecipe): Prefer `RxJava2Adapter#monoToFlowable(Mono)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoAsRxJava2AdapterMonoToMaybeRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipes$monoasrxjava2adaptermonotomayberecipe): Prefer `RxJava2Adapter#monoToMaybe(Mono)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoAsRxJava2AdapterMonoToSingleRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipes$monoasrxjava2adaptermonotosinglerecipe): Prefer `RxJava2Adapter#monoToSingle(Mono)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$ObservableToFlowableAsRxJava2AdapterFlowableToFluxRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipes$observabletoflowableasrxjava2adapterflowabletofluxrecipe): Prefer chaining `Observable#toFlowable(BackpressureStrategy)` with `RxJava2Adapter#flowableToFlux(Flowable)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$SingleAsRxJava2AdapterSingleToMonoRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipes$singleasrxjava2adaptersingletomonorecipe): Prefer `RxJava2Adapter#singleToMono(Single)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.SpringTestRulesRecipes$BodyContentSpecJsonJsonCompareModeLenientRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/springtestrulesrecipes$bodycontentspecjsonjsoncomparemodelenientrecipe): Prefer `BodyContentSpec#json(String, JsonCompareMode)` with lenient mode over deprecated alternatives. 
* [tech.picnic.errorprone.refasterrules.SpringTestRulesRecipes$BodyContentSpecJsonJsonCompareModeStrictRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/springtestrulesrecipes$bodycontentspecjsonjsoncomparemodestrictrecipe): Prefer `BodyContentSpec#json(String, JsonCompareMode)` with strict mode over deprecated alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamConcatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/streamrulesrecipes$streamconcatrecipe): Prefer `Stream#concat(Stream, Stream)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFindFirstMapRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/streamrulesrecipes$streamfindfirstmaprecipe): Prefer `stream.findFirst().map(function)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamIdentityRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/streamrulesrecipes$streamidentityrecipe): Prefer the `Stream` as-is over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapMapGetFilterObjectsNonNullRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/streamrulesrecipes$streammapmapgetfilterobjectsnonnullrecipe): Prefer `stream.map(map::get).filter(Objects::nonNull)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamReduceWithObjectRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/streamrulesrecipes$streamreducewithobjectrecipe): Prefer `Stream#reduce(Object, BinaryOperator)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$FormattedRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$formattedrecipe): Prefer `String#formatted(Object...)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringIndexOfMinusIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringindexofminusintrecipe): Prefer `String#indexOf(int, int)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringIndexOfMinusIntWithIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringindexofminusintwithintrecipe): Prefer `String#indexOf(int, int, int)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringIndexOfMinusStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringindexofminusstringrecipe): Prefer `String#indexOf(String, int)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringIndexOfMinusStringWithIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringindexofminusstringwithintrecipe): Prefer `String#indexOf(String, int)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringLastIndexOfMinusIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringlastindexofminusintrecipe): Prefer `String#lastIndexOf(int, int)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringLastIndexOfMinusStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringlastindexofminusstringrecipe): Prefer `String#lastIndexOf(String, int)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$NewString1Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$newstring1recipe): Prefer `String#String(char[])` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$NewString3Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$newstring3recipe): Prefer `String#String(char[], int, int)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$NotStringIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$notstringisemptyrecipe): Prefer `not(String::isEmpty)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$OptionalFilterNotStringIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$optionalfilternotstringisemptyrecipe): Prefer `Optional#filter(Predicate)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$OptionalOfNullableFilterNotStringIsEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$optionalofnullablefilternotstringisemptyrecipe): Prefer `Optional.ofNullable(str).filter(not(String::isEmpty))` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsEmptyWithStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$stringisemptywithstringrecipe): Prefer `String#isEmpty()` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringJoinRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$stringjoinrecipe): Prefer `String#join(CharSequence, Iterable)` over non-JDK or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringJoinVarargsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$stringjoinvarargsrecipe): Prefer `String#join(CharSequence, CharSequence...)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfMinusOneIntRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofminusoneintrecipe): Prefer `String#lastIndexOf(int, int)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfMinusOneStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofminusonestringrecipe): &lt;strong>Warning:&lt;/strong> when `str2` is empty, this rewrite changes the result: the
 original expression returns `fromIndex`, while the replacement returns `fromIndex -
 1`. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringSubstringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$stringsubstringrecipe): Prefer `String#substring(int)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringValueOfWithObjectRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$stringvalueofwithobjectrecipe): Prefer `String#valueOf(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringsIsNullOrEmptyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes$stringsisnulloremptyrecipe): Prefer `Strings#isNullOrEmpty(String)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.SuggestedFixRulesRecipes$SuggestedFixReplace2Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/suggestedfixrulesrecipes$suggestedfixreplace2recipe): Prefer `SuggestedFix#replace(Tree, String)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.SuggestedFixRulesRecipes$SuggestedFixReplace3Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/suggestedfixrulesrecipes$suggestedfixreplace3recipe): Prefer `SuggestedFix#replace(int, int, String)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.SuggestedFixRulesRecipes$SuggestedFixReplace4Recipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/suggestedfixrulesrecipes$suggestedfixreplace4recipe): Prefer `SuggestedFix#replace(Tree, String, int, int)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatContainsExactlyElementsOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatcontainsexactlyelementsofrecipe): Prefer `AbstractIterableAssert#containsExactlyElementsOf(Iterable)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatContainsExactlyInAnyOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatcontainsexactlyinanyorderrecipe): Prefer `assertThat(...).containsExactlyInAnyOrder(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatContainsExactlyOffsetDoubleRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatcontainsexactlyoffsetdoublerecipe): Prefer `assertThat(...).containsExactly(..., offset(...))` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatContainsExactlyOffsetFloatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatcontainsexactlyoffsetfloatrecipe): Prefer `assertThat(...).containsExactly(..., offset(...))` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatContainsExactlyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatcontainsexactlyrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatHasSameElementsAsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthathassameelementsasrecipe): Prefer `AbstractIterableAssert#hasSameElementsAs(Iterable)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsCloseToOffsetDoubleRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisclosetooffsetdoublerecipe): Prefer `AbstractDoubleAssert#isCloseTo(double, Offset)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsCloseToOffsetFloatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisclosetooffsetfloatrecipe): Prefer `AbstractFloatAssert#isCloseTo(float, Offset)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsEqualToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisequaltorecipe): Prefer `AbstractAssert#isEqualTo(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsFalseRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisfalserecipe): Prefer `AbstractBooleanAssert#isFalse()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNotCloseToOffsetDoubleRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnotclosetooffsetdoublerecipe): Prefer `AbstractDoubleAssert#isNotCloseTo(double, Offset)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNotCloseToOffsetFloatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnotclosetooffsetfloatrecipe): Prefer `AbstractFloatAssert#isNotCloseTo(float, Offset)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNotEqualToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnotequaltorecipe): Prefer `AbstractAssert#isNotEqualTo(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNotNullRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnotnullrecipe): Prefer `AbstractAssert#isNotNull()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNotSameAsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnotsameasrecipe): Prefer `AbstractAssert#isNotSameAs(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNullRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnullrecipe): Prefer `AbstractAssert#isNull()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsSameAsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatissameasrecipe): Prefer `AbstractAssert#isSameAs(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsTrueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatistruerecipe): Prefer `AbstractBooleanAssert#isTrue()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatToIterableContainsExactlyElementsOfImmutableListCopyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthattoiterablecontainsexactlyelementsofimmutablelistcopyofrecipe): Prefer `assertThat(...).toIterable().containsExactlyElementsOf(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatToIterableWithFailMessageContainsExactlyElementsOfImmutableListCopyOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthattoiterablewithfailmessagecontainsexactlyelementsofimmutablelistcopyofrecipe): Prefer `assertThat(...).toIterable().containsExactlyElementsOf(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyElementsOfRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyelementsofrecipe): Prefer `AbstractIterableAssert#containsExactlyElementsOf(Iterable)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyInAnyOrderRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyinanyorderrecipe): Prefer `assertThat(...).containsExactlyInAnyOrder(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetDoubleRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetdoublerecipe): Prefer `assertThat(...).containsExactly(..., offset(...))` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetFloatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetfloatrecipe): Prefer `assertThat(...).containsExactly(..., offset(...))` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyrecipe): Prefer `assertThat(...).containsExactly(...)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageHasSameElementsAsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagehassameelementsasrecipe): Prefer `AbstractIterableAssert#hasSameElementsAs(Iterable)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsCloseToOffsetDoubleRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisclosetooffsetdoublerecipe): Prefer `AbstractDoubleAssert#isCloseTo(double, Offset)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsCloseToOffsetFloatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisclosetooffsetfloatrecipe): Prefer `AbstractFloatAssert#isCloseTo(float, Offset)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsEqualToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisequaltorecipe): Prefer `AbstractAssert#isEqualTo(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsFalseRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisfalserecipe): Prefer `AbstractBooleanAssert#isFalse()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNotCloseToOffsetDoubleRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnotclosetooffsetdoublerecipe): Prefer `AbstractDoubleAssert#isNotCloseTo(double, Offset)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNotCloseToOffsetFloatRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnotclosetooffsetfloatrecipe): Prefer `AbstractFloatAssert#isNotCloseTo(float, Offset)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNotEqualToRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnotequaltorecipe): Prefer `AbstractAssert#isNotEqualTo(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNotNullRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnotnullrecipe): Prefer `AbstractAssert#isNotNull()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNotSameAsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnotsameasrecipe): Prefer `AbstractAssert#isNotSameAs(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNullRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnullrecipe): Prefer `AbstractAssert#isNull()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsSameAsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageissameasrecipe): Prefer `AbstractAssert#isSameAs(Object)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsTrueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageistruerecipe): Prefer `AbstractBooleanAssert#isTrue()` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$FailWithStringAndThrowableRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$failwithstringandthrowablerecipe): Prefer `Assertions#fail(String, Throwable)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$FailWithStringRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$failwithstringrecipe): Prefer `Assertions#fail(String)` over non-AssertJ alternatives. 
* [tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ClockSystemUTCRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/timerulesrecipes$clocksystemutcrecipe): Prefer `Clock#systemUTC()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationBetweenInstantRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/timerulesrecipes$durationbetweeninstantrecipe): &lt;strong>Warning:&lt;/strong> this rewrite rule increases precision!. 
* [tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationBetweenOffsetDateTimeRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/timerulesrecipes$durationbetweenoffsetdatetimerecipe): &lt;strong>Warning:&lt;/strong> this rewrite rule increases precision!. 
* [tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/timerulesrecipes$durationzerorecipe): Prefer `Duration#ZERO` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantEpochRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/timerulesrecipes$instantepochrecipe): Prefer `Instant#EPOCH` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantTruncatedToChronoUnitMillisRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/timerulesrecipes$instanttruncatedtochronounitmillisrecipe): Note that `Instant#toEpochMilli()` throws an `ArithmeticException` for dates
 very far in the past or future, while the suggested alternative doesn't. 
* [tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantTruncatedToChronoUnitSecondsRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/timerulesrecipes$instanttruncatedtochronounitsecondsrecipe): Prefer `Instant#truncatedTo(TemporalUnit)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.TimeRulesRecipes$PeriodZeroRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/timerulesrecipes$periodzerorecipe): Prefer `Period#ZERO` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.TimeRulesRecipes$UtcRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/timerulesrecipes$utcrecipe): Prefer `ZoneOffset#UTC` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.WebClientRulesRecipes$RequestBodySpecBodyValueRecipe](https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/webclientrulesrecipes$requestbodyspecbodyvaluerecipe): Prefer `RequestBodySpec#bodyValue(Object)` over more contrived alternatives. 

## Removed Recipes

* **org.openrewrite.staticanalysis.UseStringCaseInsensitiveOrderRecipes**: Replaces case-insensitive string comparator lambdas and method references with the JDK constant `String.CASE_INSENSITIVE_ORDER`. Improves readability and removes one closure allocation per call site. 
* **org.openrewrite.staticanalysis.UseStringCaseInsensitiveOrderRecipes$FromLambdaRecipe**: Replace `(a, b) -> a.compareToIgnoreCase(b)` with `String.CASE_INSENSITIVE_ORDER` when used as a `Comparator<String>`. 
* **org.openrewrite.staticanalysis.UseStringCaseInsensitiveOrderRecipes$FromMethodReferenceRecipe**: Replace the method reference `String::compareToIgnoreCase` with `String.CASE_INSENSITIVE_ORDER` when used as a `Comparator<String>`. 
* **tech.picnic.errorprone.refasterrules.AssertJBigIntegerRulesRecipes$AbstractBigIntegerAssertIsNotZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractBigIntegerAssertIsNotZero {
    
    @BeforeTemplate
    AbstractBigIntegerAssert<?> before(AbstractBigIntegerAssert<?> bigIntegerAssert) {
        return Refaster.anyOf(bigIntegerAssert.isNotZero(), bigIntegerAssert.isNotEqualTo(0L), bigIntegerAssert.isNotEqualTo(BigInteger.ZERO));
    }
    
    @AfterTemplate
    AbstractBigIntegerAssert<?> after(AbstractBigIntegerAssert<?> bigIntegerAssert) {
        return bigIntegerAssert.isNotEqualTo(0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJBigIntegerRulesRecipes$AbstractBigIntegerAssertIsOneRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractBigIntegerAssertIsOne {
    
    @BeforeTemplate
    AbstractBigIntegerAssert<?> before(AbstractBigIntegerAssert<?> bigIntegerAssert) {
        return Refaster.anyOf(bigIntegerAssert.isOne(), bigIntegerAssert.isEqualTo(1L), bigIntegerAssert.isEqualTo(BigInteger.ONE));
    }
    
    @AfterTemplate
    AbstractBigIntegerAssert<?> after(AbstractBigIntegerAssert<?> bigIntegerAssert) {
        return bigIntegerAssert.isEqualTo(1);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJBigIntegerRulesRecipes$AbstractBigIntegerAssertIsZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractBigIntegerAssertIsZero {
    
    @BeforeTemplate
    AbstractBigIntegerAssert<?> before(AbstractBigIntegerAssert<?> bigIntegerAssert) {
        return Refaster.anyOf(bigIntegerAssert.isZero(), bigIntegerAssert.isEqualTo(0L), bigIntegerAssert.isEqualTo(BigInteger.ZERO));
    }
    
    @AfterTemplate
    AbstractBigIntegerAssert<?> after(AbstractBigIntegerAssert<?> bigIntegerAssert) {
        return bigIntegerAssert.isEqualTo(0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJBooleanRulesRecipes$AssertThatBooleanIsFalseRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatBooleanIsFalse {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(boolean b) {
        return assertThat(!b).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractBooleanAssert<?> after(boolean b) {
        return assertThat(b).isFalse();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJBooleanRulesRecipes$AssertThatBooleanIsTrueRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatBooleanIsTrue {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(boolean b) {
        return assertThat(!b).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractBooleanAssert<?> after(boolean b) {
        return assertThat(b).isTrue();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJByteRulesRecipes$AbstractByteAssertIsNotZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractByteAssertIsNotZero {
    
    @BeforeTemplate
    AbstractByteAssert<?> before(AbstractByteAssert<?> byteAssert) {
        return byteAssert.isNotZero();
    }
    
    @AfterTemplate
    AbstractByteAssert<?> after(AbstractByteAssert<?> byteAssert) {
        return byteAssert.isNotEqualTo((byte)0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJByteRulesRecipes$AbstractByteAssertIsOneRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractByteAssertIsOne {
    
    @BeforeTemplate
    AbstractByteAssert<?> before(AbstractByteAssert<?> byteAssert) {
        return byteAssert.isOne();
    }
    
    @AfterTemplate
    AbstractByteAssert<?> after(AbstractByteAssert<?> byteAssert) {
        return byteAssert.isEqualTo((byte)1);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJByteRulesRecipes$AbstractByteAssertIsZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractByteAssertIsZero {
    
    @BeforeTemplate
    AbstractByteAssert<?> before(AbstractByteAssert<?> byteAssert) {
        return byteAssert.isZero();
    }
    
    @AfterTemplate
    AbstractByteAssert<?> after(AbstractByteAssert<?> byteAssert) {
        return byteAssert.isEqualTo((byte)0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJCharSequenceRulesRecipes$AssertThatCharSequenceHasSizeRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatCharSequenceHasSize {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(CharSequence charSequence, int length) {
        return assertThat(charSequence.length()).isEqualTo(length);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractAssert<?, ?> after(CharSequence charSequence, int length) {
        return assertThat(charSequence).hasSize(length);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJCharSequenceRulesRecipes$AssertThatCharSequenceIsEmptyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatCharSequenceIsEmpty {
    
    @BeforeTemplate
    void before(CharSequence charSequence) {
        Refaster.anyOf(assertThat(charSequence.isEmpty()).isTrue(), assertThat(charSequence.length()).isEqualTo(0L), assertThat(charSequence.length()).isNotPositive());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(CharSequence charSequence) {
        assertThat(charSequence).isEmpty();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJCharSequenceRulesRecipes$AssertThatCharSequenceIsNotEmptyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatCharSequenceIsNotEmpty {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(CharSequence charSequence) {
        return Refaster.anyOf(assertThat(charSequence.isEmpty()).isFalse(), assertThat(charSequence.length()).isNotEqualTo(0), assertThat(charSequence.length()).isPositive());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractAssert<?, ?> after(CharSequence charSequence) {
        return assertThat(charSequence).isNotEmpty();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsCloseToWithOffsetRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractDoubleAssertIsCloseToWithOffset {
    
    @BeforeTemplate
    AbstractDoubleAssert<?> before(AbstractDoubleAssert<?> doubleAssert, double n, Offset<Double> offset) {
        return doubleAssert.isEqualTo(n, offset);
    }
    
    @BeforeTemplate
    AbstractDoubleAssert<?> before(AbstractDoubleAssert<?> doubleAssert, Double n, Offset<Double> offset) {
        return doubleAssert.isEqualTo(n, offset);
    }
    
    @AfterTemplate
    AbstractDoubleAssert<?> after(AbstractDoubleAssert<?> doubleAssert, double n, Offset<Double> offset) {
        return doubleAssert.isCloseTo(n, offset);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsNotZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractDoubleAssertIsNotZero {
    
    @BeforeTemplate
    AbstractDoubleAssert<?> before(AbstractDoubleAssert<?> doubleAssert) {
        return doubleAssert.isNotZero();
    }
    
    @AfterTemplate
    AbstractDoubleAssert<?> after(AbstractDoubleAssert<?> doubleAssert) {
        return doubleAssert.isNotEqualTo(0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsOneRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractDoubleAssertIsOne {
    
    @BeforeTemplate
    AbstractDoubleAssert<?> before(AbstractDoubleAssert<?> doubleAssert) {
        return doubleAssert.isOne();
    }
    
    @AfterTemplate
    AbstractDoubleAssert<?> after(AbstractDoubleAssert<?> doubleAssert) {
        return doubleAssert.isEqualTo(1);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractDoubleAssertIsZero {
    
    @BeforeTemplate
    AbstractDoubleAssert<?> before(AbstractDoubleAssert<?> doubleAssert) {
        return doubleAssert.isZero();
    }
    
    @AfterTemplate
    AbstractDoubleAssert<?> after(AbstractDoubleAssert<?> doubleAssert) {
        return doubleAssert.isEqualTo(0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJFloatRulesRecipes$AbstractFloatAssertIsCloseToWithOffsetRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractFloatAssertIsCloseToWithOffset {
    
    @BeforeTemplate
    AbstractFloatAssert<?> before(AbstractFloatAssert<?> floatAssert, float n, Offset<Float> offset) {
        return floatAssert.isEqualTo(n, offset);
    }
    
    @BeforeTemplate
    AbstractFloatAssert<?> before(AbstractFloatAssert<?> floatAssert, Float n, Offset<Float> offset) {
        return floatAssert.isEqualTo(n, offset);
    }
    
    @AfterTemplate
    AbstractFloatAssert<?> after(AbstractFloatAssert<?> floatAssert, float n, Offset<Float> offset) {
        return floatAssert.isCloseTo(n, offset);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJFloatRulesRecipes$AbstractFloatAssertIsNotZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractFloatAssertIsNotZero {
    
    @BeforeTemplate
    AbstractFloatAssert<?> before(AbstractFloatAssert<?> floatAssert) {
        return floatAssert.isNotZero();
    }
    
    @AfterTemplate
    AbstractFloatAssert<?> after(AbstractFloatAssert<?> floatAssert) {
        return floatAssert.isNotEqualTo(0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJFloatRulesRecipes$AbstractFloatAssertIsOneRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractFloatAssertIsOne {
    
    @BeforeTemplate
    AbstractFloatAssert<?> before(AbstractFloatAssert<?> floatAssert) {
        return floatAssert.isOne();
    }
    
    @AfterTemplate
    AbstractFloatAssert<?> after(AbstractFloatAssert<?> floatAssert) {
        return floatAssert.isEqualTo(1);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJFloatRulesRecipes$AbstractFloatAssertIsZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractFloatAssertIsZero {
    
    @BeforeTemplate
    AbstractFloatAssert<?> before(AbstractFloatAssert<?> floatAssert) {
        return floatAssert.isZero();
    }
    
    @AfterTemplate
    AbstractFloatAssert<?> after(AbstractFloatAssert<?> floatAssert) {
        return floatAssert.isEqualTo(0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJIntegerRulesRecipes$AbstractIntegerAssertIsNotZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractIntegerAssertIsNotZero {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(AbstractIntegerAssert<?> intAssert) {
        return intAssert.isNotZero();
    }
    
    @AfterTemplate
    AbstractIntegerAssert<?> after(AbstractIntegerAssert<?> intAssert) {
        return intAssert.isNotEqualTo(0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJIntegerRulesRecipes$AbstractIntegerAssertIsOneRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractIntegerAssertIsOne {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(AbstractIntegerAssert<?> intAssert) {
        return intAssert.isOne();
    }
    
    @AfterTemplate
    AbstractIntegerAssert<?> after(AbstractIntegerAssert<?> intAssert) {
        return intAssert.isEqualTo(1);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJIntegerRulesRecipes$AbstractIntegerAssertIsZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractIntegerAssertIsZero {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(AbstractIntegerAssert<?> intAssert) {
        return intAssert.isZero();
    }
    
    @AfterTemplate
    AbstractIntegerAssert<?> after(AbstractIntegerAssert<?> intAssert) {
        return intAssert.isEqualTo(0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatIterableHasOneElementEqualToRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatIterableHasOneElementEqualTo<S, E extends S> {
    
    @BeforeTemplate
    ObjectAssert<S> before(Iterable<S> iterable, E element) {
        return assertThat(Iterables.getOnlyElement(iterable)).isEqualTo(element);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    IterableAssert<S> after(Iterable<S> iterable, E element) {
        return assertThat(iterable).containsExactly(element);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatIterableIsEmptyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatIterableIsEmpty<E> {
    
    @BeforeTemplate
    void before(Iterable<E> iterable) {
        assertThat(iterable.iterator()).isExhausted();
    }
    
    @BeforeTemplate
    void before(Collection<E> iterable) {
        assertThat(iterable.isEmpty()).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Iterable<E> iterable) {
        assertThat(iterable).isEmpty();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatIterableIsNotEmptyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatIterableIsNotEmpty<E> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(Iterable<E> iterable) {
        return assertThat(iterable.iterator()).hasNext();
    }
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(Collection<E> iterable) {
        return assertThat(iterable.isEmpty()).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    IterableAssert<E> after(Iterable<E> iterable) {
        return assertThat(iterable).isNotEmpty();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatIterableSizeRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatIterableSize<E> {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(Iterable<E> iterable) {
        return assertThat(Iterables.size(iterable));
    }
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(Collection<E> iterable) {
        return assertThat(iterable.size());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractIntegerAssert<?> after(Iterable<E> iterable) {
        return assertThat(iterable).size();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJLongRulesRecipes$AbstractLongAssertIsNotZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractLongAssertIsNotZero {
    
    @BeforeTemplate
    AbstractLongAssert<?> before(AbstractLongAssert<?> longAssert) {
        return longAssert.isNotZero();
    }
    
    @AfterTemplate
    AbstractLongAssert<?> after(AbstractLongAssert<?> longAssert) {
        return longAssert.isNotEqualTo(0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJLongRulesRecipes$AbstractLongAssertIsOneRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractLongAssertIsOne {
    
    @BeforeTemplate
    AbstractLongAssert<?> before(AbstractLongAssert<?> longAssert) {
        return longAssert.isOne();
    }
    
    @AfterTemplate
    AbstractLongAssert<?> after(AbstractLongAssert<?> longAssert) {
        return longAssert.isEqualTo(1);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJLongRulesRecipes$AbstractLongAssertIsZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractLongAssertIsZero {
    
    @BeforeTemplate
    AbstractLongAssert<?> before(AbstractLongAssert<?> longAssert) {
        return longAssert.isZero();
    }
    
    @AfterTemplate
    AbstractLongAssert<?> after(AbstractLongAssert<?> longAssert) {
        return longAssert.isEqualTo(0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AbstractMapAssertContainsExactlyEntriesOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractMapAssertContainsExactlyEntriesOf<K, V> {
    
    @BeforeTemplate
    AbstractMapAssert<?, ?, K, V> before(AbstractMapAssert<?, ?, K, V> mapAssert, K key, V value) {
        return mapAssert.containsExactlyInAnyOrderEntriesOf(ImmutableMap.of(key, value));
    }
    
    @AfterTemplate
    AbstractMapAssert<?, ?, K, V> after(AbstractMapAssert<?, ?, K, V> mapAssert, K key, V value) {
        return mapAssert.containsExactlyEntriesOf(ImmutableMap.of(key, value));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapContainsKeyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatMapContainsKey<K, V> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(Map<K, V> map, K key) {
        return Refaster.anyOf(assertThat(map.containsKey(key)).isTrue(), assertThat(map.keySet()).contains(key));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, K key) {
        return assertThat(map).containsKey(key);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapContainsOnlyKeyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatMapContainsOnlyKey<K, V> {
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends K>, K, ?> before(Map<K, V> map, K key) {
        return assertThat(map.keySet()).containsExactly(key);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, K key) {
        return assertThat(map).containsOnlyKeys(key);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapContainsOnlyKeysRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatMapContainsOnlyKeys<K, V> {
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends K>, K, ?> before(Map<K, V> map, Iterable<? extends K> keys) {
        return assertThat(map.keySet()).hasSameElementsAs(keys);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, Iterable<? extends K> keys) {
        return assertThat(map).containsOnlyKeys(keys);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapContainsValueRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatMapContainsValue<K, V> {
    
    @BeforeTemplate
    AbstractAssert<? extends AbstractAssert<?, ?>, ? extends Object> before(Map<K, V> map, V value) {
        return Refaster.anyOf(assertThat(map.containsValue(value)).isTrue(), assertThat(map.values()).contains(value));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, V value) {
        return assertThat(map).containsValue(value);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapDoesNotContainKeyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatMapDoesNotContainKey<K, V> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(Map<K, V> map, K key) {
        return Refaster.anyOf(assertThat(map.containsKey(key)).isFalse(), assertThat(map.keySet()).doesNotContain(key));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, K key) {
        return assertThat(map).doesNotContainKey(key);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapDoesNotContainValueRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatMapDoesNotContainValue<K, V> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(Map<K, V> map, V value) {
        return Refaster.anyOf(assertThat(map.containsValue(value)).isFalse(), assertThat(map.values()).doesNotContain(value));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, V value) {
        return assertThat(map).doesNotContainValue(value);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapIsEmptyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatMapIsEmpty<K, V> {
    
    @BeforeTemplate
    void before(Map<K, V> map) {
        Refaster.anyOf(assertThat(map).hasSize(0), assertThat(map.isEmpty()).isTrue(), assertThat(map.size()).isEqualTo(0L), assertThat(map.size()).isNotPositive());
    }
    
    @BeforeTemplate
    void before2(Map<K, V> map) {
        assertThat(Refaster.anyOf(map.keySet(), map.values(), map.entrySet())).isEmpty();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Map<K, V> map) {
        assertThat(map).isEmpty();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsInstanceOf2Recipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatIsInstanceOf2<S, T> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(T object, Class<S> clazz) {
        return assertThat(clazz.isInstance(object)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectAssert<T> after(T object, Class<S> clazz) {
        return assertThat(object).isInstanceOf(clazz);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsIsEqualToRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatIsIsEqualTo<S, T> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(S object1, T object2) {
        return assertThat(object1.equals(object2)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectAssert<S> after(S object1, T object2) {
        return assertThat(object1).isEqualTo(object2);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsIsNotEqualToRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatIsIsNotEqualTo<S, T> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(S object1, T object2) {
        return assertThat(object1.equals(object2)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectAssert<S> after(S object1, T object2) {
        return assertThat(object1).isNotEqualTo(object2);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatOptionalHasValueMatchingRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatOptionalHasValueMatching<T> {
    
    @BeforeTemplate
    AbstractOptionalAssert<?, T> before(Optional<T> optional, Predicate<? super T> predicate) {
        return assertThat(optional.filter(predicate)).isPresent();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, T> after(Optional<T> optional, Predicate<? super T> predicate) {
        return assertThat(optional).get().matches(predicate);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatOptionalIsEmptyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatOptionalIsEmpty<T> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(Optional<T> optional) {
        return Refaster.anyOf(assertThat(optional.isEmpty()).isTrue(), assertThat(optional.isPresent()).isFalse());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    OptionalAssert<T> after(Optional<T> optional) {
        return assertThat(optional).isEmpty();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatOptionalIsPresentRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatOptionalIsPresent<T> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(Optional<T> optional) {
        return Refaster.anyOf(assertThat(optional.isPresent()).isTrue(), assertThat(optional.isEmpty()).isFalse());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    OptionalAssert<T> after(Optional<T> optional) {
        return assertThat(optional).isPresent();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatOptionalRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatOptional<T> {
    
    @BeforeTemplate
    ObjectAssert<T> before(Optional<T> optional) {
        return assertThat(optional.orElseThrow());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, T> after(Optional<T> optional) {
        return assertThat(optional).get();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatListsAreEqualRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatListsAreEqual<S, T extends S> {
    
    @BeforeTemplate
    ListAssert<S> before(List<S> list1, Iterable<T> list2) {
        return assertThat(list1).isEqualTo(list2);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(List<S> list1, Iterable<T> list2) {
        return assertThat(list1).containsExactlyElementsOf(list2);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatMapContainsEntryRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatMapContainsEntry<K, V> {
    
    @BeforeTemplate
    ObjectAssert<V> before(Map<K, V> map, K key, V value) {
        return assertThat(map.get(key)).isEqualTo(value);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, K key, V value) {
        return assertThat(map).containsEntry(key, value);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatMultisetsAreEqualRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatMultisetsAreEqual<S, T extends S> {
    
    @BeforeTemplate
    AbstractCollectionAssert<?, ?, S, ?> before(Multiset<S> multiset1, Iterable<T> multiset2) {
        return assertThat(multiset1).isEqualTo(multiset2);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractCollectionAssert<?, ?, S, ?> after(Multiset<S> multiset1, Iterable<T> multiset2) {
        return assertThat(multiset1).containsExactlyInAnyOrderElementsOf(multiset2);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatOptionalDoubleRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatOptionalDouble {
    
    @BeforeTemplate
    AbstractDoubleAssert<?> before(OptionalDouble optional, double expected) {
        return assertThat(optional.getAsDouble()).isEqualTo(expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    OptionalDoubleAssert after(OptionalDouble optional, double expected) {
        return assertThat(optional).hasValue(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatOptionalIntRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatOptionalInt {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(OptionalInt optional, int expected) {
        return assertThat(optional.getAsInt()).isEqualTo(expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    OptionalIntAssert after(OptionalInt optional, int expected) {
        return assertThat(optional).hasValue(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatOptionalLongRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatOptionalLong {
    
    @BeforeTemplate
    AbstractLongAssert<?> before(OptionalLong optional, long expected) {
        return assertThat(optional.getAsLong()).isEqualTo(expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    OptionalLongAssert after(OptionalLong optional, long expected) {
        return assertThat(optional).hasValue(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatPredicateAcceptsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatPredicateAccepts<T> {
    
    @BeforeTemplate
    void before(Predicate<T> predicate, T object) {
        assertThat(predicate.test(object)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Predicate<T> predicate, T object) {
        assertThat(predicate).accepts(object);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatPredicateRejectsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatPredicateRejects<T> {
    
    @BeforeTemplate
    void before(Predicate<T> predicate, T object) {
        assertThat(predicate.test(object)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Predicate<T> predicate, T object) {
        assertThat(predicate).rejects(object);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatSetContainsExactlyOneElementRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatSetContainsExactlyOneElement<S, T extends S> {
    
    @BeforeTemplate
    ObjectEnumerableAssert<?, S> before(Set<S> set, T element) {
        return assertThat(set).containsOnly(element);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectEnumerableAssert<?, S> after(Set<S> set, T element) {
        return assertThat(set).containsExactly(element);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatSetsAreEqualRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatSetsAreEqual<S, T extends S> {
    
    @BeforeTemplate
    AbstractCollectionAssert<?, ?, S, ?> before(Set<S> set1, Iterable<T> set2) {
        return Refaster.anyOf(assertThat(set1).isEqualTo(set2), assertThat(set1).containsExactlyInAnyOrderElementsOf(set2));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractCollectionAssert<?, ?, S, ?> after(Set<S> set1, Iterable<T> set2) {
        return assertThat(set1).hasSameElementsAs(set2);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsAllRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsAll<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsAll(iterable);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).containsAll(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before3(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsAll(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsAll(iterable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsAnyElementsOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsAnyElementsOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyElementsOf(iterable);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyElementsOf(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before3(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyElementsOf(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsAnyElementsOf(iterable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsAnyOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsAnyOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyOf(array);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, U[] array, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyOf(array);
    }
    
    @BeforeTemplate
    ListAssert<T> before3(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyOf(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).containsAnyOf(array);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsAnyOfVarArgsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsAnyOfVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsAnyOf")
    IterableAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyOf(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsAnyOf")
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyOf(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsAnyOf")
    ListAssert<T> before3(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyOf(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "ObjectEnumerableContainsOneElement")
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsAnyOf(elements);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyElementsOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactlyElementsOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyElementsOf(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsExactlyElementsOf(iterable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyInAnyOrderElementsOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactlyInAnyOrderElementsOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrderElementsOf(iterable);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, ?, T, ?> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Multiset<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrderElementsOf(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsExactlyInAnyOrderElementsOf(iterable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyInAnyOrderRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactlyInAnyOrder<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrder(array);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, ?, T, ?> before2(Stream<S> stream, U[] array, Collector<S, ?, ? extends Multiset<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrder(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).containsExactlyInAnyOrder(array);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyInAnyOrderVarArgsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactlyInAnyOrderVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsExactlyInAnyOrder")
    ListAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrder(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsExactlyInAnyOrder")
    AbstractCollectionAssert<?, ?, T, ?> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Multiset<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrder(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "ObjectEnumerableContainsExactlyOneElement")
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsExactlyInAnyOrder(elements);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactly<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactly(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).containsExactly(array);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyVarargsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactlyVarargs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsExactly")
    ListAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactly(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsExactly(elements);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsOnlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsOnly<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsOnly(array);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, U[] array, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).containsOnly(array);
    }
    
    @BeforeTemplate
    ListAssert<T> before3(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsOnly(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).containsOnly(array);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsOnlyVarArgsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsOnlyVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsOnly")
    IterableAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsOnly(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsOnly")
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).containsOnly(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsOnly")
    ListAssert<T> before3(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsOnly(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsOnly(elements);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContains<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).contains(array);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, U[] array, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).contains(array);
    }
    
    @BeforeTemplate
    ListAssert<T> before3(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).contains(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).contains(array);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsSequenceRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsSequence<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSequence(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, U[] iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSequence(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsSequence(iterable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsSequenceVarArgsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsSequenceVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsSequence")
    ListAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSequence(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "ObjectEnumerableContainsOneElement")
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsSequence(elements);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsSubsequenceRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsSubsequence<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSubsequence(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, U[] iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSubsequence(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsSubsequence(iterable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsSubsequenceVarArgsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsSubsequenceVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsSubsequence")
    ListAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSubsequence(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "ObjectEnumerableContainsOneElement")
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsSubsequence(elements);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsVarArgsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContains")
    IterableAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).contains(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContains")
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).contains(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContains")
    ListAssert<T> before3(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).contains(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).contains(elements);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamDoesNotContainAnyElementsOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamDoesNotContainAnyElementsOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContainAnyElementsOf(iterable);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContainAnyElementsOf(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before3(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContainAnyElementsOf(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).doesNotContainAnyElementsOf(iterable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamDoesNotContainRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamDoesNotContain<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContain(array);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, U[] array, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContain(array);
    }
    
    @BeforeTemplate
    ListAssert<T> before3(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContain(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).doesNotContain(array);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamDoesNotContainSequenceRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamDoesNotContainSequence<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContainSequence(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, U[] iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContainSequence(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).doesNotContainSequence(iterable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamDoesNotContainSequenceVarArgsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamDoesNotContainSequenceVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamDoesNotContainSequence")
    ListAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContainSequence(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "ObjectEnumerableDoesNotContainOneElement")
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).doesNotContainSequence(elements);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamDoesNotContainVarArgsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamDoesNotContainVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamDoesNotContain")
    IterableAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContain(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamDoesNotContain")
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContain(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamDoesNotContain")
    ListAssert<T> before3(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContain(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).doesNotContain(elements);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamHasSameElementsAsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamHasSameElementsAs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).hasSameElementsAs(iterable);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).hasSameElementsAs(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before3(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).hasSameElementsAs(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).hasSameElementsAs(iterable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamIsSubsetOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamIsSubsetOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(iterable);
    }
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, U[] iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(iterable);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(iterable);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, U[] iterable, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before3(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before3(Stream<S> stream, U[] iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] iterable) {
        return assertThat(stream).isSubsetOf(iterable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamIsSubsetOfVarArgsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStreamIsSubsetOfVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamIsSubsetOf")
    IterableAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamIsSubsetOf")
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamIsSubsetOf")
    ListAssert<T> before3(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).isSubsetOf(elements);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$ObjectEnumerableContainsOneElementRecipe**: Recipe created for the following Refaster template:
```java
static final class ObjectEnumerableContainsOneElement<S, T extends S> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "unchecked")
    ObjectEnumerableAssert<?, S> before(ObjectEnumerableAssert<?, S> iterAssert, T element) {
        return Refaster.anyOf(iterAssert.containsAnyOf(element), iterAssert.containsSequence(element), iterAssert.containsSubsequence(element));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "unchecked")
    ObjectEnumerableAssert<?, S> after(ObjectEnumerableAssert<?, S> iterAssert, T element) {
        return iterAssert.contains(element);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$ObjectEnumerableDoesNotContainOneElementRecipe**: Recipe created for the following Refaster template:
```java
static final class ObjectEnumerableDoesNotContainOneElement<S, T extends S> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "unchecked")
    ObjectEnumerableAssert<?, S> before(ObjectEnumerableAssert<?, S> iterAssert, T element) {
        return iterAssert.doesNotContainSequence(element);
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "unchecked")
    ObjectEnumerableAssert<?, S> after(ObjectEnumerableAssert<?, S> iterAssert, T element) {
        return iterAssert.doesNotContain(element);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJShortRulesRecipes$AbstractShortAssertIsNotZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractShortAssertIsNotZero {
    
    @BeforeTemplate
    AbstractShortAssert<?> before(AbstractShortAssert<?> shortAssert) {
        return shortAssert.isNotZero();
    }
    
    @AfterTemplate
    AbstractShortAssert<?> after(AbstractShortAssert<?> shortAssert) {
        return shortAssert.isNotEqualTo((short)0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJShortRulesRecipes$AbstractShortAssertIsOneRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractShortAssertIsOne {
    
    @BeforeTemplate
    AbstractShortAssert<?> before(AbstractShortAssert<?> shortAssert) {
        return shortAssert.isOne();
    }
    
    @AfterTemplate
    AbstractShortAssert<?> after(AbstractShortAssert<?> shortAssert) {
        return shortAssert.isEqualTo((short)1);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJShortRulesRecipes$AbstractShortAssertIsZeroRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractShortAssertIsZero {
    
    @BeforeTemplate
    AbstractShortAssert<?> before(AbstractShortAssert<?> shortAssert) {
        return shortAssert.isZero();
    }
    
    @AfterTemplate
    AbstractShortAssert<?> after(AbstractShortAssert<?> shortAssert) {
        return shortAssert.isEqualTo((short)0);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJStreamRulesRecipes$AssertThatCollectionRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatCollection<T> {
    
    @BeforeTemplate
    ListAssert<T> before(Collection<T> collection) {
        return assertThat(collection.stream());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractCollectionAssert<?, ?, T, ?> after(Collection<T> collection) {
        return assertThat(collection);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AbstractStringAssertStringIsEmptyRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractStringAssertStringIsEmpty {
    
    @BeforeTemplate
    void before(AbstractStringAssert<?> stringAssert) {
        stringAssert.isEqualTo("");
    }
    
    @AfterTemplate
    void after(AbstractStringAssert<?> stringAssert) {
        stringAssert.isEmpty();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AbstractStringAssertStringIsNotEmptyRecipe**: Recipe created for the following Refaster template:
```java
static final class AbstractStringAssertStringIsNotEmpty {
    
    @BeforeTemplate
    AbstractStringAssert<?> before(AbstractStringAssert<?> stringAssert) {
        return stringAssert.isNotEqualTo("");
    }
    
    @AfterTemplate
    AbstractStringAssert<?> after(AbstractStringAssert<?> stringAssert) {
        return stringAssert.isNotEmpty();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatPathContentRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatPathContent {
    
    @BeforeTemplate
    AbstractStringAssert<?> before(Path path, Charset charset) throws IOException {
        return assertThat(Files.readString(path, charset));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(Path path, Charset charset) {
        return assertThat(path).content(charset);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatPathContentUtf8Recipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatPathContentUtf8 {
    
    @BeforeTemplate
    AbstractStringAssert<?> before(Path path) throws IOException {
        return assertThat(Files.readString(path));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(Path path) {
        return assertThat(path).content(UTF_8);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringContainsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStringContains {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, CharSequence substring) {
        return assertThat(string.contains(substring)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, CharSequence substring) {
        return assertThat(string).contains(substring);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringDoesNotContainRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStringDoesNotContain {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, CharSequence substring) {
        return assertThat(string.contains(substring)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, CharSequence substring) {
        return assertThat(string).doesNotContain(substring);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringDoesNotEndWithRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStringDoesNotEndWith {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, String prefix) {
        return assertThat(string.endsWith(prefix)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, String prefix) {
        return assertThat(string).doesNotEndWith(prefix);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringDoesNotStartWithRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStringDoesNotStartWith {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, String prefix) {
        return assertThat(string.startsWith(prefix)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, String prefix) {
        return assertThat(string).doesNotStartWith(prefix);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringEndsWithRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStringEndsWith {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, String prefix) {
        return assertThat(string.endsWith(prefix)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, String prefix) {
        return assertThat(string).endsWith(prefix);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringStartsWithRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStringStartsWith {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, String prefix) {
        return assertThat(string.startsWith(prefix)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, String prefix) {
        return assertThat(string).startsWith(prefix);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageContainingRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByHasMessageContaining {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByAsInstanceOfThrowable")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatExceptionOfType(exceptionType).isThrownBy(throwingCallable).withMessageContaining(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(exceptionType).hasMessageContaining(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageNotContainingRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByHasMessageNotContaining {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByAsInstanceOfThrowable")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatExceptionOfType(exceptionType).isThrownBy(throwingCallable).withMessageNotContaining(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(exceptionType).hasMessageNotContaining(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageParametersRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByHasMessageParameters {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByAsInstanceOfThrowable")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message, @Repeated
    Object parameters) {
        return assertThatExceptionOfType(exceptionType).isThrownBy(throwingCallable).withMessage(message, parameters);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message, @Repeated
    Object parameters) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(exceptionType).hasMessage(message, parameters);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByAsInstanceOfThrowable")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatExceptionOfType(exceptionType).isThrownBy(throwingCallable).withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(exceptionType).hasMessage(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageStartingWithRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByHasMessageStartingWith {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByAsInstanceOfThrowable")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatExceptionOfType(exceptionType).isThrownBy(throwingCallable).withMessageStartingWith(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(exceptionType).hasMessageStartingWith(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageContainingRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIOExceptionHasMessageContaining {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIOException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIOException().isThrownBy(throwingCallable).withMessageContaining(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IOException.class).hasMessageContaining(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageNotContainingRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIOExceptionHasMessageNotContaining {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIOException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIOException().isThrownBy(throwingCallable).withMessageNotContaining(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IOException.class).hasMessageNotContaining(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageParametersRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIOExceptionHasMessageParameters {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIOException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatIOException().isThrownBy(throwingCallable).withMessage(message, parameters);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IOException.class).hasMessage(message, parameters);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIOExceptionHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIOException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIOException().isThrownBy(throwingCallable).withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IOException.class).hasMessage(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageStartingWithRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIOExceptionHasMessageStartingWith {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIOException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIOException().isThrownBy(throwingCallable).withMessageStartingWith(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IOException.class).hasMessageStartingWith(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIOException {
    
    @BeforeTemplate
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable) {
        return assertThatIOException().isThrownBy(throwingCallable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IOException.class);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionRootCauseHasMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIOExceptionRootCauseHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIOException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIOException().isThrownBy(throwingCallable).havingRootCause().withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IOException.class).rootCause().hasMessage(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageContainingRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalArgumentExceptionHasMessageContaining {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalArgumentException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIllegalArgumentException().isThrownBy(throwingCallable).withMessageContaining(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalArgumentException.class).hasMessageContaining(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageNotContainingAnyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalArgumentExceptionHasMessageNotContainingAny {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalArgumentException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, @Repeated
    CharSequence values) {
        return assertThatIllegalArgumentException().isThrownBy(throwingCallable).withMessageNotContainingAny(values);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, @Repeated
    CharSequence values) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalArgumentException.class).hasMessageNotContainingAny(values);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageParametersRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalArgumentExceptionHasMessageParameters {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalArgumentException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatIllegalArgumentException().isThrownBy(throwingCallable).withMessage(message, parameters);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalArgumentException.class).hasMessage(message, parameters);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalArgumentExceptionHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalArgumentException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIllegalArgumentException().isThrownBy(throwingCallable).withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalArgumentException.class).hasMessage(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageStartingWithRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalArgumentExceptionHasMessageStartingWith {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalArgumentException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIllegalArgumentException().isThrownBy(throwingCallable).withMessageStartingWith(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalArgumentException.class).hasMessageStartingWith(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalArgumentException {
    
    @BeforeTemplate
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable) {
        return assertThatIllegalArgumentException().isThrownBy(throwingCallable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalArgumentException.class);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionRootCauseHasMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalArgumentExceptionRootCauseHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalArgumentException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIllegalArgumentException().isThrownBy(throwingCallable).havingRootCause().withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalArgumentException.class).rootCause().hasMessage(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageContainingRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalStateExceptionHasMessageContaining {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalStateException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIllegalStateException().isThrownBy(throwingCallable).withMessageContaining(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalStateException.class).hasMessageContaining(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageNotContainingRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalStateExceptionHasMessageNotContaining {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalStateException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIllegalStateException().isThrownBy(throwingCallable).withMessageNotContaining(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalStateException.class).hasMessageNotContaining(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageParametersRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalStateExceptionHasMessageParameters {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalStateException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatIllegalStateException().isThrownBy(throwingCallable).withMessage(message, parameters);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalStateException.class).hasMessage(message, parameters);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalStateExceptionHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalStateException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIllegalStateException().isThrownBy(throwingCallable).withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalStateException.class).hasMessage(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageStartingWithRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalStateExceptionHasMessageStartingWith {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalStateException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIllegalStateException().isThrownBy(throwingCallable).withMessageStartingWith(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalStateException.class).hasMessageStartingWith(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalStateException {
    
    @BeforeTemplate
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable) {
        return assertThatIllegalStateException().isThrownBy(throwingCallable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalStateException.class);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionRootCauseHasMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalStateExceptionRootCauseHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalStateException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIllegalStateException().isThrownBy(throwingCallable).havingRootCause().withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalStateException.class).rootCause().hasMessage(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageContainingRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByNullPointerExceptionHasMessageContaining {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByNullPointerException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatNullPointerException().isThrownBy(throwingCallable).withMessageContaining(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(NullPointerException.class).hasMessageContaining(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageNotContainingRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByNullPointerExceptionHasMessageNotContaining {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByNullPointerException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatNullPointerException().isThrownBy(throwingCallable).withMessageNotContaining(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(NullPointerException.class).hasMessageNotContaining(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageParametersRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByNullPointerExceptionHasMessageParameters {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByNullPointerException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatNullPointerException().isThrownBy(throwingCallable).withMessage(message, parameters);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(NullPointerException.class).hasMessage(message, parameters);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByNullPointerExceptionHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByNullPointerException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatNullPointerException().isThrownBy(throwingCallable).withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(NullPointerException.class).hasMessage(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageStartingWithRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByNullPointerExceptionHasMessageStartingWith {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByNullPointerException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatNullPointerException().isThrownBy(throwingCallable).withMessageStartingWith(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(NullPointerException.class).hasMessageStartingWith(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByNullPointerException {
    
    @BeforeTemplate
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable) {
        return assertThatNullPointerException().isThrownBy(throwingCallable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(NullPointerException.class);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionRootCauseHasMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByNullPointerExceptionRootCauseHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByNullPointerException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatNullPointerException().isThrownBy(throwingCallable).havingRootCause().withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(NullPointerException.class).rootCause().hasMessage(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByRootCauseHasMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByRootCauseHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByAsInstanceOfThrowable")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatExceptionOfType(exceptionType).isThrownBy(throwingCallable).havingRootCause().withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(exceptionType).rootCause().hasMessage(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$CheckIndexRecipe**: Prefer `Objects#checkIndex(int, int)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$IterableIsEmptyRecipe**: Prefer `Iterables#isEmpty(Iterable)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$IteratorGetNextOrDefaultRecipe**: Prefer `Iterators#getNext(Iterator, Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$LogicalImplicationRecipe**: Don't unnecessarily repeat boolean expressions. 
* **tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$SplitToStreamRecipe**: Prefer `Splitter#splitToStream(CharSequence)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$UnboundedSingleElementStreamRecipe**: Prefer `Stream#generate(java.util.function.Supplier)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.BigDecimalRulesRecipes$BigDecimalSignumIsZeroRecipe**: Prefer using `BigDecimal#signum()` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ClassRulesRecipes$ClassIsInstanceRecipe**: Prefer `Class#isInstance(Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ClassRulesRecipes$ClassReferenceCastRecipe**: Prefer `Class#cast(Object)` method references over lambda expressions that require naming a variable. 
* **tech.picnic.errorprone.refasterrules.ClassRulesRecipes$ClassReferenceIsInstancePredicateRecipe**: Prefer `Class#isInstance(Object)` method references over lambda expressions that require naming a variable. 
* **tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionAddAllToCollectionExpressionRecipe**: Don't call `Iterables#addAll(Collection, Iterable)` when the elements to be added are already part of a `Collection`. 
* **tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionRemoveAllFromCollectionExpressionRecipe**: Don't call `Iterables#removeAll(Iterable, Collection)` when the elements to be removed are already part of a `Collection`. 
* **tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionsDisjointRecipe**: Prefer `Collections#disjoint(Collection, Collection)` over non-JDK or less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionToArrayWithArrayRecipe**: Don't call `ImmutableCollection#asList()` if `ImmutableCollection#toArray(Object[])`` is called on the result; call it directly. 
* **tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionToArrayWithGeneratorRecipe**: Don't call `ImmutableCollection#asList()` if `ImmutableCollection#toArray(IntFunction)`\} is called on the result; call it directly. 
* **tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$NewArrayListFromCollectionRecipe**: Prefer `ArrayList#ArrayList(Collection)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$OptionalFirstCollectionElementRecipe**: Don't use the ternary operator to extract the first element of a possibly-empty `Collection` as an `Optional`, and (when applicable) prefer `Stream#findFirst()` over `Stream#findAny()` to communicate that the collection's first element (if any, according to iteration order) will be returned. 
* **tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$RemoveOptionalFirstNavigableSetElementRecipe**: Avoid contrived constructions when extracting the first element from a possibly empty `NavigableSet`. 
* **tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$SetOfVarargsRecipe**: Prefer `Set#of(Object[])` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorsMaxRecipe**: Prefer a method reference to `Comparators#max(Comparable, Comparable)` over calling `BinaryOperator#minBy(Comparator)` with `Comparator#naturalOrder()`. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorsMinRecipe**: Prefer a method reference to `Comparators#min(Comparable, Comparable)` over calling `BinaryOperator#minBy(Comparator)` with `Comparator#naturalOrder()`. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$CompareToRecipe**: Prefer `Comparable#compareTo(Object)`\} over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$IsLessThanOrEqualToRecipe**: Don't explicitly compare enums by their ordinal. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$IsLessThanRecipe**: Don't explicitly compare enums by their ordinal. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$MaxOfArrayRecipe**: Avoid unnecessary creation of a `Stream` to determine the maximum of a known collection of values. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$MaxOfVarargsRecipe**: Avoid unnecessary creation of a `Stream` to determine the maximum of a known collection of values. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$MinOfArrayRecipe**: Avoid unnecessary creation of a `Stream` to determine the minimum of a known collection of values. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$MinOfVarargsRecipe**: Avoid unnecessary creation of a `Stream` to determine the minimum of a known collection of values. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingCustomRecipe**: Don't explicitly create `Comparator`s unnecessarily. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingCustomReversedRecipe**: Don't explicitly create `Comparator`s unnecessarily. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingDoubleRecipe**: Don't explicitly create `Comparator`s unnecessarily. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingIntRecipe**: Don't explicitly create `Comparator`s unnecessarily. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingLongRecipe**: Don't explicitly create `Comparator`s unnecessarily. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingRecipe**: Don't explicitly create `Comparator`s unnecessarily. 
* **tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingReversedRecipe**: Don't explicitly create `Comparator`s unnecessarily. 
* **tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$ConcatOneDoubleStreamRecipe**: Don't unnecessarily call `Streams#concat(DoubleStream...)`. 
* **tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$ConcatTwoDoubleStreamsRecipe**: Prefer `DoubleStream#concat(DoubleStream, DoubleStream)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$DoubleStreamAllMatchRecipe**: Recipe created for the following Refaster template:
```java
static final class DoubleStreamAllMatch {
    
    @BeforeTemplate
    boolean before(DoubleStream stream, DoublePredicate predicate) {
        return stream.noneMatch(predicate.negate());
    }
    
    @AfterTemplate
    boolean after(DoubleStream stream, DoublePredicate predicate) {
        return stream.allMatch(predicate);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$DoubleStreamIsEmptyRecipe**: In order to test whether a stream has any element, simply try to find one. 
* **tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$DoubleStreamIsNotEmptyRecipe**: In order to test whether a stream has any element, simply try to find one. 
* **tech.picnic.errorprone.refasterrules.DoubleStreamRulesRecipes$DoubleStreamNoneMatchRecipe**: Prefer `DoubleStream#noneMatch(DoublePredicate)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$DoubleNegationRecipe**: Avoid double negations; this is not Javascript. 
* **tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$EnumReferenceEqualityLambdaRecipe**: Prefer reference-based equality for enums. 
* **tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$EnumReferenceEqualityRecipe**: Prefer reference-based equality for enums. 
* **tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$EqualsPredicateRecipe**: Prefer `Object#equals(Object)` over the equivalent lambda function. 
* **tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$EqualsRecipe**: Avoid contrived ways of handling `null` values during equality testing. 
* **tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$IndirectDoubleNegationRecipe**: Don't negate an inequality test or use the ternary operator to compare two booleans; directly test for equality instead. 
* **tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$NegationRecipe**: Don't negate an equality test or use the ternary operator to compare two booleans; directly test for inequality instead. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$FileMkDirsFileExistsRecipe**: Invoke `File#mkdirs()` before `File#exists()` to avoid concurrency issues. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesCreateTempFileInCustomDirectoryToFileRecipe**: Note that `File#createTempFile` treats the given prefix as a path, and ignores all but
 its file name. That is, the actual prefix used is derived from all characters following the
 final file separator (if any). This is not the case with `Files#createTempFile`, which
 will instead throw an `IllegalArgumentException` if the prefix contains any file
 separators. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewInputStreamToPathRecipe**: Prefer `Files#newInputStream(Path, OpenOption...)` over less idiomatic alternatives. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewOutputStreamToPathRecipe**: Prefer `Files#newOutputStream(Path, OpenOption...)` over less idiomatic alternatives. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathInstanceRecipe**: Avoid redundant conversions from `Path` to `File`. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathOfStringRecipe**: Prefer the more idiomatic `Path#of(String, String...)` over `Paths#get(String, String...)`. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathOfUriRecipe**: Prefer the more idiomatic `Path#of(URI)` over `Paths#get(URI)`. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathToFileMkDirsFilesExistsRecipe**: Invoke `File#mkdirs()` before `Files#exists(Path, LinkOption...)` to avoid concurrency issues. 
* **tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$SetsImmutableEnumSetVarArgsRecipe**: Prefer `Sets#immutableEnumSet(Enum, Enum[])` for enum collections to take advantage of the internally used `EnumSet`. 
* **tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$StreamToImmutableEnumSetRecipe**: &lt;strong>Warning:&lt;/strong> this rule is not completely behavior preserving: while the
 original code produces a set that iterates over its elements in encounter order, the
 replacement code iterates over the elements in enum definition order. 
* **tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$EmptyImmutableListMultimapRecipe**: Prefer `ImmutableListMultimap#of()` over more contrived or less-specific alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$EntryToImmutableListMultimapRecipe**: Prefer `ImmutableListMultimap#of(Object, Object)` over more contrived or less-specific alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$ImmutableListMultimapBuilderPutRecipe**: Prefer `ImmutableListMultimap.Builder#put(Object, Object)` over more contrived or less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$IterableToImmutableListMultimapRecipe**: Prefer `ImmutableListMultimap#copyOf(Iterable)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$PairToImmutableListMultimapRecipe**: Prefer `ImmutableListMultimap#of(Object, Object)` over more contrived or less-specific alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$TransformMultimapValuesToImmutableListMultimap2Recipe**: Prefer creating an immutable copy of the result of `Multimaps#transformValues(Multimap, com.google.common.base.Function)` over creating and directly collecting a stream. 
* **tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListOfRecipe**: Prefer `ImmutableList#of()` over more contrived alternatives or alternatives that don't communicate the immutability of the resulting list at the type level. 
* **tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListSortedCopyOfWithCustomComparatorRecipe**: Prefer `ImmutableList#sortedCopyOf(Comparator, Iterable)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$IterableToImmutableListRecipe**: Prefer `ImmutableList#copyOf(Iterable)` and variants over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$StreamToDistinctImmutableListRecipe**: Collecting to an `ImmutableSet` and converting the result to an `ImmutableList` may be more efficient than deduplicating a stream and collecting the result to an `ImmutableList`. 
* **tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$StreamToImmutableListRecipe**: Prefer `ImmutableList#toImmutableList()` over less idiomatic alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$EntryIterableToImmutableMapRecipe**: Prefer `ImmutableMap#copyOf(Iterable)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$EntryToImmutableMapRecipe**: Prefer `ImmutableMap#of(Object, Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapBuilderBuildOrThrowRecipe**: Prefer `ImmutableMap.Builder#buildOrThrow()` over the less explicit `ImmutableMap.Builder#build()`. 
* **tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapBuilderPutRecipe**: Prefer `ImmutableMap.Builder#put(Object, Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf1Recipe**: Prefer `ImmutableMap#of(Object, Object)` over more contrived alternatives or alternatives that don't communicate the immutability of the resulting map at the type level. 
* **tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf3Recipe**: Prefer `ImmutableMap#of(Object, Object, Object, Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting map at the type level. 
* **tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf5Recipe**: Prefer `ImmutableMap#of(Object, Object, Object, Object, Object, Object, Object, Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting map at the type level. 
* **tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOfRecipe**: Prefer `ImmutableMap#of()` over more contrived alternatives or alternatives that don't communicate the immutability of the resulting map at the type level. 
* **tech.picnic.errorprone.refasterrules.ImmutableMultisetRulesRecipes$EmptyImmutableMultisetRecipe**: Prefer `ImmutableMultiset#of()` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableMultisetRulesRecipes$IterableToImmutableMultisetRecipe**: Prefer `ImmutableMultiset#copyOf(Iterable)` and variants over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableMultisetRulesRecipes$StreamToImmutableMultisetRecipe**: Prefer `ImmutableMultiset#toImmutableMultiset()` over less idiomatic alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$EmptyImmutableSetMultimapRecipe**: Prefer `ImmutableSetMultimap#of()` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$EntryToImmutableSetMultimapRecipe**: Prefer `ImmutableSetMultimap#of(Object, Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$ImmutableSetMultimapBuilderPutRecipe**: Prefer `ImmutableSetMultimap.Builder#put(Object, Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$IterableToImmutableSetMultimapRecipe**: Prefer `ImmutableSetMultimap#copyOf(Iterable)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$PairToImmutableSetMultimapRecipe**: Prefer `ImmutableSetMultimap#of(Object, Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$TransformMultimapValuesToImmutableSetMultimap2Recipe**: Prefer creating an immutable copy of the result of `Multimaps#transformValues(Multimap, com.google.common.base.Function)` over creating and directly collecting a stream. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetCopyOfSetViewRecipe**: Prefer `SetView#immutableCopy()` over the more verbose alternative. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetOfRecipe**: Prefer `ImmutableSet#of()` over more contrived alternatives or alternatives that don't communicate the immutability of the resulting set at the type level. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$IterableToImmutableSetRecipe**: Prefer `ImmutableSet#copyOf(Iterable)` and variants over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsDifferenceMapRecipe**: Prefer an immutable copy of `Sets#difference(Set, Set)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsDifferenceMultimapRecipe**: Prefer an immutable copy of `Sets#difference(Set, Set)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsDifferenceRecipe**: Prefer an immutable copy of `Sets#difference(Set, Set)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsIntersectionMapRecipe**: Prefer an immutable copy of `Sets#intersection(Set, Set)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsIntersectionMultimapRecipe**: Prefer an immutable copy of `Sets#intersection(Set, Set)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsIntersectionRecipe**: Prefer an immutable copy of `Sets#intersection(Set, Set)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsUnionRecipe**: Prefer an immutable copy of `Sets#union(Set, Set)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$StreamToImmutableSetRecipe**: Prefer `ImmutableSet#toImmutableSet()` over less idiomatic alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$EmptyImmutableSortedMapRecipe**: Prefer `ImmutableSortedMap#of()` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$EntryToImmutableSortedMapRecipe**: Prefer `ImmutableSortedMap#of(Object, Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapBuilderRecipe**: Prefer `ImmutableSortedMap#orderedBy(Comparator)` over the associated constructor. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapNaturalOrderBuilderRecipe**: Prefer `ImmutableSortedMap#naturalOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapReverseOrderBuilderRecipe**: Prefer `ImmutableSortedMap#reverseOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$IterableToImmutableSortedMapRecipe**: Prefer `ImmutableSortedMap#copyOf(Iterable)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$PairToImmutableSortedMapRecipe**: Prefer `ImmutableSortedMap#of(Object, Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$EmptyImmutableSortedMultisetRecipe**: Prefer `ImmutableSortedMultiset#of()` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$ImmutableSortedMultisetBuilderRecipe**: Prefer `ImmutableSortedMultiset#orderedBy(Comparator)` over the associated constructor. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$ImmutableSortedMultisetNaturalOrderBuilderRecipe**: Prefer `ImmutableSortedMultiset#naturalOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$ImmutableSortedMultisetReverseOrderBuilderRecipe**: Prefer `ImmutableSortedMultiset#reverseOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$IterableToImmutableSortedMultisetRecipe**: Prefer `ImmutableSortedMultiset#copyOf(Iterable)` and variants over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$StreamToImmutableSortedMultisetRecipe**: Prefer `ImmutableSortedMultiset#toImmutableSortedMultiset(Comparator)` over less idiomatic alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$EmptyImmutableSortedSetRecipe**: Prefer `ImmutableSortedSet#of()` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$ImmutableSortedSetBuilderRecipe**: Prefer `ImmutableSortedSet#orderedBy(Comparator)` over the associated constructor. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$ImmutableSortedSetNaturalOrderBuilderRecipe**: Prefer `ImmutableSortedSet#naturalOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$ImmutableSortedSetReverseOrderBuilderRecipe**: Prefer `ImmutableSortedSet#reverseOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$IterableToImmutableSortedSetRecipe**: Prefer `ImmutableSortedSet#copyOf(Iterable)` and variants over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$StreamToImmutableSortedSetRecipe**: Prefer `ImmutableSortedSet#toImmutableSortedSet(Comparator)` over less idiomatic alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes$CellToImmutableTableRecipe**: Prefer `ImmutableTable#of(Object, Object, Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes$ImmutableTableBuilderBuildOrThrowRecipe**: Prefer `ImmutableTable.Builder#buildOrThrow()` over the less explicit `ImmutableTable.Builder#build()`. 
* **tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes$ImmutableTableBuilderPutRecipe**: Prefer `ImmutableTable.Builder#put(Object, Object, Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$ConcatOneIntStreamRecipe**: Don't unnecessarily call `Streams#concat(IntStream...)`. 
* **tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$ConcatTwoIntStreamsRecipe**: Prefer `IntStream#concat(IntStream, IntStream)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamAllMatchRecipe**: Recipe created for the following Refaster template:
```java
static final class IntStreamAllMatch {
    
    @BeforeTemplate
    boolean before(IntStream stream, IntPredicate predicate) {
        return stream.noneMatch(predicate.negate());
    }
    
    @AfterTemplate
    boolean after(IntStream stream, IntPredicate predicate) {
        return stream.allMatch(predicate);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamClosedOpenRangeRecipe**: Prefer `IntStream#range(int, int)` over the more contrived alternative. 
* **tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamIsEmptyRecipe**: In order to test whether a stream has any element, simply try to find one. 
* **tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamIsNotEmptyRecipe**: In order to test whether a stream has any element, simply try to find one. 
* **tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamNoneMatchRecipe**: Prefer `IntStream#noneMatch(IntPredicate)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatBooleanArrayContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatBooleanArrayContainsExactly {
    
    @BeforeTemplate
    void before(boolean[] actual, boolean[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean[] actual, boolean[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatBooleanArrayWithFailMessageContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatBooleanArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(boolean[] actual, String message, boolean[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean[] actual, String message, boolean[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatBooleanArrayWithFailMessageSupplierContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatBooleanArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(boolean[] actual, Supplier<@Nullable String> message, boolean[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean[] actual, Supplier<@Nullable String> message, boolean[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatByteArrayContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatByteArrayContainsExactly {
    
    @BeforeTemplate
    void before(byte[] actual, byte[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(byte[] actual, byte[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatByteArrayWithFailMessageContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatByteArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(byte[] actual, String message, byte[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(byte[] actual, String message, byte[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatByteArrayWithFailMessageSupplierContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatByteArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(byte[] actual, Supplier<@Nullable String> message, byte[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(byte[] actual, Supplier<@Nullable String> message, byte[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCharArrayContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatCharArrayContainsExactly {
    
    @BeforeTemplate
    void before(char[] actual, char[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(char[] actual, char[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCharArrayWithFailMessageContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatCharArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(char[] actual, String message, char[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(char[] actual, String message, char[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCharArrayWithFailMessageSupplierContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatCharArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(char[] actual, Supplier<@Nullable String> message, char[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(char[] actual, Supplier<@Nullable String> message, char[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCodeDoesNotThrowAnyExceptionRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatCodeDoesNotThrowAnyException {
    
    @BeforeTemplate
    void before(Executable throwingCallable) {
        assertDoesNotThrow(throwingCallable);
    }
    
    @BeforeTemplate
    void before(ThrowingSupplier<?> throwingCallable) {
        assertDoesNotThrow(throwingCallable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable) {
        assertThatCode(throwingCallable).doesNotThrowAnyException();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCodeWithFailMessageStringDoesNotThrowAnyExceptionRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatCodeWithFailMessageStringDoesNotThrowAnyException {
    
    @BeforeTemplate
    void before(Executable throwingCallable, String message) {
        assertDoesNotThrow(throwingCallable, message);
    }
    
    @BeforeTemplate
    void before(ThrowingSupplier<?> throwingCallable, String message) {
        assertDoesNotThrow(throwingCallable, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, String message) {
        assertThatCode(throwingCallable).withFailMessage(message).doesNotThrowAnyException();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCodeWithFailMessageSupplierDoesNotThrowAnyExceptionRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatCodeWithFailMessageSupplierDoesNotThrowAnyException {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(Executable throwingCallable, Supplier<@Nullable String> supplier) {
        assertDoesNotThrow(throwingCallable, supplier);
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(ThrowingSupplier<?> throwingCallable, Supplier<@Nullable String> supplier) {
        assertDoesNotThrow(throwingCallable, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, Supplier<@Nullable String> supplier) {
        assertThatCode(throwingCallable).withFailMessage(supplier).doesNotThrowAnyException();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayContainsExactly {
    
    @BeforeTemplate
    void before(double[] actual, double[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, double[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayContainsExactlyWithOffsetRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayContainsExactlyWithOffset {
    
    @BeforeTemplate
    void before(double[] actual, double[] expected, double delta) {
        assertArrayEquals(expected, actual, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, double[] expected, double delta) {
        assertThat(actual).containsExactly(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(double[] actual, String message, double[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, String message, double[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageContainsExactlyWithOffsetRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayWithFailMessageContainsExactlyWithOffset {
    
    @BeforeTemplate
    void before(double[] actual, String message, double[] expected, double delta) {
        assertArrayEquals(expected, actual, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, String message, double[] expected, double delta) {
        assertThat(actual).withFailMessage(message).containsExactly(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageSupplierContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(double[] actual, Supplier<@Nullable String> message, double[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, Supplier<@Nullable String> message, double[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageSupplierContainsExactlyWithOffsetRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayWithFailMessageSupplierContainsExactlyWithOffset {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(double[] actual, Supplier<@Nullable String> messageSupplier, double[] expected, double delta) {
        assertArrayEquals(expected, actual, delta, messageSupplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, Supplier<@Nullable String> messageSupplier, double[] expected, double delta) {
        assertThat(actual).withFailMessage(messageSupplier).containsExactly(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayContainsExactly {
    
    @BeforeTemplate
    void before(float[] actual, float[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, float[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayContainsExactlyWithOffsetRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayContainsExactlyWithOffset {
    
    @BeforeTemplate
    void before(float[] actual, float[] expected, float delta) {
        assertArrayEquals(expected, actual, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, float[] expected, float delta) {
        assertThat(actual).containsExactly(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(float[] actual, String message, float[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, String message, float[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageContainsExactlyWithOffsetRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayWithFailMessageContainsExactlyWithOffset {
    
    @BeforeTemplate
    void before(float[] actual, String message, float[] expected, float delta) {
        assertArrayEquals(expected, actual, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, String message, float[] expected, float delta) {
        assertThat(actual).withFailMessage(message).containsExactly(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageSupplierContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(float[] actual, Supplier<@Nullable String> message, float[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, Supplier<@Nullable String> message, float[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageSupplierContainsExactlyWithOffsetRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayWithFailMessageSupplierContainsExactlyWithOffset {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(float[] actual, Supplier<@Nullable String> message, float[] expected, float delta) {
        assertArrayEquals(expected, actual, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, Supplier<@Nullable String> message, float[] expected, float delta) {
        assertThat(actual).withFailMessage(message).containsExactly(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIntArrayContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatIntArrayContainsExactly {
    
    @BeforeTemplate
    void before(int[] actual, int[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(int[] actual, int[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIntArrayWithFailMessageContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatIntArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(int[] actual, String message, int[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(int[] actual, String message, int[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIntArrayWithFailMessageSupplierContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatIntArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(int[] actual, Supplier<@Nullable String> message, int[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(int[] actual, Supplier<@Nullable String> message, int[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatLongArrayContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatLongArrayContainsExactly {
    
    @BeforeTemplate
    void before(long[] actual, long[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(long[] actual, long[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatLongArrayWithFailMessageContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatLongArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(long[] actual, String message, long[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(long[] actual, String message, long[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatLongArrayWithFailMessageSupplierContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatLongArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(long[] actual, Supplier<@Nullable String> message, long[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(long[] actual, Supplier<@Nullable String> message, long[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatObjectArrayContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatObjectArrayContainsExactly {
    
    @BeforeTemplate
    void before(Object[] actual, Object[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object[] actual, Object[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatObjectArrayWithFailMessageContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatObjectArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(Object[] actual, String message, Object[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object[] actual, String message, Object[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatObjectArrayWithFailMessageSupplierContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatObjectArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(Object[] actual, Supplier<@Nullable String> message, Object[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object[] actual, Supplier<@Nullable String> message, Object[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatShortArrayContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatShortArrayContainsExactly {
    
    @BeforeTemplate
    void before(short[] actual, short[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(short[] actual, short[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatShortArrayWithFailMessageContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatShortArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(short[] actual, String message, short[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(short[] actual, String message, short[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatShortArrayWithFailMessageSupplierContainsExactlyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatShortArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(short[] actual, Supplier<@Nullable String> message, short[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(short[] actual, Supplier<@Nullable String> message, short[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByIsExactlyInstanceOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIsExactlyInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    void before(Executable throwingCallable, Class<T> clazz) {
        assertThrowsExactly(clazz, throwingCallable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).isExactlyInstanceOf(clazz);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByIsInstanceOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIsInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    void before(Executable throwingCallable, Class<T> clazz) {
        assertThrows(clazz, throwingCallable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).isInstanceOf(clazz);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageStringIsExactlyInstanceOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByWithFailMessageStringIsExactlyInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    void before(Executable throwingCallable, String message, Class<T> clazz) {
        assertThrowsExactly(clazz, throwingCallable, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, String message, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).withFailMessage(message).isExactlyInstanceOf(clazz);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageStringIsInstanceOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByWithFailMessageStringIsInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    void before(Executable throwingCallable, String message, Class<T> clazz) {
        assertThrows(clazz, throwingCallable, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, String message, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).withFailMessage(message).isInstanceOf(clazz);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageSupplierIsExactlyInstanceOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByWithFailMessageSupplierIsExactlyInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(Executable throwingCallable, Supplier<@Nullable String> supplier, Class<T> clazz) {
        assertThrowsExactly(clazz, throwingCallable, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, Supplier<@Nullable String> supplier, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).withFailMessage(supplier).isExactlyInstanceOf(clazz);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageSupplierIsInstanceOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByWithFailMessageSupplierIsInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(Executable throwingCallable, Supplier<@Nullable String> supplier, Class<T> clazz) {
        assertThrows(clazz, throwingCallable, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, Supplier<@Nullable String> supplier, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).withFailMessage(supplier).isInstanceOf(clazz);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsFalseRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageStringIsFalse {
    
    @BeforeTemplate
    void before(boolean actual, String message) {
        assertFalse(actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean actual, String message) {
        assertThat(actual).withFailMessage(message).isFalse();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsInstanceOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageStringIsInstanceOf<T> {
    
    @BeforeTemplate
    void before(Object actual, String message, Class<T> clazz) {
        assertInstanceOf(clazz, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message, Class<T> clazz) {
        assertThat(actual).withFailMessage(message).isInstanceOf(clazz);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsNotNullRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageStringIsNotNull {
    
    @BeforeTemplate
    void before(Object actual, String message) {
        assertNotNull(actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message) {
        assertThat(actual).withFailMessage(message).isNotNull();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsNotSameAsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageStringIsNotSameAs {
    
    @BeforeTemplate
    void before(Object actual, String message, Object expected) {
        assertNotSame(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message, Object expected) {
        assertThat(actual).withFailMessage(message).isNotSameAs(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsNullRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageStringIsNull {
    
    @BeforeTemplate
    void before(Object actual, String message) {
        assertNull(actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message) {
        assertThat(actual).withFailMessage(message).isNull();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsSameAsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageStringIsSameAs {
    
    @BeforeTemplate
    void before(Object actual, String message, Object expected) {
        assertSame(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message, Object expected) {
        assertThat(actual).withFailMessage(message).isSameAs(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsTrueRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageStringIsTrue {
    
    @BeforeTemplate
    void before(boolean actual, String message) {
        assertTrue(actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean actual, String message) {
        assertThat(actual).withFailMessage(message).isTrue();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsFalseRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageSupplierIsFalse {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(boolean actual, Supplier<@Nullable String> supplier) {
        assertFalse(actual, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean actual, Supplier<@Nullable String> supplier) {
        assertThat(actual).withFailMessage(supplier).isFalse();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsInstanceOfRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageSupplierIsInstanceOf<T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(Object actual, Supplier<@Nullable String> supplier, Class<T> clazz) {
        assertInstanceOf(clazz, actual, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Supplier<@Nullable String> supplier, Class<T> clazz) {
        assertThat(actual).withFailMessage(supplier).isInstanceOf(clazz);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsNotNullRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageSupplierIsNotNull {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(Object actual, Supplier<@Nullable String> supplier) {
        assertNotNull(actual, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Supplier<@Nullable String> supplier) {
        assertThat(actual).withFailMessage(supplier).isNotNull();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsNotSameAsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageSupplierIsNotSameAs {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(Object actual, Supplier<@Nullable String> supplier, Object expected) {
        assertNotSame(expected, actual, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Supplier<@Nullable String> supplier, Object expected) {
        assertThat(actual).withFailMessage(supplier).isNotSameAs(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsNullRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageSupplierIsNull {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(Object actual, Supplier<@Nullable String> supplier) {
        assertNull(actual, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Supplier<@Nullable String> supplier) {
        assertThat(actual).withFailMessage(supplier).isNull();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsSameAsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageSupplierIsSameAs {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(Object actual, Supplier<@Nullable String> supplier, Object expected) {
        assertSame(expected, actual, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Supplier<@Nullable String> supplier, Object expected) {
        assertThat(actual).withFailMessage(supplier).isSameAs(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsTrueRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageSupplierIsTrue {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4449")
    void before(boolean actual, Supplier<@Nullable String> supplier) {
        assertTrue(actual, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean actual, Supplier<@Nullable String> supplier) {
        assertThat(actual).withFailMessage(supplier).isTrue();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithMessageAndThrowableRecipe**: Recipe created for the following Refaster template:
```java
static final class FailWithMessageAndThrowable<T> {
    
    @BeforeTemplate
    T before(String message, Throwable throwable) {
        return Assertions.fail(message, throwable);
    }
    
    @AfterTemplate
    T after(String message, Throwable throwable) {
        return fail(message, throwable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class FailWithMessage<T> {
    
    @BeforeTemplate
    T before(String message) {
        return Assertions.fail(message);
    }
    
    @AfterTemplate
    T after(String message) {
        return fail(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$ObjectMapperConvertValueWithClassRecipe**: Prefer `ObjectMapper#convertValue(Object, Class)` over more contrived and less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$ObjectMapperConvertValueWithJavaTypeRecipe**: Prefer `ObjectMapper#convertValue(Object, JavaType)` over more contrived and less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$ObjectMapperConvertValueWithTypeReferenceRecipe**: Prefer `ObjectMapper#convertValue(Object, TypeReference)` over more contrived and less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$ObjectMapperConvertValueWithClassRecipe**: Prefer `ObjectMapper#convertValue(Object, Class)` over more contrived and less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$ObjectMapperConvertValueWithJavaTypeRecipe**: Prefer `ObjectMapper#convertValue(Object, JavaType)` over more contrived and less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$ObjectMapperConvertValueWithTypeReferenceRecipe**: Prefer `ObjectMapper#convertValue(Object, TypeReference)` over more contrived and less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$ConcatOneLongStreamRecipe**: Don't unnecessarily call `Streams#concat(LongStream...)`. 
* **tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$ConcatTwoLongStreamsRecipe**: Prefer `LongStream#concat(LongStream, LongStream)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamAllMatchRecipe**: Recipe created for the following Refaster template:
```java
static final class LongStreamAllMatch {
    
    @BeforeTemplate
    boolean before(LongStream stream, LongPredicate predicate) {
        return stream.noneMatch(predicate.negate());
    }
    
    @AfterTemplate
    boolean after(LongStream stream, LongPredicate predicate) {
        return stream.allMatch(predicate);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamClosedOpenRangeRecipe**: Prefer `LongStream#range(long, long)` over the more contrived alternative. 
* **tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamIsEmptyRecipe**: In order to test whether a stream has any element, simply try to find one. 
* **tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamIsNotEmptyRecipe**: In order to test whether a stream has any element, simply try to find one. 
* **tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamNoneMatchRecipe**: Prefer `LongStream#noneMatch(LongPredicate)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$MapEntryComparingByKeyRecipe**: Prefer `Map.Entry#comparingByKey()` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$MapEntryComparingByKeyWithCustomComparatorRecipe**: Prefer `Map.Entry#comparingByKey(Comparator)` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$MapEntryComparingByValueRecipe**: Prefer `Map.Entry#comparingByValue()` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$MapEntryComparingByValueWithCustomComparatorRecipe**: Prefer `Map.Entry#comparingByValue(Comparator)` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapGetOrNullRecipe**: Recipe created for the following Refaster template:
```java
static final class MapGetOrNull<K, V, T> {
    
    @BeforeTemplate
    @Nullable
    V before(Map<K, V> map, T key) {
        return map.getOrDefault(key, null);
    }
    
    @AfterTemplate
    @Nullable
    V after(Map<K, V> map, T key) {
        return map.get(key);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapKeyStreamRecipe**: Don't unnecessarily use `Map#entrySet()`. 
* **tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapValueStreamRecipe**: Don't unnecessarily use `Map#entrySet()`. 
* **tech.picnic.errorprone.refasterrules.MockitoRulesRecipes$InvocationOnMockGetArgumentsRecipe**: Recipe created for the following Refaster template:
```java
static final class InvocationOnMockGetArguments {
    
    @BeforeTemplate
    Object before(InvocationOnMock invocation, int i) {
        return invocation.getArguments()[i];
    }
    
    @AfterTemplate
    Object after(InvocationOnMock invocation, int i) {
        return invocation.getArgument(i);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.MockitoRulesRecipes$VerifyOnceRecipe**: Prefer `Mockito#verify(Object)` over explicitly specifying that the associated invocation must happen precisely once; this is the default behavior. 
* **tech.picnic.errorprone.refasterrules.NullRulesRecipes$IsNotNullRecipe**: Prefer the `!=` operator (with `null` as the second operand) over `Objects#nonNull(Object)`. 
* **tech.picnic.errorprone.refasterrules.NullRulesRecipes$IsNullFunctionRecipe**: Prefer `Objects#isNull(Object)` over the equivalent lambda function or more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.NullRulesRecipes$IsNullRecipe**: Prefer the `==` operator (with `null` as the second operand) over `Objects#isNull(Object)`. 
* **tech.picnic.errorprone.refasterrules.NullRulesRecipes$NonNullFunctionRecipe**: Prefer `Objects#nonNull(Object)` over the equivalent lambda function or more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$MapOptionalToBooleanRecipe**: Prefer `Optional#filter(Predicate)` over `Optional#map(Function)` when converting an `Optional` to a boolean. 
* **tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalEqualsOptionalRecipe**: Prefer `Optional#equals(Object)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalFirstIteratorElementRecipe**: Don't use the ternary operator to extract the first element of a possibly-empty `Iterator` as an `Optional`. 
* **tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalMapRecipe**: Avoid unnecessary `Optional` to `Stream` conversion when mapping a value of the former type. 
* **tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalOrElseThrowMethodReferenceRecipe**: Prefer `Optional#orElseThrow()` over the less explicit `Optional#get()`. 
* **tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalOrOtherOptionalRecipe**: Prefer `Optional#or(Supplier)` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OrOrElseThrowRecipe**: Recipe created for the following Refaster template:
```java
static final class OrOrElseThrow<T> {
    
    @BeforeTemplate
    T before(Optional<T> o1, Optional<T> o2) {
        return o1.orElseGet(()->o2.orElseThrow());
    }
    
    @AfterTemplate
    T after(Optional<T> o1, Optional<T> o2) {
        return o1.or(()->o2).orElseThrow();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$StreamFlatMapOptionalRecipe**: Flatten a stream of `Optional`s using `Optional#stream()`, rather than using one of the more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.PreconditionsRulesRecipes$RequireNonNullRecipe**: Prefer `Objects#requireNonNull(Object)` over non-JDK alternatives. 
* **tech.picnic.errorprone.refasterrules.PreconditionsRulesRecipes$RequireNonNullWithMessageRecipe**: Prefer `Objects#requireNonNull(Object, String)` over non-JDK alternatives. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedBytesRecipe**: Prefer JDK's `Arrays#compareUnsigned(byte[], byte[])` over third-party alternatives. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedIntsRecipe**: Prefer JDK's `Arrays#compareUnsigned(int[], int[])` over third-party alternatives. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedLongsRecipe**: Prefer JDK's `Arrays#compareUnsigned(long[], long[])` over third-party alternatives. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerParseUnsignedIntWithRadixRecipe**: Prefer JDK's `Integer#parseUnsignedInt(String, int)` over third-party alternatives. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerToUnsignedStringWithRadixRecipe**: Prefer JDK's `Integer#toUnsignedString(int,int)` over third-party alternatives. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongParseUnsignedLongWithRadixRecipe**: Prefer JDK's `Long#parseUnsignedLong(String, int)` over third-party alternatives. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongToIntExactRecipe**: Prefer `Math#toIntExact(long)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongToUnsignedStringWithRadixRecipe**: Prefer JDK's `Long#toUnsignedString(long,int)` over third-party alternatives. 
* **tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextDoubleWithOriginRecipe**: Prefer `RandomGenerator#nextDouble(double origin, double bound)` over alternatives that may silently yield an ununiform domain of values. 
* **tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextIntWithOriginRecipe**: Prefer `RandomGenerator#nextInt(int origin, int bound)` over alternatives that may silently yield values outside the intended domain. 
* **tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextLongWithOriginRecipe**: Prefer `RandomGenerator#nextLong(long origin, long bound)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$ConcatMapIterableIdentityRecipe**: Prefer `Flux#concatMapIterable(Function)` over alternatives that require an additional subscription. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$ConcatMapIterableIdentityWithPrefetchRecipe**: Prefer `Flux#concatMapIterable(Function, int)` over alternatives that require an additional subscription. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxAsStepVerifierExpectNextRecipe**: Avoid list collection when verifying that a `Flux` emits exactly one value. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDeferredErrorRecipe**: Don't unnecessarily defer `Flux#error(Throwable)`. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFromStreamSupplierRecipe**: Prefer `Flux#fromStream(Supplier)` over `Flux#fromStream(Stream)`, as the former yields a `Flux` that is more likely to behave as expected when subscribed to more than once. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxJustArrayRecipe**: Prefer `Flux#just(Object[])` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxMapNotNullOrElseRecipe**: Prefer `Flux#mapNotNull(Function)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorCompletePredicateRecipe**: Prefer `Flux#onErrorComplete(Predicate)`\} over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxSwitchIfEmptyOfEmptyPublisherRecipe**: Don't unnecessarily pass an empty publisher to `Flux#switchIfEmpty(Publisher)`. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenMonoRecipe**: Avoid vacuous invocations of `Flux#ignoreElements()`. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMaxRecipe**: Prefer `MathFlux#max(Publisher)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMaxWithComparatorRecipe**: Prefer `MathFlux#max(Publisher, Comparator)` over less efficient or more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMinRecipe**: Prefer `MathFlux#min(Publisher)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMinWithComparatorRecipe**: Prefer `MathFlux#min(Publisher, Comparator)` over less efficient or more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithCombinatorRecipe**: Prefer `Flux#zip(Publisher, Publisher)` with a chained combinator over a chained `Flux#zipWith(Publisher, BiFunction)`, as the former better conveys that the `Publisher`s may be subscribed to concurrently, and generalizes to combining three or more reactive streams. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithIterableBiFunctionRecipe**: Prefer `Flux#zipWithIterable(Iterable, BiFunction)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDeferredErrorRecipe**: Don't unnecessarily defer `Mono#error(Throwable)`. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureAsyncLoadingCacheGetAllRecipe**: Don't propagate `Mono` cancellations to upstream cache value computations, as completion of such computations may benefit concurrent or subsequent cache usages. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureAsyncLoadingCacheGetRecipe**: Don't propagate `Mono` cancellations to an upstream cache value computation, as completion of such computations may benefit concurrent or subsequent cache usages. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureSupplierBooleanRecipe**: Prefer `Mono#fromFuture(Supplier, boolean)` over `Mono#fromFuture(CompletableFuture, boolean)`, as the former may defer initiation of the asynchronous computation until subscription. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureSupplierRecipe**: Prefer `Mono#fromFuture(Supplier)` over `Mono#fromFuture(CompletableFuture)`, as the former may defer initiation of the asynchronous computation until subscription. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromOptionalSwitchIfEmptyRecipe**: In particular, avoid mixing of the `Optional` and `Mono` APIs. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompleteClassRecipe**: Prefer `Mono#onErrorComplete(Class)`\} over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompletePredicateRecipe**: Prefer `Mono#onErrorComplete(Predicate)`\} over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenMonoFluxRecipe**: Prefer explicit invocation of `Mono#flux()` over implicit conversions from `Mono` to `Flux`. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenMonoRecipe**: Avoid vacuous operations prior to invocation of `Mono#then(Mono)`. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutDurationMonoEmptyRecipe**: Prefer `Mono#timeout(Duration, Mono)` over more contrived or less performant alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutDurationMonoJustRecipe**: Prefer `Mono#timeout(Duration, Mono)` over more contrived or less performant alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutPublisherMonoEmptyRecipe**: Prefer `Mono#timeout(Publisher, Mono)` over more contrived or less performant alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutPublisherMonoJustRecipe**: Prefer `Mono#timeout(Publisher, Mono)` over more contrived or less performant alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoZipWithCombinatorRecipe**: Prefer `Mono#zip(Mono, Mono)` with a chained combinator over a chained `Mono#zipWith(Mono, BiFunction)`, as the former better conveys that the `Mono`s may be subscribed to concurrently, and generalizes to combining three or more reactive streams. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierFromFluxRecipe**: Prefer `Flux#as(Function)` when creating a `StepVerifier`. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierFromMonoRecipe**: Prefer `Mono#as(Function)` when creating a `StepVerifier`. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyCompleteRecipe**: Prefer `StepVerifier.LastStep#verifyComplete()` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorClassRecipe**: Prefer `StepVerifier.LastStep#verifyError(Class)` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorMatchesRecipe**: Prefer `StepVerifier.LastStep#verifyErrorMatches(Predicate)` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorMessageRecipe**: Prefer `StepVerifier.LastStep#verifyErrorMessage(String)` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorRecipe**: Prefer `StepVerifier.LastStep#verifyError()` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorSatisfiesAssertJRecipe**: Prefer `StepVerifier.LastStep#verifyErrorSatisfies(Consumer)` with AssertJ over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorSatisfiesRecipe**: Prefer `StepVerifier.LastStep#verifyErrorSatisfies(Consumer)` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyTimeoutRecipe**: Prefer `StepVerifier.LastStep#verifyTimeout(Duration)` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierStepExpectNextRecipe**: Prefer `StepVerifier.Step#expectNext(Object)` over more verbose alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierVerifyDurationRecipe**: Prefer `StepVerifier#verify(Duration)` over a dangling `StepVerifier#verifyThenAssertThat(Duration)`. 
* **tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$CompletableToMonoRecipe**: Use the fluent API style when using `RxJava2Adapter#completableToMono`. 
* **tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$FlowableToFluxRecipe**: Use `RxJava2Adapter#flowableToFlux` to convert a `Flowable` to a `Flux`, and do so using the fluent API style. 
* **tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$FluxToFlowableRecipe**: Use `RxJava2Adapter#fluxToFlowable` to convert a `Flux` to a `Flowable`, and do so using the fluent API style. 
* **tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$FluxToObservableRecipe**: Use `RxJava2Adapter#fluxToObservable` to convert a `Flux` to a `Observable`, and do so using the fluent API style. 
* **tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MaybeToMonoRecipe**: Use the fluent API style when using `RxJava2Adapter#maybeToMono`. 
* **tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoToCompletableRecipe**: Use `RxJava2Adapter#monoToCompletable` to convert a `Mono` to a `Completable`, and do so using the fluent API style. 
* **tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoToFlowableRecipe**: Use `RxJava2Adapter#monoToFlowable` to convert a `Mono` to a `Flowable`, and do so using the fluent API style. 
* **tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoToMaybeRecipe**: Use the fluent API style when using `RxJava2Adapter#monoToMaybe`. 
* **tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoToSingleRecipe**: Use `RxJava2Adapter#monoToSingle` to convert a `Mono` to a `Single`, and do so using the fluent API style. 
* **tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$ObservableToFluxRecipe**: Use the fluent API style when using `RxJava2Adapter#observableToFlux`. 
* **tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$SingleToMonoRecipe**: Use the fluent API style when using `RxJava2Adapter#singleToMono`. 
* **tech.picnic.errorprone.refasterrules.SpringTestRulesRecipes$BodyContentSpecJsonLenientRecipe**: Prefer `BodyContentSpec#json(String, JsonCompareMode)` over alternatives that implicitly perform a `JsonCompareMode#LENIENT lenient` comparison or are deprecated. 
* **tech.picnic.errorprone.refasterrules.SpringTestRulesRecipes$BodyContentSpecJsonStrictRecipe**: Prefer `BodyContentSpec#json(String, JsonCompareMode)` over the deprecated alternative. 
* **tech.picnic.errorprone.refasterrules.StreamRulesRecipes$ConcatOneStreamRecipe**: Don't unnecessarily call `Streams#concat(Stream...)`. 
* **tech.picnic.errorprone.refasterrules.StreamRulesRecipes$ConcatTwoStreamsRecipe**: Prefer `Stream#concat(Stream, Stream)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapFilterRecipe**: Prefer an unconditional `Map#get(Object)` call followed by a `null` check over a call to `Map#containsKey(Object)`, as the former avoids a second lookup operation. 
* **tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapFirstRecipe**: Where possible, clarify that a mapping operation will be applied only to a single stream element. 
* **tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamReduceWithIdentityRecipe**: Recipe created for the following Refaster template:
```java
static final class StreamReduceWithIdentity<T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4266")
    T before(Stream<T> stream, T identity, BinaryOperator<T> accumulator) {
        return stream.collect(reducing(identity, accumulator));
    }
    
    @AfterTemplate
    T after(Stream<T> stream, T identity, BinaryOperator<T> accumulator) {
        return stream.reduce(identity, accumulator);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$FilterEmptyStringRecipe**: Recipe created for the following Refaster template:
```java
static final class FilterEmptyString {
    
    @BeforeTemplate
    Optional<String> before(Optional<String> optional) {
        return optional.map(Strings::emptyToNull);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    Optional<String> after(Optional<String> optional) {
        return optional.filter(not(String::isEmpty));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$JoinStringsRecipe**: Prefer `String#join(CharSequence, Iterable)` and variants over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$NewStringFromCharArrayRecipe**: Prefer direct invocation of `String#String(char[])` over the indirection introduced by alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$NewStringFromCharArraySubSequenceRecipe**: Prefer direct invocation of `String#String(char[], int, int)` over the indirection introduced by alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$OptionalNonEmptyStringRecipe**: Don't use the ternary operator to create an optionally-absent string. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringFormattedRecipe**: Prefer `String#formatted(Object...)` over `String#format(String, Object...)`, as the former works more nicely with text blocks, while the latter does not appear advantageous in any circumstance (assuming one targets JDK 15+). 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfCharBetweenIndicesRecipe**: Prefer `String#indexOf(int, int, int)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfCharFromIndexRecipe**: Prefer `String#indexOf(int, int)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfStringBetweenIndicesRecipe**: Prefer `String#indexOf(String, int)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfStringFromIndexRecipe**: Prefer `String#indexOf(String, int)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsEmptyPredicateRecipe**: Prefer a method reference to `String#isEmpty()` over the equivalent lambda function. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsNotEmptyPredicateRecipe**: Prefer a method reference to `String#isEmpty()` over the equivalent lambda function. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsNullOrEmptyRecipe**: Prefer `Strings#isNullOrEmpty(String)` over the more verbose alternative. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringJoinDelimiterVarargsRecipe**: Prefer `String#join(CharSequence, CharSequence...)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfCharRecipe**: Prefer `String#lastIndexOf(int, int)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfCharWithIndexRecipe**: Prefer `String#lastIndexOf(int, int)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfStringRecipe**: Prefer `String#lastIndexOf(String, int)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfStringWithIndexRecipe**: Prefer `String#lastIndexOf(String, int)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringValueOfMethodReferenceRecipe**: Prefer direct delegation to `String#valueOf(Object)` over the indirection introduced by `Objects#toString(Object)`. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$SubstringRemainderRecipe**: Don't unnecessarily use the two-argument `String#substring(int, int)`. 
* **tech.picnic.errorprone.refasterrules.SuggestedFixRulesRecipes$SuggestedFixReplaceStartEndRecipe**: Prefer `SuggestedFix#replace(int, int, String)`\} over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.SuggestedFixRulesRecipes$SuggestedFixReplaceTreeRecipe**: Prefer `SuggestedFix#replace(Tree, String)`\} over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.SuggestedFixRulesRecipes$SuggestedFixReplaceTreeStartEndRecipe**: Prefer `SuggestedFix#replace(Tree, String, int, int)`\} over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualArrayIterationOrderRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualArrayIterationOrder {
    
    @BeforeTemplate
    void before(boolean[] actual, boolean[] expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(byte[] actual, byte[] expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(char[] actual, char[] expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(short[] actual, short[] expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(int[] actual, int[] expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(long[] actual, long[] expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(float[] actual, float[] expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(double[] actual, double[] expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Object[] actual, Object[] expected) {
        assertEquals(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object[] actual, Object[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualArrayIterationOrderWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualArrayIterationOrderWithMessage {
    
    @BeforeTemplate
    void before(boolean[] actual, String message, boolean[] expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(byte[] actual, String message, byte[] expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(char[] actual, String message, char[] expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(short[] actual, String message, short[] expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(int[] actual, String message, int[] expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(long[] actual, String message, long[] expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(float[] actual, String message, float[] expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(double[] actual, String message, double[] expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Object[] actual, String message, Object[] expected) {
        assertEquals(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object[] actual, String message, Object[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualArraysIrrespectiveOfOrderRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualArraysIrrespectiveOfOrder {
    
    @BeforeTemplate
    void before(Object[] actual, Object[] expected) {
        assertEqualsNoOrder(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object[] actual, Object[] expected) {
        assertThat(actual).containsExactlyInAnyOrder(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualArraysIrrespectiveOfOrderWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualArraysIrrespectiveOfOrderWithMessage {
    
    @BeforeTemplate
    void before(Object[] actual, String message, Object[] expected) {
        assertEqualsNoOrder(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object[] actual, String message, Object[] expected) {
        assertThat(actual).withFailMessage(message).containsExactlyInAnyOrder(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualDoubleArraysWithDeltaRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualDoubleArraysWithDelta {
    
    @BeforeTemplate
    void before(double[] actual, double[] expected, double delta) {
        assertEquals(actual, expected, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, double[] expected, double delta) {
        assertThat(actual).containsExactly(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualDoubleArraysWithDeltaWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualDoubleArraysWithDeltaWithMessage {
    
    @BeforeTemplate
    void before(double[] actual, String message, double[] expected, double delta) {
        assertEquals(actual, expected, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, String message, double[] expected, double delta) {
        assertThat(actual).withFailMessage(message).containsExactly(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualDoublesWithDeltaRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualDoublesWithDelta {
    
    @BeforeTemplate
    void before(double actual, double expected, double delta) {
        assertEquals(actual, expected, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double actual, double expected, double delta) {
        assertThat(actual).isCloseTo(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualDoublesWithDeltaWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualDoublesWithDeltaWithMessage {
    
    @BeforeTemplate
    void before(double actual, String message, double expected, double delta) {
        assertEquals(actual, expected, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double actual, String message, double expected, double delta) {
        assertThat(actual).withFailMessage(message).isCloseTo(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualFloatArraysWithDeltaRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualFloatArraysWithDelta {
    
    @BeforeTemplate
    void before(float[] actual, float[] expected, float delta) {
        assertEquals(actual, expected, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, float[] expected, float delta) {
        assertThat(actual).containsExactly(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualFloatArraysWithDeltaWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualFloatArraysWithDeltaWithMessage {
    
    @BeforeTemplate
    void before(float[] actual, String message, float[] expected, float delta) {
        assertEquals(actual, expected, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, String message, float[] expected, float delta) {
        assertThat(actual).withFailMessage(message).containsExactly(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualFloatsWithDeltaRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualFloatsWithDelta {
    
    @BeforeTemplate
    void before(float actual, float expected, float delta) {
        assertEquals(actual, expected, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Float actual, float expected, float delta) {
        assertThat(actual).isCloseTo(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualFloatsWithDeltaWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualFloatsWithDeltaWithMessage {
    
    @BeforeTemplate
    void before(float actual, String message, float expected, float delta) {
        assertEquals(actual, expected, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float actual, String message, float expected, float delta) {
        assertThat(actual).withFailMessage(message).isCloseTo(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualIterableIterationOrderRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualIterableIterationOrder<S, T extends S> {
    
    @BeforeTemplate
    void before(Iterable<S> actual, Iterable<T> expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Collection<S> actual, Collection<T> expected) {
        assertEquals(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Iterable<S> actual, Iterable<T> expected) {
        assertThat(actual).containsExactlyElementsOf(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualIterableIterationOrderWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualIterableIterationOrderWithMessage<S, T extends S> {
    
    @BeforeTemplate
    void before(Iterable<S> actual, String message, Iterable<T> expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Collection<S> actual, String message, Collection<T> expected) {
        assertEquals(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Iterable<S> actual, String message, Iterable<T> expected) {
        assertThat(actual).withFailMessage(message).containsExactlyElementsOf(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualIteratorIterationOrderRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualIteratorIterationOrder<S, T extends S> {
    
    @BeforeTemplate
    void before(Iterator<S> actual, Iterator<T> expected) {
        assertEquals(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Iterator<S> actual, Iterator<T> expected) {
        assertThat(actual).toIterable().containsExactlyElementsOf(ImmutableList.copyOf(expected));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualIteratorIterationOrderWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualIteratorIterationOrderWithMessage<S, T extends S> {
    
    @BeforeTemplate
    void before(Iterator<S> actual, String message, Iterator<T> expected) {
        assertEquals(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Iterator<S> actual, String message, Iterator<T> expected) {
        assertThat(actual).toIterable().withFailMessage(message).containsExactlyElementsOf(ImmutableList.copyOf(expected));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualRecipe**: Recipe created for the following Refaster template:
```java
@SuppressWarnings(value = "java:S1448")
static final class AssertEqual {
    
    @BeforeTemplate
    void before(boolean actual, boolean expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(boolean actual, Boolean expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Boolean actual, boolean expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Boolean actual, Boolean expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(byte actual, byte expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(byte actual, Byte expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Byte actual, byte expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Byte actual, Byte expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(char actual, char expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(char actual, Character expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Character actual, char expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Character actual, Character expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(short actual, short expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(short actual, Short expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Short actual, short expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Short actual, Short expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(int actual, int expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(int actual, Integer expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Integer actual, int expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Integer actual, Integer expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(long actual, long expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(long actual, Long expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Long actual, long expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Long actual, Long expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(float actual, float expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(float actual, Float expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Float actual, float expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Float actual, Float expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(double actual, double expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(double actual, Double expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Double actual, double expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Double actual, Double expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Object actual, Object expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(String actual, String expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Map<?, ?> actual, Map<?, ?> expected) {
        assertEquals(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Object expected) {
        assertThat(actual).isEqualTo(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualSetsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualSets<S, T extends S> {
    
    @BeforeTemplate
    void before(Set<S> actual, Set<T> expected) {
        assertEquals(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Set<S> actual, Set<T> expected) {
        assertThat(actual).hasSameElementsAs(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualSetsWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertEqualSetsWithMessage<S, T extends S> {
    
    @BeforeTemplate
    void before(Set<S> actual, String message, Set<T> expected) {
        assertEquals(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Set<S> actual, String message, Set<T> expected) {
        assertThat(actual).withFailMessage(message).hasSameElementsAs(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe**: Recipe created for the following Refaster template:
```java
@SuppressWarnings(value = "java:S1448")
static final class AssertEqualWithMessage {
    
    @BeforeTemplate
    void before(boolean actual, String message, boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(boolean actual, String message, Boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Boolean actual, String message, boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Boolean actual, String message, Boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(byte actual, String message, byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(byte actual, String message, Byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Byte actual, String message, byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Byte actual, String message, Byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(char actual, String message, char expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(char actual, String message, Character expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Character actual, String message, char expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Character actual, String message, Character expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(short actual, String message, short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(short actual, String message, Short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Short actual, String message, short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Short actual, String message, Short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(int actual, String message, int expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(int actual, String message, Integer expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Integer actual, String message, int expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Integer actual, String message, Integer expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(long actual, String message, long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(long actual, String message, Long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Long actual, String message, long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Long actual, String message, Long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(float actual, String message, float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(float actual, String message, Float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Float actual, String message, float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Float actual, String message, Float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(double actual, String message, double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(double actual, String message, Double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Double actual, String message, double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Double actual, String message, Double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Object actual, String message, Object expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(String actual, String message, String expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Map<?, ?> actual, String message, Map<?, ?> expected) {
        assertEquals(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message, Object expected) {
        assertThat(actual).withFailMessage(message).isEqualTo(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertFalseRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertFalse {
    
    @BeforeTemplate
    void before(boolean condition) {
        assertFalse(condition);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean condition) {
        assertThat(condition).isFalse();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertFalseWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertFalseWithMessage {
    
    @BeforeTemplate
    void before(boolean condition, String message) {
        assertFalse(condition, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean condition, String message) {
        assertThat(condition).withFailMessage(message).isFalse();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertNotNullRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertNotNull {
    
    @BeforeTemplate
    void before(Object object) {
        assertNotNull(object);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object object) {
        assertThat(object).isNotNull();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertNotNullWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertNotNullWithMessage {
    
    @BeforeTemplate
    void before(Object object, String message) {
        assertNotNull(object, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object object, String message) {
        assertThat(object).withFailMessage(message).isNotNull();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertNotSameRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertNotSame {
    
    @BeforeTemplate
    void before(Object actual, Object expected) {
        assertNotSame(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Object expected) {
        assertThat(actual).isNotSameAs(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertNotSameWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertNotSameWithMessage {
    
    @BeforeTemplate
    void before(Object actual, String message, Object expected) {
        assertNotSame(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message, Object expected) {
        assertThat(actual).withFailMessage(message).isNotSameAs(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertNullRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertNull {
    
    @BeforeTemplate
    void before(Object object) {
        assertNull(object);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object object) {
        assertThat(object).isNull();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertNullWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertNullWithMessage {
    
    @BeforeTemplate
    void before(Object object, String message) {
        assertNull(object, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object object, String message) {
        assertThat(object).withFailMessage(message).isNull();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertSameRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertSame {
    
    @BeforeTemplate
    void before(Object actual, Object expected) {
        assertSame(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Object expected) {
        assertThat(actual).isSameAs(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertSameWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertSameWithMessage {
    
    @BeforeTemplate
    void before(Object actual, String message, Object expected) {
        assertSame(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message, Object expected) {
        assertThat(actual).withFailMessage(message).isSameAs(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThrowsRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThrows {
    
    @BeforeTemplate
    void before(ThrowingRunnable runnable) {
        assertThrows(runnable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable runnable) {
        assertThatThrownBy(runnable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThrowsWithTypeRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThrowsWithType<T extends Throwable> {
    
    @BeforeTemplate
    void before(ThrowingRunnable runnable, Class<T> clazz) {
        assertThrows(clazz, runnable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable runnable, Class<T> clazz) {
        assertThatThrownBy(runnable).isInstanceOf(clazz);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertTrueRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertTrue {
    
    @BeforeTemplate
    void before(boolean condition) {
        assertTrue(condition);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean condition) {
        assertThat(condition).isTrue();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertTrueWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertTrueWithMessage {
    
    @BeforeTemplate
    void before(boolean condition, String message) {
        assertTrue(condition, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean condition, String message) {
        assertThat(condition).withFailMessage(message).isTrue();
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertUnequalDoublesWithDeltaRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertUnequalDoublesWithDelta {
    
    @BeforeTemplate
    void before(double actual, double expected, double delta) {
        assertNotEquals(actual, expected, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double actual, double expected, double delta) {
        assertThat(actual).isNotCloseTo(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertUnequalDoublesWithDeltaWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertUnequalDoublesWithDeltaWithMessage {
    
    @BeforeTemplate
    void before(double actual, String message, double expected, double delta) {
        assertNotEquals(actual, expected, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double actual, String message, double expected, double delta) {
        assertThat(actual).withFailMessage(message).isNotCloseTo(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertUnequalFloatsWithDeltaRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertUnequalFloatsWithDelta {
    
    @BeforeTemplate
    void before(float actual, float expected, float delta) {
        assertNotEquals(actual, expected, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float actual, float expected, float delta) {
        assertThat(actual).isNotCloseTo(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertUnequalFloatsWithDeltaWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertUnequalFloatsWithDeltaWithMessage {
    
    @BeforeTemplate
    void before(float actual, String message, float expected, float delta) {
        assertNotEquals(actual, expected, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float actual, String message, float expected, float delta) {
        assertThat(actual).withFailMessage(message).isNotCloseTo(expected, offset(delta));
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertUnequalRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertUnequal {
    
    @BeforeTemplate
    void before(boolean actual, boolean expected) {
        assertNotEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(byte actual, byte expected) {
        assertNotEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(char actual, char expected) {
        assertNotEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(short actual, short expected) {
        assertNotEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(int actual, int expected) {
        assertNotEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(long actual, long expected) {
        assertNotEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(float actual, float expected) {
        assertNotEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(double actual, double expected) {
        assertNotEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Object actual, Object expected) {
        assertNotEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(String actual, String expected) {
        assertNotEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Set<?> actual, Set<?> expected) {
        assertNotEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Map<?, ?> actual, Map<?, ?> expected) {
        assertNotEquals(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Object expected) {
        assertThat(actual).isNotEqualTo(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertUnequalWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertUnequalWithMessage {
    
    @BeforeTemplate
    void before(boolean actual, String message, boolean expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(byte actual, String message, byte expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(char actual, String message, char expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(short actual, String message, short expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(int actual, String message, int expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(long actual, String message, long expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(float actual, String message, float expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(double actual, String message, double expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Object actual, String message, Object expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(String actual, String message, String expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Set<?> actual, String message, Set<?> expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Map<?, ?> actual, String message, Map<?, ?> expected) {
        assertNotEquals(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message, Object expected) {
        assertThat(actual).withFailMessage(message).isNotEqualTo(expected);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$FailWithMessageAndThrowableRecipe**: Recipe created for the following Refaster template:
```java
static final class FailWithMessageAndThrowable {
    
    @BeforeTemplate
    void before(String message, Throwable throwable) {
        Assert.fail(message, throwable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(String message, Throwable throwable) {
        fail(message, throwable);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$FailWithMessageRecipe**: Recipe created for the following Refaster template:
```java
static final class FailWithMessage {
    
    @BeforeTemplate
    void before(String message) {
        Assert.fail(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(String message) {
        fail(message);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationBetweenInstantsRecipe**: Don't unnecessarily convert to and from milliseconds. (This way nanosecond precision is retained.) &lt;strong>Warning:&lt;/strong> this rewrite rule increases precision!. 
* **tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationBetweenOffsetDateTimesRecipe**: Don't unnecessarily convert to and from milliseconds. (This way nanosecond precision is retained.) &lt;strong>Warning:&lt;/strong> this rewrite rule increases precision!. 
* **tech.picnic.errorprone.refasterrules.TimeRulesRecipes$EpochInstantRecipe**: Prefer `Instant#EPOCH` over alternative representations. 
* **tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantTruncatedToMillisecondsRecipe**: Note that `Instant#toEpochMilli()` throws an `ArithmeticException` for dates
 very far in the past or future, while the suggested alternative doesn't. 
* **tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantTruncatedToSecondsRecipe**: Prefer `Instant#truncatedTo(TemporalUnit)` over less obvious alternatives. 
* **tech.picnic.errorprone.refasterrules.TimeRulesRecipes$UtcClockRecipe**: Use `Clock#systemUTC()` when possible. 
* **tech.picnic.errorprone.refasterrules.TimeRulesRecipes$UtcConstantRecipe**: Use `ZoneOffset#UTC` when possible. 
* **tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZeroDurationRecipe**: Recipe created for the following Refaster template:
```java
static final class ZeroDuration {
    
    @BeforeTemplate
    Duration before(TemporalUnit temporalUnit) {
        return Refaster.anyOf(Duration.ofNanos(0), Duration.ofMillis(0), Duration.ofSeconds(0), Duration.ofSeconds(0, 0), Duration.ofMinutes(0), Duration.ofHours(0), Duration.ofDays(0), Duration.of(0, temporalUnit));
    }
    
    @AfterTemplate
    Duration after() {
        return Duration.ZERO;
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZeroPeriodRecipe**: Recipe created for the following Refaster template:
```java
static final class ZeroPeriod {
    
    @BeforeTemplate
    Period before() {
        return Refaster.anyOf(Period.ofDays(0), Period.ofWeeks(0), Period.ofMonths(0), Period.ofYears(0), Period.of(0, 0, 0));
    }
    
    @AfterTemplate
    Period after() {
        return Period.ZERO;
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.WebClientRulesRecipes$BodyValueRecipe**: Prefer `RequestBodySpec#bodyValue(Object)` over more contrived alternatives. 

## Changed Recipes

* [org.openrewrite.prethink.UpdateAgentConfig](https://docs.openrewrite.org/recipes/prethink/updateagentconfig) was changed:
  * Old Options:
    * `targetConfigFile: { type: String, required: false }`
  * New Options:
    * `targetConfigFiles: { type: List, required: false }`
    * `template: { type: String, required: false }`
* [org.openrewrite.prethink.UpdatePrethinkContext](https://docs.openrewrite.org/recipes/prethink/updateprethinkcontext) was changed:
  * Old Options:
    * `targetConfigFile: { type: String, required: false }`
  * New Options:
    * `targetConfigFiles: { type: List, required: false }`
    * `template: { type: String, required: false }`
* [org.openrewrite.java.spring.CommentOutSpringPropertyKey](https://docs.openrewrite.org/recipes/java/spring/commentoutspringpropertykey) was changed:
  * Old Options:
    * `comment: { type: String, required: true }`
    * `propertyKey: { type: String, required: true }`
  * New Options:
    * `comment: { type: String, required: true }`
    * `commentOutProperty: { type: Boolean, required: false }`
    * `propertyKey: { type: String, required: true }`