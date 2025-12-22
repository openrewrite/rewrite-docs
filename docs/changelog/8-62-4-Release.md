---
description: What's changed in OpenRewrite version 8.62.4.
---

# 8.62.4 release (2025-09-24)

_Total recipe count: 4795_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.47.0`
* Staging CLI version: `v3.48.5`

## New Recipes

* [io.moderne.elastic.elastic9.ChangeApiNumericFieldType](https://docs.openrewrite.org/recipes/elastic/elastic9/changeapinumericfieldtype): Adds conversion methods with null checks for numeric type changes in Elasticsearch 9 API 
* [io.moderne.elastic.elastic9.ChangeApiNumericFieldTypes](https://docs.openrewrite.org/recipes/elastic/elastic9/changeapinumericfieldtypes): Handles changes between different numeric types (`Long` to `Integer`, `int` to `Long`...) in Elasticsearch 9 API responses by adding appropriate conversion methods with null checks. 
* [io.moderne.elastic.elastic9.MigrateDenseVectorElementType](https://docs.openrewrite.org/recipes/elastic/elastic9/migratedensevectorelementtype): In Elasticsearch 9, `DenseVectorProperty.elementType()` returns `DenseVectorElementType` enum instead of `String`, and the builder method `elementType(String)` now accepts the enum type. This recipe handles both builder calls and getter calls. 
* [io.moderne.elastic.elastic9.MigrateDenseVectorSimilarity](https://docs.openrewrite.org/recipes/elastic/elastic9/migratedensevectorsimilarity): In Elasticsearch 9, `DenseVectorProperty.similarity()` returns `DenseVectorSimilarity` enum instead of `String`, and the builder method `similarity(String)` now accepts the enum type. This recipe handles both builder calls and getter calls. 
* [io.moderne.elastic.elastic9.MigrateSpanTermQueryValue](https://docs.openrewrite.org/recipes/elastic/elastic9/migratespantermqueryvalue): In Elasticsearch 9, `SpanTermQuery.value()` returns a `FieldValue` instead of `String`. This recipe updates calls to handle the new return type by checking if it's a string and extracting the string value. 
* [io.moderne.kafka.MigrateAdminListConsumerGroups](https://docs.openrewrite.org/recipes/kafka/migrateadminlistconsumergroups): Migrates the deprecated `Admin.listConsumerGroups()` method to `listGroups()` and updates related types for Kafka 4.1 compatibility. 
* [io.moderne.kafka.MigrateAlterConfigsToIncrementalAlterConfigs](https://docs.openrewrite.org/recipes/kafka/migratealterconfigstoincrementalalterconfigs): Migrates the removed `AdminClient.alterConfigs()` method to `incrementalAlterConfigs()` for Kafka 4.0 compatibility. 
* [io.moderne.kafka.MigrateConsumerCommittedToSet](https://docs.openrewrite.org/recipes/kafka/migrateconsumercommittedtoset): Migrates from the removed `KafkaConsumer.committed(TopicPartition)` to `committed(Set<TopicPartition>)` for Kafka 4.0 compatibility. Converts single `TopicPartition` arguments to `Collections.singleton()` calls. 
* [io.moderne.kafka.MigrateConsumerGroupStateToGroupState](https://docs.openrewrite.org/recipes/kafka/migrateconsumergroupstatetogroupstate): Migrates from the deprecated `ConsumerGroupState` to `GroupState` for Kafka 4.0 compatibility. `ConsumerGroupState` was deprecated in favor of `GroupState` which supports both consumer groups and share groups. 
* [io.moderne.kafka.MigrateConsumerPollToDuration](https://docs.openrewrite.org/recipes/kafka/migrateconsumerpolltoduration): Migrates from the deprecated `KafkaConsumer.poll(long)` to `poll(Duration)` for Kafka 4.0 compatibility. Converts millisecond timeout values to `Duration.ofMillis()` calls. 
* [io.moderne.kafka.MigrateSendOffsetsToTransaction](https://docs.openrewrite.org/recipes/kafka/migratesendoffsetstotransaction): Migrates from the deprecated `KafkaProducer.sendOffsetsToTransaction(Map, String)` to `sendOffsetsToTransaction(Map, ConsumerGroupMetadata)` for Kafka 4.0 compatibility. This recipe uses a conservative approach with `new ConsumerGroupMetadata(groupId)`. 
* [io.moderne.kafka.MigrateToKafka23](https://docs.openrewrite.org/recipes/kafka/migratetokafka23): Migrate applications to the latest Kafka 2.3 release. 
* [io.moderne.kafka.MigrateToKafka40](https://docs.openrewrite.org/recipes/kafka/migratetokafka40): Migrate applications to the latest Kafka 4.0 release. This includes updating dependencies to 4.0.x, ensuring Java 11+ for clients and Java 17+ for brokers/tools, and handling changes. 
* [io.moderne.kafka.MigrateToKafka41](https://docs.openrewrite.org/recipes/kafka/migratetokafka41): Migrate applications to the latest Kafka 4.1 release. This includes updating dependencies to 4.1.x, migrating deprecated Admin API methods, updating Streams configuration properties, and removing deprecated broker properties. 
* [io.moderne.kafka.RemoveDeprecatedKafkaProperties](https://docs.openrewrite.org/recipes/kafka/removedeprecatedkafkaproperties): Removes a specific Kafka property that is no longer supported in Kafka 4.0. 
* [io.moderne.kafka.UpgradeJavaForKafkaBroker](https://docs.openrewrite.org/recipes/kafka/upgradejavaforkafkabroker): Ensures Java 17 or higher is used when Kafka broker or tools dependencies are present. 
* [io.moderne.kafka.UpgradeJavaForKafkaClients](https://docs.openrewrite.org/recipes/kafka/upgradejavaforkafkaclients): Ensures Java 11 or higher is used when Kafka client libraries are present. 
* [io.quarkus.updates.camel.camel414.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/io/quarkus/updates/camel/camel414/camelquarkusmigrationrecipe): Migrates `camel 4.13` Quarkus application to `camel 4.14`. 
* [org.openrewrite.github.SetupPythonToUv](https://docs.openrewrite.org/recipes/github/setuppythontouv): Replace `actions/setup-python` action with `astral-sh/setup-uv` action for faster Python environment setup and dependency management.

**Benefits of UV:**
- Significantly faster package installation and environment setup
- Built-in dependency resolution and locking
- Integrated caching for improved CI performance
- Drop-in replacement for pip workflows

**Transformations applied:**
- `actions/setup-python@v5` → `astral-sh/setup-uv@v6`
- `cache: 'pip'` → `enable-cache: 'true'`
- `pip install -r requirements.txt` → `uv sync` (configurable strategy)
- `python -m <module>` → `uv run <module>`
- Removes unnecessary `pip install --upgrade pip` steps

**Sync strategies:**
- `basic`: Basic synchronization (`uv sync`)
- `locked`: Use locked dependencies (`uv sync --locked`)
- `full`: Install all extras and dev dependencies (`uv sync --all-extras --dev`)

See the [UV GitHub integration guide](https://docs.astral.sh/uv/guides/integration/github/) for more details. 
* [org.openrewrite.github.security.AnonymousJobsRecipe](https://docs.openrewrite.org/recipes/github/security/anonymousjobsrecipe): Find jobs that lack descriptive names, making them harder to identify in workflow runs. Jobs without `name` properties default to their job ID, which may not be descriptive. Based on [zizmor's anonymous-definition audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/anonymous_definition.rs). 
* [org.openrewrite.github.security.ArtifactSecurityRecipe](https://docs.openrewrite.org/recipes/github/security/artifactsecurityrecipe): Find workflows that may persist credentials through artifact uploads. This occurs when checkout actions don't disable credential persistence and upload actions include sensitive paths that may contain credentials, SSH keys, or configuration files. Based on [zizmor's `artipacked` audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/artipacked.rs). 
* [org.openrewrite.github.security.BotConditionsRecipe](https://docs.openrewrite.org/recipes/github/security/botconditionsrecipe): Find workflow conditions that check for bot actors in ways that can be spoofed. Bot actor names (like `dependabot[bot]`) can be easily spoofed by creating accounts with similar names. Use `actor_id` with numeric comparison instead for secure bot validation. Based on [zizmor's `bot-conditions` audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/bot_conditions.rs). 
* [org.openrewrite.github.security.CachePoisoningRecipe](https://docs.openrewrite.org/recipes/github/security/cachepoisoningrecipe): Detects potential cache poisoning vulnerabilities in workflows that use caching and publish artifacts. When workflows use caches during artifact publishing, attackers may be able to poison the cache with malicious content that gets included in published artifacts. Based on [zizmor's cache-poisoning audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/cache_poisoning.rs). 
* [org.openrewrite.github.security.DangerousTriggersRecipe](https://docs.openrewrite.org/recipes/github/security/dangeroustriggersrecipe): Detects use of fundamentally insecure workflow triggers like `pull_request_target` and `workflow_run`. These triggers run with elevated privileges and are almost always used insecurely, potentially allowing code injection from untrusted sources. Based on [zizmor's dangerous-triggers audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/dangerous_triggers.rs). 
* [org.openrewrite.github.security.ExcessivePermissionsRecipe](https://docs.openrewrite.org/recipes/github/security/excessivepermissionsrecipe): Find overly broad permissions in GitHub Actions workflows. Flags 'write-all' permissions and excessive write permissions that could be scoped more narrowly for security. Based on [zizmor's excessive-permissions audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/excessive_permissions.rs). 
* [org.openrewrite.github.security.ForbiddenUsesRecipe](https://docs.openrewrite.org/recipes/github/security/forbiddenusesrecipe): Find usage of forbidden or dangerous GitHub Actions that have known security vulnerabilities or follow suspicious patterns. Based on [zizmor's forbidden-uses audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/forbidden_uses.rs). 
* [org.openrewrite.github.security.GitHubActionsSecurity](https://docs.openrewrite.org/recipes/github/security/githubactionssecurity): Finds potential security issues in GitHub Actions workflows, based on [Zizmor](https://docs.zizmor.sh) security analysis rules. 
* [org.openrewrite.github.security.GitHubEnvRecipe](https://docs.openrewrite.org/recipes/github/security/githubenvrecipe): Detects dangerous usage of `GITHUB_ENV` and `GITHUB_PATH` environment files in workflows with risky triggers like `pull_request_target` or `workflow_run`. Writing to these files can allow code injection when the content includes user-controlled data. Based on [zizmor's github-env audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/github_env.rs). 
* [org.openrewrite.github.security.HardcodedCredentialsRecipe](https://docs.openrewrite.org/recipes/github/security/hardcodedcredentialsrecipe): Detects hardcoded credentials in GitHub Actions container configurations. Container registry passwords should use secrets instead of hardcoded values. Based on [zizmor's hardcoded-container-credentials audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/hardcoded_container_credentials.rs). 
* [org.openrewrite.github.security.InsecureCommandsRecipe](https://docs.openrewrite.org/recipes/github/security/insecurecommandsrecipe): Detects when insecure workflow commands are enabled via `ACTIONS_ALLOW_UNSECURE_COMMANDS`. This environment variable enables dangerous workflow commands that can lead to code injection vulnerabilities. Based on [zizmor's insecure-commands audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/insecure_commands.rs). 
* [org.openrewrite.github.security.ObfuscationRecipe](https://docs.openrewrite.org/recipes/github/security/obfuscationrecipe): Find workflows that use obfuscated action references or expressions that may be attempting to hide malicious behavior. This includes action paths with `'.'`, `'..'`, empty components, or expressions that use quote manipulation to hide their true intent. Based on [zizmor's `obfuscation` audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/obfuscation.rs). 
* [org.openrewrite.github.security.RefVersionMismatchRecipe](https://docs.openrewrite.org/recipes/github/security/refversionmismatchrecipe): Find GitHub Actions that are pinned to commit SHAs but have version comments that may not match the actual pinned version. This can lead to confusion about which version is actually being used and potential security issues if the comment misleads developers about the pinned version. Based on [zizmor's `ref-version-mismatch` audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/ref_version_mismatch.rs). 
* [org.openrewrite.github.security.SecretsInheritRecipe](https://docs.openrewrite.org/recipes/github/security/secretsinheritrecipe): Detects when reusable workflows unconditionally inherit all parent secrets via `secrets: inherit`. This practice can lead to over-privileged workflows and potential secret exposure to called workflows that may not need access to all secrets. Consider explicitly passing only required secrets. Based on [zizmor's secrets-inherit audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/secrets_inherit.rs). 
* [org.openrewrite.github.security.SelfHostedRunnerRecipe](https://docs.openrewrite.org/recipes/github/security/selfhostedrunnerrecipe): Find workflows that use `self-hosted` runners, which may have security implications in public repositories due to potential persistence between workflow runs and lack of isolation. Self-hosted runners should be properly secured and ideally ephemeral. Based on [zizmor's `self-hosted-runner` audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/self_hosted_runner.rs). 
* [org.openrewrite.github.security.TemplateInjectionRecipe](https://docs.openrewrite.org/recipes/github/security/templateinjectionrecipe): Find GitHub Actions workflows vulnerable to template injection attacks. These occur when user-controllable input (like pull request titles, issue bodies, or commit messages) is used directly in `run` commands or `script` inputs without proper escaping. Attackers can exploit this to execute arbitrary code. Based on [zizmor's `template-injection` audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/template_injection.rs). 
* [org.openrewrite.github.security.TrustedPublishingRecipe](https://docs.openrewrite.org/recipes/github/security/trustedpublishingrecipe): Find workflows that use manual credentials for publishing instead of OIDC trusted publishing. Trusted publishing eliminates the need for long-lived API tokens and provides better security through short-lived, automatically-rotated tokens. Based on [zizmor's use-trusted-publishing audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/use_trusted_publishing.rs). 
* [org.openrewrite.github.security.UndocumentedPermissionsRecipe](https://docs.openrewrite.org/recipes/github/security/undocumentedpermissionsrecipe): Add documentation comments for permissions blocks in GitHub Actions workflows. Documenting permissions helps reviewers understand why specific permissions are needed and ensures security-conscious development practices. Based on [zizmor's undocumented-permissions audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/undocumented_permissions.rs). 
* [org.openrewrite.github.security.UnpinnedActionsRecipe](https://docs.openrewrite.org/recipes/github/security/unpinnedactionsrecipe): Pin GitHub Actions to specific commit SHAs for security and reproducibility. Actions pinned to tags or branches can be changed by the action author, while SHA pins are immutable. Based on [zizmor's unpinned-uses audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/unpinned_uses.rs). 
* [org.openrewrite.github.security.UnpinnedDockerImagesRecipe](https://docs.openrewrite.org/recipes/github/security/unpinneddockerimagesrecipe): Pin Docker images to specific digest hashes for security and reproducibility. Images pinned to tags can be changed by the image author, while digest pins are immutable. Based on [zizmor's unpinned-images audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/unpinned_images.rs). 
* [org.openrewrite.java.jspecify.MigrateFromMicrometerAnnotations](https://docs.openrewrite.org/recipes/java/jspecify/migratefrommicrometerannotations): Migrate from Micrometer annotations to JSpecify. 
* [org.openrewrite.java.logging.log4j.InlineMethods](https://docs.openrewrite.org/recipes/java/logging/log4j/inlinemethods): Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table. 
* [org.openrewrite.java.migrate.io.ReplaceSystemOutWithIOPrint](https://docs.openrewrite.org/recipes/java/migrate/io/replacesystemoutwithioprint): Replace `System.out.print()`, `System.out.println()` with `IO.print()` and `IO.println()`. Migrates to the new IO utility class introduced in Java 25. 
* [org.openrewrite.java.migrate.lang.MigrateMainMethodToInstanceMain](https://docs.openrewrite.org/recipes/java/migrate/lang/migratemainmethodtoinstancemain): Migrate `public static void main(String[] args)` method to instance `void main()` method when the `args` parameter is unused, as supported by JEP 512 in Java 25+. 
* [org.openrewrite.java.migrate.util.MigrateStringReaderToReaderOf](https://docs.openrewrite.org/recipes/java/migrate/util/migratestringreadertoreaderof): Migrate `new StringReader(String)` to `Reader.of(CharSequence)` in Java 25+. This only applies when assigning to `Reader` variables or returning from methods that return `Reader`. The new method creates non-synchronized readers which are more efficient when thread-safety is not required. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_0_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_0_0): Quarkus update recipes to upgrade your application to 3.0.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_10_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_10_0): Quarkus update recipes to upgrade your application to 3.10.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_11_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_11_0): Quarkus update recipes to upgrade your application to 3.11.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_12_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_12_0): Quarkus update recipes to upgrade your application to 3.12.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_13_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_13_0): Quarkus update recipes to upgrade your application to 3.13.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_15_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_15_0): Quarkus update recipes to upgrade your application to 3.15.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_17_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_17_0): Quarkus update recipes to upgrade your application to 3.17.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_18_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_18_0): Quarkus update recipes to upgrade your application to 3.18.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_19_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_19_0): Quarkus update recipes to upgrade your application to 3.19.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_1_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_1_0): Quarkus update recipes to upgrade your application to 3.1.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_20_1](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_20_1): Quarkus update recipes to upgrade your application to 3.20.1. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_21_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_21_0): Quarkus update recipes to upgrade your application to 3.21.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_22_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_22_0): Quarkus update recipes to upgrade your application to 3.22.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_23_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_23_0): Quarkus update recipes to upgrade your application to 3.23.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_24_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_24_0): Quarkus update recipes to upgrade your application to 3.24.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_25_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_25_0): Quarkus update recipes to upgrade your application to 3.25.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_26_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_26_0): Quarkus update recipes to upgrade your application to 3.26.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_2_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_2_0): Quarkus update recipes to upgrade your application to 3.2.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_3_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_3_0): Quarkus update recipes to upgrade your application to 3.3.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_5_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_5_0): Quarkus update recipes to upgrade your application to 3.5.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_6_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_6_0): Quarkus update recipes to upgrade your application to 3.6.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_7_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_7_0): Quarkus update recipes to upgrade your application to 3.7.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_8_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_8_0): Quarkus update recipes to upgrade your application to 3.8.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_8_3](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_8_3): Quarkus update recipes to upgrade your application to 3.8.3. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_9_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_9_0): Quarkus update recipes to upgrade your application to 3.9.0. 
* [org.openrewrite.recipes.rewrite.InlineMethods](https://docs.openrewrite.org/recipes/recipes/rewrite/inlinemethods): Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table. 
* [software.amazon.awssdk.v2migration.S3PojoToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3pojotov2): S3 POJOs to V2 
* [software.amazon.awssdk.v2migration.SdkExceptionToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/sdkexceptiontov2): SDK Exceptions Methods to V2 
* [tech.picnic.errorprone.refasterrules.tech.picnic.errorprone.refasterrules.AllRefasterRules](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/tech/picnic/errorprone/refasterrules/allrefasterrules): Collection of all Refaster rules from Picnic's error-prone-contrib project. 

## Removed Recipes

* **io.moderne.elastic.elastic9.BoxedApiField**: Adds null checks when using API fields that changed from primitive to boxed types. In Elasticsearch Java Client 9.0, certain fields that were always present and returned primitives now return boxed types to support null values, requiring null checks to prevent NPEs. 
* **io.moderne.elastic.elastic9.BoxedApiFields**: Changes primitive return types of various API response fields to their boxed counterparts to align with Elasticsearch 9 specifications. 
* **software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2Experimental**: This recipe will apply changes required for migrating from the AWS SDK for Java v1 to the AWS SDK for Java v2, including S3 Transfer Manager. Transforms for Transfer Manager are incomplete and in-progress. 
* **software.amazon.awssdk.v2migration.S3AddImportsAndComments**: Add imports and comments to unsupported S3 transforms. 
* **software.amazon.awssdk.v2migration.TransferManagerMethodsToV2**: Transfer Manager Methods to V2 
* **software.amazon.awssdk.v2migration.openrewrite.ChangeMethodInvocationReturnType**: Changes the return type of a method invocation. 

## Changed Recipes

* [org.openrewrite.java.InlineMethodCalls](https://docs.openrewrite.org/recipes/java/inlinemethodcalls) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `classpathFromResources: { type: Set, required: false }`
    * `imports: { type: Set, required: false }`
    * `methodPattern: { type: String, required: true }`
    * `replacement: { type: String, required: true }`
    * `staticImports: { type: Set, required: false }`
* [org.openrewrite.properties.AddProperty](https://docs.openrewrite.org/recipes/properties/addproperty) was changed:
  * Old Options:
    * `comment: { type: String, required: false }`
    * `delimiter: { type: String, required: false }`
    * `property: { type: String, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `comment: { type: String, required: false }`
    * `delimiter: { type: String, required: false }`
    * `orderedInsertion: { type: Boolean, required: false }`
    * `property: { type: String, required: true }`
    * `value: { type: String, required: true }`
* [org.openrewrite.staticanalysis.AnnotateNullableParameters](https://docs.openrewrite.org/recipes/staticanalysis/annotatenullableparameters) was changed:
  * Old Options:
    * `nullableAnnotationClass: { type: String, required: false }`
  * New Options:
    * `additionalNullCheckingMethods: { type: List, required: false }`
    * `nullableAnnotationClass: { type: String, required: false }`