import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Common Static Analysis Issue Remediation

In this guide we'll look at using OpenRewrite to perform an automated remediation for many issues identified by common static analysis tools.

### Example Configuration

The [Common Static Analysis Recipe](/recipes/staticanalysis/commonstaticanalysis) consists of more than 50 types of issues and can be applied by including OpenRewrite's plugin to your project and configuring the recipe:

<Tabs groupId="projectType">
	<TabItem value="maven" label="Maven">
```xml title="pom.xml"
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.staticanalysis.CommonStaticAnalysis</recipe>
    </activeRecipes>
  </configuration>
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-static-analysis</artifactId>
      <version>{{VERSION_REWRITE_STATIC_ANALYSIS}}</version>
    </dependency>
  </dependencies>
</plugin>
```

	</TabItem>

	<TabItem value="gradle" label="Gradle">
```groovy title="build.gradle"
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.CommonStaticAnalysis")
}

repositories {
    mavenCentral() // rewrite is published to Maven Central
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:{{VERSION_REWRITE_STATIC_ANALYSIS}}")
}
```

	</TabItem>
</Tabs>

At this point, you're ready to fix common static analysis issues by running `mvn rewrite:run` or `gradlew rewriteRun`.

### Before and After

For the full list of changes this recipe will make, see its [reference page](/recipes/staticanalysis/commonstaticanalysis).

#### Use explicit types on lambda arguments

<Tabs groupId="beforeAfter">
	<TabItem value="before" label="Before">
```java
queue.findAll().forEach(msg -> {
    WebSocketMessageBody toSend = conv.fromMap(msg.getMessage(), WebSocketMessageBody.class);
    session.sendSync(toSend);
});  
```
	</TabItem>

	<TabItem value="after" label="After">
```java
queue.findAll().forEach((MessageQueue msg) -> {
    WebSocketMessageBody toSend = conv.fromMap(msg.getMessage(), WebSocketMessageBody.class);
    session.sendSync(toSend);
});   
```
	</TabItem>
</Tabs>

#### No Double Brace Initialization

<Tabs groupId="beforeAfter">
	<TabItem value="before" label="Before">
```java
class Menu {
    static final List<String> menuItems = Arrays.asList("rice", "beans");
    
    void newOrder(String main, String desert) {
        List<String> menuItems = new ArrayList<>() {
            {
                add(main);
                add(desert);
            }
        };
        ...
    }
}
```
	</TabItem>

	<TabItem value="after" label="After">
```java
class Menu {
    static final List<String> menuItems;
    static {
        menuItems = new ArrayList<>();
        menuItems.add("rice");
        menuItems.add("beans");
    }
    
    void newOrder(String main, String desert) {
        List<String> menuItems = new ArrayList<>();
        menuItems.add(main);
        menuItems.add(desert);
        ...
    }
}
```
	</TabItem>
</Tabs>

#### Fields in a `Serializable` class should either be transient or serializable

<Tabs groupId="beforeAfter">
	<TabItem value="before" label="Before">
```java
public class MessageExtBatch implements Serializable {
    private ByteBuffer encodedBuff;
    ...
}
```
	</TabItem>

	<TabItem value="after" label="After">
```java
public class MessageExtBatch implements Serializable {
    private transient ByteBuffer encodedBuff;
    ...
}
```
	</TabItem>
</Tabs>

## Known Limitations

We don't have OpenRewrite recipes implemented for all publicly available policies. If you find a violation you'd like automated, visit the [rewrite](https://github.com/openrewrite/rewrite) repository and file an issue (or help out the community by contributing code yourself).

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonStaticAnalysis">
    <img
    src={require('/static/img/ModerneRecipeButton.png').default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.