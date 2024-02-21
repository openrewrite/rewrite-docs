# Migrate to Spring Boot 3 from Spring Boot 2

In this tutorial, we'll use OpenRewrite to perform an automated migration from Spring Boot 2.x to Spring Boot 3.2.

## Example Configuration

The [Spring 3 migration recipe](/reference/recipes/java/spring/boot3/upgradespringboot_3_2.md) can be applied by adding OpenRewrite's plugin to your project and adding a dependency on [rewrite-spring](https://github.com/openrewrite/rewrite-spring):

{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.8.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.5.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.8.4") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.5.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2")
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
        <version>5.23.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.5.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeSpringBoot_3_2
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration, you can inspect the results by running `git diff`. As with all recipes, please take some time to look over the results and fix anything that wasn't able to be migrated automatically. Once you're confident in the changes, you can then commit the results.

## Before and After

For the full list of changes this recipe will make, see its [reference page](/reference/recipes/java/spring/boot3/upgradespringboot_3_2.md).

### Example Java Class

#### Before

```java
package org.openrewrite.example;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import org.springframework.beans.factory.annotation.Autowired;

public class OwnerController {
    ...

    @Autowired
    public OwnerController(OwnerRepository clinicService) {
        this.owners = clinicService;
    }

    @RequestMapping(value = "/owners/what")
    public String getWhat() {
        return "multiple method types omg";
    }

    @ModelAttribute("owner")
    public Owner findOwner(@PathVariable("ownerId") int ownerId) {
        return this.owners.findById(ownerId);
    }

    @RequestMapping(value = "/owners/{ownerId}/edit", method = POST)
    public String processUpdateOwnerForm(@Valid Owner owner, BindingResult result, @PathVariable("ownerId") int ownerId) {
        if (result.hasErrors()) {
            return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
        } else {
            owner.setId(ownerId);
            this.owners.save(owner);
            return "redirect:/owners/{ownerId}";
        }
    }

}
```

#### After

```java
package org.openrewrite.example;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass

public class OwnerController {
    ...

    public OwnerController(OwnerRepository clinicService) {
        this.owners = clinicService;
    }

    @GetMapping("/owners/what")
    public String getWhat() {
        return "multiple method types omg";
    }

    @ModelAttribute("owner")
    public Owner findOwner(@PathVariable int ownerId) {
        return this.owners.findById(ownerId);
    }

    @PostMapping("/owners/{ownerId}/edit")
    public String processUpdateOwnerForm(@Valid Owner owner, BindingResult result, @PathVariable int ownerId) {
        if (result.hasErrors()) {
            return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
        } else {
            owner.setId(ownerId);
            this.owners.save(owner);
            return "redirect:/owners/{ownerId}";
        }
    }
}
```

### Example Java Test

#### Before

```java
package org.openrewrite.example;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

...

@RunWith(SpringRunner.class)
@WebMvcTest(OwnerController.class)
public class OwnerControllerTests {

    @Before
    public void setup() {
        ...
    }

    @Test
    public void testInitCreationForm() throws Exception {
        ...  
    }
}
```

#### After

```java
package org.openrewrite.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

...

@WebMvcTest(OwnerController.class)
class OwnerControllerTests {

    @BeforeEach
    void setup() {
        ...
    }

    @Test
    void testInitCreationForm() throws Exception {
        ...  
    }
}
```

### Example application.properties file

#### Before

```
spring.datasource.schema=classpath*:db/${database}/schema.sql
spring.datasource.data=classpath*:db/${database}/data.sql

management.contextPath=/manage
```

#### After

```
spring.sql.init.schema-locations=classpath*:db/${database}/schema.sql
spring.sql.init.data-locations=classpath*:db/${database}/data.sql

management.server.base-path=/manage
```

### Example maven pom.xml file

#### Before

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.1.18.RELEASE</version>
</parent>

<properties>
    <java.version>11</java.version>
    <wro4j.version>1.9.0</wro4j.version>
    <thymeleaf.version>3.0.15.RELEASE</thymeleaf.version>
</properties>

<dependencies>
    <dependency>
        <groupId>jakarta.inject</groupId>
        <artifactId>jakarta.inject-api</artifactId>
        <version>1.0.3</version>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
</dependencies>
```

#### After

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.2.0</version>
</parent>

<properties>
    <java.version>17</java.version>
    <wro4j.version>1.10.1</wro4j.version>
</properties>

<dependencies>
    <dependency>
       <groupId>jakarta.inject</groupId>
       <artifactId>jakarta.inject-api</artifactId>
       <version>2.1.1.MR</version>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
        <version>3.2.0</version>
    </dependency>
</dependencies>
```
