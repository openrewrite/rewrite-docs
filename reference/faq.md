# Frequently asked questions

## I'm getting `java.lang.OutOfMemoryError: Java heap space` when running OpenRewrite. 

You can increase the size of the Java heap to see if that helps:

{% tabs %}
{% tab title="Gradle" %}
```shell
gradle -Dorg.gradle.jvmargs=-Xmx8G rewrite:run
```
{% endtab %}

{% tab title="Maven" %}
```shell
export MAVEN_OPTS="-Xmx8G"
mvn rewrite:run
```
{% endtab %}
{% endtabs %}

## My recipe appears to hang when running. What's happening? Is there a progress report?

OpenRewrite is likely building up a model of your code and resolving types – this can take a while. Right now, there is not a progress report for recipe runs. However, there is a suggestion to add progress indicators that you can +1 [here](https://github.com/openrewrite/rewrite-maven-plugin/issues/544).

## Can I create a report or summary of the changes made through OpenRewrite?

Yes. Take a look at the [getting started with data tables guide](https://docs.moderne.io/user-documentation/data-tables). Right now, data tables can only be accessed through the [Moderne platform](https://app.moderne.io/). Access to these will be made available through the Maven and Gradle plugin soon.

## I want to exclude a single recipe from a collection of recipes.

This is not possible right now and doing so would be quite complicated. For a detailed explanation as to why, check out [this post](https://github.com/openrewrite/rewrite-maven-plugin/pull/569#issuecomment-1576793092).

## Is it possible to pass arguments to a recipe from the command line? I want to programmatically configure complex recipes.

Not right now. This is a particularly difficult problem to address for a couple of reasons:

* Some recipes can be composed of other recipes which could then include other recipes composed of other recipes and so on.
* Some recipes can be used multiple times in one recipe with different parameters such as in [this example](https://github.com/openrewrite/rewrite-migrate-java/blob/v2.0.6/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml#L140-L160).

There is an [open issue](https://github.com/openrewrite/rewrite-maven-plugin/issues/345) for this request that you can +1 or provide feedback on.