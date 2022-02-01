# Common Static Analysis Issue Remediation

In this guide we'll look at using OpenRewrite to perform an automated remediation for many issues identified by common static analysis tools.

### Example Configuration

The [Common Static Analysis Recipe](https://docs.openrewrite.org/reference/recipes/java/cleanup/commonstaticanalysis) consists of more than 50 types of issues and can be applied by including OpenRewrite's plug-in to your project and configuring the recipe:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```text
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>4.17.4</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.cleanup.CommonStaticAnalysis</recipe>
    </activeRecipes>
  </configuration>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("5.15.9")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.CommonStaticAnalysis")
}

repositories {
    mavenCentral() // rewrite is published to Maven Central
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to fix common static analysis issues by running `mvn rewrite:run` or `gradlew rewriteRun`.

### Before and After

For the full list of changes this recipe will make, see its [reference page](https://docs.openrewrite.org/reference/recipes/java/cleanup/commonstaticanalysis).

#### Use explicit types on lambda arguments

{% tabs %}
{% tab title="Before" %}
```java
queue.findAll().forEach(msg -> {
    WebSocketMessageBody toSend = conv.fromMap(msg.getMessage(), WebSocketMessageBody.class);
    session.sendSync(toSend);
});  
```
{% endtab %}

{% tab title="After" %}
```java
queue.findAll().forEach((MessageQueue msg) -> {
    WebSocketMessageBody toSend = conv.fromMap(msg.getMessage(), WebSocketMessageBody.class);
    session.sendSync(toSend);
});   
```
{% endtab %}
{% endtabs %}

#### No Double Brace Initialization

{% tabs %}
{% tab title="Before" %}
```java
class Menu {
    static final List<String> menuItems = new ArrayList<>() {
        {add("rice");add("beans");}
    } 
    
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
{% endtab %}

{% tab title="After" %}
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
{% endtab %}
{% endtabs %}

#### Fields in a `Serializable` class should either be transient or serializable

{% tabs %}
{% tab title="Before" %}
```java
public class MessageExtBatch implements Serializable {
    private ByteBuffer encodedBuff;
    ...
}
```
{% endtab %}

{% tab title="After" %}
```java
public class MessageExtBatch implements Serializable {
    private transient ByteBuffer encodedBuff;
    ...
}
```
{% endtab %}
{% endtabs %}

## Known Limitations

We don't have OpenRewrite recipes implemented for all publicly available policies. If you find a  violation you'd like automated, visit the [rewrite](https://github.com/openrewrite/rewrite) repository and file an issue.
