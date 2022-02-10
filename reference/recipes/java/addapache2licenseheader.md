# Add ASLv2 license header

** org.openrewrite.java.AddApache2LicenseHeader**
_Adds the Apache Software License Version 2.0 to Java source files which are missing a license header._

### Tags

* oss

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.18.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.18.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.10")
}

rewrite {
    activeRecipe("org.openrewrite.java.AddApache2LicenseHeader")
}

repositories {
    mavenCentral()
}

```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.AddApache2LicenseHeader</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.AddApache2LicenseHeader`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add license header](../java/addlicenseheader.md)
  * licenseText: `Copyright 2021 the original author or authors.
<p>
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
<p>
https://www.apache.org/licenses/LICENSE-2.0
<p>
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.AddApache2LicenseHeader
displayName: Add ASLv2 license header
description: Adds the Apache Software License Version 2.0 to Java source files which are missing a license header.
tags:
  - oss
recipeList:
  - org.openrewrite.java.AddLicenseHeader:
      licenseText: Copyright 2021 the original author or authors.
<p>
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
<p>
https://www.apache.org/licenses/LICENSE-2.0
<p>
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

```
{% endtab %}
{% endtabs %}
