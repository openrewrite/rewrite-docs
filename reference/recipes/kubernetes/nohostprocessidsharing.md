# No host process ID sharing

**org.openrewrite.kubernetes.NoHostProcessIdSharing**  
_Sharing the host process ID namespace breaks the isolation between container images and can make processes visible to other containers in the pod. This includes all information in the /proc directory, which can sometimes include passwords or keys, passed as environment variables._

### Tags

* kubernetes

## Recipe list

* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/hostPID
  * value: hostPID: false
