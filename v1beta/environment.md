---
description: >-
  Discovers recipes, visitors, and styles from some context to apply to a set of
  source files.
---

# Environment

`Environment` provides classpath scanning and configuration facilities to discover and activate [Recipes](recipes.md), [Visitors](visitor.md), and [Styles](styles.md) from some context to apply to a set of source files. Below are some examples of different types of "context" and how they would interact with `Environment` to build a source transformation plan.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Context</th>
      <th style="text-align:left">Integrations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Rewrite Maven plugin</td>
      <td style="text-align:left">
        <ul>
          <li>Scans the compile and provided scope classpath of the project and looks
            for any available<code>@AutoConfigure</code> visitors.</li>
          <li>Scans the compile and provided scope classpath and looks for <code>META-INF/rewrite/*.yml</code> which
            contain declarative definitions of visitors, recipes, and styles.</li>
          <li>Adds the resources in the YML file referred to by the plugin&apos;s <code>configLocation</code> configuration.</li>
          <li>Activates recipes and styles based on the plugin&apos;s <code>activeRecipes</code> and <code>activeStyles</code> config</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Command line utility</td>
      <td style="text-align:left">Might have some command-line flags indicating which recipes and styles
        to activate and a pre-defined set of visitors and recipes to add to the
        environment.</td>
    </tr>
    <tr>
      <td style="text-align:left">Mass-refactoring microservice</td>
      <td style="text-align:left">Adds visitors and recipes to an environment based on post body inputs
        to the service. If the service is operating off of a data store of pre-published
        ASTs, there is no need for any style configuration because the styles should
        already be stored with the ASTs this service is designed to operate on.</td>
    </tr>
  </tbody>
</table>

The code below demonstrates all the options available when building an `Environment`. All of them are individually optional. If you are crafting an `Environment` manually, use as few or as many as necessary to build a refactoring plan based on your unique context.

```java
File rewriteYml = ...;
try(InputStream rewriteInputStream = new FileInputStream(rewriteYml)) {
  ResourceLoader rewriteYmlLoader = new YamlResourceLoader(
    rewriteInputStream,
    // wouldn't have to exist on disk necessarily (just used in logging)
    rewriteYml.toURI(),
    System.getProperties()
  );

  Iterable<Path> classpath = ...

  // any manually built visitors
  Iterable<? extends RefactorVisitor<?>> visitors = ...

  Environment env = Environment.builder()
    .load(rewriteYmlLoader) // can be called more than once for multiple files
    .scanClasspath(classpath) // classpath scans for META-INF/rewrite/*.yml
    .scanUserHome() // looks for `~/.rewrite/rewrite.yml
    // classpath scans for all @AutoConfigure visitors in this package
    .scanVisitors("io.moderne")
    .loadVisitors(visitors)
    .build();
}
```

Once you have an `Environment` instance, you can retrieve active recipes and styles from it and use them to build parsers with activated styles and a refactoring operation with activated visitors.

```java
Environment env = ...

Refactor refactor = new Refactor()
  // list "active recipes" you want to enable
  .visit(env.visitors("org.openrewrite.spring", "io.moderne.custom"));

JavaParser jp = JavaParser.fromJavaVersion()
  // list "active styles" you want to enable
  .styles(env.styles("io.moderne.custom"))
  .build();
  
Iterable<J.CompilationUnit> cus = jp.parse(listOfSourceFiles, projectDir);

Collection<Change> changeSet = refactor.fix(cus);
```

