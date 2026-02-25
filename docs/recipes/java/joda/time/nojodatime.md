---
sidebar_label: "Prefer the Java standard library instead of Joda-Time"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Prefer the Java standard library instead of Joda-Time

**org.openrewrite.java.joda.time.NoJodaTime**

_Before Java 8, Java lacked a robust date and time library, leading to the widespread use of Joda-Time to fill this gap. With the release of Java 8, the `java.time` package was introduced, incorporating most of Joda-Time's concepts. Features deemed too specialized or bulky for `java.time` were included in the ThreeTen-Extra library.  This recipe migrates Joda-Time types to `java.time` and `threeten-extra` types._

### Tags

* [joda-time](/reference/recipes-by-tag#joda)

## Recipe source

[GitHub: no-joda-time.yml](https://github.com/openrewrite/rewrite-joda/blob/main/src/main/resources/META-INF/rewrite/no-joda-time.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-joda/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-joda/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.threeten`
  * artifactId: `threeten-extra`
  * version: `1.8.0`
  * onlyIfUsing: `org.joda.time.*Interval*`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.base.AbstractDateTime getHourOfDay()`
  * newMethodName: `getHour`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.base.AbstractDateTime getMinuteOfHour()`
  * newMethodName: `getMinute`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.base.AbstractDateTime getSecondOfMinute()`
  * newMethodName: `getSecond`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.base.AbstractDateTime getMonthOfYear()`
  * newMethodName: `getMonthValue`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.DateTime withZone(org.joda.time.DateTimeZone)`
  * newMethodName: `withZoneSameInstant`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.DateTime withZoneRetainFields(org.joda.time.DateTimeZone)`
  * newMethodName: `withZoneSameLocal`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.DateTime withMonthOfYear(int)`
  * newMethodName: `withMonth`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.DateTime withHourOfDay(int)`
  * newMethodName: `withHour`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.DateTime withMinuteOfHour(int)`
  * newMethodName: `withMinute`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.DateTime withSecondOfMinute(int)`
  * newMethodName: `withSecond`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration standardDays(long)`
  * newMethodName: `ofDays`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration standardHours(long)`
  * newMethodName: `ofHours`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration standardMinutes(long)`
  * newMethodName: `ofMinutes`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration standardSeconds(long)`
  * newMethodName: `ofSeconds`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration millis(long)`
  * newMethodName: `ofMillis`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration getStandardDays()`
  * newMethodName: `toDays`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration getStandardHours()`
  * newMethodName: `toHours`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration getStandardMinutes()`
  * newMethodName: `toMinutes`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration getStandardSeconds()`
  * newMethodName: `getSeconds`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration toStandardDays()`
  * newMethodName: `toDays`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration toStandardHours()`
  * newMethodName: `toHours`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration toStandardMinutes()`
  * newMethodName: `toMinutes`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Duration toStandardSeconds()`
  * newMethodName: `getSeconds`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.DateTimeZone forID(String)`
  * newMethodName: `of`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.format.DateTimeFormat forPattern(String)`
  * newMethodName: `ofPattern`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.Instant getMillis()`
  * newMethodName: `toEpochMilli`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.base.BaseDuration getMillis()`
  * newMethodName: `toMillis`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.LocalDate getMonthOfYear()`
  * newMethodName: `getMonthValue`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.LocalDate withMonthOfYear(int)`
  * newMethodName: `withMonth`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.LocalTime getHourOfDay()`
  * newMethodName: `getHour`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.LocalTime getMinuteOfHour()`
  * newMethodName: `getMinute`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.LocalTime getSecondOfMinute()`
  * newMethodName: `getSecond`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.LocalTime withHourOfDay(int)`
  * newMethodName: `withHour`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.LocalTime withMinuteOfHour(int)`
  * newMethodName: `withMinute`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.joda.time.LocalTime withSecondOfMinute(int)`
  * newMethodName: `withSecond`
* [Migrate Joda-Time `DateTime` to `java.time.ZonedDateTime`](../../../java/joda/time/jodadatetimetojavatime)
* [Migrate Joda-Time `AbstractInstant` to Java time](../../../java/joda/time/jodaabstractinstanttojavatime)
* [Migrate Joda-Time `Duration` to Java time](../../../java/joda/time/jodadurationtojavatime)
* [Migrate Joda-Time `Interval` to Java time](../../../java/joda/time/jodaintervaltojavatime)
* [Migrate Joda-Time `LocalDate` to `java.time.LocalDate`](../../../java/joda/time/jodalocaldatetojavatime)
* [Migrate Joda-Time `LocalTime` to `java.time.LocalTime`](../../../java/joda/time/jodalocaltimetojavatime)
* [Migrate Joda-Time formatter to Java time](../../../java/joda/time/jodaformattertojavatime)
* [Migrate Joda-Time `DateTimeZone` to Java time](../../../java/joda/time/jodadatetimezonetojavatime)
* [Migrate Joda-Time `DateMidnight` to Java time](../../../java/joda/time/jodadatemidnighttojavatime)
* [Migrate Joda-Time `Instant` to Java time](../../../java/joda/time/jodainstanttojavatime)
* [Migrate Joda-Time `Days`, `Hours`, `Minutes`, `Seconds` to Java time](../../../java/joda/time/jodatimeperiodtojavatime)
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.DateTime`
  * newFullyQualifiedTypeName: `java.time.ZonedDateTime`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.base.BaseDateTime`
  * newFullyQualifiedTypeName: `java.time.ZonedDateTime`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.base.AbstractDateTime`
  * newFullyQualifiedTypeName: `java.time.ZonedDateTime`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.DateTimeZone`
  * newFullyQualifiedTypeName: `java.time.ZoneId`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.format.DateTimeFormatter`
  * newFullyQualifiedTypeName: `java.time.format.DateTimeFormatter`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.format.DateTimeFormat`
  * newFullyQualifiedTypeName: `java.time.format.DateTimeFormatter`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.Duration`
  * newFullyQualifiedTypeName: `java.time.Duration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.ReadableDuration`
  * newFullyQualifiedTypeName: `java.time.Duration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.base.BaseDuration`
  * newFullyQualifiedTypeName: `java.time.Duration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.base.AbstractDuration`
  * newFullyQualifiedTypeName: `java.time.Duration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.Instant`
  * newFullyQualifiedTypeName: `java.time.Instant`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.base.AbstractInstant`
  * newFullyQualifiedTypeName: `java.time.Instant`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.ReadableInstant`
  * newFullyQualifiedTypeName: `java.time.Instant`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.Interval`
  * newFullyQualifiedTypeName: `org.threeten.extra.Interval`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.base.BaseInterval`
  * newFullyQualifiedTypeName: `org.threeten.extra.Interval`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.base.AbstractInterval`
  * newFullyQualifiedTypeName: `org.threeten.extra.Interval`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.DateMidnight`
  * newFullyQualifiedTypeName: `java.time.ZonedDateTime`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.LocalDate`
  * newFullyQualifiedTypeName: `java.time.LocalDate`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.LocalTime`
  * newFullyQualifiedTypeName: `java.time.LocalTime`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.joda.time.LocalDateTime`
  * newFullyQualifiedTypeName: `java.time.LocalDateTime`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.joda.time.NoJodaTime
displayName: Prefer the Java standard library instead of Joda-Time
description: |
  Before Java 8, Java lacked a robust date and time library, leading to the widespread use of Joda-Time to fill this gap. With the release of Java 8, the `java.time` package was introduced, incorporating most of Joda-Time's concepts. Features deemed too specialized or bulky for `java.time` were included in the ThreeTen-Extra library.  This recipe migrates Joda-Time types to `java.time` and `threeten-extra` types.
tags:
  - joda-time
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.threeten
      artifactId: threeten-extra
      version: 1.8.0
      onlyIfUsing: org.joda.time.*Interval*
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.base.AbstractDateTime getHourOfDay()
      newMethodName: getHour
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.base.AbstractDateTime getMinuteOfHour()
      newMethodName: getMinute
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.base.AbstractDateTime getSecondOfMinute()
      newMethodName: getSecond
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.base.AbstractDateTime getMonthOfYear()
      newMethodName: getMonthValue
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.DateTime withZone(org.joda.time.DateTimeZone)
      newMethodName: withZoneSameInstant
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.DateTime withZoneRetainFields(org.joda.time.DateTimeZone)
      newMethodName: withZoneSameLocal
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.DateTime withMonthOfYear(int)
      newMethodName: withMonth
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.DateTime withHourOfDay(int)
      newMethodName: withHour
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.DateTime withMinuteOfHour(int)
      newMethodName: withMinute
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.DateTime withSecondOfMinute(int)
      newMethodName: withSecond
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration standardDays(long)
      newMethodName: ofDays
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration standardHours(long)
      newMethodName: ofHours
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration standardMinutes(long)
      newMethodName: ofMinutes
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration standardSeconds(long)
      newMethodName: ofSeconds
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration millis(long)
      newMethodName: ofMillis
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration getStandardDays()
      newMethodName: toDays
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration getStandardHours()
      newMethodName: toHours
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration getStandardMinutes()
      newMethodName: toMinutes
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration getStandardSeconds()
      newMethodName: getSeconds
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration toStandardDays()
      newMethodName: toDays
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration toStandardHours()
      newMethodName: toHours
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration toStandardMinutes()
      newMethodName: toMinutes
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Duration toStandardSeconds()
      newMethodName: getSeconds
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.DateTimeZone forID(String)
      newMethodName: of
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.format.DateTimeFormat forPattern(String)
      newMethodName: ofPattern
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.Instant getMillis()
      newMethodName: toEpochMilli
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.base.BaseDuration getMillis()
      newMethodName: toMillis
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.LocalDate getMonthOfYear()
      newMethodName: getMonthValue
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.LocalDate withMonthOfYear(int)
      newMethodName: withMonth
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.LocalTime getHourOfDay()
      newMethodName: getHour
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.LocalTime getMinuteOfHour()
      newMethodName: getMinute
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.LocalTime getSecondOfMinute()
      newMethodName: getSecond
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.LocalTime withHourOfDay(int)
      newMethodName: withHour
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.LocalTime withMinuteOfHour(int)
      newMethodName: withMinute
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.joda.time.LocalTime withSecondOfMinute(int)
      newMethodName: withSecond
  - org.openrewrite.java.joda.time.JodaDateTimeToJavaTime
  - org.openrewrite.java.joda.time.JodaAbstractInstantToJavaTime
  - org.openrewrite.java.joda.time.JodaDurationToJavaTime
  - org.openrewrite.java.joda.time.JodaIntervalToJavaTime
  - org.openrewrite.java.joda.time.JodaLocalDateToJavaTime
  - org.openrewrite.java.joda.time.JodaLocalTimeToJavaTime
  - org.openrewrite.java.joda.time.JodaFormatterToJavaTime
  - org.openrewrite.java.joda.time.JodaDateTimeZoneToJavaTime
  - org.openrewrite.java.joda.time.JodaDateMidnightToJavaTime
  - org.openrewrite.java.joda.time.JodaInstantToJavaTime
  - org.openrewrite.java.joda.time.JodaTimePeriodToJavaTime
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.DateTime
      newFullyQualifiedTypeName: java.time.ZonedDateTime
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.base.BaseDateTime
      newFullyQualifiedTypeName: java.time.ZonedDateTime
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.base.AbstractDateTime
      newFullyQualifiedTypeName: java.time.ZonedDateTime
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.DateTimeZone
      newFullyQualifiedTypeName: java.time.ZoneId
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.format.DateTimeFormatter
      newFullyQualifiedTypeName: java.time.format.DateTimeFormatter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.format.DateTimeFormat
      newFullyQualifiedTypeName: java.time.format.DateTimeFormatter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.Duration
      newFullyQualifiedTypeName: java.time.Duration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.ReadableDuration
      newFullyQualifiedTypeName: java.time.Duration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.base.BaseDuration
      newFullyQualifiedTypeName: java.time.Duration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.base.AbstractDuration
      newFullyQualifiedTypeName: java.time.Duration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.Instant
      newFullyQualifiedTypeName: java.time.Instant
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.base.AbstractInstant
      newFullyQualifiedTypeName: java.time.Instant
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.ReadableInstant
      newFullyQualifiedTypeName: java.time.Instant
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.Interval
      newFullyQualifiedTypeName: org.threeten.extra.Interval
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.base.BaseInterval
      newFullyQualifiedTypeName: org.threeten.extra.Interval
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.base.AbstractInterval
      newFullyQualifiedTypeName: org.threeten.extra.Interval
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.DateMidnight
      newFullyQualifiedTypeName: java.time.ZonedDateTime
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.LocalDate
      newFullyQualifiedTypeName: java.time.LocalDate
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.LocalTime
      newFullyQualifiedTypeName: java.time.LocalTime
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.joda.time.LocalDateTime
      newFullyQualifiedTypeName: java.time.LocalDateTime

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`JodaAbstractInstantToJavaTimeTest#migrateAbstractInstant`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;
import org.joda.time.Duration;
import org.joda.time.Instant;
import org.joda.time.format.DateTimeFormat;

class A {
    public void foo() {
        new DateTime().equals(DateTime.now());
        new DateTime().getZone();
        new DateTime().isAfter(1234567890L);
        new Instant().isAfter(1234567890L);
        new DateTime().isAfter(DateTime.now().minusDays(1));
        new Instant().isAfter(Instant.now().minus(Duration.standardDays(1)));
        new DateTime().isBefore(1234567890L);
        new Instant().isBefore(1234567890L);
        new DateTime().isBefore(DateTime.now().plusDays(1));
        new Instant().isBefore(Instant.now().plus(Duration.standardDays(1)));
        new DateTime().isBeforeNow();
        new DateTime().isEqual(1234567890L);
        new DateTime().isEqual(DateTime.now().plusDays(1));
        new DateTime().toDate();
        new DateTime().toInstant();
        new DateTime().toString();
        new DateTime().toString(DateTimeFormat.forPattern("yyyy-MM-dd'T'HH:mm:ss"));
    }
}
```

###### After
```java
import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

class A {
    public void foo() {
        ZonedDateTime.now().equals(ZonedDateTime.now());
        ZonedDateTime.now().getZone();
        ZonedDateTime.now().isAfter(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
        Instant.now().isAfter(Instant.ofEpochMilli(1234567890L));
        ZonedDateTime.now().isAfter(ZonedDateTime.now().minusDays(1));
        Instant.now().isAfter(Instant.now().minus(Duration.ofDays(1)));
        ZonedDateTime.now().isBefore(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
        Instant.now().isBefore(Instant.ofEpochMilli(1234567890L));
        ZonedDateTime.now().isBefore(ZonedDateTime.now().plusDays(1));
        Instant.now().isBefore(Instant.now().plus(Duration.ofDays(1)));
        ZonedDateTime.now().isBefore(ZonedDateTime.now());
        ZonedDateTime.now().isEqual(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
        ZonedDateTime.now().isEqual(ZonedDateTime.now().plusDays(1));
        Date.from(ZonedDateTime.now().toInstant());
        ZonedDateTime.now().toInstant();
        ZonedDateTime.now().toString();
        ZonedDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss"));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,6 @@
-import org.joda.time.DateTime;
-import org.joda.time.Duration;
-import org.joda.time.Instant;
-import org.joda.time.format.DateTimeFormat;
+import java.time.Duration;
+import java.time.Instant;
+import java.time.ZoneId;
+import java.time.ZonedDateTime;
+import java.time.format.DateTimeFormatter;
+import java.util.Date;

@@ -8,17 +10,17 @@
class A {
    public void foo() {
-       new DateTime().equals(DateTime.now());
-       new DateTime().getZone();
-       new DateTime().isAfter(1234567890L);
-       new Instant().isAfter(1234567890L);
-       new DateTime().isAfter(DateTime.now().minusDays(1));
-       new Instant().isAfter(Instant.now().minus(Duration.standardDays(1)));
-       new DateTime().isBefore(1234567890L);
-       new Instant().isBefore(1234567890L);
-       new DateTime().isBefore(DateTime.now().plusDays(1));
-       new Instant().isBefore(Instant.now().plus(Duration.standardDays(1)));
-       new DateTime().isBeforeNow();
-       new DateTime().isEqual(1234567890L);
-       new DateTime().isEqual(DateTime.now().plusDays(1));
-       new DateTime().toDate();
-       new DateTime().toInstant();
-       new DateTime().toString();
-       new DateTime().toString(DateTimeFormat.forPattern("yyyy-MM-dd'T'HH:mm:ss"));
+       ZonedDateTime.now().equals(ZonedDateTime.now());
+       ZonedDateTime.now().getZone();
+       ZonedDateTime.now().isAfter(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
+       Instant.now().isAfter(Instant.ofEpochMilli(1234567890L));
+       ZonedDateTime.now().isAfter(ZonedDateTime.now().minusDays(1));
+       Instant.now().isAfter(Instant.now().minus(Duration.ofDays(1)));
+       ZonedDateTime.now().isBefore(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
+       Instant.now().isBefore(Instant.ofEpochMilli(1234567890L));
+       ZonedDateTime.now().isBefore(ZonedDateTime.now().plusDays(1));
+       Instant.now().isBefore(Instant.now().plus(Duration.ofDays(1)));
+       ZonedDateTime.now().isBefore(ZonedDateTime.now());
+       ZonedDateTime.now().isEqual(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
+       ZonedDateTime.now().isEqual(ZonedDateTime.now().plusDays(1));
+       Date.from(ZonedDateTime.now().toInstant());
+       ZonedDateTime.now().toInstant();
+       ZonedDateTime.now().toString();
+       ZonedDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss"));
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`JodaDateMidnightToJavaTimeTest#dateMidnightConstructor`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateMidnight;

class A {
    public void foo() {
        new DateMidnight();
    }
}
```

###### After
```java
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZoneOffset;

class A {
    public void foo() {
        LocalDate.now().atStartOfDay(ZoneOffset.of(ZoneId.systemDefault().getId()));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,3 @@
-import org.joda.time.DateMidnight;
+import java.time.LocalDate;
+import java.time.ZoneId;
+import java.time.ZoneOffset;

@@ -5,1 +7,1 @@
class A {
    public void foo() {
-       new DateMidnight();
+       LocalDate.now().atStartOfDay(ZoneOffset.of(ZoneId.systemDefault().getId()));
    }
```
</TabItem>
</Tabs>

---

##### Example 3
`JodaDateTimeToJavaTimeTest#migrateNewDateTime`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import java.util.TimeZone;

class A {
    public void foo() {
        new DateTime();
        new DateTime(DateTimeZone.UTC);
        new DateTime(1234567890L);
        new DateTime(1234567890L, DateTimeZone.forID("America/New_York"));
        new DateTime(2024, 9, 30, 12, 58);
        new DateTime(2024, 9, 30, 12, 58, DateTimeZone.forOffsetHours(2));
        new DateTime(2024, 9, 30, 13, 3, 15);
        new DateTime(2024, 9, 30, 13, 3, 15, DateTimeZone.forOffsetHoursMinutes(5, 30));
        new DateTime(2024, 9, 30, 13, 49, 15, 545);
        new DateTime(2024, 9, 30, 13, 49, 15, 545, DateTimeZone.forTimeZone(TimeZone.getTimeZone("America/New_York")));
    }
}
```

###### After
```java
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.TimeZone;

class A {
    public void foo() {
        ZonedDateTime.now();
        ZonedDateTime.now(ZoneOffset.UTC);
        ZonedDateTime.ofInstant(Instant.ofEpochMilli(1234567890L), ZoneId.systemDefault());
        ZonedDateTime.ofInstant(Instant.ofEpochMilli(1234567890L), ZoneId.of("America/New_York"));
        ZonedDateTime.of(2024, 9, 30, 12, 58, 0, 0, ZoneId.systemDefault());
        ZonedDateTime.of(2024, 9, 30, 12, 58, 0, 0, ZoneOffset.ofHours(2));
        ZonedDateTime.of(2024, 9, 30, 13, 3, 15, 0, ZoneId.systemDefault());
        ZonedDateTime.of(2024, 9, 30, 13, 3, 15, 0, ZoneOffset.ofHoursMinutes(5, 30));
        ZonedDateTime.of(2024, 9, 30, 13, 49, 15, 545 * 1_000_000, ZoneId.systemDefault());
        ZonedDateTime.of(2024, 9, 30, 13, 49, 15, 545 * 1_000_000, TimeZone.getTimeZone("America/New_York").toZoneId());
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,4 @@
-import org.joda.time.DateTime;
-import org.joda.time.DateTimeZone;
+import java.time.Instant;
+import java.time.ZoneId;
+import java.time.ZoneOffset;
+import java.time.ZonedDateTime;
import java.util.TimeZone;
@@ -7,10 +9,10 @@
class A {
    public void foo() {
-       new DateTime();
-       new DateTime(DateTimeZone.UTC);
-       new DateTime(1234567890L);
-       new DateTime(1234567890L, DateTimeZone.forID("America/New_York"));
-       new DateTime(2024, 9, 30, 12, 58);
-       new DateTime(2024, 9, 30, 12, 58, DateTimeZone.forOffsetHours(2));
-       new DateTime(2024, 9, 30, 13, 3, 15);
-       new DateTime(2024, 9, 30, 13, 3, 15, DateTimeZone.forOffsetHoursMinutes(5, 30));
-       new DateTime(2024, 9, 30, 13, 49, 15, 545);
-       new DateTime(2024, 9, 30, 13, 49, 15, 545, DateTimeZone.forTimeZone(TimeZone.getTimeZone("America/New_York")));
+       ZonedDateTime.now();
+       ZonedDateTime.now(ZoneOffset.UTC);
+       ZonedDateTime.ofInstant(Instant.ofEpochMilli(1234567890L), ZoneId.systemDefault());
+       ZonedDateTime.ofInstant(Instant.ofEpochMilli(1234567890L), ZoneId.of("America/New_York"));
+       ZonedDateTime.of(2024, 9, 30, 12, 58, 0, 0, ZoneId.systemDefault());
+       ZonedDateTime.of(2024, 9, 30, 12, 58, 0, 0, ZoneOffset.ofHours(2));
+       ZonedDateTime.of(2024, 9, 30, 13, 3, 15, 0, ZoneId.systemDefault());
+       ZonedDateTime.of(2024, 9, 30, 13, 3, 15, 0, ZoneOffset.ofHoursMinutes(5, 30));
+       ZonedDateTime.of(2024, 9, 30, 13, 49, 15, 545 * 1_000_000, ZoneId.systemDefault());
+       ZonedDateTime.of(2024, 9, 30, 13, 49, 15, 545 * 1_000_000, TimeZone.getTimeZone("America/New_York").toZoneId());
    }
```
</TabItem>
</Tabs>

---

##### Example 4
`JodaDateTimeZoneToJavaTimeTest#migrateDateTimeZone`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTimeZone;
import java.util.TimeZone;

class A {
    public void foo() {
        DateTimeZone.UTC.toString();
        DateTimeZone.forID("America/New_York");
        DateTimeZone.forOffsetHours(2);
        DateTimeZone.forOffsetHoursMinutes(5, 30);
        DateTimeZone.forTimeZone(TimeZone.getTimeZone("America/New_York"));
    }
}
```

###### After
```java
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.TimeZone;

class A {
    public void foo() {
        ZoneOffset.UTC.toString();
        ZoneId.of("America/New_York");
        ZoneOffset.ofHours(2);
        ZoneOffset.ofHoursMinutes(5, 30);
        TimeZone.getTimeZone("America/New_York").toZoneId();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,2 @@
-import org.joda.time.DateTimeZone;
+import java.time.ZoneId;
+import java.time.ZoneOffset;
import java.util.TimeZone;
@@ -6,5 +7,5 @@
class A {
    public void foo() {
-       DateTimeZone.UTC.toString();
-       DateTimeZone.forID("America/New_York");
-       DateTimeZone.forOffsetHours(2);
-       DateTimeZone.forOffsetHoursMinutes(5, 30);
-       DateTimeZone.forTimeZone(TimeZone.getTimeZone("America/New_York"));
+       ZoneOffset.UTC.toString();
+       ZoneId.of("America/New_York");
+       ZoneOffset.ofHours(2);
+       ZoneOffset.ofHoursMinutes(5, 30);
+       TimeZone.getTimeZone("America/New_York").toZoneId();
    }
```
</TabItem>
</Tabs>

---

##### Example 5
`JodaDurationToJavaTimeTest#migrateJodaDuration`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.Duration;

class A {
    public void foo() {
        Duration.standardDays(1L);
        Duration.standardHours(1L);
        Duration.standardMinutes(1L);
        Duration.standardSeconds(1L);
        Duration.millis(1000L);
        new Duration(1000L);
        new Duration(1000L, 2000L);
        new Duration(1000L).getStandardDays();
        new Duration(1000L).getStandardHours();
        new Duration(1000L).getStandardMinutes();
        new Duration(1000L).getStandardSeconds();
        new Duration(1000L).toDuration();
        new Duration(1000L).withMillis(2000L);
        new Duration(1000L).withDurationAdded(550L, 2);
        new Duration(1000L).withDurationAdded(new Duration(550L), 2);
        new Duration(1000L).plus(550L);
        new Duration(1000L).plus(new Duration(550L));
        new Duration(1000L).minus(550L);
        new Duration(1000L).minus(new Duration(550L));
        new Duration(1000L).multipliedBy(2);
        new Duration(1000L).dividedBy(2);
        new Duration(1000L).negated();
        new Duration(1000L).abs();
    }
}
```

###### After
```java
import java.time.Duration;
import java.time.Instant;

class A {
    public void foo() {
        Duration.ofDays(1L);
        Duration.ofHours(1L);
        Duration.ofMinutes(1L);
        Duration.ofSeconds(1L);
        Duration.ofMillis(1000L);
        Duration.ofMillis(1000L);
        Duration.between(Instant.ofEpochMilli(1000L), Instant.ofEpochMilli(2000L));
        Duration.ofMillis(1000L).toDays();
        Duration.ofMillis(1000L).toHours();
        Duration.ofMillis(1000L).toMinutes();
        Duration.ofMillis(1000L).getSeconds();
        Duration.ofMillis(1000L);
        Duration.ofMillis(2000L);
        Duration.ofMillis(1000L).plusMillis(550L * 2);
        Duration.ofMillis(1000L).plus(Duration.ofMillis(550L).multipliedBy(2));
        Duration.ofMillis(1000L).plusMillis(550L);
        Duration.ofMillis(1000L).plus(Duration.ofMillis(550L));
        Duration.ofMillis(1000L).minusMillis(550L);
        Duration.ofMillis(1000L).minus(Duration.ofMillis(550L));
        Duration.ofMillis(1000L).multipliedBy(2);
        Duration.ofMillis(1000L).dividedBy(2);
        Duration.ofMillis(1000L).negated();
        Duration.ofMillis(1000L).abs();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,2 @@
-import org.joda.time.Duration;
+import java.time.Duration;
+import java.time.Instant;

@@ -5,23 +6,23 @@
class A {
    public void foo() {
-       Duration.standardDays(1L);
-       Duration.standardHours(1L);
-       Duration.standardMinutes(1L);
-       Duration.standardSeconds(1L);
-       Duration.millis(1000L);
-       new Duration(1000L);
-       new Duration(1000L, 2000L);
-       new Duration(1000L).getStandardDays();
-       new Duration(1000L).getStandardHours();
-       new Duration(1000L).getStandardMinutes();
-       new Duration(1000L).getStandardSeconds();
-       new Duration(1000L).toDuration();
-       new Duration(1000L).withMillis(2000L);
-       new Duration(1000L).withDurationAdded(550L, 2);
-       new Duration(1000L).withDurationAdded(new Duration(550L), 2);
-       new Duration(1000L).plus(550L);
-       new Duration(1000L).plus(new Duration(550L));
-       new Duration(1000L).minus(550L);
-       new Duration(1000L).minus(new Duration(550L));
-       new Duration(1000L).multipliedBy(2);
-       new Duration(1000L).dividedBy(2);
-       new Duration(1000L).negated();
-       new Duration(1000L).abs();
+       Duration.ofDays(1L);
+       Duration.ofHours(1L);
+       Duration.ofMinutes(1L);
+       Duration.ofSeconds(1L);
+       Duration.ofMillis(1000L);
+       Duration.ofMillis(1000L);
+       Duration.between(Instant.ofEpochMilli(1000L), Instant.ofEpochMilli(2000L));
+       Duration.ofMillis(1000L).toDays();
+       Duration.ofMillis(1000L).toHours();
+       Duration.ofMillis(1000L).toMinutes();
+       Duration.ofMillis(1000L).getSeconds();
+       Duration.ofMillis(1000L);
+       Duration.ofMillis(2000L);
+       Duration.ofMillis(1000L).plusMillis(550L * 2);
+       Duration.ofMillis(1000L).plus(Duration.ofMillis(550L).multipliedBy(2));
+       Duration.ofMillis(1000L).plusMillis(550L);
+       Duration.ofMillis(1000L).plus(Duration.ofMillis(550L));
+       Duration.ofMillis(1000L).minusMillis(550L);
+       Duration.ofMillis(1000L).minus(Duration.ofMillis(550L));
+       Duration.ofMillis(1000L).multipliedBy(2);
+       Duration.ofMillis(1000L).dividedBy(2);
+       Duration.ofMillis(1000L).negated();
+       Duration.ofMillis(1000L).abs();
    }
```
</TabItem>
</Tabs>

---

##### Example 6
`JodaFormatterToJavaTimeTest#migrateDateTimeFormat`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.format.DateTimeFormat;

class A {
    public void foo() {
        DateTimeFormat.forPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
        DateTimeFormat.shortDate();
        DateTimeFormat.mediumDate();
        DateTimeFormat.longDate();
        DateTimeFormat.fullDate();
        DateTimeFormat.shortTime();
        DateTimeFormat.mediumTime();
        DateTimeFormat.longTime();
        DateTimeFormat.fullTime();
        DateTimeFormat.shortDateTime();
        DateTimeFormat.mediumDateTime();
        DateTimeFormat.longDateTime();
        DateTimeFormat.fullDateTime();
    }
}
```

###### After
```java
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;

class A {
    public void foo() {
        DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
        DateTimeFormatter.ofLocalizedDate(FormatStyle.SHORT);
        DateTimeFormatter.ofLocalizedDate(FormatStyle.MEDIUM);
        DateTimeFormatter.ofLocalizedDate(FormatStyle.LONG);
        DateTimeFormatter.ofLocalizedDate(FormatStyle.FULL);
        DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT);
        DateTimeFormatter.ofLocalizedTime(FormatStyle.MEDIUM);
        DateTimeFormatter.ofLocalizedTime(FormatStyle.LONG);
        DateTimeFormatter.ofLocalizedTime(FormatStyle.FULL);
        DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT, FormatStyle.SHORT);
        DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM, FormatStyle.MEDIUM);
        DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG, FormatStyle.LONG);
        DateTimeFormatter.ofLocalizedDateTime(FormatStyle.FULL, FormatStyle.FULL);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,2 @@
-import org.joda.time.format.DateTimeFormat;
+import java.time.format.DateTimeFormatter;
+import java.time.format.FormatStyle;

@@ -5,13 +6,13 @@
class A {
    public void foo() {
-       DateTimeFormat.forPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
-       DateTimeFormat.shortDate();
-       DateTimeFormat.mediumDate();
-       DateTimeFormat.longDate();
-       DateTimeFormat.fullDate();
-       DateTimeFormat.shortTime();
-       DateTimeFormat.mediumTime();
-       DateTimeFormat.longTime();
-       DateTimeFormat.fullTime();
-       DateTimeFormat.shortDateTime();
-       DateTimeFormat.mediumDateTime();
-       DateTimeFormat.longDateTime();
-       DateTimeFormat.fullDateTime();
+       DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
+       DateTimeFormatter.ofLocalizedDate(FormatStyle.SHORT);
+       DateTimeFormatter.ofLocalizedDate(FormatStyle.MEDIUM);
+       DateTimeFormatter.ofLocalizedDate(FormatStyle.LONG);
+       DateTimeFormatter.ofLocalizedDate(FormatStyle.FULL);
+       DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT);
+       DateTimeFormatter.ofLocalizedTime(FormatStyle.MEDIUM);
+       DateTimeFormatter.ofLocalizedTime(FormatStyle.LONG);
+       DateTimeFormatter.ofLocalizedTime(FormatStyle.FULL);
+       DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT, FormatStyle.SHORT);
+       DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM, FormatStyle.MEDIUM);
+       DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG, FormatStyle.LONG);
+       DateTimeFormatter.ofLocalizedDateTime(FormatStyle.FULL, FormatStyle.FULL);
    }
```
</TabItem>
</Tabs>

---

##### Example 7
`JodaInstantToJavaTimeTest#migrateInstant`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.Instant;
import org.joda.time.Duration;

class A {
    public void foo() {
        new Instant();
        Instant.now().getMillis();
        Instant.now().minus(Duration.standardDays(1L));
        Instant.ofEpochMilli(1234567890L);
        Instant.parse("2024-10-25T15:45:00");
        Instant.now().plus(Duration.standardDays(1L));
    }
}
```

###### After
```java
import java.time.Duration;
import java.time.Instant;

class A {
    public void foo() {
        Instant.now();
        Instant.now().toEpochMilli();
        Instant.now().minus(Duration.ofDays(1L));
        Instant.ofEpochMilli(1234567890L);
        Instant.parse("2024-10-25T15:45:00");
        Instant.now().plus(Duration.ofDays(1L));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.joda.time.Instant;
-import org.joda.time.Duration;
+import java.time.Duration;
+import java.time.Instant;

@@ -6,3 +6,3 @@
class A {
    public void foo() {
-       new Instant();
-       Instant.now().getMillis();
-       Instant.now().minus(Duration.standardDays(1L));
+       Instant.now();
+       Instant.now().toEpochMilli();
+       Instant.now().minus(Duration.ofDays(1L));
        Instant.ofEpochMilli(1234567890L);
@@ -11,1 +11,1 @@
        Instant.ofEpochMilli(1234567890L);
        Instant.parse("2024-10-25T15:45:00");
-       Instant.now().plus(Duration.standardDays(1L));
+       Instant.now().plus(Duration.ofDays(1L));
    }
```
</TabItem>
</Tabs>

---

##### Example 8
`JodaIntervalToJavaTimeTest#migrateInterval`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;
import org.joda.time.Duration;
import org.joda.time.Interval;
import org.joda.time.DateTimeZone;

class A {
    public void foo() {
        new Interval(50, 100);
        new Interval(50, 100, DateTimeZone.UTC);
        new Interval(DateTime.now(), DateTime.now().plusDays(1));
        new Interval(DateTime.now(), Duration.standardDays(1));
    }
}
```

###### After
```java
import org.threeten.extra.Interval;

import java.time.Duration;
import java.time.Instant;
import java.time.ZonedDateTime;

class A {
    public void foo() {
        Interval.of(Instant.ofEpochMilli(50), Instant.ofEpochMilli(100));
        Interval.of(Instant.ofEpochMilli(50), Instant.ofEpochMilli(100));
        Interval.of(ZonedDateTime.now().toInstant(), ZonedDateTime.now().plusDays(1).toInstant());
        Interval.of(ZonedDateTime.now().toInstant(), Duration.ofDays(1));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,1 @@
-import org.joda.time.DateTime;
-import org.joda.time.Duration;
-import org.joda.time.Interval;
-import org.joda.time.DateTimeZone;
+import org.threeten.extra.Interval;

@@ -6,0 +3,4 @@
import org.joda.time.DateTimeZone;

+import java.time.Duration;
+import java.time.Instant;
+import java.time.ZonedDateTime;
+
class A {
@@ -8,4 +9,4 @@
class A {
    public void foo() {
-       new Interval(50, 100);
-       new Interval(50, 100, DateTimeZone.UTC);
-       new Interval(DateTime.now(), DateTime.now().plusDays(1));
-       new Interval(DateTime.now(), Duration.standardDays(1));
+       Interval.of(Instant.ofEpochMilli(50), Instant.ofEpochMilli(100));
+       Interval.of(Instant.ofEpochMilli(50), Instant.ofEpochMilli(100));
+       Interval.of(ZonedDateTime.now().toInstant(), ZonedDateTime.now().plusDays(1).toInstant());
+       Interval.of(ZonedDateTime.now().toInstant(), Duration.ofDays(1));
    }
```
</TabItem>
</Tabs>

---

##### Example 9
`JodaLocalDateToJavaTimeTest#migrateLocalDate`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTimeZone;
import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

class A {
    public void foo() {
        new LocalDate();
        new LocalDate(DateTimeZone.UTC);
        new LocalDate(2024, 10, 25);
        new LocalDate(1234567890L);
        new LocalDate(1234567890L, DateTimeZone.UTC);
        LocalDate.now().getDayOfWeek();
        LocalDate.now().getMonthOfYear();
        LocalDate.now().withMonthOfYear(6);
        LocalDate.now().plusDays(1);
        LocalDate.now().toDateTimeAtStartOfDay();
        LocalDate.now().toDateTimeAtStartOfDay(DateTimeZone.UTC);
        LocalDate.now().toLocalDateTime(new LocalTime(10, 30));
    }
}
```

###### After
```java
import java.time.*;

class A {
    public void foo() {
        LocalDate.now();
        LocalDate.now(ZoneOffset.UTC);
        LocalDate.of(2024, 10, 25);
        Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()).toLocalDate();
        Instant.ofEpochMilli(1234567890L).atZone(ZoneOffset.UTC).toLocalDate();
        LocalDate.now().getDayOfWeek().getValue();
        LocalDate.now().getMonthValue();
        LocalDate.now().withMonth(6);
        LocalDate.now().plusDays(1);
        LocalDate.now().atStartOfDay(ZoneId.systemDefault());
        LocalDate.now().atStartOfDay(ZoneOffset.UTC);
        LocalDate.now().atTime(LocalTime.of(10, 30));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,3 +1,1 @@
-import org.joda.time.DateTimeZone;
-import org.joda.time.LocalDate;
-import org.joda.time.LocalTime;
+import java.time.*;

@@ -7,8 +5,8 @@
class A {
    public void foo() {
-       new LocalDate();
-       new LocalDate(DateTimeZone.UTC);
-       new LocalDate(2024, 10, 25);
-       new LocalDate(1234567890L);
-       new LocalDate(1234567890L, DateTimeZone.UTC);
-       LocalDate.now().getDayOfWeek();
-       LocalDate.now().getMonthOfYear();
-       LocalDate.now().withMonthOfYear(6);
+       LocalDate.now();
+       LocalDate.now(ZoneOffset.UTC);
+       LocalDate.of(2024, 10, 25);
+       Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()).toLocalDate();
+       Instant.ofEpochMilli(1234567890L).atZone(ZoneOffset.UTC).toLocalDate();
+       LocalDate.now().getDayOfWeek().getValue();
+       LocalDate.now().getMonthValue();
+       LocalDate.now().withMonth(6);
        LocalDate.now().plusDays(1);
@@ -16,3 +14,3 @@
        LocalDate.now().withMonthOfYear(6);
        LocalDate.now().plusDays(1);
-       LocalDate.now().toDateTimeAtStartOfDay();
-       LocalDate.now().toDateTimeAtStartOfDay(DateTimeZone.UTC);
-       LocalDate.now().toLocalDateTime(new LocalTime(10, 30));
+       LocalDate.now().atStartOfDay(ZoneId.systemDefault());
+       LocalDate.now().atStartOfDay(ZoneOffset.UTC);
+       LocalDate.now().atTime(LocalTime.of(10, 30));
    }
```
</TabItem>
</Tabs>

---

##### Example 10
`JodaLocalTimeToJavaTimeTest#migrateLocalTime`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTimeZone;
import org.joda.time.LocalTime;

class A {
    public void foo() {
        new LocalTime();
        new LocalTime(DateTimeZone.UTC);
        new LocalTime(10, 30);
        new LocalTime(10, 30, 45);
        new LocalTime(10, 30, 45, 500);
        LocalTime.now().plusMillis(100);
        LocalTime.now().minusMillis(100);
        LocalTime.now().withMillisOfSecond(500);
        LocalTime.now().getMillisOfSecond();
        LocalTime.now().getMillisOfDay();
        LocalTime.now().getHourOfDay();
        LocalTime.now().getMinuteOfHour();
        LocalTime.now().getSecondOfMinute();
        LocalTime.now().withHourOfDay(10);
        LocalTime.now().withMinuteOfHour(30);
        LocalTime.now().withSecondOfMinute(45);
        LocalTime.now().toDateTimeToday();
        LocalTime.now().toDateTimeToday(DateTimeZone.UTC);
    }
}
```

###### After
```java
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.temporal.ChronoField;

class A {
    public void foo() {
        LocalTime.now();
        LocalTime.now(ZoneOffset.UTC);
        LocalTime.of(10, 30);
        LocalTime.of(10, 30, 45);
        LocalTime.of(10, 30, 45, 500 * 1_000_000);
        LocalTime.now().plusNanos(100 * 1_000_000L);
        LocalTime.now().minusNanos(100 * 1_000_000L);
        LocalTime.now().withNano(500 * 1_000_000);
        LocalTime.now().get(ChronoField.MILLI_OF_SECOND);
        LocalTime.now().get(ChronoField.MILLI_OF_DAY);
        LocalTime.now().getHour();
        LocalTime.now().getMinute();
        LocalTime.now().getSecond();
        LocalTime.now().withHour(10);
        LocalTime.now().withMinute(30);
        LocalTime.now().withSecond(45);
        LocalTime.now().atDate(LocalDate.now()).atZone(ZoneId.systemDefault());
        LocalTime.now().atDate(LocalDate.now(ZoneOffset.UTC)).atZone(ZoneOffset.UTC);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,5 @@
-import org.joda.time.DateTimeZone;
-import org.joda.time.LocalTime;
+import java.time.LocalDate;
+import java.time.LocalTime;
+import java.time.ZoneId;
+import java.time.ZoneOffset;
+import java.time.temporal.ChronoField;

@@ -6,18 +9,18 @@
class A {
    public void foo() {
-       new LocalTime();
-       new LocalTime(DateTimeZone.UTC);
-       new LocalTime(10, 30);
-       new LocalTime(10, 30, 45);
-       new LocalTime(10, 30, 45, 500);
-       LocalTime.now().plusMillis(100);
-       LocalTime.now().minusMillis(100);
-       LocalTime.now().withMillisOfSecond(500);
-       LocalTime.now().getMillisOfSecond();
-       LocalTime.now().getMillisOfDay();
-       LocalTime.now().getHourOfDay();
-       LocalTime.now().getMinuteOfHour();
-       LocalTime.now().getSecondOfMinute();
-       LocalTime.now().withHourOfDay(10);
-       LocalTime.now().withMinuteOfHour(30);
-       LocalTime.now().withSecondOfMinute(45);
-       LocalTime.now().toDateTimeToday();
-       LocalTime.now().toDateTimeToday(DateTimeZone.UTC);
+       LocalTime.now();
+       LocalTime.now(ZoneOffset.UTC);
+       LocalTime.of(10, 30);
+       LocalTime.of(10, 30, 45);
+       LocalTime.of(10, 30, 45, 500 * 1_000_000);
+       LocalTime.now().plusNanos(100 * 1_000_000L);
+       LocalTime.now().minusNanos(100 * 1_000_000L);
+       LocalTime.now().withNano(500 * 1_000_000);
+       LocalTime.now().get(ChronoField.MILLI_OF_SECOND);
+       LocalTime.now().get(ChronoField.MILLI_OF_DAY);
+       LocalTime.now().getHour();
+       LocalTime.now().getMinute();
+       LocalTime.now().getSecond();
+       LocalTime.now().withHour(10);
+       LocalTime.now().withMinute(30);
+       LocalTime.now().withSecond(45);
+       LocalTime.now().atDate(LocalDate.now()).atZone(ZoneId.systemDefault());
+       LocalTime.now().atDate(LocalDate.now(ZoneOffset.UTC)).atZone(ZoneOffset.UTC);
    }
```
</TabItem>
</Tabs>

---

##### Example 11
`JodaTimePeriodToJavaTimeTest#daysBetweenGetDays`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;
import org.joda.time.Days;

class A {
    void foo(DateTime start, DateTime end) {
        int days = Days.daysBetween(start, end).getDays();
    }
}
```

###### After
```java
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;

class A {
    void foo(ZonedDateTime start, ZonedDateTime end) {
        int days = (int) ChronoUnit.DAYS.between(start, end);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.joda.time.DateTime;
-import org.joda.time.Days;
+import java.time.ZonedDateTime;
+import java.time.temporal.ChronoUnit;

@@ -5,2 +5,2 @@

class A {
-   void foo(DateTime start, DateTime end) {
-       int days = Days.daysBetween(start, end).getDays();
+   void foo(ZonedDateTime start, ZonedDateTime end) {
+       int days = (int) ChronoUnit.DAYS.between(start, end);
    }
```
</TabItem>
</Tabs>

---

##### Example 12
`JodaTimeRecipeTest#migrateSafeVariable`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;

class A {
    public void foo() {
        DateTime dt = new DateTime();
        dt.toDateTime().toString();
    }
}
```

###### After
```java
import java.time.ZonedDateTime;

class A {
    public void foo() {
        ZonedDateTime dt = ZonedDateTime.now();
        dt.toString();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.joda.time.DateTime;
+import java.time.ZonedDateTime;

@@ -5,2 +5,2 @@
class A {
    public void foo() {
-       DateTime dt = new DateTime();
-       dt.toDateTime().toString();
+       ZonedDateTime dt = ZonedDateTime.now();
+       dt.toString();
    }
```
</TabItem>
</Tabs>

---

##### Example 13
`NoJodaTimeTest#migrateJodaTime`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;
import org.joda.time.Interval;

class A {
    void foo() {
        DateTime dt = new DateTime();
        DateTime dt1 = new DateTime().plusDays(1);
        Interval i = new Interval(dt, dt1);
        i.toDuration();
    }
}
```

###### After
```java
import org.threeten.extra.Interval;

import java.time.ZonedDateTime;

class A {
    void foo() {
        ZonedDateTime dt = ZonedDateTime.now();
        ZonedDateTime dt1 = ZonedDateTime.now().plusDays(1);
        Interval i = Interval.of(dt.toInstant(), dt1.toInstant());
        i.toDuration();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,1 @@
-import org.joda.time.DateTime;
-import org.joda.time.Interval;
+import org.threeten.extra.Interval;

@@ -4,0 +3,2 @@
import org.joda.time.Interval;

+import java.time.ZonedDateTime;
+
class A {
@@ -6,3 +7,3 @@
class A {
    void foo() {
-       DateTime dt = new DateTime();
-       DateTime dt1 = new DateTime().plusDays(1);
-       Interval i = new Interval(dt, dt1);
+       ZonedDateTime dt = ZonedDateTime.now();
+       ZonedDateTime dt1 = ZonedDateTime.now().plusDays(1);
+       Interval i = Interval.of(dt.toInstant(), dt1.toInstant());
        i.toDuration();
```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
foo
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example.foobar</groupId>
    <artifactId>foobar-core</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>joda-time</groupId>
            <artifactId>joda-time</artifactId>
            <version>2.12.3</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example.foobar</groupId>
    <artifactId>foobar-core</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>joda-time</groupId>
            <artifactId>joda-time</artifactId>
            <version>2.12.3</version>
        </dependency>
        <dependency>
            <groupId>org.threeten</groupId>
            <artifactId>threeten-extra</artifactId>
            <version>1.8.0</version>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -12,0 +12,5 @@
            <version>2.12.3</version>
        </dependency>
+       <dependency>
+           <groupId>org.threeten</groupId>
+           <artifactId>threeten-extra</artifactId>
+           <version>1.8.0</version>
+       </dependency>
    </dependencies>
```
</TabItem>
</Tabs>

---

##### Example 14
`JodaAbstractInstantToJavaTimeTest#migrateAbstractInstant`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;
import org.joda.time.Duration;
import org.joda.time.Instant;
import org.joda.time.format.DateTimeFormat;

class A {
    public void foo() {
        new DateTime().equals(DateTime.now());
        new DateTime().getZone();
        new DateTime().isAfter(1234567890L);
        new Instant().isAfter(1234567890L);
        new DateTime().isAfter(DateTime.now().minusDays(1));
        new Instant().isAfter(Instant.now().minus(Duration.standardDays(1)));
        new DateTime().isBefore(1234567890L);
        new Instant().isBefore(1234567890L);
        new DateTime().isBefore(DateTime.now().plusDays(1));
        new Instant().isBefore(Instant.now().plus(Duration.standardDays(1)));
        new DateTime().isBeforeNow();
        new DateTime().isEqual(1234567890L);
        new DateTime().isEqual(DateTime.now().plusDays(1));
        new DateTime().toDate();
        new DateTime().toInstant();
        new DateTime().toString();
        new DateTime().toString(DateTimeFormat.forPattern("yyyy-MM-dd'T'HH:mm:ss"));
    }
}
```

###### After
```java
import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

class A {
    public void foo() {
        ZonedDateTime.now().equals(ZonedDateTime.now());
        ZonedDateTime.now().getZone();
        ZonedDateTime.now().isAfter(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
        Instant.now().isAfter(Instant.ofEpochMilli(1234567890L));
        ZonedDateTime.now().isAfter(ZonedDateTime.now().minusDays(1));
        Instant.now().isAfter(Instant.now().minus(Duration.ofDays(1)));
        ZonedDateTime.now().isBefore(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
        Instant.now().isBefore(Instant.ofEpochMilli(1234567890L));
        ZonedDateTime.now().isBefore(ZonedDateTime.now().plusDays(1));
        Instant.now().isBefore(Instant.now().plus(Duration.ofDays(1)));
        ZonedDateTime.now().isBefore(ZonedDateTime.now());
        ZonedDateTime.now().isEqual(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
        ZonedDateTime.now().isEqual(ZonedDateTime.now().plusDays(1));
        Date.from(ZonedDateTime.now().toInstant());
        ZonedDateTime.now().toInstant();
        ZonedDateTime.now().toString();
        ZonedDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss"));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,6 @@
-import org.joda.time.DateTime;
-import org.joda.time.Duration;
-import org.joda.time.Instant;
-import org.joda.time.format.DateTimeFormat;
+import java.time.Duration;
+import java.time.Instant;
+import java.time.ZoneId;
+import java.time.ZonedDateTime;
+import java.time.format.DateTimeFormatter;
+import java.util.Date;

@@ -8,17 +10,17 @@
class A {
    public void foo() {
-       new DateTime().equals(DateTime.now());
-       new DateTime().getZone();
-       new DateTime().isAfter(1234567890L);
-       new Instant().isAfter(1234567890L);
-       new DateTime().isAfter(DateTime.now().minusDays(1));
-       new Instant().isAfter(Instant.now().minus(Duration.standardDays(1)));
-       new DateTime().isBefore(1234567890L);
-       new Instant().isBefore(1234567890L);
-       new DateTime().isBefore(DateTime.now().plusDays(1));
-       new Instant().isBefore(Instant.now().plus(Duration.standardDays(1)));
-       new DateTime().isBeforeNow();
-       new DateTime().isEqual(1234567890L);
-       new DateTime().isEqual(DateTime.now().plusDays(1));
-       new DateTime().toDate();
-       new DateTime().toInstant();
-       new DateTime().toString();
-       new DateTime().toString(DateTimeFormat.forPattern("yyyy-MM-dd'T'HH:mm:ss"));
+       ZonedDateTime.now().equals(ZonedDateTime.now());
+       ZonedDateTime.now().getZone();
+       ZonedDateTime.now().isAfter(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
+       Instant.now().isAfter(Instant.ofEpochMilli(1234567890L));
+       ZonedDateTime.now().isAfter(ZonedDateTime.now().minusDays(1));
+       Instant.now().isAfter(Instant.now().minus(Duration.ofDays(1)));
+       ZonedDateTime.now().isBefore(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
+       Instant.now().isBefore(Instant.ofEpochMilli(1234567890L));
+       ZonedDateTime.now().isBefore(ZonedDateTime.now().plusDays(1));
+       Instant.now().isBefore(Instant.now().plus(Duration.ofDays(1)));
+       ZonedDateTime.now().isBefore(ZonedDateTime.now());
+       ZonedDateTime.now().isEqual(Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()));
+       ZonedDateTime.now().isEqual(ZonedDateTime.now().plusDays(1));
+       Date.from(ZonedDateTime.now().toInstant());
+       ZonedDateTime.now().toInstant();
+       ZonedDateTime.now().toString();
+       ZonedDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss"));
    }
```
</TabItem>
</Tabs>

---

##### Example 15
`JodaDateMidnightToJavaTimeTest#dateMidnightConstructor`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateMidnight;

class A {
    public void foo() {
        new DateMidnight();
    }
}
```

###### After
```java
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZoneOffset;

class A {
    public void foo() {
        LocalDate.now().atStartOfDay(ZoneOffset.of(ZoneId.systemDefault().getId()));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,3 @@
-import org.joda.time.DateMidnight;
+import java.time.LocalDate;
+import java.time.ZoneId;
+import java.time.ZoneOffset;

@@ -5,1 +7,1 @@
class A {
    public void foo() {
-       new DateMidnight();
+       LocalDate.now().atStartOfDay(ZoneOffset.of(ZoneId.systemDefault().getId()));
    }
```
</TabItem>
</Tabs>

---

##### Example 16
`JodaDateTimeToJavaTimeTest#migrateNewDateTime`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import java.util.TimeZone;

class A {
    public void foo() {
        new DateTime();
        new DateTime(DateTimeZone.UTC);
        new DateTime(1234567890L);
        new DateTime(1234567890L, DateTimeZone.forID("America/New_York"));
        new DateTime(2024, 9, 30, 12, 58);
        new DateTime(2024, 9, 30, 12, 58, DateTimeZone.forOffsetHours(2));
        new DateTime(2024, 9, 30, 13, 3, 15);
        new DateTime(2024, 9, 30, 13, 3, 15, DateTimeZone.forOffsetHoursMinutes(5, 30));
        new DateTime(2024, 9, 30, 13, 49, 15, 545);
        new DateTime(2024, 9, 30, 13, 49, 15, 545, DateTimeZone.forTimeZone(TimeZone.getTimeZone("America/New_York")));
    }
}
```

###### After
```java
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.TimeZone;

class A {
    public void foo() {
        ZonedDateTime.now();
        ZonedDateTime.now(ZoneOffset.UTC);
        ZonedDateTime.ofInstant(Instant.ofEpochMilli(1234567890L), ZoneId.systemDefault());
        ZonedDateTime.ofInstant(Instant.ofEpochMilli(1234567890L), ZoneId.of("America/New_York"));
        ZonedDateTime.of(2024, 9, 30, 12, 58, 0, 0, ZoneId.systemDefault());
        ZonedDateTime.of(2024, 9, 30, 12, 58, 0, 0, ZoneOffset.ofHours(2));
        ZonedDateTime.of(2024, 9, 30, 13, 3, 15, 0, ZoneId.systemDefault());
        ZonedDateTime.of(2024, 9, 30, 13, 3, 15, 0, ZoneOffset.ofHoursMinutes(5, 30));
        ZonedDateTime.of(2024, 9, 30, 13, 49, 15, 545 * 1_000_000, ZoneId.systemDefault());
        ZonedDateTime.of(2024, 9, 30, 13, 49, 15, 545 * 1_000_000, TimeZone.getTimeZone("America/New_York").toZoneId());
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,4 @@
-import org.joda.time.DateTime;
-import org.joda.time.DateTimeZone;
+import java.time.Instant;
+import java.time.ZoneId;
+import java.time.ZoneOffset;
+import java.time.ZonedDateTime;
import java.util.TimeZone;
@@ -7,10 +9,10 @@
class A {
    public void foo() {
-       new DateTime();
-       new DateTime(DateTimeZone.UTC);
-       new DateTime(1234567890L);
-       new DateTime(1234567890L, DateTimeZone.forID("America/New_York"));
-       new DateTime(2024, 9, 30, 12, 58);
-       new DateTime(2024, 9, 30, 12, 58, DateTimeZone.forOffsetHours(2));
-       new DateTime(2024, 9, 30, 13, 3, 15);
-       new DateTime(2024, 9, 30, 13, 3, 15, DateTimeZone.forOffsetHoursMinutes(5, 30));
-       new DateTime(2024, 9, 30, 13, 49, 15, 545);
-       new DateTime(2024, 9, 30, 13, 49, 15, 545, DateTimeZone.forTimeZone(TimeZone.getTimeZone("America/New_York")));
+       ZonedDateTime.now();
+       ZonedDateTime.now(ZoneOffset.UTC);
+       ZonedDateTime.ofInstant(Instant.ofEpochMilli(1234567890L), ZoneId.systemDefault());
+       ZonedDateTime.ofInstant(Instant.ofEpochMilli(1234567890L), ZoneId.of("America/New_York"));
+       ZonedDateTime.of(2024, 9, 30, 12, 58, 0, 0, ZoneId.systemDefault());
+       ZonedDateTime.of(2024, 9, 30, 12, 58, 0, 0, ZoneOffset.ofHours(2));
+       ZonedDateTime.of(2024, 9, 30, 13, 3, 15, 0, ZoneId.systemDefault());
+       ZonedDateTime.of(2024, 9, 30, 13, 3, 15, 0, ZoneOffset.ofHoursMinutes(5, 30));
+       ZonedDateTime.of(2024, 9, 30, 13, 49, 15, 545 * 1_000_000, ZoneId.systemDefault());
+       ZonedDateTime.of(2024, 9, 30, 13, 49, 15, 545 * 1_000_000, TimeZone.getTimeZone("America/New_York").toZoneId());
    }
```
</TabItem>
</Tabs>

---

##### Example 17
`JodaDateTimeZoneToJavaTimeTest#migrateDateTimeZone`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTimeZone;
import java.util.TimeZone;

class A {
    public void foo() {
        DateTimeZone.UTC.toString();
        DateTimeZone.forID("America/New_York");
        DateTimeZone.forOffsetHours(2);
        DateTimeZone.forOffsetHoursMinutes(5, 30);
        DateTimeZone.forTimeZone(TimeZone.getTimeZone("America/New_York"));
    }
}
```

###### After
```java
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.TimeZone;

class A {
    public void foo() {
        ZoneOffset.UTC.toString();
        ZoneId.of("America/New_York");
        ZoneOffset.ofHours(2);
        ZoneOffset.ofHoursMinutes(5, 30);
        TimeZone.getTimeZone("America/New_York").toZoneId();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,2 @@
-import org.joda.time.DateTimeZone;
+import java.time.ZoneId;
+import java.time.ZoneOffset;
import java.util.TimeZone;
@@ -6,5 +7,5 @@
class A {
    public void foo() {
-       DateTimeZone.UTC.toString();
-       DateTimeZone.forID("America/New_York");
-       DateTimeZone.forOffsetHours(2);
-       DateTimeZone.forOffsetHoursMinutes(5, 30);
-       DateTimeZone.forTimeZone(TimeZone.getTimeZone("America/New_York"));
+       ZoneOffset.UTC.toString();
+       ZoneId.of("America/New_York");
+       ZoneOffset.ofHours(2);
+       ZoneOffset.ofHoursMinutes(5, 30);
+       TimeZone.getTimeZone("America/New_York").toZoneId();
    }
```
</TabItem>
</Tabs>

---

##### Example 18
`JodaDurationToJavaTimeTest#migrateJodaDuration`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.Duration;

class A {
    public void foo() {
        Duration.standardDays(1L);
        Duration.standardHours(1L);
        Duration.standardMinutes(1L);
        Duration.standardSeconds(1L);
        Duration.millis(1000L);
        new Duration(1000L);
        new Duration(1000L, 2000L);
        new Duration(1000L).getStandardDays();
        new Duration(1000L).getStandardHours();
        new Duration(1000L).getStandardMinutes();
        new Duration(1000L).getStandardSeconds();
        new Duration(1000L).toDuration();
        new Duration(1000L).withMillis(2000L);
        new Duration(1000L).withDurationAdded(550L, 2);
        new Duration(1000L).withDurationAdded(new Duration(550L), 2);
        new Duration(1000L).plus(550L);
        new Duration(1000L).plus(new Duration(550L));
        new Duration(1000L).minus(550L);
        new Duration(1000L).minus(new Duration(550L));
        new Duration(1000L).multipliedBy(2);
        new Duration(1000L).dividedBy(2);
        new Duration(1000L).negated();
        new Duration(1000L).abs();
    }
}
```

###### After
```java
import java.time.Duration;
import java.time.Instant;

class A {
    public void foo() {
        Duration.ofDays(1L);
        Duration.ofHours(1L);
        Duration.ofMinutes(1L);
        Duration.ofSeconds(1L);
        Duration.ofMillis(1000L);
        Duration.ofMillis(1000L);
        Duration.between(Instant.ofEpochMilli(1000L), Instant.ofEpochMilli(2000L));
        Duration.ofMillis(1000L).toDays();
        Duration.ofMillis(1000L).toHours();
        Duration.ofMillis(1000L).toMinutes();
        Duration.ofMillis(1000L).getSeconds();
        Duration.ofMillis(1000L);
        Duration.ofMillis(2000L);
        Duration.ofMillis(1000L).plusMillis(550L * 2);
        Duration.ofMillis(1000L).plus(Duration.ofMillis(550L).multipliedBy(2));
        Duration.ofMillis(1000L).plusMillis(550L);
        Duration.ofMillis(1000L).plus(Duration.ofMillis(550L));
        Duration.ofMillis(1000L).minusMillis(550L);
        Duration.ofMillis(1000L).minus(Duration.ofMillis(550L));
        Duration.ofMillis(1000L).multipliedBy(2);
        Duration.ofMillis(1000L).dividedBy(2);
        Duration.ofMillis(1000L).negated();
        Duration.ofMillis(1000L).abs();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,2 @@
-import org.joda.time.Duration;
+import java.time.Duration;
+import java.time.Instant;

@@ -5,23 +6,23 @@
class A {
    public void foo() {
-       Duration.standardDays(1L);
-       Duration.standardHours(1L);
-       Duration.standardMinutes(1L);
-       Duration.standardSeconds(1L);
-       Duration.millis(1000L);
-       new Duration(1000L);
-       new Duration(1000L, 2000L);
-       new Duration(1000L).getStandardDays();
-       new Duration(1000L).getStandardHours();
-       new Duration(1000L).getStandardMinutes();
-       new Duration(1000L).getStandardSeconds();
-       new Duration(1000L).toDuration();
-       new Duration(1000L).withMillis(2000L);
-       new Duration(1000L).withDurationAdded(550L, 2);
-       new Duration(1000L).withDurationAdded(new Duration(550L), 2);
-       new Duration(1000L).plus(550L);
-       new Duration(1000L).plus(new Duration(550L));
-       new Duration(1000L).minus(550L);
-       new Duration(1000L).minus(new Duration(550L));
-       new Duration(1000L).multipliedBy(2);
-       new Duration(1000L).dividedBy(2);
-       new Duration(1000L).negated();
-       new Duration(1000L).abs();
+       Duration.ofDays(1L);
+       Duration.ofHours(1L);
+       Duration.ofMinutes(1L);
+       Duration.ofSeconds(1L);
+       Duration.ofMillis(1000L);
+       Duration.ofMillis(1000L);
+       Duration.between(Instant.ofEpochMilli(1000L), Instant.ofEpochMilli(2000L));
+       Duration.ofMillis(1000L).toDays();
+       Duration.ofMillis(1000L).toHours();
+       Duration.ofMillis(1000L).toMinutes();
+       Duration.ofMillis(1000L).getSeconds();
+       Duration.ofMillis(1000L);
+       Duration.ofMillis(2000L);
+       Duration.ofMillis(1000L).plusMillis(550L * 2);
+       Duration.ofMillis(1000L).plus(Duration.ofMillis(550L).multipliedBy(2));
+       Duration.ofMillis(1000L).plusMillis(550L);
+       Duration.ofMillis(1000L).plus(Duration.ofMillis(550L));
+       Duration.ofMillis(1000L).minusMillis(550L);
+       Duration.ofMillis(1000L).minus(Duration.ofMillis(550L));
+       Duration.ofMillis(1000L).multipliedBy(2);
+       Duration.ofMillis(1000L).dividedBy(2);
+       Duration.ofMillis(1000L).negated();
+       Duration.ofMillis(1000L).abs();
    }
```
</TabItem>
</Tabs>

---

##### Example 19
`JodaFormatterToJavaTimeTest#migrateDateTimeFormat`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.format.DateTimeFormat;

class A {
    public void foo() {
        DateTimeFormat.forPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
        DateTimeFormat.shortDate();
        DateTimeFormat.mediumDate();
        DateTimeFormat.longDate();
        DateTimeFormat.fullDate();
        DateTimeFormat.shortTime();
        DateTimeFormat.mediumTime();
        DateTimeFormat.longTime();
        DateTimeFormat.fullTime();
        DateTimeFormat.shortDateTime();
        DateTimeFormat.mediumDateTime();
        DateTimeFormat.longDateTime();
        DateTimeFormat.fullDateTime();
    }
}
```

###### After
```java
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;

class A {
    public void foo() {
        DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
        DateTimeFormatter.ofLocalizedDate(FormatStyle.SHORT);
        DateTimeFormatter.ofLocalizedDate(FormatStyle.MEDIUM);
        DateTimeFormatter.ofLocalizedDate(FormatStyle.LONG);
        DateTimeFormatter.ofLocalizedDate(FormatStyle.FULL);
        DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT);
        DateTimeFormatter.ofLocalizedTime(FormatStyle.MEDIUM);
        DateTimeFormatter.ofLocalizedTime(FormatStyle.LONG);
        DateTimeFormatter.ofLocalizedTime(FormatStyle.FULL);
        DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT, FormatStyle.SHORT);
        DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM, FormatStyle.MEDIUM);
        DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG, FormatStyle.LONG);
        DateTimeFormatter.ofLocalizedDateTime(FormatStyle.FULL, FormatStyle.FULL);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,2 @@
-import org.joda.time.format.DateTimeFormat;
+import java.time.format.DateTimeFormatter;
+import java.time.format.FormatStyle;

@@ -5,13 +6,13 @@
class A {
    public void foo() {
-       DateTimeFormat.forPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
-       DateTimeFormat.shortDate();
-       DateTimeFormat.mediumDate();
-       DateTimeFormat.longDate();
-       DateTimeFormat.fullDate();
-       DateTimeFormat.shortTime();
-       DateTimeFormat.mediumTime();
-       DateTimeFormat.longTime();
-       DateTimeFormat.fullTime();
-       DateTimeFormat.shortDateTime();
-       DateTimeFormat.mediumDateTime();
-       DateTimeFormat.longDateTime();
-       DateTimeFormat.fullDateTime();
+       DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
+       DateTimeFormatter.ofLocalizedDate(FormatStyle.SHORT);
+       DateTimeFormatter.ofLocalizedDate(FormatStyle.MEDIUM);
+       DateTimeFormatter.ofLocalizedDate(FormatStyle.LONG);
+       DateTimeFormatter.ofLocalizedDate(FormatStyle.FULL);
+       DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT);
+       DateTimeFormatter.ofLocalizedTime(FormatStyle.MEDIUM);
+       DateTimeFormatter.ofLocalizedTime(FormatStyle.LONG);
+       DateTimeFormatter.ofLocalizedTime(FormatStyle.FULL);
+       DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT, FormatStyle.SHORT);
+       DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM, FormatStyle.MEDIUM);
+       DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG, FormatStyle.LONG);
+       DateTimeFormatter.ofLocalizedDateTime(FormatStyle.FULL, FormatStyle.FULL);
    }
```
</TabItem>
</Tabs>

---

##### Example 20
`JodaInstantToJavaTimeTest#migrateInstant`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.Instant;
import org.joda.time.Duration;

class A {
    public void foo() {
        new Instant();
        Instant.now().getMillis();
        Instant.now().minus(Duration.standardDays(1L));
        Instant.ofEpochMilli(1234567890L);
        Instant.parse("2024-10-25T15:45:00");
        Instant.now().plus(Duration.standardDays(1L));
    }
}
```

###### After
```java
import java.time.Duration;
import java.time.Instant;

class A {
    public void foo() {
        Instant.now();
        Instant.now().toEpochMilli();
        Instant.now().minus(Duration.ofDays(1L));
        Instant.ofEpochMilli(1234567890L);
        Instant.parse("2024-10-25T15:45:00");
        Instant.now().plus(Duration.ofDays(1L));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.joda.time.Instant;
-import org.joda.time.Duration;
+import java.time.Duration;
+import java.time.Instant;

@@ -6,3 +6,3 @@
class A {
    public void foo() {
-       new Instant();
-       Instant.now().getMillis();
-       Instant.now().minus(Duration.standardDays(1L));
+       Instant.now();
+       Instant.now().toEpochMilli();
+       Instant.now().minus(Duration.ofDays(1L));
        Instant.ofEpochMilli(1234567890L);
@@ -11,1 +11,1 @@
        Instant.ofEpochMilli(1234567890L);
        Instant.parse("2024-10-25T15:45:00");
-       Instant.now().plus(Duration.standardDays(1L));
+       Instant.now().plus(Duration.ofDays(1L));
    }
```
</TabItem>
</Tabs>

---

##### Example 21
`JodaIntervalToJavaTimeTest#migrateInterval`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;
import org.joda.time.Duration;
import org.joda.time.Interval;
import org.joda.time.DateTimeZone;

class A {
    public void foo() {
        new Interval(50, 100);
        new Interval(50, 100, DateTimeZone.UTC);
        new Interval(DateTime.now(), DateTime.now().plusDays(1));
        new Interval(DateTime.now(), Duration.standardDays(1));
    }
}
```

###### After
```java
import org.threeten.extra.Interval;

import java.time.Duration;
import java.time.Instant;
import java.time.ZonedDateTime;

class A {
    public void foo() {
        Interval.of(Instant.ofEpochMilli(50), Instant.ofEpochMilli(100));
        Interval.of(Instant.ofEpochMilli(50), Instant.ofEpochMilli(100));
        Interval.of(ZonedDateTime.now().toInstant(), ZonedDateTime.now().plusDays(1).toInstant());
        Interval.of(ZonedDateTime.now().toInstant(), Duration.ofDays(1));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,1 @@
-import org.joda.time.DateTime;
-import org.joda.time.Duration;
-import org.joda.time.Interval;
-import org.joda.time.DateTimeZone;
+import org.threeten.extra.Interval;

@@ -6,0 +3,4 @@
import org.joda.time.DateTimeZone;

+import java.time.Duration;
+import java.time.Instant;
+import java.time.ZonedDateTime;
+
class A {
@@ -8,4 +9,4 @@
class A {
    public void foo() {
-       new Interval(50, 100);
-       new Interval(50, 100, DateTimeZone.UTC);
-       new Interval(DateTime.now(), DateTime.now().plusDays(1));
-       new Interval(DateTime.now(), Duration.standardDays(1));
+       Interval.of(Instant.ofEpochMilli(50), Instant.ofEpochMilli(100));
+       Interval.of(Instant.ofEpochMilli(50), Instant.ofEpochMilli(100));
+       Interval.of(ZonedDateTime.now().toInstant(), ZonedDateTime.now().plusDays(1).toInstant());
+       Interval.of(ZonedDateTime.now().toInstant(), Duration.ofDays(1));
    }
```
</TabItem>
</Tabs>

---

##### Example 22
`JodaLocalDateToJavaTimeTest#migrateLocalDate`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTimeZone;
import org.joda.time.LocalDate;
import org.joda.time.LocalTime;

class A {
    public void foo() {
        new LocalDate();
        new LocalDate(DateTimeZone.UTC);
        new LocalDate(2024, 10, 25);
        new LocalDate(1234567890L);
        new LocalDate(1234567890L, DateTimeZone.UTC);
        LocalDate.now().getDayOfWeek();
        LocalDate.now().getMonthOfYear();
        LocalDate.now().withMonthOfYear(6);
        LocalDate.now().plusDays(1);
        LocalDate.now().toDateTimeAtStartOfDay();
        LocalDate.now().toDateTimeAtStartOfDay(DateTimeZone.UTC);
        LocalDate.now().toLocalDateTime(new LocalTime(10, 30));
    }
}
```

###### After
```java
import java.time.*;

class A {
    public void foo() {
        LocalDate.now();
        LocalDate.now(ZoneOffset.UTC);
        LocalDate.of(2024, 10, 25);
        Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()).toLocalDate();
        Instant.ofEpochMilli(1234567890L).atZone(ZoneOffset.UTC).toLocalDate();
        LocalDate.now().getDayOfWeek().getValue();
        LocalDate.now().getMonthValue();
        LocalDate.now().withMonth(6);
        LocalDate.now().plusDays(1);
        LocalDate.now().atStartOfDay(ZoneId.systemDefault());
        LocalDate.now().atStartOfDay(ZoneOffset.UTC);
        LocalDate.now().atTime(LocalTime.of(10, 30));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,3 +1,1 @@
-import org.joda.time.DateTimeZone;
-import org.joda.time.LocalDate;
-import org.joda.time.LocalTime;
+import java.time.*;

@@ -7,8 +5,8 @@
class A {
    public void foo() {
-       new LocalDate();
-       new LocalDate(DateTimeZone.UTC);
-       new LocalDate(2024, 10, 25);
-       new LocalDate(1234567890L);
-       new LocalDate(1234567890L, DateTimeZone.UTC);
-       LocalDate.now().getDayOfWeek();
-       LocalDate.now().getMonthOfYear();
-       LocalDate.now().withMonthOfYear(6);
+       LocalDate.now();
+       LocalDate.now(ZoneOffset.UTC);
+       LocalDate.of(2024, 10, 25);
+       Instant.ofEpochMilli(1234567890L).atZone(ZoneId.systemDefault()).toLocalDate();
+       Instant.ofEpochMilli(1234567890L).atZone(ZoneOffset.UTC).toLocalDate();
+       LocalDate.now().getDayOfWeek().getValue();
+       LocalDate.now().getMonthValue();
+       LocalDate.now().withMonth(6);
        LocalDate.now().plusDays(1);
@@ -16,3 +14,3 @@
        LocalDate.now().withMonthOfYear(6);
        LocalDate.now().plusDays(1);
-       LocalDate.now().toDateTimeAtStartOfDay();
-       LocalDate.now().toDateTimeAtStartOfDay(DateTimeZone.UTC);
-       LocalDate.now().toLocalDateTime(new LocalTime(10, 30));
+       LocalDate.now().atStartOfDay(ZoneId.systemDefault());
+       LocalDate.now().atStartOfDay(ZoneOffset.UTC);
+       LocalDate.now().atTime(LocalTime.of(10, 30));
    }
```
</TabItem>
</Tabs>

---

##### Example 23
`JodaLocalTimeToJavaTimeTest#migrateLocalTime`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTimeZone;
import org.joda.time.LocalTime;

class A {
    public void foo() {
        new LocalTime();
        new LocalTime(DateTimeZone.UTC);
        new LocalTime(10, 30);
        new LocalTime(10, 30, 45);
        new LocalTime(10, 30, 45, 500);
        LocalTime.now().plusMillis(100);
        LocalTime.now().minusMillis(100);
        LocalTime.now().withMillisOfSecond(500);
        LocalTime.now().getMillisOfSecond();
        LocalTime.now().getMillisOfDay();
        LocalTime.now().getHourOfDay();
        LocalTime.now().getMinuteOfHour();
        LocalTime.now().getSecondOfMinute();
        LocalTime.now().withHourOfDay(10);
        LocalTime.now().withMinuteOfHour(30);
        LocalTime.now().withSecondOfMinute(45);
        LocalTime.now().toDateTimeToday();
        LocalTime.now().toDateTimeToday(DateTimeZone.UTC);
    }
}
```

###### After
```java
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.temporal.ChronoField;

class A {
    public void foo() {
        LocalTime.now();
        LocalTime.now(ZoneOffset.UTC);
        LocalTime.of(10, 30);
        LocalTime.of(10, 30, 45);
        LocalTime.of(10, 30, 45, 500 * 1_000_000);
        LocalTime.now().plusNanos(100 * 1_000_000L);
        LocalTime.now().minusNanos(100 * 1_000_000L);
        LocalTime.now().withNano(500 * 1_000_000);
        LocalTime.now().get(ChronoField.MILLI_OF_SECOND);
        LocalTime.now().get(ChronoField.MILLI_OF_DAY);
        LocalTime.now().getHour();
        LocalTime.now().getMinute();
        LocalTime.now().getSecond();
        LocalTime.now().withHour(10);
        LocalTime.now().withMinute(30);
        LocalTime.now().withSecond(45);
        LocalTime.now().atDate(LocalDate.now()).atZone(ZoneId.systemDefault());
        LocalTime.now().atDate(LocalDate.now(ZoneOffset.UTC)).atZone(ZoneOffset.UTC);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,5 @@
-import org.joda.time.DateTimeZone;
-import org.joda.time.LocalTime;
+import java.time.LocalDate;
+import java.time.LocalTime;
+import java.time.ZoneId;
+import java.time.ZoneOffset;
+import java.time.temporal.ChronoField;

@@ -6,18 +9,18 @@
class A {
    public void foo() {
-       new LocalTime();
-       new LocalTime(DateTimeZone.UTC);
-       new LocalTime(10, 30);
-       new LocalTime(10, 30, 45);
-       new LocalTime(10, 30, 45, 500);
-       LocalTime.now().plusMillis(100);
-       LocalTime.now().minusMillis(100);
-       LocalTime.now().withMillisOfSecond(500);
-       LocalTime.now().getMillisOfSecond();
-       LocalTime.now().getMillisOfDay();
-       LocalTime.now().getHourOfDay();
-       LocalTime.now().getMinuteOfHour();
-       LocalTime.now().getSecondOfMinute();
-       LocalTime.now().withHourOfDay(10);
-       LocalTime.now().withMinuteOfHour(30);
-       LocalTime.now().withSecondOfMinute(45);
-       LocalTime.now().toDateTimeToday();
-       LocalTime.now().toDateTimeToday(DateTimeZone.UTC);
+       LocalTime.now();
+       LocalTime.now(ZoneOffset.UTC);
+       LocalTime.of(10, 30);
+       LocalTime.of(10, 30, 45);
+       LocalTime.of(10, 30, 45, 500 * 1_000_000);
+       LocalTime.now().plusNanos(100 * 1_000_000L);
+       LocalTime.now().minusNanos(100 * 1_000_000L);
+       LocalTime.now().withNano(500 * 1_000_000);
+       LocalTime.now().get(ChronoField.MILLI_OF_SECOND);
+       LocalTime.now().get(ChronoField.MILLI_OF_DAY);
+       LocalTime.now().getHour();
+       LocalTime.now().getMinute();
+       LocalTime.now().getSecond();
+       LocalTime.now().withHour(10);
+       LocalTime.now().withMinute(30);
+       LocalTime.now().withSecond(45);
+       LocalTime.now().atDate(LocalDate.now()).atZone(ZoneId.systemDefault());
+       LocalTime.now().atDate(LocalDate.now(ZoneOffset.UTC)).atZone(ZoneOffset.UTC);
    }
```
</TabItem>
</Tabs>

---

##### Example 24
`JodaTimePeriodToJavaTimeTest#daysBetweenGetDays`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;
import org.joda.time.Days;

class A {
    void foo(DateTime start, DateTime end) {
        int days = Days.daysBetween(start, end).getDays();
    }
}
```

###### After
```java
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;

class A {
    void foo(ZonedDateTime start, ZonedDateTime end) {
        int days = (int) ChronoUnit.DAYS.between(start, end);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.joda.time.DateTime;
-import org.joda.time.Days;
+import java.time.ZonedDateTime;
+import java.time.temporal.ChronoUnit;

@@ -5,2 +5,2 @@

class A {
-   void foo(DateTime start, DateTime end) {
-       int days = Days.daysBetween(start, end).getDays();
+   void foo(ZonedDateTime start, ZonedDateTime end) {
+       int days = (int) ChronoUnit.DAYS.between(start, end);
    }
```
</TabItem>
</Tabs>

---

##### Example 25
`JodaTimeRecipeTest#migrateSafeVariable`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;

class A {
    public void foo() {
        DateTime dt = new DateTime();
        dt.toDateTime().toString();
    }
}
```

###### After
```java
import java.time.ZonedDateTime;

class A {
    public void foo() {
        ZonedDateTime dt = ZonedDateTime.now();
        dt.toString();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.joda.time.DateTime;
+import java.time.ZonedDateTime;

@@ -5,2 +5,2 @@
class A {
    public void foo() {
-       DateTime dt = new DateTime();
-       dt.toDateTime().toString();
+       ZonedDateTime dt = ZonedDateTime.now();
+       dt.toString();
    }
```
</TabItem>
</Tabs>

---

##### Example 26
`NoJodaTimeTest#migrateJodaTime`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.joda.time.DateTime;
import org.joda.time.Interval;

class A {
    void foo() {
        DateTime dt = new DateTime();
        DateTime dt1 = new DateTime().plusDays(1);
        Interval i = new Interval(dt, dt1);
        i.toDuration();
    }
}
```

###### After
```java
import org.threeten.extra.Interval;

import java.time.ZonedDateTime;

class A {
    void foo() {
        ZonedDateTime dt = ZonedDateTime.now();
        ZonedDateTime dt1 = ZonedDateTime.now().plusDays(1);
        Interval i = Interval.of(dt.toInstant(), dt1.toInstant());
        i.toDuration();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,1 @@
-import org.joda.time.DateTime;
-import org.joda.time.Interval;
+import org.threeten.extra.Interval;

@@ -4,0 +3,2 @@
import org.joda.time.Interval;

+import java.time.ZonedDateTime;
+
class A {
@@ -6,3 +7,3 @@
class A {
    void foo() {
-       DateTime dt = new DateTime();
-       DateTime dt1 = new DateTime().plusDays(1);
-       Interval i = new Interval(dt, dt1);
+       ZonedDateTime dt = ZonedDateTime.now();
+       ZonedDateTime dt1 = ZonedDateTime.now().plusDays(1);
+       Interval i = Interval.of(dt.toInstant(), dt1.toInstant());
        i.toDuration();
```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
foo
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example.foobar</groupId>
    <artifactId>foobar-core</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>joda-time</groupId>
            <artifactId>joda-time</artifactId>
            <version>2.12.3</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example.foobar</groupId>
    <artifactId>foobar-core</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>joda-time</groupId>
            <artifactId>joda-time</artifactId>
            <version>2.12.3</version>
        </dependency>
        <dependency>
            <groupId>org.threeten</groupId>
            <artifactId>threeten-extra</artifactId>
            <version>1.8.0</version>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -12,0 +12,5 @@
            <version>2.12.3</version>
        </dependency>
+       <dependency>
+           <groupId>org.threeten</groupId>
+           <artifactId>threeten-extra</artifactId>
+           <version>1.8.0</version>
+       </dependency>
    </dependencies>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-joda` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.joda.time.NoJodaTime")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-joda:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JODA}}")
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
        rewrite("org.openrewrite.recipe:rewrite-joda:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JODA}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.joda.time.NoJodaTime")
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
            <recipe>org.openrewrite.java.joda.time.NoJodaTime</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-joda</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JODA}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-joda:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.joda.time.NoJodaTime -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe NoJodaTime
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-joda:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JODA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.joda.time.NoJodaTime" />

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
