# Ensure CPU limits are set

**org.openrewrite.kubernetes.MissingCpuLimits**  
_A system without managed quotas could eventually collapse due to inadequate resources for the tasks it bares._

### Tags

* kubernetes

## Recipe list

* [Missing configuration](../kubernetes/search/findresourcemissingconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/containers/resources/limits/cpu
