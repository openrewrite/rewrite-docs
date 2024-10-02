---
sidebar_label: "Best practices for Azure"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Best practices for Azure

**org.openrewrite.terraform.azure.AzureBestPractices**

_Securely operate on Microsoft Azure._

### Tags

* Azure
* terraform

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/azure.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-terraform/2.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 2.4.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipe-type">
<TabItem value="recipe-list" title="Recipe List" >
* [Encrypt Azure VM data disk with ADE/CMK](../../terraform/azure/encryptazurevmdatadiskwithadecmk)
* [Enable Azure Storage secure transfer required](../../terraform/azure/enableazurestoragesecuretransferrequired)
* [Disable Kubernetes dashboard](../../terraform/azure/disablekubernetesdashboard)
* [Ensure the storage container storing activity logs is not publicly accessible](../../terraform/azure/ensurethestoragecontainerstoringactivitylogsisnotpubliclyaccessible)
* [Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days](../../terraform/azure/ensureazurenetworkwatchernsgflowlogsretentionisgreaterthan90days)
* [Ensure Azure App Service Web app redirects HTTP to HTTPS](../../terraform/azure/ensureazureappservicewebappredirectshttptohttps)
* [Ensure Web App uses the latest version of TLS encryption](../../terraform/azure/ensurewebappusesthelatestversionoftlsencryption)
* [Ensure Web App uses the latest version of HTTP](../../terraform/azure/ensurewebappusesthelatestversionofhttp)
* [Ensure standard pricing tier is selected](../../terraform/azure/ensurestandardpricingtierisselected)
* [Ensure a security contact phone number is present](../../terraform/azure/ensureasecuritycontactphonenumberispresent)
* [Ensure Send email notification for high severity alerts is enabled](../../terraform/azure/ensuresendemailnotificationforhighseverityalertsisenabled)
* [Ensure Send email notification for high severity alerts to admins is enabled](../../terraform/azure/ensuresendemailnotificationforhighseverityalertstoadminsisenabled)
* [Ensure Azure SQL server audit log retention is greater than 90 days](../../terraform/azure/ensureazuresqlserverauditlogretentionisgreaterthan90days)
* [Ensure Azure SQL Server threat detection alerts are enabled for all threat types](../../terraform/azure/ensureazuresqlserverthreatdetectionalertsareenabledforallthreattypes)
* [Ensure Azure SQL server send alerts to field value is set](../../terraform/azure/ensureazuresqlserversendalertstofieldvalueisset)
* [Ensure MSSQL servers have email service and co-administrators enabled](../../terraform/azure/ensuremssqlservershaveemailserviceandcoadministratorsenabled)
* [Ensure MySQL server databases have Enforce SSL connection enabled](../../terraform/azure/ensuremysqlserverdatabaseshaveenforcesslconnectionenabled)
* [Ensure Azure PostgreSQL database server with SSL connection is enabled](../../terraform/azure/ensureazurepostgresqldatabaseserverwithsslconnectionisenabled)
* [Set Azure Storage Account default network access to deny](../../terraform/azure/setazurestorageaccountdefaultnetworkaccesstodeny)
* [Enable Azure Storage Account Trusted Microsoft Services access](../../terraform/azure/enableazurestorageaccounttrustedmicrosoftservicesaccess)
* [Ensure activity log retention is set to 365 days or greater](../../terraform/azure/ensureactivitylogretentionissetto365daysorgreater)
* [Ensure log profile is configured to capture all activities](../../terraform/azure/ensurelogprofileisconfiguredtocaptureallactivities)
* [Ensure all keys have an expiration date](../../terraform/azure/ensureallkeyshaveanexpirationdate)
* [Ensure AKV secrets have an expiration date set](../../terraform/azure/ensureakvsecretshaveanexpirationdateset)
* [Ensure Azure key vault is recoverable](../../terraform/azure/ensureazurekeyvaultisrecoverable)
* [Ensure storage account uses latest TLS version](../../terraform/azure/ensurestorageaccountuseslatesttlsversion)
* [Ensure public network access enabled is set to False for mySQL servers](../../terraform/azure/ensurepublicnetworkaccessenabledissettofalseformysqlservers)
* [Ensure MySQL is using the latest version of TLS encryption](../../terraform/azure/ensuremysqlisusingthelatestversionoftlsencryption)
* [Ensure app service enables HTTP logging](../../terraform/azure/ensureappserviceenableshttplogging)
* [Ensure app service enables detailed error messages](../../terraform/azure/ensureappserviceenablesdetailederrormessages)
* [Ensure app service enables failed request tracing](../../terraform/azure/ensureappserviceenablesfailedrequesttracing)
* [Ensure PostgreSQL server disables public network access](../../terraform/azure/ensurepostgresqlserverdisablespublicnetworkaccess)
* [Ensure managed identity provider is enabled for app services](../../terraform/azure/ensuremanagedidentityproviderisenabledforappservices)
* [Ensure FTP Deployments are disabled](../../terraform/azure/ensureftpdeploymentsaredisabled)
* [Ensure MySQL server disables public network access](../../terraform/azure/ensuremysqlserverdisablespublicnetworkaccess)
* [Ensure MySQL server enables geo-redundant backups](../../terraform/azure/ensuremysqlserverenablesgeoredundantbackups)
* [Enable geo-redundant backups on PostgreSQL server](../../terraform/azure/enablegeoredundantbackupsonpostgresqlserver)
* [Ensure key vault allows firewall rules settings](../../terraform/azure/ensurekeyvaultallowsfirewallrulessettings)
* [Ensure key vault enables purge protection](../../terraform/azure/ensurekeyvaultenablespurgeprotection)
* [Ensure key vault secrets have `content_type` set](../../terraform/azure/ensurekeyvaultsecretshavecontenttypeset)
* [Ensure AKS policies add-on](../../terraform/azure/ensureakspoliciesaddon)
* [Ensure Azure application gateway has WAF enabled](../../terraform/azure/ensureazureapplicationgatewayhaswafenabled)
* [Ensure MySQL server enables Threat Detection policy](../../terraform/azure/ensuremysqlserverenablesthreatdetectionpolicy)
* [Ensure PostgreSQL server enables Threat Detection policy](../../terraform/azure/ensurepostgresqlserverenablesthreatdetectionpolicy)
* [Ensure PostgreSQL server enables infrastructure encryption](../../terraform/azure/ensurepostgresqlserverenablesinfrastructureencryption)

