---
description: What's changed in OpenRewrite version 8.71.0.
---

# 8.71.0 release (2026-01-07)

_Total recipe count: 5095_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.53.2`
* Staging CLI version: `v3.54.5`

## Removed Artifacts

* rewrite-comprehension

## New Recipes

* [io.moderne.hibernate.MigrateToHibernate72](https://docs.openrewrite.org/recipes/hibernate/migratetohibernate72-moderne-edition): This recipe will apply changes commonly needed when migrating to Hibernate 7.2.x. 
* [io.moderne.java.spring.boot4.AddModularStarters](https://docs.openrewrite.org/recipes/java/spring/boot4/addmodularstarters): Add Spring Boot 4.0 starter dependencies based on package usage.
Note: Higher-level starters (like data-jpa) include lower-level ones (like jdbc) transitively, so only the highest-level detected starter is added for each technology. 
* [io.moderne.java.spring.cloud20251.SpringCloudProperties_2025_1](https://docs.openrewrite.org/recipes/java/spring/cloud20251/springcloudproperties_2025_1): Migrate properties found in `application.properties` and `application.yml` for Spring Cloud 2025.1 (Oakwood). This includes the stubrunner property prefix migration from `stubrunner.` to `spring.cloud.contract.stubrunner.`. 
* [io.moderne.java.spring.cloud20251.UpgradeSpringCloud_2025_1](https://docs.openrewrite.org/recipes/java/spring/cloud20251/upgradespringcloud_2025_1): Upgrade to Spring Cloud 2025.1 (Oakwood). This release is based on Spring Framework 7 and Spring Boot 4. Each Spring Cloud project has been updated to version 5.0.0. 
* [io.moderne.java.spring.security7.ModularizeSpringSecurity7](https://docs.openrewrite.org/recipes/java/spring/security7/modularizespringsecurity7): Spring Security Core was modularized in version 7, deprecated classes that are still a crucial part of some applications are moved to `spring-security-access`. 
* [org.openrewrite.featureflags.quarkus.RemoveGetInt](https://docs.openrewrite.org/recipes/featureflags/quarkus/removegetint): Replace `getInt()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.quarkus.RemoveGetString](https://docs.openrewrite.org/recipes/featureflags/quarkus/removegetstring): Replace `getString()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.quarkus.RemoveIsEnabled](https://docs.openrewrite.org/recipes/featureflags/quarkus/removeisenabled): Replace `isEnabled()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.quarkus.search.FindFeatureFlag](https://docs.openrewrite.org/recipes/featureflags/quarkus/search/findfeatureflag): Find a Quarkus feature flag. 
* [org.openrewrite.gradle.RemoveRedundantSecurityResolutionRules](https://docs.openrewrite.org/recipes/gradle/removeredundantsecurityresolutionrules): Remove `resolutionStrategy.eachDependency` rules that pin dependencies to versions that are already being managed by a platform/BOM to equal or newer versions. Only removes rules that have a security advisory identifier (CVE or GHSA) in the `because` clause, unless a custom pattern is specified. 
* [org.openrewrite.java.dependencies.RemoveRedundantDependencies](https://docs.openrewrite.org/recipes/java/dependencies/removeredundantdependencies): Remove explicit dependencies that are already provided transitively by a specified dependency. This recipe downloads and resolves the parent dependency's POM to determine its true transitive dependencies, allowing it to detect redundancies even when both dependencies are explicitly declared. 
* [org.openrewrite.java.migrate.io.AddInputStreamBulkReadMethod](https://docs.openrewrite.org/recipes/java/migrate/io/addinputstreambulkreadmethod): Adds a `read(byte[], int, int)` method to `InputStream` subclasses that only override the single-byte `read()` method. Java's default `InputStream.read(byte[], int, int)` implementation calls the single-byte `read()` method in a loop, which can cause severe performance degradation (up to 350x slower) for bulk reads. This recipe detects `InputStream` implementations that delegate to another stream and adds the missing bulk read method to delegate bulk reads as well. 
* [org.openrewrite.java.spring.boot2.UpgradeSpockToGroovy3](https://docs.openrewrite.org/recipes/java/spring/boot2/upgradespocktogroovy3): Upgrade Spock dependencies to a Groovy 3 compatible 2.0 variant when Groovy 3 is on the classpath. 
* [org.openrewrite.java.spring.boot4.AddSpringBootStarterFlyway](https://docs.openrewrite.org/recipes/java/spring/boot4/addspringbootstarterflyway): Adds the necessary Spring Boot 4.0 Flyway starter for autoconfiguration based on dependency usage. 
* [org.openrewrite.java.springdoc.UpgradeSpringDoc_3_0](https://docs.openrewrite.org/recipes/java/springdoc/upgradespringdoc_3_0): Upgrade to SpringDoc v3.0. 
* [org.openrewrite.java.testing.junit5.HandleExternalResourceRules](https://docs.openrewrite.org/recipes/java/testing/junit5/handleexternalresourcerules): Handles the usage of the ExternalResourceRule fields by adding the @ExtendWith(ExternalResourceSupport.class) annotation to the test class. 
* [org.openrewrite.java.testing.junit5.UpgradeToJUnit513](https://docs.openrewrite.org/recipes/java/testing/junit5/upgradetojunit513): Upgrades JUnit 5 to 5.13.x and migrates all deprecated APIs. 
* [org.openrewrite.java.testing.testcontainers.ConvertToRawType](https://docs.openrewrite.org/recipes/java/testing/testcontainers/converttorawtype): Convert parameterized types of a specified Java class to their raw types. 
* [org.openrewrite.json.CopyValue](https://docs.openrewrite.org/recipes/json/copyvalue): Copies a JSON value from one key to another. The existing key/value pair remains unaffected by this change. Attempts to create the new key if it does not exist. 
* [org.openrewrite.kotlin.OrderImports](https://docs.openrewrite.org/recipes/kotlin/orderimports): Groups and orders import statements. If a [style has been defined](https://docs.openrewrite.org/concepts-and-explanations/styles), this recipe will order the imports according to that style. If no style is detected, this recipe will default to ordering imports in the same way that IntelliJ IDEA does. 
* [org.openrewrite.kubernetes.migrate.MigrateToAPIv1_33](https://docs.openrewrite.org/recipes/kubernetes/migrate/migratetoapiv1_33): This recipe will apply changes commonly needed when migrating to Kubernetes API v1.33. 
* [org.openrewrite.kubernetes.migrate.MigrateToAPIv1_34](https://docs.openrewrite.org/recipes/kubernetes/migrate/migratetoapiv1_34): This recipe will apply changes commonly needed when migrating to Kubernetes API v1.34. 
* [org.openrewrite.kubernetes.migrate.MigrateToAPIv1_35](https://docs.openrewrite.org/recipes/kubernetes/migrate/migratetoapiv1_35): This recipe will apply changes commonly needed when migrating to Kubernetes API v1.35. 

## Removed Recipes

* **org.openrewrite.java.jackson.UpgradeJackson_2_3_RemoveModules**: Remove Jackson modules such as `jackson-module-parameter-names`, `jackson-datatype-jdk8`, and `jackson-datatype-jsr310` to depend on `jackson-databind` in Jackson 3.x. 
* **org.openrewrite.java.testing.search.FindUnitTests**: Produces a data table showing how methods are used in unit tests. 
* **org.openrewrite.javascript.change-import**: Changes an import from one module/member to another, updating all type attributions. 
* **org.openrewrite.javascript.cleanup.add-parse-int-radix**: Adds the radix parameter (base 10) to `parseInt()` calls that are missing it, preventing potential parsing issues. 
* **org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method**: Detects async callbacks passed to array methods like .some(), .every(), .filter() which don't await promises. This is a common bug where Promise objects are always truthy. 
* **org.openrewrite.javascript.cleanup.order-imports**: Sort imports by category and module path. Categories: side-effect, namespace, default, named, type. Within each category, imports are sorted alphabetically by module path. Named specifiers within each import are also sorted alphabetically. 
* **org.openrewrite.javascript.cleanup.prefer-optional-chain**: Converts ternary expressions like `foo ? foo.bar : undefined` to use optional chaining syntax `foo?.bar`. 
* **org.openrewrite.javascript.cleanup.use-object-property-shorthand**: Simplifies object properties where the property name and value/variable name are the same (e.g., `{ x: x }` becomes `{ x }`). Applies to both destructuring patterns and object literals. 
* **org.openrewrite.javascript.dependencies.add-dependency**: Adds a new dependency to `package.json` and updates the lock file by running the package manager. 
* **org.openrewrite.javascript.dependencies.find-dependency**: Finds dependencies in a project's `package.json`. Can find both direct dependencies and dependencies that transitively include the target package. This recipe is commonly used as a precondition for other recipes. 
* **org.openrewrite.javascript.dependencies.upgrade-dependency-version**: Upgrades the version of a direct dependency in `package.json` and updates the lock file by running the package manager. 
* **org.openrewrite.javascript.dependencies.upgrade-transitive-dependency-version**: Upgrades the version of a transitive dependency by adding override/resolution entries to `package.json` and updates the lock file by running the package manager. 
* **org.openrewrite.javascript.format.auto-format**: Format JavaScript and TypeScript code using formatting rules auto-detected from the project's existing code style. 
* **org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences**: Convert old-style octal escape sequences (e.g., `\0`, `\123`) to modern hex escape sequences (e.g., `\x00`, `\x53`) or Unicode escape sequences (e.g., `\u0000`, `\u0053`). 
* **org.openrewrite.javascript.migrate.es6.modernize-octal-literals**: Convert old-style octal literals (e.g., `0777`) to modern ES6 syntax (e.g., `0o777`). 
* **org.openrewrite.javascript.migrate.es6.remove-duplicate-object-keys**: Remove duplicate keys in object literals, keeping only the last occurrence (last-wins semantics). 
* **org.openrewrite.javascript.migrate.typescript.export-assignment-to-export-default**: Converts TypeScript `export =` syntax to ES module `export default` syntax for compatibility with ECMAScript modules. 
* **org.openrewrite.node.dependency-vulnerability-check**: This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe by default only upgrades to the latest **patch** version. If a minor or major upgrade is required to reach the fixed version, this can be controlled using the `maximumUpgradeDelta` option. Vulnerability information comes from the GitHub Security Advisory Database. 
* **org.openrewrite.node.migrate.buffer.replace-deprecated-slice**: Replace deprecated `buffer.slice()` calls with `buffer.subarray()` for compatibility with Uint8Array.prototype.slice(). 
* **org.openrewrite.node.migrate.buffer.replace-slow-buffer**: Replace deprecated `new SlowBuffer(size)` calls with `Buffer.allocUnsafeSlow(size)`. SlowBuffer was used to create un-pooled Buffer instances, but has been removed in favor of the explicit Buffer.allocUnsafeSlow() method. 
* **org.openrewrite.node.migrate.crypto.replace-crypto-fips**: Replace deprecated `crypto.fips` property access with `crypto.getFips()` for reads and `crypto.setFips(value)` for writes. 
* **org.openrewrite.node.migrate.crypto.replace-hash-constructor**: Replace deprecated `new crypto.Hash(algorithm)` constructor calls with `crypto.createHash(algorithm)` and `new crypto.Hmac(algorithm, key)` with `crypto.createHmac(algorithm, key)` factory methods. 
* **org.openrewrite.node.migrate.fs.replace-dirent-path**: Replaces deprecated `dirent.path` property access with `dirent.parentPath` on `fs.Dirent` instances to address DEP0178 deprecation. 
* **org.openrewrite.node.migrate.fs.replace-fs-access-constants**: Replace deprecated file access constants (`fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK`) with their equivalents from `fs.constants`. These constants were removed in Node.js v24+ and should be accessed through the constants namespace. 
* **org.openrewrite.node.migrate.fs.replace-fs-truncate-fd**: Replace deprecated `fs.truncate(fd, ...)` and `fs.truncateSync(fd, ...)` calls with `fs.ftruncate(fd, ...)` and `fs.ftruncateSync(fd, ...)` when the first argument is a file descriptor (number). 
* **org.openrewrite.node.migrate.fs.replace-stats-constructor**: Replace deprecated `new fs.Stats()` constructor calls with an object literal containing Stats properties initialized to undefined. 
* **org.openrewrite.node.migrate.http.replace-outgoing-message-headers**: Replace deprecated `OutgoingMessage.prototype._headers` with `getHeaders()`, `setHeader()`, `removeHeader()` and `OutgoingMessage.prototype._headerNames` with `getHeaderNames()` to address DEP0066 deprecation. 
* **org.openrewrite.node.migrate.process.coerce-process-exit-code**: Wraps non-integer values passed to `process.exit()` or assigned to `process.exitCode` with `Math.trunc()` to avoid the DEP0164 deprecation warning about implicit coercion to integer. 
* **org.openrewrite.node.migrate.process.remove-usage-of-features-tls-underscore_constants**: Remove references to deprecated `process.features.tls_*` properties, replace with `process.features.tls`. 
* **org.openrewrite.node.migrate.tls.replace-internal-modules**: Replace deprecated internal TLS module imports `require('node:_tls_common')` and `require('node:_tls_wrap')` with the public `node:tls` module. 
* **org.openrewrite.node.migrate.upgrade-node-22**: Migrate deprecated APIs for Node.js 22 compatibility. Addresses Node 22 runtime deprecations and deprecations from earlier versions. 
* **org.openrewrite.node.migrate.upgrade-node-24**: Migrate deprecated APIs for Node.js 24 compatibility. Includes all migrations from Node.js 22, plus Node 23 and Node 24 deprecations. 
* **org.openrewrite.node.migrate.util.remove-promisify-on-promise**: Removes `util.promisify()` calls on functions that already return a Promise. Since Node.js v17.0.0, calling promisify on a function that returns a Promise emits a runtime deprecation warning (DEP0174). 
* **org.openrewrite.node.migrate.util.replace-is-webassembly-compiled-module**: Replace `util.types.isWebAssemblyCompiledModule(value)` with `value instanceof WebAssembly.Module`. 
* **org.openrewrite.node.migrate.util.replace-util-extend**: Replace deprecated `util._extend(target, source)` calls with `Object.assign(target, source)` which preserves the mutation behavior. 
* **org.openrewrite.node.migrate.util.replace-util-log**: Replace deprecated `util.log()` calls with `console.log()`. Note: `util.log()` included timestamps, but `console.log()` does not. 
* **org.openrewrite.node.migrate.util.use-native-type-checking-methods**: The `util` module's type-checking methods have been removed in Node 22. 
* **org.openrewrite.node.migrate.zlib.replace-bytes-read**: Replace deprecated `bytesRead` property on zlib streams with `bytesWritten`. 

## Changed Recipes

* [org.openrewrite.csharp.dependencies.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/csharp/dependencies/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `addMarkers: { type: Boolean, required: false }`
    * `cvePattern: { type: String, required: false }`
  * New Options:
    * `addMarkers: { type: Boolean, required: false }`
    * `cvePattern: { type: String, required: false }`
    * `minimumSeverity: { type: String, required: false }`
* [org.openrewrite.json.AddKeyValue](https://docs.openrewrite.org/recipes/json/addkeyvalue) was changed:
  * Old Options:
    * `key: { type: String, required: true }`
    * `keyPath: { type: String, required: true }`
    * `prepend: { type: boolean, required: false }`
    * `value: { type: String, required: true }`
  * New Options:
    * `key: { type: String, required: true }`
    * `keyPath: { type: String, required: true }`
    * `prepend: { type: Boolean, required: false }`
    * `value: { type: String, required: true }`
* [org.openrewrite.nodejs.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/nodejs/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `addMarkers: { type: Boolean, required: false }`
  * New Options:
    * `addMarkers: { type: Boolean, required: false }`
    * `cvePattern: { type: String, required: false }`
    * `minimumSeverity: { type: String, required: false }`
* [org.openrewrite.yaml.CopyValue](https://docs.openrewrite.org/recipes/yaml/copyvalue) was changed:
  * Old Options:
    * `newFilePath: { type: String, required: false }`
    * `newKey: { type: String, required: true }`
    * `oldFilePath: { type: String, required: false }`
    * `oldKeyPath: { type: String, required: true }`
  * New Options:
    * `createNewKeys: { type: Boolean, required: false }`
    * `newFilePath: { type: String, required: false }`
    * `newKey: { type: String, required: true }`
    * `oldFilePath: { type: String, required: false }`
    * `oldKeyPath: { type: String, required: true }`