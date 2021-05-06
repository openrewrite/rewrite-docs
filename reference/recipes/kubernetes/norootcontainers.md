# No root containers

**org.openrewrite.kubernetes.NoRootContainers**  
_Containers that run as root frequently have more permissions than their workload requires which, in case of compromise, could help an attacker further their exploits._

### Tags

* kubernetes

## Recipe list

* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * resourceKind: PodSecurityPolicy
  * configurationPath: /spec/runAsUser/rule
  * value: rule: MustRunAsNonRoot
