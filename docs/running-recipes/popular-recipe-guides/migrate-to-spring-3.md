---
keywords: [OpenRewrite, Spring, Spring Boot Migration]
description: Automatically migrate from Spring Boot 2.x to Spring Boot 3.x
---

import ReactPlayer from 'react-player';

# Migrate to Spring Boot 3 from Spring Boot 2

In this tutorial, we'll use OpenRewrite to perform an automated migration from Spring Boot 2.x to Spring Boot 3.2.

## Configuration

See various ways you can configure your project to run this recipe on the [recipe reference page](../../recipes/java/spring/boot3/upgradespringboot_3_2.md). This is also where you can find the full list of changes it will make.

Once you've configured your project, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## Before and After

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
    <wro4j.version>1.10.1</wro4j.version>
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

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Using Moderne to upgrade Spring versions

<ReactPlayer url='https://www.youtube.com/watch?v=nz29-DWeV44' controls="true" />

