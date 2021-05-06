# Limit root capabilities in a container

**org.openrewrite.kubernetes.LimitContainerCapabilities**  
_Limiting the admission of containers with capabilities ensures that only a small number of containers have extended capabilities outside the default range._

### Tags

* kubernetes

## Recipe list

* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/containers/securityContext/capabilities/drop
  * value: ALL
