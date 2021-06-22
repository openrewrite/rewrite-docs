# Migrate to Spring Boot 2 from Spring Boot 1

In this guide we'll look at using Rewrite to perform an automated migration from SpringBoot 1.x to SpringBoot 2.x

## What to Expect

This automated migration focuses on upgrading SpringBoot projects from 1.x to 2.x, it also includes a spring specific JUnit 4 to 5 migration along with several best practices such as replacing RequestMapping annotations with their request-method specific variant.

* Update Maven Dependencies
* Migrate Spring Boot Properties 2.0 -&gt; 2.X
* [NoRequestMappingAnnotation](https://docs.openrewrite.org/reference/recipes/java/spring/norequestmappingannotation). `@RequestMapping` annotations are replaced with request-method specific annotations`@GetMapping, @PostMapping, @PutMapping, @DeleteMapping`
* [ImplicitWebAnnotationNames](https://docs.openrewrite.org/reference/recipes/java/spring/implicitwebannotationnames). Removes implicit default parameter names and those matching their associated variable name.
* [NoAutowiredAnnotation](https://docs.openrewrite.org/reference/recipes/java/spring/noautowired).  `@Autowired` annotations are only required when multiple constructors exist.
* [ConditionalOnBeanAnyNestedCondition](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/conditionalonbeananynestedcondition). SpringBoot 2.x`@ConditionalOnBean` uses a logical AND rather than a logical OR when determining whether or not the condition has been met.  This recipe converts 1.x `@ContionalOnBean` to there `@ConditionalOnAnyBean` equivalent.
* [JUnit 4 to 5 migration for Spring-Boot projects](https://docs.openrewrite.org/tutorials/migrate-from-junit-4-to-junit-5#choosing-the-right-recipe) a superset of the normal JUnit 4 to 5 and Mockito 1 to 3 recipes, with some additional Spring-specific functionality
* [Many more](https://docs.openrewrite.org/reference/recipes/java/spring)

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

## Conditional Bean Configuration.

{% tabs %}
{% tab title="Before: ConditionalOnBean" %}
```text
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
```text
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

| Unsupported Functionality | Issue |
| :--- | :--- |
| ConditionalOnAnyBean should create new CompilationUnit when the condition is on the parent class | [\#34](https://github.com/openrewrite/rewrite-spring/issues/34) |
| JAXRS to Spring WebMVC annotations | [\#69](https://github.com/openrewrite/rewrite-spring/issues/69) |
| `@EmbeddedKafkaRule` to `@EmbeddedKafka` test conversion | [\#75](https://github.com/openrewrite/rewrite-spring/issues/75) |
| `NoAutowiredAnnotations` should preserve `@Autowired` constructor annotations when multipl constructors exist |  [\#78](https://github.com/openrewrite/rewrite-spring/issues/78) |

