---
title: "`TimeRules` Refaster recipes"
sidebar_label: "`TimeRules` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# `TimeRules` Refaster recipes

**tech.picnic.errorprone.refasterrules.TimeRulesRecipes**

_Refaster rules related to expressions dealing with time. [Source](https://error-prone.picnic.tech/refasterrules/TimeRules)._

## Recipe source

[GitHub: search?type=code&q=tech.picnic.errorprone.refasterrules.TimeRulesRecipes](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.TimeRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `TimeRules.ClockInstant`](../../../picnic/errorprone/refasterrules/timerulesrecipes$clockinstantrecipe)
* [Refaster template `TimeRules.Utc`](../../../picnic/errorprone/refasterrules/timerulesrecipes$utcrecipe)
* [Refaster template `TimeRules.LocalDateOfInstant`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdateofinstantrecipe)
* [Refaster template `TimeRules.LocalDateTimeOfInstant`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeofinstantrecipe)
* [Refaster template `TimeRules.LocalTimeOfInstant`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localtimeofinstantrecipe)
* [Refaster template `TimeRules.OffsetDateTimeOfInstant`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeofinstantrecipe)
* [Refaster template `TimeRules.InstantIdentity`](../../../picnic/errorprone/refasterrules/timerulesrecipes$instantidentityrecipe)
* [Prefer `Instant#truncatedTo(TemporalUnit)` over less efficient alternatives](../../../picnic/errorprone/refasterrules/timerulesrecipes$instanttruncatedtochronounitmillisrecipe)
* [Refaster template `TimeRules.InstantTruncatedToChronoUnitSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$instanttruncatedtochronounitsecondsrecipe)
* [Refaster template `TimeRules.InstantAtOffset`](../../../picnic/errorprone/refasterrules/timerulesrecipes$instantatoffsetrecipe)
* [Refaster template `TimeRules.OffsetTimeOfInstant`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsettimeofinstantrecipe)
* [Refaster template `TimeRules.InstantAtZone`](../../../picnic/errorprone/refasterrules/timerulesrecipes$instantatzonerecipe)
* [Refaster template `TimeRules.ClockSystemUTC`](../../../picnic/errorprone/refasterrules/timerulesrecipes$clocksystemutcrecipe)
* [Refaster template `TimeRules.InstantEpoch`](../../../picnic/errorprone/refasterrules/timerulesrecipes$instantepochrecipe)
* [Refaster template `TimeRules.InstantIsBefore`](../../../picnic/errorprone/refasterrules/timerulesrecipes$instantisbeforerecipe)
* [Refaster template `TimeRules.InstantIsAfter`](../../../picnic/errorprone/refasterrules/timerulesrecipes$instantisafterrecipe)
* [Refaster template `TimeRules.LocalTimeMin`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localtimeminrecipe)
* [Refaster template `TimeRules.LocalDateAtStartOfDay`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdateatstartofdayrecipe)
* [Refaster template `TimeRules.ChronoLocalDateIsBefore`](../../../picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisbeforerecipe)
* [Refaster template `TimeRules.ChronoLocalDateIsAfter`](../../../picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldateisafterrecipe)
* [Refaster template `TimeRules.ChronoLocalDateTimeIsBefore`](../../../picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisbeforerecipe)
* [Refaster template `TimeRules.ChronoLocalDateTimeIsAfter`](../../../picnic/errorprone/refasterrules/timerulesrecipes$chronolocaldatetimeisafterrecipe)
* [Refaster template `TimeRules.ChronoZonedDateTimeIsBefore`](../../../picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisbeforerecipe)
* [Refaster template `TimeRules.ChronoZonedDateTimeIsAfter`](../../../picnic/errorprone/refasterrules/timerulesrecipes$chronozoneddatetimeisafterrecipe)
* [Refaster template `TimeRules.OffsetDateTimeIsBefore`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeisbeforerecipe)
* [Refaster template `TimeRules.OffsetDateTimeIsAfter`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeisafterrecipe)
* [Refaster template `TimeRules.DurationZero`](../../../picnic/errorprone/refasterrules/timerulesrecipes$durationzerorecipe)
* [Refaster template `TimeRules.DurationOfDays`](../../../picnic/errorprone/refasterrules/timerulesrecipes$durationofdaysrecipe)
* [Refaster template `TimeRules.DurationOfHours`](../../../picnic/errorprone/refasterrules/timerulesrecipes$durationofhoursrecipe)
* [Refaster template `TimeRules.DurationOfMillis`](../../../picnic/errorprone/refasterrules/timerulesrecipes$durationofmillisrecipe)
* [Refaster template `TimeRules.DurationOfMinutes`](../../../picnic/errorprone/refasterrules/timerulesrecipes$durationofminutesrecipe)
* [Refaster template `TimeRules.DurationOfNanos`](../../../picnic/errorprone/refasterrules/timerulesrecipes$durationofnanosrecipe)
* [Refaster template `TimeRules.DurationOfSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$durationofsecondsrecipe)
* [Prefer `Duration#between` over less efficient alternatives](../../../picnic/errorprone/refasterrules/timerulesrecipes$durationbetweeninstantrecipe)
* [Prefer `Duration#between` over less efficient alternatives](../../../picnic/errorprone/refasterrules/timerulesrecipes$durationbetweenoffsetdatetimerecipe)
* [Refaster template `TimeRules.DurationIsZero`](../../../picnic/errorprone/refasterrules/timerulesrecipes$durationiszerorecipe)
* [Refaster template `TimeRules.PeriodZero`](../../../picnic/errorprone/refasterrules/timerulesrecipes$periodzerorecipe)
* [Refaster template `TimeRules.LocalDatePlusDays`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdateplusdaysrecipe)
* [Refaster template `TimeRules.LocalDatePlusWeeks`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdateplusweeksrecipe)
* [Refaster template `TimeRules.LocalDatePlusMonths`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdateplusmonthsrecipe)
* [Refaster template `TimeRules.LocalDatePlusYears`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdateplusyearsrecipe)
* [Refaster template `TimeRules.LocalDateMinusDays`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdateminusdaysrecipe)
* [Refaster template `TimeRules.LocalDateMinusWeeks`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdateminusweeksrecipe)
* [Refaster template `TimeRules.LocalDateMinusMonths`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdateminusmonthsrecipe)
* [Refaster template `TimeRules.LocalDateMinusYears`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdateminusyearsrecipe)
* [Refaster template `TimeRules.LocalTimePlusNanos`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localtimeplusnanosrecipe)
* [Refaster template `TimeRules.LocalTimePlusSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localtimeplussecondsrecipe)
* [Refaster template `TimeRules.LocalTimePlusMinutes`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localtimeplusminutesrecipe)
* [Refaster template `TimeRules.LocalTimePlusHours`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localtimeplushoursrecipe)
* [Refaster template `TimeRules.LocalTimeMinusNanos`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localtimeminusnanosrecipe)
* [Refaster template `TimeRules.LocalTimeMinusSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localtimeminussecondsrecipe)
* [Refaster template `TimeRules.LocalTimeMinusMinutes`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localtimeminusminutesrecipe)
* [Refaster template `TimeRules.LocalTimeMinusHours`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localtimeminushoursrecipe)
* [Refaster template `TimeRules.OffsetTimePlusNanos`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplusnanosrecipe)
* [Refaster template `TimeRules.OffsetTimePlusSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplussecondsrecipe)
* [Refaster template `TimeRules.OffsetTimePlusMinutes`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplusminutesrecipe)
* [Refaster template `TimeRules.OffsetTimePlusHours`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsettimeplushoursrecipe)
* [Refaster template `TimeRules.OffsetTimeMinusNanos`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminusnanosrecipe)
* [Refaster template `TimeRules.OffsetTimeMinusSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminussecondsrecipe)
* [Refaster template `TimeRules.OffsetTimeMinusMinutes`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminusminutesrecipe)
* [Refaster template `TimeRules.OffsetTimeMinusHours`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsettimeminushoursrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusNanos`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusnanosrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplussecondsrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusMinutes`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusminutesrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusHours`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplushoursrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusDays`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusdaysrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusWeeks`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusweeksrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusMonths`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusmonthsrecipe)
* [Refaster template `TimeRules.LocalDateTimePlusYears`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeplusyearsrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusNanos`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusnanosrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminussecondsrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusMinutes`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusminutesrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusHours`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminushoursrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusDays`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusdaysrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusWeeks`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusweeksrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusMonths`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusmonthsrecipe)
* [Refaster template `TimeRules.LocalDateTimeMinusYears`](../../../picnic/errorprone/refasterrules/timerulesrecipes$localdatetimeminusyearsrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusNanos`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusnanosrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplussecondsrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusMinutes`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusminutesrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusHours`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplushoursrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusDays`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusdaysrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusWeeks`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusweeksrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusMonths`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusmonthsrecipe)
* [Refaster template `TimeRules.OffsetDateTimePlusYears`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeplusyearsrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusNanos`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusnanosrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminussecondsrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusMinutes`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusminutesrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusHours`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminushoursrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusDays`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusdaysrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusWeeks`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusweeksrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusMonths`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusmonthsrecipe)
* [Refaster template `TimeRules.OffsetDateTimeMinusYears`](../../../picnic/errorprone/refasterrules/timerulesrecipes$offsetdatetimeminusyearsrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusNanos`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusnanosrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplussecondsrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusMinutes`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusminutesrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusHours`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplushoursrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusDays`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusdaysrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusWeeks`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusweeksrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusMonths`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusmonthsrecipe)
* [Refaster template `TimeRules.ZonedDateTimePlusYears`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeplusyearsrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusNanos`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusnanosrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusSeconds`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminussecondsrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusMinutes`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusminutesrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusHours`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminushoursrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusDays`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusdaysrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusWeeks`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusweeksrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusMonths`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusmonthsrecipe)
* [Refaster template `TimeRules.ZonedDateTimeMinusYears`](../../../picnic/errorprone/refasterrules/timerulesrecipes$zoneddatetimeminusyearsrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.TimeRulesRecipes
displayName: `TimeRules` Refaster recipes
description: |
  Refaster rules related to expressions dealing with time. [Source](https://error-prone.picnic.tech/refasterrules/TimeRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ClockInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$UtcRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalDateTimeOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$LocalTimeOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetDateTimeOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantIdentityRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantTruncatedToChronoUnitMillisRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantTruncatedToChronoUnitSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantAtOffsetRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$OffsetTimeOfInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantAtZoneRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$ClockSystemUTCRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantEpochRecipe
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
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationZeroRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfDaysRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfHoursRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfMillisRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfMinutesRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfNanosRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationOfSecondsRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationBetweenInstantRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationBetweenOffsetDateTimeRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$DurationIsZeroRecipe
  - tech.picnic.errorprone.refasterrules.TimeRulesRecipes$PeriodZeroRecipe
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

## Used by

This recipe is used as part of the following composite recipes:

* [All Picnic Refaster rules](/recipes/picnic/errorprone/refasterrules/allrefasterrules.md)


## Usage

<RunRecipe
  recipeName="tech.picnic.errorprone.refasterrules.TimeRulesRecipes"
  displayName="`TimeRules` Refaster recipes"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

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

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

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
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
