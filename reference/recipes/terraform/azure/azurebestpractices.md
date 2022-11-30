# Best practices for Azure

**org.openrewrite.terraform.azure.AzureBestPractices** _Securely operate on Microsoft Azure._

### Tags

* Azure
* terraform

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.14.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.14.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.14.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.azure.AzureBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.14.0")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.azure.AzureBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.14.0</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:1.14.0 \
  -DactiveRecipes=org.openrewrite.terraform.azure.AzureBestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.terraform.azure.AzureBestPractices`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Encrypt Azure VM data disk with ADE/CMK](encryptazurevmdatadiskwithadecmk.md)
* [Enable Azure Storage secure transfer required](enableazurestoragesecuretransferrequired.md)
* [Disable Kubernetes dashboard](disablekubernetesdashboard.md)
* [Ensure the storage container storing activity logs is not publicly accessible](ensurethestoragecontainerstoringactivitylogsisnotpubliclyaccessible.md)
* [Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days](ensureazurenetworkwatchernsgflowlogsretentionisgreaterthan90days.md)
* [Ensure Azure App Service Web app redirects HTTP to HTTPS](ensureazureappservicewebappredirectshttptohttps.md)
* [Ensure Web App uses the latest version of TLS encryption](ensurewebappusesthelatestversionoftlsencryption.md)
* [Ensure Web App uses the latest version of HTTP](ensurewebappusesthelatestversionofhttp.md)
* [Ensure standard pricing tier is selected](ensurestandardpricingtierisselected.md)
* [Ensure a security contact phone number is present](ensureasecuritycontactphonenumberispresent.md)
* [Ensure Send email notification for high severity alerts is enabled](ensuresendemailnotificationforhighseverityalertsisenabled.md)
* [Ensure Send email notification for high severity alerts to admins is enabled](ensuresendemailnotificationforhighseverityalertstoadminsisenabled.md)
* [Ensure Azure SQL server audit log retention is greater than 90 days](ensureazuresqlserverauditlogretentionisgreaterthan90days.md)
* [Ensure Azure SQL Server threat detection alerts are enabled for all threat types](ensureazuresqlserverthreatdetectionalertsareenabledforallthreattypes.md)
* [Ensure Azure SQL server send alerts to field value is set](ensureazuresqlserversendalertstofieldvalueisset.md)
* [Ensure MSSQL servers have email service and co-administrators enabled](ensuremssqlservershaveemailserviceandcoadministratorsenabled.md)
* [Ensure MySQL server databases have Enforce SSL connection enabled](ensuremysqlserverdatabaseshaveenforcesslconnectionenabled.md)
* [Ensure Azure PostgreSQL database server with SSL connection is enabled](ensureazurepostgresqldatabaseserverwithsslconnectionisenabled.md)
* [Set Azure Storage Account default network access to deny](setazurestorageaccountdefaultnetworkaccesstodeny.md)
* [Enable Azure Storage Account Trusted Microsoft Services access](enableazurestorageaccounttrustedmicrosoftservicesaccess.md)
* [Ensure activity log retention is set to 365 days or greater](ensureactivitylogretentionissetto365daysorgreater.md)
* [Ensure log profile is configured to capture all activities](ensurelogprofileisconfiguredtocaptureallactivities.md)
* [Ensure all keys have an expiration date](ensureallkeyshaveanexpirationdate.md)
* [Ensure AKV secrets have an expiration date set](ensureakvsecretshaveanexpirationdateset.md)
* [Ensure Azure key vault is recoverable](ensureazurekeyvaultisrecoverable.md)
* [Ensure storage account uses latest TLS version](ensurestorageaccountuseslatesttlsversion.md)
* [Ensure public network access enabled is set to False for mySQL servers](ensurepublicnetworkaccessenabledissettofalseformysqlservers.md)
* [Ensure MySQL is using the latest version of TLS encryption](ensuremysqlisusingthelatestversionoftlsencryption.md)
* [Ensure app service enables HTTP logging](ensureappserviceenableshttplogging.md)
* [Ensure app service enables detailed error messages](ensureappserviceenablesdetailederrormessages.md)
* [Ensure app service enables failed request tracing](ensureappserviceenablesfailedrequesttracing.md)
* [Ensure PostgreSQL server disables public network access](ensurepostgresqlserverdisablespublicnetworkaccess.md)
* [Ensure managed identity provider is enabled for app services](ensuremanagedidentityproviderisenabledforappservices.md)
* [Ensure FTP Deployments are disabled](ensureftpdeploymentsaredisabled.md)
* [Ensure MySQL server disables public network access](ensuremysqlserverdisablespublicnetworkaccess.md)
* [Ensure MySQL server enables geo-redundant backups](ensuremysqlserverenablesgeoredundantbackups.md)
* [Enable geo-redundant backups on PostgreSQL server](enablegeoredundantbackupsonpostgresqlserver.md)
* [Ensure key vault allows firewall rules settings](ensurekeyvaultallowsfirewallrulessettings.md)
* [Ensure key vault enables purge protection](ensurekeyvaultenablespurgeprotection.md)
* [Ensure key vault secrets have `content_type` set](ensurekeyvaultsecretshavecontenttypeset.md)
* [Ensure AKS policies add-on](ensureakspoliciesaddon.md)
* [Ensure Azure application gateway has WAF enabled](ensureazureapplicationgatewayhaswafenabled.md)
* [Ensure MySQL server enables Threat Detection policy](ensuremysqlserverenablesthreatdetectionpolicy.md)
* [Ensure PostgreSQL server enables Threat Detection policy](ensurepostgresqlserverenablesthreatdetectionpolicy.md)
* [Ensure PostgreSQL server enables infrastructure encryption](ensurepostgresqlserverenablesinfrastructureencryption.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
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
{% endtab %}
{% endtabs %}
