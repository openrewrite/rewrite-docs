# Add Kubernetes configuration

**org.openrewrite.kubernetes.AddConfiguration**  
_Add default required configuration when it is missing._

### Options

* apiVersion: String
* resourceKind: String!
  * The Kubernetes resource type the configured is required on.
* configurationPath: String!
  * An XPath expression to locate Kubernetes configuration. Must be an absolute path.
* value: String!
  * The configuration that is added when necessary, including the key.

