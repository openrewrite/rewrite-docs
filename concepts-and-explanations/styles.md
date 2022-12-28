---
description: >-
  Preserves the stylistic expectations of each project on LSTs generated from
  source files in that project.
---

# Styles

Styles implement the `org.openrewrite.Style` interface.

Styles are given to a `org.openrewrite.Parser` at construction. These styles flow from the parser to any LSTs that are produced by that parser, providing a durable record of the style of the surrounding project that goes with that LST.

Styles are persisted with a top-level `SourceFile` LST element when that LST is serialized. Then when batch processing LSTs from a variety of projects _en masse_, the transformation can be contextualized to the style of the individual projects that source files originated from.

## Declarative Styles

Styles are typically defined declaratively in a YML file an included in an [Environment](environment.md). For example, the style below configures an import layout style for Java:

```yaml
---
type: specs.openrewrite.org/v1beta/style
name: io.moderne.spring.style
styleConfigs:
  - org.openrewrite.java.style.ImportLayoutStyle:
      classCountToUseStarImport: 999
      nameCountToUseStarImport: 999
      layout:
        - import java.*
        - <blank line>
        - import javax.*
        - <blank line>
        - import all other imports
        - <blank line>
        - import org.springframework.*
        - <blank line>
        - import static all other imports
      packagesToFold:
        - java.awt.*
        - java.swing.*
  - org.openrewrite.java.style.TabsAndIndentsStyle:
      useTabCharacter: true
      tabSize: 1
      indentSize: 1
      continuationIndent: 2
      indentsRelativeToExpressionStart: false
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
      <td style="text-align:left"><code>specs.openrewrite.org./v1beta/style</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">name</td>
      <td style="text-align:left">A name-spaced unique name you are giving to the style</td>
    </tr>
    <tr>
      <td style="text-align:left">styleConfigs</td>
      <td style="text-align:left">
        <p>A list of configurations.</p>
        <p>Each list entry is the fully-qualified class name of a <code>Style</code> implementation.
          The value is itself a map of key-value pairs that invoke setters on the
          style.</p>
      </td>
    </tr>
  </tbody>
</table>

## Next Steps

In [Environment](environment.md), we'll see how these styles are activated and applied to the parsers that consume code. It will also show how to discover and activate recipes of visitors.

