# Ensure memory limits are set

**org.openrewrite.kubernetes.MissingMemoryLimits**  
_With no limit set, kubectl allocates more and more memory to the container until it runs out._

### Tags

* kubernetes

## Recipe list

* [Missing configuration](search/findresourcemissingconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/containers/resources/limits/memory

