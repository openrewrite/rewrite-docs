# Use Mockito JUnit Jupiter extension

**org.openrewrite.java.testing.junit5.UseMockitoExtension**  
_Migrate uses of `@RunWith(MockitoJUnitRunner.class)` \(and similar annotations\) to `@ExtendWith(MockitoExtension.class)`._

### Tags

* junit
* testing
* mockito

## Recipe list

* [JUnit4 @RunWith to JUnit Jupiter @ExtendWith](runnertoextension.md)
  * runners: \[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner\]
  * extension: org.mockito.junit.jupiter.MockitoExtension

