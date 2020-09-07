---
description: >-
  A tutorial showing how to use Rewrite to consistently statically import JUnit
  asserts and improve Spring framework usage.
---

# Getting Started

⏲ This tutorial will take you about 10 minutes to complete.

### Step 1: Clone the Sample Repository

This tutorial shows how to use Rewrite to consistently statically import JUnit asserts and improve Spring framework usage. To get started, clone the [Spring Petclinic Migration](https://github.com/openrewrite/spring-petclinic-migration) project.

{% hint style="success" %}
If you'd like to skip ahead to [Running the Fixes](https://github.com/openrewrite/spring-petclinic-migration#running-the-fixes), checkout the [tutorial](https://github.com/openrewrite/spring-petclinic-migration/tree/tutorial) branch, which is pre-configured and ready to run. 

You can also use the [tutorial ](https://github.com/openrewrite/spring-petclinic-migration/tree/tutorial)branch as a reference while you follow this tutorial.
{% endhint %}

```bash
git clone https://github.com/openrewrite/spring-petclinic-migration.git
```

For this tutorial we will be using the default branch, 1.5.x, which contains a slightly messier form of the famous [Spring PetClinic](https://github.com/spring-projects/spring-petclinic) sample. You will learn how to apply Rewrite to clean up this code. As we add additional Rewrite recipes in the future, you'll eventually be able to see this sample app automatically migrated to the latest Spring Boot 2.x version including dependencies!

{% hint style="warning" %}
This is an older repository that requires an older JDK version, JDK 8. If you don't have a version 8 JDK, you can get it [here](https://adoptopenjdk.net/?variant=openjdk8&jvmVariant=hotspot).
{% endhint %}

### Step 2: Add a Custom JUnit Recipe

Once you have cloned the Spring Petclinic Migration project, you first want to create a new YAML file in the root of the repository. The file will be named`rewrite.yml` and contain the following:

```text
type: specs.openrewrite.org/v1beta/visitor
name: io.moderne.junit.StaticJUnitAsserts
visitors:
  - org.openrewrite.java.UseStaticImport:
      method: org.junit.Assert assert*(..)
---
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.junit
include:
  - io.moderne.junit.StaticJUnitAsserts
```

You now have a YAML file containing two YAML documents \(the `---` in YAML separates documents inside a single YAML file\): a declarative Rewrite visitor and a recipe that includes that visitor.

{% hint style="info" %}
By _declarative_, we mean that this visitor and recipe are defined using only configuration markup \(YAML\). We didn't need to write code.
{% endhint %}

The first document, the visitor, is defined with type `specs.openrewrite.org/v1beta/visitor` and given the name `io.modernejunit.StaticJUnitAsserts`. Visitors may be composed of other visitors. For example, the custom visitor you've just created delegates to a building block visitor `org.openrewrite.java.UseStaticImport` that Rewrite provides out of the box. This sub-visitor has been told that any call to the receiver type `org.junit.Assert` whose method name begins with `assert` should be modified to use a static import.

The recipe is defined in another YAML document with type `specs.openrewrite.org/v1beta/recipe`. It's given a name `io.moderne.junit` that we will use to activate this recipe in our pom.xml. The recipe explicitly includes our new custom visitor.

{% hint style="info" %}
It is generally recommended to group the visitors for a recipe under a common package prefix \(in this case `io.moderne.junit`\) so that they are uniquely identifiable. This also allows you to wildcard several visitors at the same time in a recipe definition. For example, the `include` block in the recipe could be writtten `io.moderne.junit.*` to include more than one visitor with the same package prefix.
{% endhint %}

### Step 3: Add the Rewrite Maven Plugin

Next, you need to make sure Maven knows what the Rewrite maven plugin is by adding the following to your [pom.xml](https://github.com/openrewrite/spring-petclinic-migration/blob/1.5.x/pom.xml) file.

```markup
<plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>2.0.0</version>
    <configuration>
        <activeRecipes>
            <recipe>io.moderne.junit</recipe>
            <recipe>org.openrewrite.spring</recipe>
            <recipe>org.openrewrite.mockito</recipe>
        </activeRecipes>
    </configuration>
</plugin>
```

This maven plugin comes with a default set of recipes that can be activated at will. In this case, we're activating the `org.openrewrite.spring` and `org.openrewrite.mockito` recipes along with our custom `io.moderne.junit` recipes.

### Step 4: Run the Rewrite Plugin

Now that everything is set up, we can run the Rewrite plugin by using`./mvnw rewrite:fix` to apply the recipes, which will make changes to the source code of the repository. In a real-world scenario, you'd review these changes and perform whatever checks you'd like and then commit them when you are comfortable that they are accurate. The set of recipes that are provided for you by Rewrite are intended to always produce 100% accurate fixes that don't require any manual intervention.

{% hint style="info" %}
Similar build tasks exist for Gradle as well. See [Rewrite Gradle Plugin](configuring/rewrite-gradle-plugin.md) for more about how to do  the same in a Gradle project.
{% endhint %}

#### What is happening when we run this?

When you run `./mvnw rewrite:fix` Maven first looks in the pom.xml file where we defined the Rewrite plugin in Step 3. That definition included where Maven can find the Rewrite config file that we created in Step 2. That config file, `rewrite.yml`, outlines the recipe that the Rewrite plugin should apply.

Knowing all of this, the Rewrite plugin can take in the following source code.

```java
import org.junit.Assert;
...

Assert.assertTrue(condition);
```

Rewrite parses this input into an AST, applies the changes specified within the `com.yourorg.junit` recipe, and then prints the modified trees back into source code for your review as shown below.

```java
import static org.junit.Assert.assertTrue;
...

assertTrue(condition);
```

{% hint style="info" %}
The building-block visitor `UseStaticImport` is smart enough to know how to remove the old import if it is no longer used, add a new static import, and collapse several static imports of `org.junit.Assert` into a single static star import \(`import static org.junit.Assert.*`\) if the right number of imports is reached and vice versa.
{% endhint %}

### Step 5: Run `git diff` To See the Changes

The last step is to run `git diff` to see the changes Rewrite has made. For this example, running `git diff` shows how, among other changes, Rewrite has removed unnecessary `@Autowired` annotations from injectable constructors \(which is now implicit in Spring Boot\) and swapped the `@RequestMapping` annotation for `@GetMapping`, closing a [CSRF security vulnerability](https://find-sec-bugs.github.io/bugs.htm#SPRING_ENDPOINT) \(!!\).

![Git diff showing removal of unnecessary @Autowired and migration of @RequestMapping](.gitbook/assets/image%20%281%29.png)

### Next Steps

In [Abstract Syntax Trees](v1beta/abstract-syntax-trees.md), we'll provide a high-level overview of the data structure Rewrite uses to perform these kinds of transformations.

