---
sidebar_label: "Migrate JavaEE to Quarkus 2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate JavaEE to Quarkus 2

**org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2Migration**

_These recipes help with the migration of a JavaEE application using EJBs and Hibernate to Quarkus 2. Additional transformations like JSF, JMS, Quarkus Tests may be necessary._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/java/org/openrewrite/quarkus/migrate/javaee/JavaEEtoQuarkus2Migration.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-quarkus/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate JavaEE Maven Dependencies to Quarkus 2](../../../quarkus/migrate/javaee/addquarkus2mavenplugins)
* [Add Quarkus 2 dependencies](../../../quarkus/migrate/javaee/addquarkus2dependencies)
* [Remove JavaEE dependencies](../../../quarkus/migrate/javaee/removejavaeedependencies)
* [Migrate JavaEE Code to Quarkus 2](../../../quarkus/migrate/javaee/javaeetoquarkus2codemigration)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2Migration
displayName: Migrate JavaEE to Quarkus 2
description: |
  These recipes help with the migration of a JavaEE application using EJBs and Hibernate to Quarkus 2. Additional transformations like JSF, JMS, Quarkus Tests may be necessary.
recipeList:
  - org.openrewrite.quarkus.migrate.javaee.AddQuarkus2MavenPlugins
  - org.openrewrite.quarkus.migrate.javaee.AddQuarkus2Dependencies
  - org.openrewrite.quarkus.migrate.javaee.RemoveJavaEEDependencies
  - org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2CodeMigration

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`JavaEEtoQuarkus2MavenDependenciesMigrationTest#convertJavaEEToQuarkusDependencies1`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.openrewrite.sample</groupId>
  <name>Sample Java EE7 EJB Module</name>
  <artifactId>ee7-ejb</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>war</packaging>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>

  <dependencies>
    <dependency>
      <groupId>javax</groupId>
      <artifactId>javaee-api</artifactId>
      <version>7.0</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>javax.annotation</groupId>
      <artifactId>javax.annotation-api</artifactId>
      <version>1.3.2</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.openrewrite.sample</groupId>
  <artifactId>ee7-ejb</artifactId>
  <version>1.0-SNAPSHOT</version>
  <name>Sample Java EE7 EJB Module</name>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
  </properties>
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>io.quarkus.platform</groupId>
        <artifactId>quarkus-bom</artifactId>
        <version>2.16.12.Final</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <dependencies>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-arc</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-hibernate-orm</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-jdbc-h2</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-resteasy</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-resteasy-jackson</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-undertow</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-junit5</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>io.rest-assured</groupId>
      <artifactId>rest-assured</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>
  <build>
    <plugins>
      <plugin>
        <groupId>io.quarkus.platform</groupId>
        <artifactId>quarkus-maven-plugin</artifactId>
        <version>2.16.12.Final</version>
        <executions>
          <execution>
            <goals>
              <goal>build</goal>
              <goal>generate-code</goal>
              <goal>generate-code-tests</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.13.0</version>
        <configuration>
          <compilerArgs>
            <arg>-parameters</arg>
          </compilerArgs>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.3.1</version>
        <configuration>
          <systemPropertyVariables>
            <java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager>
            <maven.home>${maven.home}</maven.home>
          </systemPropertyVariables>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-failsafe-plugin</artifactId>
        <version>3.3.1</version>
        <executions>
          <execution>
            <goals>
              <goal>integration-test</goal>
              <goal>verify</goal>
            </goals>
          </execution>
        </executions>
        <configuration>
          <systemPropertyVariables>
            <native.image.path>${project.build.directory}/${project.build.finalName}-runner</native.image.path>
            <java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager>
            <maven.home>${maven.home}</maven.home>
          </systemPropertyVariables>
        </configuration>
      </plugin>
    </plugins>
  </build>
  <profiles>
    <profile>
      <id>native</id>
      <activation>
        <property>
          <name>native</name>
        </property>
      </activation>
      <properties>
        <skipITs>false</skipITs>
        <quarkus.package.type>native</quarkus.package.type>
      </properties>
    </profile>
  </profiles>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,1 +5,0 @@
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.openrewrite.sample</groupId>
- <name>Sample Java EE7 EJB Module</name>
  <artifactId>ee7-ejb</artifactId>
