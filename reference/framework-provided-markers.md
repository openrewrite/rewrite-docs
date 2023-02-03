# Framework provided markers

Not everything a [Recipe](/concepts-and-explanations/recipes.md) may wish to know about an [LST](/concepts-and-explanations/lossless-semantic-trees.md) is contained in the LST itself.
OpenRewrite attaches [Markers](/concepts-and-explanations/markers.md) to an LST provide Recipes access to relevant metadata.
This document provides Recipe authors a reference for what metadata is available and how to access it.

## Accessing provided markers

All markers described in this document are found on the root element of the LST.
The root LST element varies by language, but they all implement the `SourceFile` interface.
From anywhere in a [Visitor](/concepts-and-explanations/visitors.md) the cursor can be used to access the markers on the root element like so:

```java
class SomeVisitor implements JavaVisitor<ExecutionContext> {

    @Override
    public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext ctx) {

        // This snippet will retrieve the root element's markers in any language, from anywhere in a visitor
        Markers m = getCursor().firstEnclosing(SourceFile.class).getMarkers();

        // There is only one of each of these markers, so Markers.findFirst() is a convenient way to access them
        Optional<BuildTool> buildTool = m.findFirst(BuildTool.class);

        // Some markers are language-specific
        Optional<JavaProject> javaProject = m.findFirst(JavaProject.class);

        return classDecl;
    }
}
```

## Build markers

These markers are language-independent, appearing on source files of all formats.

### BuildTool

The [BuildTool](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/BuildTool.java) 
marker records the type and version of build tool which produced the LST.
Available on all LSTs produced by one of our build tool plugins.

### BuildEnvironment

The subtypes of [BuildEnvironment](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/BuildEnvironment.java)
record information on the continuous integration environment from within which the LST was produced.
Available on all LSTs produced from a supported CI environment. 

Supported CI environments:

* [Jenkins](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/JenkinsBuildEnvironment.java)
* [Gitlab](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/GitlabBuildEnvironment.java)
* [GithubActions](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/GithubActionsBuildEnvironment.java)
* [Drone](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/DroneBuildEnvironment.java)
* [CircleCi](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/CircleCiBuildEnvironment.java)
* [Travis](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/marker/ci/TravisBuildEnvironment.java)

### GitProvenance

The [GitProvenance](https://github.com/openrewrite/rewrite/blob/master/rewrite-core/src/main/java/org/openrewrite/marker/GitProvenance.java#L34)
marker records Git branch, origin, and change hash.  
Available on all LSTs produced from a Git repository. 

## Java Markers

### NamedStyles

[NamedStyles](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/style/NamedStyles.java)
is a named collection of [styles](styles.md) representing code style/formatting and related configuration options.
If not explicitly configured the code style a project uses will be auto-detected.
It is available on Java source files.

### Checkstyle

The [Checkstyle](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/style/Checkstyle.java)
marker is a `NamedStyles` which records Checkstyle settings.
It is available on Java source files in projects that configure checkstyle.

### JavaProject

[JavaProject](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/marker/JavaProject.java)
 records the publication coordinates (groupId, artifactId, version) of the module which contains the sources. 
Available on all sources, not only Java sources, in projects where these publication coordinates are configured.

### JavaSourceSet
[JavaSourceSet](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/marker/JavaSourceSet.java) 
records the name (usually "main" or "test") of the source set containing the source file, and list of fully qualified type names present on the classpath.
Available on all Java sources, as well as non-Java sources placed in a Java source set's resources directory.

### JavaVersion
[JavaVersion](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/marker/JavaVersion.java)
 records the version of Java used to compile the source, including source and target compatibility.
Available on all Java sources.


## Maven markers

These markers are available on Maven pom.xml sources.

### MavenResolutionResult
[MavenResolutionResult](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/tree/MavenResolutionResult.java)
contains a rich data model of a pom.xml, including full dependency resolution information.

