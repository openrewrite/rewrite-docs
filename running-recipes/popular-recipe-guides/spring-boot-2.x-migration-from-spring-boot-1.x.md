# Migrate to Spring Boot 2 from Spring Boot 1

In this guide we'll look at using OpenRewrite to perform an automated migration from SpringBoot 1 to SpringBoot 2.

## Example Configuration

The [UpgradeSpringBoot_2_7](/reference/recipes/java/spring/boot2/upgradespringboot_2_7.md) recipe has no required configuration options and can be activated directly after taking a dependency on [rewrite-spring](https://github.com/openrewrite/rewrite-spring) in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:latest-release"))
    rewrite("org.openrewrite.recipe:rewrite-spring")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<project>  
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.16.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:LATEST \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## Before and After

For the full list of changes this recipe will make, see its [reference page](/reference/recipes/java/spring/boot2/upgradespringboot_2_7.md).

### Request Mapping Annotations.

{% tabs %}
{% tab title="Before" %}
```bash
package org.springframework.samples.petclinic.owner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.util.Collection;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@Controller
class OwnerController {

    private static final String VIEWS_OWNER_CREATE_OR_UPDATE_FORM = "owners/createOrUpdateOwnerForm";
    private final OwnerRepository owners;

    @Autowired
    public OwnerController(OwnerRepository clinicService) {
        this.owners = clinicService;
    }

    @RequestMapping("/owners/{ownerId}/edit")
    public String initUpdateOwnerForm(@PathVariable("ownerId") int id, Model model) {
        Owner owner = this.owners.findById(id);
        model.addAttribute(owner);
        return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
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

    @RequestMapping("/owners/{ownerId}")
    public ModelAndView showOwner(@PathVariable("ownerId") int ownerId) {
        ModelAndView mav = new ModelAndView("owners/ownerDetails");
        mav.addObject(this.owners.findById(ownerId));
        return mav;
    }

}
```
{% endtab %}

{% tab title="After" %}
```bash
package org.springframework.samples.petclinic.owner;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.util.Collection;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@Controller
class OwnerController {

    private static final String VIEWS_OWNER_CREATE_OR_UPDATE_FORM = "owners/createOrUpdateOwnerForm";
    private final OwnerRepository owners;

    public OwnerController(OwnerRepository clinicService) {
        this.owners = clinicService;
    }

    @GetMapping("/owners/{ownerId}/edit")
    public String initUpdateOwnerForm(@PathVariable("ownerId") int id, Model model) {
        Owner owner = this.owners.findById(id);
        model.addAttribute(owner);
        return VIEWS_OWNER_CREATE_OR_UPDATE_FORM;
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

    @GetMapping("/owners/{ownerId}")
    public ModelAndView showOwner(@PathVariable int ownerId) {
        ModelAndView mav = new ModelAndView("owners/ownerDetails");
        mav.addObject(this.owners.findById(ownerId));
        return mav;
    }

}
```
{% endtab %}
{% endtabs %}

### Conditional Bean Configuration.

{% tabs %}
{% tab title="Before: ConditionalOnBean" %}
```java
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SchoolConfig {
    @Bean
    public DogSchool dogSchool() {
        return new DogSchool();
    }

    @Bean
    public CatSchool catSchool() {
        return new CatSchool();
    }

    @Bean
    @ConditionalOnBean({CatSchool.class, DogSchool.class})
    public VetSchool vetSchool() {
        return new VetSchool();
    }
}
```
{% endtab %}

{% tab title="After:  AnyNestedCondition" %}
```java
import org.springframework.boot.autoconfigure.condition.AnyNestedCondition;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SchoolConfig {
 @Bean
 public DogSchool dogSchool() {
  return new DogSchool();
 }

 @Bean
 public CatSchool catSchool() {
  return new CatSchool();
 }

 @Bean
 @Conditional(ConditionCatSchoolOrDogSchool.class)
 public VetSchool vetSchool() {
  return new VetSchool();
 }

 private static class ConditionCatSchoolOrDogSchool extends AnyNestedCondition {
  ConditionCatSchoolOrDogSchool() {
   super(ConfigurationPhase.REGISTER_BEAN);
  }

  @ConditionalOnBean(CatSchool.class)
  class CatSchoolCondition {
  }

  @ConditionalOnBean(DogSchool.class)
  class DogSchoolCondition {
  }
 }
}
```
{% endtab %}
{% endtabs %}

### Known Limitations

| Unsupported Functionality                                                                        | Issue                                                          |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| ConditionalOnAnyBean should create new CompilationUnit when the condition is on the parent class | [#34](https://github.com/openrewrite/rewrite-spring/issues/34) |
| JAXRS to Spring WebMVC annotations                                                               | [#69](https://github.com/openrewrite/rewrite-spring/issues/69) |
| `@EmbeddedKafkaRule` to `@EmbeddedKafka` test conversion                                         | [#75](https://github.com/openrewrite/rewrite-spring/issues/75) |
