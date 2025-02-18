---
sidebar_label: "Spring Boot 3.4 best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Spring Boot 3.4 best practices

**io.moderne.recipe.spring.boot3.SpringBoot3BestPractices**

_Applies best practices to Spring Boot 3.4+ applications._

### Tags

* spring
* boot

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).

## License

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview/).


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

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.recipe.spring.boot3.SpringBoot3BestPractices" />

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


## Contributors
Tyler Van Gorder, ashakirin, [Knut Wannheden](mailto:knut@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Alex Boyko](mailto:aboyko@vmware.com), Chuka Obinabo, [Joan Viladrosa](mailto:joan@moderne.io), [Laurens Westerlaken](mailto:laurens.w@live.nl), [Jonathan Schneider](mailto:jkschneider@gmail.com), Kun Li, Anu Ramamoorthy, [traceyyoshima](mailto:tracey.yoshima@gmail.com), Patrick Way, [Kyle Scully](mailto:scullykns@gmail.com), pdesprez, SiBorea, [Niels de Bruin](mailto:nielsdebruin@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), Simon Zilliken, [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Shannon Pamperl](mailto:shanman190@gmail.com), Cathy, BhavanaPidapa, [Curtis](mailto:curtis@mail.ustc.edu.cn), [Kun Li](mailto:kun@moderne.io), [Marcin Słowiak](mailto:m.slowiak@smartrecruiters.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Jacob van Lingen](mailto:jacobvanlingen@hotmail.com), [Jente Sondervorst](mailto:jentesondervorst@gmail.com), [Kevin McCarpenter](mailto:kevin@moderne.io), [Merlin Bögershausen](mailto:merlin.boegershausen@rwth-aachen.de), [Tim te Beek](mailto:timtebeek@gmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), Michel Gonzalez, Adam Slaski, Fabian Krüger, Aaron Gershman, [Johannes Jank](mailto:johannes.wengert@googlemail.com), [Marcin Słowiak](mailto:marcin.slowiak.007@gmail.com), Daryl Robbins, Evie Lau, [Laurens Westerlaken](mailto:laurens.westerlaken@jdriven.com), ranuradh, nbruno, [Jacob van Lingen](mailto:jacob.van.lingen@moderne.io), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), [Greg Adams](mailto:gadams@gmail.com), Sandeep Nagaraj, [Matthias Klauer](mailto:matthias.klauer@sap.com), [BoykoAlex](mailto:aboyko@pivotal.io), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Michael Keppler](mailto:bananeweizen@gmx.de), Tyler Van Gorder, [Greg Adams](mailto:greg@moderne.io), Aakarshit Uppal, Josh Soref, BramliAK, John Burns, eocantu, Adriano Machado, [gideon-sunbit](mailto:gideon.pertzov@sunbit.com), [Mckinney, Nicholas](mailto:mckinneynicholas@gmail.com)
