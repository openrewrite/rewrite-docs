# Find plain text secrets

** org.openrewrite.java.search.FindSecrets**
_Find secrets stored in plain text in code._

### Tags

* security

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.22.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.22.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.20.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.search.FindSecrets")
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
        <version>4.23.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.search.FindSecrets</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.search.FindSecrets`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find text](../../java/search/findtext.md)
  * patterns: `[(xox[pboa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32}), -----BEGIN RSA PRIVATE KEY-----, -----BEGIN DSA PRIVATE KEY-----, -----BEGIN EC PRIVATE KEY-----, -----BEGIN PGP PRIVATE KEY BLOCK-----, ((?:A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}), amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}, AKIA[0-9A-Z]{16}, da2-[a-z0-9]{26}, EAACEdEose0cBA[0-9A-Za-z]+, [fF][aA][cC][eE][bB][oO][oO][kK].*['|"][0-9a-f]{32}['|"], [gG][iI][tT][hH][uU][bB].*['|"][0-9a-zA-Z]{35,40}['|"], [aA][pP][iI]_?[kK][eE][yY].*['|"][0-9a-zA-Z]{32,45}['|"], [sS][eE][cC][rR][eE][tT].*['|"][0-9a-zA-Z]{32,45}['|"], AIza[0-9A-Za-z\-_]{35}, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, "type": "service_account", AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, ya29\.[0-9A-Za-z\-_]+, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, [hH][eE][rR][oO][kK][uU].*[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}, [0-9a-f]{32}-us[0-9]{1,2}, key-[0-9a-zA-Z]{32}, [a-zA-Z]{3,10}://[^/\s:@]{3,20}:[^/\s:@]{3,20}@.{1,100}["'\s], access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}, sk_live_[0-9a-z]{32}, https://hooks\.slack\.com/services/T[a-zA-Z0-9_]{8}/B[a-zA-Z0-9_]{8}/[a-zA-Z0-9_]{24}, sk_live_[0-9a-zA-Z]{24}, rk_live_[0-9a-zA-Z]{24}, sq0atp-[0-9A-Za-z\-_]{22}, sq0csp-[0-9A-Za-z\-_]{43}, [0-9]+:AA[0-9A-Za-z\-_]{33}, SK[0-9a-fA-F]{32}, [tT][wW][iI][tT][tT][eE][rR].*[1-9][0-9]+-[0-9a-zA-Z]{40}, [tT][wW][iI][tT][tT][eE][rR].*['|"][0-9a-zA-Z]{35,44}['|"]]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.search.FindSecrets
displayName: Find plain text secrets
description: Find secrets stored in plain text in code.
tags:
  - security
recipeList:
  - org.openrewrite.java.search.FindText:
      patterns: [(xox[pboa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32}), -----BEGIN RSA PRIVATE KEY-----, -----BEGIN DSA PRIVATE KEY-----, -----BEGIN EC PRIVATE KEY-----, -----BEGIN PGP PRIVATE KEY BLOCK-----, ((?:A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}), amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}, AKIA[0-9A-Z]{16}, da2-[a-z0-9]{26}, EAACEdEose0cBA[0-9A-Za-z]+, [fF][aA][cC][eE][bB][oO][oO][kK].*['|"][0-9a-f]{32}['|"], [gG][iI][tT][hH][uU][bB].*['|"][0-9a-zA-Z]{35,40}['|"], [aA][pP][iI]_?[kK][eE][yY].*['|"][0-9a-zA-Z]{32,45}['|"], [sS][eE][cC][rR][eE][tT].*['|"][0-9a-zA-Z]{32,45}['|"], AIza[0-9A-Za-z\-_]{35}, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, "type": "service_account", AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, ya29\.[0-9A-Za-z\-_]+, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, [hH][eE][rR][oO][kK][uU].*[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}, [0-9a-f]{32}-us[0-9]{1,2}, key-[0-9a-zA-Z]{32}, [a-zA-Z]{3,10}://[^/\s:@]{3,20}:[^/\s:@]{3,20}@.{1,100}["'\s], access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}, sk_live_[0-9a-z]{32}, https://hooks\.slack\.com/services/T[a-zA-Z0-9_]{8}/B[a-zA-Z0-9_]{8}/[a-zA-Z0-9_]{24}, sk_live_[0-9a-zA-Z]{24}, rk_live_[0-9a-zA-Z]{24}, sq0atp-[0-9A-Za-z\-_]{22}, sq0csp-[0-9A-Za-z\-_]{43}, [0-9]+:AA[0-9A-Za-z\-_]{33}, SK[0-9a-fA-F]{32}, [tT][wW][iI][tT][tT][eE][rR].*[1-9][0-9]+-[0-9a-zA-Z]{40}, [tT][wW][iI][tT][tT][eE][rR].*['|"][0-9a-zA-Z]{35,44}['|"]]

```
{% endtab %}
{% endtabs %}
