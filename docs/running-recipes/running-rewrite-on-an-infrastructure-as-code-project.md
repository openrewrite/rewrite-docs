---
sidebar_label: Running Rewrite on an Infrastructure-as-Code project
description: How to run OpenRewrite recipes against Infrastructure-as-Code repositories — Terraform, Kubernetes manifests, Dockerfiles, CI workflows — that have no Maven or Gradle build file.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Running Rewrite on an Infrastructure-as-Code project

Infrastructure-as-Code (IaC) repositories typically have no `pom.xml` or `build.gradle`. That makes them awkward to run OpenRewrite against, because the `rewrite-maven-plugin` and `rewrite-gradle-plugin` are — by design — Maven and Gradle plugins, and need a host build to be invoked from.

OpenRewrite ships standalone parsers for the file types these repositories contain, so the recipes themselves can run; the only question is how to invoke them without a Java build. This guide uses **Terraform** as the running example because it has the richest ecosystem of OpenRewrite recipes and community tooling today, but the same three approaches work unchanged for any source that has a standalone parser:

| Source | Parser module | Notes |
|---|---|---|
| Terraform / OpenTofu / HCL (`.tf`, `.tfvars`, `.tofu`, `.hcl`) | [`rewrite-hcl`](https://github.com/openrewrite/rewrite/tree/main/rewrite-hcl) | Used as the running example below. See the [HCL recipe catalog](/recipes/hcl). |
| Kubernetes manifests, Helm charts | [`rewrite-yaml`](https://github.com/openrewrite/rewrite/tree/main/rewrite-yaml) | |
| Dockerfiles, Containerfiles | [`rewrite-docker`](https://github.com/openrewrite/rewrite/tree/main/rewrite-docker) | |
| GitHub Actions, GitLab CI workflows | [`rewrite-yaml`](https://github.com/openrewrite/rewrite/tree/main/rewrite-yaml) + [`rewrite-github-actions`](https://github.com/openrewrite/rewrite-github-actions) / [`rewrite-gitlab`](https://github.com/openrewrite/rewrite-gitlab) | |
| Protobuf (`.proto`) | [`rewrite-protobuf`](https://github.com/openrewrite/rewrite/tree/main/rewrite-protobuf) | Schema, not IaC, but the same pattern applies. |

Wherever the examples below reference `rewrite-hcl`, `HclParser`, or `.tf`, substitute the equivalent module, parser, and file extensions for your source type.

This guide covers three ways to apply recipes to such a repository, ordered from easiest to most flexible:

1. [Use the Moderne CLI](#option-1-moderne-cli) — least setup, no Java build knowledge required.
2. [Use a host Gradle project](#option-2-host-gradle-project) — pure OSS, the approach demonstrated in the [referenced community write-up](https://oczadly.io/posts/2026-04-23-refactoring-hcl-organization-wide-with-openrewrite/).
3. [Embed recipe execution in a standalone runner](#option-3-standalone-runner) — for users who want to integrate recipe execution into their own tooling.

## Option 1: Moderne CLI

The [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) (`mod`) is the easiest way to run OpenRewrite recipes against repositories that have no Java build. It builds a Lossless Semantic Tree (LST) from the repository's source files — for an IaC-only repository, no Java toolchain or build file is required — and then applies recipes against that LST.

:::note
The Moderne CLI is free to use against public repositories, but [requires a Moderne license](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/moderne-cli-license) to run recipes against private repositories. If your Terraform repo is private, choose Option 2 or 3 below, or contact Moderne about a license.
:::

```bash
# Build an LST for the Terraform repo
mod build path/to/terraform-repo

# Apply a recipe
mod run path/to/terraform-repo --recipe org.openrewrite.hcl.ReplaceLegacyAttributeIndexSyntax
```

See the [Moderne CLI documentation](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) for installation and the full set of subcommands.

## Option 2: Host Gradle project

If the Moderne CLI is not (yet) an option for you, the established OSS pattern is to create a *host* Gradle project that applies the OpenRewrite plugin, and to clone target Terraform repositories into a subdirectory of that host project. The Gradle plugin then walks the workspace and the `HclParser` picks up every `.hcl`, `.tf`, `.tfvars`, and `.tofu` file beneath it. The target Terraform repository itself remains untouched — it never gets a `build.gradle` of its own.

For a complete working setup, see [infra-at-scale/avm-openrewrite-migrations](https://github.com/infra-at-scale/avm-openrewrite-migrations) and the accompanying write-up [Refactoring HCL organization-wide with OpenRewrite](https://oczadly.io/posts/2026-04-23-refactoring-hcl-organization-wide-with-openrewrite/), which walks through the host `build.gradle.kts`, the `projects/` layout, and the workaround needed for the plugin to see `.tf` files past the host's `.gitignore` and the cloned repos' nested `.git/` directories.

<details>
<summary>Step-by-step walkthrough</summary>

#### Step 1: Create the host project

Create a new directory with a Gradle wrapper and the following `build.gradle.kts`:

```kotlin title="build.gradle.kts"
plugins {
    id("java-library")
    id("org.openrewrite.rewrite") version "latest.release"
}

repositories {
    mavenCentral()
}

dependencies {
    // Recipes that operate on HCL/Terraform — replace with whichever
    // recipe artifacts you intend to run.
    rewrite("org.openrewrite:rewrite-hcl:latest.release")
}
```

```kotlin title="settings.gradle.kts"
rootProject.name = "hcl-migrations"
```

#### Step 2: Clone target repositories into `projects/`

```bash
mkdir -p projects
git clone https://github.com/your-org/some-terraform-repo.git projects/some-terraform-repo
```

You can clone any number of repositories into `projects/`. The plugin will process all of them in a single run.

#### Step 3: Work around `.gitignore` and nested `.git`

Once you `git clone` a repo into `projects/`, two things on disk get in the plugin's way — independent of what the host repo tracks:

* The cloned repos each contain a real `.git/` directory. JGit treats any directory containing `.git/` as a separate repository and skips its contents during source discovery, so the `.tf` files inside never reach `HclParser`.
* The host project's own root `.gitignore` almost certainly lists `projects/` (or build outputs, `*.tf`, etc.) to keep cloned repos out of the host's history. The OpenRewrite plugin respects `.gitignore` via [`QuarkParser`](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/quark/QuarkParser.java) and turns every matching file into an unmodifiable Quark, so recipes see placeholders instead of HCL LSTs.

Add the following workaround to your `build.gradle.kts` so the plugin temporarily hides the host's root `.gitignore` and the nested `.git/` directories during the task, then restores them afterwards. `.gitignore` files *inside* the cloned repos are left alone — they typically ignore `.tfstate` and `.terraform/`, which you do want quarked.

```kotlin title="build.gradle.kts (continued)"
val hideGitignore = { file: File -> file.renameTo(File(file.parentFile, ".gitignore-backup")) }
val restoreGitignore = { file: File -> file.renameTo(File(file.parentFile, ".gitignore")) }

val hideGitDirs = { dir: String ->
    file(dir).walk().filter { it.isDirectory && it.name == ".git" }
        .forEach { it.renameTo(File(it.parentFile, ".git-backup")) }
}
val restoreGitDirs = { dir: String ->
    file(dir).walk().filter { it.isDirectory && it.name == ".git-backup" }
        .forEach { it.renameTo(File(it.parentFile, ".git")) }
}

listOf("rewriteRun", "rewriteDryRun").forEach { taskName ->
    tasks.named(taskName) {
        doFirst {
            hideGitDirs("projects")
            file(".gitignore").takeIf { it.exists() }?.let { hideGitignore(it) }
        }
        doLast {
            file(".gitignore-backup").takeIf { it.exists() }?.let { restoreGitignore(it) }
            restoreGitDirs("projects")
        }
    }
}
```

#### Step 4: Preview and apply recipes

```bash
# Preview without modifying any files
./gradlew rewriteDryRun -Drewrite.activeRecipes=org.openrewrite.hcl.ReplaceLegacyAttributeIndexSyntax

# Inspect the proposed changes
cat build/reports/rewrite/rewrite.patch

# Apply the changes
./gradlew rewriteRun -Drewrite.activeRecipes=org.openrewrite.hcl.ReplaceLegacyAttributeIndexSyntax
```

#### Step 5: Commit the changes in each target repository

Because the target repositories are independent git checkouts under `projects/`, commit the resulting changes from inside each one:

```bash
cd projects/some-terraform-repo
git add .
git commit -m "Apply OpenRewrite HCL recipe"
```

</details>

## Option 3: Standalone runner

If you need to embed recipe execution in your own tooling — a CI worker, a custom CLI, or a service — you can call OpenRewrite directly as a library. The HCL parser is self-contained and needs no build metadata. The example below requires **Java 17 or later** (it uses `Stream.toList()`), which is also the recommended baseline for running modern OpenRewrite recipes.

:::warning
The OpenRewrite parser and recipe-execution APIs used below are not guaranteed to be stable across releases. They may change without notice — use at your own risk, and prefer Options 1 or 2 if you don't need to embed execution yourself.
:::

<details>
<summary>Example standalone runner</summary>

```java
import org.openrewrite.*;
import org.openrewrite.config.Environment;
import org.openrewrite.hcl.HclParser;
import org.openrewrite.tree.ParseError;

import java.nio.file.*;
import java.util.*;
import java.util.stream.Stream;

public class HclRecipeRunner {
    public static void main(String[] args) throws Exception {
        Path dir = Paths.get(args[0]);
        String activeRecipe = args[1];

        HclParser parser = HclParser.builder().build();
        ExecutionContext ctx = new InMemoryExecutionContext(Throwable::printStackTrace);

        List<Parser.Input> inputs;
        try (Stream<Path> paths = Files.walk(dir)) {
            inputs = paths
                .filter(Files::isRegularFile)
                .filter(parser::accept)
                .map(p -> new Parser.Input(p, () -> {
                    try { return Files.newInputStream(p); }
                    catch (Exception e) { throw new RuntimeException(e); }
                }))
                .toList();
        }

        List<SourceFile> parsed = parser.parseInputs(inputs, dir, ctx)
            .filter(sf -> !(sf instanceof ParseError))
            .toList();

        Recipe recipe = Environment.builder()
            .scanRuntimeClasspath()
            .build()
            .activateRecipes(activeRecipe);

        RecipeRun run = recipe.run(new InMemoryLargeSourceSet(parsed), ctx);
        for (Result result : run.getChangeset().getAllResults()) {
            if (result.getAfter() == null) {
                Files.deleteIfExists(result.getBefore().getSourcePath());
            } else {
                Files.writeString(dir.resolve(result.getAfter().getSourcePath()),
                    result.getAfter().printAll());
            }
        }
    }
}
```

Package this as an executable jar with `rewrite-hcl` and any recipe artifacts on the classpath, and you have a self-contained command-line tool that applies OpenRewrite HCL recipes against any directory. Swap `HclParser` for `YamlParser`, `DockerParser`, or `ProtoParser` (and the corresponding `rewrite-*` artifact) to do the same against the other source types listed at the top of this guide.

</details>

## Authoring recipes for IaC sources

Writing custom recipes against any of the source types listed at the top of this guide follows the same patterns as Java recipes — see [Types of recipes](../authoring-recipes/types-of-recipes.md). Each language module is laid out the same way: the LST definition lives in `src/main/java/.../<lang>/tree`, and worked recipe examples live in `src/test/java/.../<lang>`. The easiest way to get started is to read the existing tests for your target language and adapt one.

Using Terraform/HCL as the concrete example: the [HCL LST](https://github.com/openrewrite/rewrite/tree/main/rewrite-hcl/src/main/java/org/openrewrite/hcl/tree) is defined under `rewrite-hcl/src/main/java/org/openrewrite/hcl/tree`, and for testing you can use `RewriteTest` with `HclParser.builder()` as the parser — see [`rewrite-hcl/src/test/java`](https://github.com/openrewrite/rewrite/tree/main/rewrite-hcl/src/test/java/org/openrewrite/hcl) for reference test cases. The equivalent locations for the other languages:

| Language | LST tree | Test examples |
|---|---|---|
| HCL / Terraform | [`rewrite-hcl/.../hcl/tree`](https://github.com/openrewrite/rewrite/tree/main/rewrite-hcl/src/main/java/org/openrewrite/hcl/tree) | [`rewrite-hcl/src/test/java`](https://github.com/openrewrite/rewrite/tree/main/rewrite-hcl/src/test/java/org/openrewrite/hcl) |
| YAML (Kubernetes, Helm, CI workflows) | [`rewrite-yaml/.../yaml/tree`](https://github.com/openrewrite/rewrite/tree/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/tree) | [`rewrite-yaml/src/test/java`](https://github.com/openrewrite/rewrite/tree/main/rewrite-yaml/src/test/java/org/openrewrite/yaml) |
| Docker | [`rewrite-docker/.../docker/tree`](https://github.com/openrewrite/rewrite/tree/main/rewrite-docker/src/main/java/org/openrewrite/docker/tree) | [`rewrite-docker/src/test/java`](https://github.com/openrewrite/rewrite/tree/main/rewrite-docker/src/test/java/org/openrewrite/docker) |
| Protobuf | [`rewrite-protobuf/.../protobuf/tree`](https://github.com/openrewrite/rewrite/tree/main/rewrite-protobuf/src/main/java/org/openrewrite/protobuf/tree) | [`rewrite-protobuf/src/test/java`](https://github.com/openrewrite/rewrite/tree/main/rewrite-protobuf/src/test/java/org/openrewrite/protobuf) |

For workflow-aware recipes that build on top of YAML (GitHub Actions, GitLab CI), see [`rewrite-github-actions`](https://github.com/openrewrite/rewrite-github-actions) and [`rewrite-gitlab`](https://github.com/openrewrite/rewrite-gitlab) for examples of recipes that match on workflow-specific structure rather than raw YAML.

For published recipe libraries you can depend on today:

* [Moderne Terraform recipe catalog](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/) — proprietary recipes available only to Moderne customers.
* [paweloczadly/openrewrite-recipes](https://github.com/paweloczadly/openrewrite-recipes) — community: generic HCL/OpenTofu transformations (change module versions, add/remove input variables).
* [infra-at-scale/avm-openrewrite-migrations](https://github.com/infra-at-scale/avm-openrewrite-migrations) — community: Azure Verified Module migration recipes.
