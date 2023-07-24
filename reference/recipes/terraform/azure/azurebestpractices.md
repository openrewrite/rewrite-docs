# Best practices for Azure

**org.openrewrite.terraform.azure.AzureBestPractices**

_Securely operate on Microsoft Azure._

### Tags

* Azure
* terraform

## Source

[GitHub](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/azure.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-terraform/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 2.0.2


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-terraform:2.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.azure.AzureBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:2.0.2")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.azure.AzureBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>2.0.2</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.terraform.azure.AzureBestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Encrypt Azure VM data disk with ADE/CMK](../../terraform/azure/encryptazurevmdatadiskwithadecmk.md)
* [Enable Azure Storage secure transfer required](../../terraform/azure/enableazurestoragesecuretransferrequired.md)
* [Disable Kubernetes dashboard](../../terraform/azure/disablekubernetesdashboard.md)
* [Ensure the storage container storing activity logs is not publicly accessible](../../terraform/azure/ensurethestoragecontainerstoringactivitylogsisnotpubliclyaccessible.md)
* [Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days](../../terraform/azure/ensureazurenetworkwatchernsgflowlogsretentionisgreaterthan90days.md)
* [Ensure Azure App Service Web app redirects HTTP to HTTPS](../../terraform/azure/ensureazureappservicewebappredirectshttptohttps.md)
* [Ensure Web App uses the latest version of TLS encryption](../../terraform/azure/ensurewebappusesthelatestversionoftlsencryption.md)
* [Ensure Web App uses the latest version of HTTP](../../terraform/azure/ensurewebappusesthelatestversionofhttp.md)
* [Ensure standard pricing tier is selected](../../terraform/azure/ensurestandardpricingtierisselected.md)
* [Ensure a security contact phone number is present](../../terraform/azure/ensureasecuritycontactphonenumberispresent.md)
* [Ensure Send email notification for high severity alerts is enabled](../../terraform/azure/ensuresendemailnotificationforhighseverityalertsisenabled.md)
* [Ensure Send email notification for high severity alerts to admins is enabled](../../terraform/azure/ensuresendemailnotificationforhighseverityalertstoadminsisenabled.md)
* [Ensure Azure SQL server audit log retention is greater than 90 days](../../terraform/azure/ensureazuresqlserverauditlogretentionisgreaterthan90days.md)
* [Ensure Azure SQL Server threat detection alerts are enabled for all threat types](../../terraform/azure/ensureazuresqlserverthreatdetectionalertsareenabledforallthreattypes.md)
* [Ensure Azure SQL server send alerts to field value is set](../../terraform/azure/ensureazuresqlserversendalertstofieldvalueisset.md)
* [Ensure MSSQL servers have email service and co-administrators enabled](../../terraform/azure/ensuremssqlservershaveemailserviceandcoadministratorsenabled.md)
* [Ensure MySQL server databases have Enforce SSL connection enabled](../../terraform/azure/ensuremysqlserverdatabaseshaveenforcesslconnectionenabled.md)
* [Ensure Azure PostgreSQL database server with SSL connection is enabled](../../terraform/azure/ensureazurepostgresqldatabaseserverwithsslconnectionisenabled.md)
* [Set Azure Storage Account default network access to deny](../../terraform/azure/setazurestorageaccountdefaultnetworkaccesstodeny.md)
* [Enable Azure Storage Account Trusted Microsoft Services access](../../terraform/azure/enableazurestorageaccounttrustedmicrosoftservicesaccess.md)
* [Ensure activity log retention is set to 365 days or greater](../../terraform/azure/ensureactivitylogretentionissetto365daysorgreater.md)
* [Ensure log profile is configured to capture all activities](../../terraform/azure/ensurelogprofileisconfiguredtocaptureallactivities.md)
* [Ensure all keys have an expiration date](../../terraform/azure/ensureallkeyshaveanexpirationdate.md)
* [Ensure AKV secrets have an expiration date set](../../terraform/azure/ensureakvsecretshaveanexpirationdateset.md)
* [Ensure Azure key vault is recoverable](../../terraform/azure/ensureazurekeyvaultisrecoverable.md)
* [Ensure storage account uses latest TLS version](../../terraform/azure/ensurestorageaccountuseslatesttlsversion.md)
* [Ensure public network access enabled is set to False for mySQL servers](../../terraform/azure/ensurepublicnetworkaccessenabledissettofalseformysqlservers.md)
* [Ensure MySQL is using the latest version of TLS encryption](../../terraform/azure/ensuremysqlisusingthelatestversionoftlsencryption.md)
* [Ensure app service enables HTTP logging](../../terraform/azure/ensureappserviceenableshttplogging.md)
* [Ensure app service enables detailed error messages](../../terraform/azure/ensureappserviceenablesdetailederrormessages.md)
* [Ensure app service enables failed request tracing](../../terraform/azure/ensureappserviceenablesfailedrequesttracing.md)
* [Ensure PostgreSQL server disables public network access](../../terraform/azure/ensurepostgresqlserverdisablespublicnetworkaccess.md)
* [Ensure managed identity provider is enabled for app services](../../terraform/azure/ensuremanagedidentityproviderisenabledforappservices.md)
* [Ensure FTP Deployments are disabled](../../terraform/azure/ensureftpdeploymentsaredisabled.md)
* [Ensure MySQL server disables public network access](../../terraform/azure/ensuremysqlserverdisablespublicnetworkaccess.md)
* [Ensure MySQL server enables geo-redundant backups](../../terraform/azure/ensuremysqlserverenablesgeoredundantbackups.md)
* [Enable geo-redundant backups on PostgreSQL server](../../terraform/azure/enablegeoredundantbackupsonpostgresqlserver.md)
* [Ensure key vault allows firewall rules settings](../../terraform/azure/ensurekeyvaultallowsfirewallrulessettings.md)
* [Ensure key vault enables purge protection](../../terraform/azure/ensurekeyvaultenablespurgeprotection.md)
* [Ensure key vault secrets have `content_type` set](../../terraform/azure/ensurekeyvaultsecretshavecontenttypeset.md)
* [Ensure AKS policies add-on](../../terraform/azure/ensureakspoliciesaddon.md)
* [Ensure Azure application gateway has WAF enabled](../../terraform/azure/ensureazureapplicationgatewayhaswafenabled.md)
* [Ensure MySQL server enables Threat Detection policy](../../terraform/azure/ensuremysqlserverenablesthreatdetectionpolicy.md)
* [Ensure PostgreSQL server enables Threat Detection policy](../../terraform/azure/ensurepostgresqlserverenablesthreatdetectionpolicy.md)
* [Ensure PostgreSQL server enables infrastructure encryption](../../terraform/azure/ensurepostgresqlserverenablesinfrastructureencryption.md)

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

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [pocan101](mailto:jcortesd@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.terraform.azure.AzureBestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
