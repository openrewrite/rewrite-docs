# Writing recipes over multiple source file types

When creating new recipes, you may find it desirable to examine multiple source files, potentially of different types, to make key decisions in your visitor. For example, you may want to look for a particular condition to be present in a Maven POM file and, if that condition is met, alter an application property in a YAML file.

In situations like that, you should create a [ScanningRecipe](https://github.com/openrewrite/rewrite/blob/v8.1.2/rewrite-core/src/main/java/org/openrewrite/ScanningRecipe.java). In there, you'll then make an `accumulator` which visitors can read from and write to as needed. For a more thorough explanation of scanning recipes, please see [What is a ScanningRecipe?](/changelog/8-1-2-Release.md#what-is-a-scanningrecipe)

Below you can find an example of a `ScanningRecipe` that does what we described earlier:

```java
import org.openrewrite.*;
import org.openrewrite.internal.lang.Nullable;
import org.openrewrite.yaml.YamlVisitor;

public class MavenYamlRecipe extends ScanningRecipe<MavenYamlRecipe.Accumulator> {
    @Override
    public String getDisplayName() {
        return "Something with Maven and something with YAML";
    }

    @Override
    public String getDescription() {
        return "Something with Maven and something with YAML.";
    }

    @Override
    public Accumulator getInitialValue(ExecutionContext ctx) {
        return new Accumulator();
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getScanner(Accumulator acc) {
        return new TreeVisitor<Tree, ExecutionContext>() {
            @Override
            public Tree visit(@Nullable Tree tree, ExecutionContext executionContext) {
                if (!(tree instanceof SourceFile)) {
                    return tree;
                }

                SourceFile sourceFile = (SourceFile) tree;
                String sourcePath = PathUtils.separatorsToUnix(sourceFile.getSourcePath().toString());
                if (sourcePath.equals("pom.xml")) {
                    // it's a maven project
                    // have a xml visitor to check whether "pom.xml" meet some condition, assume it's true here
                    boolean isPomConditionMet = true;

                    // set it in Accumulator
                    acc.pomConditionMet = isPomConditionMet;
                }

                return tree;
            }
        };
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor(Accumulator acc) {
        if (!acc.pomConditionMet) {
            // if pom condition not met, do nothing
            return TreeVisitor.noop();
        }

        // whatever your YAML visitor does can now respond to pomConditionMet
        return new YamlVisitor<ExecutionContext>(){
            // some logic
        };
    }

    // @Data
    static class Accumulator {
        boolean pomConditionMet = false;
        // something else if needed from scanner
    }
}
```

To write a unit test that tests multiple source file types, use their respective parsers:

```kotlin
package org.openrewrite

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.openrewrite.maven.MavenParser
import org.openrewrite.yaml.YamlParser

class MavenYamlTest {

    @Test
    fun mavenYaml() {
        val sources =
            MavenParser.builder().build().parse(
                """
                    <project>
                        <groupId>org.openrewrite</groupId>
                        <artifactId>test</artifactId>
                        <version>0.1.0</version>
                    </project>
                """
            ).plus(
                YamlParser().parse("""
                  key: value
                """)
            )

        val results = MavenYaml().run(sources)
        assertThat(results.map { it.after!!.printAll() }).containsExactly(
            """
                key: changedValue
            """.trimIndent()
        )
    }
}
```
 