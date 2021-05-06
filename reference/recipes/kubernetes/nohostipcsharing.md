# No host IPC sharing

**org.openrewrite.kubernetes.NoHostIPCSharing**  
_Preventing sharing of host PID/IPC namespace, networking, and ports ensures proper isolation between Docker containers and the underlying host._

### Tags

* kubernetes

## Recipe list

* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/hostIPC
  * value: hostIPC: false