</TabItem>

<TabItem value="yaml-recipe-list" title="Yaml Recipe List">
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.AzureBestPractices
displayName: Best practices for Azure
description: Securely operate on Microsoft Azure.
tags:
  - Azure
  - terraform
recipeList:
  - org.openrewrite.terraform.azure.EncryptAzureVMDataDiskWithADECMK
  - org.openrewrite.terraform.azure.EnableAzureStorageSecureTransferRequired
  - org.openrewrite.terraform.azure.DisableKubernetesDashboard
  - org.openrewrite.terraform.azure.EnsureTheStorageContainerStoringActivityLogsIsNotPubliclyAccessible
  - org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days
  - org.openrewrite.terraform.azure.EnsureAzureAppServiceWebAppRedirectsHTTPToHTTPS
  - org.openrewrite.terraform.azure.EnsureWebAppUsesTheLatestVersionOfTLSEncryption
  - org.openrewrite.terraform.azure.EnsureWebAppUsesTheLatestVersionOfHTTP
  - org.openrewrite.terraform.azure.EnsureStandardPricingTierIsSelected
  - org.openrewrite.terraform.azure.EnsureASecurityContactPhoneNumberIsPresent
  - org.openrewrite.terraform.azure.EnsureSendEmailNotificationForHighSeverityAlertsIsEnabled
  - org.openrewrite.terraform.azure.EnsureSendEmailNotificationForHighSeverityAlertsToAdminsIsEnabled
  - org.openrewrite.terraform.azure.EnsureAzureSQLServerAuditLogRetentionIsGreaterThan90Days
  - org.openrewrite.terraform.azure.EnsureAzureSQLServerThreatDetectionAlertsAreEnabledForAllThreatTypes
  - org.openrewrite.terraform.azure.EnsureAzureSQLServerSendAlertsToFieldValueIsSet
  - org.openrewrite.terraform.azure.EnsureMSSQLServersHaveEmailServiceAndCoAdministratorsEnabled
  - org.openrewrite.terraform.azure.EnsureMySQLServerDatabasesHaveEnforceSSLConnectionEnabled
  - org.openrewrite.terraform.azure.EnsureAzurePostgreSQLDatabaseServerWithSSLConnectionIsEnabled
  - org.openrewrite.terraform.azure.SetAzureStorageAccountDefaultNetworkAccessToDeny
  - org.openrewrite.terraform.azure.EnableAzureStorageAccountTrustedMicrosoftServicesAccess
  - org.openrewrite.terraform.azure.EnsureActivityLogRetentionIsSetTo365DaysOrGreater
  - org.openrewrite.terraform.azure.EnsureLogProfileIsConfiguredToCaptureAllActivities
  - org.openrewrite.terraform.azure.EnsureAllKeysHaveAnExpirationDate
  - org.openrewrite.terraform.azure.EnsureAKVSecretsHaveAnExpirationDateSet
  - org.openrewrite.terraform.azure.EnsureAzureKeyVaultIsRecoverable
  - org.openrewrite.terraform.azure.EnsureStorageAccountUsesLatestTLSVersion
  - org.openrewrite.terraform.azure.EnsurePublicNetworkAccessEnabledIsSetToFalseForMySQLServers
  - org.openrewrite.terraform.azure.EnsureMySQLIsUsingTheLatestVersionOfTLSEncryption
  - org.openrewrite.terraform.azure.EnsureAppServiceEnablesHTTPLogging
  - org.openrewrite.terraform.azure.EnsureAppServiceEnablesDetailedErrorMessages
  - org.openrewrite.terraform.azure.EnsureAppServiceEnablesFailedRequestTracing
  - org.openrewrite.terraform.azure.EnsurePostgreSQLServerDisablesPublicNetworkAccess
  - org.openrewrite.terraform.azure.EnsureManagedIdentityProviderIsEnabledForAppServices
  - org.openrewrite.terraform.azure.EnsureFTPDeploymentsAreDisabled
  - org.openrewrite.terraform.azure.EnsureMySQLServerDisablesPublicNetworkAccess
  - org.openrewrite.terraform.azure.EnsureMySQLServerEnablesGeoRedundantBackups
  - org.openrewrite.terraform.azure.EnableGeoRedundantBackupsOnPostgreSQLServer
  - org.openrewrite.terraform.azure.EnsureKeyVaultAllowsFirewallRulesSettings
  - org.openrewrite.terraform.azure.EnsureKeyVaultEnablesPurgeProtection
  - org.openrewrite.terraform.azure.EnsureKeyVaultSecretsHaveContentTypeSet
  - org.openrewrite.terraform.azure.EnsureAKSPoliciesAddOn
  - org.openrewrite.terraform.azure.EnsureAzureApplicationGatewayHasWAFEnabled
  - org.openrewrite.terraform.azure.EnsureMySQLServerEnablesThreatDetectionPolicy
  - org.openrewrite.terraform.azure.EnsurePostgreSQLServerEnablesThreatDetectionPolicy
  - org.openrewrite.terraform.azure.EnsurePostgreSQLServerEnablesInfrastructureEncryption

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-terraform:2.4.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="project-type">
<TabItem value="gradle" title="Gradle">
    1. Add the following to your `build.gradle` file:
    ```groovy title="build.gradle"
    plugins {
        id("org.openrewrite.rewrite") version("6.24.0")
    }
    
    rewrite {
        activeRecipe("org.openrewrite.terraform.azure.AzureBestPractices")
        exportDatatables = true
    }
    
    repositories {
        mavenCentral()
    }
    
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-terraform:2.4.0")
    }
    ```
    2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" title="Gradle init script">
    1. Create a file named `init.gradle` in the root of your project.
    ```groovy title="init.gradle"
    initscript {
        repositories {
            maven { url "https://plugins.gradle.org/m2" }
        }
        dependencies { classpath("org.openrewrite:plugin:6.24.0") }
    }
    rootProject {
        plugins.apply(org.openrewrite.gradle.RewritePlugin)
        dependencies {
            rewrite("org.openrewrite.recipe:rewrite-terraform:2.4.0")
        }
        rewrite {
            activeRecipe("org.openrewrite.terraform.azure.AzureBestPractices")
            exportDatatables = true
        }
        afterEvaluate {
            if (repositories.isEmpty()) {
                repositories {
                    mavenCentral()
                }
            }
        }
    }
    ```
    2. Run the recipe.
    ```shell title="shell"
    gradle --init-script init.gradle rewriteRun
    ```
