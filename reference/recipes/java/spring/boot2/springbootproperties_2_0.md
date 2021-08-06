# Migrate Spring Boot properties to 2.0

 **org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_0** _Migrate properties found in `application.properties` and `application.yml`._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.8.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.5.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_0")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.8.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.8.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_0</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.8.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.SpringBootProperties_2_0`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.main.show-banner`
  * newPropertyKey: `spring.main.banner-mode`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.main.show-banner`
  * newPropertyKey: `spring.main.banner-mode`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.main.web-environment`
  * newPropertyKey: `spring.main.web-application-type`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.main.web-environment`
  * newPropertyKey: `spring.main.web-application-type`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `banner.charset`
  * newPropertyKey: `spring.banner.charset`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `banner.charset`
  * newPropertyKey: `spring.banner.charset`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `banner.image.height`
  * newPropertyKey: `spring.banner.image.height`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `banner.image.height`
  * newPropertyKey: `spring.banner.image.height`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `banner.image.invert`
  * newPropertyKey: `spring.banner.image.invert`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `banner.image.invert`
  * newPropertyKey: `spring.banner.image.invert`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `banner.image.location`
  * newPropertyKey: `spring.banner.image.location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `banner.image.location`
  * newPropertyKey: `spring.banner.image.location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `banner.image.margin`
  * newPropertyKey: `spring.banner.image.margin`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `banner.image.margin`
  * newPropertyKey: `spring.banner.image.margin`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `banner.image.width`
  * newPropertyKey: `spring.banner.image.width`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `banner.image.width`
  * newPropertyKey: `spring.banner.image.width`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `banner.location`
  * newPropertyKey: `spring.banner.location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `banner.location`
  * newPropertyKey: `spring.banner.location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `security.filter-dispatcher-types`
  * newPropertyKey: `spring.security.filter.dispatcher-types`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `security.filter-dispatcher-types`
  * newPropertyKey: `spring.security.filter.dispatcher-types`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `security.filter-order`
  * newPropertyKey: `spring.security.filter.order`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `security.filter-order`
  * newPropertyKey: `spring.security.filter.order`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.repositories.enabled`
  * newPropertyKey: `spring.data.cassandra.repositories.type`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.repositories.enabled`
  * newPropertyKey: `spring.data.cassandra.repositories.type`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.data.couchbase.repositories.enabled`
  * newPropertyKey: `spring.data.couchbase.repositories.type`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.data.couchbase.repositories.enabled`
  * newPropertyKey: `spring.data.couchbase.repositories.type`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.data.mongodb.repositories.enabled`
  * newPropertyKey: `spring.data.mongodb.repositories.type`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.data.mongodb.repositories.enabled`
  * newPropertyKey: `spring.data.mongodb.repositories.type`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.jta.bitronix.properties.background-recovery-interval`
  * newPropertyKey: `spring.jta.bitronix.properties.background-recovery-interval-seconds`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.jta.bitronix.properties.background-recovery-interval`
  * newPropertyKey: `spring.jta.bitronix.properties.background-recovery-interval-seconds`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.mvc.media-types`
  * newPropertyKey: `spring.mvc.contentnegotiation.media-types`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.mvc.media-types`
  * newPropertyKey: `spring.mvc.contentnegotiation.media-types`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.baseline-description`
  * newPropertyKey: `spring.flyway.baseline-description`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.baseline-description`
  * newPropertyKey: `spring.flyway.baseline-description`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.baseline-on-migrate`
  * newPropertyKey: `spring.flyway.baseline-on-migrate`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.baseline-on-migrate`
  * newPropertyKey: `spring.flyway.baseline-on-migrate`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.baseline-version`
  * newPropertyKey: `spring.flyway.baseline-version`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.baseline-version`
  * newPropertyKey: `spring.flyway.baseline-version`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.check-location`
  * newPropertyKey: `spring.flyway.check-location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.check-location`
  * newPropertyKey: `spring.flyway.check-location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.clean-on-validation-error`
  * newPropertyKey: `spring.flyway.clean-on-validation-error`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.clean-on-validation-error`
  * newPropertyKey: `spring.flyway.clean-on-validation-error`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.enabled`
  * newPropertyKey: `spring.flyway.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.enabled`
  * newPropertyKey: `spring.flyway.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.encoding`
  * newPropertyKey: `spring.flyway.encoding`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.encoding`
  * newPropertyKey: `spring.flyway.encoding`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.init-sqls`
  * newPropertyKey: `spring.flyway.init-sqls`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.init-sqls`
  * newPropertyKey: `spring.flyway.init-sqls`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.locations`
  * newPropertyKey: `spring.flyway.locations`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.locations`
  * newPropertyKey: `spring.flyway.locations`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.out-of-order`
  * newPropertyKey: `spring.flyway.out-of-order`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.out-of-order`
  * newPropertyKey: `spring.flyway.out-of-order`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.password`
  * newPropertyKey: `spring.flyway.password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.password`
  * newPropertyKey: `spring.flyway.password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.placeholder-prefix`
  * newPropertyKey: `spring.flyway.placeholder-prefix`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.placeholder-prefix`
  * newPropertyKey: `spring.flyway.placeholder-prefix`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.placeholder-replacement`
  * newPropertyKey: `spring.flyway.placeholder-replacement`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.placeholder-replacement`
  * newPropertyKey: `spring.flyway.placeholder-replacement`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.placeholder-suffix`
  * newPropertyKey: `spring.flyway.placeholder-suffix`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.placeholder-suffix`
  * newPropertyKey: `spring.flyway.placeholder-suffix`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.placeholders`
  * newPropertyKey: `spring.flyway.placeholders`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.placeholders`
  * newPropertyKey: `spring.flyway.placeholders`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.schemas`
  * newPropertyKey: `spring.flyway.schemas`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.schemas`
  * newPropertyKey: `spring.flyway.schemas`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.sql-migration-prefix`
  * newPropertyKey: `spring.flyway.sql-migration-prefix`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.sql-migration-prefix`
  * newPropertyKey: `spring.flyway.sql-migration-prefix`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.sql-migration-separator`
  * newPropertyKey: `spring.flyway.sql-migration-separator`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.sql-migration-separator`
  * newPropertyKey: `spring.flyway.sql-migration-separator`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.sql-migration-suffix`
  * newPropertyKey: `spring.flyway.sql-migration-suffixes`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.sql-migration-suffix`
  * newPropertyKey: `spring.flyway.sql-migration-suffixes`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.table`
  * newPropertyKey: `spring.flyway.table`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.table`
  * newPropertyKey: `spring.flyway.table`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.target`
  * newPropertyKey: `spring.flyway.target`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.target`
  * newPropertyKey: `spring.flyway.target`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.url`
  * newPropertyKey: `spring.flyway.url`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.url`
  * newPropertyKey: `spring.flyway.url`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.user`
  * newPropertyKey: `spring.flyway.user`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.user`
  * newPropertyKey: `spring.flyway.user`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `flyway.validate-on-migrate`
  * newPropertyKey: `spring.flyway.validate-on-migrate`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `flyway.validate-on-migrate`
  * newPropertyKey: `spring.flyway.validate-on-migrate`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.change-log`
  * newPropertyKey: `spring.liquibase.change-log`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.change-log`
  * newPropertyKey: `spring.liquibase.change-log`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.check-change-log-location`
  * newPropertyKey: `spring.liquibase.check-change-log-location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.check-change-log-location`
  * newPropertyKey: `spring.liquibase.check-change-log-location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.contexts`
  * newPropertyKey: `spring.liquibase.contexts`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.contexts`
  * newPropertyKey: `spring.liquibase.contexts`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.default-schema`
  * newPropertyKey: `spring.liquibase.default-schema`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.default-schema`
  * newPropertyKey: `spring.liquibase.default-schema`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.drop-first`
  * newPropertyKey: `spring.liquibase.drop-first`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.drop-first`
  * newPropertyKey: `spring.liquibase.drop-first`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.enabled`
  * newPropertyKey: `spring.liquibase.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.enabled`
  * newPropertyKey: `spring.liquibase.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.labels`
  * newPropertyKey: `spring.liquibase.labels`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.labels`
  * newPropertyKey: `spring.liquibase.labels`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.parameters`
  * newPropertyKey: `spring.liquibase.parameters`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.parameters`
  * newPropertyKey: `spring.liquibase.parameters`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.password`
  * newPropertyKey: `spring.liquibase.password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.password`
  * newPropertyKey: `spring.liquibase.password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.rollback-file`
  * newPropertyKey: `spring.liquibase.rollback-file`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.rollback-file`
  * newPropertyKey: `spring.liquibase.rollback-file`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.url`
  * newPropertyKey: `spring.liquibase.url`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.url`
  * newPropertyKey: `spring.liquibase.url`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `liquibase.user`
  * newPropertyKey: `spring.liquibase.user`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `liquibase.user`
  * newPropertyKey: `spring.liquibase.user`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `security.user.name`
  * newPropertyKey: `spring.security.user.name`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `security.user.name`
  * newPropertyKey: `spring.security.user.name`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `security.user.password`
  * newPropertyKey: `spring.security.user.password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `security.user.password`
  * newPropertyKey: `spring.security.user.password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `security.user.role`
  * newPropertyKey: `spring.security.user.roles`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `security.user.role`
  * newPropertyKey: `spring.security.user.roles`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.context-parameters`
  * newPropertyKey: `server.servlet.context-parameters`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.context-parameters`
  * newPropertyKey: `server.servlet.context-parameters`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.context-path`
  * newPropertyKey: `server.servlet.context-path`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.context-path`
  * newPropertyKey: `server.servlet.context-path`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.display-name`
  * newPropertyKey: `server.servlet.application-display-name`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.display-name`
  * newPropertyKey: `server.servlet.application-display-name`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.jsp-servlet.class-name`
  * newPropertyKey: `server.servlet.jsp.class-name`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.jsp-servlet.class-name`
  * newPropertyKey: `server.servlet.jsp.class-name`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.jsp-servlet.init-parameters`
  * newPropertyKey: `server.servlet.jsp.init-parameters`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.jsp-servlet.init-parameters`
  * newPropertyKey: `server.servlet.jsp.init-parameters`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.jsp-servlet.registered`
  * newPropertyKey: `server.servlet.jsp.registered`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.jsp-servlet.registered`
  * newPropertyKey: `server.servlet.jsp.registered`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.servlet-path`
  * newPropertyKey: `server.servlet.path`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.servlet-path`
  * newPropertyKey: `server.servlet.path`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.comment`
  * newPropertyKey: `server.servlet.session.cookie.comment`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.comment`
  * newPropertyKey: `server.servlet.session.cookie.comment`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.domain`
  * newPropertyKey: `server.servlet.session.cookie.domain`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.domain`
  * newPropertyKey: `server.servlet.session.cookie.domain`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.http-only`
  * newPropertyKey: `server.servlet.session.cookie.http-only`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.http-only`
  * newPropertyKey: `server.servlet.session.cookie.http-only`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.max-age`
  * newPropertyKey: `server.servlet.session.cookie.max-age`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.max-age`
  * newPropertyKey: `server.servlet.session.cookie.max-age`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.name`
  * newPropertyKey: `server.servlet.session.cookie.name`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.name`
  * newPropertyKey: `server.servlet.session.cookie.name`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.path`
  * newPropertyKey: `server.servlet.session.cookie.path`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.path`
  * newPropertyKey: `server.servlet.session.cookie.path`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.secure`
  * newPropertyKey: `server.servlet.session.cookie.secure`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.session.cookie.secure`
  * newPropertyKey: `server.servlet.session.cookie.secure`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.session.persistent`
  * newPropertyKey: `server.servlet.session.persistent`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.session.persistent`
  * newPropertyKey: `server.servlet.session.persistent`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.session.store-dir`
  * newPropertyKey: `server.servlet.session.store-dir`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.session.store-dir`
  * newPropertyKey: `server.servlet.session.store-dir`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.session.timeout`
  * newPropertyKey: `server.servlet.session.timeout`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.session.timeout`
  * newPropertyKey: `server.servlet.session.timeout`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.session.tracking-modes`
  * newPropertyKey: `server.servlet.session.tracking-modes`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.session.tracking-modes`
  * newPropertyKey: `server.servlet.session.tracking-modes`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.batch.initializer.enabled`
  * newPropertyKey: `spring.batch.initialize-schema`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.batch.initializer.enabled`
  * newPropertyKey: `spring.batch.initialize-schema`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.connect-timeout-millis`
  * newPropertyKey: `spring.data.cassandra.connect-timeout`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.connect-timeout-millis`
  * newPropertyKey: `spring.data.cassandra.connect-timeout`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.read-timeout-millis`
  * newPropertyKey: `spring.data.cassandra.read-timeout`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.read-timeout-millis`
  * newPropertyKey: `spring.data.cassandra.read-timeout`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.datasource.initialize`
  * newPropertyKey: `spring.datasource.initialization-mode`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.datasource.initialize`
  * newPropertyKey: `spring.datasource.initialization-mode`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.flyway.sql-migration-suffix`
  * newPropertyKey: `spring.flyway.sql-migration-suffixes`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.flyway.sql-migration-suffix`
  * newPropertyKey: `spring.flyway.sql-migration-suffixes`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.git.properties`
  * newPropertyKey: `spring.info.git.location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.git.properties`
  * newPropertyKey: `spring.info.git.location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.enabled`
  * newPropertyKey: `spring.servlet.multipart.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.enabled`
  * newPropertyKey: `spring.servlet.multipart.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.file-size-threshold`
  * newPropertyKey: `spring.servlet.multipart.file-size-threshold`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.file-size-threshold`
  * newPropertyKey: `spring.servlet.multipart.file-size-threshold`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.location`
  * newPropertyKey: `spring.servlet.multipart.location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.location`
  * newPropertyKey: `spring.servlet.multipart.location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.max-file-size`
  * newPropertyKey: `spring.servlet.multipart.max-file-size`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.max-file-size`
  * newPropertyKey: `spring.servlet.multipart.max-file-size`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.max-request-size`
  * newPropertyKey: `spring.servlet.multipart.max-request-size`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.max-request-size`
  * newPropertyKey: `spring.servlet.multipart.max-request-size`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.resolve-lazily`
  * newPropertyKey: `spring.servlet.multipart.resolve-lazily`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.multipart.resolve-lazily`
  * newPropertyKey: `spring.servlet.multipart.resolve-lazily`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.messages.cache-seconds`
  * newPropertyKey: `spring.messages.cache-duration`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.messages.cache-seconds`
  * newPropertyKey: `spring.messages.cache-duration`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.redis.pool.max-active`
  * newPropertyKey: `spring.redis.jedis.pool.max-idle`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.redis.pool.max-active`
  * newPropertyKey: `spring.redis.jedis.pool.max-idle`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.redis.pool.max-idle`
  * newPropertyKey: `spring.redis.jedis.pool.max-idle`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.redis.pool.max-idle`
  * newPropertyKey: `spring.redis.jedis.pool.max-idle`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.redis.pool.max-wait`
  * newPropertyKey: `spring.redis.jedis.pool.max-wait`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.redis.pool.max-wait`
  * newPropertyKey: `spring.redis.jedis.pool.max-wait`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.redis.pool.min-idle`
  * newPropertyKey: `spring.redis.jedis.pool.min-idle`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.redis.pool.min-idle`
  * newPropertyKey: `spring.redis.jedis.pool.min-idle`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.resources.cache-period`
  * newPropertyKey: `spring.resources.cache.period`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.resources.cache-period`
  * newPropertyKey: `spring.resources.cache.period`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.session.jdbc.initializer.enabled`
  * newPropertyKey: `spring.session.jdbc.initialize-schema`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.session.jdbc.initializer.enabled`
  * newPropertyKey: `spring.session.jdbc.initialize-schema`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.session.mongo.collection-name`
  * newPropertyKey: `spring.session.mongodb.collection-name`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.session.mongo.collection-name`
  * newPropertyKey: `spring.session.mongodb.collection-name`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.thymeleaf.content-type`
  * newPropertyKey: `spring.thymeleaf.servlet.content-type`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.thymeleaf.content-type`
  * newPropertyKey: `spring.thymeleaf.servlet.content-type`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.auditevents.enabled`
  * newPropertyKey: `management.endpoint.auditevents.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.auditevents.enabled`
  * newPropertyKey: `management.endpoint.auditevents.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.auditevents.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.auditevents`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.auditevents.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.auditevents`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.autoconfig.enabled`
  * newPropertyKey: `management.endpoint.conditions.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.autoconfig.enabled`
  * newPropertyKey: `management.endpoint.conditions.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.autoconfig.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.conditions`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.autoconfig.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.conditions`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.beans.enabled`
  * newPropertyKey: `management.endpoint.beans.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.beans.enabled`
  * newPropertyKey: `management.endpoint.beans.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.beans.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.beans`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.beans.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.beans`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.configprops.enabled`
  * newPropertyKey: `management.endpoint.configprops.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.configprops.enabled`
  * newPropertyKey: `management.endpoint.configprops.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.configprops.keys-to-sanitize`
  * newPropertyKey: `management.endpoint.configprops.keys-to-sanitize`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.configprops.keys-to-sanitize`
  * newPropertyKey: `management.endpoint.configprops.keys-to-sanitize`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.configprops.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.configprops`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.configprops.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.configprops`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.allow-credentials`
  * newPropertyKey: `management.endpoints.web.cors.allow-credentials`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.allow-credentials`
  * newPropertyKey: `management.endpoints.web.cors.allow-credentials`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.allowed-headers`
  * newPropertyKey: `management.endpoints.web.cors.allowed-headers`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.allowed-headers`
  * newPropertyKey: `management.endpoints.web.cors.allowed-headers`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.allowed-methods`
  * newPropertyKey: `management.endpoints.web.cors.allowed-methods`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.allowed-methods`
  * newPropertyKey: `management.endpoints.web.cors.allowed-methods`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.allowed-origins`
  * newPropertyKey: `management.endpoints.web.cors.allowed-origins`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.allowed-origins`
  * newPropertyKey: `management.endpoints.web.cors.allowed-origins`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.exposed-headers`
  * newPropertyKey: `management.endpoints.web.cors.exposed-headers`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.exposed-headers`
  * newPropertyKey: `management.endpoints.web.cors.exposed-headers`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.max-age`
  * newPropertyKey: `management.endpoints.web.cors.max-age`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.cors.max-age`
  * newPropertyKey: `management.endpoints.web.cors.max-age`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.dump.enabled`
  * newPropertyKey: `management.endpoint.threaddump.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.dump.enabled`
  * newPropertyKey: `management.endpoint.threaddump.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.dump.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.dump`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.dump.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.dump`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.enabled`
  * newPropertyKey: `management.endpoints.enabled-by-default`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.enabled`
  * newPropertyKey: `management.endpoints.enabled-by-default`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.env.enabled`
  * newPropertyKey: `management.endpoint.env.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.env.enabled`
  * newPropertyKey: `management.endpoint.env.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.env.keys-to-sanitize`
  * newPropertyKey: `management.endpoint.env.keys-to-sanitize`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.env.keys-to-sanitize`
  * newPropertyKey: `management.endpoint.env.keys-to-sanitize`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.env.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.env`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.env.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.env`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.flyway.enabled`
  * newPropertyKey: `management.endpoint.flyway.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.flyway.enabled`
  * newPropertyKey: `management.endpoint.flyway.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.health.enabled`
  * newPropertyKey: `management.endpoint.health.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.health.enabled`
  * newPropertyKey: `management.endpoint.health.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.health.mapping`
  * newPropertyKey: `management.health.status.http-mapping`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.health.mapping`
  * newPropertyKey: `management.health.status.http-mapping`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.health.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.health`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.health.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.health`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.health.time-to-live`
  * newPropertyKey: `management.endpoint.health.cache.time-to-live`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.health.time-to-live`
  * newPropertyKey: `management.endpoint.health.cache.time-to-live`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.heapdump.enabled`
  * newPropertyKey: `management.endpoint.heapdump.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.heapdump.enabled`
  * newPropertyKey: `management.endpoint.heapdump.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.heapdump.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.heapdump`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.heapdump.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.heapdump`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.info.enabled`
  * newPropertyKey: `management.endpoint.info.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.info.enabled`
  * newPropertyKey: `management.endpoint.info.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.info.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.info`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.info.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.info`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.jmx.domain`
  * newPropertyKey: `management.endpoints.jmx.domain`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.jmx.domain`
  * newPropertyKey: `management.endpoints.jmx.domain`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.jmx.enabled`
  * newPropertyKey: `management.endpoints.jmx.exposure.exclude`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.jmx.enabled`
  * newPropertyKey: `management.endpoints.jmx.exposure.exclude`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.jmx.static-names`
  * newPropertyKey: `management.endpoints.jmx.static-names`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.jmx.static-names`
  * newPropertyKey: `management.endpoints.jmx.static-names`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.jmx.unique-names`
  * newPropertyKey: `management.endpoints.jmx.unique-names`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.jmx.unique-names`
  * newPropertyKey: `management.endpoints.jmx.unique-names`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.jolokia.enabled`
  * newPropertyKey: `management.endpoint.jolokia.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.jolokia.enabled`
  * newPropertyKey: `management.endpoint.jolokia.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.jolokia.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.jolokia`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.jolokia.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.jolokia`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.liquibase.enabled`
  * newPropertyKey: `management.endpoint.liquibase.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.liquibase.enabled`
  * newPropertyKey: `management.endpoint.liquibase.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.logfile.enabled`
  * newPropertyKey: `management.endpoint.logfile.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.logfile.enabled`
  * newPropertyKey: `management.endpoint.logfile.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.logfile.external-file`
  * newPropertyKey: `management.endpoint.logfile.external-file`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.logfile.external-file`
  * newPropertyKey: `management.endpoint.logfile.external-file`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.logfile.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.logfile`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.logfile.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.logfile`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.loggers.enabled`
  * newPropertyKey: `management.endpoint.loggers.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.loggers.enabled`
  * newPropertyKey: `management.endpoint.loggers.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.loggers.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.loggers`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.loggers.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.loggers`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.mappings.enabled`
  * newPropertyKey: `management.endpoint.mappings.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.mappings.enabled`
  * newPropertyKey: `management.endpoint.mappings.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.mappings.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.mappings`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.mappings.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.mappings`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.metrics.enabled`
  * newPropertyKey: `management.endpoint.metrics.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.metrics.enabled`
  * newPropertyKey: `management.endpoint.metrics.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.metrics.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.metrics`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.metrics.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.metrics`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.shutdown.enabled`
  * newPropertyKey: `management.endpoint.shutdown.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.shutdown.enabled`
  * newPropertyKey: `management.endpoint.shutdown.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.shutdown.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.shutdown`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.shutdown.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.shutdown`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.trace.filter.enabled`
  * newPropertyKey: `management.trace.http.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.trace.filter.enabled`
  * newPropertyKey: `management.trace.http.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.trace.enabled`
  * newPropertyKey: `management.endpoint.httptrace.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.trace.enabled`
  * newPropertyKey: `management.endpoint.httptrace.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `endpoints.trace.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.httptrace`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `endpoints.trace.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.httptrace`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `jolokia.config`
  * newPropertyKey: `management.endpoint.jolokia.config`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `jolokia.config`
  * newPropertyKey: `management.endpoint.jolokia.config`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.add-application-context-header`
  * newPropertyKey: `management.server.add-application-context-header`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.add-application-context-header`
  * newPropertyKey: `management.server.add-application-context-header`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.address`
  * newPropertyKey: `management.server.address`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.address`
  * newPropertyKey: `management.server.address`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.context-path`
  * newPropertyKey: `management.server.servlet.context-path`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.context-path`
  * newPropertyKey: `management.server.servlet.context-path`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.port`
  * newPropertyKey: `management.server.port`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.port`
  * newPropertyKey: `management.server.port`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.ciphers`
  * newPropertyKey: `management.server.ssl.ciphers`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.ciphers`
  * newPropertyKey: `management.server.ssl.ciphers`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.client-auth`
  * newPropertyKey: `management.server.ssl.client-auth`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.client-auth`
  * newPropertyKey: `management.server.ssl.client-auth`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.enabled`
  * newPropertyKey: `management.server.ssl.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.enabled`
  * newPropertyKey: `management.server.ssl.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.enabled-protocols`
  * newPropertyKey: `management.server.ssl.enabled-protocols`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.enabled-protocols`
  * newPropertyKey: `management.server.ssl.enabled-protocols`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-alias`
  * newPropertyKey: `management.server.ssl.key-alias`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-alias`
  * newPropertyKey: `management.server.ssl.key-alias`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-password`
  * newPropertyKey: `management.server.ssl.key-password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-password`
  * newPropertyKey: `management.server.ssl.key-password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-store`
  * newPropertyKey: `management.server.ssl.key-store`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-store`
  * newPropertyKey: `management.server.ssl.key-store`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-store-password`
  * newPropertyKey: `management.server.ssl.key-store-password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-store-password`
  * newPropertyKey: `management.server.ssl.key-store-password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-store-provider`
  * newPropertyKey: `management.server.ssl.key-store-provider`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-store-provider`
  * newPropertyKey: `management.server.ssl.key-store-provider`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-store-type`
  * newPropertyKey: `management.server.ssl.key-store-type`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.key-store-type`
  * newPropertyKey: `management.server.ssl.key-store-type`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.protocol`
  * newPropertyKey: `management.server.ssl.protocol`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.protocol`
  * newPropertyKey: `management.server.ssl.protocol`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store`
  * newPropertyKey: `management.server.ssl.trust-store`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store`
  * newPropertyKey: `management.server.ssl.trust-store`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store-password`
  * newPropertyKey: `management.server.ssl.trust-store-password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store-password`
  * newPropertyKey: `management.server.ssl.trust-store-password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store-provider`
  * newPropertyKey: `management.server.ssl.trust-store-provider`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store-provider`
  * newPropertyKey: `management.server.ssl.trust-store-provider`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store-type`
  * newPropertyKey: `management.server.ssl.trust-store-type`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store-type`
  * newPropertyKey: `management.server.ssl.trust-store-type`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.trace.include`
  * newPropertyKey: `management.trace.http.include`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.trace.include`
  * newPropertyKey: `management.trace.http.include`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.metrics.export.statsd.host`
  * newPropertyKey: `management.metrics.export.statsd.host`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.metrics.export.statsd.host`
  * newPropertyKey: `management.metrics.export.statsd.host`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.metrics.export.statsd.port`
  * newPropertyKey: `management.metrics.export.statsd.port`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.metrics.export.statsd.port`
  * newPropertyKey: `management.metrics.export.statsd.port`
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
displayName: Migrate Spring Boot properties to 2.0
description: Migrate properties found in `application.properties` and `application.yml`.
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.main.show-banner
      newPropertyKey: spring.main.banner-mode
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.main.show-banner
      newPropertyKey: spring.main.banner-mode
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.main.web-environment
      newPropertyKey: spring.main.web-application-type
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.main.web-environment
      newPropertyKey: spring.main.web-application-type
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: banner.charset
      newPropertyKey: spring.banner.charset
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: banner.charset
      newPropertyKey: spring.banner.charset
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: banner.image.height
      newPropertyKey: spring.banner.image.height
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: banner.image.height
      newPropertyKey: spring.banner.image.height
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: banner.image.invert
      newPropertyKey: spring.banner.image.invert
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: banner.image.invert
      newPropertyKey: spring.banner.image.invert
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: banner.image.location
      newPropertyKey: spring.banner.image.location
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: banner.image.location
      newPropertyKey: spring.banner.image.location
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: banner.image.margin
      newPropertyKey: spring.banner.image.margin
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: banner.image.margin
      newPropertyKey: spring.banner.image.margin
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: banner.image.width
      newPropertyKey: spring.banner.image.width
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: banner.image.width
      newPropertyKey: spring.banner.image.width
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: banner.location
      newPropertyKey: spring.banner.location
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: banner.location
      newPropertyKey: spring.banner.location
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: security.filter-dispatcher-types
      newPropertyKey: spring.security.filter.dispatcher-types
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: security.filter-dispatcher-types
      newPropertyKey: spring.security.filter.dispatcher-types
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: security.filter-order
      newPropertyKey: spring.security.filter.order
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: security.filter-order
      newPropertyKey: spring.security.filter.order
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.data.cassandra.repositories.enabled
      newPropertyKey: spring.data.cassandra.repositories.type
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.data.cassandra.repositories.enabled
      newPropertyKey: spring.data.cassandra.repositories.type
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.data.couchbase.repositories.enabled
      newPropertyKey: spring.data.couchbase.repositories.type
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.data.couchbase.repositories.enabled
      newPropertyKey: spring.data.couchbase.repositories.type
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.data.mongodb.repositories.enabled
      newPropertyKey: spring.data.mongodb.repositories.type
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.data.mongodb.repositories.enabled
      newPropertyKey: spring.data.mongodb.repositories.type
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.jta.bitronix.properties.background-recovery-interval
      newPropertyKey: spring.jta.bitronix.properties.background-recovery-interval-seconds
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.jta.bitronix.properties.background-recovery-interval
      newPropertyKey: spring.jta.bitronix.properties.background-recovery-interval-seconds
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.mvc.media-types
      newPropertyKey: spring.mvc.contentnegotiation.media-types
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.mvc.media-types
      newPropertyKey: spring.mvc.contentnegotiation.media-types
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.baseline-description
      newPropertyKey: spring.flyway.baseline-description
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.baseline-description
      newPropertyKey: spring.flyway.baseline-description
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.baseline-on-migrate
      newPropertyKey: spring.flyway.baseline-on-migrate
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.baseline-on-migrate
      newPropertyKey: spring.flyway.baseline-on-migrate
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.baseline-version
      newPropertyKey: spring.flyway.baseline-version
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.baseline-version
      newPropertyKey: spring.flyway.baseline-version
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.check-location
      newPropertyKey: spring.flyway.check-location
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.check-location
      newPropertyKey: spring.flyway.check-location
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.clean-on-validation-error
      newPropertyKey: spring.flyway.clean-on-validation-error
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.clean-on-validation-error
      newPropertyKey: spring.flyway.clean-on-validation-error
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.enabled
      newPropertyKey: spring.flyway.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.enabled
      newPropertyKey: spring.flyway.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.encoding
      newPropertyKey: spring.flyway.encoding
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.encoding
      newPropertyKey: spring.flyway.encoding
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.init-sqls
      newPropertyKey: spring.flyway.init-sqls
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.init-sqls
      newPropertyKey: spring.flyway.init-sqls
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.locations
      newPropertyKey: spring.flyway.locations
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.locations
      newPropertyKey: spring.flyway.locations
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.out-of-order
      newPropertyKey: spring.flyway.out-of-order
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.out-of-order
      newPropertyKey: spring.flyway.out-of-order
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.password
      newPropertyKey: spring.flyway.password
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.password
      newPropertyKey: spring.flyway.password
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.placeholder-prefix
      newPropertyKey: spring.flyway.placeholder-prefix
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.placeholder-prefix
      newPropertyKey: spring.flyway.placeholder-prefix
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.placeholder-replacement
      newPropertyKey: spring.flyway.placeholder-replacement
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.placeholder-replacement
      newPropertyKey: spring.flyway.placeholder-replacement
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.placeholder-suffix
      newPropertyKey: spring.flyway.placeholder-suffix
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.placeholder-suffix
      newPropertyKey: spring.flyway.placeholder-suffix
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.placeholders
      newPropertyKey: spring.flyway.placeholders
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.placeholders
      newPropertyKey: spring.flyway.placeholders
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.schemas
      newPropertyKey: spring.flyway.schemas
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.schemas
      newPropertyKey: spring.flyway.schemas
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.sql-migration-prefix
      newPropertyKey: spring.flyway.sql-migration-prefix
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.sql-migration-prefix
      newPropertyKey: spring.flyway.sql-migration-prefix
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.sql-migration-separator
      newPropertyKey: spring.flyway.sql-migration-separator
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.sql-migration-separator
      newPropertyKey: spring.flyway.sql-migration-separator
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.sql-migration-suffix
      newPropertyKey: spring.flyway.sql-migration-suffixes
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.sql-migration-suffix
      newPropertyKey: spring.flyway.sql-migration-suffixes
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.table
      newPropertyKey: spring.flyway.table
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.table
      newPropertyKey: spring.flyway.table
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.target
      newPropertyKey: spring.flyway.target
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.target
      newPropertyKey: spring.flyway.target
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.url
      newPropertyKey: spring.flyway.url
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.url
      newPropertyKey: spring.flyway.url
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.user
      newPropertyKey: spring.flyway.user
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.user
      newPropertyKey: spring.flyway.user
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: flyway.validate-on-migrate
      newPropertyKey: spring.flyway.validate-on-migrate
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: flyway.validate-on-migrate
      newPropertyKey: spring.flyway.validate-on-migrate
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.change-log
      newPropertyKey: spring.liquibase.change-log
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.change-log
      newPropertyKey: spring.liquibase.change-log
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.check-change-log-location
      newPropertyKey: spring.liquibase.check-change-log-location
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.check-change-log-location
      newPropertyKey: spring.liquibase.check-change-log-location
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.contexts
      newPropertyKey: spring.liquibase.contexts
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.contexts
      newPropertyKey: spring.liquibase.contexts
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.default-schema
      newPropertyKey: spring.liquibase.default-schema
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.default-schema
      newPropertyKey: spring.liquibase.default-schema
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.drop-first
      newPropertyKey: spring.liquibase.drop-first
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.drop-first
      newPropertyKey: spring.liquibase.drop-first
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.enabled
      newPropertyKey: spring.liquibase.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.enabled
      newPropertyKey: spring.liquibase.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.labels
      newPropertyKey: spring.liquibase.labels
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.labels
      newPropertyKey: spring.liquibase.labels
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.parameters
      newPropertyKey: spring.liquibase.parameters
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.parameters
      newPropertyKey: spring.liquibase.parameters
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.password
      newPropertyKey: spring.liquibase.password
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.password
      newPropertyKey: spring.liquibase.password
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.rollback-file
      newPropertyKey: spring.liquibase.rollback-file
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.rollback-file
      newPropertyKey: spring.liquibase.rollback-file
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.url
      newPropertyKey: spring.liquibase.url
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.url
      newPropertyKey: spring.liquibase.url
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: liquibase.user
      newPropertyKey: spring.liquibase.user
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: liquibase.user
      newPropertyKey: spring.liquibase.user
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: security.user.name
      newPropertyKey: spring.security.user.name
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: security.user.name
      newPropertyKey: spring.security.user.name
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: security.user.password
      newPropertyKey: spring.security.user.password
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: security.user.password
      newPropertyKey: spring.security.user.password
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: security.user.role
      newPropertyKey: spring.security.user.roles
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: security.user.role
      newPropertyKey: spring.security.user.roles
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.context-parameters
      newPropertyKey: server.servlet.context-parameters
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.context-parameters
      newPropertyKey: server.servlet.context-parameters
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.context-path
      newPropertyKey: server.servlet.context-path
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.context-path
      newPropertyKey: server.servlet.context-path
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.display-name
      newPropertyKey: server.servlet.application-display-name
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.display-name
      newPropertyKey: server.servlet.application-display-name
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.jsp-servlet.class-name
      newPropertyKey: server.servlet.jsp.class-name
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.jsp-servlet.class-name
      newPropertyKey: server.servlet.jsp.class-name
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.jsp-servlet.init-parameters
      newPropertyKey: server.servlet.jsp.init-parameters
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.jsp-servlet.init-parameters
      newPropertyKey: server.servlet.jsp.init-parameters
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.jsp-servlet.registered
      newPropertyKey: server.servlet.jsp.registered
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.jsp-servlet.registered
      newPropertyKey: server.servlet.jsp.registered
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.servlet-path
      newPropertyKey: server.servlet.path
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.servlet-path
      newPropertyKey: server.servlet.path
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.comment
      newPropertyKey: server.servlet.session.cookie.comment
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.comment
      newPropertyKey: server.servlet.session.cookie.comment
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.domain
      newPropertyKey: server.servlet.session.cookie.domain
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.domain
      newPropertyKey: server.servlet.session.cookie.domain
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.http-only
      newPropertyKey: server.servlet.session.cookie.http-only
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.http-only
      newPropertyKey: server.servlet.session.cookie.http-only
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.max-age
      newPropertyKey: server.servlet.session.cookie.max-age
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.max-age
      newPropertyKey: server.servlet.session.cookie.max-age
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.name
      newPropertyKey: server.servlet.session.cookie.name
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.name
      newPropertyKey: server.servlet.session.cookie.name
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.path
      newPropertyKey: server.servlet.session.cookie.path
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.path
      newPropertyKey: server.servlet.session.cookie.path
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.secure
      newPropertyKey: server.servlet.session.cookie.secure
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.session.cookie.secure
      newPropertyKey: server.servlet.session.cookie.secure
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.session.persistent
      newPropertyKey: server.servlet.session.persistent
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.session.persistent
      newPropertyKey: server.servlet.session.persistent
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.session.store-dir
      newPropertyKey: server.servlet.session.store-dir
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.session.store-dir
      newPropertyKey: server.servlet.session.store-dir
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.session.timeout
      newPropertyKey: server.servlet.session.timeout
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.session.timeout
      newPropertyKey: server.servlet.session.timeout
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.session.tracking-modes
      newPropertyKey: server.servlet.session.tracking-modes
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.session.tracking-modes
      newPropertyKey: server.servlet.session.tracking-modes
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.batch.initializer.enabled
      newPropertyKey: spring.batch.initialize-schema
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.batch.initializer.enabled
      newPropertyKey: spring.batch.initialize-schema
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.data.cassandra.connect-timeout-millis
      newPropertyKey: spring.data.cassandra.connect-timeout
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.data.cassandra.connect-timeout-millis
      newPropertyKey: spring.data.cassandra.connect-timeout
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.data.cassandra.read-timeout-millis
      newPropertyKey: spring.data.cassandra.read-timeout
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.data.cassandra.read-timeout-millis
      newPropertyKey: spring.data.cassandra.read-timeout
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.datasource.initialize
      newPropertyKey: spring.datasource.initialization-mode
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.datasource.initialize
      newPropertyKey: spring.datasource.initialization-mode
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.flyway.sql-migration-suffix
      newPropertyKey: spring.flyway.sql-migration-suffixes
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.flyway.sql-migration-suffix
      newPropertyKey: spring.flyway.sql-migration-suffixes
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.git.properties
      newPropertyKey: spring.info.git.location
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.git.properties
      newPropertyKey: spring.info.git.location
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.enabled
      newPropertyKey: spring.servlet.multipart.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.enabled
      newPropertyKey: spring.servlet.multipart.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.file-size-threshold
      newPropertyKey: spring.servlet.multipart.file-size-threshold
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.file-size-threshold
      newPropertyKey: spring.servlet.multipart.file-size-threshold
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.location
      newPropertyKey: spring.servlet.multipart.location
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.location
      newPropertyKey: spring.servlet.multipart.location
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.max-file-size
      newPropertyKey: spring.servlet.multipart.max-file-size
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.max-file-size
      newPropertyKey: spring.servlet.multipart.max-file-size
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.max-request-size
      newPropertyKey: spring.servlet.multipart.max-request-size
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.max-request-size
      newPropertyKey: spring.servlet.multipart.max-request-size
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.resolve-lazily
      newPropertyKey: spring.servlet.multipart.resolve-lazily
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.multipart.resolve-lazily
      newPropertyKey: spring.servlet.multipart.resolve-lazily
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.messages.cache-seconds
      newPropertyKey: spring.messages.cache-duration
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.messages.cache-seconds
      newPropertyKey: spring.messages.cache-duration
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.redis.pool.max-active
      newPropertyKey: spring.redis.jedis.pool.max-idle
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.redis.pool.max-active
      newPropertyKey: spring.redis.jedis.pool.max-idle
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.redis.pool.max-idle
      newPropertyKey: spring.redis.jedis.pool.max-idle
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.redis.pool.max-idle
      newPropertyKey: spring.redis.jedis.pool.max-idle
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.redis.pool.max-wait
      newPropertyKey: spring.redis.jedis.pool.max-wait
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.redis.pool.max-wait
      newPropertyKey: spring.redis.jedis.pool.max-wait
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.redis.pool.min-idle
      newPropertyKey: spring.redis.jedis.pool.min-idle
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.redis.pool.min-idle
      newPropertyKey: spring.redis.jedis.pool.min-idle
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.resources.cache-period
      newPropertyKey: spring.resources.cache.period
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.resources.cache-period
      newPropertyKey: spring.resources.cache.period
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.session.jdbc.initializer.enabled
      newPropertyKey: spring.session.jdbc.initialize-schema
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.session.jdbc.initializer.enabled
      newPropertyKey: spring.session.jdbc.initialize-schema
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.session.mongo.collection-name
      newPropertyKey: spring.session.mongodb.collection-name
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.session.mongo.collection-name
      newPropertyKey: spring.session.mongodb.collection-name
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.thymeleaf.content-type
      newPropertyKey: spring.thymeleaf.servlet.content-type
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.thymeleaf.content-type
      newPropertyKey: spring.thymeleaf.servlet.content-type
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.auditevents.enabled
      newPropertyKey: management.endpoint.auditevents.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.auditevents.enabled
      newPropertyKey: management.endpoint.auditevents.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.auditevents.path
      newPropertyKey: management.endpoints.web.path-mapping.auditevents
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.auditevents.path
      newPropertyKey: management.endpoints.web.path-mapping.auditevents
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.autoconfig.enabled
      newPropertyKey: management.endpoint.conditions.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.autoconfig.enabled
      newPropertyKey: management.endpoint.conditions.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.autoconfig.path
      newPropertyKey: management.endpoints.web.path-mapping.conditions
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.autoconfig.path
      newPropertyKey: management.endpoints.web.path-mapping.conditions
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.beans.enabled
      newPropertyKey: management.endpoint.beans.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.beans.enabled
      newPropertyKey: management.endpoint.beans.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.beans.path
      newPropertyKey: management.endpoints.web.path-mapping.beans
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.beans.path
      newPropertyKey: management.endpoints.web.path-mapping.beans
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.configprops.enabled
      newPropertyKey: management.endpoint.configprops.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.configprops.enabled
      newPropertyKey: management.endpoint.configprops.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.configprops.keys-to-sanitize
      newPropertyKey: management.endpoint.configprops.keys-to-sanitize
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.configprops.keys-to-sanitize
      newPropertyKey: management.endpoint.configprops.keys-to-sanitize
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.configprops.path
      newPropertyKey: management.endpoints.web.path-mapping.configprops
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.configprops.path
      newPropertyKey: management.endpoints.web.path-mapping.configprops
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.allow-credentials
      newPropertyKey: management.endpoints.web.cors.allow-credentials
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.allow-credentials
      newPropertyKey: management.endpoints.web.cors.allow-credentials
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.allowed-headers
      newPropertyKey: management.endpoints.web.cors.allowed-headers
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.allowed-headers
      newPropertyKey: management.endpoints.web.cors.allowed-headers
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.allowed-methods
      newPropertyKey: management.endpoints.web.cors.allowed-methods
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.allowed-methods
      newPropertyKey: management.endpoints.web.cors.allowed-methods
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.allowed-origins
      newPropertyKey: management.endpoints.web.cors.allowed-origins
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.allowed-origins
      newPropertyKey: management.endpoints.web.cors.allowed-origins
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.exposed-headers
      newPropertyKey: management.endpoints.web.cors.exposed-headers
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.exposed-headers
      newPropertyKey: management.endpoints.web.cors.exposed-headers
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.max-age
      newPropertyKey: management.endpoints.web.cors.max-age
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.cors.max-age
      newPropertyKey: management.endpoints.web.cors.max-age
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.dump.enabled
      newPropertyKey: management.endpoint.threaddump.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.dump.enabled
      newPropertyKey: management.endpoint.threaddump.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.dump.path
      newPropertyKey: management.endpoints.web.path-mapping.dump
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.dump.path
      newPropertyKey: management.endpoints.web.path-mapping.dump
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.enabled
      newPropertyKey: management.endpoints.enabled-by-default
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.enabled
      newPropertyKey: management.endpoints.enabled-by-default
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.env.enabled
      newPropertyKey: management.endpoint.env.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.env.enabled
      newPropertyKey: management.endpoint.env.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.env.keys-to-sanitize
      newPropertyKey: management.endpoint.env.keys-to-sanitize
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.env.keys-to-sanitize
      newPropertyKey: management.endpoint.env.keys-to-sanitize
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.env.path
      newPropertyKey: management.endpoints.web.path-mapping.env
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.env.path
      newPropertyKey: management.endpoints.web.path-mapping.env
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.flyway.enabled
      newPropertyKey: management.endpoint.flyway.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.flyway.enabled
      newPropertyKey: management.endpoint.flyway.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.health.enabled
      newPropertyKey: management.endpoint.health.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.health.enabled
      newPropertyKey: management.endpoint.health.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.health.mapping
      newPropertyKey: management.health.status.http-mapping
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.health.mapping
      newPropertyKey: management.health.status.http-mapping
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.health.path
      newPropertyKey: management.endpoints.web.path-mapping.health
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.health.path
      newPropertyKey: management.endpoints.web.path-mapping.health
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.health.time-to-live
      newPropertyKey: management.endpoint.health.cache.time-to-live
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.health.time-to-live
      newPropertyKey: management.endpoint.health.cache.time-to-live
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.heapdump.enabled
      newPropertyKey: management.endpoint.heapdump.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.heapdump.enabled
      newPropertyKey: management.endpoint.heapdump.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.heapdump.path
      newPropertyKey: management.endpoints.web.path-mapping.heapdump
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.heapdump.path
      newPropertyKey: management.endpoints.web.path-mapping.heapdump
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.info.enabled
      newPropertyKey: management.endpoint.info.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.info.enabled
      newPropertyKey: management.endpoint.info.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.info.path
      newPropertyKey: management.endpoints.web.path-mapping.info
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.info.path
      newPropertyKey: management.endpoints.web.path-mapping.info
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.jmx.domain
      newPropertyKey: management.endpoints.jmx.domain
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.jmx.domain
      newPropertyKey: management.endpoints.jmx.domain
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.jmx.enabled
      newPropertyKey: management.endpoints.jmx.exposure.exclude
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.jmx.enabled
      newPropertyKey: management.endpoints.jmx.exposure.exclude
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.jmx.static-names
      newPropertyKey: management.endpoints.jmx.static-names
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.jmx.static-names
      newPropertyKey: management.endpoints.jmx.static-names
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.jmx.unique-names
      newPropertyKey: management.endpoints.jmx.unique-names
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.jmx.unique-names
      newPropertyKey: management.endpoints.jmx.unique-names
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.jolokia.enabled
      newPropertyKey: management.endpoint.jolokia.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.jolokia.enabled
      newPropertyKey: management.endpoint.jolokia.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.jolokia.path
      newPropertyKey: management.endpoints.web.path-mapping.jolokia
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.jolokia.path
      newPropertyKey: management.endpoints.web.path-mapping.jolokia
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.liquibase.enabled
      newPropertyKey: management.endpoint.liquibase.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.liquibase.enabled
      newPropertyKey: management.endpoint.liquibase.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.logfile.enabled
      newPropertyKey: management.endpoint.logfile.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.logfile.enabled
      newPropertyKey: management.endpoint.logfile.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.logfile.external-file
      newPropertyKey: management.endpoint.logfile.external-file
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.logfile.external-file
      newPropertyKey: management.endpoint.logfile.external-file
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.logfile.path
      newPropertyKey: management.endpoints.web.path-mapping.logfile
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.logfile.path
      newPropertyKey: management.endpoints.web.path-mapping.logfile
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.loggers.enabled
      newPropertyKey: management.endpoint.loggers.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.loggers.enabled
      newPropertyKey: management.endpoint.loggers.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.loggers.path
      newPropertyKey: management.endpoints.web.path-mapping.loggers
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.loggers.path
      newPropertyKey: management.endpoints.web.path-mapping.loggers
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.mappings.enabled
      newPropertyKey: management.endpoint.mappings.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.mappings.enabled
      newPropertyKey: management.endpoint.mappings.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.mappings.path
      newPropertyKey: management.endpoints.web.path-mapping.mappings
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.mappings.path
      newPropertyKey: management.endpoints.web.path-mapping.mappings
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.metrics.enabled
      newPropertyKey: management.endpoint.metrics.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.metrics.enabled
      newPropertyKey: management.endpoint.metrics.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.metrics.path
      newPropertyKey: management.endpoints.web.path-mapping.metrics
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.metrics.path
      newPropertyKey: management.endpoints.web.path-mapping.metrics
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.shutdown.enabled
      newPropertyKey: management.endpoint.shutdown.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.shutdown.enabled
      newPropertyKey: management.endpoint.shutdown.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.shutdown.path
      newPropertyKey: management.endpoints.web.path-mapping.shutdown
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.shutdown.path
      newPropertyKey: management.endpoints.web.path-mapping.shutdown
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.trace.filter.enabled
      newPropertyKey: management.trace.http.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.trace.filter.enabled
      newPropertyKey: management.trace.http.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.trace.enabled
      newPropertyKey: management.endpoint.httptrace.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.trace.enabled
      newPropertyKey: management.endpoint.httptrace.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: endpoints.trace.path
      newPropertyKey: management.endpoints.web.path-mapping.httptrace
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: endpoints.trace.path
      newPropertyKey: management.endpoints.web.path-mapping.httptrace
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: jolokia.config
      newPropertyKey: management.endpoint.jolokia.config
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: jolokia.config
      newPropertyKey: management.endpoint.jolokia.config
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.add-application-context-header
      newPropertyKey: management.server.add-application-context-header
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.add-application-context-header
      newPropertyKey: management.server.add-application-context-header
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.address
      newPropertyKey: management.server.address
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.address
      newPropertyKey: management.server.address
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.context-path
      newPropertyKey: management.server.servlet.context-path
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.context-path
      newPropertyKey: management.server.servlet.context-path
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.port
      newPropertyKey: management.server.port
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.port
      newPropertyKey: management.server.port
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.ciphers
      newPropertyKey: management.server.ssl.ciphers
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.ciphers
      newPropertyKey: management.server.ssl.ciphers
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.client-auth
      newPropertyKey: management.server.ssl.client-auth
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.client-auth
      newPropertyKey: management.server.ssl.client-auth
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.enabled
      newPropertyKey: management.server.ssl.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.enabled
      newPropertyKey: management.server.ssl.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.enabled-protocols
      newPropertyKey: management.server.ssl.enabled-protocols
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.enabled-protocols
      newPropertyKey: management.server.ssl.enabled-protocols
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-alias
      newPropertyKey: management.server.ssl.key-alias
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-alias
      newPropertyKey: management.server.ssl.key-alias
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-password
      newPropertyKey: management.server.ssl.key-password
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-password
      newPropertyKey: management.server.ssl.key-password
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-store
      newPropertyKey: management.server.ssl.key-store
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-store
      newPropertyKey: management.server.ssl.key-store
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-store-password
      newPropertyKey: management.server.ssl.key-store-password
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-store-password
      newPropertyKey: management.server.ssl.key-store-password
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-store-provider
      newPropertyKey: management.server.ssl.key-store-provider
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-store-provider
      newPropertyKey: management.server.ssl.key-store-provider
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-store-type
      newPropertyKey: management.server.ssl.key-store-type
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.key-store-type
      newPropertyKey: management.server.ssl.key-store-type
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.protocol
      newPropertyKey: management.server.ssl.protocol
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.protocol
      newPropertyKey: management.server.ssl.protocol
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.trust-store
      newPropertyKey: management.server.ssl.trust-store
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.trust-store
      newPropertyKey: management.server.ssl.trust-store
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.trust-store-password
      newPropertyKey: management.server.ssl.trust-store-password
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.trust-store-password
      newPropertyKey: management.server.ssl.trust-store-password
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.trust-store-provider
      newPropertyKey: management.server.ssl.trust-store-provider
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.trust-store-provider
      newPropertyKey: management.server.ssl.trust-store-provider
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.ssl.trust-store-type
      newPropertyKey: management.server.ssl.trust-store-type
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.ssl.trust-store-type
      newPropertyKey: management.server.ssl.trust-store-type
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.trace.include
      newPropertyKey: management.trace.http.include
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.trace.include
      newPropertyKey: management.trace.http.include
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.metrics.export.statsd.host
      newPropertyKey: management.metrics.export.statsd.host
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.metrics.export.statsd.host
      newPropertyKey: management.metrics.export.statsd.host
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.metrics.export.statsd.port
      newPropertyKey: management.metrics.export.statsd.port
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.metrics.export.statsd.port
      newPropertyKey: management.metrics.export.statsd.port
```
{% endtab %}
{% endtabs %}

