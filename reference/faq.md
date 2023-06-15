# Frequently asked questions

## I'm getting `java.lang.OutOfMemoryError: Java heap space` when running OpenRewrite. 

You can increase the size of the Java heap to see if that helps:

{% tabs %}
{% tab title="Gradle" %}
```shell
./gradlew -Dorg.gradle.jvmargs=-Xmx8G rewrite:run
```
{% endtab %}

{% tab title="Maven" %}
```shell
export MAVEN_OPTS="-Xmx8G"
./mvnw rewrite:run
```
{% endtab %}
{% endtabs %}

## My recipe appears to hang when running. What's happening? Is there a progress report?

OpenRewrite is likely building up a model of your code and resolving types – this can take a while. Right now, there is not a progress report for recipe runs. However, there is a suggestion to add progress indicators that you can +1 [here](https://github.com/openrewrite/rewrite-maven-plugin/issues/544).

## Can I create a report or summary of the changes made through OpenRewrite?

Yes. Take a look at the [getting started with data tables guide](https://docs.moderne.io/user-documentation/data-tables). Right now, data tables can only be accessed through the [Moderne platform](https://public.moderne.io/). Access to these will be made available through the Maven and Gradle plugin soon.

## I want to exclude a single recipe from a collection of recipes.

This is not possible right now and doing so would be quite complicated. For a detailed explanation as to why, check out [this post](https://github.com/openrewrite/rewrite-maven-plugin/pull/569#issuecomment-1576793092).