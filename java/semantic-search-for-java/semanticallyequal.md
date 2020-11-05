---
description: Determine semantic equality between two abstract syntax trees.
---

# SemanticallyEqual

## Definition

```java
J.Annotation annot;
J.Annotation otherAnnot;

SemanticallyEqual semEq = new SemanticallyEqual(annot);
Boolean isEqual = semEq.visit(otherAnnot);
```

`SemanticallyEqual` recursively checks the equality of each element of two abstract syntax trees (ASTs) to determine if the two trees are semantically equal. This is necessary because ASTs are so frequently recreated that merely comparing the IDs of two ASTs is ineffective.

{% hint style="info" %}
`SemanticallyEqual` has only been implemented for annotations for now.
{% endhint %}

```kotlin
val cu = jp.parse(
    """
        @Tag(FastTests.class)
        @Tag(FastTests.class)
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
