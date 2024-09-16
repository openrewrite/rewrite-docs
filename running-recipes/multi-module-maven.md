# Running OpenRewrite on a multi-module Maven project

If you have a Maven project with multiple modules, you may run into errors finding and running the [OpenRewrite Maven plugin](https://github.com/openrewrite/rewrite-maven-plugin).

There is currently an [open issue](https://github.com/openrewrite/rewrite-maven-plugin/issues/475) to better support multi-module Maven projects that you can +1 on if you'd like. 

In the meantime, one way to work around this is to add a profile on the parent POM:

{% code title="pom.xml" %}
```xml
<profile>
  <id>openrewrite</id>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.CodeCleanup</recipe>
          </activeRecipes>
          <failOnDryRunResults>true</failOnDryRunResults>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.13.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</profile>
```
{% endcode %}

You can then run OpenRewrite from any submodule using this command: `mvn -Popenrewrite rewrite:run`. 

There's no need to set the `configLocation` for the default location of `rewrite.yml`. The default value is `${maven.multiModuleProjectDirectory}/rewrite.yml`, which works in multi module projects. More information about the various configuration options can be found in the [mojo docs](https://openrewrite.github.io/rewrite-maven-plugin/run-mojo.html)
