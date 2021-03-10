# JUnit4 @RunWith to JUnit Jupiter @ExtendWith

**org.openrewrite.java.testing.junit5.RunnerToExtension**  
_Replace runners with the JUnit Jupiter extension equivalent._

### Options

* runners: List!
  * The fully qualified class names of the JUnit4 runners to replace. Sometimes several runners are replaced by a single JUnit Jupiter extension.
* extension: String!
  * The f8ully qualified class names of the JUnit Jupiter extension.

