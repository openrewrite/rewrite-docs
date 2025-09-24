---
sidebar_label: "Find SSL socket configuration parameters"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find SSL socket configuration parameters

**io.moderne.cryptography.FindSSLSocketParameters**

_Finds SSLSocket setter method invocations and extracts their parameter values into a data table._

## Recipe source

[GitHub](https://github.com/moderneinc/rewrite-cryptography/blob/main/rewrite-cryptography/src/main/java/io/moderne/cryptography/FindSSLSocketParameters.java), 
[Issue Tracker](https://github.com/moderneinc/rewrite-cryptography/issues), 
[Maven Central](https://central.sonatype.com/artifact/io.moderne.recipe/rewrite-cryptography/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.net.ssl.SSLSocket;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.SSLParameters;

public class SSLParamsExample {
    public void configureWithParams() throws Exception {
        SSLSocketFactory factory = (SSLSocketFactory) SSLSocketFactory.getDefault();
        SSLSocket socket = (SSLSocket) factory.createSocket();
        SSLParameters params = new SSLParameters();
        params.setCipherSuites(new String[]{"TLS_AES_128_GCM_SHA256"});
        socket.setSSLParameters(params);
    }
}
```

###### After
```java
import javax.net.ssl.SSLSocket;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.SSLParameters;

public class SSLParamsExample {
    public void configureWithParams() throws Exception {
        SSLSocketFactory factory = (SSLSocketFactory) SSLSocketFactory.getDefault();
        SSLSocket socket = (SSLSocket) factory.createSocket();
        SSLParameters params = new SSLParameters();
        params.setCipherSuites(new String[]{"TLS_AES_128_GCM_SHA256"});
        /*~~>*/socket.setSSLParameters(params);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -11,1 +11,1 @@
        SSLParameters params = new SSLParameters();
        params.setCipherSuites(new String[]{"TLS_AES_128_GCM_SHA256"});
-       socket.setSSLParameters(params);
+       /*~~>*/socket.setSSLParameters(params);
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `io.moderne.recipe:rewrite-cryptography` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("io.moderne.cryptography.FindSSLSocketParameters")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("io.moderne.recipe:rewrite-cryptography:{{VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY}}")
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
        rewrite("io.moderne.recipe:rewrite-cryptography:{{VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY}}")
    }
    rewrite {
        activeRecipe("io.moderne.cryptography.FindSSLSocketParameters")
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
            <recipe>io.moderne.cryptography.FindSSLSocketParameters</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>io.moderne.recipe</groupId>
            <artifactId>rewrite-cryptography</artifactId>
            <version>{{VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=io.moderne.recipe:rewrite-cryptography:RELEASE -Drewrite.activeRecipes=io.moderne.cryptography.FindSSLSocketParameters -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindSSLSocketParameters
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-cryptography:{{VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.cryptography.FindSSLSocketParameters" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.cryptography.table.SSLSocketParametersTable" label="SSLSocketParametersTable">

### SSL socket parameters
**io.moderne.cryptography.table.SSLSocketParametersTable**

_SSLSocket setter method invocations and their configured parameters including cipher suites, protocols, and other SSL/TLS settings._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file containing the SSLSocket configuration |
| Line number | The line number where the setter method is called |
| Socket variable | The variable name or expression representing the SSLSocket |
| Method name | The setter method being called (e.g., setEnabledCipherSuites, setEnabledProtocols) |
| Parameters | The parameters passed to the setter method |

</TabItem>

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
