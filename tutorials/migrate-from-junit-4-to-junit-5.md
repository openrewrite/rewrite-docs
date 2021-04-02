# Migrate from JUnit 4 to JUnit 5

In this tutorial we'll use Rewrite to perform an automated migration from the venerable [JUnit 4](https://junit.org/junit4/) testing framework to its successor [JUnit 5](https://junit.org/junit5/).

## What to Expect

This automated migration focuses on making 1 to 1 replacements of JUnit 4 classes, annotations and patterns with behaviorally equivalent JUnit 5 replacements. This includes:

* Replacing `org.junit.Test` with `org.junit.jupiter.api.Test`
  * Includes removing "expacted" and "timeout" arguments and adding JUnit 5 equivalents
* Replacing `org.junit.Assert` with `org.junit.jupiter.api.Assertions`
  * Includes changing the order of the method arguments to match the new methods
* Replacing `@Rule TemporaryFolder` fields with `@TempDir File` fields
  * Includes generating methods to account for methods provided by `TemporaryFolder` but not by `File`
* Dependency management \(Maven only\)
  * Remove JUnit 4 dependency from the pom.xml
  * Exclude JUnit 4 from any dependencies that may be bringing it in transitively
  * Add JUnit 5 dependencies
* Many more

### Before and After

{% tabs %}
{% tab title="JUnit 4 Test Class \(Before\)" %}
```java
package org.openrewrite.example;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.Test;
import org.junit.Rule;
import org.junit.rules.ExpectedException;
import org.junit.rules.TemporaryFolder;
import org.junit.rules.Timeout;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class ExampleJunitTestClass {

    @Rule
    public TemporaryFolder folder = new TemporaryFolder();

    @Before
    public void before() {
    }

    @AfterClass
    public static void afterClass() {
    }

    @Test(expected = RuntimeException.class)
    public void foo() throws IOException {
        File tempFile = folder.newFile();
        File tempFile2 = folder.newFile("filename");
        File tempDir = folder.getRoot();
        File tempDir2 = folder.newFolder("parent", "child");
        File tempDir3 = folder.newFolder("subdir");
        File tempDir4 = folder.newFolder();
        String foo = "foo";
        throw new RuntimeException(foo);
    }

    @Test(expected = IndexOutOfBoundsException.class)
    public void foo2() {
        int arr = new int[]{}[0];
    }

    @Rule
    public ExpectedException throwz = ExpectedException.none();

    @Test
    public void foo3() {
        throwz.expect(RuntimeException.class);
        throw new RuntimeException();
    }

    @Test
    public void assertsStuff() {
        Assert.assertEquals("One is one", 1, 1);
        Assert.assertArrayEquals("Empty is empty", new int[]{}, new int[]{});
        Assert.assertNotEquals("one is not two", 1, 2);
        Assert.assertFalse("false is false", false);
        Assert.assertTrue("true is true", true);
        Assert.assertEquals("foo is foo", "foo", "foo");
        Assert.assertNull("null is null", null);
        Assert.fail("fail");
    }

    @Test(timeout = 500)
    public void bar() { }
}
```
{% endtab %}

{% tab title="JUnit 5 Test Class \(After\)" %}
```java
package org.openrewrite.example;

import org.junit.jupiter.api.*;
import org.junit.jupiter.api.io.TempDir;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertThrows;

public class ExampleJunitTestClass {

    @TempDir
    File folder;

    @BeforeEach
    void before() {
    }

    @AfterAll
    static void afterClass() {
    }

    @Test
    void foo() throws IOException {
        assertThrows(RuntimeException.class, () -> {
            File tempFile = File.createTempFile("junit", null, folder);
            File tempFile2 = newFile(folder, "filename");
            File tempDir = folder;
            File tempDir2 = newFolder(folder, "parent", "child");
            File tempDir3 = newFolder(folder, "subdir");
            File tempDir4 = Files.createTempDirectory(folder.toPath(), "junit").toFile();
            String foo = "foo";
            throw new RuntimeException(foo);
        });
    }

    @Test
    void foo2() {
        assertThrows(IndexOutOfBoundsException.class, () -> {
            int arr = new int[]{}[0];
        });
    }

    @Test
    void foo3() {
        assertThrows(RuntimeException.class, () -> {
            throw new RuntimeException();
        });
    }

    @Test
    void assertsStuff() {
        Assertions.assertEquals(1, 1, "One is one");
        Assertions.assertArrayEquals(new int[]{}, new int[]{}, "Empty is empty");
        Assertions.assertNotEquals(1, 2, "one is not two");
        Assertions.assertFalse(false, "false is false");
        Assertions.assertTrue(true, "true is true");
        Assertions.assertEquals("foo", "foo", "foo is foo");
        Assertions.assertNull(null, "null is null");
        Assertions.fail("fail");
    }

    @Test
    @Timeout(500)
    void bar() {
    }

    private static File newFile(File root, String fileName) throws IOException {
        File file = new File(root, fileName);
        file.createNewFile();
        return file;
    }

    private static File newFolder(File root, String ... folders) throws IOException {
        File result = new File(root, String.join("/", folders));
        if (!result.mkdirs()) {
            throw new IOException("Couldn't create folders " + root);
        }
        return result;
    }
}
```
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Maven pom \(Before\)" %}
```markup
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.openrewrite.example</groupId>
    <artifactId>integration-testing</artifactId>
    <version>1.0</version>
    <name>integration-testing</name>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>com.googlecode.json-simple</groupId>
            <artifactId>json-simple</artifactId>
            <version>1.1.1</version>
        </dependency>
    </dependencies>
</project>
```
{% endtab %}

