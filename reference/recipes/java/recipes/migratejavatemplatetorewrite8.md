# Migrate `JavaTemplate` to accommodate Rewrite 8

**org.openrewrite.java.recipes.MigrateJavaTemplateToRewrite8**

_Migrate `JavaTemplate` to accommodate Rewrite 8, due to wide open-ended usage of JavaTemplate, this recipe just apply most of common changes to pass compile and will leave some comments to require human's review._

### Tags

* Rewrite8 migration

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/recipes/MigrateJavaTemplateToRewrite8.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.3

## Example


{% tabs %}
{% tab title="org/openrewrite/java/AddOrUpdateAnnotationAttribute.java" %}

###### Before
{% code title="org/openrewrite/java/AddOrUpdateAnnotationAttribute.java" %}
```java
package org.openrewrite.java;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.java.tree.Expression;
import org.openrewrite.java.tree.J;
import java.util.List;

@Value
@EqualsAndHashCode(callSuper = true)
public class AddOrUpdateAnnotationAttribute extends Recipe {
    @Override
    public String getDisplayName() {
        return "Add or update annotation attribute";
    }

    @Override
    public String getDescription() {
        return "Add or update annotation attribute.";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.Annotation visitAnnotation(J.Annotation a, ExecutionContext context) {
                String param1 = "test parameter 1";
                String param2 = "test parameter 2";
                List<Expression> currentArgs = a.getArguments();
                if (currentArgs == null || currentArgs.isEmpty()) {
                    return a.withTemplate(
                        JavaTemplate.builder(this::getCursor, "#{}")
                            .build(),
                        a.getCoordinates().replaceArguments(),
                        param1,
                        param2);
                }
                return a;
            }
        };
    }
}
```
{% endcode %}

###### After
{% code title="org/openrewrite/java/AddOrUpdateAnnotationAttribute.java" %}
```java
package org.openrewrite.java;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.java.tree.Expression;
import org.openrewrite.java.tree.J;
import java.util.List;

@Value
@EqualsAndHashCode(callSuper = true)
public class AddOrUpdateAnnotationAttribute extends Recipe {
    @Override
    public String getDisplayName() {
        return "Add or update annotation attribute";
    }

    @Override
    public String getDescription() {
        return "Add or update annotation attribute.";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.Annotation visitAnnotation(J.Annotation a, ExecutionContext context) {
                String param1 = "test parameter 1";
                String param2 = "test parameter 2";
                List<Expression> currentArgs = a.getArguments();
                if (currentArgs == null || currentArgs.isEmpty()) {
                    return JavaTemplate.builder("#{}")/*[Rewrite8 migration] contextSensitive() could be unnecessary, please follow the migration guide*/.contextSensitive()
                            .build().apply(/*[Rewrite8 migration] getCursor() could be updateCursor() if the J instance is updated, or it should be updated to point to the correct cursor, please follow the migration guide*/getCursor(),
                            a.getCoordinates().replaceArguments(),
                            param1,
                            param2);
                }
                return a;
            }
        };
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/openrewrite/java/AddOrUpdateAnnotationAttribute.java
+++ org/openrewrite/java/AddOrUpdateAnnotationAttribute.java
@@ -33,6 +33,5 @@
                List<Expression> currentArgs = a.getArguments();
                if (currentArgs == null || currentArgs.isEmpty()) {
-                   return a.withTemplate(
-                       JavaTemplate.builder(this::getCursor, "#{}")
-                           .build(),
-                       a.getCoordinates().replaceArguments(),
-                       param1,
-                       param2);
+                   return JavaTemplate.builder("#{}")/*[Rewrite8 migration] contextSensitive() could be unnecessary, please follow the migration guide*/.contextSensitive()
+                           .build().apply(/*[Rewrite8 migration] getCursor() could be updateCursor() if the J instance is updated, or it should be updated to point to the correct cursor, please follow the migration guide*/getCursor(),
+                           a.getCoordinates().replaceArguments(),
+                           param1,
+                           param2);
                }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.recipes.MigrateJavaTemplateToRewrite8")
}

repositories {
    mavenCentral()
}

```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.recipes.MigrateJavaTemplateToRewrite8</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.recipes.MigrateJavaTemplateToRewrite8
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](kun@moderne.io)
* [Mike Solomon](mike@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.recipes.MigrateJavaTemplateToRewrite8)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