@@ -8,1 +7,1 @@
  <artifactId>ee7-ejb</artifactId>
  <version>1.0-SNAPSHOT</version>
- <packaging>war</packaging>
+ <name>Sample Java EE7 EJB Module</name>

@@ -13,2 +12,2 @@
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
-   <maven.compiler.source>1.8</maven.compiler.source>
-   <maven.compiler.target>1.8</maven.compiler.target>
+   <maven.compiler.source>11</maven.compiler.source>
+   <maven.compiler.target>11</maven.compiler.target>
  </properties>
@@ -16,0 +15,11 @@
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>
+ <dependencyManagement>
+   <dependencies>
+     <dependency>
+       <groupId>io.quarkus.platform</groupId>
+       <artifactId>quarkus-bom</artifactId>
+       <version>2.16.12.Final</version>
+       <type>pom</type>
+       <scope>import</scope>
+     </dependency>
+   </dependencies>
+ </dependencyManagement>

@@ -19,4 +29,2 @@
  <dependencies>
    <dependency>
-     <groupId>javax</groupId>
-     <artifactId>javaee-api</artifactId>
-     <version>7.0</version>
-     <scope>provided</scope>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-arc</artifactId>
    </dependency>
@@ -25,4 +33,2 @@
    </dependency>
    <dependency>
-     <groupId>javax.annotation</groupId>
-     <artifactId>javax.annotation-api</artifactId>
-     <version>1.3.2</version>
-     <scope>provided</scope>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-hibernate-orm</artifactId>
    </dependency>
@@ -30,0 +36,26 @@
      <scope>provided</scope>
    </dependency>
+   <dependency>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-jdbc-h2</artifactId>
+   </dependency>
+   <dependency>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-resteasy</artifactId>
+   </dependency>
+   <dependency>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-resteasy-jackson</artifactId>
+   </dependency>
+   <dependency>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-undertow</artifactId>
+   </dependency>
+   <dependency>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-junit5</artifactId>
+     <scope>test</scope>
+   </dependency>
+   <dependency>
+     <groupId>io.rest-assured</groupId>
+     <artifactId>rest-assured</artifactId>
+     <scope>test</scope>
+   </dependency>
  </dependencies>
@@ -31,0 +63,73 @@
    </dependency>
  </dependencies>
