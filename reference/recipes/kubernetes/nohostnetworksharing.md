# No host network sharing

**org.openrewrite.kubernetes.NoHostNetworkSharing**  
_When using the host network mode for a container, that container’s network stack is not isolated from the Docker host, so the container shares the host’s networking namespace and does not get its own IP-address allocation._

### Tags

* kubernetes

## Recipe list

* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/hostNetwork
  * value: hostNetwork: false
