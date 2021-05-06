# Read-only root filesystem

**org.openrewrite.kubernetes.ReadOnlyRootFilesystem**  
_Using an immutable root filesystem and a verified boot mechanism prevents against attackers from "owning" the machine through permanent local changes._

### Tags

* kubernetes

## Recipe list

* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/containers/securityContext/readOnlyRootFilesystem
  * value: readOnlyRootFilesystem: false
