---
description: A tutorial showing how to use Rewrite
---

# Quickstart

This guide shows how to use Rewrite to automatically perform a Spring framework migration. To get started, clone the [Spring Petclinic Migration](https://github.com/openrewrite/spring-petclinic-migration) project.

```bash
git clone git@github.com:openrewrite/spring-petclinic-migration.git
```

The default branch \(1.5.x\) contains a slightly messier form of the last modification made to the famous [Spring PetClinic](https://github.com/spring-projects/spring-petclinic) sample in the Spring Boot 1.5.x line. You'll see how to apply Rewrite to tidy up some of this code. As we add additional Rewrite recipes, you'll eventually be able to see this sample app automatically migrated to the latest Spring Boot 2.x version including dependencies!

### What does Rewrite do?

Rewrite works by making changes to special [abstract syntax trees](https://en.wikipedia.org/wiki/Abstract_syntax_tree) \(AST\) of your source code and printing out those modified trees back into your repository for you to review the changes and commit. Modifications to the AST are performed in _visitors_ and visitors are aggregated into _recipes_. Rewrite recipes make minimally invasive changes to your source code that honors the original formatting.

For example, a recipe automating a Mockito 1 to Mockito 3 migration includes a number of individual visitors that fix individual breaking API changes that were made between Mockito 1 and Mockito 3.

In this example, we'll craft a custom JUnit recipe with a single visitor that will refactor any JUnit `assertXXX(..)` calls to use static imports.

### Instructions

First, clone this repository. If you'd like to skip ahead to [running the fixes](https://github.com/openrewrite/spring-petclinic-migration#running-the-fixes), checkout the [tutorial](https://github.com/openrewrite/spring-petclinic-migration/tree/tutorial) branch, which is pre-configured and ready to run.

#### Adding a custom JUnit recipe

Add a `rewrite.yml` file to the root of the repository with the following contents:

```text
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.junit.StaticJUnitAsserts
visitors:
  - org.openrewrite.java.UseStaticImport:
      method: org.junit.Assert assert*(..)
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.junit
include:
  - com.yourorg.junit.StaticJUnitAsserts
```

This single YAML file contains two YAML documents: a declarative Rewrite visitor and a recipe that includes that visitor. The visitor is defined with type `specs.openrewrite.org/v1beta/visitor` and given a name. Generally, group the visitors for a recipe under a common package prefix \(in this case `com.yourorg.junit.`\). Effectively, this is a custom visitor that delegates to a building-block visitor \(`org.openrewrite.java.UseStaticImport`\) that Rewrite provides out of the box. We're specifying that any method call to the receiver type `org.junit.Assert` whose method name begins with `assert` should use a static import.

So we're changing

```java
import org.junit.Assert;
...

Assert.assertTrue(condition);
```

to

```java
import static org.junit.Assert.assertTrue;
...

assertTrue(condition);
```

The building-block visitor `UseStaticImport` is smart enough to know how to remove the old import if it is no longer used, add a new static import, and collapse several static imports of `org.junit.Assert` into a single static star import \(`import static org.junit.Assert.*`\) if the right number of imports is reached and vice versa.

The recipe is defined in another YAML document with type `specs.openrewrite.org/v1beta/recipe`. It's given a name `com.yourorg.junit` that we will use to activate this recipe in our pom.xml. The recipe explicitly includes our new custom visitor.

#### Adding the Rewrite Maven plugin

Next, add the Rewrite maven plugin to your pom.xml:

```markup
<plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>2.0.0</version>
    <configuration>
        <activeRecipes>com.yourorg.junit, org.openrewrite.spring, org.openrewrite.mockito</activeRecipes>
        <configLocation>rewrite.yml</configLocation>
    </configuration>
</plugin>
```

The maven plugin packs with a default set of recipes that can be activated at will. In this case, we're activating the `org.openrewrite.spring` and `org.openrewrite.mockito` recipes along with our custom `com.yourorg.junit` recipes.

#### Running the fixes

Run `./mvnw rewrite:fix` to run the recipes, which will make changes to the source code of the repository. In a real-world scenario, you'd review these changes and perform whatever checks you'd like and then commit them when you are comfortable that they are accurate. The set of recipes that are provided for you by Rewrite are intended to always produce 100% accurate fixes that don't require any manual intervention.

#### Run `git diff` to see the changes

The diff shows how, among other changes, Rewrite has removed unnecessary `@Autowired` annotations from injectable constructors \(which is now implicit in Spring Boot\) and swapped the `@RequestMapping` annotation for `@GetMapping`, closing a [CSRF security vulnerability](https://find-sec-bugs.github.io/bugs.htm#SPRING_ENDPOINT) \(!!\).

![Git diff showing removal of unnecessary @Autowired and migration of @RequestMapping](.gitbook/assets/image%20%281%29.png)

