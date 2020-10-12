---
description: Publishing a serialized AST jar to a remote Maven Repository
---

# Publishing ASTs

### Publishing ASTs to a Remote Maven Repository

The Rewrite Maven plugin defines a `rewrite:publish` goal that serializes abstract syntax trees for both the main and test source sets to a compact JSON Smile format and places them in a special JAR file with paths relative to the root of the project.

This AST JAR can be used for batch processing of ASTs across a large number of repositories without having to clone the original project, resolve dependencies, and parse the code again.

To enable the `rewrite:publish` goal, add an `<executions>` block to your plugin configuration as shown below. Note that you may choose to _only_ do this and not configure any recipes at all, relying solely on a batch offline process to transform your organization's source code.

```markup
<plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>2.2.1</version>
    <executions>
      <execution>
        <goals>
          <goal>publish</goal>
        </goals>
      </execution>
    </executions>
</plugin>
```

Notice how the file listing in the resulting JAR is relativized to the project directory. In spite of the file extension, the contents of these files are JSON Smile.

![](../../.gitbook/assets/image%20%2812%29.png)

