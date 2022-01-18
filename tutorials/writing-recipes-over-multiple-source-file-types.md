# Writing recipes over multiple source file types

Sometimes we need to examine multiple source files or multiple types of source files to make a decision in a visitor about whether we intend to make a change. For example, we could be looking for a particular condition to be present in a Maven POM file, and if the condition is met alter an application property in a YAML file.

Use the `visit(List<SourceFile> before, ExecutionContext ctx)` method on `Recipe` to iterate over and maintain decision state, and then `ListUtils.map` to execute the transformation.

```
package org.openrewrite;

import org.openrewrite.internal.ListUtils;
import org.openrewrite.maven.tree.Maven;
import org.openrewrite.yaml.YamlVisitor;

import java.util.List;

public class MavenYamlRecipe extends Recipe {
    @Override
    public String getDisplayName() {
        return "Something with Maven and something with YAML";
    }

    @Override
    protected List<SourceFile> visit(List<SourceFile> before, ExecutionContext ctx) {
        boolean pomConditionMet = false;
        for (SourceFile sourceFile : before) {
            if(sourceFile instanceof Maven) {
                Maven m = (Maven) sourceFile;
                // pomConditionMet = ...
            }
        }

        return ListUtils.map(before, sourceFile -> (SourceFile) new YamlVisitor<Integer>() {
            // whatever your YAML visitor does can now respond to pomConditionMet
        }.visitNonNull(sourceFile, 0));
    }
}
```
