---
sidebar_label: "Migrate all Maven and Gradle groupIds and artifactIds from OptaPlanner to Timefold"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate all Maven and Gradle groupIds and artifactIds from OptaPlanner to Timefold

**ai.timefold.solver.migration.fork.TimefoldChangeDependencies**

_Migrate all Maven and Gradle groupIds and artifactIds from OptaPlanner to Timefold._

## Recipe source

[GitHub](https://github.com/search?type=code&q=ai.timefold.solver.migration.fork.TimefoldChangeDependencies), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-parent`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-parent`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-parent`
  * newArtifactId: `timefold-solver-parent`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-bom`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-bom`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-bom`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-bom`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-bom`
  * newArtifactId: `timefold-solver-bom`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-ide-config`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-ide-config`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-ide-config`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-ide-config`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-ide-config`
  * newArtifactId: `timefold-solver-ide-config`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-build-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-build-parent`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-build-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-build-parent`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-build-parent`
  * newArtifactId: `timefold-solver-build-parent`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-core-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-core-parent`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-core-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-core-parent`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-core-parent`
  * newArtifactId: `timefold-solver-core-parent`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-core-impl`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-core-impl`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-core-impl`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-core-impl`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-core-impl`
  * newArtifactId: `timefold-solver-core-impl`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-constraint-streams-common`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-constraint-streams-common`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-constraint-streams-common`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-constraint-streams-common`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-constraint-streams-common`
  * newArtifactId: `timefold-solver-constraint-streams-common`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-constraint-streams-bavet`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-constraint-streams-bavet`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-constraint-streams-bavet`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-constraint-streams-bavet`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-constraint-streams-bavet`
  * newArtifactId: `timefold-solver-constraint-streams-bavet`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-constraint-streams-drools`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-constraint-streams-drools`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-constraint-streams-drools`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-constraint-streams-drools`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-constraint-streams-drools`
  * newArtifactId: `timefold-solver-constraint-streams-drools`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-constraint-drl`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-constraint-drl`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-constraint-drl`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-constraint-drl`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-constraint-drl`
  * newArtifactId: `timefold-solver-constraint-drl`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-core`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-core`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-core`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-core`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-core`
  * newArtifactId: `timefold-solver-core`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-persistence-parent`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-persistence-parent`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-persistence`
  * newArtifactId: `timefold-solver-persistence-parent`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-common`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-persistence-common`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-common`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-persistence-common`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-persistence-common`
  * newArtifactId: `timefold-solver-persistence-common`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-xstream`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-xstream`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-xstream`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-xstream`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-persistence-xstream`
  * newArtifactId: `timefold-solver-xstream`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-jaxb`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-jaxb`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-jaxb`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-jaxb`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-persistence-jaxb`
  * newArtifactId: `timefold-solver-jaxb`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-jackson`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-jackson`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-jackson`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-jackson`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-persistence-jackson`
  * newArtifactId: `timefold-solver-jackson`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-jpa`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-jpa`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-jpa`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-jpa`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-persistence-jpa`
  * newArtifactId: `timefold-solver-jpa`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-jsonb`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-jsonb`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-persistence-jsonb`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-jsonb`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-persistence-jsonb`
  * newArtifactId: `timefold-solver-jsonb`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-benchmark`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-benchmark`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-benchmark`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-benchmark`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-benchmark`
  * newArtifactId: `timefold-solver-benchmark`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-test`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-test`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-test`
  * newArtifactId: `timefold-solver-test`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-spring-integration`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-spring-integration`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-spring-integration`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-spring-integration`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-spring-integration`
  * newArtifactId: `timefold-solver-spring-integration`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-spring-boot-autoconfigure`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-spring-boot-autoconfigure`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-spring-boot-autoconfigure`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-spring-boot-autoconfigure`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-spring-boot-autoconfigure`
  * newArtifactId: `timefold-solver-spring-boot-autoconfigure`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-spring-boot-starter`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-spring-boot-starter`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-spring-boot-starter`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-spring-boot-starter`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-spring-boot-starter`
  * newArtifactId: `timefold-solver-spring-boot-starter`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-integration`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-integration`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-integration`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-integration`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-integration`
  * newArtifactId: `timefold-solver-quarkus-integration`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-parent`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-parent`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-parent`
  * newArtifactId: `timefold-solver-quarkus-parent`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus`
  * newArtifactId: `timefold-solver-quarkus`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-deployment`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-deployment`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-deployment`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-deployment`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-deployment`
  * newArtifactId: `timefold-solver-quarkus-deployment`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-integration-test`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-integration-test`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-integration-test`
  * newArtifactId: `timefold-solver-quarkus-integration-test`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-reflection-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-reflection-integration-test`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-reflection-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-reflection-integration-test`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-reflection-integration-test`
  * newArtifactId: `timefold-solver-quarkus-reflection-integration-test`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-devui-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-devui-integration-test`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-devui-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-devui-integration-test`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-devui-integration-test`
  * newArtifactId: `timefold-solver-quarkus-devui-integration-test`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-drl-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-drl-integration-test`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-drl-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-drl-integration-test`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-drl-integration-test`
  * newArtifactId: `timefold-solver-quarkus-drl-integration-test`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-benchmark-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-benchmark-parent`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-benchmark-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-benchmark-parent`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-benchmark-parent`
  * newArtifactId: `timefold-solver-quarkus-benchmark-parent`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-benchmark`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-benchmark`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-benchmark`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-benchmark`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-benchmark`
  * newArtifactId: `timefold-solver-quarkus-benchmark`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-benchmark-deployment`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-benchmark-deployment`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-benchmark-deployment`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-benchmark-deployment`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-benchmark-deployment`
  * newArtifactId: `timefold-solver-quarkus-benchmark-deployment`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-benchmark-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-benchmark-integration-test`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-benchmark-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-benchmark-integration-test`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-benchmark-integration-test`
  * newArtifactId: `timefold-solver-quarkus-benchmark-integration-test`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jackson-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jackson-parent`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jackson-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jackson-parent`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-jackson-parent`
  * newArtifactId: `timefold-solver-quarkus-jackson-parent`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jackson`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jackson`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jackson`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jackson`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-jackson`
  * newArtifactId: `timefold-solver-quarkus-jackson`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jackson-deployment`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jackson-deployment`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jackson-deployment`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jackson-deployment`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-jackson-deployment`
  * newArtifactId: `timefold-solver-quarkus-jackson-deployment`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jackson-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jackson-integration-test`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jackson-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jackson-integration-test`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-jackson-integration-test`
  * newArtifactId: `timefold-solver-quarkus-jackson-integration-test`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jsonb-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jsonb-parent`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jsonb-parent`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jsonb-parent`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-jsonb-parent`
  * newArtifactId: `timefold-solver-quarkus-jsonb-parent`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jsonb`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jsonb`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jsonb`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jsonb`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-jsonb`
  * newArtifactId: `timefold-solver-quarkus-jsonb`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jsonb-deployment`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jsonb-deployment`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jsonb-deployment`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jsonb-deployment`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-jsonb-deployment`
  * newArtifactId: `timefold-solver-quarkus-jsonb-deployment`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jsonb-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jsonb-integration-test`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-quarkus-jsonb-integration-test`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-quarkus-jsonb-integration-test`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-quarkus-jsonb-integration-test`
  * newArtifactId: `timefold-solver-quarkus-jsonb-integration-test`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-migration`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-migration`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-migration`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-migration`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-migration`
  * newArtifactId: `timefold-solver-migration`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-examples`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-examples`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-examples`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-examples`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-examples`
  * newArtifactId: `timefold-solver-examples`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-docs`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-docs`
* [Change Maven dependency](../../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.optaplanner`
  * oldArtifactId: `optaplanner-docs`
  * newGroupId: `ai.timefold.solver`
  * newArtifactId: `timefold-solver-docs`
  * overrideManagedVersion: `false`
  * changeManagedDependency: `true`
* [Change Gradle dependency artifact](../../../../../gradle/changedependencyartifactid)
  * groupId: `org.optaplanner`
  * artifactId: `optaplanner-docs`
  * newArtifactId: `timefold-solver-docs`
* [Change Gradle dependency group](../../../../../gradle/changedependencygroupid)
  * groupId: `org.optaplanner`
  * artifactId: `*`
  * newGroupId: `ai.timefold.solver`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: ai.timefold.solver.migration.fork.TimefoldChangeDependencies
displayName: Migrate all Maven and Gradle groupIds and artifactIds from OptaPlanner to Timefold
description: |
  Migrate all Maven and Gradle groupIds and artifactIds from OptaPlanner to Timefold.
recipeList:
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-parent
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-parent
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-parent
      newArtifactId: timefold-solver-parent
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-bom
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-bom
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-bom
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-bom
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-bom
      newArtifactId: timefold-solver-bom
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-ide-config
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-ide-config
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-ide-config
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-ide-config
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-ide-config
      newArtifactId: timefold-solver-ide-config
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-build-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-build-parent
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-build-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-build-parent
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-build-parent
      newArtifactId: timefold-solver-build-parent
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-core-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-core-parent
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-core-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-core-parent
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-core-parent
      newArtifactId: timefold-solver-core-parent
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-core-impl
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-core-impl
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-core-impl
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-core-impl
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-core-impl
      newArtifactId: timefold-solver-core-impl
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-constraint-streams-common
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-constraint-streams-common
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-constraint-streams-common
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-constraint-streams-common
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-constraint-streams-common
      newArtifactId: timefold-solver-constraint-streams-common
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-constraint-streams-bavet
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-constraint-streams-bavet
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-constraint-streams-bavet
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-constraint-streams-bavet
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-constraint-streams-bavet
      newArtifactId: timefold-solver-constraint-streams-bavet
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-constraint-streams-drools
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-constraint-streams-drools
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-constraint-streams-drools
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-constraint-streams-drools
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-constraint-streams-drools
      newArtifactId: timefold-solver-constraint-streams-drools
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-constraint-drl
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-constraint-drl
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-constraint-drl
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-constraint-drl
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-constraint-drl
      newArtifactId: timefold-solver-constraint-drl
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-core
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-core
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-core
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-core
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-core
      newArtifactId: timefold-solver-core
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-persistence-parent
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-persistence-parent
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-persistence
      newArtifactId: timefold-solver-persistence-parent
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-common
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-persistence-common
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-common
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-persistence-common
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-persistence-common
      newArtifactId: timefold-solver-persistence-common
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-xstream
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-xstream
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-xstream
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-xstream
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-persistence-xstream
      newArtifactId: timefold-solver-xstream
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-jaxb
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-jaxb
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-jaxb
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-jaxb
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-persistence-jaxb
      newArtifactId: timefold-solver-jaxb
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-jackson
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-jackson
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-jackson
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-jackson
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-persistence-jackson
      newArtifactId: timefold-solver-jackson
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-jpa
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-jpa
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-jpa
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-jpa
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-persistence-jpa
      newArtifactId: timefold-solver-jpa
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-jsonb
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-jsonb
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-persistence-jsonb
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-jsonb
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-persistence-jsonb
      newArtifactId: timefold-solver-jsonb
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-benchmark
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-benchmark
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-benchmark
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-benchmark
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-benchmark
      newArtifactId: timefold-solver-benchmark
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-test
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-test
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-test
      newArtifactId: timefold-solver-test
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-spring-integration
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-spring-integration
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-spring-integration
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-spring-integration
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-spring-integration
      newArtifactId: timefold-solver-spring-integration
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-spring-boot-autoconfigure
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-spring-boot-autoconfigure
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-spring-boot-autoconfigure
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-spring-boot-autoconfigure
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-spring-boot-autoconfigure
      newArtifactId: timefold-solver-spring-boot-autoconfigure
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-spring-boot-starter
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-spring-boot-starter
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-spring-boot-starter
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-spring-boot-starter
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-spring-boot-starter
      newArtifactId: timefold-solver-spring-boot-starter
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-integration
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-integration
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-integration
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-integration
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-integration
      newArtifactId: timefold-solver-quarkus-integration
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-parent
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-parent
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-parent
      newArtifactId: timefold-solver-quarkus-parent
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus
      newArtifactId: timefold-solver-quarkus
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-deployment
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-deployment
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-deployment
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-deployment
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-deployment
      newArtifactId: timefold-solver-quarkus-deployment
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-integration-test
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-integration-test
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-integration-test
      newArtifactId: timefold-solver-quarkus-integration-test
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-reflection-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-reflection-integration-test
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-reflection-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-reflection-integration-test
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-reflection-integration-test
      newArtifactId: timefold-solver-quarkus-reflection-integration-test
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-devui-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-devui-integration-test
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-devui-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-devui-integration-test
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-devui-integration-test
      newArtifactId: timefold-solver-quarkus-devui-integration-test
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-drl-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-drl-integration-test
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-drl-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-drl-integration-test
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-drl-integration-test
      newArtifactId: timefold-solver-quarkus-drl-integration-test
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-benchmark-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-benchmark-parent
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-benchmark-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-benchmark-parent
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-benchmark-parent
      newArtifactId: timefold-solver-quarkus-benchmark-parent
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-benchmark
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-benchmark
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-benchmark
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-benchmark
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-benchmark
      newArtifactId: timefold-solver-quarkus-benchmark
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-benchmark-deployment
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-benchmark-deployment
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-benchmark-deployment
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-benchmark-deployment
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-benchmark-deployment
      newArtifactId: timefold-solver-quarkus-benchmark-deployment
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-benchmark-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-benchmark-integration-test
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-benchmark-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-benchmark-integration-test
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-benchmark-integration-test
      newArtifactId: timefold-solver-quarkus-benchmark-integration-test
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jackson-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jackson-parent
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jackson-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jackson-parent
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-jackson-parent
      newArtifactId: timefold-solver-quarkus-jackson-parent
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jackson
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jackson
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jackson
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jackson
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-jackson
      newArtifactId: timefold-solver-quarkus-jackson
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jackson-deployment
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jackson-deployment
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jackson-deployment
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jackson-deployment
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-jackson-deployment
      newArtifactId: timefold-solver-quarkus-jackson-deployment
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jackson-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jackson-integration-test
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jackson-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jackson-integration-test
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-jackson-integration-test
      newArtifactId: timefold-solver-quarkus-jackson-integration-test
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jsonb-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jsonb-parent
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jsonb-parent
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jsonb-parent
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-jsonb-parent
      newArtifactId: timefold-solver-quarkus-jsonb-parent
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jsonb
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jsonb
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jsonb
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jsonb
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-jsonb
      newArtifactId: timefold-solver-quarkus-jsonb
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jsonb-deployment
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jsonb-deployment
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jsonb-deployment
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jsonb-deployment
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-jsonb-deployment
      newArtifactId: timefold-solver-quarkus-jsonb-deployment
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jsonb-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jsonb-integration-test
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-quarkus-jsonb-integration-test
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-quarkus-jsonb-integration-test
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-quarkus-jsonb-integration-test
      newArtifactId: timefold-solver-quarkus-jsonb-integration-test
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-migration
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-migration
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-migration
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-migration
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-migration
      newArtifactId: timefold-solver-migration
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-examples
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-examples
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-examples
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-examples
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-examples
      newArtifactId: timefold-solver-examples
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-docs
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-docs
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.optaplanner
      oldArtifactId: optaplanner-docs
      newGroupId: ai.timefold.solver
      newArtifactId: timefold-solver-docs
      overrideManagedVersion: false
      changeManagedDependency: true
  - org.openrewrite.gradle.ChangeDependencyArtifactId:
      groupId: org.optaplanner
      artifactId: optaplanner-docs
      newArtifactId: timefold-solver-docs
  - org.openrewrite.gradle.ChangeDependencyGroupId:
      groupId: org.optaplanner
      artifactId: "*"
      newGroupId: ai.timefold.solver

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
    activeRecipe("ai.timefold.solver.migration.fork.TimefoldChangeDependencies")
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
        activeRecipe("ai.timefold.solver.migration.fork.TimefoldChangeDependencies")
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
            <recipe>ai.timefold.solver.migration.fork.TimefoldChangeDependencies</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=ai.timefold.solver.migration.fork.TimefoldChangeDependencies -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe TimefoldChangeDependencies
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/ai.timefold.solver.migration.fork.TimefoldChangeDependencies" />

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
