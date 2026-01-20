---
sidebar_label: "Find command injection vulnerabilities"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find command injection vulnerabilities

**org.openrewrite.analysis.java.security.FindCommandInjection**

_Detects when user-controlled input flows into system command execution methods like Runtime.exec() or ProcessBuilder, which could allow attackers to execute arbitrary commands._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Examples
##### Example 1
`ArrayAccessTaintTest#taintedArrayElement`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.servlet.http.HttpServletRequest;

class Test {
    void method(HttpServletRequest request) throws Exception {
        String[] commands = new String[10];
        commands[0] = request.getParameter("cmd");
        Runtime.getRuntime().exec(commands[0]);
    }
}
```

###### After
```java
import javax.servlet.http.HttpServletRequest;

class Test {
    void method(HttpServletRequest request) throws Exception {
        String[] commands = new String[10];
        commands[0] = request.getParameter("cmd");
        /*~~(COMMAND_INJECTION use)~~>*/Runtime.getRuntime().exec(commands[0]);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,1 @@
        String[] commands = new String[10];
        commands[0] = request.getParameter("cmd");
-       Runtime.getRuntime().exec(commands[0]);
+       /*~~(COMMAND_INJECTION use)~~>*/Runtime.getRuntime().exec(commands[0]);
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`CommandInjectionWithStdlibTest#detectsRuntimeExecWithSystemProperty`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class CommandExecutor {
    void execute() throws Exception {
        String cmd = System.getProperty("user.command");
        Runtime.getRuntime().exec(cmd);
    }
}
```

###### After
```java
class CommandExecutor {
    void execute() throws Exception {
        String cmd = System.getProperty("user.command");
        /*~~(Command injection risk)~~>*/Runtime.getRuntime().exec(cmd);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,1 @@
    void execute() throws Exception {
        String cmd = System.getProperty("user.command");
-       Runtime.getRuntime().exec(cmd);
+       /*~~(Command injection risk)~~>*/Runtime.getRuntime().exec(cmd);
    }
```
</TabItem>
</Tabs>

---

##### Example 3
`ContextSensitiveTaintAnalysisTest#contextSensitiveFieldPropagation`


###### Unchanged
```java
import javax.servlet.http.HttpServletRequest;

public class ContextExample {
    private String command;

    // Safe context - called with hardcoded value
    public void initSafe() {
        setCommand("ls -la");
    }

    // Unsafe context - called with user input
    public void initUnsafe(HttpServletRequest request) {
        String userCmd = request.getParameter("cmd");
        setCommand(userCmd);
    }

    // Helper method that sets the field
    private void setCommand(String cmd) {
        this.command = cmd;
    }

    // Uses the field - should only be flagged if initUnsafe was called
    public void execute() throws Exception {
        Runtime.getRuntime().exec(this.command);
    }
}
```

---

##### Example 4
`FindCommandInjectionTest#detectsRuntimeExecWithUserInput`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.servlet.http.HttpServletRequest;

class CommandExecutor {
    void execute(HttpServletRequest request) throws Exception {
        String cmd = request.getParameter("command");
        Runtime.getRuntime().exec(cmd);
    }
}
```

###### After
```java
import javax.servlet.http.HttpServletRequest;

class CommandExecutor {
    void execute(HttpServletRequest request) throws Exception {
        String cmd = request.getParameter("command");
        /*~~(COMMAND_INJECTION use)~~>*/Runtime.getRuntime().exec(cmd);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -6,1 +6,1 @@
    void execute(HttpServletRequest request) throws Exception {
        String cmd = request.getParameter("command");
-       Runtime.getRuntime().exec(cmd);
+       /*~~(COMMAND_INJECTION use)~~>*/Runtime.getRuntime().exec(cmd);
    }
```
</TabItem>
</Tabs>

---

##### Example 5
`MemberReferenceTaintTest#taintThroughInstanceMethodReference`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.servlet.http.HttpServletRequest;
import java.util.function.Consumer;

class CommandProcessor {
    void process(HttpServletRequest request) throws Exception {
        String cmd = request.getParameter("command");
        Consumer<String> executor = Runtime.getRuntime()::exec;
        executor.accept(cmd);
    }
}
```

###### After
```java
import javax.servlet.http.HttpServletRequest;
import java.util.function.Consumer;

class CommandProcessor {
    void process(HttpServletRequest request) throws Exception {
        String cmd = request.getParameter("command");
        Consumer<String> executor = Runtime.getRuntime()::exec;
        /*~~>*/executor.accept(cmd);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -8,1 +8,1 @@
        String cmd = request.getParameter("command");
        Consumer<String> executor = Runtime.getRuntime()::exec;
-       executor.accept(cmd);
+       /*~~>*/executor.accept(cmd);
    }
```
</TabItem>
</Tabs>

---

##### Example 6
`MethodReferenceFlowTest#taintFlowThroughInstanceMethodReference`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.List;

class Test {
    void method(HttpServletRequest request) {
        List<String> commands = Arrays.asList(
            request.getParameter("cmd1"),
            request.getParameter("cmd2")
        );
        commands.forEach(this::executeCommand);
    }

    void executeCommand(String cmd) {
        try {
            Runtime.getRuntime().exec(cmd);
        } catch (Exception e) {
            // ignore
        }
    }
}
```

###### After
```java
import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.List;

class Test {
    void method(HttpServletRequest request) {
        List<String> commands = Arrays.asList(
            request.getParameter("cmd1"),
            request.getParameter("cmd2")
        );
        commands.forEach(this::executeCommand);
    }

    void executeCommand(String cmd) {
        try {
            /*~~(COMMAND_INJECTION use)~~>*/Runtime.getRuntime().exec(cmd);
        } catch (Exception e) {
            // ignore
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -16,1 +16,1 @@
    void executeCommand(String cmd) {
        try {
-           Runtime.getRuntime().exec(cmd);
+           /*~~(COMMAND_INJECTION use)~~>*/Runtime.getRuntime().exec(cmd);
        } catch (Exception e) {
```
</TabItem>
</Tabs>

---

##### Example 7
`NestedMethodCallTest#stepByStep`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.servlet.http.HttpServletRequest;

public class StepByStep {
    public void handleRequest(HttpServletRequest request) throws Exception {
        // Step 1: Get tainted value
        String tainted = request.getParameter("cmd");

        // Step 2: Pass through transform
        String transformed = transform(tainted);

        // Step 3: Use in sink
        Runtime.getRuntime().exec(transformed);
    }

    private String transform(String input) {
        return "cmd " + input;
    }
}
```

###### After
```java
import javax.servlet.http.HttpServletRequest;

public class StepByStep {
    public void handleRequest(HttpServletRequest request) throws Exception {
        // Step 1: Get tainted value
        String tainted = request.getParameter("cmd");

        // Step 2: Pass through transform
        String transformed = transform(tainted);

        // Step 3: Use in sink
        /*~~(COMMAND_INJECTION use)~~>*/Runtime.getRuntime().exec(transformed);
    }

    private String transform(String input) {
        return "cmd " + input;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -12,1 +12,1 @@

        // Step 3: Use in sink
-       Runtime.getRuntime().exec(transformed);
+       /*~~(COMMAND_INJECTION use)~~>*/Runtime.getRuntime().exec(transformed);
    }
```
</TabItem>
</Tabs>

---

##### Example 8
`ReturnValuePropagationTest#chainedMethodCalls`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.servlet.http.HttpServletRequest;

public class ChainedCalls {
    public void handleRequest(HttpServletRequest request) throws Exception {
        // Taint should flow through the chain
        String cmd = request.getParameter("cmd")
            .trim()
            .toUpperCase()
            .replace("BAD", "GOOD");
        Runtime.getRuntime().exec(cmd);
    }
}
```

###### After
```java
import javax.servlet.http.HttpServletRequest;

public class ChainedCalls {
    public void handleRequest(HttpServletRequest request) throws Exception {
        // Taint should flow through the chain
        String cmd = request.getParameter("cmd")
            .trim()
            .toUpperCase()
            .replace("BAD", "GOOD");
        /*~~>*/Runtime.getRuntime().exec(cmd);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -10,1 +10,1 @@
            .toUpperCase()
            .replace("BAD", "GOOD");
-       Runtime.getRuntime().exec(cmd);
+       /*~~>*/Runtime.getRuntime().exec(cmd);
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindCommandInjection
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-program-analysis:{{VERSION_IO_MODERNE_RECIPE_REWRITE_PROGRAM_ANALYSIS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.analysis.java.security.FindCommandInjection" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.analysis.java.taint.table.TaintFlowTable" label="TaintFlowTable">

### Taint flow
**org.openrewrite.analysis.java.taint.table.TaintFlowTable**

_Records taint flows from sources to sinks with their taint types._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file that the method call occurred in. |
| Source line | The line number where the taint source is located. |
| Source | The source code where taint originates. |
| Sink line | The line number where the taint sink is located. |
| Sink | The sink code where taint flows to. |
| Taint type | The taint type that matched at the sink. |

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

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

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
