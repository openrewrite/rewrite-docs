---
description: What's changed in OpenRewrite version 8.75.2.
---

# 8.75.2 release (2026-03-09)

_Total recipe count: 4202_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.57.12`
* Staging CLI version: `v3.57.14`

## Removed Artifacts

* rewrite-csharp

## New Recipes

* [org.openrewrite.gitlab.AddArtifactsExpireIn](https://docs.openrewrite.org/recipes/gitlab/addartifactsexpirein): Set `artifacts:expire_in` in `.gitlab-ci.yml` to prevent storage bloat from indefinitely stored artifacts. 
* [org.openrewrite.gitlab.AddCache](https://docs.openrewrite.org/recipes/gitlab/addcache): Add `cache` configuration to `.gitlab-ci.yml` for faster builds. 
* [org.openrewrite.gitlab.AddDefaultKeyword](https://docs.openrewrite.org/recipes/gitlab/adddefaultkeyword): Add or update a keyword in the `default` section of `.gitlab-ci.yml`. 
* [org.openrewrite.gitlab.AddInterruptible](https://docs.openrewrite.org/recipes/gitlab/addinterruptible): Set `interruptible: true` in `.gitlab-ci.yml` to allow pipelines to be cancelled when superseded. 
* [org.openrewrite.gitlab.AddRetry](https://docs.openrewrite.org/recipes/gitlab/addretry): Add `retry` configuration to `.gitlab-ci.yml` for resilience against infrastructure failures. 
* [org.openrewrite.gitlab.AddTimeout](https://docs.openrewrite.org/recipes/gitlab/addtimeout): Set `timeout` in `.gitlab-ci.yml` to prevent jobs from hanging indefinitely. 
* [org.openrewrite.gitlab.AddWorkflowRules](https://docs.openrewrite.org/recipes/gitlab/addworkflowrules): Add `workflow:rules` to `.gitlab-ci.yml` to control pipeline creation. 
* [org.openrewrite.gitlab.BestPractices](https://docs.openrewrite.org/recipes/gitlab/bestpractices): Apply GitLab CI/CD best practices to `.gitlab-ci.yml`. This includes adding `workflow:rules` to prevent duplicate pipelines, setting `interruptible: true` and `retry` in the `default` section, configuring `artifacts:expire_in`, and setting a job `timeout`. 
* [org.openrewrite.java.logging.slf4j.MessageFormatToParameterizedLogging](https://docs.openrewrite.org/recipes/java/logging/slf4j/messageformattoparameterizedlogging): Replace `MessageFormat.format()` calls in SLF4J logging statements with parameterized placeholders for improved performance. 
* [org.openrewrite.java.logging.slf4j.RemoveUnnecessaryLogLevelGuards](https://docs.openrewrite.org/recipes/java/logging/slf4j/removeunnecessaryloglevelguards): Remove `if` statement guards around SLF4J logging calls when parameterized logging makes them unnecessary. 
* [org.openrewrite.java.logging.slf4j.StringFormatToParameterizedLogging](https://docs.openrewrite.org/recipes/java/logging/slf4j/stringformattoparameterizedlogging): Replace `String.format()` calls in SLF4J logging statements with parameterized placeholders for improved performance. 
* [org.openrewrite.java.migrate.lombok.UseAllArgsConstructor](https://docs.openrewrite.org/recipes/java/migrate/lombok/useallargsconstructor): Prefer the Lombok `@AllArgsConstructor` annotation over explicitly written out constructors that assign all non-static fields. 
* [org.openrewrite.java.migrate.lombok.UseRequiredArgsConstructor](https://docs.openrewrite.org/recipes/java/migrate/lombok/userequiredargsconstructor): Prefer the Lombok `@RequiredArgsConstructor` annotation over explicitly written out constructors that only assign final fields. 
* [org.openrewrite.java.spring.boot4.RenameDeprecatedStartersManagedVersions](https://docs.openrewrite.org/recipes/java/spring/boot4/renamedeprecatedstartersmanagedversions): Renames deprecated Spring Boot starters to their new names without adding explicit versions, for use in projects where the `io.spring.dependency-management` plugin manages versions via BOM. 
* [org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListener](https://docs.openrewrite.org/recipes/java/testing/mockito/replacemockitotestexecutionlistener): Replace `@TestExecutionListeners(MockitoTestExecutionListener.class)` with the appropriate Mockito initialization for the test framework in use: `@ExtendWith(MockitoExtension.class)` for JUnit 5, `@RunWith(MockitoJUnitRunner.class)` for JUnit 4, or `MockitoAnnotations.openMocks(this)` for TestNG. 
* [org.openrewrite.java.testing.mockito.ReplacePowerMockDependencies](https://docs.openrewrite.org/recipes/java/testing/mockito/replacepowermockdependencies): Replaces PowerMock API dependencies with `mockito-inline` when `mockStatic()`, `whenNew()`, or `@PrepareForTest` usage is detected, or `mockito-core` otherwise. PowerMock features like static mocking, constructor mocking, and final class mocking require the inline mock maker which is bundled in `mockito-inline` for Mockito 3.x/4.x. 

## Removed Recipes

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
* **org.openrewrite.node.migrate.net.remove-set-simultaneous-accepts**: Remove calls to deprecated `net._setSimultaneousAccepts()` which was an undocumented internal function that is no longer necessary. 
* **org.openrewrite.node.migrate.process.coerce-process-exit-code**: Wraps non-integer values passed to `process.exit()` or assigned to `process.exitCode` with `Math.trunc()` to avoid the DEP0164 deprecation warning about implicit coercion to integer. 
* **org.openrewrite.node.migrate.process.remove-usage-of-features-tls-underscore_constants**: Remove references to deprecated `process.features.tls_*` properties, replace with `process.features.tls`. 
* **org.openrewrite.node.migrate.stream.replace-internal-modules**: Replace deprecated internal stream module imports like `require('node:_stream_readable')` with the public `node:stream` module. 
* **org.openrewrite.node.migrate.tls.replace-internal-modules**: Replace deprecated internal TLS module imports `require('node:_tls_common')` and `require('node:_tls_wrap')` with the public `node:tls` module. 
* **org.openrewrite.node.migrate.upgrade-node-22**: Migrate deprecated APIs for Node.js 22 compatibility. Addresses Node 22 runtime deprecations and deprecations from earlier versions. 
* **org.openrewrite.node.migrate.upgrade-node-24**: Migrate deprecated APIs for Node.js 24 compatibility. Includes all migrations from Node.js 22, plus Node 23 and Node 24 deprecations. 
* **org.openrewrite.node.migrate.util.remove-promisify-on-promise**: Removes `util.promisify()` calls on functions that already return a Promise. Since Node.js v17.0.0, calling promisify on a function that returns a Promise emits a runtime deprecation warning (DEP0174). 
* **org.openrewrite.node.migrate.util.replace-is-webassembly-compiled-module**: Replace `util.types.isWebAssemblyCompiledModule(value)` with `value instanceof WebAssembly.Module`. 
* **org.openrewrite.node.migrate.util.replace-util-extend**: Replace deprecated `util._extend(target, source)` calls with `Object.assign(target, source)` which preserves the mutation behavior. 
* **org.openrewrite.node.migrate.util.replace-util-log**: Replace deprecated `util.log()` calls with `console.log()`. Note: `util.log()` included timestamps, but `console.log()` does not. 
* **org.openrewrite.node.migrate.util.use-native-type-checking-methods**: The `util` module's type-checking methods have been removed in Node 22. 
* **org.openrewrite.node.migrate.zlib.replace-bytes-read**: Replace deprecated `bytesRead` property on zlib streams with `bytesWritten`. 
* **org.openrewrite.node.security.remove-redundant-overrides**: Removes overrides/resolutions from package.json that are redundant because the dependency tree already resolves to the overridden version or higher. 

