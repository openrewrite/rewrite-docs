# YAML LST examples

When building recipes that read or modify YAML files, it's important to understand how the YAML [Lossless Semantic Tree](/concepts-and-explanations/lossless-semantic-trees.md) (LST) is constructed.  

To help you with that, this guide will:

* [Provide a sample chunk of YAML to demonstrate LSTs](#sample-yaml)
* [Discuss how that YAML relates to different types of LSTs](#yaml-lsts)
* [Teach you how to learn more about YAML LSTs yourself](#using-the-debugger-to-detect-lsts) 

{% hint style="info" %}
If you want a more thorough explanation of what LSTs are and how they're used in recipes, please read [this high-level LST explanation](/concepts-and-explanations/lst-examples.md#high-level-lst-explanation).
{% endhint %}

## Sample YAML

Below is a simple YAML file whose entire purpose is to demonstrate different types of LSTs. Each of the following sections will highlight different parts of this file to demonstrate which chunks correspond to which LST. This listing of LSTs is not exhausting, but it should give you a good sense of the most common types.

```yaml
document: this is document 1

jedis-list:
  - Yoda
  - Qui-Gon Jinn
  - Obi-Wan Kenobi
  - Luke Skywalker

jedi:
  name: Obi-Wan Kenobi
  home-planet: Stewjon
  height: 1.82m

requests:
  - http://example.com/
  - url: http://example.com/
    method: GET
---
document: this is document 2

reporting:
- module: final-stats
- module: console
---
- item_1
- item_2
```

## YAML LSTs

### Documents

The [Documents LST](https://github.com/openrewrite/rewrite/blob/v7.35.0/rewrite-yaml/src/main/java/org/openrewrite/yaml/tree/Yaml.java#L65-L129) is the root of the YAML LST. In order for an LST to represent valid YAML, all other elements must be contained inside of this. It is composed of one or more [Document LSTs](#document).

![Documents Example](/.gitbook/assets/Documents.png)

### Document

The [Document LST](https://github.com/openrewrite/rewrite/blob/v7.35.0/rewrite-yaml/src/main/java/org/openrewrite/yaml/tree/Yaml.java#L134-L187) contains all of the YAML in a single document. A YAML file can have more than one document - with each document being separated by a line containing the triple-dash separator `---`.

![Document Example](/.gitbook/assets/Document.png)

### Mapping

A [Mapping](https://github.com/openrewrite/rewrite/blob/v7.35.0/rewrite-yaml/src/main/java/org/openrewrite/yaml/tree/Yaml.java#L232-L305) consists of 1 or more [Mapping Entries](#mapping-entry) (key-value pairs). Most YAML files will contain at least one Mapping.

{% hint style="info" %}
The `module` lines in the `reporting` section of the second document are not part of the same `Mapping` as each line is a [Sequence Entry](#sequence-entry). In contrast, the `url` and `method` lines in the `requests` section of the first document _are_ part of the same mapping as, together, they make up one Sequence Entry.
{% endhint %}

![Mapping Example](/.gitbook/assets/Mapping.png)

### Mapping Entry

A [Mapping Entry](https://github.com/openrewrite/rewrite/blob/v7.35.0/rewrite-yaml/src/main/java/org/openrewrite/yaml/tree/Yaml.java#L281-L304) is a key-value pair. The key is usually a [Scalar](#scalar). The value, on the other hand, can be most LSTs such as a [Mapping](#mapping), a [Sequence](#sequence), or a [Scalar](#scalar).

For example, the second entry in the first doc (`jedis-list`) has a [Scalar](#scalar) key. The value for that entry is a [Sequence](#sequence) that contains a list of all the Jedi.

![Mapping Entry Example](/.gitbook/assets/MappingEntry.png)

### Sequence

A [Sequence](https://github.com/openrewrite/rewrite/blob/v7.35.0/rewrite-yaml/src/main/java/org/openrewrite/yaml/tree/Yaml.java#L311-L405) is an ordered list of 1 or more [Sequence Entries](#sequence-entry).

![Sequence Example](/.gitbook/assets/Sequence.png)

### Sequence Entry

A [Sequence Entry](https://github.com/openrewrite/rewrite/blob/v7.35.0/rewrite-yaml/src/main/java/org/openrewrite/yaml/tree/Yaml.java#L361-L404) is one item in a [Sequence](#sequence). You can think of each sequence entry as the value in a key-value pair. This value can be most other LSTs, such as a [Mapping](#mapping) or a [Scalar](#scalar). Unlike [Mapping Entries](#mapping-entry), Sequence Entries do not have a key.

![Sequence Entry Example](/.gitbook/assets/SequenceEntry.png)

### Scalar

A [Scalar](https://github.com/openrewrite/rewrite/blob/v7.35.0/rewrite-yaml/src/main/java/org/openrewrite/yaml/tree/Yaml.java#L192-L226) is a YAML value such as a string, a number, or a boolean.

![Scalar Example](/.gitbook/assets/Scalar.png)

## Using the debugger to detect LSTs

If you find yourself still unsure what makes up a particular LST or if you want to traverse the LST yourself, you can use the Java debugger to help you.

To do so, make a simple recipe that uses the `YamlIsoVisitor`:

```java
package com.yourorg;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.yaml.YamlIsoVisitor;
import org.openrewrite.yaml.tree.Yaml;

public class TestYaml extends Recipe {
    @Override
    public String getDisplayName() {
        return "test";
    }

    @Override
    public String getDescription() {
        return "test test.";
    }

    @Override
    protected YamlIsoVisitor<ExecutionContext> getVisitor() {
        return new YamlIsoVisitor<ExecutionContext>() {
            @Override
            public Yaml.Documents visitDocuments(Yaml.Documents documents, ExecutionContext executionContext) {
                // Add a breakpoint on the next line
                return super.visitDocuments(documents, executionContext);
            }
        };
    }
}
```

Next, make a simple test that contains the YAML you want to learn more about:

```java
package com.yourorg;

import org.junit.jupiter.api.Test;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.yaml.Assertions.yaml;

public class TestYamlTest implements RewriteTest {

    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(new TestYaml());
    }

    @Test
    void debugTest() {
        rewriteRun(
            yaml(
                """
                    document: this is document 1
                    
                    jedis-list:
                    - Yoda
                    - Qui-Gon Jinn
                    - Obi-Wan Kenobi
                    - Luke Skywalker
                    
                    jedi:
                    name: Obi-Wan Kenobi
                    home-planet: Stewjon
                    height: 1.82m
                    
                    requests:
                    - http://example.com/
                    - url: http://example.com/
                        method: GET
                    ---
                    document: this is document 2
                    
                    reporting:
                    - module: final-stats
                    - module: console
                    ---
                    - item_1
                    - item_2
                """
            )
        );
    }
}
```

With those created, you can add a breakpoint inside of the overridden `visitDocuments()` method in your recipe. Then, when you debug your recipe, you'll be able to see the entire LST and traverse through it as you desire:

![YAML Debugger Example](/.gitbook/assets/YAMLDebugger.png)