# 8.8.3 release (2023-10-31)

## New Recipes

* org.openrewrite.java.migrate.UseTabsOrSpaces: This is useful for one-off migrations of a codebase that has mixed indentation styles, while preserving all other auto-detected formatting rules. 
* org.openrewrite.java.migrate.guava.NoGuavaJava21: Guava filled in important gaps in the Java standard library and still does. But at least some of Guava's API surface area is covered by the Java standard library now, and some projects may be able to remove Guava altogether if they migrate to standard library for these functions. 
* org.openrewrite.java.migrate.guava.PreferMathClamp: Prefer `java.lang.Math#clamp` instead of using `com.google.common.primitives.*#constrainToRange`. 
* org.openrewrite.java.migrate.jakarta.RemovedJakartaFacesExpressionLanguageClasses: Several classes were removed and replaced in Jakarta Faces 4.0. The only Object definition not removed in the jakarta.faces.el package is the CompositeComponentExpressionHolder interface. 
* org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods: Methods that were removed from the `jakarta.faces.application.StateManager` and `javax.faces.application.StateManager` classes in Jakarta Faces 4.0 are replaced by `jakarta.faces.view.StateManagementStrategy` or `javax.faces.view.StateManagementStrategy` based on Jakarta10 migration in Faces 4.0 
* org.openrewrite.java.migrate.lombok.LombokValueToRecord: Convert Lombok `@Value` annotated classes to standard Java Records. 
* org.openrewrite.java.security.ImproperPrivilegeManagement: Marking code as privileged enables a piece of trusted code to temporarily enable access to more resources than are available directly to the code that called it. 
* org.openrewrite.java.security.OwaspA04: OWASP A04:2021 focuses on risks related to design and architectural flaws,  with a call for more use of threat modeling, secure design patterns, and reference architectures. This recipe seeks to remediate these vulnerabilities. 
* org.openrewrite.java.security.marshalling.InsecureJmsDeserialization: JMS `Object` messages depend on Java Serialization for marshalling/unmarshalling of the message payload when `ObjectMessage#getObject` is called. Deserialization of untrusted data can lead to security flaws. 
* org.openrewrite.java.testing.cleanup.AssertEqualsBooleanToAssertBoolean: Using `assertFalse` or `assertTrue` is simpler and more clear. 
* org.openrewrite.java.testing.cleanup.AssertNotEqualsBooleanToAssertBoolean: Using `assertFalse` or `assertTrue` is simpler and more clear. 
* org.openrewrite.java.testing.jmockit.JMockitExpectationsToMockitoWhen: Rewrites JMockit `Expectations` to `Mockito.when`. 
* org.openrewrite.java.testing.jmockit.JMockitToMockito: This recipe will apply changes commonly needed when migrating from JMockit to Mockito. 

## Changed Recipes

* org.openrewrite.java.dependencies.AddDependency was changed:
  * Old Options:
    * `acceptTransitive: { type: Boolean, required: false }`
    * `artifactId: { type: String, required: true }`
    * `classifier: { type: String, required: false }`
    * `configuration: { type: String, required: false }`
    * `extension: { type: String, required: false }`
    * `familyPattern: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: true }`
    * `optional: { type: Boolean, required: false }`
    * `releasesOnly: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `type: { type: String, required: false }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `acceptTransitive: { type: Boolean, required: false }`
    * `artifactId: { type: String, required: true }`
    * `classifier: { type: String, required: false }`
    * `configuration: { type: String, required: false }`
    * `extension: { type: String, required: false }`
    * `familyPattern: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: false }`
    * `optional: { type: Boolean, required: false }`
    * `releasesOnly: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `type: { type: String, required: false }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`