# Ensure memory request is set

**org.openrewrite.kubernetes.MissingMemoryRequest**  
_A container is guaranteed to have as much memory as it requests, but is not allowed to use more memory than the limit set. This configuration may save resources and prevent an attack on an exploited container._

### Tags

* kubernetes

## Recipe list

* [Missing configuration](../kubernetes/search/findresourcemissingconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/containers/resources/requests/memory
