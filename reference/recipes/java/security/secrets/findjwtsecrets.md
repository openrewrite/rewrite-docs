# Find JWT secrets

**org.openrewrite.java.security.secrets.FindJwtSecrets**

_Locates JWTs stored in plain text in code._

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/java/org/openrewrite/java/security/secrets/FindJwtSecrets.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.0.1

## Example


{% tabs %}
{% tab title="yaml" %}

###### Before
{% code %}
```yaml
tokens:
  # valid jwt
  v1: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # valid jwt - but header contains CR/LF-s
  v2: 'eyJ0eXAiOiJKV1QiLA0KImFsZyI6IkhTMjU2In0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'
    # valid jwt - but claims contain bunch of LF newlines (Does not Parse)
  v3: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9lIiwKInN0YXR1cyI6ImVtcGxveWVlIgp9'
    # valid jwt - claims contain strings with unicode accents
  v4: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IsWww6HFkcOtIMOWxZHDqcOoIiwiaWF0IjoxNTE2MjM5MDIyfQ.k5HibI_uLn_RTuPcaCNkaVaQH2y5q6GvJg8GPpGMRwQ'
    # as unicode literal (Does not Parse)
  v5: u'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # no signature - but still valid (Does not Parse)
  v6: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'
    # decoded - invalid
  v7: '{"alg":"HS256","typ":"JWT"}.{"name":"Jon Doe"}.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # invalid json - invalid (caught by regex)
  v8: 'bm90X3ZhbGlkX2pzb25fYXRfYWxs.bm90X3ZhbGlkX2pzb25fYXRfYWxs.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # missing claims - invalid
  v9: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    # totally not a jwt
  v10: 'jwt'
    # invalid json with random bytes
  v11: 'eyJhbasdGciOiJIUaddasdasfsasdasdzI1NiIasdsInR5cCI6IkpXVCasdJasd9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # invalid json in jwt header - invalid (caught by parsing)
  v12: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # good by regex, but otherwise totally not JWT
  v13: 'eyJAAAA.eyJBBB'
  v14: 'eyJBB.eyJCC.eyJDDDD'
```
{% endcode %}

###### After
{% code %}
```yaml
tokens:
  # valid jwt
  ~~(JWT)~~>v1: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # valid jwt - but header contains CR/LF-s
  v2: 'eyJ0eXAiOiJKV1QiLA0KImFsZyI6IkhTMjU2In0.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'
    # valid jwt - but claims contain bunch of LF newlines (Does not Parse)
  v3: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9lIiwKInN0YXR1cyI6ImVtcGxveWVlIgp9'
    # valid jwt - claims contain strings with unicode accents
  ~~(JWT)~~>v4: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IsWww6HFkcOtIMOWxZHDqcOoIiwiaWF0IjoxNTE2MjM5MDIyfQ.k5HibI_uLn_RTuPcaCNkaVaQH2y5q6GvJg8GPpGMRwQ'
    # as unicode literal (Does not Parse)
  v5: u'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # no signature - but still valid (Does not Parse)
  v6: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'
    # decoded - invalid
  v7: '{"alg":"HS256","typ":"JWT"}.{"name":"Jon Doe"}.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # invalid json - invalid (caught by regex)
  v8: 'bm90X3ZhbGlkX2pzb25fYXRfYWxs.bm90X3ZhbGlkX2pzb25fYXRfYWxs.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # missing claims - invalid
  v9: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    # totally not a jwt
  v10: 'jwt'
    # invalid json with random bytes
  v11: 'eyJhbasdGciOiJIUaddasdasfsasdasdzI1NiIasdsInR5cCI6IkpXVCasdJasd9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # invalid json in jwt header - invalid (caught by parsing)
  v12: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # good by regex, but otherwise totally not JWT
  v13: 'eyJAAAA.eyJBBB'
  v14: 'eyJBB.eyJCC.eyJDDDD'
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -3,1 +3,1 @@
tokens:
  # valid jwt
- v1: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
+ ~~(JWT)~~>v1: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    # valid jwt - but header contains CR/LF-s
@@ -9,1 +9,1 @@
  v3: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSm9lIiwKInN0YXR1cyI6ImVtcGxveWVlIgp9'
    # valid jwt - claims contain strings with unicode accents
- v4: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IsWww6HFkcOtIMOWxZHDqcOoIiwiaWF0IjoxNTE2MjM5MDIyfQ.k5HibI_uLn_RTuPcaCNkaVaQH2y5q6GvJg8GPpGMRwQ'
+ ~~(JWT)~~>v4: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IsWww6HFkcOtIMOWxZHDqcOoIiwiaWF0IjoxNTE2MjM5MDIyfQ.k5HibI_uLn_RTuPcaCNkaVaQH2y5q6GvJg8GPpGMRwQ'
    # as unicode literal (Does not Parse)
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-security:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.secrets.FindJwtSecrets")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.secrets.FindJwtSecrets</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.security.secrets.FindJwtSecrets
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.security.secrets.FindJwtSecrets)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
