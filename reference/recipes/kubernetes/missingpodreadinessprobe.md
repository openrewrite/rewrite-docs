# Ensure readiness probe is configured

**org.openrewrite.kubernetes.MissingPodReadinessProbe**  
_Using the Readiness Probe ensures teams define what actions need to be taken to prevent failure and ensure recovery in case of unexpected errors._

### Tags

* kubernetes

## Recipe list

* [Missing configuration](../kubernetes/search/findresourcemissingconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/containers/readinessProbe
