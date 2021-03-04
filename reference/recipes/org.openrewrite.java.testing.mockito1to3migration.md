# Mockito 3.x migration from 1.x

**org.openrewrite.java.testing.Mockito1to3Migration**  
_Spring Boot 2.x requires upgrading from Mockito 1.x to 3.x._

## Recipe list

* [Change type](org.openrewrite.java.changetype.md)
  * oldFullyQualifiedTypeName: org.mockito.MockitoAnnotations.Mock
  * newFullyQualifiedTypeName: org.mockito.Mock
* [Change method name](org.openrewrite.java.changemethodname.md)
  * methodPattern: org.mockito.Matchers anyVararg\(\)
  * newMethodName: any
* [Change type](org.openrewrite.java.changetype.md)
  * oldFullyQualifiedTypeName: org.mockito.Matchers
  * newFullyQualifiedTypeName: org.mockito.ArgumentMatchers
* [Change method name](org.openrewrite.java.changemethodname.md)
  * methodPattern: org.mockito.invocation.InvocationOnMock getArgumentAt\(int, java.lang.Class\)
  * newMethodName: getArgument
* [Change type](org.openrewrite.java.changetype.md)
  * oldFullyQualifiedTypeName: org.mockito.runners.MockitoJUnitRunner
  * newFullyQualifiedTypeName: org.mockito.junit.MockitoJUnitRunner

