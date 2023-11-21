# Adds missing JDBC interface methods.

**org.openrewrite.java.migrate.JREJdbcInterfaceNewMethods**

_Add method implementations stubs to classes that implement JDBC interfaces._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-7.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.3.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.3.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.6")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JREJdbcInterfaceNewMethods")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.3.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.5.6") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.3.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.JREJdbcInterfaceNewMethods")
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
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JREJdbcInterfaceNewMethods</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.3.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.JREJdbcInterfaceNewMethods
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JREJdbcInterfaceNewMethods
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Adds missing method implementations.](../../java/migrate/addmissingmethodimplementation.md)
  * fullyQualifiedClassName: `java.sql.Connection`
  * methodPattern: `*..* abort(java.util.concurrent.Executor)`
  * methodTemplateString: `public void abort(java.util.concurrent.Executor executor) { 
	// TODO Auto-generated method stub
 }`
* [Adds missing method implementations.](../../java/migrate/addmissingmethodimplementation.md)
  * fullyQualifiedClassName: `java.sql.Connection`
  * methodPattern: `*..* getNetworkTimeout()`
  * methodTemplateString: `public int getNetworkTimeout() { 
	// TODO Auto-generated method stub
 return 0; }`
* [Adds missing method implementations.](../../java/migrate/addmissingmethodimplementation.md)
  * fullyQualifiedClassName: `java.sql.Connection`
  * methodPattern: `*..* getSchema()`
  * methodTemplateString: `public java.lang.String getSchema() { 
	// TODO Auto-generated method stub
 return null; }`
* [Adds missing method implementations.](../../java/migrate/addmissingmethodimplementation.md)
  * fullyQualifiedClassName: `java.sql.Connection`
  * methodPattern: `*..* setNetworkTimeout(java.util.concurrent.Executor)`
  * methodTemplateString: `public void setNetworkTimeout(java.util.concurrent.Executor executor, int milliseconds) { 
	// TODO Auto-generated method stub
 }`
* [Adds missing method implementations.](../../java/migrate/addmissingmethodimplementation.md)
  * fullyQualifiedClassName: `java.sql.Connection`
  * methodPattern: `*..* setSchema(java.lang.String)`
  * methodTemplateString: `public void setSchema(java.lang.String schema) throws java.sql.SQLException { 
	// TODO Auto-generated method stub
 }`
* [Adds missing method implementations.](../../java/migrate/addmissingmethodimplementation.md)
  * fullyQualifiedClassName: `java.sql.Driver`
  * methodPattern: `*..* getParentLogger()`
  * methodTemplateString: `public java.util.logging.Logger getParentLogger() { 
	// TODO Auto-generated method stub
 return null; }`
* [Adds missing method implementations.](../../java/migrate/addmissingmethodimplementation.md)
  * fullyQualifiedClassName: `java.sql.Statement`
  * methodPattern: `*..* closeOnCompletion()`
  * methodTemplateString: `public void closeOnCompletion() { 
	// TODO Auto-generated method stub
 }`
* [Adds missing method implementations.](../../java/migrate/addmissingmethodimplementation.md)
  * fullyQualifiedClassName: `java.sql.Statement`
  * methodPattern: `*..* isCloseOnCompletion()`
  * methodTemplateString: `public boolean isCloseOnCompletion() { 
	// TODO Auto-generated method stub
 return false; }`
* [Adds missing method implementations.](../../java/migrate/addmissingmethodimplementation.md)
  * fullyQualifiedClassName: `javax.sql.CommonDataSource`
  * methodPattern: `*..* getParentLogger()`
  * methodTemplateString: `public java.util.logging.Logger getParentLogger() { 
	// TODO Auto-generated method stub
 return null; }`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JREJdbcInterfaceNewMethods
displayName: Adds missing JDBC interface methods.
description: Add method implementations stubs to classes that implement JDBC interfaces.
recipeList:
  - org.openrewrite.java.migrate.AddMissingMethodImplementation:
      fullyQualifiedClassName: java.sql.Connection
      methodPattern: *..* abort(java.util.concurrent.Executor)
      methodTemplateString: public void abort(java.util.concurrent.Executor executor) { 
	// TODO Auto-generated method stub
 }
  - org.openrewrite.java.migrate.AddMissingMethodImplementation:
      fullyQualifiedClassName: java.sql.Connection
      methodPattern: *..* getNetworkTimeout()
      methodTemplateString: public int getNetworkTimeout() { 
	// TODO Auto-generated method stub
 return 0; }
  - org.openrewrite.java.migrate.AddMissingMethodImplementation:
      fullyQualifiedClassName: java.sql.Connection
      methodPattern: *..* getSchema()
      methodTemplateString: public java.lang.String getSchema() { 
	// TODO Auto-generated method stub
 return null; }
  - org.openrewrite.java.migrate.AddMissingMethodImplementation:
      fullyQualifiedClassName: java.sql.Connection
      methodPattern: *..* setNetworkTimeout(java.util.concurrent.Executor)
      methodTemplateString: public void setNetworkTimeout(java.util.concurrent.Executor executor, int milliseconds) { 
	// TODO Auto-generated method stub
 }
  - org.openrewrite.java.migrate.AddMissingMethodImplementation:
      fullyQualifiedClassName: java.sql.Connection
      methodPattern: *..* setSchema(java.lang.String)
      methodTemplateString: public void setSchema(java.lang.String schema) throws java.sql.SQLException { 
	// TODO Auto-generated method stub
 }
  - org.openrewrite.java.migrate.AddMissingMethodImplementation:
      fullyQualifiedClassName: java.sql.Driver
      methodPattern: *..* getParentLogger()
      methodTemplateString: public java.util.logging.Logger getParentLogger() { 
	// TODO Auto-generated method stub
 return null; }
  - org.openrewrite.java.migrate.AddMissingMethodImplementation:
      fullyQualifiedClassName: java.sql.Statement
      methodPattern: *..* closeOnCompletion()
      methodTemplateString: public void closeOnCompletion() { 
	// TODO Auto-generated method stub
 }
  - org.openrewrite.java.migrate.AddMissingMethodImplementation:
      fullyQualifiedClassName: java.sql.Statement
      methodPattern: *..* isCloseOnCompletion()
      methodTemplateString: public boolean isCloseOnCompletion() { 
	// TODO Auto-generated method stub
 return false; }
  - org.openrewrite.java.migrate.AddMissingMethodImplementation:
      fullyQualifiedClassName: javax.sql.CommonDataSource
      methodPattern: *..* getParentLogger()
      methodTemplateString: public java.util.logging.Logger getParentLogger() { 
	// TODO Auto-generated method stub
 return null; }

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.JREJdbcInterfaceNewMethods)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Chuka Obinabo
