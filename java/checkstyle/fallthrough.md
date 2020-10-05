---
description: How to use the FallThrough visitor
---

# FallThrough

The [FallThrough](https://checkstyle.sourceforge.io/config_coding.html#FallThrough) checkstyle rule checks for fall-through in switch statements and objects unless there is an adjacent comment with the words "fall through", or similar. This visitor adds `break` statements where there is fall-through without such a comment.

## Java Definition

```java
File checkstyleConfig = new File("checkstyle.xml");
Iterable<J.CompilationUnit> cus;

FallThrough check = new FallThrough();
check.setConfigFile(checkstyleConfig);

Collection<Change> changes = new Refactor().visit(check).fix(cus);
```

{% hint style="success" %}
The other configuration options \(other than`setConfigFile`\) are described in [Checkstyle](./#configuration-options).
{% endhint %}

## YAML Definition

```text
---
type: specs.openrewrite.org/v1beta/visitor
name: io.moderne.JultoSlf4j
visitors:
  - org.openrewrite.checkstyles.FallThrough:
    configFile: 'checkstyle.xml'
```

## Example

Cases 0, 1, 5, 6 and 8 have a comment that Checkstyle recognizes as permitting fall-through, so no `break` is inserted. Note that both the inline comment on line 17 and the multi-line comment on line 20 apply to case 5. Case 4 is in a block so there is no fall-through.

### Before:

```java
public class A {
    int i;
    {
        switch (i) {
        case 0:
            i++; // fall through

        case 1:
            i++;
            // falls through
        case 2:
        case 3: {{
        }}
        case 4: {
            i++;
        }
        // fallthrough
        case 5:
            i++;
        /* fallthru */case 6:
            i++;
            // fall-through
        case 7:
            i++;
            break;
        case 8: {
            // fallthrough
        }
        case 9:
            i++;
        }
    }
}
```

### After:

```java
public class A {
    int i;
    {
        switch (i) {
        case 0:
            i++; // fall through

        case 1:
            i++;
            // falls through
        case 2:
            break;
        case 3: {{
            break;
        }}
        case 4: {
            i++;
        }
        // fallthrough
        case 5:
            i++;
        /* fallthru */case 6:
            i++;
            // fall-through
        case 7:
            i++;
            break;
        case 8: {
            // fallthrough
        }
        case 9:
            i++;
        }
    }
}
```

