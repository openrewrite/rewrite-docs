---
description: Determine semantic equality between two abstract syntax trees.
---

# SemanticallyEqual

{% hint style="info" %}
**Semantic Equality:** Two pieces of code are semantically equal if they produce the same behavior.
{% endhint %}

`SemanticallyEqual` recursively checks the equality of each element of two abstract syntax trees \(ASTs\) to determine if the two trees are semantically equal. This is necessary because ASTs are so frequently recreated that merely comparing the IDs of two ASTs is ineffective.

## Java Definition

{% hint style="warning" %}
`SemanticallyEqual` has only been implemented for annotations for now. File an issue or reach out via the [OpenRewrite Github](https://github.com/openrewrite/rewrite).
{% endhint %}

```java
J.Annotation annot;
J.Annotation otherAnnot;

SemanticallyEqual semEq = new SemanticallyEqual(annot);
Boolean isEqual = semEq.visit(otherAnnot);
```

## Example

This example is in Kotlin. It demonstrates how both the annotation type and arguments must be checked for equality

`@Tag(FastTests.class)` and `@Tag(value = FastTests.class)` would be semantically equal because the latter is a syntactic sugaring of the former. `@Tag(SlowTests.class)` is not semantically equal to either because its argument is different.

```kotlin
val cu = jp.parse(
    """
        @Tag(FastTests.class)
        @Tag(value = FastTests.class)
        @Tag(SlowTests.class)
        class A {}
    """,
    """
        @interface Tags {
            Tag[] value();
        }
    """,
    """
        @java.lang.annotation.Repeatable(Tags.class)
        @interface Tag {
            Class value();
        }
    """,
    "public interface FastTests {}",
    "public interface SlowTests {}"
)

val fastTest = cu[0].classes[0].annotations[0]
val fastTest2 = cu[0].classes[0].annotations[1]
val slowTest = cu[0].classes[0].annotations[2]

assertThat(SemanticallyEqual(fastTest).visit(fastTest2)).isTrue()
assertThat(SemanticallyEqual(fastTest).visit(slowTest)).isFalse()
```

