# Ensure CPU request is set

**org.openrewrite.kubernetes.MissingCpuRequest**  
_If a container is created in a namespace that has a default CPU limit, and the container does not specify its own CPU limit, then the container is assigned the default CPU limit._

### Tags

* kubernetes

## Recipe list

* [Missing configuration](search/findresourcemissingconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/containers/resources/requests/cpu