+ <build>
+   <plugins>
+     <plugin>
+       <groupId>io.quarkus.platform</groupId>
+       <artifactId>quarkus-maven-plugin</artifactId>
+       <version>2.16.12.Final</version>
+       <executions>
+         <execution>
+           <goals>
+             <goal>build</goal>
+             <goal>generate-code</goal>
+             <goal>generate-code-tests</goal>
+           </goals>
+         </execution>
+       </executions>
+     </plugin>
+     <plugin>
+       <groupId>org.apache.maven.plugins</groupId>
+       <artifactId>maven-compiler-plugin</artifactId>
+       <version>3.13.0</version>
+       <configuration>
+         <compilerArgs>
+           <arg>-parameters</arg>
+         </compilerArgs>
+       </configuration>
+     </plugin>
+     <plugin>
+       <groupId>org.apache.maven.plugins</groupId>
+       <artifactId>maven-surefire-plugin</artifactId>
+       <version>3.3.1</version>
+       <configuration>
+         <systemPropertyVariables>
+           <java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager>
+           <maven.home>${maven.home}</maven.home>
+         </systemPropertyVariables>
+       </configuration>
+     </plugin>
+     <plugin>
+       <groupId>org.apache.maven.plugins</groupId>
+       <artifactId>maven-failsafe-plugin</artifactId>
+       <version>3.3.1</version>
+       <executions>
+         <execution>
+           <goals>
+             <goal>integration-test</goal>
+             <goal>verify</goal>
+           </goals>
+         </execution>
+       </executions>
+       <configuration>
+         <systemPropertyVariables>
+           <native.image.path>${project.build.directory}/${project.build.finalName}-runner</native.image.path>
+           <java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager>
+           <maven.home>${maven.home}</maven.home>
+         </systemPropertyVariables>
+       </configuration>
+     </plugin>
+   </plugins>
+ </build>
+ <profiles>
+   <profile>
+     <id>native</id>
+     <activation>
+       <property>
+         <name>native</name>
+       </property>
+     </activation>
+     <properties>
+       <skipITs>false</skipITs>
+       <quarkus.package.type>native</quarkus.package.type>
+     </properties>
+   </profile>
+ </profiles>
</project>
```
</TabItem>
</Tabs>

---

##### Example 2
`JavaEEtoQuarkus2MavenDependenciesMigrationTest#convertJavaEEToQuarkusDependencies1`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.openrewrite.sample</groupId>
  <name>Sample Java EE7 EJB Module</name>
  <artifactId>ee7-ejb</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>war</packaging>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>

  <dependencies>
    <dependency>
      <groupId>javax</groupId>
      <artifactId>javaee-api</artifactId>
      <version>7.0</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>javax.annotation</groupId>
      <artifactId>javax.annotation-api</artifactId>
      <version>1.3.2</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.openrewrite.sample</groupId>
  <artifactId>ee7-ejb</artifactId>
  <version>1.0-SNAPSHOT</version>
  <name>Sample Java EE7 EJB Module</name>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
  </properties>
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>io.quarkus.platform</groupId>
        <artifactId>quarkus-bom</artifactId>
        <version>2.16.12.Final</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <dependencies>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-arc</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-hibernate-orm</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-jdbc-h2</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-resteasy</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-resteasy-jackson</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-undertow</artifactId>
    </dependency>
    <dependency>
      <groupId>io.quarkus</groupId>
      <artifactId>quarkus-junit5</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>io.rest-assured</groupId>
      <artifactId>rest-assured</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>
  <build>
    <plugins>
      <plugin>
        <groupId>io.quarkus.platform</groupId>
        <artifactId>quarkus-maven-plugin</artifactId>
        <version>2.16.12.Final</version>
        <executions>
          <execution>
            <goals>
              <goal>build</goal>
              <goal>generate-code</goal>
              <goal>generate-code-tests</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.13.0</version>
        <configuration>
          <compilerArgs>
            <arg>-parameters</arg>
          </compilerArgs>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>3.3.1</version>
        <configuration>
          <systemPropertyVariables>
            <java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager>
            <maven.home>${maven.home}</maven.home>
          </systemPropertyVariables>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-failsafe-plugin</artifactId>
        <version>3.3.1</version>
        <executions>
          <execution>
            <goals>
              <goal>integration-test</goal>
              <goal>verify</goal>
            </goals>
          </execution>
        </executions>
        <configuration>
          <systemPropertyVariables>
            <native.image.path>${project.build.directory}/${project.build.finalName}-runner</native.image.path>
            <java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager>
            <maven.home>${maven.home}</maven.home>
          </systemPropertyVariables>
        </configuration>
      </plugin>
    </plugins>
  </build>
  <profiles>
    <profile>
      <id>native</id>
      <activation>
        <property>
          <name>native</name>
        </property>
      </activation>
      <properties>
        <skipITs>false</skipITs>
        <quarkus.package.type>native</quarkus.package.type>
      </properties>
    </profile>
  </profiles>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,1 +5,0 @@
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.openrewrite.sample</groupId>
- <name>Sample Java EE7 EJB Module</name>
  <artifactId>ee7-ejb</artifactId>
@@ -8,1 +7,1 @@
  <artifactId>ee7-ejb</artifactId>
  <version>1.0-SNAPSHOT</version>
- <packaging>war</packaging>
+ <name>Sample Java EE7 EJB Module</name>

@@ -13,2 +12,2 @@
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
-   <maven.compiler.source>1.8</maven.compiler.source>
-   <maven.compiler.target>1.8</maven.compiler.target>
+   <maven.compiler.source>11</maven.compiler.source>
+   <maven.compiler.target>11</maven.compiler.target>
  </properties>
