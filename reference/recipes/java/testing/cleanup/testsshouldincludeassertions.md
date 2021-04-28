# Tests should include assertions

**org.openrewrite.java.testing.cleanup.TestsShouldIncludeAssertions**  
_For Tests not having any assertions, wrap the statements with JUnit 5's Assertions.assertThrowDoesNotThrow (Sonar RSPEC-2699)._

### Options

* assertions: List!
  * List of fully qualified classes and or methods used for identifying assertion statements.

