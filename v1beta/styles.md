---
description: >-
  Preserves the stylistic expectations of each project on ASTs generated from
  source files in that project.
---

# Styles

Styles implement the `org.openrewrite.Style` interface.

Styles are given to a `org.openrewrite.Parser` at construction. These styles flow from the parser to any ASTs that are produced by that parser, providing a durable record of the style of the surrounding project that goes with that AST.

Styles are persisted with a top-level `SourceFile` AST element when that AST is serialized. Then when batch processing ASTs from a variety of projects _en masse_, the transformation can be contextualized to the style of the individual projects that source files originated from.

### Declarative Styles

Styles are typically defined declaratively in a YML file an included in an [Environment](environment.md). For example, the style below configures an [import layout style](../java/parsing-java-code.md#import-layout-style) for Java:

```yaml
---
type: specs.openrewrite.org/v1beta/style
name: io.moderne.spring.style

configure:
  org.openrewrite.java.style.ImportLayoutStyle:
    layout:
      classCountToUseStarImport: 999
      nameCountToUseStarImport: 999
      blocks:
        - import java.*
        - <blank line>
        - import javax.*
        - <blank line>
        - import all other imports
        - <blank line>
        - import org.springframework.*
        - <blank line>
        - import static all other imports
```

<table>
  <thead>
    <tr>
      <th style="text-align:left">Property</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">type</td>
      <td style="text-align:left">specs.openrewrite.org.v1beta/style</td>
    </tr>
    <tr>
      <td style="text-align:left">name</td>
      <td style="text-align:left">A namespaced unique name you are giving to the style</td>
    </tr>
    <tr>
      <td style="text-align:left">configure</td>
      <td style="text-align:left">
        <p>A map of configurations.</p>
        <p></p>
        <p>Each first-level map key represents is the fully-qualified class name
          of a <code>Style</code> implementation. The value is itself a map of key-value
          pairs that invoke setters on the style.</p>
      </td>
    </tr>
  </tbody>
</table>

### Next Steps

In [Environment](environment.md), we'll see how these styles are activated and applied to the parsers that consume code. It will also show how to discover and activate recipes of visitors.

