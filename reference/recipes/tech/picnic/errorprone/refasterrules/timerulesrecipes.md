# Refaster rules related to expressions dealing with time

**tech.picnic.errorprone.refasterrules.TimeRulesRecipes**

_Refaster template recipes for `tech.picnic.errorprone.refasterrules.TimeRules`. [Source](https://error-prone.picnic.tech/refasterrules/TimeRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.TimeRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.7.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.7.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Prefer `Clock#instant()` over `Instant#now(Clock)`, as it is more concise and more "OOP-py"](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$clockinstantrecipe.md)
* [Use `ZoneOffset#UTC` when possible](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$utcconstantrecipe.md)
* [Prefer `LocalDate#ofInstant(Instant, ZoneId)` over more indirect alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateofinstantrecipe.md)
* [Prefer `LocalDateTime#ofInstant(Instant, ZoneId)` over more indirect alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeofinstantrecipe.md)
* [Prefer `LocalTime#ofInstant(Instant, ZoneId)` over more indirect alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeofinstantrecipe.md)
* [Prefer `OffsetDateTime#ofInstant(Instant, ZoneId)` over more indirect alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeofinstantrecipe.md)
* [Prefer `Instant#atOffset(ZoneOffset)` over more verbose alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$instantatoffsetrecipe.md)
* [Prefer `OffsetTime#ofInstant(Instant, ZoneId)` over more indirect alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeofinstantrecipe.md)
* [Prefer `Instant#atZone(ZoneId)` over more verbose alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$instantatzonerecipe.md)
* [Use `Clock#systemUTC()` when possible](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$utcclockrecipe.md)
* [Prefer `Instant#EPOCH` over alternative representations](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$epochinstantrecipe.md)
* [Prefer `Instant#isBefore(Instant)` over explicit comparison, as it yields more readable code](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$instantisbeforerecipe.md)
* [Prefer `Instant#isBefore(Instant)` over explicit comparison, as it yields more readable code](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$instantisafterrecipe.md)
* [Prefer the `LocalTime#MIN` over alternative representations](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeminrecipe.md)
* [Prefer `LocalDate#atStartOfDay()` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateatstartofdayrecipe.md)
* [Prefer `ChronoLocalDate#isBefore(ChronoLocalDate)` over explicit comparison, as it yields more readable code](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisbeforerecipe.md)
* [Prefer `ChronoLocalDate#isBefore(ChronoLocalDate)` over explicit comparison, as it yields more readable code](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisafterrecipe.md)
* [Prefer `ChronoLocalDateTime#isBefore(ChronoLocalDateTime)` over explicit comparison, as it yields more readable code](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisbeforerecipe.md)
* [Prefer `ChronoLocalDateTime#isBefore(ChronoLocalDateTime)` over explicit comparison, as it yields more readable code](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisafterrecipe.md)
* [Prefer `ChronoZonedDateTime#isBefore(ChronoZonedDateTime)` over explicit comparison, as it yields more readable code](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisbeforerecipe.md)
* [Prefer `ChronoZonedDateTime#isBefore(ChronoZonedDateTime)` over explicit comparison, as it yields more readable code](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisafterrecipe.md)
* [Prefer `OffsetDateTime#isBefore(OffsetDateTime)` over explicit comparison, as it yields more readable code](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeisbeforerecipe.md)
* [Prefer `OffsetDateTime#isBefore(OffsetDateTime)` over explicit comparison, as it yields more readable code](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeisafterrecipe.md)
* [Refaster template `TimeRules.ZeroDuration`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zerodurationrecipe.md)
* [Prefer `Duration#ofDays(long)` over alternative representations](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofdaysrecipe.md)
* [Prefer `Duration#ofHours(long)` over alternative representations](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofhoursrecipe.md)
* [Prefer `Duration#ofMillis(long)` over alternative representations](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofmillisrecipe.md)
* [Prefer `Duration#ofMinutes(long)` over alternative representations](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofminutesrecipe.md)
* [Prefer `Duration#ofNanos(long)` over alternative representations](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofnanosrecipe.md)
* [Prefer `Duration#ofSeconds(long)` over alternative representations](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofsecondsrecipe.md)
* [Don't unnecessarily convert to and from milliseconds. (This way nanosecond precision is retained.) <p><strong>Warning:</strong> this rewrite rule increases precision!](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationbetweeninstantsrecipe.md)
* [Don't unnecessarily convert to and from milliseconds. (This way nanosecond precision is retained.) <p><strong>Warning:</strong> this rewrite rule increases precision!](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationbetweenoffsetdatetimesrecipe.md)
* [Prefer `Duration#isZero()` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationiszerorecipe.md)
* [Refaster template `TimeRules.ZeroPeriod`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zeroperiodrecipe.md)
* [Prefer `LocalDate#plusDays(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateplusdaysrecipe.md)
* [Prefer `LocalDate#plusWeeks(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateplusweeksrecipe.md)
* [Prefer `LocalDate#plusMonths(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateplusmonthsrecipe.md)
* [Prefer `LocalDate#plusYears(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateplusyearsrecipe.md)
* [Prefer `LocalDate#minusDays(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateminusdaysrecipe.md)
* [Prefer `LocalDate#minusWeeks(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateminusweeksrecipe.md)
* [Prefer `LocalDate#minusMonths(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateminusmonthsrecipe.md)
* [Prefer `LocalDate#minusYears(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateminusyearsrecipe.md)
* [Prefer `LocalTime#plusNanos(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeplusnanosrecipe.md)
* [Prefer `LocalTime#plusSeconds(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeplussecondsrecipe.md)
* [Prefer `LocalTime#plusMinutes(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeplusminutesrecipe.md)
* [Prefer `LocalTime#plusHours(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeplushoursrecipe.md)
* [Prefer `LocalTime#minusNanos(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeminusnanosrecipe.md)
* [Prefer `LocalTime#minusSeconds(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeminussecondsrecipe.md)
* [Prefer `LocalTime#minusMinutes(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeminusminutesrecipe.md)
* [Prefer `LocalTime#minusHours(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeminushoursrecipe.md)
* [Prefer `OffsetTime#plusNanos(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplusnanosrecipe.md)
* [Prefer `OffsetTime#plusSeconds(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplussecondsrecipe.md)
* [Prefer `OffsetTime#plusMinutes(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplusminutesrecipe.md)
* [Prefer `OffsetTime#plusHours(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplushoursrecipe.md)
* [Prefer `OffsetTime#minusNanos(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminusnanosrecipe.md)
* [Prefer `OffsetTime#minusSeconds(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminussecondsrecipe.md)
* [Prefer `OffsetTime#minusMinutes(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminusminutesrecipe.md)
* [Prefer `OffsetTime#minusHours(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminushoursrecipe.md)
* [Prefer `LocalDateTime#plusNanos(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusnanosrecipe.md)
* [Prefer `LocalDateTime#plusSeconds(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplussecondsrecipe.md)
* [Prefer `LocalDateTime#plusMinutes(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusminutesrecipe.md)
* [Prefer `LocalDateTime#plusHours(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplushoursrecipe.md)
* [Prefer `LocalDateTime#plusDays(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusdaysrecipe.md)
* [Prefer `LocalDateTime#plusWeeks(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusweeksrecipe.md)
* [Prefer `LocalDateTime#plusMonths(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusmonthsrecipe.md)
* [Prefer `LocalDateTime#plusYears(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusyearsrecipe.md)
* [Prefer `LocalDateTime#minusNanos(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusnanosrecipe.md)
* [Prefer `LocalDateTime#minusSeconds(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminussecondsrecipe.md)
* [Prefer `LocalDateTime#minusMinutes(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusminutesrecipe.md)
* [Prefer `LocalDateTime#minusHours(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminushoursrecipe.md)
* [Prefer `LocalDateTime#minusDays(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusdaysrecipe.md)
* [Prefer `LocalDateTime#minusWeeks(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusweeksrecipe.md)
* [Prefer `LocalDateTime#minusMonths(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusmonthsrecipe.md)
* [Prefer `LocalDateTime#minusYears(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusyearsrecipe.md)
* [Prefer `OffsetDateTime#plusNanos(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusnanosrecipe.md)
* [Prefer `OffsetDateTime#plusSeconds(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplussecondsrecipe.md)
* [Prefer `OffsetDateTime#plusMinutes(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusminutesrecipe.md)
* [Prefer `OffsetDateTime#plusHours(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplushoursrecipe.md)
* [Prefer `OffsetDateTime#plusDays(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusdaysrecipe.md)
* [Prefer `OffsetDateTime#plusWeeks(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusweeksrecipe.md)
* [Prefer `OffsetDateTime#plusMonths(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusmonthsrecipe.md)
* [Prefer `OffsetDateTime#plusYears(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusyearsrecipe.md)
* [Prefer `OffsetDateTime#minusNanos(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusnanosrecipe.md)
* [Prefer `OffsetDateTime#minusSeconds(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminussecondsrecipe.md)
* [Prefer `OffsetDateTime#minusMinutes(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusminutesrecipe.md)
* [Prefer `OffsetDateTime#minusHours(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminushoursrecipe.md)
* [Prefer `OffsetDateTime#minusDays(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusdaysrecipe.md)
* [Prefer `OffsetDateTime#minusWeeks(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusweeksrecipe.md)
* [Prefer `OffsetDateTime#minusMonths(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusmonthsrecipe.md)
* [Prefer `OffsetDateTime#minusYears(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusyearsrecipe.md)
* [Prefer `ZonedDateTime#plusNanos(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusnanosrecipe.md)
* [Prefer `ZonedDateTime#plusSeconds(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplussecondsrecipe.md)
* [Prefer `ZonedDateTime#plusMinutes(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusminutesrecipe.md)
* [Prefer `ZonedDateTime#plusHours(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplushoursrecipe.md)
* [Prefer `ZonedDateTime#plusDays(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusdaysrecipe.md)
* [Prefer `ZonedDateTime#plusWeeks(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusweeksrecipe.md)
* [Prefer `ZonedDateTime#plusMonths(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusmonthsrecipe.md)
* [Prefer `ZonedDateTime#plusYears(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusyearsrecipe.md)
* [Prefer `ZonedDateTime#minusNanos(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusnanosrecipe.md)
* [Prefer `ZonedDateTime#minusSeconds(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminussecondsrecipe.md)
* [Prefer `ZonedDateTime#minusMinutes(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusminutesrecipe.md)
* [Prefer `ZonedDateTime#minusHours(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminushoursrecipe.md)
* [Prefer `ZonedDateTime#minusDays(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusdaysrecipe.md)
* [Prefer `ZonedDateTime#minusWeeks(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusweeksrecipe.md)
* [Prefer `ZonedDateTime#minusMonths(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusmonthsrecipe.md)
* [Prefer `ZonedDateTime#minusYears(long)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusyearsrecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.TimeRulesRecipes
displayName: Refaster rules related to expressions dealing with time
description: Refaster template recipes for `tech.picnic.errorprone.refasterrules.TimeRules`. [Source](https://error-prone.picnic.tech/refasterrules/TimeRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ClockInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$UtcConstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimeOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimeOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantAtOffsetRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetTimeOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantAtZoneRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$UtcClockRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$EpochInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantIsBeforeRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantIsAfterRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimeMinRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateAtStartOfDayRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ChronoLocalDateIsBeforeRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ChronoLocalDateIsAfterRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ChronoLocalDateTimeIsBeforeRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ChronoLocalDateTimeIsAfterRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ChronoZonedDateTimeIsBeforeRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ChronoZonedDateTimeIsAfterRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeIsBeforeRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeIsAfterRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZeroDurationRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfDaysRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfMillisRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationBetweenInstantsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationBetweenOffsetDateTimesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationIsZeroRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZeroPeriodRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDatePlusDaysRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDatePlusWeeksRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDatePlusMonthsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDatePlusYearsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateMinusDaysRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateMinusWeeksRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateMinusMonthsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateMinusYearsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimePlusNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimePlusSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimePlusMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimePlusHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimeMinusNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimeMinusSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimeMinusMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimeMinusHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetTimePlusNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetTimePlusSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetTimePlusMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetTimePlusHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetTimeMinusNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetTimeMinusSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetTimeMinusMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetTimeMinusHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimePlusNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimePlusSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimePlusMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimePlusHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimePlusDaysRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimePlusWeeksRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimePlusMonthsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimePlusYearsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimeMinusNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimeMinusSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimeMinusMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimeMinusHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimeMinusDaysRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimeMinusWeeksRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimeMinusMonthsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimeMinusYearsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimePlusNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimePlusSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimePlusMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimePlusHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimePlusDaysRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimePlusWeeksRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimePlusMonthsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimePlusYearsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeMinusNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeMinusSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeMinusMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeMinusHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeMinusDaysRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeMinusWeeksRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeMinusMonthsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeMinusYearsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimePlusNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimePlusSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimePlusMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimePlusHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimePlusDaysRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimePlusWeeksRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimePlusMonthsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimePlusYearsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimeMinusNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimeMinusSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimeMinusMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimeMinusHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimeMinusDaysRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimeMinusWeeksRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimeMinusMonthsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ZonedDateTimeMinusYearsRecipe

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.7.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.TimeRulesRecipes")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.7.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.23.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.7.1")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.TimeRulesRecipes")
        exportDatatables = true
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>tech.picnic.errorprone.refasterrules.TimeRulesRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.7.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.TimeRulesRecipes -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe TimeRulesRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.TimeRulesRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