</TabItem>
<TabItem value="maven" title="Maven POM">
    1. Add the following to your `pom.xml` file:
    ```xml title="pom.xml"
    <project>
      <build>
        <plugins>
          <plugin>
            <groupId>org.openrewrite.maven</groupId>
            <artifactId>rewrite-maven-plugin</artifactId>
            <version>5.41.0</version>
            <configuration>
              <exportDatatables>true</exportDatatables>
              <activeRecipes>
                <recipe>org.openrewrite.terraform.azure.AzureBestPractices</recipe>
              </activeRecipes>
            </configuration>
            <dependencies>
              <dependency>
                <groupId>org.openrewrite.recipe</groupId>
                <artifactId>rewrite-terraform</artifactId>
                <version>2.4.0</version>
              </dependency>
            </dependencies>
          </plugin>
        </plugins>
      </build>
    </project>
    ```
    2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" title="Maven Command Line">
    You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

    ```shell title="shell"
    mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:RELEASE -Drewrite.activeRecipes=org.openrewrite.terraform.azure.AzureBestPractices -Drewrite.exportDatatables=true
    ```
</TabItem>
<TabItem value="moderne-cli" title="Moderne CLI">
    You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

    ```shell title="shell"
    mod run . --recipe AzureBestPractices
    ```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.terraform.azure.AzureBestPractices">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |


## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [pocan101](mailto:jcortesd@gmail.com), [Kun Li](mailto:kun@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Sam Snyder](mailto:sam@moderne.io)
