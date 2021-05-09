# Ensure image pull policy is Always

**org.openrewrite.kubernetes.ImagePullPolicyAlways**  
_Ensures the latest version of a tag is deployed each time._

### Tags

* kubernetes

## Recipe list

* [Add Kubernetes configuration](addconfiguration.md)
  * resourceKind: Pod
  * configurationPath: /spec/containers/imagePullPolicy
  * value: imagePullPolicy: Always

