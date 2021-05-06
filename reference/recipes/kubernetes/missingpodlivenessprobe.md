# Ensure liveness probe is configured

**org.openrewrite.kubernetes.MissingPodLivenessProbe**  
_The kubelet uses liveness probes to know when to schedule restarts for containers. Restarting a container in a deadlock state can help to make the application more available, despite bugs._

### Tags

* kubernetes

## Recipe list

* [Missing configuration](../kubernetes/search/findresourcemissingconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/containers/livenessProbe
