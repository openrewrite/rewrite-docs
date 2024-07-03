# Example showing issues with links

## Example 1

**What I code in markdown:**

```markdown
* [Assorted Refaster rules that do not (yet) belong in one of the other classes with more topical Refaster rules](reference/recipes/tech/picnic/errorprone/refasterrules/assortedrulesrecipes.md)
* [Avoid calling BugCheckerRefactoringTestHelper#setFixChooser(FixChooser) or BugCheckerRefactoringTestHelper#setImportOrder(String) with their respective default values](reference/recipes/tech/picnic/errorprone/refasterrules/bugcheckerrulesrecipes$bugcheckerrefactoringtesthelperidentityrecipe.md)
```

**How this looks:**

* [Assorted Refaster rules that do not (yet) belong in one of the other classes with more topical Refaster rules](reference/recipes/tech/picnic/errorprone/refasterrules/assortedrulesrecipes.md)
* [Avoid calling BugCheckerRefactoringTestHelper#setFixChooser(FixChooser) or BugCheckerRefactoringTestHelper#setImportOrder(String) with their respective default values](reference/recipes/tech/picnic/errorprone/refasterrules/bugcheckerrulesrecipes$bugcheckerrefactoringtesthelperidentityrecipe.md)

**What GitBook changes this to:**

```markdown
* [Assorted Refaster rules that do not (yet) belong in one of the other classes with more topical Refas](reference/recipes/tech/picnic/errorprone/refasterrules/assortedrulesrecipes.md)
* [Avoid calling BugCheckerRefactoringTestHelper#setFixChooser(FixChooser) or BugCheckerRefactoringTest](reference/recipes/tech/picnic/errorprone/refasterrules/bugcheckerrulesrecipes$bugcheckerrefactoringtesthelperidentityrecipe.md)
```

**How this looks:**

* [Assorted Refaster rules that do not (yet) belong in one of the other classes with more topical Refas](reference/recipes/tech/picnic/errorprone/refasterrules/assortedrulesrecipes.md)
* [Avoid calling BugCheckerRefactoringTestHelper#setFixChooser(FixChooser) or BugCheckerRefactoringTest](reference/recipes/tech/picnic/errorprone/refasterrules/bugcheckerrulesrecipes$bugcheckerrefactoringtesthelperidentityrecipe.md)

**Link to this change:**

_You'll need to expand the `SUMMARY.md` file to get to the exact line:__

https://github.com/openrewrite/rewrite-docs/commit/5025e2fbd90f27bd8cbbf1fd5e62d66b8100f771#diff-4f74b24c8cd7466c1c46dc972d8e284ed47091160afda95a432cc000f2eceb4aR1912-R1913

## Example 2

**What I code in markdown:**

```markdown
* [Apply DoubleStream#filter(DoublePredicate) before DoubleStream#sorted() to reduce the number of elements to sort](reference/recipes/tech/picnic/errorprone/refasterrules/doublestreamrulesrecipes$doublestreamfiltersortedrecipe.md)
* [Apply IntStream#filter(IntPredicate) before IntStream#sorted() to reduce the number of elements to sort](reference/recipes/tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamfiltersortedrecipe.md)
* [Apply LongStream#filter(LongPredicate) before LongStream#sorted() to reduce the number of elements to sort](reference/recipes/tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamfiltersortedrecipe.md)
```

**How this looks:**

* [Apply DoubleStream#filter(DoublePredicate) before DoubleStream#sorted() to reduce the number of elements to sort](reference/recipes/tech/picnic/errorprone/refasterrules/doublestreamrulesrecipes$doublestreamfiltersortedrecipe.md)
* [Apply IntStream#filter(IntPredicate) before IntStream#sorted() to reduce the number of elements to sort](reference/recipes/tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamfiltersortedrecipe.md)
* [Apply LongStream#filter(LongPredicate) before LongStream#sorted() to reduce the number of elements to sort](reference/recipes/tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamfiltersortedrecipe.md)

**What GitBook changes this to:**

```markdown
* [Apply DoubleStream#filter(DoublePredicate) before DoubleStream#sorted() to reduce the number of elem](reference/recipes/tech/picnic/errorprone/refasterrules/doublestreamrulesrecipes$doublestreamfiltersortedrecipe.md)
* [Apply IntStream#filter(IntPredicate) before IntStream#sorted() to reduce the number of elements to s](reference/recipes/tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamfiltersortedrecipe.md)
* [Apply LongStream#filter(LongPredicate) before LongStream#sorted() to reduce the number of elements t](reference/recipes/tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamfiltersortedrecipe.md)
```

**How this looks:**

* [Apply DoubleStream#filter(DoublePredicate) before DoubleStream#sorted() to reduce the number of elem](reference/recipes/tech/picnic/errorprone/refasterrules/doublestreamrulesrecipes$doublestreamfiltersortedrecipe.md)
* [Apply IntStream#filter(IntPredicate) before IntStream#sorted() to reduce the number of elements to s](reference/recipes/tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamfiltersortedrecipe.md)
* [Apply LongStream#filter(LongPredicate) before LongStream#sorted() to reduce the number of elements t](reference/recipes/tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamfiltersortedrecipe.md)

**Link to this change:**

_You'll need to expand the `SUMMARY.md` file to get to the exact line:__

https://github.com/openrewrite/rewrite-docs/commit/5025e2fbd90f27bd8cbbf1fd5e62d66b8100f771#diff-4f74b24c8cd7466c1c46dc972d8e284ed47091160afda95a432cc000f2eceb4aR1897-R1899

## Example 3

**What I code in markdown:**

```markdown
* [Prefer ChronoLocalDate#isBefore(ChronoLocalDate) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisafterrecipe.md)
* [Prefer ChronoLocalDate#isBefore(ChronoLocalDate) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisbeforerecipe.md)
* [Prefer ChronoLocalDateTime#isBefore(ChronoLocalDateTime) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisafterrecipe.md)
* [Prefer ChronoLocalDateTime#isBefore(ChronoLocalDateTime) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisbeforerecipe.md)
* [Prefer ChronoZonedDateTime#isBefore(ChronoZonedDateTime) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisafterrecipe.md)
* [Prefer ChronoZonedDateTime#isBefore(ChronoZonedDateTime) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisbeforerecipe.md)
```

**How this looks:**

* [Prefer ChronoLocalDate#isBefore(ChronoLocalDate) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisafterrecipe.md)
* [Prefer ChronoLocalDate#isBefore(ChronoLocalDate) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisbeforerecipe.md)
* [Prefer ChronoLocalDateTime#isBefore(ChronoLocalDateTime) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisafterrecipe.md)
* [Prefer ChronoLocalDateTime#isBefore(ChronoLocalDateTime) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisbeforerecipe.md)
* [Prefer ChronoZonedDateTime#isBefore(ChronoZonedDateTime) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisafterrecipe.md)
* [Prefer ChronoZonedDateTime#isBefore(ChronoZonedDateTime) over explicit comparison, as it yields more readable code](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisbeforerecipe.md)

**What GitBook changes this to:**

```markdown
* [Prefer ChronoLocalDate#isBefore(ChronoLocalDate) over explicit comparison, as it yields more readabl](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisafterrecipe.md)
* [Prefer ChronoLocalDate#isBefore(ChronoLocalDate) over explicit comparison, as it yields more readabl](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisbeforerecipe.md)
* [Prefer ChronoLocalDateTime#isBefore(ChronoLocalDateTime) over explicit comparison, as it yields more](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisafterrecipe.md)
* [Prefer ChronoLocalDateTime#isBefore(ChronoLocalDateTime) over explicit comparison, as it yields more](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisbeforerecipe.md)
* [Prefer ChronoZonedDateTime#isBefore(ChronoZonedDateTime) over explicit comparison, as it yields more](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisafterrecipe.md)
* [Prefer ChronoZonedDateTime#isBefore(ChronoZonedDateTime) over explicit comparison, as it yields more](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisbeforerecipe.md)
```

**How this looks:**

* [Prefer ChronoLocalDate#isBefore(ChronoLocalDate) over explicit comparison, as it yields more readabl](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisafterrecipe.md)
* [Prefer ChronoLocalDate#isBefore(ChronoLocalDate) over explicit comparison, as it yields more readabl](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisbeforerecipe.md)
* [Prefer ChronoLocalDateTime#isBefore(ChronoLocalDateTime) over explicit comparison, as it yields more](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisafterrecipe.md)
* [Prefer ChronoLocalDateTime#isBefore(ChronoLocalDateTime) over explicit comparison, as it yields more](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisbeforerecipe.md)
* [Prefer ChronoZonedDateTime#isBefore(ChronoZonedDateTime) over explicit comparison, as it yields more](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisafterrecipe.md)
* [Prefer ChronoZonedDateTime#isBefore(ChronoZonedDateTime) over explicit comparison, as it yields more](reference/recipes/tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisbeforerecipe.md)

**Link to this change:**

_You'll need to expand the `SUMMARY.md` file to get to the exact line:__

https://github.com/openrewrite/rewrite-docs/commit/5025e2fbd90f27bd8cbbf1fd5e62d66b8100f771#diff-4f74b24c8cd7466c1c46dc972d8e284ed47091160afda95a432cc000f2eceb4aR1943-R1948

