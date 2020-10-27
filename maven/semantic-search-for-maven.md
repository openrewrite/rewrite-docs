# Semantic Search for Maven

Rewrite provides high-level building block search functionality for the most common search needs. Additionally, you can build a custom [visitor](../v1beta/visitor.md) to build custom search logic, potentially composing some of these building blocks.

To get a sense of what's possible, let's start with a simple example.

## Example - Listing Dependencies

The example below is an example of a custom visitor that collects a set of first-order dependencies. This is a contrived example, and it isn't really necessary to build a visitor for this because you could accomplish the same by calling `Maven.Pom#getDependencies()`. But there could well be cases when you need to do much more complicated filtering of dependencies based on the presence of other things in the POM, so it is just an illustration of where you might start.

```java
import org.openrewrite.Tree;
import org.openrewrite.maven.AbstractMavenSourceVisitor;
import org.openrewrite.maven.tree.Maven;

import java.util.Set;

import static java.util.Collections.emptySet;
import static java.util.Collections.singleton;

class FindDependencies extends AbstractMavenSourceVisitor<Set<Maven.Dependency>> {
    @Override
    public Set<Maven.Dependency> defaultTo(Tree t) {
        return emptySet();
    }

    @Override
    public Set<Maven.Dependency> visitDependency(Maven.Dependency dependency) {
        return singleton(dependency);
    }
}
```

```java
MavenParser mp = MavenParser.builder().build();

Maven.Pom pom = mp.
    // uses JEP-355 Text Blocks (a Java 13 preview feature)
    .parse("""
        <project>
          <modelVersion>4.0.0</modelVersion>

          <groupId>com.mycompany.app</groupId>
          <artifactId>my-app</artifactId>
          <version>1</version>

          <dependencies>
            <dependency>
              <groupId>com.google.guava</groupId>
              <artifactId>guava</artifactId>
              <version>29.0-jre</version>
            </dependency>
          </dependencies>
        </project>
    """)
    .iterator()
    .next();
```

