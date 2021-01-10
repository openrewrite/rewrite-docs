---
description: >-
  A tutorial showing how to use Rewrite to consistently statically import JUnit
  asserts and improve Spring framework usage.
---

# Getting Started

⏲ This tutorial will take you about 5 minutes to complete.

## Step 1: Clone the Sample Repository

This tutorial shows how to use Rewrite to improve Spring framework usage. To get started, clone the [Spring Petclinic Migration](https://github.com/openrewrite/spring-petclinic-migration) project.

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

## Step 2: Add and Configure the Rewrite Maven Plugin

Next, you need to make sure Maven knows what the Rewrite maven plugin is by adding the following to your [pom.xml](https://github.com/openrewrite/spring-petclinic-migration/blob/1.5.x/pom.xml) file.

```markup
<plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>2.4.3</version>
    <configuration>
        <activeRecipes>
            <recipe>org.openrewrite.java.Spring</recipe>
            <recipe>org.openrewrite.java.Mockito</recipe>
        </activeRecipes>
    </configuration>
</plugin>
```

Now add a dependency on [rewrite-spring](https://github.com/openrewrite/rewrite-spring), a rewrite module containing recipes which automate spring best practices and spring boot 1 -&gt; 2 migration.

```markup
<dependency>
    <groupId>org.openrewrite.recipe</groupId>
    <artifactId>rewrite-spring</artifactId>
    <version>3.0.1</version>
    <scope>provided</scope>
</dependency>
```

Note that we put this dependency into Maven's "provided" scope, which means it is available only at compile time.

Also create a rewrite.yml file, which can be blank for now.

```text
> touch rewrite.yml
```

## Step 3: Run the Rewrite Plugin

Now that everything is set up, we can run the Rewrite plugin by using`./mvnw rewrite:fix` to apply the recipes, which will make changes to the source code of the repository. In a real-world scenario, you'd review these changes and perform whatever checks you'd like and then commit them when you are comfortable that they are accurate. The set of recipes that are provided for you by Rewrite are intended to always produce 100% accurate fixes that don't require any manual intervention.

{% hint style="info" %}
Similar build tasks exist for Gradle as well. See [Rewrite Gradle Plugin](rewrite-gradle-plugin.md) for more about how to do the same in a Gradle project.
{% endhint %}

### What is happening when we run this?

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

## Step 4: Run `git diff` To See the Changes

The last step is to run `git diff` to see the changes Rewrite has made. For this example, running `git diff` shows how, among other changes, Rewrite has removed unnecessary `@Autowired` annotations from injectable constructors \(which is now implicit in Spring Boot\) and swapped the `@RequestMapping` annotation for `@GetMapping`, closing a [CSRF security vulnerability](https://find-sec-bugs.github.io/bugs.htm#SPRING_ENDPOINT) \(!!\).

![Git diff showing removal of unnecessary @Autowired and migration of @RequestMapping](../.gitbook/assets/image%20%281%29%20%281%29%20%281%29.png)

## Next Steps

In [Abstract Syntax Trees](../v1beta/abstract-syntax-trees.md), we'll provide a high-level overview of the data structure Rewrite uses to perform these kinds of transformations.

