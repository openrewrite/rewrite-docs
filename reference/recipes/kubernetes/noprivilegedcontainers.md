# No privileged containers

**org.openrewrite.kubernetes.NoPrivilegedContainers**  
_Privileged containers are containers that have all of the root capabilities of a host machine, allowing access to resources that are not accessible in ordinary containers._

### Tags

* kubernetes

## Recipe list

* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * resourceKind: PodSecurityPolicy
  * configurationPath: /spec/privileged
  * value: privileged: false
