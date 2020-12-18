---
description: Offering Rewrite remediations as a serverless function.
---

# Running as a Google Cloud Function

⏲ This tutorial will take you about 15 minutes to complete.

Since Rewrite is just a Java library, it can run anywhere Java code can run. This guide provides the steps for how to write and deploy a Google Cloud Function that serves an HTTP POST endpoint whose request body is an input source file and response is a fixed source file.

{% hint style="info" %}
Google has a getting started guide for writing your first Google Cloud Function in Java [here](https://cloud.google.com/functions/docs/first-java) that has useful links to other parts of this ecosystem.
{% endhint %}

## The pom.xml file

In our `pom.xml` add the API for Google Cloud and, if we are refactoring Java source files, a dependency on `rewrite-java-11`. If you'd like to refactor other source file types, include the appropriate Rewrite module\(s\) for the language of the source you are refactoring.

You can also include prepackaged recipes like `org.openrewrite.recipe:rewrite-spring` as dependencies in the `provided` scope.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.moderne</groupId>
  <artifactId>jhipster-cwe-338</artifactId>
  <version>1.0.0-SNAPSHOT</version>
  <properties>
    <maven.compiler.target>11</maven.compiler.target>
    <maven.compiler.source>11</maven.compiler.source>
  </properties>

  <dependencies>
    <dependency>
      <groupId>com.google.cloud.functions</groupId>
      <artifactId>functions-framework-api</artifactId>
      <version>1.0.2</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>org.openrewrite</groupId>
      <artifactId>rewrite-java-11</groupId>
      <version>6.1.10</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>com.google.cloud.functions</groupId>
        <artifactId>function-maven-plugin</artifactId>
        <version>0.9.4</version>
        <configuration>
          <functionTarget>io.moderne.cwe338.HelloWorld</functionTarget>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

## Writing the Cloud Function

The function shown below is an example from an exercise in mass remediation a [JHipster CWE-338 vulnerability](https://github.com/moderneinc/jhipster-cwe-338).

The first step is to create a `JavaParser` \(or for other source file types, the appropriate parser for that type\). Since this sample was remediating a particular use of Apache Commons Lang 3, a dependency on Commons Lang was added as a runtime scope dependency in the POM, and we construct a `JavaParser` with that dependency fetched from the runtime classpath of the Google Cloud Function.

Next, we build a `Refactor` instance invoking our custom visitor.

For every request, we use the `Refactor` instance to fix the parsed source file. Then, we can write the `fixed` source file to the response body.

```java
import com.google.cloud.functions.*;
import org.openrewrite.Refactor;
import org.openrewrite.java.JavaParser;
import org.openrewrite.java.tree.J;
import java.nio.charset.StandardCharsets;

public class CloudFunction implements HttpFunction {
    private static final JavaParser parser = JavaParser.fromJavaVersion()
            .classpath(JavaParser.dependenciesFromClasspath("commons-lang3"))
            .build();

    private static final Refactor refactor = new Refactor()
            .visit(new CWE338());

    @Override
    public void service(HttpRequest request, HttpResponse response) throws Exception {
        J.CompilationUnit fixed = refactor.fixed(parser.reset()
                .parse(new String(request.getInputStream().readAllBytes(), Charsets.UTF_8));

        assert fixed != null;
        response.getWriter().write(fixed.print());
    }
}
```

## Deploying

Using the `gcloud` CLI, we can deploy the function.

```text
gcloud functions deploy cwe338 \
  --entry-point io.moderne.cwe338.CloudFunction \
  --runtime java11 \
  --trigger-http \
  --memory 256MB \
  --allow-unauthenticated
```

The output of this operation will contain an HTTPS URL you can use to POST source files to that you wish your Rewrite visitors to operate on.

