# Migrate to Spring Boot 2.7

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_7**

_Upgrade to Spring Boot 2.7_

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-27.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5

## Examples
##### Example 1


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.30</version>
      <scope>runtime</scope>
    </dependency>
  </dependencies>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>com.mysql</groupId>
      <artifactId>mysql-connector-j</artifactId>
      <version>8.0.33</version>
      <scope>runtime</scope>
    </dependency>
  </dependencies>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -8,3 +8,3 @@
  <dependencies>
    <dependency>
-     <groupId>mysql</groupId>
-     <artifactId>mysql-connector-java</artifactId>
-     <version>8.0.30</version>
+     <groupId>com.mysql</groupId>
+     <artifactId>mysql-connector-j</artifactId>
+     <version>8.0.33</version>
      <scope>runtime</scope>
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="build.gradle" %}

###### Before
{% code title="build.gradle" %}
```groovy
plugins {
  id 'java'
}

repositories {
   mavenCentral()
}

dependencies {
    runtimeOnly 'mysql:mysql-connector-java:8.0.30'
}
```
{% endcode %}

###### After
{% code title="build.gradle" %}
```groovy
plugins {
  id 'java'
}

repositories {
   mavenCentral()
}

dependencies {
    runtimeOnly 'com.mysql:mysql-connector-j:8.0.33'
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -10,1 +10,1 @@

dependencies {
-   runtimeOnly 'mysql:mysql-connector-java:8.0.30'
+   runtimeOnly 'com.mysql:mysql-connector-j:8.0.33'
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 3


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.30</version>
      <scope>runtime</scope>
    </dependency>
  </dependencies>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>com.mysql</groupId>
      <artifactId>mysql-connector-j</artifactId>
      <version>8.0.33</version>
      <scope>runtime</scope>
    </dependency>
  </dependencies>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -8,3 +8,3 @@
  <dependencies>
    <dependency>
-     <groupId>mysql</groupId>
-     <artifactId>mysql-connector-java</artifactId>
-     <version>8.0.30</version>
+     <groupId>com.mysql</groupId>
+     <artifactId>mysql-connector-j</artifactId>
+     <version>8.0.33</version>
      <scope>runtime</scope>
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 4


{% tabs %}
{% tab title="build.gradle" %}

###### Before
{% code title="build.gradle" %}
```groovy
plugins {
  id 'java'
}

repositories {
   mavenCentral()
}

dependencies {
    runtimeOnly 'mysql:mysql-connector-java:8.0.30'
}
```
{% endcode %}

###### After
{% code title="build.gradle" %}
```groovy
plugins {
  id 'java'
}

repositories {
   mavenCentral()
}

dependencies {
    runtimeOnly 'com.mysql:mysql-connector-j:8.0.33'
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -10,1 +10,1 @@

dependencies {
-   runtimeOnly 'mysql:mysql-connector-java:8.0.30'
+   runtimeOnly 'com.mysql:mysql-connector-j:8.0.33'
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.5")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Boot 2.6](../../../java/spring/boot2/upgradespringboot_2_6.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.7.x`
  * overrideManagedVersion: `false`
  * retainVersions: `[mysql:mysql-connector-java]`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.7.x`
  * retainVersions: `[mysql:mysql-connector-java]`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `org.springframework.boot`
  * newVersion: `2.7.x`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.web.server.LocalServerPort`
  * newFullyQualifiedTypeName: `org.springframework.boot.test.web.server.LocalServerPort`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.autoconfigure.web.server.LocalManagementPort`
  * newFullyQualifiedTypeName: `org.springframework.boot.test.web.server.LocalManagementPort`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.rsocket.context.LocalRSocketServerPort`
  * newFullyQualifiedTypeName: `org.springframework.boot.test.rsocket.server.LocalRSocketServerPort`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy`
  * newFullyQualifiedTypeName: `org.hibernate.boot.model.naming.CamelCaseToUnderscoresNamingStrategy`
* [Migrate Spring Boot properties to 2.7](../../../java/spring/boot2/springbootproperties_2_7.md)
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `mysql`
  * oldArtifactId: `mysql-connector-java`
  * newGroupId: `com.mysql`
  * newArtifactId: `mysql-connector-j`
  * newVersion: `8.0.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
displayName: Migrate to Spring Boot 2.7
description: Upgrade to Spring Boot 2.7
recipeList:
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.7.x
      overrideManagedVersion: false
      retainVersions: [mysql:mysql-connector-java]
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.7.x
      retainVersions: [mysql:mysql-connector-java]
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.springframework.boot
      newVersion: 2.7.x
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.web.server.LocalServerPort
      newFullyQualifiedTypeName: org.springframework.boot.test.web.server.LocalServerPort
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.autoconfigure.web.server.LocalManagementPort
      newFullyQualifiedTypeName: org.springframework.boot.test.web.server.LocalManagementPort
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.rsocket.context.LocalRSocketServerPort
      newFullyQualifiedTypeName: org.springframework.boot.test.rsocket.server.LocalRSocketServerPort
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy
      newFullyQualifiedTypeName: org.hibernate.boot.model.naming.CamelCaseToUnderscoresNamingStrategy
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_7
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: mysql
      oldArtifactId: mysql-connector-java
      newGroupId: com.mysql
      newArtifactId: mysql-connector-j
      newVersion: 8.0.x

```
{% endtab %}
{% endtabs %}

## Contributors
* Tyler Van Gorder
* [Knut Wannheden](mailto:knut@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Nick McKinney](mailto:mckinneynichoals@gmail.com)
* Patrick Way
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Greg Adams](mailto:gadams@gmail.com)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* [Tim te Beek](mailto:tim.te.beek@jdriven.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* Yeikel
* [Greg Adams](mailto:greg@moderne.io)
* [Kyle Scully](mailto:scullykns@gmail.com)
* [Kevin McCarpenter](mailto:kevin@moderne.io)
* Fabian Krüger
* Kun Li
* [Tim te Beek](mailto:tim@moderne.io)
* [Alex Boyko](mailto:aboyko@vmware.com)
* nbruno
* [Shannon Pamperl](mailto:shanman190@gmail.com)
* [Sofia Britto Schwartz](mailto:sofia.b.schwartz@gmail.com)
* Sandeep Nagaraj
* [Kun Li](mailto:kun@moderne.io)
* [Michael Keppler](mailto:bananeweizen@gmx.de)
* [Scott Jungling](mailto:scott.jungling@gmail.com)
* Ties van de Ven
* [Tim te Beek](mailto:timtebeek@gmail.com)
* [Joan Viladrosa](mailto:joan@moderne.io)
* Josh Soref


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
