# 8.8.0 release (2023-10-23)

## New Recipes

* org.openrewrite.gradle.plugins.AddDevelocityGradlePlugin: Add the Develocity Gradle plugin to settings.gradle files. 
* org.openrewrite.maven.AddDevelocityMavenExtension: To integrate the Develocity Maven extension into Maven projects, ensure that the `gradle-enterprise-maven-extension` is added to the `.mvn/extensions.xml` file if not already present. Additionally, configure the extension by adding the `.mvn/gradle-enterprise.xml` configuration file. 

## Removed Recipes

* **org.openrewrite.gradle.plugins.AddGradleEnterpriseGradlePlugin**: Add the Gradle Enterprise Gradle plugin to settings.gradle files. 
* **org.openrewrite.maven.AddGradleEnterpriseMavenExtension**: To integrate Gradle Enterprise Maven extension into maven projects, ensure that the `gradle-enterprise-maven-extension` is added to the `.mvn/extensions.xml` file if not already present. Additionally, configure the extension by adding the `.mvn/gradle-enterprise.xml` configuration file. 

