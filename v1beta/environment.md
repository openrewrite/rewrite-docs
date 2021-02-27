---
description: >-
  Discovers, configures, and instantiates  recipes to apply to a set of source
  files
---

# Environment

Rewrite's `Environment` abstraction provides discovery, activation, and configuration facilities for [Recipes](recipes.md) and [Styles](styles.md). It can be helpful to look at the common runtime contexts in which Rewrite operates to better understand how the environment is established:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Context</th>
      <th style="text-align:left">Integrations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Rewrite Maven/Gradle plugins</td>
      <td style="text-align:left">
        <ul>
          <li>Scans the compile and provided scope classpath of the project and looks
            for any available recipes.</li>
          <li>Scans the compile and provided scope classpath and looks for <code>META-INF/rewrite/*.yml</code> which
            contain declarative definitions of recipes and styles.</li>
          <li>Adds the resources in the YML file referred to by the plugin&apos;s <code>configLocation</code> configuration.</li>
          <li>Activates recipes and styles based on the plugin&apos;s <code>activeRecipes</code> and <code>activeStyles</code> config</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Command line utilities</td>
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

The code below demonstrates how to manually construct an `Environment` and seed it with a variety of different resource loaders. 

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
    .build();
}
```

Once an instance of the `Environment` has been created, it can be interrogated to list all available recipes and styes. There are also facilities for retrieving the recipe descriptions which provides a description of the recipe and its available options. 

