# Find secrets

**org.openrewrite.java.security.secrets.FindSecrets**

_Locates secrets stored in plain text in code._

### Tags

* security

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/resources/META-INF/rewrite/secrets.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-security:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.secrets.FindSecrets")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:2.0.1")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.secrets.FindSecrets</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>2.0.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-security:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.security.secrets.FindSecrets
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find Artifactory secrets](../../../java/security/secrets/findartifactorysecrets.md)
* [Find AWS secrets](../../../java/security/secrets/findawssecrets.md)
* [Find Azure secrets](../../../java/security/secrets/findazuresecrets.md)
* [Find Discord secrets](../../../java/security/secrets/finddiscordsecrets.md)
* [Find generic secrets](../../../java/security/secrets/findgenericsecrets.md)
* [Find GitHub secrets](../../../java/security/secrets/findgithubsecrets.md)
* [Find Google secrets](../../../java/security/secrets/findgooglesecrets.md)
* [Find Heroku secrets](../../../java/security/secrets/findherokusecrets.md)
* [Find JWT secrets](../../../java/security/secrets/findjwtsecrets.md)
* [Find MailChimp secrets](../../../java/security/secrets/findmailchimpsecrets.md)
* [Find Mailgun secrets](../../../java/security/secrets/findmailgunsecrets.md)
* [Find NPM secrets](../../../java/security/secrets/findnpmsecrets.md)
* [Find NPM secrets](../../../java/security/secrets/findnpmsecrets.md)
* [Find passwords used in URLs](../../../java/security/secrets/findpasswordinurlsecrets.md)
* [Find PayPal secrets](../../../java/security/secrets/findpaypalsecrets.md)
* [Find PGP secrets](../../../java/security/secrets/findpgpsecrets.md)
* [Find Picatic secrets](../../../java/security/secrets/findpicaticsecrets.md)
* [Find RSA private keys](../../../java/security/secrets/findrsasecrets.md)
* [Find SendGrid secrets](../../../java/security/secrets/findsendgridsecrets.md)
* [Find Slack secrets](../../../java/security/secrets/findslacksecrets.md)
* [Find Square secrets](../../../java/security/secrets/findsquaresecrets.md)
* [Find SSH secrets](../../../java/security/secrets/findsshsecrets.md)
* [Find Stripe secrets](../../../java/security/secrets/findstripesecrets.md)
* [Find Telegram secrets](../../../java/security/secrets/findtelegramsecrets.md)
* [Find Twilio secrets](../../../java/security/secrets/findtwiliosecrets.md)
* [Find Twitter secrets](../../../java/security/secrets/findtwittersecrets.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.secrets.FindSecrets
displayName: Find secrets
description: Locates secrets stored in plain text in code.
tags:
  - security
recipeList:
  - org.openrewrite.java.security.secrets.FindArtifactorySecrets
  - org.openrewrite.java.security.secrets.FindAwsSecrets
  - org.openrewrite.java.security.secrets.FindAzureSecrets
  - org.openrewrite.java.security.secrets.FindDiscordSecrets
  - org.openrewrite.java.security.secrets.FindGenericSecrets
  - org.openrewrite.java.security.secrets.FindGitHubSecrets
  - org.openrewrite.java.security.secrets.FindGoogleSecrets
  - org.openrewrite.java.security.secrets.FindHerokuSecrets
  - org.openrewrite.java.security.secrets.FindJwtSecrets
  - org.openrewrite.java.security.secrets.FindMailChimpSecrets
  - org.openrewrite.java.security.secrets.FindMailgunSecrets
  - org.openrewrite.java.security.secrets.FindNpmSecrets
  - org.openrewrite.java.security.secrets.FindNpmSecrets
  - org.openrewrite.java.security.secrets.FindPasswordInUrlSecrets
  - org.openrewrite.java.security.secrets.FindPayPalSecrets
  - org.openrewrite.java.security.secrets.FindPgpSecrets
  - org.openrewrite.java.security.secrets.FindPicaticSecrets
  - org.openrewrite.java.security.secrets.FindRsaSecrets
  - org.openrewrite.java.security.secrets.FindSendGridSecrets
  - org.openrewrite.java.security.secrets.FindSlackSecrets
  - org.openrewrite.java.security.secrets.FindSquareSecrets
  - org.openrewrite.java.security.secrets.FindSshSecrets
  - org.openrewrite.java.security.secrets.FindStripeSecrets
  - org.openrewrite.java.security.secrets.FindTelegramSecrets
  - org.openrewrite.java.security.secrets.FindTwilioSecrets
  - org.openrewrite.java.security.secrets.FindTwitterSecrets

```
{% endtab %}
{% endtabs %}
## Contributors
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.security.secrets.FindSecrets)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