{% tab title="Maven pom \(After\)" %}
```markup
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.openrewrite.example</groupId>
    <artifactId>integration-testing</artifactId>
    <version>1.0</version>
    <name>integration-testing</name>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>com.googlecode.json-simple</groupId>
            <artifactId>json-simple</artifactId>
            <version>1.1.1</version>
            <exclusions>
                <exclusion>
                    <groupId>junit</groupId>
                    <artifactId>junit</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>5.7.1</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId>
            <version>5.7.1</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
If you want to know when dependency management for Gradle will be added to rewrite, follow [this issue](https://github.com/openrewrite/rewrite-roadmap/issues/7) on our roadmap.
{% endhint %}

### Known Limitations

Not every JUnit 4 feature or library has a direct JUnit 5 equivalent. In these cases manual changes will be required after the automation has run. This list is not comprehensive. Also see the rewrite-testing-frameworks [issue tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues).

| Unsupported Functionality | Issue |
| :--- | :--- |
| [Powermock](https://github.com/powermock/powermock) has no JUnit 5 equivalent | - |
| [Wiremock](https://github.com/tomakehurst/wiremock) has no JUnit 5 equivalent | - |
| The JUnit5 equivalent to JUnit4 ClassPathSuite is not yet released | [\#66](https://github.com/openrewrite/rewrite-testing-frameworks/issues/66) |
| org.junit.ComparisonFailure | [\#84](https://github.com/openrewrite/rewrite-testing-frameworks/issues/84) |
| org.junit.MethodRule | [\#83](https://github.com/openrewrite/rewrite-testing-frameworks/issues/83) |
| TestRule, TestWatcher, and Description | [\#60](https://github.com/openrewrite/rewrite-testing-frameworks/issues/60) |

Your code base may also have custom JUnit 4 Rules or Runners that will not be migrated automatically by our recipes. If your code base has a lot of customized JUnit 4 extensions, consider [writing your own recipe](writing-a-java-refactoring-recipe.md) to handle those and running it alongside this migration.

If you discover a shortcoming of this migration that should be covered, file an issue or submit a pull request on the [rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks) github project.

## Choosing the Right Recipe

JUnit is a popular tool that many other libraries and frameworks interact with. Rewrite supports some of the popular integrations, such as Mockito and Spring-Boot, out of the box.

If your project is a Spring or Spring-Boot project take a dependency on [rewrite-spring](https://github.com/openrewrite/rewrite-spring) and activate the recipe `org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration`.

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>3.1.0</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration</recipe>
    </activeRecipes>
  </configuration>
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-spring</artifactId>
      <version>4.0.2</version>
    </dependency>
  </dependencies>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite").version("3.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")
}

dependencies {
    compileOnly("org.openrewrite.recipe:rewrite-spring:4.0.2")

    // Other project dependencies
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="info" %}
`SpringBoot2JUnit4to5Migration`is a superset of the normal JUnit 4 to 5 and Mockito 1 to 3 recipes, with some additional Spring-specific functionality. If you activate this recipe it is not necessary to also activate the base JUnit or Mockito migration recipes. 
{% endhint %}

If your project is _not_ a Spring or Spring-Boot project take a dependency on [rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks) and activate the recipe `org.openrewrite.java.testing.junit5.JUnit5BestPractices`

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>3.1.0</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.testing.junit5.JUnit5BestPractices</recipe>
    </activeRecipes>
  </configuration>
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-testing-frameworks</artifactId>
      <version>1.1.0</version>
    </dependency>
  </dependencies>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite").version("3.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit5BestPractices")
}

dependencies {
    compileOnly("org.openrewrite.recipe:rewrite-testing-frameworks:1.1.0")

    // Other project dependencies
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point you're ready to execute the migration by running `mvn rewrite:fix` or `gradlew rewriteFix`. After running the migration you can inspect the results with `git diff` \(or equivalent\), manually fix anything that wasn't able to be migrated automatically, and commit the results.

