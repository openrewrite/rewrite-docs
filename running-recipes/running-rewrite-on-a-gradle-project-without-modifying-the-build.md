# Running Rewrite on a Gradle project without modifying the build

In this tutorial, we will apply a Rewrite recipe to a source code repository built with Gradle without modifying the build itself. We will use a [Gradle init script](https://docs.gradle.org/current/userguide/init\_scripts.html) to accomplish this.

### Step 1: Clone a repository

To have a reproducible example, we'll start with a repository generated from [Spring Initializr](https://start.spring.io). Select the "Gradle Project" option, click Generate, and extract the resultant zip file.

<figure><img src="../.gitbook/assets/image (24).png" alt=""><figcaption></figcaption></figure>

### Step 2: Create a Gradle init script.

Save the following init script. It does not need to be in the project directory itself. In the `allprojects` block, we are specifying a dependency that contains Rewrite recipes (`rewrite-java`), and are also configuring a custom recipe YAML for use. For the full range of options, see [Gradle Plugin Configuration](/reference/gradle-plugin-configuration.md).

```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }

    dependencies {
        classpath("org.openrewrite:plugin:latest.release")
    }
}

addListener(new BuildInfoPluginListener())

allprojects {
    project.afterEvaluate {
        if (!project.plugins.hasPlugin(org.openrewrite.gradle.RewritePlugin)) {
            project.plugins.apply(org.openrewrite.gradle.RewritePlugin)
        }
    }
    dependencies {
      rewrite("org.openrewrite:rewrite-java")
    }
    rewrite {
      configFile = project.getRootProject().file("rewrite.yml")
      activeRecipe("org.openrewrite.FindSpringUses")
    }
}

class BuildInfoPluginListener extends BuildAdapter {

    def void projectsLoaded(Gradle gradle) {
        Project root = gradle.getRootProject()
        if (!"buildSrc".equals(root.name)) {
            root.allprojects {
                apply {
                    apply plugin: org.openrewrite.gradle.RewritePlugin
                }
            }
        }
    }
}
```

### Step 3 (optional): Create the custom recipe YAML

The init script as configured above depends on a `rewrite.yml` that exists in the root of the project directory.

```yaml
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.FindSpringUses
displayName: Find all Spring uses
description: This is an example of a custom recipe.
recipeList:
  - org.openrewrite.java.search.FindMethods:
      methodPattern: org.springframework..* *(..)
```

### Step 4: Run the recipe

At this point, you are able to run the Rewrite gradle plugin as normal (with an additional `--init-gradle` argument). Note that we did not modify the project's build script. This same init script can then be used to apply this same recipe to a set of projects cloned locally without changing their contents.

```
./gradlew --init-script init.gradle rewriteRun
```
