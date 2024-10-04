---
sidebar_label: "Find secrets"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find secrets

**org.openrewrite.java.security.secrets.FindSecrets**

_Locates secrets stored in plain text in code._

### Tags

* security

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/resources/META-INF/rewrite/secrets.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.13.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.13.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Find Artifactory secrets](../../../java/security/secrets/findartifactorysecrets)
* [Find AWS secrets](../../../java/security/secrets/findawssecrets)
* [Find Azure secrets](../../../java/security/secrets/findazuresecrets)
* [Find Discord secrets](../../../java/security/secrets/finddiscordsecrets)
* [Find generic secrets](../../../java/security/secrets/findgenericsecrets)
* [Find GitHub secrets](../../../java/security/secrets/findgithubsecrets)
* [Find Google secrets](../../../java/security/secrets/findgooglesecrets)
* [Find Heroku secrets](../../../java/security/secrets/findherokusecrets)
* [Find JWT secrets](../../../java/security/secrets/findjwtsecrets)
* [Find MailChimp secrets](../../../java/security/secrets/findmailchimpsecrets)
* [Find Mailgun secrets](../../../java/security/secrets/findmailgunsecrets)
* [Find NPM secrets](../../../java/security/secrets/findnpmsecrets)
* [Find passwords used in URLs](../../../java/security/secrets/findpasswordinurlsecrets)
* [Find PayPal secrets](../../../java/security/secrets/findpaypalsecrets)
* [Find PGP secrets](../../../java/security/secrets/findpgpsecrets)
* [Find Picatic secrets](../../../java/security/secrets/findpicaticsecrets)
* [Find RSA private keys](../../../java/security/secrets/findrsasecrets)
* [Find SendGrid secrets](../../../java/security/secrets/findsendgridsecrets)
* [Find Slack secrets](../../../java/security/secrets/findslacksecrets)
* [Find Square secrets](../../../java/security/secrets/findsquaresecrets)
* [Find SSH secrets](../../../java/security/secrets/findsshsecrets)
* [Find Stripe secrets](../../../java/security/secrets/findstripesecrets)
* [Find Telegram secrets](../../../java/security/secrets/findtelegramsecrets)
* [Find Twilio secrets](../../../java/security/secrets/findtwiliosecrets)
* [Find Twitter secrets](../../../java/security/secrets/findtwittersecrets)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.secrets.FindSecrets
displayName: Find secrets
description: Locates secrets stored in plain text in code.
tags:
  - security
recipeList:
  - org.openrewrite.java.security.secrets.FindArtifactorySecrets
  - org.openrewrite.java.security.secrets.FindAwsSecrets
  - org.openrewrite.java.security.secrets.FindAzureSecrets
  - org.openrewrite.java.security.secrets.FindDiscordSecrets
  - org.openrewrite.java.security.secrets.FindGenericSecrets
  - org.openrewrite.java.security.secrets.FindGitHubSecrets
  - org.openrewrite.java.security.secrets.FindGoogleSecrets
  - org.openrewrite.java.security.secrets.FindHerokuSecrets
  - org.openrewrite.java.security.secrets.FindJwtSecrets
  - org.openrewrite.java.security.secrets.FindMailChimpSecrets
  - org.openrewrite.java.security.secrets.FindMailgunSecrets
  - org.openrewrite.java.security.secrets.FindNpmSecrets
  - org.openrewrite.java.security.secrets.FindPasswordInUrlSecrets
  - org.openrewrite.java.security.secrets.FindPayPalSecrets
  - org.openrewrite.java.security.secrets.FindPgpSecrets
  - org.openrewrite.java.security.secrets.FindPicaticSecrets
  - org.openrewrite.java.security.secrets.FindRsaSecrets
  - org.openrewrite.java.security.secrets.FindSendGridSecrets
  - org.openrewrite.java.security.secrets.FindSlackSecrets
  - org.openrewrite.java.security.secrets.FindSquareSecrets
  - org.openrewrite.java.security.secrets.FindSshSecrets
  - org.openrewrite.java.security.secrets.FindStripeSecrets
  - org.openrewrite.java.security.secrets.FindTelegramSecrets
  - org.openrewrite.java.security.secrets.FindTwilioSecrets
  - org.openrewrite.java.security.secrets.FindTwitterSecrets

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-security:2.13.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.24.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.secrets.FindSecrets")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:2.13.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.24.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-java-security:2.13.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.security.secrets.FindSecrets")
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
        <version>5.41.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.secrets.FindSecrets</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>2.13.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-security:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.security.secrets.FindSecrets -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindSecrets
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.java.security.secrets.FindSecrets">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

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
[Jonathan Schnéider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut@moderne.io)
