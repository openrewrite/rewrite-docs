---
sidebar_label: "TimeRules Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `TimeRules` Refaster recipes

**tech.picnic.errorprone.refasterrules.TimeRulesRecipes**

_Refaster rules related to expressions dealing with time. [Source](https://error-prone.picnic.tech/refasterrules/TimeRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.TimeRulesRecipes), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `TimeRules.ClockInstant`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$clockinstantrecipe)
* [Refaster template `TimeRules.UtcConstant`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$utcconstantrecipe)
* [Refaster template `TimeRules.LocalDateOfInstant`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateofinstantrecipe)
* [Refaster template `TimeRules.LocalDateTimeOfInstant`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeofinstantrecipe)
* [Refaster template `TimeRules.LocalTimeOfInstant`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeofinstantrecipe)
* [Refaster template `TimeRules.OffsetDateTimeOfInstant`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeofinstantrecipe)
* [Refaster template `TimeRules.InstantIdentity`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$instantidentityrecipe)
* [Prefer `Instant#truncatedTo(TemporalUnit)` over less obvious alternatives](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$instanttruncatedtomillisecondsrecipe)
* [Refaster template `TimeRules.InstantTruncatedToSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$instanttruncatedtosecondsrecipe)
* [Refaster template `TimeRules.InstantAtOffset`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$instantatoffsetrecipe)
* [Refaster template `TimeRules.OffsetTimeOfInstant`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeofinstantrecipe)
* [Refaster template `TimeRules.InstantAtZone`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$instantatzonerecipe)
* [Refaster template `TimeRules.UtcClock`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$utcclockrecipe)
* [Refaster template `TimeRules.EpochInstant`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$epochinstantrecipe)
* [Refaster template `TimeRules.InstantIsBefore`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$instantisbeforerecipe)
* [Refaster template `TimeRules.InstantIsAfter`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$instantisafterrecipe)
* [Refaster template `TimeRules.LocalTimeMin`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeminrecipe)
* [Refaster template `TimeRules.LocalDateAtStartOfDay`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateatstartofdayrecipe)
* [Refaster template `TimeRules.ChronoLocalDateIsBefore`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisbeforerecipe)
* [Refaster template `TimeRules.ChronoLocalDateIsAfter`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisafterrecipe)
* [Refaster template `TimeRules.ChronoLocalDateTimeIsBefore`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisbeforerecipe)
* [Refaster template `TimeRules.ChronoLocalDateTimeIsAfter`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisafterrecipe)
* [Refaster template `TimeRules.ChronoZonedDateTimeIsBefore`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisbeforerecipe)
* [Refaster template `TimeRules.ChronoZonedDateTimeIsAfter`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisafterrecipe)
* [Refaster template `TimeRules.OffsetDateTimeIsBefore`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeisbeforerecipe)
* [Refaster template `TimeRules.OffsetDateTimeIsAfter`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeisafterrecipe)
* [Refaster template `TimeRules.ZeroDuration`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zerodurationrecipe)
* [Refaster template `TimeRules.DurationOfDays`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofdaysrecipe)
* [Refaster template `TimeRules.DurationOfHours`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofhoursrecipe)
* [Refaster template `TimeRules.DurationOfMillis`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofmillisrecipe)
* [Refaster template `TimeRules.DurationOfMinutes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofminutesrecipe)
* [Refaster template `TimeRules.DurationOfNanos`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofnanosrecipe)
* [Refaster template `TimeRules.DurationOfSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationofsecondsrecipe)
* [Refaster template `TimeRules.DurationBetweenInstants`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationbetweeninstantsrecipe)
* [Refaster template `TimeRules.DurationBetweenOffsetDateTimes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationbetweenoffsetdatetimesrecipe)
* [Refaster template `TimeRules.DurationIsZero`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$durationiszerorecipe)
* [Refaster template `TimeRules.ZeroPeriod`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zeroperiodrecipe)
* [Refaster template `TimeRules.LocalDatePlusDays`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateplusdaysrecipe)
* [Refaster template `TimeRules.LocalDatePlusWeeks`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateplusweeksrecipe)
* [Refaster template `TimeRules.LocalDatePlusMonths`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateplusmonthsrecipe)
* [Refaster template `TimeRules.LocalDatePlusYears`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateplusyearsrecipe)
* [Refaster template `TimeRules.LocalDateMinusDays`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateminusdaysrecipe)
* [Refaster template `TimeRules.LocalDateMinusWeeks`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateminusweeksrecipe)
* [Refaster template `TimeRules.LocalDateMinusMonths`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateminusmonthsrecipe)
* [Refaster template `TimeRules.LocalDateMinusYears`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdateminusyearsrecipe)
* [Refaster template `TimeRules.LocalTimePlusNanos`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeplusnanosrecipe)
* [Refaster template `TimeRules.LocalTimePlusSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeplussecondsrecipe)
* [Refaster template `TimeRules.LocalTimePlusMinutes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeplusminutesrecipe)
* [Refaster template `TimeRules.LocalTimePlusHours`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeplushoursrecipe)
* [Refaster template `TimeRules.LocalTimeMinusNanos`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeminusnanosrecipe)
* [Refaster template `TimeRules.LocalTimeMinusSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeminussecondsrecipe)
* [Refaster template `TimeRules.LocalTimeMinusMinutes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeminusminutesrecipe)
* [Refaster template `TimeRules.LocalTimeMinusHours`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localtimeminushoursrecipe)
* [Refaster template `TimeRules.OffsetTimePlusNanos`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplusnanosrecipe)
* [Refaster template `TimeRules.OffsetTimePlusSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplussecondsrecipe)
* [Refaster template `TimeRules.OffsetTimePlusMinutes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplusminutesrecipe)
* [Refaster template `TimeRules.OffsetTimePlusHours`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplushoursrecipe)
* [Refaster template `TimeRules.OffsetTimeMinusNanos`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminusnanosrecipe)
* [Refaster template `TimeRules.OffsetTimeMinusSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminussecondsrecipe)
* [Refaster template `TimeRules.OffsetTimeMinusMinutes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminusminutesrecipe)
* [Refaster template `TimeRules.OffsetTimeMinusHours`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminushoursrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusNanos`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusnanosrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplussecondsrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusMinutes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusminutesrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusHours`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplushoursrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusDays`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusdaysrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusWeeks`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusweeksrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusMonths`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusmonthsrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusYears`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusyearsrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusNanos`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusnanosrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminussecondsrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusMinutes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusminutesrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusHours`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminushoursrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusDays`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusdaysrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusWeeks`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusweeksrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusMonths`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusmonthsrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusYears`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusyearsrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusNanos`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusnanosrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplussecondsrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusMinutes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusminutesrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusHours`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplushoursrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusDays`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusdaysrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusWeeks`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusweeksrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusMonths`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusmonthsrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusYears`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusyearsrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusNanos`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusnanosrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminussecondsrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusMinutes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusminutesrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusHours`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminushoursrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusDays`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusdaysrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusWeeks`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusweeksrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusMonths`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusmonthsrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusYears`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusyearsrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusNanos`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusnanosrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplussecondsrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusMinutes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusminutesrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusHours`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplushoursrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusDays`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusdaysrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusWeeks`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusweeksrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusMonths`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusmonthsrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusYears`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusyearsrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusNanos`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusnanosrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusSeconds`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminussecondsrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusMinutes`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusminutesrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusHours`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminushoursrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusDays`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusdaysrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusWeeks`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusweeksrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusMonths`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusmonthsrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusYears`](../../../../tech/picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusyearsrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.TimeRulesRecipes
displayName: `TimeRules` Refaster recipes
description: |
  Refaster rules related to expressions dealing with time.
  [Source](https://error-prone.picnic.tech/refasterrules/TimeRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ClockInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$UtcConstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimeOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimeOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantIdentityRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantTruncatedToMillisecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantTruncatedToSecondsRecipe
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
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.TimeRulesRecipes")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.TimeRulesRecipes")
        setExportDatatables(true)
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

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
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
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.TimeRulesRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe TimeRulesRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.TimeRulesRecipes" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

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

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

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

</TabItem>

</Tabs>
