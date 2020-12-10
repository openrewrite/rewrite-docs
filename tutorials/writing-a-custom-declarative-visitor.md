---
description: >-
  Assembling high-level refactoring constructs in a YAML file to perform a
  custom refactor.
---

# Writing a Custom Declarative Visitor

⏲ This tutorial will take you about 10 minutes to complete.

This tutorial shows how to use Rewrite to consistently statically import JUnit asserts, an example of a refactoring that can assembled from Rewrite's high-level building blocks without having to write code.

## Step 1: Clone the Sample Repository

This tutorial shows how to use Rewrite to consistently statically import JUnit asserts. To get started, clone the [Spring Petclinic Migration](https://github.com/openrewrite/spring-petclinic-migration) project.

```bash
git clone https://github.com/openrewrite/spring-petclinic-migration.git
```

## Step 2: Add a Custom JUnit Recipe

Once you have cloned the Spring Petclinic Migration project, you first want to create a new YAML file in the root of the repository. The file will be named`rewrite.yml` and contain the following:

```yaml
type: specs.openrewrite.org/v1beta/visitor
name: io.moderne.junit.StaticJUnitAsserts
visitors:
  - org.openrewrite.java.UseStaticImport:
      method: org.junit.Assert assert*(..)
---
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.JUnit
include:
  - io.moderne.junit.StaticJUnitAsserts
```

You now have a YAML file containing two YAML documents \(the `---` in YAML separates documents inside a single YAML file\): a declarative Rewrite visitor and a recipe that includes that visitor.

{% hint style="info" %}
By _declarative_, we mean that this visitor and recipe are defined using only configuration markup \(YAML\). We didn't need to write code.
{% endhint %}

The first document, the visitor, is defined with type `specs.openrewrite.org/v1beta/visitor` and given the name `io.modernejunit.StaticJUnitAsserts`. Visitors may be composed of other visitors. For example, the custom visitor you've just created delegates to a building block visitor `org.openrewrite.java.UseStaticImport` that Rewrite provides out of the box. This sub-visitor has been told that any call to the receiver type `org.junit.Assert` whose method name begins with `assert` should be modified to use a static import.

The recipe is defined in another YAML document with type `specs.openrewrite.org/v1beta/recipe`. It's given a name `io.moderne.JUnit` that we will use to activate this recipe in our pom.xml. The recipe explicitly includes our new custom visitor.

{% hint style="success" %}
It is generally recommended to group the visitors for a recipe under a common package prefix \(in this case `io.moderne.junit`\) so that they are uniquely identifiable. This also allows you to wildcard several visitors at the same time in a recipe definition. For example, the `include` block in the recipe could be writtten `io.moderne.junit.*` to include more than one visitor with the same package prefix.
{% endhint %}

## Step 3: Add the Rewrite Maven Plugin

Next, you need to make sure Maven knows what the Rewrite maven plugin is by adding the following to your [pom.xml](https://github.com/openrewrite/spring-petclinic-migration/blob/1.5.x/pom.xml) file.

```xml
<plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>2.4.1</version>
    <configuration>
        <activeRecipes>
            <recipe>io.moderne.JUnit</recipe>
        </activeRecipes>
    </configuration>
</plugin>
```

This maven plugin comes with a default set of recipes that can be activated at will. In this case, we're activating our custom `io.moderne.JUnit` recipe.

## Step 4: Run the Rewrite Plugin

Now that everything is set up, we can run the Rewrite plugin by using`./mvnw rewrite:fix` to apply the recipes, which will make changes to the source code of the repository. In a real-world scenario, you'd review these changes and perform whatever checks you'd like and then commit them when you are comfortable that they are accurate. The set of recipes that are provided for you by Rewrite are intended to always produce 100% accurate fixes that don't require any manual intervention.

{% hint style="info" %}
Similar build tasks exist for Gradle as well. See [Rewrite Gradle Plugin](../configuring/rewrite-gradle-plugin.md) for more about how to do the same in a Gradle project.
{% endhint %}

