# Kubernetes best practices

**org.openrewrite.kubernetes.KubernetesBestPractices**  
_Applies best practices to Kubernetes manifests._

### Tags

* kubernetes

## Recipe list

* [Ensure liveness probe is configured](../kubernetes/missingpodlivenessprobe.md)
* [Ensure readiness probe is configured](../kubernetes/missingpodreadinessprobe.md)
* [Ensure CPU request is set](../kubernetes/missingcpurequest.md)
* [Ensure CPU limits are set](../kubernetes/missingcpulimits.md)
* [Ensure memory request is set](../kubernetes/missingmemoryrequest.md)
* [Ensure memory limits are set](../kubernetes/missingmemorylimits.md)
* [No privileged containers](../kubernetes/noprivilegedcontainers.md)
* [Ensure lifecycle rule on `StorageBucket`](../kubernetes/lifecycleruleonstoragebucket.md)
* [No host process ID sharing](../kubernetes/nohostprocessidsharing.md)
* [No host IPC sharing](../kubernetes/nohostipcsharing.md)
* [No root containers](../kubernetes/norootcontainers.md)
* [Ensure image pull policy is `Always`](../kubernetes/imagepullpolicyalways.md)
* [No privilege escalation](../kubernetes/noprivilegeescalation.md)
* [No host network sharing](../kubernetes/nohostnetworksharing.md)
* [Read-only root filesystem](../kubernetes/readonlyrootfilesystem.md)
* [Limit root capabilities in a container](../kubernetes/limitcontainercapabilities.md)
