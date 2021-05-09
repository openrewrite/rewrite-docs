# Include an assertion in tests

**org.openrewrite.java.testing.cleanup.TestsShouldIncludeAssertions**  
_For tests not having any assertions, wrap the statements with JUnit Jupiter's `Assertions#assertThrowDoesNotThrow(..)`._

## Options

* assertions: List!
  * List of fully qualified classes and or methods used for identifying assertion statements.

