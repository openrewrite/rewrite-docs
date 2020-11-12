---
description: Upgrade a dependency version using advanced range selectors.
---

# UpgradeDependencyVersion

`UpgradeDependencyVersion` upgrades a first-order Maven dependency using an [advanced range selector](./#advanced-range-selectors).

* `groupId` - The Maven group ID to match.
* `artifactId` - The Maven artifact ID to match. This is optional. Omit if you want to upgrade all dependencies in a family at the same time, for example `com.fasterxml.jackson`.
* `toVersion` - An advanced range selector used to upgrade the dependency.
* `metadataPattern` - An optional regular expression patten to use to match "pre-release" or "metadata" suffixes. In some cases, like we see with Guava, the library author doesn't necessarily follow the intent of semver \(uses `-jre` and `-android` instead of `+jre` and `+android`\), and that's OK. This metadata pattern helps compensate for this.

`UpgradeDependencyVersion` backtracks version specifications to their source. So if the version is a property reference, the transformation updates the property value. If the version is defined in a `dependencyManagement` section, the transforms updates the `dependencyManagement` section.

## Java Definition

```java
MavenParser parser = MavenParser.builder().build();
Iterable<Maven.Pom> poms = parser.parse(...);

UpgradeDependencyVersion udv = new UpgradeDependencyVersion();
udv.setGroupId("com.google.guava");
udv.setArtifctId("guava");
udv.setToVersion("25-29");
udv.setMetadataPattern("-jre");

Collection<Change> changes = new Refactor().visit(udv).fix(poms);
```

## YAML Definition

Adding the following to your rewrite.yml and setting the `com.yourorg.UpgradeGuavaRecipe` recipe as active in your build plugin will apply the visitor as shown in the example.

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.UpgradeGuava
visitors:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: com.google.guava
      artifactId: guava
      toVersion: 25-29
      metadataPattern: '-jre'
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeGuavaRecipe
include:
  - 'com.yourorg.UpgradeGuava'
```

## Example of an Inlined Dependency Version

Before:

```xml
<project>
   ...
   <dependencies>
     <dependency>
       <groupId>com.google.guava</groupId>
       <artifactId>guava</artifactId>
       <version>25.0-jre</version>
     </dependency>
   </dependencies>
</project>
```

After:

```xml
<project>
   ...
   <dependencies>
     <dependency>
       <groupId>com.google.guava</groupId>
       <artifactId>guava</artifactId>
       <version>29.0-jre</version>
     </dependency>
   </dependencies>
</project>
```

## Example of a Property-Based Dependency Version

If the property is instead defined in a parent POM, the version is updated there.

Before:

```xml
<project>
   ...
   <properties>
     <guava.version>25.0-jre</guava.version>
   </properties>

   <dependencies>
     <dependency>
       <groupId>com.google.guava</groupId>
       <artifactId>guava</artifactId>
       <version>${guava.version}</version>
     </dependency>
   </dependencies>
</project>
```

After:

```xml
<project>
   ...
   <properties>
     <guava.version>29.0-jre</guava.version>
   </properties>

   <dependencies>
     <dependency>
       <groupId>com.google.guava</groupId>
       <artifactId>guava</artifactId>
       <version>${guava.version}</version>
     </dependency>
   </dependencies>
</project>
```

## Example of a Dependency-Managed Version

If the `dependencyManagement` section is instead defined in a parent POM, the version is updated there.

Before:

```xml
<project>
   ...
   <dependencyManagement>
     <dependency>
       <groupId>com.google.guava</groupId>
       <artifactId>guava</artifactId>
       <version>25.0-jre</version>
     </dependency>
   </dependencyManagement>

   <dependencies>
     <dependency>
       <groupId>com.google.guava</groupId>
       <artifactId>guava</artifactId>
     </dependency>
   </dependencies>
</project>
```

After:

```xml
<project>
   ...
   <dependencyManagement>
     <dependency>
       <groupId>com.google.guava</groupId>
       <artifactId>guava</artifactId>
       <version>29.0-jre</version>
     </dependency>
   </dependencyManagement>

   <dependencies>
     <dependency>
       <groupId>com.google.guava</groupId>
       <artifactId>guava</artifactId>
     </dependency>
   </dependencies>
</project>
```

