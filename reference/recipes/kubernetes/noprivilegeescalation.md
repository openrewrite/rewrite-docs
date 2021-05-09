# No privilege escalation

**org.openrewrite.kubernetes.NoPrivilegeEscalation**  
_Does not allow a process to gain more privileges than its parent process._

### Tags

* kubernetes

## Recipe list

* [Add Kubernetes configuration](addconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/containers/securityContext/allowPrivilegeEscalation
  * value: allowPrivilegeEscalation: false

