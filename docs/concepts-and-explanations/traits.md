---
sidebar_label: Traits
description: A technical overview of traits along with real-world examples of their uses.
---

import ReactPlayer from 'react-player';

# Traits

In OpenRewrite, traits are high-level abstractions that simplify accessing and modifying [LST elements](./lst-examples.md). They can greatly simplify recipe development by offering methods to retrieve values or match elements without needing to fully understand the underlying types or code structure.

In this doc, we'll explain how traits came to be, provide some examples, and then show you recipes that use them. By the end, you should have a good idea how to work with traits.

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=lWy-fRQV9-0' controls="true" />

## Background

One challenge we've had for a while is that the [Lossless Semantic Tree](./lossless-semantic-trees.md) (LST) is a fairly low-level representation of code. To effectively work with LSTs, there has been a well-intentioned desire to add higher-level semantic constructs to the LST elements (such as methods for obtaining certain values or objects that encapsulate related pieces of data).

Unfortunately, this poses a problem: there's an infinite amount of ways people may want to expand the APIs on LST elements. This could drown out the commonly used methods with tons of highly-specialized ones. In turn, this makes it harder for people to learn about and work with the LST elements.

To address this problem, we decided to implement the [trait pattern](https://en.wikipedia.org/wiki/Trait_(computer_programming)) in OpenRewrite.

## The trait interface

A trait is, in essence, an interface that has a [cursor](./visitors.md#cursoring) and, inside of the cursor, there is a [tree element](./lst-examples.md).

Below you can find the code for the trait interface. As you can see, it's fairly simplistic in nature. The interesting part comes from how/why it's implemented and used – which we'll explain next.

```java title="Trait.java"
/**
 * A trait captures semantic information related to a syntax element.
 *
 * @param <T> The type of the tree that this trait is related to. When
 *            multiple specific types of tree are possible, this should
 *            be the lowest common super-type of all the types.
 */
public interface Trait<T extends Tree> {
  Cursor getCursor();

  default T getTree() {
      return getCursor().getValue();
  }
}
```

## A real-world example: the Annotated trait

The [src/main/java/com/yourorg/FindSpringBeans.java recipe](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/FindSpringBeans.java) in the recipe starter project is a good example of how to use traits.

To get a better idea of why you may want to use or create a trait, let's consider a real-world example: Java annotations. In Java, you can annotate methods and pass in a `String` to said annotation. _Syntactically_, this can be done in a few ways while keeping the same _semantic_ meaning. For example, you could write:

```java
@AnAnnotation("Hello")
public void foo() {
  // Stuff
}
```

or you could write:

```java
@AnAnnotation(value = "Hello")
public void foo() {
  // Stuff
}
```

As a recipe author working with annotations, you have to be conscious of this difference or you may write a recipe that handles one of these annotations and not the other.

This is the perfect use case for a trait. Rather than having to put a bunch of methods on the `J.Annotation` element, we can create a trait that wraps these syntactic differences and offers a simple method for accessing the value we care about.

In fact, this is what we did with the [Annotated trait](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/trait/Annotated.java).

<details>
<summary>
Implementation of the Annotated trait
</summary>

```java title="Annotated.java"
@Value
public class Annotated implements Trait<J.Annotation> {
    Cursor cursor;

    /**
     * @param defaultAlias The name of the annotation attribute that is aliased to
     *                     "value", if any.
     * @return The attribute value.
     */
    public Optional<Literal> getDefaultAttribute(@Nullable String defaultAlias) {
        if (getTree().getArguments() == null) {
            return Optional.empty();
        }
        for (Expression argument : getTree().getArguments()) {
            if (!(argument instanceof J.Assignment)) {
                return new Literal.Matcher().get(argument, cursor);
            }
        }
        Optional<Literal> valueAttr = getAttribute("value");
        if (valueAttr.isPresent()) {
            return valueAttr;
        }
        return defaultAlias != null ?
                getAttribute(defaultAlias) :
                Optional.empty();
    }

    public Optional<Literal> getAttribute(String attribute) {
        if (getTree().getArguments() == null) {
            return Optional.empty();
        }
        for (Expression argument : getTree().getArguments()) {
            if (argument instanceof J.Assignment) {
                J.Assignment assignment = (J.Assignment) argument;
                if (assignment.getVariable() instanceof J.Identifier) {
                    J.Identifier identifier = (J.Identifier) assignment.getVariable();
                    if (identifier.getSimpleName().equals(attribute)) {
                        return new Literal.Matcher().get(
                                assignment.getAssignment(),
                                new Cursor(cursor, argument)
                        );
                    }
                }
            }
        }
        return Optional.empty();
    }

    @RequiredArgsConstructor
    public static class Matcher extends SimpleTraitMatcher<Annotated> {
        private final AnnotationMatcher matcher;

        public Matcher(String signature) {
            this.matcher = new AnnotationMatcher(signature);
        }

        public Matcher(Class<?> annotationType) {
            this.matcher = new AnnotationMatcher(annotationType);
        }

        @Override
        protected @Nullable Annotated test(Cursor cursor) {
            Object value = cursor.getValue();
            if (value instanceof J.Annotation) {
                J.Annotation annotation = (J.Annotation) value;
                if (matcher.matches(annotation)) {
                    return new Annotated(cursor);
                }
            }
            return null;
        }
    }
}
```

</details>

This trait has a method that really demonstrates how useful traits can be: `getDefaultAttribute`. This method allows someone to grab the underlying value of an annotation without having to worry about _how_ it's actually defined.

### Matchers

If you look at the `Annotated` trait further, you will see there that there is also a `Matcher` class included in it. Having a matcher allows people to filter through a complex LST and identify the pieces of the LST that match this trait – among other benefits.

This is a pattern you will often see in traits. Typically, the `Matcher` class extends the [SimpleTraitMatcher class](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/trait/SimpleTraitMatcher.java).

To get basic matching to work, all you need to do is override the `test` method. This method takes in a cursor that points to a particular LST element and then say: yes or no? Can the LST element pointed to by this cursor be represented with this trait?

```java
@Override
protected @Nullable Annotated test(Cursor cursor) {
    Object value = cursor.getValue();
    if (value instanceof J.Annotation) {
        J.Annotation annotation = (J.Annotation) value;
        if (matcher.matches(annotation)) {
            return new Annotated(cursor);
        }
    }
    return null;
}
```

By adding a matcher to a trait, you also get the useful [asVisitor method](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/trait/SimpleTraitMatcher.java#L73-L83), which allows you to convert the trait into a visitor, which can then be converted into a recipe.

Converting a trait into a recipe makes testing a trait significantly easier, as we can take advantage of the extensive testing framework built for recipes.

You can see this in action in the [AnnotatedTest class](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/test/java/org/openrewrite/java/trait/AnnotatedTest.java).

Below is a snippet one of the tests in this class:

```java
@Test
void attributes() {
    rewriteRun(
        spec -> spec.recipe(RewriteTest.toRecipe(() ->
        annotated("@Example").asVisitor(a -> SearchResult.found(a.getTree(),
            a.getDefaultAttribute("name")
            .map(lit -> lit.getValue(String.class))
            .orElse("unknown"))
        )
        )),
        java(
        """
            import java.lang.annotation.Repeatable;
            @Repeatable
            @interface Example {
                String value() default "";
                String name() default "";
            }
            """
        ),
        java(
        """
            @Example("test")
            @Example(value = "test")
            @Example(name = "test")
            class Test {
            }
            """,
        """
            /*~~(test)~~>*/@Example("test")
            /*~~(test)~~>*/@Example(value = "test")
            /*~~(test)~~>*/@Example(name = "test")
            class Test {
            }
            """
        )
    );
}
```

In this test, you can see that we create a temporary recipe and provide it with a visitor that adds a search marker on all annotations that match the `@Example` annotation and its values. 

This visitor functionality is also quite useful for recipe creation – which we'll discuss next.

## Using a trait in a recipe

Now that we've seen more about what a trait is and how it's defined, let's take a look at how to _use_ traits in recipes.

Specifically, let's take a look at the [HasNamespaceUri recipe](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/search/HasNamespaceUri.java) and how it uses the [Namespaced trait](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/trait/Namespaced.java).

<details>
<summary>
Background on the namespaced trait
</summary>

Namespaces in XML aren't different from any other attribute. However, in some domains, the namespace of an XML document matters. Many people wanted to create recipes that related to this and, in turn, wanted to see an expansion of the XML LST to support this.

While we, technically, could have added more methods to the LST – the best approach was to create a `Namespaced` trait. That way people that care about namespaces can get all of the functionality they need – without polluting the XML LST with stuff that will be largely irrelevant to others.
</details>

The `Namespaced` trait offers a variety of useful methods and an **extensive matcher** that lets you search on common parameters.

We can then use that matcher and the `asVisitor` method it comes with to create everything needed for a recipe that finds XML namespaces URIs and, optionally, filters on XPaths:

```java
@Override
public TreeVisitor<?, ExecutionContext> getVisitor() {
    return Namespaced.matcher()
            .xPath(xPath)
            .uri(namespaceUri)
            .asVisitor(n -> n.getTree() instanceof Xml.Tag ?
                    SearchResult.found(n.getTree()) :
                    n.getTree());
}
```

As you can see, having a useful trait can greatly simplify recipe development. Aside from helping us humans with recipe development, this also can help out generative AI in the future – as it makes recipes more declarative and easier for an AI to create.
