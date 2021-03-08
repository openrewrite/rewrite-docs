# Mockito 3.x migration from 1.x

**org.openrewrite.java.testing.Mockito1to3Migration**  
_Spring Boot 2.x requires upgrading from Mockito 1.x to 3.x._

## Recipe list

* [Change type](../changetype.md)
  * oldFullyQualifiedTypeName: org.mockito.MockitoAnnotations.Mock
  * newFullyQualifiedTypeName: org.mockito.Mock
* [Change method name](../changemethodname.md)
  * methodPattern: org.mockito.Matchers anyVararg\(\)
  * newMethodName: any
* [Change type](../changetype.md)
  * oldFullyQualifiedTypeName: org.mockito.Matchers
  * newFullyQualifiedTypeName: org.mockito.ArgumentMatchers
* [Change method name](../changemethodname.md)
  * methodPattern: org.mockito.invocation.InvocationOnMock getArgumentAt\(int, java.lang.Class\)
  * newMethodName: getArgument
* [Change type](../changetype.md)
  * oldFullyQualifiedTypeName: org.mockito.runners.MockitoJUnitRunner
  * newFullyQualifiedTypeName: org.mockito.junit.MockitoJUnitRunner
* [Cleanup Mockito Imports](mockito/cleanupmockitoimports.md)
* [MockUtils To Static](mockito/mockutilstostatic.md)

