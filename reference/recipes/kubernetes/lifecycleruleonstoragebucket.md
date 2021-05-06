# Ensure lifecycle rule on `StorageBucket`

**org.openrewrite.kubernetes.LifecycleRuleOnStorageBucket**  

### Tags

* kubernetes

## Recipe list

* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * apiVersion: storage.cnrm.cloud.google.com/v1beta1
  * resourceKind: StorageBucket
  * configurationPath: /spec/lifecycleRule
  * value: lifecycleRule:
  - action:
      type: Delete
    condition:
      age: 7
