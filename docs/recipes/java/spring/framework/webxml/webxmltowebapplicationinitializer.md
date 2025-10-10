---
sidebar_label: "Migrate `web.xml` to `WebApplicationInitializer`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate `web.xml` to `WebApplicationInitializer`

**io.moderne.java.spring.framework.webxml.WebXmlToWebApplicationInitializer**

_Migrate `web.xml` to `WebApplicationInitializer` for Spring applications. This allows for programmatic configuration of the web application context, replacing the need for XML-based configuration. This recipe only picks up `web.xml` files located in the `src/main/webapp/WEB-INF` directory to avoid inference with tests._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `boolean` | useJakartaEE | If true, the recipe will migrate to Jakarta EE 9+ namespaces. If false, it will use the javax.servlet namespace. | `true` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|useJakartaEE|`true`|



###### New file
```java
import org.springframework.web.WebApplicationInitializer;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRegistration;

public class WebXmlWebAppInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        ServletRegistration.Dynamic dispatcher = servletContext.addServlet("dispatcher", org.springframework.web.servlet.DispatcherServlet.class);
        dispatcher.setLoadOnStartup(1);
        dispatcher.addMapping("/services/*");
    }
}
```


###### Unchanged
```mavenProject
main
```

<Tabs groupId="beforeAfter">
<TabItem value="xml" label="xml">


###### Before
```xml
<?xml version="1.0"?>
<!DOCTYPE web-app PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
        "http://java.sun.com/dtd/web-app_2_3.dtd">

<web-app>
    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/services/*</url-pattern>
    </servlet-mapping>
</web-app>
```

###### After
```xml
<?xml version="1.0"?>
<!DOCTYPE web-app PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
        "http://java.sun.com/dtd/web-app_2_3.dtd">

<web-app>
</web-app>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -6,10 +6,0 @@

<web-app>
-   <servlet>
-       <servlet-name>dispatcher</servlet-name>
-       <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
-       <load-on-startup>1</load-on-startup>
-   </servlet>
-
-   <servlet-mapping>
-       <servlet-name>dispatcher</servlet-name>
-       <url-pattern>/services/*</url-pattern>
-   </servlet-mapping>
</web-app>
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.WebXmlToWebApplicationInitializerExample
displayName: Migrate `web.xml` to `WebApplicationInitializer` example
recipeList:
  - io.moderne.java.spring.framework.webxml.WebXmlToWebApplicationInitializer: 
      useJakartaEE: false
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe WebXmlToWebApplicationInitializer --recipe-option "useJakartaEE=false"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-spring:{{VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.java.spring.framework.webxml.WebXmlToWebApplicationInitializer" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