@@ -16,0 +15,11 @@
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>
+ <dependencyManagement>
+   <dependencies>
+     <dependency>
+       <groupId>io.quarkus.platform</groupId>
+       <artifactId>quarkus-bom</artifactId>
+       <version>2.16.12.Final</version>
+       <type>pom</type>
+       <scope>import</scope>
+     </dependency>
+   </dependencies>
+ </dependencyManagement>

@@ -19,4 +29,2 @@
  <dependencies>
    <dependency>
-     <groupId>javax</groupId>
-     <artifactId>javaee-api</artifactId>
-     <version>7.0</version>
-     <scope>provided</scope>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-arc</artifactId>
    </dependency>
@@ -25,4 +33,2 @@
    </dependency>
    <dependency>
-     <groupId>javax.annotation</groupId>
-     <artifactId>javax.annotation-api</artifactId>
-     <version>1.3.2</version>
-     <scope>provided</scope>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-hibernate-orm</artifactId>
    </dependency>
@@ -30,0 +36,26 @@
      <scope>provided</scope>
    </dependency>
+   <dependency>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-jdbc-h2</artifactId>
+   </dependency>
+   <dependency>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-resteasy</artifactId>
+   </dependency>
+   <dependency>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-resteasy-jackson</artifactId>
+   </dependency>
+   <dependency>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-undertow</artifactId>
+   </dependency>
+   <dependency>
+     <groupId>io.quarkus</groupId>
+     <artifactId>quarkus-junit5</artifactId>
+     <scope>test</scope>
+   </dependency>
+   <dependency>
+     <groupId>io.rest-assured</groupId>
+     <artifactId>rest-assured</artifactId>
+     <scope>test</scope>
+   </dependency>
  </dependencies>
@@ -31,0 +63,73 @@
    </dependency>
  </dependencies>
+ <build>
+   <plugins>
+     <plugin>
+       <groupId>io.quarkus.platform</groupId>
+       <artifactId>quarkus-maven-plugin</artifactId>
+       <version>2.16.12.Final</version>
+       <executions>
+         <execution>
+           <goals>
+             <goal>build</goal>
+             <goal>generate-code</goal>
+             <goal>generate-code-tests</goal>
+           </goals>
+         </execution>
+       </executions>
+     </plugin>
+     <plugin>
+       <groupId>org.apache.maven.plugins</groupId>
+       <artifactId>maven-compiler-plugin</artifactId>
+       <version>3.13.0</version>
+       <configuration>
+         <compilerArgs>
+           <arg>-parameters</arg>
+         </compilerArgs>
+       </configuration>
+     </plugin>
+     <plugin>
+       <groupId>org.apache.maven.plugins</groupId>
+       <artifactId>maven-surefire-plugin</artifactId>
+       <version>3.3.1</version>
+       <configuration>
+         <systemPropertyVariables>
+           <java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager>
+           <maven.home>${maven.home}</maven.home>
+         </systemPropertyVariables>
+       </configuration>
+     </plugin>
+     <plugin>
+       <groupId>org.apache.maven.plugins</groupId>
+       <artifactId>maven-failsafe-plugin</artifactId>
+       <version>3.3.1</version>
+       <executions>
+         <execution>
+           <goals>
+             <goal>integration-test</goal>
+             <goal>verify</goal>
+           </goals>
+         </execution>
+       </executions>
+       <configuration>
+         <systemPropertyVariables>
+           <native.image.path>${project.build.directory}/${project.build.finalName}-runner</native.image.path>
+           <java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager>
+           <maven.home>${maven.home}</maven.home>
+         </systemPropertyVariables>
+       </configuration>
+     </plugin>
+   </plugins>
+ </build>
+ <profiles>
+   <profile>
+     <id>native</id>
+     <activation>
+       <property>
+         <name>native</name>
+       </property>
+     </activation>
+     <properties>
+       <skipITs>false</skipITs>
+       <quarkus.package.type>native</quarkus.package.type>
+     </properties>
+   </profile>
+ </profiles>
</project>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-quarkus` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2Migration")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2Migration")
        setExportDatatables(true)
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

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-quarkus:RELEASE -Drewrite.activeRecipes=org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2Migration -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JavaEEtoQuarkus2Migration
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2Migration" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
