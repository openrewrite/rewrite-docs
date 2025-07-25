---
sidebar_label: "Change method name"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change method name

**org.openrewrite.java.ChangeMethodName**

_Rename a method._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeMethodName.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | methodPattern | A [method pattern](https://docs.openrewrite.org/reference/method-patterns) is used to find matching method invocations. For example, to find all method invocations in the Guava library, use the pattern: `com.google.common..*#*(..)`.<br/><br/>The pattern format is `<PACKAGE>#<METHOD_NAME>(<ARGS>)`. <br/><br/>`..*` includes all subpackages of `com.google.common`. <br/>`*(..)` matches any method name with any number of arguments. <br/><br/>For more specific queries, like Guava's `ImmutableMap`, use `com.google.common.collect.ImmutableMap#*(..)` to narrow down the results. | `org.mockito.Matchers anyVararg()` |
| `String` | newMethodName | The method name that will replace the existing name. | `any` |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the method pattern. |  |
| `Boolean` | ignoreDefinition | *Optional*. When set to `true` the definition of the old type will be left untouched. This is useful when you're replacing usage of a class but don't want to rename it. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Adopt `SequencedCollection`](/recipes/java/migrate/util/sequencedcollection.md)
* [Adopt `javax.security.auth.Subject.current()` and `javax.security.auth.Subject.callAs()` methods`](/recipes/java/migrate/removedsubjectmethods.md)
* [Adopt `setLongThreadID` in `java.util.logging.LogRecord`](/recipes/io/quarkus/updates/core/quarkus37/deprecatedlogrecordthreadid.md)
* [Adopt `setLongThreadID` in `java.util.logging.LogRecord`](/recipes/java/migrate/deprecatedlogrecordthreadid.md)
* [ArchUnit 0.x upgrade](/recipes/java/testing/archunit/archunit0to1migration.md)
* [Change S3 methods to v2.](/recipes/software/amazon/awssdk/v2migration/s3methodstov2.md)
* [Change S3EventNotification methods to v2.](/recipes/software/amazon/awssdk/v2migration/s3eventnotificationmethodstov2.md)
* [Change SDK Exception types from v1 to v2](/recipes/software/amazon/awssdk/v2migration/changeexceptiontypes.md)
* [Change TransferManager simple methods to v2.](/recipes/software/amazon/awssdk/v2migration/changetransfermanagersimplemethods.md)
* [Change `List#add` to `List#plus` and verify.](/recipes/compiled/verification/changelistmethodandverify.md)
* [Change auth related classes from v1 to v2](/recipes/software/amazon/awssdk/v2migration/changeauthtypes.md)
* [Change config related classes from v1 to v2](/recipes/software/amazon/awssdk/v2migration/changeconfigtypes.md)
* [Change of method names brought by Camel JMX API changes](/recipes/org/apache/camel/upgrade/camel40/changemanagedchoicembeanmethodname.md)
* [Change of method names brought by Camel JMX API changes](/recipes/org/apache/camel/upgrade/camel40/changemanagedfailoverloadbalancermbeanmethodname.md)
* [Change region related classes](/recipes/software/amazon/awssdk/v2migration/changeregiontypes.md)
* [Change v1 enum getters to v2](/recipes/software/amazon/awssdk/v2migration/enumgetterstov2.md)
* [JUnit Jupiter migration from JUnit 4.x](/recipes/java/testing/junit5/junit4to5migration.md)
* [Migrate Apache Commons Logging 1.x to SLF4J 1.x](/recipes/java/logging/slf4j/commonslogging1toslf4j1.md)
* [Migrate Fest 2.x to AssertJ](/recipes/java/testing/assertj/festtoassertj.md)
* [Migrate Hamcrest assertions to JUnit Jupiter](/recipes/java/testing/hamcrest/migratehamcresttojunit5.md)
* [Migrate JCL to Log4j 2.x API](/recipes/java/logging/log4j/commonsloggingtolog4j.md)
* [Migrate JUL to Log4j 2.x API](/recipes/java/logging/log4j/jultolog4j.md)
* [Migrate Log4j 1.x to Log4j 2.x](/recipes/java/logging/log4j/log4j1tolog4j2.md)
* [Migrate Log4j 2.x to SLF4J 1.x](/recipes/java/logging/slf4j/log4j2toslf4j1.md)
* [Migrate SLF4J to Log4j 2.x API](/recipes/java/logging/log4j/slf4jtolog4j.md)
* [Migrate from EasyMock to Mockito](/recipes/java/testing/easymock/easymocktomockito.md)
* [Migrate from Java Faker to Datafaker](/recipes/java/testing/datafaker/javafakertodatafaker.md)
* [Migrate from Micronaut 2.x to 3.x](/recipes/java/micronaut/micronaut2to3migration.md)
* [Migrate from springdoc-openapi-common to springdoc-openapi-starter-common](/recipes/java/springdoc/migratespringdoccommon.md)
* [Migrate to ApacheHttpClient 5.x deprecated methods from 4.x](/recipes/apache/httpclient5/upgradeapachehttpclient_5_deprecatedmethods.md)
* [Migrate to Hibernate 6.6.x](/recipes/hibernate/migratetohibernate66.md)
* [Migrate to HtmlUnit 3.x](/recipes/java/testing/htmlunit/upgradehtmlunit_3.md)
* [Migrate to Reactor 3.5](/recipes/reactive/reactor/upgradereactor_3_5.md)
* [Migrate to Spring Framework 6.2](/recipes/java/spring/framework/upgradespringframework_6_2.md)
* [Migrates to Apache Commons Lang 3.x](/recipes/apache/commons/lang/upgradeapachecommonslang_2_3.md)
* [Mockito 3.x migration from 1.x](/recipes/java/testing/mockito/mockito1to3migration.md)
* [PlanningVariable's `nullable` is newly called `unassignedValues`](/recipes/ai/timefold/solver/migration/v8/nullablerecipe.md)
* [Prefer `Integer#compareUnsigned`](/recipes/java/migrate/guava/preferintegercompareunsigned.md)
* [Prefer `Integer#divideUnsigned`](/recipes/java/migrate/guava/preferintegerdivideunsigned.md)
* [Prefer `Long#compareUnsigned`](/recipes/java/migrate/guava/preferlongcompareunsigned.md)
* [Prefer `Long#divideUnsigned`](/recipes/java/migrate/guava/preferlongdivideunsigned.md)
* [Prefer `Math#addExact`](/recipes/java/migrate/guava/prefermathaddexact.md)
* [Prefer `Math#clamp`](/recipes/java/migrate/guava/prefermathclamp.md)
* [Prefer `Math#multiplyExact`](/recipes/java/migrate/guava/prefermathmultiplyexact.md)
* [Prefer `Math#subtractExact`](/recipes/java/migrate/guava/prefermathsubtractexact.md)
* [Prefer `java.util.Objects#equals`](/recipes/java/migrate/guava/preferjavautilobjectsequals.md)
* [Prefer `java.util.Objects#hash`](/recipes/java/migrate/guava/preferjavautilobjectshashcode.md)
* [Prefer `java.util.Objects#requireNonNullElse`](/recipes/java/migrate/guava/preferjavautilobjectsrequirenonnullelse.md)
* [Prefer `java.util.Optional`](/recipes/java/migrate/guava/preferjavautiloptional.md)
* [Prefer `java.util.function.Predicate`](/recipes/java/migrate/guava/preferjavautilpredicate.md)
* [Quarkus 1.13 migration from Quarkus 1.11](/recipes/quarkus/quarkus1to1_13migration.md)
* [Recommended Fit API becomes Assignment Recommendation API](/recipes/ai/timefold/solver/migration/v8/solutionmanagerrecommendassignmentrecipe.md)
* [Replace  deprecated Jakarta Servlet methods and classes](/recipes/java/migrate/jakarta/removalsservletjakarta10.md)
* [Replace `ContainerState.getContainerIpAddress()` with `getHost()`](/recipes/java/testing/testcontainers/gethostmigration.md)
* [Replace `HttpServletRequestWrapper.isRequestedSessionIdFromUrl()` with `isRequestedSessionIdFromURL()`](/recipes/java/migrate/javaee8/servletisrequestedsessionidfromurl.md)
* [Replace `Paths.get` with `Path.of`](/recipes/java/migrate/nio/file/pathsgettopathof.md)
* [Replace `SSLSession.getPeerCertificateChain()` method](/recipes/java/migrate/removedsslsessiongetpeercertificatechainmethodimpl.md)
* [Replace `doUpgrade(..)` with `ServerContainer.upgradeHttpToWebSocket(..)`](/recipes/java/migrate/jakarta/wswsocservercontainerdeprecation.md)
* [Replace `finalize` method in `java.io.FileInputStream`  and `java.io.FileOutputStream`](/recipes/java/migrate/removedfileiofinalizemethods.md)
* [Replace `finalize` method in `java.util.zip.ZipFile`, `java.util.zip.Inflater` and `java.util.zip.Deflater`](/recipes/java/migrate/removedzipfinalizemethods.md)
* [Replace `hudson.Util.getPastTimeString` with `getTimeSpanString`](/recipes/jenkins/migrate/hudson/utilgetpasttimestringtogettimespanstring.md)
* [Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`](/recipes/staticanalysis/replacevalidatenotnullhavingsingleargwithobjectsrequirenonnull.md)
* [Replace calls to `Thread.run()` with `Thread.start()`](/recipes/staticanalysis/replacethreadrunwiththreadstart.md)
* [Replace deprecated Jakarta Servlet methods and classes](/recipes/com/oracle/weblogic/rewrite/jakarta/removalsservletjakarta9.md)
* [Replace deprecated setters in `RestTemplateBuilder`](/recipes/java/spring/boot3/replaceresttemplatebuildermethods.md)
* [The header name for the List metadata has changed](/recipes/org/apache/camel/upgrade/camel43/kafkametadata.md)
* [Upgrade to SpringDoc 2.1](/recipes/java/springdoc/upgradespringdoc_2.md)
* [Upgrade to the latest Timefold Solver](/recipes/ai/timefold/solver/migration/tolatest.md)
* [Use `AtomicBoolean#weakCompareAndSetPlain(boolean, boolean)`](/recipes/java/migrate/concurrent/migrateatomicbooleanweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicInteger#weakCompareAndSetPlain(int, int)`](/recipes/java/migrate/concurrent/migrateatomicintegerweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicIntegerArray#weakCompareAndSetPlain(int, int, int)`](/recipes/java/migrate/concurrent/migrateatomicintegerarrayweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicLong#weakCompareAndSetPlain(long, long)`](/recipes/java/migrate/concurrent/migrateatomiclongweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicLongArray#weakCompareAndSetPlain(int, long, long)`](/recipes/java/migrate/concurrent/migrateatomiclongarrayweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicReference#weakCompareAndSetPlain(T, T)`](/recipes/java/migrate/concurrent/migrateatomicreferenceweakcompareandsettoweakcompareandsetplain.md)
* [Use `AtomicReferenceArray#weakCompareAndSetPlain(int, T, T)`](/recipes/java/migrate/concurrent/migrateatomicreferencearrayweakcompareandsettoweakcompareandsetplain.md)
* [Use `Character#isJavaIdentifierPart(char)`](/recipes/java/migrate/lang/migratecharacterisjavaletterordigittoisjavaidentifierpart.md)
* [Use `Character#isJavaIdentifierStart(char)`](/recipes/java/migrate/lang/migratecharacterisjavalettertoisjavaidentifierstart.md)
* [Use `Character#isWhitespace(char)`](/recipes/java/migrate/lang/migratecharacterisspacetoiswhitespace.md)
* [Use `JpaRepository#deleteAllInBatch(Iterable&lt;T&gt; entities)`](/recipes/java/spring/data/usejparepositorydeleteallinbatch.md)
* [Use `JpaRepository#getById(ID id)`](/recipes/java/spring/data/usejparepositorygetbyid.md)
* [Use `JpaRepository#getReferenceById(ID id)`](/recipes/java/spring/data/usejparepositorygetreferencebyid.md)
* [Use `RestTemplateBuilder#basicAuthentication`](/recipes/java/spring/boot2/migrateresttemplatebuilderbasicauthorization.md)
* [Use `Runtime.Version#feature()`](/recipes/java/migrate/lang/migrateruntimeversionmajortofeature.md)
* [Use `Runtime.Version#interim()`](/recipes/java/migrate/lang/migrateruntimeversionminortointerim.md)
* [Use `Runtime.Version#update()`](/recipes/java/migrate/lang/migrateruntimeversionsecuritytoupdate.md)
* [Use `StateManagementStrategy`](/recipes/com/oracle/weblogic/rewrite/jakarta/removedstatemanagermethods3.md)
* [Use `StateManagementStrategy`](/recipes/java/migrate/jakarta/removedstatemanagermethods.md)
* [Use `getSSOCookieFromSSOToken` and `logout`](/recipes/java/liberty/websphereunavailablessomethods.md)
* [Use `isEagerFilterInit()`](/recipes/java/spring/boot2/migrateundertowservletwebserverfactoryiseagerinitfilters.md)
* [Use `isParametersProvided()`](/recipes/java/migrate/jakarta/removedisparmetersprovidedmethod.md)
* [Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`](/recipes/java/migrate/jakarta/removedsoapelementfactory.md)
* [Use `java.net.MulticastSocket#getTimeToLive()`](/recipes/java/migrate/net/migratemulticastsocketgetttltogettimetolive.md)
* [Use `javax.management.monitor.CounterMonitor#setInitThreshold`](/recipes/java/migrate/javax/migratecountermonitorsetthresholdtosetinitthreshold.md)
* [Use `javax.xml.stream.XMLEventFactory#newFactory(String, ClassLoader)`](/recipes/java/migrate/javax/migratexmleventfactorynewinstancetonewfactory.md)
* [Use `javax.xml.stream.XMLInputFactory#newFactory(String, ClassLoader)`](/recipes/java/migrate/javax/migratexmlinputfactorynewinstancetonewfactory.md)
* [Use `javax.xml.stream.XMLOutputFactory#newFactory(String, ClassLoader)`](/recipes/java/migrate/javax/migratexmloutputfactorynewinstancetonewfactory.md)
* [Use `setEagerFilterInit(boolean)`](/recipes/java/spring/boot2/migrateundertowservletwebserverfactoryseteagerinitfilters.md)
* [io.quarkus.updates.core.quarkus324.MigrateFromHibernateOrmSessionMethodsRemovedIn7](/recipes/io/quarkus/updates/core/quarkus324/migratefromhibernateormsessionmethodsremovedin7.md)
* [io.quarkus.updates.core.quarkus35.MutinyUniAndGroupCombinedWith](/recipes/io/quarkus/updates/core/quarkus35/mutinyuniandgroupcombinedwith.md)
* [io.quarkus.updates.core.quarkus35.MutinyUniMemoizeAtLeast](/recipes/io/quarkus/updates/core/quarkus35/mutinyunimemoizeatleast.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeMethodNameExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMethodNameExample
displayName: Change method name example
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.Matchers anyVararg()
      newMethodName: any
```

Now that `com.yourorg.ChangeMethodNameExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ChangeMethodNameExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
<TabItem value="maven" label="Maven">

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
            <recipe>com.yourorg.ChangeMethodNameExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ChangeMethodName --recipe-option "methodPattern=org.mockito.Matchers anyVararg()" --recipe-option "newMethodName=any"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-java:{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.ChangeMethodName" />

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
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>

## Contributors
[Jonathan Schnéider](mailto:jkschneider@gmail.com), [JohannisK](mailto:johan.kragt@moderne.io), [Greg Adams](mailto:greg@moderne.io), [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), Tyler Van Gorder, [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com)
