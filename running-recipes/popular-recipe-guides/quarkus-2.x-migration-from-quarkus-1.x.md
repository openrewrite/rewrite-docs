# Migrate to Quarkus 2 from Quarkus 1

In this guide we'll look at using OpenRewrite to perform an automated migration from Quarkus 1.x to Quarkus 2.x.

## Example Configuration

The [Quarkus1to2Migration](/reference/recipes/java/quarkus/quarkus2/quarkus1to2migration.md) recipe has no required configuration options and can be activated directly after taking a dependency on [rewrite-quarkus](https://github.com/openrewrite/rewrite-quarkus) in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.quarkus.quarkus2.Quarkus1to2Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:2.2.1"))
    rewrite("org.openrewrite.recipe:rewrite-quarkus")
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
        <version>5.4.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.quarkus.quarkus2.Quarkus1to2Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>2.1.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## Before and After

Here we highlight a small number of the larger set of refactoring operations `Quarkus1to2Migration` automates. For the full list of changes, see the recipe's [reference documentation](../../reference/recipes/java/quarkus/quarkus2/quarkus1to2migration.md).

### Migrate Deprecated Mutiny APIs

{% tabs %}
{% tab title="Deprecated Mutiny APIs (Before)" %}
```java
package org.acme.demo.service;

import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;
import io.smallrye.mutiny.groups.MultiCollect;

import javax.enterprise.context.ApplicationScoped;
import java.time.Duration;
import java.util.List;
import java.util.concurrent.Executor;

@ApplicationScoped
public class FactorService {

    public static Uni<String> uniGreeting(String name) {
        return Uni.createFrom().item(name)
                .onItem()
                .apply(n -> String.format("Factor this %s", n));
    }

    public static Multi<String> greetings(int count, String name) {
        return Multi.createFrom().ticks().every(Duration.ofMillis(1))
                .onItem()
                .transform(n -> String.format("hello %s - %d", name, n))
                .transform()
                .byTakingFirstItems(count);
    }

    public static Uni<List<String>> collectItems(int count, String name) {
        Multi<String> multi = greetings(count, name);
        Uni<List<String>> uni = multi
                .collectItems()
                .asList();
        Executor e = command -> {
            System.out.print("something");
        };
        multi.subscribeOn(e);
        uni.subscribeOn(e);
        return uni;
    }

    public static MultiCollect<Long> hotStreamGreetings(int count, String name) {
        return Multi.createFrom().ticks().every(Duration.ofMillis(1))
                .transform()
                .toHotStream()
                .collectItems();
    }
}
```
{% endtab %}

{% tab title="Deprecated Mutiny APIs (After)" %}
```java
package org.acme.demo.service;

import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;
import io.smallrye.mutiny.groups.MultiCollect;

import javax.enterprise.context.ApplicationScoped;
import java.time.Duration;
import java.util.List;
import java.util.concurrent.Executor;

@ApplicationScoped
public class FactorService {

    public static Uni<String> uniGreeting(String name) {
        return Uni.createFrom().item(name)
                .onItem()
                .transform(n -> String.format("Factor this %s", n));
    }

    public static Multi<String> greetings(int count, String name) {
        return Multi.createFrom().ticks().every(Duration.ofMillis(1))
                .onItem()
                .transform(n -> String.format("hello %s - %d", name, n))
                .select()
                .first(count);
    }

    public static Uni<List<String>> collectItems(int count, String name) {
        Multi<String> multi = greetings(count, name);
        Uni<List<String>> uni = multi
                .collect()
                .asList();
        Executor e = command -> {
            System.out.print("something");
        };
        multi.runSubscriptionOn(e);
        uni.runSubscriptionOn(e);
        return uni;
    }

    public static MultiCollect<Long> hotStreamGreetings(int count, String name) {
        return Multi.createFrom().ticks().every(Duration.ofMillis(1))
                .toHotStream()
                .collect();
    }
}
```
{% endtab %}
{% endtabs %}

### Migrate `io.quarkus.qute.api.*`

{% tabs %}
{% tab title="io.quarkus.qute.api.* (Before)" %}
```java
package org.acme.demo.misc;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;
import io.quarkus.qute.api.CheckedTemplate;
import io.quarkus.qute.api.ResourcePath;
import io.quarkus.scheduler.Scheduled;

public class ReportGenerator {
    @ResourcePath("reports/v1/report_01")
    Template report;

    @Scheduled(cron = "0 30 * * * ?")
    void generate() {
        String result = report
                .data("samples", new Object())
                .render();
    }
}

@CheckedTemplate
class HelloTemplate {
    public static native TemplateInstance hello(String name);
}
```
{% endtab %}

{% tab title="io.quarkus.qute.api.* (After)" %}
```java
package org.acme.demo.misc;

import io.quarkus.qute.CheckedTemplate;
import io.quarkus.qute.Location;
import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;
import io.quarkus.scheduler.Scheduled;

public class ReportGenerator {
    @Location("reports/v1/report_01")
    Template report;

    @Scheduled(cron = "0 30 * * * ?")
    void generate() {
        String result = report
                .data("samples", new Object())
                .render();
    }
}

@CheckedTemplate
class HelloTemplate {
    public static native TemplateInstance hello(String name);
}
```
{% endtab %}
{% endtabs %}

### Migrate `application.properties` keys and values

{% tabs %}
{% tab title="application.properties (Before)" %}
```markup
quarkus.dev.instrumentation=true
smallrye.jwt.sign.key-location=/keys/signing.pem
smallrye.jwt.encrypt.key-location=/keys/encrypt.pem
quarkus.quartz.force-start=true
quarkus.quartz.store-type=db
quarkus.neo4j.pool.metrics-enabled=true
# ...
# and other property keys/values as according to the Quarkus migration guide
```
{% endtab %}

{% tab title="application.properties (After)" %}
```markup
quarkus.live-reload.instrumentation=true
smallrye.jwt.sign.key.location=/keys/signing.pem
smallrye.jwt.encrypt.key.location=/keys/encrypt.pem
quarkus.quartz.start-mode=forced
quarkus.quartz.store-type=jdbc-cmt
quarkus.neo4j.pool.metrics.enabled=true
# ...
# and other property keys/values as according to the Quarkus migration guide
```
{% endtab %}
{% endtabs %}

### Known Limitations

| Unsupported Functionality                                                                                                     | Issue                                                           |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `@ConfigProperties`-annotated interfaces migrate to using `@ConfigMapping`, but not yet `@ConfigProperties`-annotated classes | [#24](https://github.com/openrewrite/rewrite-quarkus/issues/24) |
| [Kubernetes Client 5.4](https://github.com/quarkusio/quarkus/wiki/Migration-Guide-2.0#kubernetes-client)                      | -                                                               |
| [Vert.x 4.0](https://github.com/quarkusio/quarkus/wiki/Migration-Guide-2.0#vertx)                                             | -                                                               |
