---
sidebar_label: "Spring Boot 3.5 best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Spring Boot 3.5 best practices

**io.moderne.java.spring.boot3.SpringBoot3BestPractices**

_Applies best practices to Spring Boot 3.5+ applications._

### Tags

* [spring](../recipes-by-tag#spring)
* [boot](../recipes-by-tag#boot)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpringBoot3BestPractices
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-spring:{{VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.java.spring.boot3.SpringBoot3BestPractices" />

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

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

</Tabs>

## Contributors
[Knut Wannheden](mailto:knut@moderne.io), Tyler Van Gorder, ashakirin, [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Joan Viladrosa](mailto:joan@moderne.io), [Alex Boyko](mailto:aboyko@vmware.com), [Sam Snyder](mailto:sam@moderne.io), Chuka Obinabo, [Laurens Westerlaken](mailto:laurens.w@live.nl), Simon Zilliken, [Jonathan Schneider](mailto:jkschneider@gmail.com), Kun Li, Anu Ramamoorthy, Patrick Way, [steve-aom-elliott](mailto:steve@moderne.io), Cathy, [Niels de Bruin](mailto:nielsdebruin@gmail.com), [qwtfps](mailto:qwtfps@163.com), pdesprez, [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Guillaume Husta](mailto:guillaume.husta@gmail.com), SiBorea, [Aaron Gershman](mailto:aegershman@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Merlin Bögershausen](mailto:merlin.boegershausen@rwth-aachen.de), [Jacob van Lingen](mailto:jacobvanlingen@hotmail.com), [Shannon Pamperl](mailto:shanman190@gmail.com), Kushank24, [Tim te Beek](mailto:timtebeek@gmail.com), [Marcin Słowiak](mailto:m.slowiak@smartrecruiters.com), [Andrii Rodionov](mailto:andrii@moderne.io), [Curtis](mailto:curtis@mail.ustc.edu.cn), [Melloware](mailto:mellowaredev@gmail.com), 123Haynes, [Kun Li](mailto:kun@moderne.io), BhavanaPidapa, [Andrii Rodionov](mailto:andrey.rodionov@gmail.com), [Kevin McCarpenter](mailto:kevin@moderne.io), [Jente Sondervorst](mailto:jentesondervorst@gmail.com), Evie Lau, [Greg Oledzki](mailto:greg.oledzki@moderne.io), [Jacob van Lingen](mailto:jacob.van.lingen@moderne.io), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Marcin Słowiak](mailto:marcin.slowiak.007@gmail.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), Michel Gonzalez, Fabian Krüger, [Johannes Jank](mailto:johannes.wengert@googlemail.com), [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), Aaron Gershman, Daryl Robbins, ranuradh, Adam Slaski, nbruno, [adammak](mailto:maka9@mcmaster.ca), [JohannisK](mailto:johan.kragt@moderne.io), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), [Laurens Westerlaken](mailto:laurens.westerlaken@jdriven.com), [Greg Adams](mailto:gadams@gmail.com), Sandeep Nagaraj, [Matthias Klauer](mailto:matthias.klauer@sap.com), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [BoykoAlex](mailto:aboyko@pivotal.io), Anshuman Mishra, Tyler Van Gorder, [Greg Adams](mailto:greg@moderne.io), [Michael Keppler](mailto:bananeweizen@gmx.de), Josh Soref, [Laurens Westerlaken](mailto:laurens.westerlaken@moderne.io), John Burns, Aakarshit Uppal, BramliAK, Adriano Machado, [gideon-sunbit](mailto:gideon.pertzov@sunbit.com), [Mckinney, Nicholas](mailto:mckinneynicholas@gmail.com), [Benjamin Muschko](mailto:benjamin.muschko@gmail.com), eocantu, [Avneesh Dubey](mailto:avneeshdubey1198@gmail.com), rob-valor, [Kyle Scully](mailto:scullykns@gmail.com)
