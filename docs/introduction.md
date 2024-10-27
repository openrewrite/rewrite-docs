---
description: Large-scale automated source code refactoring
slug: /
---

import ReactPlayer from 'react-player'

# Introduction to OpenRewrite by Moderne

OpenRewrite is an open-source automated refactoring ecosystem for source code, enabling developers to effectively eliminate technical debt within their repositories.

It consists of an auto-refactoring engine that runs prepackaged, open-source refactoring recipes for common framework migrations, security fixes, and stylistic consistency tasks – reducing your coding effort from hours or days to minutes. Build tool plugins like the [OpenRewrite Gradle plugin](/reference/gradle-plugin-configuration.md) and the [OpenRewrite Maven plugin](/reference/rewrite-maven-plugin.md) help you run these recipes on one repository at a time.

 While the original focus was on the Java language, the OpenRewrite community is continuously [expanding language and framework coverage](/reference/supported-languages.md). Thousands of great individuals and teams are working together to make software seamless to update and continuously secure.

 ## How does OpenRewrite work?

<ReactPlayer url='https://www.youtube.com/watch?v=nz29-DWeV44' controls="true" />

<br/>

OpenRewrite works by making changes to [Lossless Semantic Trees](concepts-and-explanations/lossless-semantic-trees.md) (LSTs) that represent your source code and printing the modified trees back into source code. You can then review the changes in your code and commit the results. Modifications to the LST are performed in [Visitors](concepts-and-explanations/visitors.md) and visitors are aggregated into [Recipes](concepts-and-explanations/recipes.md). OpenRewrite recipes make minimally invasive changes to your source code that honor the original formatting.

For example, if you want to consistently use static imports across all of your test files, rather than doing this manually, you could use the `UseStaticImport` visitor provided by OpenRewrite. Applied to the file below, you can see the changes this generates.

```Java
// Before OpenRewrite
import org.junit.Assert;

Assert.assertTrue(condition);
```

```java
// After OpenRewrite
import static org.junit.Assert.assertTrue;

assertTrue(condition);
```

<ReactPlayer url='https://www.youtube.com/watch?v=uViRlX-RahA' controls="true" />

## Get started

* If you want to jump right in and run recipes on some sample code, check out our [quickstart guide](/running-recipes/getting-started.md).
* If you want to learn how to create your own recipes, start with the [Recipe Development Environment guide](authoring-recipes/recipe-development-environment.md) and then work through the [Writing a Java Refactoring Recipe guide](authoring-recipes/writing-a-java-refactoring-recipe.md).
* If you have questions, join us in [Slack](https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA) or [Discord](https://discord.gg/xk3ZKrhWAb). We're happy to answer your questions directly.
* Check out our [community office hours](https://docs.moderne.io/user-documentation/community-office-hours) where we dive deep into key topics and answer community questions.
* Subscribe to our [YouTube channel](https://www.youtube.com/@Moderne-and-OpenRewrite) for great videos on OpenRewrite recipes.

## Refactoring at scale with Moderne

[Moderne](https://www.moderne.io/) is a commercial platform designed to run the OpenRewrite recipe catalog with incredible efficiency, supporting large codebases and multiple repositories. It's a place where platform teams and developers can collaborate to drive migrations across their codebases, mass-commit code fixes, and perform large-scale impact analyses.

See how Moderne and OpenRewrite work in different ways to transform your code:

<ReactPlayer url='https://www.youtube.com/watch?v=Q-ej2lCJHRs' controls="true" />

<br/>

Moderne freely runs an [open public service](https://www.moderne.io/try-moderne) for the benefit of tens of thousands of open-source projects. The platform can streamline your recipe customization and creation, enabling quick assembly and testing. It also includes a multi-repo command line interface (CLI) to enable developers to run and customize recipes locally.

To understand better how Moderne can help your team, [contact us](https://www.moderne.io/contact-us).
