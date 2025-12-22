# 8.40.2 release (2024-11-14)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the releases page.
:::

## New Recipes

* org.openrewrite.ExcludeFileFromGitignore: This recipe will remove a file or directory from the .gitignore file. If the file or directory is already in the .gitignore file, it will be removed or negated. If the file or directory is not in the .gitignore file, no action will be taken. 
* org.openrewrite.github.FindMissingTimeout: Find GitHub Actions jobs missing a timeout. 
* org.openrewrite.hibernate.MigrateResultCheckStyleToExpectation: Will migrate the usage of `org.hibernate.annotations.ResultCheckStyle` to `org.hibernate.jdbc.Expectation` in `@SQLInsert`, `@SqlUpdate`, `@SqlDelete` and `@SqlDeleteAll` annotations. 
* org.openrewrite.hibernate.MigrateToHibernate64: This recipe will apply changes commonly needed when migrating to Hibernate 6.4.x. 
* org.openrewrite.hibernate.MigrateToHibernate65: This recipe will apply changes commonly needed when migrating to Hibernate 6.5.x. 
* org.openrewrite.hibernate.RemoveInvalidHibernateGeneratedValueAnnotation: Removes `@GeneratedValue` annotation from fields that are not also annotated with `@Id`. 
* org.openrewrite.java.RemoveMethodInvocations: Remove method invocations if syntactically safe. 
* org.openrewrite.java.jackson.codehaus.ReplaceSerializationConfigAnnotationIntrospector: Migrate serialization annotation processor to use the codehaus config method. 
* org.openrewrite.java.jackson.codehaus.TransferJsonSerializeArgumentsFromCodehausToFasterXML: Transfer @JsonSerialize annotation arguments (using, contentUsing, keyUsing, nullUsing) from Codehaus to FasterXML. If the argument was set already, it will not be transferred. 
* org.openrewrite.java.migrate.joda.JodaTimeRecipe: Prefer the Java standard library over third-party usage of Joda Time. 
* org.openrewrite.java.spring.boot3.SpringBootProperties_3_4: Migrate properties found in `application.properties` and `application.yml`. 
* org.openrewrite.java.spring.data.MigrateAuditorAwareToOptional: As of Spring boot 2.0, the `AuditorAware.getCurrentAuditor` method should return an `Optional`. This recipe will update the implementations of this method to return an `Optional` using the `ofNullable`. 
* org.openrewrite.java.spring.framework.BeanMethodReturnNull: Make `@Bean` methods return `Object` instead of `void`. 
* org.openrewrite.java.spring.framework.BeanMethodsNotPublic: Remove public modifier from `@Bean` methods. They no longer have to be public visibility to be usable by Spring. 
* org.openrewrite.java.testing.assertj.JUnitAssertInstanceOfToAssertThat: Convert JUnit-style `assertInstanceOf()` to AssertJ's `assertThat().isInstanceOf()`. 
* org.openrewrite.java.testing.dbrider.ExecutionListenerToDbRiderAnnotation: Migrate the `DBRiderTestExecutionListener` to the `@DBRider` annotation. This recipe is useful when migrating from JUnit 4 `dbrider-spring` to JUnit 5 `dbrider-junit5`. 
* org.openrewrite.java.testing.dbrider.MigrateDbRiderSpringToDbRiderJUnit5: This recipe will migrate the necessary dependencies and annotations from DbRider with JUnit4 to JUnit5 in a Spring application. 
* org.openrewrite.java.testing.jmockit.JMockitMockUpToMockito: Rewrites JMockit `MockUp` blocks to Mockito statements. This recipe will not rewrite private methods in MockUp. 
* org.openrewrite.java.testing.mockito.Mockito4to5Only: Upgrade Mockito from 4.x to 5.x. Does not include 1.x to 4.x migration. 
* org.openrewrite.java.testing.mockito.VerifyZeroToNoMoreInteractions: Replaces `verifyZeroInteractions()` with `verifyNoMoreInteractions()` in Mockito tests when migration when using a Mockito version < 3.x. 
* org.openrewrite.jenkins.AddJellyXmlDeclaration: Ensure the XML declaration `<?jelly escape-by-default='true'?>` is present in all `.jelly` files. 
* org.openrewrite.kubernetes.ChangeApiVersion: Change the Kubernetes API version in a resource. 
* org.openrewrite.kubernetes.migrate.MigrateToAPIv1_26: This recipe will apply changes commonly needed when migrating to Kubernetes API v1.26. 
* org.openrewrite.kubernetes.migrate.MigrateToAPIv1_27: This recipe will apply changes commonly needed when migrating to Kubernetes API v1.27. 
* org.openrewrite.kubernetes.migrate.MigrateToAPIv1_29: This recipe will apply changes commonly needed when migrating to Kubernetes API v1.29. 
* org.openrewrite.kubernetes.migrate.MigrateToAPIv1_32: This recipe will apply changes commonly needed when migrating to Kubernetes API v1.32. 
* org.openrewrite.maven.RemoveUnusedProperties: Detect and remove Maven property declarations which do not have any usage within the project. 
* org.openrewrite.staticanalysis.AnnotateNullableMethods: Add the `@org.jspecify.annotation.Nullable` to non-private methods that may return `null`. This recipe scans for methods that do not already have a `@Nullable` annotation and checks their return statements for potential null values. It also identifies known methods from standard libraries that may return null, such as methods from `Map`, `Queue`, `Deque`, `NavigableSet`, and `Spliterator`. The return of streams, or lambdas are not taken into account. 
* org.openrewrite.staticanalysis.BufferedWriterCreationRecipes: The code `new BufferedWriter(new FileWriter(f))` creates a `BufferedWriter` that does not close the underlying `FileWriter` when it is closed. This can lead to file descriptor leaks as per CWE-755. Use `Files.newBufferedWriter` to create a `BufferedWriter` that closes the underlying file descriptor when it is closed. 
* org.openrewrite.staticanalysis.BufferedWriterCreationRecipes$BufferedWriterFromNewFileWriterWithFileAndBooleanArgumentsRecipe: Convert `new BufferedWriter(new FileWriter(f, b))` to `Files.newBufferedWriter(f.toPath(), b ? StandardOpenOption.APPEND : StandardOpenOption.CREATE)`. 
* org.openrewrite.staticanalysis.BufferedWriterCreationRecipes$BufferedWriterFromNewFileWriterWithFileArgumentRecipe: Convert `new BufferedWriter(new FileWriter(f))` to `Files.newBufferedWriter(f.toPath())`. 
* org.openrewrite.staticanalysis.BufferedWriterCreationRecipes$BufferedWriterFromNewFileWriterWithStringAndBooleanArgumentsRecipe: Convert `new BufferedWriter(new FileWriter(s, b))` to `Files.newBufferedWriter(new java.io.File(s).toPath(), b ? StandardOpenOption.APPEND : StandardOpenOption.CREATE)`. 
* org.openrewrite.staticanalysis.BufferedWriterCreationRecipes$BufferedWriterFromNewFileWriterWithStringArgumentRecipe: Convert `new BufferedWriter(new FileWriter(s))` to `Files.newBufferedWriter(new java.io.File(s).toPath())`. 
* org.openrewrite.staticanalysis.ReplaceClassIsInstanceWithInstanceof: There should be no `A.class.isInstance(a)`, it should be replaced by `a instanceof A`. 
* tech.picnic.errorprone.refasterrules.BugCheckerRulesRecipes$NameContentEqualsRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class NameContentEquals {<br />    <br />    @BeforeTemplate<br />    boolean before(Name name, CharSequence string) {<br />        return name.toString().equals(string.toString());<br />    }<br />    <br />    @BeforeTemplate<br />    boolean before(Name name, String string) {<br />        return name.toString().equals(string);<br />    }<br />    <br />    @AfterTemplate<br />    boolean after(Name name, CharSequence string) {<br />        return name.contentEquals(string);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesCreateTempFileInCustomDirectoryToFileRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class FilesCreateTempFileInCustomDirectoryToFile {<br />    <br />    @BeforeTemplate<br />    File before(File directory, String prefix, String suffix) throws IOException {<br />        return File.createTempFile(prefix, suffix, directory);<br />    }<br />    <br />    @AfterTemplate<br />    File after(File directory, String prefix, String suffix) throws IOException {<br />        return Files.createTempFile(directory.toPath(), prefix, suffix).toFile();<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathInstanceRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class PathInstance {<br />    <br />    @BeforeTemplate<br />    Path before(Path path) {<br />        return path.toFile().toPath();<br />    }<br />    <br />    @AfterTemplate<br />    Path after(Path path) {<br />        return path;<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathOfUriRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class PathOfUri {<br />    <br />    @BeforeTemplate<br />    Path before(URI uri) {<br />        return Paths.get(uri);<br />    }<br />    <br />    @AfterTemplate<br />    Path after(URI uri) {<br />        return Path.of(uri);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.MicrometerRulesRecipes: Refaster template recipes for `tech.picnic.errorprone.refasterrules.MicrometerRules`. Source. 
* tech.picnic.errorprone.refasterrules.MicrometerRulesRecipes$TagsOf1Recipe: Recipe created for the following Refaster template:<br />```java<br />static final class TagsOf1 {<br />    <br />    @BeforeTemplate<br />    ImmutableCollection<Tag> before(Tag tag) {<br />        return Refaster.anyOf(ImmutableSet.of(tag), ImmutableList.of(tag));<br />    }<br />    <br />    @AfterTemplate<br />    Iterable<Tag> after(Tag tag) {<br />        return Tags.of(tag);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.MicrometerRulesRecipes$TagsOf2Recipe: Recipe created for the following Refaster template:<br />```java<br />static final class TagsOf2 {<br />    <br />    @BeforeTemplate<br />    ImmutableCollection<Tag> before(Tag tag1, Tag tag2) {<br />        return Refaster.anyOf(ImmutableSet.of(tag1, tag2), ImmutableList.of(tag1, tag2));<br />    }<br />    <br />    @AfterTemplate<br />    Iterable<Tag> after(Tag tag1, Tag tag2) {<br />        return Tags.of(tag1, tag2);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.MicrometerRulesRecipes$TagsOf3Recipe: Recipe created for the following Refaster template:<br />```java<br />static final class TagsOf3 {<br />    <br />    @BeforeTemplate<br />    ImmutableCollection<Tag> before(Tag tag1, Tag tag2, Tag tag3) {<br />        return Refaster.anyOf(ImmutableSet.of(tag1, tag2, tag3), ImmutableList.of(tag1, tag2, tag3));<br />    }<br />    <br />    @AfterTemplate<br />    Iterable<Tag> after(Tag tag1, Tag tag2, Tag tag3) {<br />        return Tags.of(tag1, tag2, tag3);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.MicrometerRulesRecipes$TagsOf4Recipe: Recipe created for the following Refaster template:<br />```java<br />static final class TagsOf4 {<br />    <br />    @BeforeTemplate<br />    ImmutableCollection<Tag> before(Tag tag1, Tag tag2, Tag tag3, Tag tag4) {<br />        return Refaster.anyOf(ImmutableSet.of(tag1, tag2, tag3, tag4), ImmutableList.of(tag1, tag2, tag3, tag4));<br />    }<br />    <br />    @AfterTemplate<br />    Iterable<Tag> after(Tag tag1, Tag tag2, Tag tag3, Tag tag4) {<br />        return Tags.of(tag1, tag2, tag3, tag4);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.MicrometerRulesRecipes$TagsOf5Recipe: Recipe created for the following Refaster template:<br />```java<br />static final class TagsOf5 {<br />    <br />    @BeforeTemplate<br />    ImmutableCollection<Tag> before(Tag tag1, Tag tag2, Tag tag3, Tag tag4, Tag tag5) {<br />        return Refaster.anyOf(ImmutableSet.of(tag1, tag2, tag3, tag4, tag5), ImmutableList.of(tag1, tag2, tag3, tag4, tag5));<br />    }<br />    <br />    @AfterTemplate<br />    Iterable<Tag> after(Tag tag1, Tag tag2, Tag tag3, Tag tag4, Tag tag5) {<br />        return Tags.of(tag1, tag2, tag3, tag4, tag5);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerCompareUnsignedRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class IntegerCompareUnsigned {<br />    <br />    @BeforeTemplate<br />    int before(int x, int y) {<br />        return UnsignedInts.compare(x, y);<br />    }<br />    <br />    @AfterTemplate<br />    int after(int x, int y) {<br />        return Integer.compareUnsigned(x, y);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerDivideUnsignedRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class IntegerDivideUnsigned {<br />    <br />    @BeforeTemplate<br />    int before(int x, int y) {<br />        return UnsignedInts.divide(x, y);<br />    }<br />    <br />    @AfterTemplate<br />    int after(int x, int y) {<br />        return Integer.divideUnsigned(x, y);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerParseUnsignedIntRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class IntegerParseUnsignedInt {<br />    <br />    @BeforeTemplate<br />    int before(String string) {<br />        return Refaster.anyOf(UnsignedInts.parseUnsignedInt(string), Integer.parseUnsignedInt(string, 10));<br />    }<br />    <br />    @AfterTemplate<br />    int after(String string) {<br />        return Integer.parseUnsignedInt(string);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerParseUnsignedIntWithRadixRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class IntegerParseUnsignedIntWithRadix {<br />    <br />    @BeforeTemplate<br />    int before(String string, int radix) {<br />        return UnsignedInts.parseUnsignedInt(string, radix);<br />    }<br />    <br />    @AfterTemplate<br />    int after(String string, int radix) {<br />        return Integer.parseUnsignedInt(string, radix);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerRemainderUnsignedRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class IntegerRemainderUnsigned {<br />    <br />    @BeforeTemplate<br />    int before(int x, int y) {<br />        return UnsignedInts.remainder(x, y);<br />    }<br />    <br />    @AfterTemplate<br />    int after(int x, int y) {<br />        return Integer.remainderUnsigned(x, y);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerToUnsignedStringRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class IntegerToUnsignedString {<br />    <br />    @BeforeTemplate<br />    String before(int i) {<br />        return Refaster.anyOf(UnsignedInts.toString(i), Integer.toUnsignedString(i, 10));<br />    }<br />    <br />    @AfterTemplate<br />    String after(int i) {<br />        return Integer.toUnsignedString(i);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerToUnsignedStringWithRadixRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class IntegerToUnsignedStringWithRadix {<br />    <br />    @BeforeTemplate<br />    String before(int i, int radix) {<br />        return UnsignedInts.toString(i, radix);<br />    }<br />    <br />    @AfterTemplate<br />    String after(int i, int radix) {<br />        return Integer.toUnsignedString(i, radix);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongCompareUnsignedRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class LongCompareUnsigned {<br />    <br />    @BeforeTemplate<br />    long before(long x, long y) {<br />        return UnsignedLongs.compare(x, y);<br />    }<br />    <br />    @AfterTemplate<br />    long after(long x, long y) {<br />        return Long.compareUnsigned(x, y);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongDivideUnsignedRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class LongDivideUnsigned {<br />    <br />    @BeforeTemplate<br />    long before(long x, long y) {<br />        return UnsignedLongs.divide(x, y);<br />    }<br />    <br />    @AfterTemplate<br />    long after(long x, long y) {<br />        return Long.divideUnsigned(x, y);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongParseUnsignedLongRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class LongParseUnsignedLong {<br />    <br />    @BeforeTemplate<br />    long before(String string) {<br />        return Refaster.anyOf(UnsignedLongs.parseUnsignedLong(string), Long.parseUnsignedLong(string, 10));<br />    }<br />    <br />    @AfterTemplate<br />    long after(String string) {<br />        return Long.parseUnsignedLong(string);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongParseUnsignedLongWithRadixRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class LongParseUnsignedLongWithRadix {<br />    <br />    @BeforeTemplate<br />    long before(String string, int radix) {<br />        return UnsignedLongs.parseUnsignedLong(string, radix);<br />    }<br />    <br />    @AfterTemplate<br />    long after(String string, int radix) {<br />        return Long.parseUnsignedLong(string, radix);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongRemainderUnsignedRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class LongRemainderUnsigned {<br />    <br />    @BeforeTemplate<br />    long before(long x, long y) {<br />        return UnsignedLongs.remainder(x, y);<br />    }<br />    <br />    @AfterTemplate<br />    long after(long x, long y) {<br />        return Long.remainderUnsigned(x, y);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongToUnsignedStringRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class LongToUnsignedString {<br />    <br />    @BeforeTemplate<br />    String before(long i) {<br />        return Refaster.anyOf(UnsignedLongs.toString(i), Long.toUnsignedString(i, 10));<br />    }<br />    <br />    @AfterTemplate<br />    String after(long i) {<br />        return Long.toUnsignedString(i);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongToUnsignedStringWithRadixRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class LongToUnsignedStringWithRadix {<br />    <br />    @BeforeTemplate<br />    String before(long i, int radix) {<br />        return UnsignedLongs.toString(i, radix);<br />    }<br />    <br />    @AfterTemplate<br />    String after(long i, int radix) {<br />        return Long.toUnsignedString(i, radix);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfCharRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class StringIndexOfChar {<br />    <br />    @BeforeTemplate<br />    @SuppressWarnings(value = "java:S4635")<br />    int before(String string, int ch, int fromIndex) {<br />        return string.substring(fromIndex).indexOf(ch);<br />    }<br />    <br />    @AfterTemplate<br />    int after(String string, int ch, int fromIndex) {<br />        return Math.max(-1, string.indexOf(ch, fromIndex) - fromIndex);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfStringRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class StringIndexOfString {<br />    <br />    @BeforeTemplate<br />    @SuppressWarnings(value = "java:S4635")<br />    int before(String string, String substring, int fromIndex) {<br />        return string.substring(fromIndex).indexOf(substring);<br />    }<br />    <br />    @AfterTemplate<br />    int after(String string, String substring, int fromIndex) {<br />        return Math.max(-1, string.indexOf(substring, fromIndex) - fromIndex);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfCharRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class StringLastIndexOfChar {<br />    <br />    @BeforeTemplate<br />    @SuppressWarnings(value = "java:S4635")<br />    int before(String string, int ch, int fromIndex) {<br />        return string.substring(fromIndex).lastIndexOf(ch);<br />    }<br />    <br />    @AfterTemplate<br />    int after(String string, int ch, int fromIndex) {<br />        return Math.max(-1, string.lastIndexOf(ch) - fromIndex);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfCharWithIndexRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class StringLastIndexOfCharWithIndex {<br />    <br />    @BeforeTemplate<br />    int before(String string, int ch, int fromIndex) {<br />        return string.substring(0, fromIndex).lastIndexOf(ch);<br />    }<br />    <br />    @AfterTemplate<br />    int after(String string, int ch, int fromIndex) {<br />        return string.lastIndexOf(ch, fromIndex - 1);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfStringRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class StringLastIndexOfString {<br />    <br />    @BeforeTemplate<br />    @SuppressWarnings(value = "java:S4635")<br />    int before(String string, String substring, int fromIndex) {<br />        return string.substring(fromIndex).lastIndexOf(substring);<br />    }<br />    <br />    @AfterTemplate<br />    int after(String string, String substring, int fromIndex) {<br />        return Math.max(-1, string.lastIndexOf(substring) - fromIndex);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfStringWithIndexRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class StringLastIndexOfStringWithIndex {<br />    <br />    @BeforeTemplate<br />    int before(String string, String substring, int fromIndex) {<br />        return string.substring(0, fromIndex).lastIndexOf(substring);<br />    }<br />    <br />    @AfterTemplate<br />    int after(String string, String substring, int fromIndex) {<br />        return string.lastIndexOf(substring, fromIndex - 1);<br />    }<br />}<br />```<br />. 
* tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringStartsWithRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class StringStartsWith {<br />    <br />    @BeforeTemplate<br />    @SuppressWarnings(value = "java:S4635")<br />    boolean before(String string, String prefix, int fromIndex) {<br />        return string.substring(fromIndex).startsWith(prefix);<br />    }<br />    <br />    @AfterTemplate<br />    boolean after(String string, String prefix, int fromIndex) {<br />        return string.startsWith(prefix, fromIndex);<br />    }<br />}<br />```<br />. 

## Removed Recipes

* **org.openrewrite.java.spring.BeanMethodsNotPublic**: Remove public modifier from `@Bean` methods. They no longer have to be public visibility to be usable by Spring. 
* **org.openrewrite.java.testing.mockito.RetainStrictnessWarn**: Migrating from JUnit 4 to 5 changes the default strictness of the mocks from `WARN` to `STRICT_STUBS`. To prevent tests from failing we restore the original behavior by adding `@MockitoSettings(strictness = Strictness.WARN)`. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$BooleanCompareRecipe**: Recipe created for the following Refaster template:
```java
static final class BooleanCompare {
    
    @BeforeTemplate
    int before(boolean a, boolean b) {
        return Booleans.compare(a, b);
    }
    
    @AfterTemplate
    int after(boolean a, boolean b) {
        return Boolean.compare(a, b);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$CharacterCompareRecipe**: Recipe created for the following Refaster template:
```java
static final class CharacterCompare {
    
    @BeforeTemplate
    int before(char a, char b) {
        return Chars.compare(a, b);
    }
    
    @AfterTemplate
    int after(char a, char b) {
        return Character.compare(a, b);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$DoubleCompareRecipe**: Recipe created for the following Refaster template:
```java
static final class DoubleCompare {
    
    @BeforeTemplate
    int before(double a, double b) {
        return Doubles.compare(a, b);
    }
    
    @AfterTemplate
    int after(double a, double b) {
        return Double.compare(a, b);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$FloatCompareRecipe**: Recipe created for the following Refaster template:
```java
static final class FloatCompare {
    
    @BeforeTemplate
    int before(float a, float b) {
        return Floats.compare(a, b);
    }
    
    @AfterTemplate
    int after(float a, float b) {
        return Float.compare(a, b);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerCompareRecipe**: Recipe created for the following Refaster template:
```java
static final class IntegerCompare {
    
    @BeforeTemplate
    int before(int a, int b) {
        return Ints.compare(a, b);
    }
    
    @AfterTemplate
    int after(int a, int b) {
        return Integer.compare(a, b);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongCompareRecipe**: Recipe created for the following Refaster template:
```java
static final class LongCompare {
    
    @BeforeTemplate
    int before(long a, long b) {
        return Longs.compare(a, b);
    }
    
    @AfterTemplate
    int after(long a, long b) {
        return Long.compare(a, b);
    }
}
```
. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ShortCompareRecipe**: Recipe created for the following Refaster template:
```java
static final class ShortCompare {
    
    @BeforeTemplate
    int before(short a, short b) {
        return Shorts.compare(a, b);
    }
    
    @AfterTemplate
    int after(short a, short b) {
        return Short.compare(a, b);
    }
}
```
. 

## Changed Recipes

* org.openrewrite.java.dependencies.RemoveDependency was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `scope: { type: String, required: false }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `scope: { type: String, required: false }`
    * `unlessUsing: { type: String, required: false }`
* org.openrewrite.maven.UpgradeParentVersion was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `onlyExternal: { type: Boolean, required: false }`
    * `versionPattern: { type: String, required: false }`
* org.openrewrite.yaml.search.FindProperty was changed:
  * Old Options:
    * `propertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
  * New Options:
    * `propertyKey: { type: String, required: true }`
    * `propertyValue: { type: String, required: false }`
    * `relaxedBinding: { type: Boolean, required: false }`